import type { LocalizedString } from "@/lib/i18n/types";

export interface Person {
  name: string;
  role: LocalizedString;
  photo?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  /** Placeholder initials when no photo */
  initials?: string;
  /** CSS object-position for non-studio crops */
  photoPosition?: string;
}

export const PEOPLE: Person[] = [
  {
    name: "Espen Slyngstad",
    role: { no: "Founding Partner", en: "Founding Partner" },
    photo:
      "/media/portraits/2026_Incrementi_EspenSlyngstad_fotoCRoka_114c2_kvadrat.jpg",
    email: "espen.slyngstad@incrementi.no",
    phone: "+47 934 00 825",
  },
  {
    name: "Camilla Fledsberg Vatne",
    role: { no: "Founding Partner", en: "Founding Partner" },
    photo:
      "/media/portraits/2026_Incrementi_CamillaFledsbergVatne_fotoCRoka_157c2_kvadrat.jpg",
  },
  {
    name: "Dag Martin Romslo",
    role: { no: "Partner", en: "Partner" },
    photo:
      "/media/portraits/2026_Incrementi_DagMartinRomslo_fotoCRoka_146c2_kvadrat.jpg",
  },
  {
    name: "Carl-Wilhelm Vedvik",
    role: { no: "Partner", en: "Partner" },
    photo:
      "/media/portraits/2026_Incrementi_CarlWilhelmVedvik_fotoCRoka_173c2_kvadrat.jpg",
  },
  {
    name: "Kristov Rishie Xavier",
    role: { no: "Partner", en: "Partner" },
    initials: "KX",
  },
  {
    name: "Enea Marie Jantsch",
    role: { no: "Project Coordinator", en: "Project Coordinator" },
    photo:
      "/media/portraits/2026_Incrementi_EneaJantsch_fotoCRoka_134c2_kvadrat.jpg",
  },
];
