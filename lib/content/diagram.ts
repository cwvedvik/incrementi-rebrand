import type { LocalizedString } from "@/lib/i18n/types";

/** Named hero variants for A/B — active pair selected below. */
export const HERO_VARIANTS = {
  B3: {
    no: "Fra data-kaos til målbar produktivitet.",
    en: "From data chaos to measurable productivity.",
  },
  A1: {
    no: "AI uten fundament eskalerer kaoset.",
    en: "AI without a foundation escalates the chaos.",
  },
  C1: {
    no: "Først fundamentet. Så AI som virker.",
    en: "Foundation first. Then AI that works.",
  },
  E2: {
    no: "Data i orden. AI i kontekst.",
    en: "Data in order. AI in context.",
  },
  B4: {
    no: "Ryddig datagrunnlag. AI som jobber for EBITDA.",
    en: "Clean data foundation. AI that works for EBITDA.",
  },
} as const satisfies Record<string, LocalizedString>;

export const SUB_VARIANTS = {
  G1_1: {
    no: "Vi samler fragmenterte systemer i en felles dataplattform og et robust kontekstlag. Da blir AI trygt og verdiskapende — og gevinstene realiserer seg i økt produktivitet, inntjening per ansatt og EBITDA.",
    en: "We bring fragmented systems into a shared data platform and a robust context layer. Then AI becomes safe and value-creating — and the gains materialize in higher productivity, earnings per employee, and EBITDA.",
  },
  G4_1: {
    no: "De fleste kjøper AI oppå kaos. Vi bygger fundamentet som gjør at AI ikke eskalerer problemet — men løser det.",
    en: "Most buy AI on top of chaos. We build the foundation that makes AI solve the problem — not escalate it.",
  },
  G2_3: {
    no: "Når fundamentet er på plass, lander innsikt, agenter og automatisering raskere — og forsterker hverandre i stedet for å spre kaos.",
    en: "Once the foundation is in place, insight, agents and automation land faster — compounding each other instead of spreading chaos.",
  },
} as const satisfies Record<string, LocalizedString>;

/** Hero copy for /platform — introduces the architecture diagram. */
export const DIAGRAM_HERO = {
  eyebrow: {
    no: "Plattformen",
    en: "The Platform",
  },
  title: {
    no: "Slik ser fundamentet ut.",
    en: "This is what the foundation looks like.",
  },
  subtitle: {
    no: "Et felles datagrunnlag, styrt kontekstlag og skinner for hele virksomheten — lag for lag. Klikk på et lag for å se hvordan det henger sammen.",
    en: "A shared data foundation, governed context layer and rails for the whole enterprise — layer by layer. Click a layer to see how it fits together.",
  },
  hint: {
    no: "Klikk på et lag for å lese mer",
    en: "Click a layer to learn more",
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

export const DIAGRAM_ZONES: DiagramZone[] = [
  {
    id: "enablement",
    label: {
      no: "Enablement",
      en: "Enablement",
    },
    tooltip: {
      no: "Ansatte eksperimenterer trygt — produksjon kun via plattformen",
      en: "Employees experiment safely — production only through the platform",
    },
    title: {
      no: "Fra idé til styrt produksjon",
      en: "From idea to governed production",
    },
    body: {
      no: "Ansatte kan bygge og teste agenter i en sandbox uten klientdata. Før noe går i produksjon passerer det en verdi- og risikoport — og bare løsninger som kjører på plattformen slipper videre.",
      en: "Employees can build and test agents in a sandbox with no client data. Before anything goes live it passes a value-and-risk gate — and only solutions that run on the platform move forward.",
    },
    why: {
      no: "Innovasjon uten å mangedoble risiko. Kapabiliteten blir i organisasjonen.",
      en: "Innovation without multiplying risk. Capability stays in the organisation.",
    },
  },
  {
    id: "governance",
    label: {
      no: "Governance — skinnene",
      en: "Governance — the rails",
    },
    tooltip: {
      no: "Tilgang, isolasjon og audit — håndhevet én gang for alt",
      en: "Access, isolation and audit — enforced once for everything",
    },
    title: {
      no: "Skinnene som holder alt trygt",
      en: "The rails that keep everything safe",
    },
    body: {
      no: "Tilgangskontroll, isolasjon mellom enheter, sporbarhet og modellfleksibilitet bygges inn i plattformen — ikke limt på hvert prosjekt. Nye domener og selskaper kobler seg på samme rails.",
      en: "Access control, unit isolation, lineage and model flexibility are built into the platform — not bolted onto every project. New domains and companies plug into the same rails.",
    },
    why: {
      no: "Vekst forblir lineær. Compliance og tillit skaleres med plattformen.",
      en: "Growth stays linear. Compliance and trust scale with the platform.",
    },
  },
  {
    id: "group",
    label: {
      no: "Konserninnsikt",
      en: "Group insight",
    },
    tooltip: {
      no: "Aggregert innsikt på tvers — rå klientdata krysser ikke opp",
      en: "Aggregated insight across units — raw client data never crosses up",
    },
    title: {
      no: "Innsikt på tvers uten å blande data",
      en: "Cross-company insight without mixing data",
    },
    body: {
      no: "Rå klient- og driftsdata blir i sitt domene. Oppover går bare aggregert, avidentifisert og samtykkebasert informasjon — til benchmarking og styring på konsernnivå.",
      en: "Raw client and operations data stays in its domain. Only aggregated, de-identified, consented information moves up — for benchmarking and group-level steering.",
    },
    why: {
      no: "Konserngevinster uten å ofre konfidensialitet eller tillit.",
      en: "Group-level gains without sacrificing confidentiality or trust.",
    },
  },
  {
    id: "agents",
    label: {
      no: "Use cases & agenter",
      en: "Use cases & agents",
    },
    tooltip: {
      no: "Domene for domene — delt fundament, separert innhold",
      en: "Domain by domain — shared foundation, separated content",
    },
    title: {
      no: "Agenter der verdien sitter",
      en: "Agents where the value sits",
    },
    body: {
      no: "Use cases rulles ut domene for domene og enhet for enhet — drift, produksjon, økonomi. Innholdet er isolert; skinnene er felles. Samme plattform, lavere marginalkostnad for hvert neste steg.",
      en: "Use cases roll out domain by domain and unit by unit — operations, production, finance. Content is isolated; the rails are shared. Same platform, lower marginal cost for every next step.",
    },
    why: {
      no: "Produktivitet der folk faktisk jobber — uten å bygge om arkitekturen hver gang.",
      en: "Productivity where people actually work — without rebuilding architecture every time.",
    },
  },
  {
    id: "context",
    label: {
      no: "Kontekstlag",
      en: "Context layer",
    },
    tooltip: {
      no: "MCP, RAG og kunnskapsgraf — felles kontekst under AI",
      en: "MCP, RAG and knowledge graph — shared context under AI",
    },
    title: {
      no: "Det felles kontekstlaget",
      en: "The shared context layer",
    },
    body: {
      no: "MCP gir styrt datatilgang. RAG henter relevant kontekst. Kunnskapsgrafen holder relasjoner og lineage. Sammen gjør de generiske modeller til AI som kjenner deres virkelighet — med kilder og revisjon.",
      en: "MCP governs data access. RAG retrieves the right context. The knowledge graph holds relations and lineage. Together they turn generic models into AI that knows your reality — with sources and audit.",
    },
    why: {
      no: "Uten dette laget er AI generisk støy. Med det blir hvert svar forankret og nyttig.",
      en: "Without this layer, AI is generic noise. With it, every answer is grounded and useful.",
    },
  },
  {
    id: "foundation",
    label: {
      no: "Datagrunnlag",
      en: "Data foundation",
    },
    tooltip: {
      no: "Fragmenterte systemer samles — ryddig grunnlag for alt over",
      en: "Fragmented systems brought together — clean ground for everything above",
    },
    title: {
      no: "Ryddig datagrunnlag",
      en: "A clean data foundation",
    },
    body: {
      no: "ERP, sensorer, dokumenter, API-er og metadata kobles som byggeklosser. Data blir der den lever der det er riktig — brokered og styrt inn i plattformen, ikke kopiert inn i et nytt kaos.",
      en: "ERP, sensors, documents, APIs and metadata connect as building blocks. Data stays where it lives when that is right — brokered and governed into the platform, not copied into new chaos.",
    },
    why: {
      no: "Dette er steget som stopper kaoset. Alt over — AI, agenter, innsikt — lander raskere fordi fundamentet er på plass.",
      en: "This is the step that stops the chaos. Everything above — AI, agents, insight — lands faster because the foundation is in place.",
    },
  },
];

export function getDiagramZone(id: DiagramZoneId): DiagramZone | undefined {
  return DIAGRAM_ZONES.find((z) => z.id === id);
}
