import crypto from 'crypto';

// ============================================
// RATE LIMITING
// ============================================

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
  }

  record.count += 1;

  if (record.count > maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  return { allowed: true, remaining: maxRequests - record.count, resetTime: record.resetTime };
}

// ============================================
// INPUT VALIDATION & SANITIZATION
// ============================================

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets (XSS prevention)
    .substring(0, 500); // Limit length
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
}

export function validateName(name: string): boolean {
  const cleanName = sanitizeInput(name);
  return cleanName.length >= 2 && cleanName.length <= 100;
}

export function validatePhone(phone: string): boolean {
  const cleanPhone = sanitizeInput(phone);
  return cleanPhone.length >= 7 && cleanPhone.length <= 20;
}

export function validateTextArea(text: string): boolean {
  const cleanText = sanitizeInput(text);
  return cleanText.length >= 10 && cleanText.length <= 2000;
}

export function validatePassword(password: string): boolean {
  // Min 8 chars, at least one uppercase, one number
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// ============================================
// CSRF TOKEN
// ============================================

export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function verifyCSRFToken(token: string, sessionToken: string): boolean {
  // In production, verify against stored token in session
  // This is simplified - use server sessions in real app
  return token && sessionToken && typeof token === 'string' && typeof sessionToken === 'string';
}

// ============================================
// PASSWORD HASHING
// ============================================

export async function hashPassword(password: string): Promise<string> {
  // Using Node's built-in crypto for basic hashing
  // In production, use bcrypt or argon2
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 100000, 64, 'sha512')
    .toString('hex');
  return `${salt}:${hash}`;
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const [salt, storedHash] = hash.split(':');
  const computedHash = crypto
    .pbkdf2Sync(password, salt, 100000, 64, 'sha512')
    .toString('hex');
  return computedHash === storedHash;
}

// ============================================
// JWT TOKEN
// ============================================

export function generateJWT(payload: Record<string, any>, expiresIn: number = 3600): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET not set');

  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const body = Buffer.from(
    JSON.stringify({
      ...payload,
      iat: now,
      exp: now + expiresIn,
    })
  ).toString('base64url');

  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64url');

  return `${header}.${body}.${signature}`;
}

export function verifyJWT(token: string): Record<string, any> | null {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;

  try {
    const [header, body, signature] = token.split('.');
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${header}.${body}`)
      .digest('base64url');

    if (signature !== expectedSignature) return null;

    const payload = JSON.parse(Buffer.from(body, 'base64url').toString());
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;

    return payload;
  } catch {
    return null;
  }
}

// ============================================
// SECURITY HEADERS
// ============================================

export function getSecurityHeaders() {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    'Content-Security-Policy':
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
  };
}

// ============================================
// ACTIVITY LOGGING
// ============================================

export function logActivity(
  action: string,
  details: Record<string, any>,
  timestamp: Date = new Date()
) {
  // Store in Supabase activity_logs table
  console.log(`[${timestamp.toISOString()}] ${action}:`, details);
  // TODO: Send to Supabase when database is ready
}
