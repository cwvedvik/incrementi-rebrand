import type { LocalizedString } from "@/lib/i18n/types";
import { t, tList } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

/**
 * Client case studies — result-oriented, numbers first.
 * Metrics marked `confirm: true` need client confirmation before launch.
 */

export interface CaseMetric {
  value: string;
  label: LocalizedString;
  confirm?: boolean;
}

export interface CaseStudy {
  slug: string;
  client: string;
  sector: LocalizedString;
  title: LocalizedString;
  headline: CaseMetric;
  metrics: CaseMetric[];
  summary: LocalizedString;
  challenge: LocalizedString;
  built: Record<Locale, string[]>;
  results: Record<Locale, string[]>;
  industryIcon?: "maritime" | "industrial" | "finance";
}

export const CASES: CaseStudy[] = [
  {
    slug: "nrc-group",
    client: "NRC Group",
    industryIcon: "industrial",
    sector: {
      no: "Industriell infrastruktur",
      en: "Industrial infrastructure",
    },
    title: {
      no: "En dataplattform som halverer kostnaden for hvert neste trekk",
      en: "A data platform that halves the cost of every next move",
    },
    headline: {
      value: "<½",
      label: {
        no: "kostnad for ny HR-integrasjon vs. opprinnelig estimat",
        en: "cost of a new HR integration vs. the original estimate",
      },
    },
    metrics: [
      {
        value: "<½",
        label: {
          no: "HR-integrasjon levert til under halvparten av opprinnelig estimat",
          en: "HR-system integration landed at under half the original estimate",
        },
      },
      {
        value: "1",
        label: {
          no: "delt dataplattform på tvers av et fleranleggs, oppkjøpsorientert konsern",
          en: "shared data platform across a multi-site, acquisitive group",
        },
        confirm: true,
      },
    ],
    summary: {
      no: "En moderne dataplattform i produksjon for et av Nordens største jernbane- og infrastrukturkonsern — bygget slik at hvert nytt system, anlegg og oppkjøp kobles som en ren byggekloss.",
      en: "A modern data platform in production for one of the Nordics' largest rail and infrastructure groups — built so every new system, site and acquisition connects as a clean building block.",
    },
    challenge: {
      no: "Drift på tvers av anlegg, vekst gjennom oppkjøp, og data spredt i systemer som aldri snakket sammen. Hver integrasjon var et prosjekt; hver rapport manuelt arbeid.",
      en: "Multi-site operations, growth by acquisition, and data spread across systems that never spoke to each other. Every integration was a project; every report was manual work.",
    },
    built: {
      no: [
        "Modern lakehouse-dataplattform i produksjon, hub-and-spoke-arkitektur",
        "Integrasjonsmønstre som gjør hvert kildesystem til en gjenbrukbar byggekloss",
        "Styrt fundament klart for AI-kontekstlaget oppå",
      ],
      en: [
        "A modern lakehouse data platform in production, hub-and-spoke architecture",
        "Integration patterns that turn each source system into a reusable building block",
        "Governed foundations ready for the AI context layer on top",
      ],
    },
    results: {
      no: [
        "Ny HR-integrasjon ble levert til under halvparten av opprinnelig estimat — fordi plattformen allerede var der",
        "Hver tilkoblet kilde gjør neste løsning raskere og billigere: fordelen som forsterker seg, dokumentert",
      ],
      en: [
        "A new HR-system integration was delivered at under half the original estimate — because the platform was already there",
        "Each connected source makes the next solution faster and cheaper: the compounding advantage, documented",
      ],
    },
  },
  {
    slug: "sebastian",
    client: "Sebastian AS",
    industryIcon: "maritime",
    sector: { no: "Maritim & ocean", en: "Maritime & ocean" },
    title: {
      no: "Digitale DP-sjekklister under utprøving på fartøy internasjonalt",
      en: "Digital DP checklists piloting on vessels internationally",
    },
    headline: {
      value: "100%",
      label: {
        no: "av sjekker fanget og dokumentert, revisjonsklare",
        en: "of checks captured and documented, audit-ready",
      },
      confirm: true,
    },
    metrics: [
      {
        value: "100%",
        label: {
          no: "av sjekker fanget og dokumentert",
          en: "of checks captured and documented",
        },
        confirm: true,
      },
      {
        value: "Int'l",
        label: {
          no: "under utprøving på fartøy internasjonalt",
          en: "piloting on vessels internationally",
        },
      },
    ],
    summary: {
      no: "Digitale DP-sjekklister og revisjoner for maritim drift — erstatter papir og regneark med et system mannskapet faktisk bruker, nå under utprøving internasjonalt.",
      en: "Digital dynamic-positioning checklists and audits for maritime operations — replacing paper and spreadsheets with a system the crew actually uses, now piloting internationally.",
    },
    challenge: {
      no: "Sikkerhetskritiske DP-sjekker levde på papir og i regneark: trege å fullføre, vanskelige å revidere, umulige å lære av på tvers av flåten.",
      en: "Safety-critical DP checks lived on paper and in spreadsheets: slow to complete, hard to audit, impossible to learn from across the fleet.",
    },
    built: {
      no: [
        "Digitale DP-sjekklister og revisjonsflyter designet med mannskapet som kjører dem",
        "Revisjonsklare registre med full sporbarhet per fartøy og operasjon",
        "Fundament for flåteinnsikt i drift og compliance",
      ],
      en: [
        "Digital DP checklists and audit flows designed with the crews who run them",
        "Audit-ready records with full traceability per vessel and operation",
        "A foundation for fleet-wide insight into operations and compliance",
      ],
    },
    results: {
      no: [
        "Sjekker fanges komplett og konsistent, med revisjonsspor som standard",
        "Løsningen er under utprøving på fartøy internasjonalt",
      ],
      en: [
        "Checks are captured completely and consistently, with audit trails by default",
        "The solution is piloting on vessels internationally",
      ],
    },
  },
  {
    slug: "4subsea-optimar",
    client: "4Subsea · Optimar",
    industryIcon: "maritime",
    sector: { no: "Maritim & ocean", en: "Maritime & ocean" },
    title: {
      no: "Fra sensordata til beslutninger på Azure",
      en: "From sensor data to decisions on Azure",
    },
    headline: {
      value: "24/7",
      label: {
        no: "sensor-til-innsikt beslutningsstøtte i drift",
        en: "sensor-to-insight decision support in operation",
      },
      confirm: true,
    },
    metrics: [
      {
        value: "24/7",
        label: {
          no: "kontinuerlige sensor-til-innsikt-pipelines",
          en: "continuous sensor-to-insight pipelines",
        },
        confirm: true,
      },
    ],
    summary: {
      no: "Sensor-til-innsikt beslutningsstøtte på Azure — gjør kontinuerlige strømmer fra subsea- og fabrikkutstyr til informasjon operatører kan handle på.",
      en: "Sensor-to-insight decision support on Azure — turning continuous streams from subsea and factory equipment into information operators can act on.",
    },
    challenge: {
      no: "Høyvolum OT- og sensordata med reell driftsverdi — men ingen pipeline fra råsignal til en beslutning noen kunne ta.",
      en: "High-volume OT and sensor data with real operational value locked inside it — but no pipeline from raw signal to a decision anyone could take.",
    },
    built: {
      no: [
        "Sky-datapipelines fra utstyrssensorer til styrt lagring",
        "Beslutningsstøtte for ingeniører og operatører",
        "Arkitektur kundens egne team drifter og utvider",
      ],
      en: [
        "Cloud data pipelines from equipment sensors into governed storage",
        "Decision-support surfaces for engineers and operators",
        "Architecture the clients' own teams operate and extend",
      ],
    },
    results: {
      no: [
        "Operatører handler på live utstyrsinnsikt i stedet for råsignaler",
        "Plattformen eies og driftes av kundens egne team — ingen innlåsing",
      ],
      en: [
        "Operators act on live equipment insight instead of raw signals",
        "The platform is owned and operated by the clients' own teams — no lock-in",
      ],
    },
  },
  {
    slug: "maritech",
    client: "Maritech",
    industryIcon: "maritime",
    sector: { no: "Sjømatteknologi", en: "Seafood technology" },
    title: {
      no: "Produktledelse for globale tollsystemer i sjømat",
      en: "Product ownership for global seafood customs systems",
    },
    headline: {
      value: "50+",
      label: {
        no: "admin-timer spart på ett prosjekt på to måneder",
        en: "admin hours saved on one project in two months",
      },
      confirm: true,
    },
    metrics: [
      {
        value: "50+",
        label: {
          no: "admin-timer spart på ett prosjekt på to måneder",
          en: "admin hours saved on one project in two months",
        },
        confirm: true,
      },
      {
        value: "100%",
        label: {
          no: "av fakturerbart arbeid fanget og dokumentert",
          en: "of billable work captured and documented",
        },
        confirm: true,
      },
    ],
    summary: {
      no: "Senior produktledelse og utvikling for tollsystemer brukt av sjømateksportører globalt — et eksempel på produkt- og utviklingsrådgivning som går ved siden av reisen.",
      en: "Senior product ownership and development for customs systems used by seafood exporters globally — an example of the product management and development consulting that runs alongside the journey.",
    },
    challenge: {
      no: "Et produkt med globale brukere og harde compliance-krav trengte senior produktledelse og leveransekapasitet uten å bygge en permanent organisasjon rundt det.",
      en: "A product with global users and hard compliance requirements needed senior product leadership and delivery capacity without growing a permanent organisation around it.",
    },
    built: {
      no: [
        "Innebygd senior produktledelse som styrer veikartet",
        "AI-assistert leveranse og admin-automatisering i teamets egen arbeidsflyt",
        "Utviklingskapasitet skalert elastisk gjennom 99X",
      ],
      en: [
        "Embedded senior product ownership steering the roadmap",
        "AI-assisted delivery and admin automation inside the team's own workflow",
        "Development capacity scaled elastically through 99X",
      ],
    },
    results: {
      no: [
        "50+ admin-timer spart på ett prosjekt de første to månedene",
        "100 % av fakturerbart arbeid fanget og dokumentert",
      ],
      en: [
        "50+ admin hours saved on one project in the first two months",
        "100% of billable work captured and documented",
      ],
    },
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function localizeCase(c: CaseStudy, locale: Locale) {
  return {
    ...c,
    sector: t(c.sector, locale),
    title: t(c.title, locale),
    summary: t(c.summary, locale),
    challenge: t(c.challenge, locale),
    built: tList(c.built, locale),
    results: tList(c.results, locale),
    headline: { ...c.headline, label: t(c.headline.label, locale) },
    metrics: c.metrics.map((m) => ({ ...m, label: t(m.label, locale) })),
  };
}
