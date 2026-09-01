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

  const isEnPath = pathname === "/en" || pathname.startsWith("/en/");
  // Preserve locale across internal rewrite re-entry (/en → /).
  const incoming = request.headers.get("x-locale");
  const locale = isEnPath || incoming === "en" ? "en" : "no";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  if (isEnPath) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    const res = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    res.cookies.set(LOCALE_COOKIE, "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    res.headers.set("x-locale", "en");
    return res;
  }

  const res = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Only pin Norwegian cookie on real Norwegian URL visits (not rewrite re-entry).
  if (locale === "no") {
    const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
    if (!isLocale(cookie) || cookie !== "no") {
      res.cookies.set(LOCALE_COOKIE, "no", {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
  } else {
    res.cookies.set(LOCALE_COOKIE, "en", {
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
