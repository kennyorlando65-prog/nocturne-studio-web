import { NextRequest, NextResponse } from 'next/server';
import { verifyJWT, getSecurityHeaders } from '@/lib/security';
import { getContactSubmissions, updateSubmissionStatus, getSubmissionStats } from '@/lib/supabase';

// ============================================
// MIDDLEWARE: Verify JWT token
// ============================================
function verifyAdminToken(request: NextRequest): { valid: boolean; error?: string } {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return { valid: false, error: 'Missing authentication token' };
  }

  const payload = verifyJWT(token);
  if (!payload || payload.role !== 'admin') {
    return { valid: false, error: 'Invalid or expired token' };
  }

  return { valid: true };
}

// ============================================
// GET: Fetch submissions
// ============================================
export async function GET(request: NextRequest) {
  try {
    // Verify token
    const auth = verifyAdminToken(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: 401, headers: getSecurityHeaders() }
      );
    }

    // Get query parameters
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const page = parseInt(url.searchParams.get('page') || '1');
    const offset = (page - 1) * limit;

    // Validate parameters
    if (limit > 100) {
      return NextResponse.json(
        { success: false, error: 'Limit cannot exceed 100' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // Fetch submissions
    const result = await getContactSubmissions(limit, offset);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500, headers: getSecurityHeaders() }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: result.data,
        pagination: {
          page,
          limit,
          total: result.count,
          pages: Math.ceil((result.count || 0) / limit),
        },
      },
      { status: 200, headers: getSecurityHeaders() }
    );
  } catch (error: any) {
    console.error('Admin submissions error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}

// ============================================
// PUT: Update submission status
// ============================================
export async function PUT(request: NextRequest) {
  try {
    // Verify token
    const auth = verifyAdminToken(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: 401, headers: getSecurityHeaders() }
      );
    }

    const body = await request.json();
    const { id, status, notes } = body;

    // Validate input
    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    if (!['new', 'contacted', 'closed'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // Update submission
    const result = await updateSubmissionStatus(id, status, notes);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500, headers: getSecurityHeaders() }
      );
    }

    return NextResponse.json(
      { success: true, data: result.data },
      { status: 200, headers: getSecurityHeaders() }
    );
  } catch (error: any) {
    console.error('Admin update error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update submission' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}

// ============================================
// GET STATS: Fetch dashboard statistics
// ============================================
export async function HEAD(request: NextRequest) {
  try {
    // Verify token
    const auth = verifyAdminToken(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: 401, headers: getSecurityHeaders() }
      );
    }

    // Fetch stats
    const result = await getSubmissionStats();

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500, headers: getSecurityHeaders() }
      );
    }

    return NextResponse.json(
      { success: true, data: result.data },
      { status: 200, headers: getSecurityHeaders() }
    );
  } catch (error: any) {
    console.error('Admin stats error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch statistics' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}
