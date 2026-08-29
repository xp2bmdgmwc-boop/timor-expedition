import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ru', 'en']
const defaultLocale = 'ru'

function getLocale(request: NextRequest) {
  // Check if user has a language preference cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Simple locale detection based on Accept-Language
  const acceptLang = request.headers.get('accept-language') || ''
  if (acceptLang.toLowerCase().includes('en')) {
    return 'en'
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignore static files, images, and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // If the URL is explicitly /ru, redirect to / to keep the URL clean
    if (pathname === '/ru' || pathname.startsWith('/ru/')) {
      const newPathname = pathname.replace(/^\/ru/, '') || '/'
      return NextResponse.redirect(new URL(newPathname, request.url))
    }
    return NextResponse.next()
  }

  // If no locale is in the URL, it's either the default locale (ru) or needs a redirect to /en
  const locale = getLocale(request)

  if (locale === 'en') {
    // Redirect English users to /en
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }

  // Rewrite Russian users to /ru internally so app/[lang] can handle it
  return NextResponse.rewrite(new URL(`/ru${pathname}`, request.url))
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
}
