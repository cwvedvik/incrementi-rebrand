/**
 * Client case studies — result-oriented, numbers first.
 *
 * PLACEHOLDER NUMBERS: metrics marked with `confirm: true` are drawn from
 * internal material and MUST be confirmed (and ideally expanded with
 * NOK/hours figures) before public launch. Swap or extend freely — the
 * chat cards, /work index and /work/[slug] pages all render from here.
 */

export interface CaseMetric {
  value: string;
  label: string;
  /** Needs confirmation with the client before public use. */
  confirm?: boolean;
}

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  title: string;
  /** The one number that leads the card. */
  headline: CaseMetric;
  metrics: CaseMetric[];
  summary: string;
  challenge: string;
  built: string[];
  results: string[];
}

export const CASES: CaseStudy[] = [
  {
    slug: "nrc-group",
    client: "NRC Group",
    sector: "Industrial infrastructure",
    title: "A data platform that halves the cost of every next move",
    headline: {
      value: "<½",
      label: "cost of a new HR integration vs. the original estimate",
    },
    metrics: [
      {
        value: "<½",
        label: "HR-system integration landed at under half the original estimate",
      },
      {
        value: "1",
        label: "shared data platform across a multi-site, acquisitive group",
        confirm: true,
      },
    ],
    summary:
      "A modern data platform in production for one of the Nordics' largest rail and infrastructure groups — built so every new system, site and acquisition connects as a clean building block.",
    challenge:
      "Multi-site operations, growth by acquisition, and data spread across systems that never spoke to each other. Every integration was a project; every report was manual work.",
    built: [
      "A modern lakehouse data platform in production, hub-and-spoke architecture",
      "Integration patterns that turn each source system into a reusable building block",
      "Governed foundations ready for the AI context layer on top",
    ],
    results: [
      "A new HR-system integration was delivered at under half the original estimate — because the platform was already there",
      "Each connected source makes the next solution faster and cheaper: the compounding advantage, documented",
    ],
  },
  {
    slug: "sebastian",
    client: "Sebastian AS",
    sector: "Maritime & ocean",
    title: "Digital DP checklists piloting on vessels internationally",
    headline: {
      value: "100%",
      label: "of checks captured and documented, audit-ready",
      confirm: true,
    },
    metrics: [
      {
        value: "100%",
        label: "of checks captured and documented",
        confirm: true,
      },
      {
        value: "Int'l",
        label: "piloting on vessels internationally",
      },
    ],
    summary:
      "Digital dynamic-positioning checklists and audits for maritime operations — replacing paper and spreadsheets with a system the crew actually uses, now piloting internationally.",
    challenge:
      "Safety-critical DP checks lived on paper and in spreadsheets: slow to complete, hard to audit, impossible to learn from across the fleet.",
    built: [
      "Digital DP checklists and audit flows designed with the crews who run them",
      "Audit-ready records with full traceability per vessel and operation",
      "A foundation for fleet-wide insight into operations and compliance",
    ],
    results: [
      "Checks are captured completely and consistently, with audit trails by default",
      "The solution is piloting on vessels internationally",
    ],
  },
  {
    slug: "4subsea-optimar",
    client: "4Subsea · Optimar",
    sector: "Maritime & ocean",
    title: "From sensor data to decisions on Azure",
    headline: {
      value: "24/7",
      label: "sensor-to-insight decision support in operation",
      confirm: true,
    },
    metrics: [
      {
        value: "24/7",
        label: "continuous sensor-to-insight pipelines",
        confirm: true,
      },
    ],
    summary:
      "Sensor-to-insight decision support on Azure — turning continuous streams from subsea and factory equipment into information operators can act on.",
    challenge:
      "High-volume OT and sensor data with real operational value locked inside it — but no pipeline from raw signal to a decision anyone could take.",
    built: [
      "Cloud data pipelines from equipment sensors into governed storage",
      "Decision-support surfaces for engineers and operators",
      "Architecture the clients' own teams operate and extend",
    ],
    results: [
      "Operators act on live equipment insight instead of raw signals",
      "The platform is owned and operated by the clients' own teams — no lock-in",
    ],
  },
  {
    slug: "maritech",
    client: "Maritech",
    sector: "Seafood technology",
    title: "Product ownership for global seafood customs systems",
    headline: {
      value: "50+",
      label: "admin hours saved on one project in two months",
      confirm: true,
    },
    metrics: [
      {
        value: "50+",
        label: "admin hours saved on one project in two months",
        confirm: true,
      },
      {
        value: "100%",
        label: "of billable work captured and documented",
        confirm: true,
      },
    ],
    summary:
      "Senior product ownership and development for customs systems used by seafood exporters globally — an example of the product management and development consulting that runs alongside the journey.",
    challenge:
      "A product with global users and hard compliance requirements needed senior product leadership and delivery capacity without growing a permanent organisation around it.",
    built: [
      "Embedded senior product ownership steering the roadmap",
      "AI-assisted delivery and admin automation inside the team's own workflow",
      "Development capacity scaled elastically through 99X",
    ],
    results: [
      "50+ admin hours saved on one project in the first two months",
      "100% of billable work captured and documented",
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
