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

    // Sanitize all fields. We do not log them — PII should never end up in
    // Worker logs that may be retained by Cloudflare or surfaced via Logpush.
    // When email delivery is wired up (Resend / Google Apps Script / etc.),
    // do it here using parsed.data + sanitizeString.
    sanitizeString(parsed.data.name);
    sanitizeString(parsed.data.email);
    sanitizeString(parsed.data.subject);
    sanitizeString(parsed.data.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
