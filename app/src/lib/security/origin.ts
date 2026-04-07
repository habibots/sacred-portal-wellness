import { NextRequest } from 'next/server';

/**
 * Validates that a request originates from this site (basic CSRF defense).
 *
 * Checks the Origin header against NEXT_PUBLIC_SITE_URL. Use on POST/PUT/DELETE
 * routes that perform state-changing actions. Returns true if the request is
 * allowed, false otherwise.
 *
 * Notes:
 * - Cross-origin form POSTs send an Origin header that won't match.
 * - Server-to-server / curl / Postman requests have no Origin and are rejected.
 * - This is a defense-in-depth measure, not a replacement for proper auth.
 */
export function isAllowedOrigin(request: NextRequest): boolean {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    // If misconfigured, fail closed.
    return false;
  }

  const origin = request.headers.get('origin');
  if (!origin) {
    return false;
  }

  try {
    const allowed = new URL(siteUrl).origin;
    const incoming = new URL(origin).origin;
    return allowed === incoming;
  } catch {
    return false;
  }
}
