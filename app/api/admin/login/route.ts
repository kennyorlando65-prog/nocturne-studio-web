import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword } from '@/lib/security';

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    if (!verifyPassword(password, ADMIN_PASSWORD_HASH)) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    const token = Buffer.from(`admin:${Date.now()}`).toString('base64');

    const response = NextResponse.json(
      { success: true, token, message: 'Login successful' },
      { status: 200 }
    );

    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400,
    });

    return response;
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
       }
