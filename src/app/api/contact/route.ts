import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send notification email to the business owner
    // Using a simple fetch to a free email service (Formspree-style)
    // For now, we'll store it and send via the business email
    const mailtoBody = `
New Contact Form Submission
---
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
---
Sent from sacredportalwellness.com
    `.trim();

    // Log the submission (visible in PM2 logs)
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log(mailtoBody);
    console.log('=== END SUBMISSION ===');

    // For production email delivery, we'll use the Square customer directory
    // to track inquiries. For now, submissions are logged to PM2.
    // To view: ssh into server and run `pm2 logs sacred-portal`

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
