import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema, sanitizeString } from '@/lib/validation/schemas';
import { contactLimiter, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = getClientIp(request);
  const limit = contactLimiter.check(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again shortly.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) },
      }
    );
  }

  try {
    const body = await request.json();

    // Validate input with Zod
    const parsed = ContactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Sanitize all fields
    const name = sanitizeString(parsed.data.name);
    const email = sanitizeString(parsed.data.email);
    const subject = sanitizeString(parsed.data.subject);
    const message = sanitizeString(parsed.data.message);

    // Log the sanitized submission (visible in PM2 logs)
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('=== END SUBMISSION ===');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
