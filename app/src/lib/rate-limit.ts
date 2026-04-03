import { NextRequest } from 'next/server';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitResult {
  allowed: boolean;
  retryAfterMs: number;
}

function rateLimit(config: RateLimitConfig) {
  const { windowMs, maxRequests } = config;
  const requests = new Map<string, number[]>();

  function check(ip: string): RateLimitResult {
    const now = Date.now();
    const windowStart = now - windowMs;

    // Get existing timestamps and filter to current window
    const timestamps = (requests.get(ip) || []).filter((t) => t > windowStart);

    if (timestamps.length >= maxRequests) {
      const oldestInWindow = timestamps[0];
      const retryAfterMs = oldestInWindow + windowMs - now;
      requests.set(ip, timestamps);
      return { allowed: false, retryAfterMs };
    }

    timestamps.push(now);
    requests.set(ip, timestamps);

    // Probabilistic cleanup: ~1% of calls, prune stale IPs
    if (Math.random() < 0.01) {
      for (const [key, times] of requests) {
        const active = times.filter((t) => t > windowStart);
        if (active.length === 0) {
          requests.delete(key);
        } else {
          requests.set(key, active);
        }
      }
    }

    return { allowed: true, retryAfterMs: 0 };
  }

  return { check };
}

export function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export const checkoutLimiter = rateLimit({ windowMs: 60_000, maxRequests: 5 });
export const contactLimiter = rateLimit({ windowMs: 60_000, maxRequests: 3 });
export const catalogLimiter = rateLimit({ windowMs: 60_000, maxRequests: 30 });
