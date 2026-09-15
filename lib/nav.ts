import { homeNav } from "@/lib/content/home";

/** Homepage section anchors (primary IA). */
export const HOME_ANCHORS = [
  { href: "/#slik-jobber-vi", key: "journey" as const, id: "slik-jobber-vi" },
  { href: "/#hva-vi-leverer", key: "deliver" as const, id: "hva-vi-leverer" },
  { href: "/#hvorfor-oss", key: "why" as const, id: "hvorfor-oss" },
  { href: "/#om-oss", key: "about" as const, id: "om-oss" },
  { href: "/#faq", key: "faq" as const, id: "faq" },
] as const;

type PageNavItem = {
  href: string;
  key: keyof typeof homeNav;
};

/** Secondary page links (platform + results temporarily hidden). */
export const PAGE_NAV: readonly PageNavItem[] = [];

export { homeNav };
