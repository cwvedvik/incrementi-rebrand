import type { Locale } from "./config";

export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export function t(copy: LocalizedString, locale: Locale): string {
  return copy[locale] ?? copy.no;
}

export function tList(copy: LocalizedStringArray, locale: Locale): string[] {
  return copy[locale] ?? copy.no;
}
