import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, LOCALE_COOKIE, isLocale } from "./i18n/config";

function resolvePreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const locale = resolvePreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next/static, _next/image, favicon.ico, and files with extensions)
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
