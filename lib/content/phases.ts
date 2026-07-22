import type { LocalizedString } from "@/lib/i18n/types";

export interface PhaseContent {
  n: string;
  h: LocalizedString;
  p: LocalizedString;
  icon: "direction" | "prototype" | "data" | "os" | "context" | "agents";
}

export const PHASES: PhaseContent[] = [
  {
    n: "00",
    icon: "direction",
    h: { no: "Retning", en: "Direction" },
    p: {
      no: "Én fokusert uke, forankret i en AI- og datastrategisesjon med ledelsen. Vi kartlegger hvor data-kaoset hemmer verdi, hvor produktiviteten kan løftes, og blir enige om målarkitektur og byggesekvens. Dere går ut med en plan hele reisen styres etter — uansett om vi fortsetter sammen.",
      en: "One focused week, anchored in an AI & data strategy session with your leadership. We map where data chaos holds back value, where productivity can lift, and agree the target architecture and build sequence. You leave with a plan the whole journey steers by — whether or not we continue together.",
    },
  },
  {
    n: "01",
    icon: "prototype",
    h: { no: "Prototype og scope", en: "Prototype & scope" },
    p: {
      no: "Klikkbare prototyper bygget med folkene deres på omtrent fire uker. Vi tester de risikable antakelsene på skjerm før store ressurser commits, og låser scope på evidens i stedet for estimater. Ingenting kastes — prototyper går rett over i produksjon.",
      en: "Clickable prototypes built with your people in roughly four weeks. We test the riskiest assumptions on screen before committing serious resources, and lock scope on evidence instead of estimates. Nothing is thrown away — prototypes convert directly into production work.",
    },
  },
  {
    n: "02",
    icon: "data",
    h: { no: "Datagrunnlag", en: "Data foundation" },
    p: {
      no: "Steget som stopper kaoset: en moderne dataplattform som gjør hvert system, hver sensor og hver kilde til en ren byggekloss. Vi bygger typisk på etablert lakehouse-teknologi — Microsoft Fabric, Azure, Databricks — tilpasset deres estate, aldri låst til våre. Data først gir lavest eierkostnad, og hvert senere steg — kontekst, AI, agenter — lander raskere.",
      en: "The step that stops the chaos: a modern data platform that turns every system, sensor and source into a clean building block. We typically build on established lakehouse technology — Microsoft Fabric, Azure, Databricks — matched to your estate, never locked to ours. Data first means the lowest TCO, and every later step — context, AI, agents — lands faster.",
    },
  },
  {
    n: "03",
    icon: "os",
    h: { no: "Operativsystemet", en: "The operating system" },
    p: {
      no: "Den operative ryggraden mannskap, drift, ledelse og kunder faktisk bruker — levert til produksjon modul for modul. Bygget på åpen, velprøvd teknologi som .NET, React og OpenBridge for maritime grensesnitt, integrert med plattformene dere allerede kjører. Hver modul er liten nok til å lande på uker og solid nok til å bære forretningen.",
      en: "The operational backbone your crew, operations, leadership and customers actually use — shipped to production module by module. Built on open, proven technology such as .NET, React and OpenBridge for maritime interfaces, integrated with the platforms you already run. Each module is small enough to land in weeks and solid enough to carry the business.",
    },
  },
  {
    n: "04",
    icon: "context",
    h: { no: "AI-kontekst og kontrollag", en: "AI context & control layer" },
    p: {
      no: "Det felles kontekstlaget som gjør virksomhets-AI trygg og nyttig: kunnskapsgraf over deres virkelige verden, styrt tilgang via MCP, og retrieval som forankrer hvert svar i deres kilder. Roller, rettigheter, sporbarhet og revisjon er innebygd. Uten dette laget er AI generisk støy på siloer — med det blir AI en kraftmultiplikator for produktivitet.",
      en: "The shared context layer that makes enterprise AI safe and useful: a knowledge graph of your real world, governed access through MCP, and retrieval that grounds every answer in your sources. Roles, permissions, lineage and audit are built in. Without this layer, AI is generic noise on silos — with it, AI becomes a force multiplier for productivity.",
    },
  },
  {
    n: "05",
    icon: "agents",
    h: { no: "Agent-kapabilitet", en: "Agent enablement" },
    p: {
      no: "Vi legger kapabiliteten i hendene på folkene deres: ansatte designer, bygger og drifter egne agenter på det styrte fundamentet under. Kapabiliteten blir i organisasjonen — og fortsetter å forsterke inntjening per ansatt etter at vi trekker oss tilbake.",
      en: "We put the capability in your people's hands: your employees design, build and operate their own agents on the governed foundation beneath them. The capability stays in your organisation — and keeps compounding earnings per employee after we step back.",
    },
  },
];
