"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname() || "/";

  const setLocale = useCallback(
    (next: Locale) => {
      writeCookie(next);
      const { path } = parsePathname(pathname);
      router.push(localePath(path, next));
    },
    [pathname, router],
  );

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
