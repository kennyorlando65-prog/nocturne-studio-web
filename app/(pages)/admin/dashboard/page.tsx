'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { COLORS } from '@/lib/constants';
import { supabase } from '@/lib/supabase';

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        router.push('/admin/login');
        return;
      }
      fetchSubmissions();
    };
    checkAuth();
  }, [router]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setSubmissions(submissions.filter((s) => s.id !== id));
      setDeleteId(null);
    } catch (err) {
      console.error('Error deleting submission:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: COLORS.dark,
        }}
      >
        <p style={{ color: COLORS.textMuted }}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.dark, padding: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: `1px solid ${COLORS.border}`,
          }}
        >
          <h1
            style={{
              fontSize: '28px',
              color: COLORS.white,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            style={{
              background: COLORS.gold,
              color: COLORS.dark,
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              background: COLORS.darkGray,
              border: `1px solid ${COLORS.border}`,
              padding: '24px',
              borderRadius: '4px',
            }}
          >
            <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
              Total Submissions
            </p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.gold }}>
              {submissions.length}
            </p>
          </div>
          <div
            style={{
              background: COLORS.darkGray,
              border: `1px solid ${COLORS.border}`,
              padding: '24px',
              borderRadius: '4px',
            }}
          >
            <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
              This Month
            </p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.gold }}>
              {submissions.filter((s) => {
                const date = new Date(s.created_at);
                const now = new Date();
                return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
              }).length}
            </p>
          </div>
        </div>

        {/* Submissions Table */}
        <div
          style={{
            background: COLORS.darkGray,
            border: `1px solid ${COLORS.border}`,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, fontWeight: 'bold' }}>
                  Name
                </th>
                <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, fontWeight: 'bold' }}>
                  Email
                </th>
                <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, fontWeight: 'bold' }}>
                  Message
                </th>
                <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, fontWeight: 'bold' }}>
                  Date
                </th>
                <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold, fontWeight: 'bold' }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: '24px', textAlign: 'center', color: COLORS.textMuted }}>
                    No submissions yet
                  </td>
                </tr>
              ) : (
                submissions.map((submission) => (
                  <tr
                    key={submission.id}
                    style={{
                      borderBottom: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <td style={{ padding: '12px', color: COLORS.text }}>
                      {submission.name}
                    </td>
                    <td style={{ padding: '12px', color: COLORS.text }}>
                      {submission.email}
                    </td>
                    <td style={{ padding: '12px', color: COLORS.text, maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {submission.message}
                    </td>
                    <td style={{ padding: '12px', color: COLORS.textMuted, fontSize: '12px' }}>
                      {new Date(submission.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '12px' }}>
                      {deleteId === submission.id ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => handleDelete(submission.id)}
                            style={{
                              background: '#d32f2f',
                              color: 'white',
                              border: 'none',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              cursor: 'pointer',
                            }}
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeleteId(null)}
                            style={{
                              background: COLORS.border,
                              color: COLORS.text,
                              border: 'none',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              cursor: 'pointer',
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteId(submission.id)}
                          style={{
                            background: 'transparent',
                            color: COLORS.gold,
                            border: `1px solid ${COLORS.gold}`,
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                          }}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
                    }
