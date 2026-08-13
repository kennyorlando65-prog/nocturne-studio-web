import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials');
}

// Client for browser (read-only, anon key)
export const supabase = createClient(supabaseUrl, supabaseKey);

// Server client (full access, service role key)
export const supabaseServer = createClient(supabaseUrl, serviceRoleKey || supabaseKey);

// ============================================
// DATABASE FUNCTIONS
// ============================================

export async function insertContactSubmission(data: {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}) {
  try {
    const { data: submission, error } = await supabaseServer
      .from('contact_submissions')
      .insert([
        {
          ...data,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: submission };
  } catch (error: any) {
    console.error('Database error:', error);
    return { success: false, error: error.message };
  }
}

export async function getContactSubmissions(limit: number = 50, offset: number = 0) {
  try {
    const { data, count, error } = await supabaseServer
      .from('contact_submissions')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return { success: true, data, count };
  } catch (error: any) {
    console.error('Database error:', error);
    return { success: false, error: error.message };
  }
}

export async function updateSubmissionStatus(
  id: string,
  status: 'new' | 'contacted' | 'closed',
  notes?: string
) {
  try {
    const { data, error } = await supabaseServer
      .from('contact_submissions')
      .update({ status, notes, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error: any) {
    console.error('Database error:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteSubmission(id: string) {
  try {
    const { error } = await supabaseServer.from('contact_submissions').delete().eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Database error:', error);
    return { success: false, error: error.message };
  }
}

export async function getSubmissionStats() {
  try {
    const { data, error } = await supabaseServer
      .from('contact_submissions')
      .select('status, projectType, budget');

    if (error) throw error;

    const stats = {
      total: data?.length || 0,
      new: data?.filter((d: any) => d.status === 'new').length || 0,
      contacted: data?.filter((d: any) => d.status === 'contacted').length || 0,
      closed: data?.filter((d: any) => d.status === 'closed').length || 0,
      byType: {} as Record<string, number>,
      byBudget: {} as Record<string, number>,
    };

    data?.forEach((submission: any) => {
      stats.byType[submission.projectType] = (stats.byType[submission.projectType] || 0) + 1;
      stats.byBudget[submission.budget] = (stats.byBudget[submission.budget] || 0) + 1;
    });

    return { success: true, data: stats };
  } catch (error: any) {
    console.error('Database error:', error);
    return { success: false, error: error.message };
  }
}

export async function logAdminActivity(action: string, details: Record<string, any>) {
  try {
    await supabaseServer.from('admin_activity_logs').insert([
      {
        action,
        details: JSON.stringify(details),
        timestamp: new Date().toISOString(),
      },
    ]);
  } catch (error: any) {
    console.error('Failed to log activity:', error);
  }
}
