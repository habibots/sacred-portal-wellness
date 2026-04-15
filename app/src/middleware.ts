import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else {
    response.headers.set(
      'Cache-Control',
      'public, max-age=0, must-revalidate, s-maxage=0',
    );
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/image).*)'],
};
