import { NextRequest, NextResponse } from 'next/server';
import {
  checkRateLimit,
  sanitizeInput,
  validateEmail,
  validateName,
  validateTextArea,
  getSecurityHeaders,
} from '@/lib/security';
import { insertContactSubmission } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // ============================================
    // SECURITY: Rate limiting
    // ============================================
    const clientIp = request.headers.get('x-forwarded-for') || request.ip || 'unknown';
    const rateLimit = checkRateLimit(
      `contact:${clientIp}`,
      3, // Max 3 submissions
      3600000 // Per hour
    );

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429, headers: getSecurityHeaders() }
      );
    }

    // ============================================
    // SECURITY: Parse and validate request
    // ============================================
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // ============================================
    // VALIDATION: Sanitize inputs
    // ============================================
    const name = sanitizeInput(body.name);
    const email = sanitizeInput(body.email);
    const company = body.company ? sanitizeInput(body.company) : '';
    const projectType = sanitizeInput(body.projectType || '');
    const budget = sanitizeInput(body.budget || '');
    const timeline = sanitizeInput(body.timeline || '');
    const message = sanitizeInput(body.message);

    // ============================================
    // VALIDATION: Field-specific validation
    // ============================================
    if (!validateName(name)) {
      return NextResponse.json(
        { success: false, error: 'Invalid name' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    if (!validateTextArea(message)) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 2000 characters' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // ============================================
    // SECURITY: Check for spam patterns
    // ============================================
    const spamPatterns = [
      /viagra|cialis|casino|lottery|prize|winner/gi,
      /click here|buy now|limited time/gi,
      /(http|https):\/\/[^\s]+/g, // URLs
    ];

    const messageToCheck = `${name} ${message}`;
    for (const pattern of spamPatterns) {
      if (pattern.test(messageToCheck)) {
        // Log suspicious activity but don't reject (they might be legitimate)
        console.warn(`Potential spam detected from ${clientIp}`);
      }
    }

    // ============================================
    // DATABASE: Store submission
    // ============================================
    const result = await insertContactSubmission({
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to save submission' },
        { status: 500, headers: getSecurityHeaders() }
      );
    }

    // ============================================
    // SUCCESS: Send confirmation response
    // ============================================
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We received your message. We will contact you within 24 hours.',
      },
      { status: 201, headers: getSecurityHeaders() }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}

// Security headers for all responses
export const metadata = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
};
