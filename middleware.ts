import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale } from "@/lib/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand-strategy") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const locale = isEn ? "en" : "no";

  // Rewrite /en/... → /... so the same app routes serve both locales
  if (isEn) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    const res = NextResponse.rewrite(url);
    res.cookies.set(LOCALE_COOKIE, "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    res.headers.set("x-locale", "en");
    return res;
  }

  const res = NextResponse.next();
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  // Visiting a Norwegian URL pins locale to no (as-needed default)
  if (!isLocale(cookie) || cookie !== "no") {
    res.cookies.set(LOCALE_COOKIE, "no", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  res.headers.set("x-locale", locale);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
