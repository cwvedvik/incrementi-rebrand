/**
 * Kundelogoer for logostripen.
 *
 * Merkene i /public/media/clients/ er hvite monokrome silhuetter på
 * gjennomsiktig bunn, laget for det dypgrønne båndet. De er generert av
 * scripts/prepare-client-logos.mjs, som også gjør den optiske skaleringen,
 * så alle filene har samme lerret og kan vises i samme boks uten at noen
 * logo dominerer raden. Ikke rediger PNG-ene for hånd, kjør skriptet.
 */
export interface Client {
  name: string;
  logoSrc: string;
}

export const CLIENTS: Client[] = [
  { name: "Optimar", logoSrc: "/media/clients/optimar.png" },
  { name: "Europris", logoSrc: "/media/clients/europris.png" },
  { name: "Thon Hotels", logoSrc: "/media/clients/thon-hotels.png" },
  { name: "HRP", logoSrc: "/media/clients/hrp.png" },
  { name: "Accru Partners", logoSrc: "/media/clients/accru-partners.png" },
  { name: "Seagems", logoSrc: "/media/clients/seagems.png" },
  { name: "Takringen", logoSrc: "/media/clients/takringen.png" },
];
