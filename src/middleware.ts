import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Bypass Next.js internal requests, API routes, Turbopack HMR, static assets, and subrequests
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/__next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    request.headers.has('x-middleware-subrequest')
  ) {
    return NextResponse.next();
  }

  // 2. Check if the pathname already contains a supported locale prefix
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // If URL contains a supported locale prefix, allow request to proceed without redirection
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 3. If no locale prefix is present, redirect to the default locale
  const locale = i18n.defaultLocale;
  const redirectUrl = new URL(
    `/${locale}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`,
    request.url
  );

  return NextResponse.redirect(redirectUrl);
}

// Export proxy function for Next.js 16 compatibility
export const proxy = middleware;

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - _next/development (Turbopack dev / HMR)
     * - Metadata files (favicon.ico, sitemap.xml, robots.txt, manifest.json)
     * - Any static assets with file extensions (e.g. .png, .jpg, .svg, .css, .js)
     */
    '/((?!api|_next/static|_next/image|_next/development|favicon\\.ico|sitemap\\.xml|robots\\.txt|manifest\\.json|.*\\..*).*)',
  ],
};