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
      no: "OT- og sensordata, fragmenterte systemer, vekst gjennom oppkjøp. Vi rydder kaoset og bygger fundamentet som får flåte, anlegg og operasjon til å snakke sammen — trygt nok for AI som faktisk løfter produktiviteten.",
      en: "OT/sensor data, fragmented systems, growth by acquisition. We clear the chaos and build the foundation that lets fleet, sites and operations speak — safely enough for AI that actually lifts productivity.",
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
      no: "Drift på tvers av anlegg, spredte data, og potensial i prediktivt vedlikehold. Data først — ellers eskalerer AI kaoset. Med plattformen på plass lander hver ny integrasjon raskere enn den forrige.",
      en: "Multi-site operations, spread data, predictive-maintenance upside. Data first — otherwise AI escalates the chaos. With the platform in place, every new integration lands faster than the last.",
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
      no: "Compliance-tunge, dokumentintensive arbeidsflyter. Først felles datagrunnlag og styrt kontekstlag — deretter AI og agenter med sporbarhet og menneske i loopen, slik at effektiviteten lander i driften.",
      en: "Compliance-bound, document-heavy workflows. First a shared data foundation and governed context layer — then AI and agents with audit trails and humans in the loop, so efficiency lands in operations.",
    },
    clients: [],
    caseSlugs: [],
  },
];
