/**
 * Client logo strip — transparent marks in /public/media/clients/*-mark.png
 * (black mats knocked out; dark marks lifted for paper-band contrast).
 */
export interface Client {
  name: string;
  logoSrc: string;
}

export const CLIENTS: Client[] = [
  { name: "Sebastian", logoSrc: "/media/clients/sebastian-mark.png" },
  { name: "NRC Group", logoSrc: "/media/clients/nrc-group-mark.png" },
  { name: "Maritech", logoSrc: "/media/clients/maritech-mark.png" },
  { name: "Optimar", logoSrc: "/media/clients/optimar-mark.png" },
  { name: "Envo", logoSrc: "/media/clients/envo-mark.png" },
  { name: "Arktika Capital", logoSrc: "/media/clients/arktika-capital-mark.png" },
  { name: "Accru Partners", logoSrc: "/media/clients/accru-partners-mark.png" },
  { name: "4Subsea", logoSrc: "/media/clients/4subsea-mark.png" },
];
