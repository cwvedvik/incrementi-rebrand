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
      no: "En moderne lakehouse-plattform — Microsoft Fabric, Azure eller Databricks, tilpasset deres estate. Data først, lavest eierkostnad, koble hva som helst som byggekloss.",
      en: "A modern lakehouse platform — Microsoft Fabric, Azure or Databricks, matched to your estate. Data first, lowest TCO, connect anything as a building block.",
    },
  },
  {
    id: "products",
    icon: "os",
    k: { no: "Produkter", en: "Products" },
    h: { no: "Operativsystemet", en: "The operating system" },
    p: {
      no: "Appene mannskap, drift, ledelse og kunder faktisk bruker — bygget i produksjonsinkrementer på åpen teknologi som .NET, React og OpenBridge.",
      en: "The apps your crew, operations, leadership and customers actually use — built in production increments on open technology like .NET, React and OpenBridge.",
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
      no: "MCP, RAG og en kunnskapsgraf slik at AI jobber på deres data, i deres virkelighet, med kilder og revisjon.",
      en: "MCP, RAG and a knowledge graph so AI works on your data, in your reality, with sources and audit.",
    },
  },
  {
    id: "capability",
    icon: "agents",
    k: { no: "Kapabilitet", en: "Capability" },
    h: { no: "Agent-kapabilitet", en: "Agent enablement" },
    p: {
      no: "Ansatte bygger og drifter egne agenter — kapabiliteten blir i organisasjonen.",
      en: "Your employees build and operate their own agents — the capability stays in the organisation.",
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
