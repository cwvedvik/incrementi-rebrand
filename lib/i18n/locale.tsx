"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  localePath,
  parsePathname,
  type Locale,
} from "./config";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  href: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  href: (path) => path,
});

function writeCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const setLocale = useCallback((next: Locale) => {
    writeCookie(next);
    // Full navigation. Middleware rewrites /en onto /, so a client
    // router.push stays on the current render and the language never changes.
    const { path } = parsePathname(window.location.pathname);
    const target = localePath(path, next);
    if (target === window.location.pathname) return;
    window.location.assign(target);
  }, []);

  const href = useCallback(
    (path: string) => localePath(path, locale),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, href }),
    [locale, setLocale, href],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
