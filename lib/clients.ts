/**
 * Client logo strip.
 * Rendered as styled wordmarks until real logo files arrive —
 * to swap, set `logoSrc` to an SVG/PNG path in /public and it will be
 * used instead of the wordmark text.
 */
export interface Client {
  name: string;
  logoSrc?: string;
}

export const CLIENTS: Client[] = [
  { name: "NRC Group" },
  { name: "Sebastian" },
  { name: "4Subsea" },
  { name: "Optimar" },
  { name: "Maritech" },
  { name: "Envo" },
];
