export const LOCALES = ["no", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "no";
export const LOCALE_COOKIE = "incrementi_locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "no" || value === "en";
}

export function htmlLang(locale: Locale): string {
  return locale === "no" ? "nb" : "en";
}

/** Strip /en prefix; return locale + pathname without locale. */
export function parsePathname(pathname: string): {
  locale: Locale;
  path: string;
} {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3) || "/";
    return { locale: "en", path: rest.startsWith("/") ? rest : `/${rest}` };
  }
  return { locale: "no", path: pathname || "/" };
}

/** Build a locale-aware href. Norwegian = no prefix. */
export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") {
    if (clean === "/") return "/en";
    return `/en${clean}`;
  }
  return clean;
}
