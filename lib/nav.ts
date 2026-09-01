import { homeNav } from "@/lib/content/home";

/** Homepage section anchors (primary IA). */
export const HOME_ANCHORS = [
  { href: "/#slik-jobber-vi", key: "journey" as const, id: "slik-jobber-vi" },
  { href: "/#hva-vi-leverer", key: "deliver" as const, id: "hva-vi-leverer" },
  { href: "/#hvorfor-oss", key: "why" as const, id: "hvorfor-oss" },
  { href: "/#referanser", key: "references" as const, id: "referanser" },
  { href: "/#om-oss", key: "about" as const, id: "om-oss" },
  { href: "/#faq", key: "faq" as const, id: "faq" },
] as const;

/** Secondary page links kept from prior IA. */
export const PAGE_NAV = [
  { href: "/platform", key: "platform" as const },
  { href: "/results", key: "results" as const },
] as const;

export { homeNav };
