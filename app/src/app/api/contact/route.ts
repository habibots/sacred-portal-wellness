import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema, sanitizeString } from '@/lib/validation/schemas';
import { isAllowedOrigin } from '@/lib/security/origin';

export async function POST(request: NextRequest) {
  // CSRF defense: only accept requests from our own origin.
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
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
