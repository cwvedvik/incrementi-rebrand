import type { LocalizedString } from "@/lib/i18n/types";

export interface BuildLayer {
  id: string;
  icon: "data" | "os" | "context" | "agents" | "consulting";
  k: LocalizedString;
  h: LocalizedString;
  p: LocalizedString;
  wide?: boolean;
}

export const BUILD_LAYERS: BuildLayer[] = [
  {
    id: "foundation",
    icon: "data",
    k: { no: "Fundament", en: "Foundation" },
    h: {
      no: "Data- og integrasjonsplattform",
      en: "Data & integration platform",
    },
    p: {
      no: "Vi rydder data-kaoset: fragmenterte systemer blir byggeklosser i en felles dataplattform — Fabric, Azure eller Databricks, tilpasset deres estate. Uten dette laget eskalerer AI bare støyen. Med det lander hvert senere steg raskere — og eierkostnaden blir lavest.",
      en: "We clear data chaos: fragmented systems become building blocks in a shared data platform — Fabric, Azure or Databricks, matched to your estate. Without this layer, AI only escalates the noise. With it, every later step lands faster — at the lowest TCO.",
    },
  },
  {
    id: "products",
    icon: "os",
    k: { no: "Produkter", en: "Products" },
    h: { no: "Operativsystemet", en: "The operating system" },
    p: {
      no: "Appene mannskap, drift, ledelse og kunder faktisk bruker — bygget i produksjonsinkrementer på åpen teknologi som .NET, React og OpenBridge. Produktivitet i hverdagen, ikke bare i dashboards.",
      en: "The apps your crew, operations, leadership and customers actually use — built in production increments on open technology like .NET, React and OpenBridge. Productivity in the day-to-day, not only in dashboards.",
    },
  },
  {
    id: "intelligence",
    icon: "context",
    k: { no: "Intelligens", en: "Intelligence" },
    h: {
      no: "AI-kontekst og kontrollag",
      en: "AI context & control layer",
    },
    p: {
      no: "Det felles kontekstlaget: MCP, RAG og kunnskapsgraf slik at AI jobber på deres data, i deres virkelighet, med kilder og revisjon. Dette er laget som gjør AI nyttig — ikke generisk støy limt på siloer.",
      en: "The shared context layer: MCP, RAG and a knowledge graph so AI works on your data, in your reality, with sources and audit. This is the layer that makes AI useful — not generic noise bolted onto silos.",
    },
  },
  {
    id: "capability",
    icon: "agents",
    k: { no: "Kapabilitet", en: "Capability" },
    h: { no: "Agent-kapabilitet", en: "Agent enablement" },
    p: {
      no: "Ansatte bygger og drifter egne agenter på det styrte fundamentet — kapabiliteten blir i organisasjonen og løfter inntjening per ansatt, i stedet for å spre enda mer kaos.",
      en: "Your employees build and operate their own agents on the governed foundation — capability stays in the organisation and lifts earnings per employee, instead of spreading more chaos.",
    },
  },
  {
    id: "consulting",
    icon: "consulting",
    wide: true,
    k: { no: "Ved siden av reisen", en: "Alongside the journey" },
    h: {
      no: "Produktledelse og utviklingsrådgivning",
      en: "Product management & development consulting",
    },
    p: {
      no: "Senior produktledere og ingeniører inne i teamene deres — styrer veikart, leverer produkter og løfter leveransekapasitet, med 99X’ 650+ spesialister i ryggen.",
      en: "Senior product owners and engineers embedded in your teams — steering roadmaps, shipping products and raising delivery capability, with 99X's 650+ specialists behind them.",
    },
  },
];
