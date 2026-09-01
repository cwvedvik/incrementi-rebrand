import type { LocalizedString } from "@/lib/i18n/types";

/** /platform marketing chapter — Kontrollag story aligned to homepage prototype. */

export const platform = {
  hero: {
    eyebrow: { no: "Kontrollag", en: "Control layer" },
    title: {
      no: "Hele virksomheten klar for AI.",
      en: "Your whole business ready for AI.",
    },
    lead: {
      no: "Et kontekst- og kontrollag der modellene forstår hvordan selskapet henger sammen, og all bruk skjer styrt.",
      en: "A context and control layer where models understand how your company fits together, and every use stays governed.",
    },
    cta: { no: "Se arkitekturen", en: "See the architecture" },
  },
  pillars: [
    {
      title: { no: "Roller", en: "Roles" },
      body: {
        no: "Hvem kan spørre, bygge og kjøre. Klare roller for mennesker og agenter.",
        en: "Who can ask, build and run. Clear roles for people and agents.",
      },
    },
    {
      title: { no: "Rettigheter", en: "Permissions" },
      body: {
        no: "Tilgang til data og verktøy er styrt. Sandbox uten klientdata før noe går i produksjon.",
        en: "Access to data and tools is governed. Sandbox without client data before anything goes live.",
      },
    },
    {
      title: { no: "Sporbarhet", en: "Traceability" },
      body: {
        no: "Hvert svar og hver handling kan spores til kilde, modell og beslutning.",
        en: "Every answer and action can be traced to source, model and decision.",
      },
    },
    {
      title: { no: "Kostnadskontroll", en: "Cost control" },
      body: {
        no: "Bruk, modeller og kapasitet synlig. Ingen skjulte token-regninger.",
        en: "Usage, models and capacity stay visible. No hidden token bills.",
      },
    },
  ],
  layers: {
    title: {
      no: "Tre lag. Ett fundament.",
      en: "Three layers. One foundation.",
    },
    lead: {
      no: "Kontrollaget bygger på data dere allerede har. Deretter kontekst. Deretter styrt bruk.",
      en: "The control layer builds on data you already have. Then context. Then governed use.",
    },
    items: [
      {
        title: { no: "Datagrunnlag", en: "Data foundation" },
        body: {
          no: "ERP, CRM, maskindata og fagsystemer kobles uten å lage nytt kaos.",
          en: "ERP, CRM, machine data and line-of-business systems connect without creating new chaos.",
        },
      },
      {
        title: { no: "Kontekstlag", en: "Context layer" },
        body: {
          no: "MCP, RAG og kunnskapsgraf gir modellene virksomhetens virkelighet, med kilder.",
          en: "MCP, RAG and knowledge graph give models your business reality, with sources.",
        },
      },
      {
        title: { no: "Styrt bruk", en: "Governed use" },
        body: {
          no: "Assistenter, automatisering og agenter kjører under samme skinner for roller, rettigheter og audit.",
          en: "Assistants, automation and agents run on the same rails for roles, permissions and audit.",
        },
      },
    ],
  },
  diagram: {
    title: {
      no: "Slik henger lagene sammen",
      en: "How the layers fit together",
    },
    lead: {
      no: "Klikk et lag for å lese mer. Arkitekturen er den samme uansett bransje.",
      en: "Click a layer to learn more. The architecture is the same across industries.",
    },
  },
} as const;

export type DiagramZoneId =
  | "enablement"
  | "governance"
  | "agents"
  | "context"
  | "foundation"
  | "group";

export interface DiagramZone {
  id: DiagramZoneId;
  label: LocalizedString;
  tooltip: LocalizedString;
  title: LocalizedString;
  body: LocalizedString;
  why: LocalizedString;
}

/** Zone deep-copy for the interactive diagram. */
export const DIAGRAM_ZONES: DiagramZone[] = [
  {
    id: "enablement",
    label: { no: "Trygg utprøving", en: "Safe enablement" },
    tooltip: {
      no: "Ansatte eksperimenterer trygt. Produksjon kun via plattformen.",
      en: "Employees experiment safely. Production only through the platform.",
    },
    title: {
      no: "Fra idé til styrt produksjon",
      en: "From idea to governed production",
    },
    body: {
      no: "Ansatte kan bygge og teste agenter i en sandbox uten klientdata. Før noe går i produksjon passerer det en verdi- og risikoport, og bare løsninger som kjører på plattformen slipper videre.",
      en: "Employees can build and test agents in a sandbox with no client data. Before anything goes live it passes a value-and-risk gate, and only solutions that run on the platform move forward.",
    },
    why: {
      no: "Innovasjon uten å mangedoble risiko. Kapabiliteten blir i organisasjonen.",
      en: "Innovation without multiplying risk. Capability stays in the organisation.",
    },
  },
  {
    id: "governance",
    label: { no: "Styringsskinner", en: "Governance rails" },
    tooltip: {
      no: "Tilgang, isolasjon og audit. Håndhevet én gang for alt.",
      en: "Access, isolation and audit. Enforced once for everything.",
    },
    title: {
      no: "Skinner som holder alt trygt",
      en: "Rails that keep everything safe",
    },
    body: {
      no: "Tilgangskontroll, isolasjon mellom enheter, sporbarhet og modellfleksibilitet bygges inn i plattformen, ikke limt på hvert prosjekt. Nye domener og selskaper kobler seg på samme skinner.",
      en: "Access control, unit isolation, lineage and model flexibility are built into the platform, not bolted onto every project. New domains and companies plug into the same rails.",
    },
    why: {
      no: "Vekst forblir lineær. Compliance og tillit skaleres med plattformen.",
      en: "Growth stays linear. Compliance and trust scale with the platform.",
    },
  },
  {
    id: "group",
    label: { no: "Konserninnsikt", en: "Group insight" },
    tooltip: {
      no: "Aggregert innsikt på tvers. Rå klientdata krysser ikke opp.",
      en: "Aggregated insight across units. Raw client data never crosses up.",
    },
    title: {
      no: "Innsikt på tvers uten å blande data",
      en: "Cross-company insight without mixing data",
    },
    body: {
      no: "Rå klient- og driftsdata blir i sitt domene. Oppover går bare aggregert, avidentifisert og samtykkebasert informasjon, til benchmarking og styring på konsernnivå.",
      en: "Raw client and operations data stays in its domain. Only aggregated, de-identified, consented information moves up, for benchmarking and group-level steering.",
    },
    why: {
      no: "Konserngevinster uten å ofre konfidensialitet eller tillit.",
      en: "Group-level gains without sacrificing confidentiality or trust.",
    },
  },
  {
    id: "agents",
    label: { no: "Use cases og agenter", en: "Use cases and agents" },
    tooltip: {
      no: "Domene for domene. Delt fundament, separert innhold.",
      en: "Domain by domain. Shared foundation, separated content.",
    },
    title: {
      no: "Agenter der verdien sitter",
      en: "Agents where the value sits",
    },
    body: {
      no: "Use cases rulles ut domene for domene og enhet for enhet: drift, produksjon, økonomi. Innholdet er isolert; skinnene er felles. Samme plattform, lavere marginalkostnad for hvert neste steg.",
      en: "Use cases roll out domain by domain and unit by unit: operations, production, finance. Content is isolated; the rails are shared. Same platform, lower marginal cost for every next step.",
    },
    why: {
      no: "Produktivitet der folk faktisk jobber, uten å bygge om arkitekturen hver gang.",
      en: "Productivity where people actually work, without rebuilding architecture every time.",
    },
  },
  {
    id: "context",
    label: { no: "Kontekstlag", en: "Context layer" },
    tooltip: {
      no: "MCP, RAG og kunnskapsgraf. Felles kontekst under AI.",
      en: "MCP, RAG and knowledge graph. Shared context under AI.",
    },
    title: {
      no: "Det felles kontekstlaget",
      en: "The shared context layer",
    },
    body: {
      no: "MCP gir styrt datatilgang. RAG henter relevant kontekst. Kunnskapsgrafen holder relasjoner og lineage. Sammen gjør de generiske modeller til AI som kjenner deres virkelighet, med kilder og revisjon.",
      en: "MCP governs data access. RAG retrieves the right context. The knowledge graph holds relations and lineage. Together they turn generic models into AI that knows your reality, with sources and audit.",
    },
    why: {
      no: "Uten dette laget er AI generisk støy. Med det blir hvert svar forankret og nyttig.",
      en: "Without this layer, AI is generic noise. With it, every answer is grounded and useful.",
    },
  },
  {
    id: "foundation",
    label: { no: "Datagrunnlag", en: "Data foundation" },
    tooltip: {
      no: "Fragmenterte systemer samles. Ryddig grunnlag for alt over.",
      en: "Fragmented systems brought together. Clean ground for everything above.",
    },
    title: {
      no: "Ryddig datagrunnlag",
      en: "A clean data foundation",
    },
    body: {
      no: "ERP, sensorer, dokumenter, API-er og metadata kobles som byggeklosser. Data blir der den lever der det er riktig, brokered og styrt inn i plattformen, ikke kopiert inn i et nytt kaos.",
      en: "ERP, sensors, documents, APIs and metadata connect as building blocks. Data stays where it lives when that is right, brokered and governed into the platform, not copied into new chaos.",
    },
    why: {
      no: "Dette er steget som stopper kaoset. Alt over lander raskere fordi fundamentet er på plass.",
      en: "This is the step that stops the chaos. Everything above lands faster because the foundation is in place.",
    },
  },
];

export function getDiagramZone(id: DiagramZoneId): DiagramZone | undefined {
  return DIAGRAM_ZONES.find((z) => z.id === id);
}

/** Chrome strings for the diagram UI (centralized, NO/EN). */
export const diagramChrome = {
  flowSteps: [
    { no: "Ansatte", en: "Employees" },
    { no: "Sandbox", en: "Sandbox" },
    { no: "Porten", en: "The Gate" },
  ],
  flowNote: {
    no: "Sandbox uten klientdata. Produksjon kun via plattformen.",
    en: "Sandbox with no client data. Production only via the platform.",
  },
  railsTitle: { no: "Styring", en: "Governance" },
  railsSub: { no: "Skinner", en: "Rails" },
  rails: [
    { no: "Tilgangskontroll", en: "Access control" },
    { no: "Enhetsisolasjon", en: "Unit isolation" },
    { no: "Audit og lineage", en: "Audit and lineage" },
    { no: "Modellfleksibilitet", en: "Model flexibility" },
  ],
  railsFoot: {
    no: "Håndhevet én gang, for alt",
    en: "Enforced once, for everything",
  },
  groupHead: {
    no: "Analyse og benchmarking på tvers",
    en: "Cross-company analytics and benchmarking",
  },
  boundary: {
    no: "Konfidensialitetsgrense: rådata krysser ikke opp",
    en: "Confidentiality boundary: raw data never crosses up",
  },
  agentsNote: {
    no: "Domene × enhet. Skinner delt.",
    en: "Domain × unit. Rails shared.",
  },
  domains: [
    { no: "Drift", en: "Ops" },
    { no: "Produksjon", en: "Production" },
    { no: "Økonomi", en: "Finance" },
  ],
  units: [
    { no: "Enhet A", en: "Unit A" },
    { no: "Enhet B", en: "Unit B" },
    { no: "Enhet C", en: "Unit C" },
  ],
  contextHead: {
    no: "Kontekstlag med delte skinner",
    en: "Context layer with shared rails",
  },
  contextParts: [
    { k: "MCP", no: "Styrt datatilgang", en: "Governed data access" },
    { k: "RAG", no: "Henter kontekst", en: "Retrieves context" },
    { k: "KG", no: "Relasjoner og lineage", en: "Relations and lineage" },
  ],
  foundationHead: {
    no: "Pålitelig datagrunnlag",
    en: "Reliable data foundation",
  },
  foundationNote: {
    no: "Data blir der den lever, brokered, ikke kopiert inn i kaos",
    en: "Data stays where it lives, brokered, not copied into chaos",
  },
  sources: [
    { no: "ERP / systemer", en: "ERP / systems" },
    { no: "Dokumenter", en: "Documents" },
    { no: "Sensorer / OT", en: "Sensors / OT" },
    { no: "API-er", en: "APIs" },
    { no: "Metadata", en: "Metadata" },
  ],
  whyLabel: {
    no: "Hvorfor det betyr noe",
    en: "Why it matters",
  },
} as const;

/** @deprecated Prefer `platform` + DIAGRAM_ZONES from this module. */
export const DIAGRAM_HERO = {
  eyebrow: platform.hero.eyebrow,
  title: platform.hero.title,
  subtitle: platform.hero.lead,
  hint: platform.diagram.lead,
} as const;
