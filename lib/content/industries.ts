import type { LocalizedString } from "@/lib/i18n/types";

export interface IndustryContent {
  id: "maritime" | "industrial" | "finance";
  icon: "maritime" | "industrial" | "finance";
  k: LocalizedString;
  h: LocalizedString;
  p: LocalizedString;
  clients: string[];
  caseSlugs: string[];
}

export const INDUSTRIES: IndustryContent[] = [
  {
    id: "maritime",
    icon: "maritime",
    k: { no: "Maritim & ocean", en: "Maritime & ocean" },
    h: {
      no: "Fartøy, subsea, akvakultur",
      en: "Vessels, subsea, aquaculture",
    },
    p: {
      no: "OT- og sensordata, fragmenterte systemer, vekst gjennom oppkjøp. Vi bygger fundamentet som får flåte, anlegg og operasjon til å snakke sammen — trygt nok for AI.",
      en: "OT/sensor data, fragmented systems, growth by acquisition. We build the foundation that lets fleet, sites and operations speak — safely enough for AI.",
    },
    clients: ["ABYS", "Sebastian", "4Subsea", "Optimar"],
    caseSlugs: ["sebastian", "4subsea-optimar"],
  },
  {
    id: "industrial",
    icon: "industrial",
    k: { no: "Industri", en: "Industrial" },
    h: {
      no: "Infrastruktur, energi, field service",
      en: "Infrastructure, energy, field-service",
    },
    p: {
      no: "Drift på tvers av anlegg, spredte data, og potensial i prediktivt vedlikehold. Data først — så hver ny integrasjon lander raskere enn den forrige.",
      en: "Multi-site operations, spread data, predictive-maintenance upside. Data first — so every new integration lands faster than the last.",
    },
    clients: ["NRC Group", "Envo"],
    caseSlugs: ["nrc-group"],
  },
  {
    id: "finance",
    icon: "finance",
    k: {
      no: "Finans & profesjonelle tjenester",
      en: "Financial & professional",
    },
    h: {
      no: "Regnskap og finansfunksjoner",
      en: "Accounting, finance functions",
    },
    p: {
      no: "Compliance-tunge, dokumentintensive arbeidsflyter bygget for styrt AI og agenter — med sporbarhet og menneske i loopen.",
      en: "Compliance-bound, document-heavy workflows built for governed AI and agents — with audit trails and humans in the loop.",
    },
    clients: [],
    caseSlugs: [],
  },
];
