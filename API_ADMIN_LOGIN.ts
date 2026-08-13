import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, sanitizeInput, verifyPassword, generateJWT, getSecurityHeaders } from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    // ============================================
    // SECURITY: Rate limiting on login attempts
    // ============================================
    const clientIp = request.headers.get('x-forwarded-for') || request.ip || 'unknown';
    const rateLimit = checkRateLimit(
      `login:${clientIp}`,
      5, // Max 5 attempts
      900000 // Per 15 minutes
    );

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many login attempts. Please try again later.' },
        { status: 429, headers: getSecurityHeaders() }
      );
    }

    // ============================================
    // PARSE & VALIDATE REQUEST
    // ============================================
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password required' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // ============================================
    // SECURITY: Verify password
    // ============================================
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
    if (!adminPasswordHash) {
      console.error('ADMIN_PASSWORD_HASH not configured');
      return NextResponse.json(
        { success: false, error: 'Authentication service unavailable' },
        { status: 500, headers: getSecurityHeaders() }
      );
    }

    const sanitizedPassword = sanitizeInput(password);
    const isValidPassword = await verifyPassword(sanitizedPassword, adminPasswordHash);

    if (!isValidPassword) {
      // Log failed attempt but don't reveal which field is wrong
      console.warn(`Failed login attempt from ${clientIp}`);
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401, headers: getSecurityHeaders() }
      );
    }

    // ============================================
    // SECURITY: Generate JWT token
    // ============================================
    const token = generateJWT(
      {
        role: 'admin',
        ip: clientIp,
      },
      3600 // 1 hour expiration
    );

    // ============================================
    // SUCCESS: Return token
    // ============================================
    const response = NextResponse.json(
      {
        success: true,
        token,
        expiresIn: 3600,
      },
      { status: 200, headers: getSecurityHeaders() }
    );

    // Set secure HTTP-only cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/admin',
    });

    return response;
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}
