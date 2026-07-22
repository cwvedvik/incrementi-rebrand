"use client";

import type { ReactNode } from "react";
import PeopleGrid from "@/components/sections/PeopleGrid";
import ContactForm from "@/components/chat/ContactForm";
import BuildingBlocks from "@/components/sections/BuildingBlocks";
import CaseCards from "@/components/sections/CaseCards";
import LogoStrip from "@/components/sections/LogoStrip";
import { BUILD_LAYERS } from "@/lib/content/build";
import { INDUSTRIES } from "@/lib/content/industries";
import { ConceptIcon, type IconName } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale";
import type { LocalizedString } from "@/lib/i18n/types";
import { t } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export interface TopicRenderContext {
  query?: string;
}

export interface Topic {
  id: string;
  q: LocalizedString;
  kw: string[];
  render: (ctx?: TopicRenderContext) => ReactNode;
  follow: string[];
}

function Mini({
  k,
  h,
  p,
  icon,
  wide = false,
}: {
  k: string;
  h: string;
  p: string;
  icon?: IconName;
  wide?: boolean;
}) {
  return (
    <div className={`mini${wide ? " wide" : ""}`}>
      {icon ? <ConceptIcon name={icon} className="concept-icon sm mini-icon" /> : null}
      <div className="k">{k}</div>
      <h4>{h}</h4>
      <p>{p}</p>
    </div>
  );
}

function JourneyLead() {
  const { locale } = useLocale();
  return locale === "no" ? (
    <div className="ai-lead">
      Først fundamentet, så AI som betaler seg. Én reise, seks byggeklosser —{" "}
      <em>hver kloss står alene og forsterker den neste.</em>
    </div>
  ) : (
    <div className="ai-lead">
      Foundation first, then AI that pays off. One journey, six building blocks —{" "}
      <em>every block stands on its own and compounds into the next.</em>
    </div>
  );
}

function BuildRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no"
          ? "Fire lag: fra datagrunnlag til AI som jobber for driften."
          : "Four layers: from data foundation to AI that works for the business."}
      </div>
      <div className="cards2">
        {BUILD_LAYERS.map((layer) => (
          <Mini
            key={layer.id}
            wide={layer.wide}
            icon={layer.icon}
            k={t(layer.k, locale)}
            h={t(layer.h, locale)}
            p={t(layer.p, locale)}
          />
        ))}
      </div>
    </>
  );
}

function ResultsRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            Tallene overbeviser. Merkevaren holder seg lavmælt —{" "}
            <em>hver case åpner til hele historien.</em>
          </>
        ) : (
          <>
            The numbers do the persuading. The brand stays understated —{" "}
            <em>every case opens into the full story.</em>
          </>
        )}
      </div>
      <LogoStrip dense />
      <CaseCards />
    </>
  );
}

function OwnershipRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            Ja. <em>Dere eier plattformen.</em> Det er hele poenget.
          </>
        ) : (
          <>
            Yes. <em>You own the platform.</em> That is the whole point.
          </>
        )}
      </div>
      <ul className="ai-points">
        {locale === "no" ? (
          <>
            <li>
              <b>Åpen, etablert teknologi</b> — Microsoft Fabric, OpenBridge,
              .NET, React. Ingen proprietære svarte bokser.
            </li>
            <li>
              <b>Deres kode, data og arkitektur</b> — i deres tenant. Ethvert
              team kan ta over og fortsette.
            </li>
            <li>
              <b>ISO 9001, 27001 &amp; 27701</b> — kvalitet, sikkerhet og
              personvern innebygd fra start.
            </li>
            <li>
              <b>Variabel kostnad</b> — verdi levert hver syklus; stopp når
              dere vil og eier fortsatt noe som fungerer.
            </li>
          </>
        ) : (
          <>
            <li>
              <b>Open, established technology</b> — Microsoft Fabric,
              OpenBridge, .NET, React. No proprietary black boxes.
            </li>
            <li>
              <b>Your code, your data, your architecture</b> — in your tenant.
              Any team can pick it up and continue.
            </li>
            <li>
              <b>ISO 9001, 27001 &amp; 27701</b> — quality, security and privacy
              governance built in from the start.
            </li>
            <li>
              <b>Variable cost</b> — value shipped every cycle; stop whenever
              you want and still own something that works.
            </li>
          </>
        )}
      </ul>
    </>
  );
}

function IndustriesRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            Tre sektorer, én profil: selskaper som <em>lever av drift</em>{" "}
            og ikke har råd til å satse selskapet.
          </>
        ) : (
          <>
            Three sectors, one profile: firms that <em>run on operations</em>{" "}
            and can&apos;t afford to bet the company.
          </>
        )}
      </div>
      <div className="cards2">
        {INDUSTRIES.map((ind) => (
          <Mini
            key={ind.id}
            icon={ind.icon}
            k={t(ind.k, locale)}
            h={t(ind.h, locale)}
            p={t(ind.p, locale)}
          />
        ))}
      </div>
    </>
  );
}

function SpeedRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            Første verdi i produksjon på <em>uker</em> — og det akselererer
            derfra.
          </>
        ) : (
          <>
            First value in production in <em>weeks</em> — and it accelerates
            from there.
          </>
        )}
      </div>
      <ul className="ai-points">
        {locale === "no" ? (
          <>
            <li>
              <b>2–4 uker</b> til validert, klikkbar prototype og låst scope.
            </li>
            <li>
              <b>AI-DLC-leveranse i «bolts»</b> — prototyper rett til
              produksjon; hastighet opp, kostnad per syklus ned.
            </li>
            <li>
              <b>650+ 99X-spesialister</b> for elastisk kapasitet når en fase
              krever det.
            </li>
            <li>
              <b>Det forsterker seg</b> — hver tilkoblet datakilde gjør neste
              løsning raskere og billigere.
            </li>
          </>
        ) : (
          <>
            <li>
              <b>2–4 weeks</b> to a validated, clickable prototype and a locked
              scope.
            </li>
            <li>
              <b>AI-DLC delivery in &quot;bolts&quot;</b> — prototypes converted
              straight to production; velocity up, cost per cycle down.
            </li>
            <li>
              <b>650+ 99X specialists</b> for elastic capacity when a phase
              demands it.
            </li>
            <li>
              <b>It compounds</b> — every data source connected makes the next
              solution faster and cheaper.
            </li>
          </>
        )}
      </ul>
    </>
  );
}

function ContextRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            Fordi AI-en jobber på <em>deres kontekst</em> — ikke en generisk
            modell limt på kaos.
          </>
        ) : (
          <>
            Because the AI works on <em>your context</em> — not a generic model
            bolted onto chaos.
          </>
        )}
      </div>
      <p className="ai-body">
        {locale === "no"
          ? "Uten felles datagrunnlag og kontekstlag eskalerer AI bare støy og manuelt arbeid. Vi bygger laget over dataene deres: kunnskapsgraf, styrt tilgang via MCP, retrieval som forankrer hvert svar. Agenter kjenner fartøy, anlegg, kunder og prosesser — innen roller, rettigheter, sporbarhet og revisjon."
          : "Without a shared data foundation and context layer, AI only escalates noise and manual work. We build the layer over your data: knowledge graph, governed access through MCP, retrieval that grounds every answer. Agents know your vessels, sites, customers and processes — inside roles, permissions, lineage and audit."}
      </p>
      <ul className="ai-points">
        {locale === "no" ? (
          <>
            <li>
              <b>Forankrede svar</b> med sporbare kilder — mindre
              hallusinering.
            </li>
            <li>
              <b>Pilot-sandbox → port → styrt skala</b> — utforsk raskt, skaler
              bare det som fortjener det.
            </li>
            <li>
              <b>Menneske i loopen</b> og fulle revisjonsspor som standard.
            </li>
            <li>
              <b>Effekt i driften</b> — produktivitet og inntjening per ansatt,
              ikke bare demoer.
            </li>
          </>
        ) : (
          <>
            <li>
              <b>Grounded answers</b> with traceable sources — reduced
              hallucination.
            </li>
            <li>
              <b>Pilot sandbox → gate → governed scale</b> — explore fast, scale
              only what earns it.
            </li>
            <li>
              <b>Human-in-the-loop</b> and full audit trails by default.
            </li>
            <li>
              <b>Effect in operations</b> — productivity and earnings per
              employee, not just demos.
            </li>
          </>
        )}
      </ul>
    </>
  );
}

function WhyRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            De fleste kjøper AI oppå kaos.{" "}
            <em>Vi bygger fundamentet som gjør at AI løser problemet.</em>
          </>
        ) : (
          <>
            Most buy AI on top of chaos.{" "}
            <em>We build the foundation that makes AI solve the problem.</em>
          </>
        )}
      </div>
      <ul className="ai-points">
        {locale === "no" ? (
          <>
            <li>
              <b>Ikke et strategihus</b> som rådgir og drar. Vi bygger og
              leverer til produksjon.
            </li>
            <li>
              <b>Ikke en programvareleverandør</b> som låser dere inn. Åpen
              teknologi, deres IP.
            </li>
            <li>
              <b>Ikke et dev-shop</b> som leverer features på rotete data.
              Fundament først — ellers eskalerer AI kaoset.
            </li>
            <li>
              <b>Støttet av 99X Group</b> — 650+ spesialister, 474 MNOK omsetning,
              20 år, 150+ produkter.
            </li>
            <li>
              <b>Utover reisen</b> — produktledelse og utviklingsrådgivning:
              senior produktledere og ingeniører inne i teamene deres.
            </li>
          </>
        ) : (
          <>
            <li>
              <b>Not a strategy house</b> that advises and leaves. We build it
              and ship it to production.
            </li>
            <li>
              <b>Not a software vendor</b> that locks you in. Open tech, your
              IP.
            </li>
            <li>
              <b>Not a dev shop</b> shipping features on messy data. Foundation
              first — otherwise AI escalates the chaos.
            </li>
            <li>
              <b>Backed by 99X Group</b> — 650+ specialists, 474 MNOK revenue, 20
              years, 150+ products.
            </li>
            <li>
              <b>Beyond the journey</b> — product management and development
              consulting: senior product owners and engineers embedded in your
              teams.
            </li>
          </>
        )}
      </ul>
      <p className="ai-body" style={{ marginTop: 16 }}>
        {locale === "no"
          ? "Resultatet er fordelen som forsterker seg: høyere produktivitet, mer inntjening per ansatt, og bedre EBITDA — fordi AI jobber på et ryddig fundament."
          : "The result is the compounding advantage: higher productivity, more earnings per employee, and better EBITDA — because AI works on a clean foundation."}
      </p>
    </>
  );
}

function PeopleRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            Senior partnere leder hvert engasjement.{" "}
            <em>99X’ 650+ spesialister skalerer det.</em> Ingen bait-and-switch
            til juniorer.
          </>
        ) : (
          <>
            Senior partners lead every engagement.{" "}
            <em>99X&apos;s 650+ specialists scale it.</em> No bait-and-switch to
            juniors.
          </>
        )}
      </div>
      <p className="ai-body">
        {locale === "no"
          ? "Folkene under eier reisen deres personlig — fra første Retnings-uke til dagen ansatte kjører egne agenter. Bak dem står hele 99X Group når en fase krever elastisk kapasitet."
          : "The people below own your journey personally — from the first Direction week to the day your employees run their own agents. Behind them stands the full weight of 99X Group when a phase demands elastic capacity."}
      </p>
      <PeopleGrid />
    </>
  );
}

function StartRender() {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no" ? (
          <>
            Med en <em>AI- og datastrategisesjon.</em> Én uke med Retning —
            lav risiko, høy klarhet.
          </>
        ) : (
          <>
            With an <em>AI &amp; data strategy session.</em> One week of
            Direction — low risk, high clarity.
          </>
        )}
      </div>
      <p className="ai-body">
        {locale === "no"
          ? "Sesjonen samler ledelsen deres og våre partnere rundt deres virkelighet: hvor data-kaoset hemmer verdi, hvordan målarkitekturen for plattform og kontekstlag ser ut, og hva som skal bygges først. Den blir den delte planen hele reisen styres etter. Ingen stor forpliktelse for å finne ut om vi passer — dere går ut med en retning, enten vi jobber sammen eller ikke."
          : "The session brings your leadership and our partners around your reality: where data chaos holds back value, what the target architecture for platform and context layer looks like, and what to build first. It becomes the shared plan the whole journey steers by. No big commitment to find out if we're right for each other — you leave with a direction, whether or not we work together."}
      </p>
      <ContactForm />
    </>
  );
}

function FallbackRender({ query }: TopicRenderContext = {}) {
  const { locale } = useLocale();
  return (
    <>
      <div className="ai-lead">
        {locale === "no"
          ? "Godt spørsmål — og akkurat den typen et menneske bør svare ordentlig på."
          : "Good question — and exactly the kind a person should answer properly."}
      </div>
      <p className="ai-body">
        {locale === "no"
          ? "Det nærmeste jeg kan dekke står under. Eller send spørsmålet rett til teamet — de svarer direkte, vanligvis innen en dag."
          : "The closest ground I can cover is below. Or send your question straight to the team — they answer these directly, usually within a day."}
      </p>
      <ContactForm
        compact
        initialMessage={query}
        heading={
          locale === "no" ? "Spør oss direkte" : "Ask us this directly"
        }
      />
    </>
  );
}

export const TOPICS: Record<string, Topic> = {
  journey: {
    id: "journey",
    q: {
      no: "Hvordan går dere fra data-kaos til produktivitet?",
      en: "How do you go from data chaos to productivity?",
    },
    kw: [
      "journey", "how", "process", "start with", "steps", "phases",
      "transform", "roadmap", "path", "reise", "prosess", "steg",
      "faser", "transformasjon", "veikart", "hvordan", "kaos", "fundament",
      "produktivitet", "productivity", "chaos", "foundation", "ai-native",
    ],
    render: () => (
      <>
        <JourneyLead />
        <BuildingBlocks />
      </>
    ),
    follow: ["build", "speed", "context", "start"],
  },
  build: {
    id: "build",
    q: {
      no: "Hva bygger dere egentlig?",
      en: "What exactly do you build?",
    },
    kw: [
      "build", "what do you", "capabilities", "product", "platform",
      "make", "deliver", "solution", "bygge", "lage", "leverer",
      "løsning", "plattform", "hva gjør",
    ],
    render: () => <BuildRender />,
    follow: ["context", "journey", "ownership", "results"],
  },
  results: {
    id: "results",
    q: {
      no: "Vis meg resultatene.",
      en: "Show me the results.",
    },
    kw: [
      "proof", "results", "evidence", "case", "reference", "work",
      "clients", "roi", "numbers", "done", "bevis", "resultater",
      "kunder", "referanser", "tall", "erfaring",
    ],
    render: () => <ResultsRender />,
    follow: ["industries", "ownership", "why", "start"],
  },
  proof: {
    id: "results",
    q: {
      no: "Vis meg resultatene.",
      en: "Show me the results.",
    },
    kw: [],
    render: () => <ResultsRender />,
    follow: ["industries", "ownership", "why", "start"],
  },
  ownership: {
    id: "ownership",
    q: {
      no: "Eier vi det dere bygger?",
      en: "Do we own what you build?",
    },
    kw: [
      "own", "ownership", "ip", "lock", "lock-in", "vendor", "code",
      "rights", "keep", "proprietary", "eie", "eierskap", "kildekode",
      "rettigheter", "leverandør", "innlåsing",
    ],
    render: () => <OwnershipRender />,
    follow: ["context", "results", "journey"],
  },
  industries: {
    id: "industries",
    q: {
      no: "Hvilke bransjer jobber dere med?",
      en: "Which industries do you serve?",
    },
    kw: [
      "industries", "sector", "maritime", "industrial", "finance",
      "financial", "who do you", "serve", "vertical", "bransje",
      "sektor", "industri", "finans", "hvem",
    ],
    render: () => <IndustriesRender />,
    follow: ["results", "build", "start"],
  },
  speed: {
    id: "speed",
    q: {
      no: "Hvor raskt ser vi verdi?",
      en: "How fast do we see value?",
    },
    kw: [
      "fast", "speed", "quick", "time", "when", "how long", "weeks",
      "value", "deliver", "rask", "hurtig", "tid", "uker", "verdi",
      "hvor lang",
    ],
    render: () => <SpeedRender />,
    follow: ["journey", "ownership", "start"],
  },
  context: {
    id: "context",
    q: {
      no: "Hvordan er AI-en deres trygg — og annerledes?",
      en: "How is your AI safe — and different?",
    },
    kw: [
      "safe", "secure", "security", "different", "risk", "govern",
      "hallucinat", "context", "trust", "gdpr", "compliance", "agent",
      "sikker", "sikkerhet", "trygg", "risiko", "kontekst", "tillit",
    ],
    render: () => <ContextRender />,
    follow: ["build", "ownership", "journey"],
  },
  why: {
    id: "why",
    q: {
      no: "Hvorfor Incrementi?",
      en: "Why Incrementi?",
    },
    kw: [
      "why", "about", "who are you", "different", "instead",
      "competitor", "choose", "trust", "company", "hvorfor", "om dere",
      "hvem er", "konkurrent", "velge", "selskap",
    ],
    render: () => <WhyRender />,
    follow: ["journey", "results", "start"],
  },
  people: {
    id: "people",
    q: {
      no: "Hvem jobber vi egentlig med?",
      en: "Who will we actually work with?",
    },
    kw: [
      "people", "team", "partner", "partners", "advisor", "advisors",
      "adviser", "consultant", "consultants", "who works", "faces",
      "folk", "team", "partnere", "rådgivere", "konsulenter", "hvem jobber",
    ],
    render: () => <PeopleRender />,
    follow: ["why", "results", "start"],
  },
  start: {
    id: "start",
    q: {
      no: "Hvordan kommer vi i gang?",
      en: "How do we start?",
    },
    kw: [
      "start", "begin", "contact", "talk", "book", "meeting",
      "get started", "next step", "reach", "starte", "begynne",
      "kontakt", "snakke", "møte", "komme i gang", "neste steg",
    ],
    render: () => <StartRender />,
    follow: ["journey", "why", "build"],
  },
  fallback: {
    id: "fallback",
    q: { no: "", en: "" },
    kw: [],
    render: (ctx) => <FallbackRender query={ctx?.query} />,
    follow: ["journey", "results", "start"],
  },
};

export const INITIAL_CHIPS = [
  "journey",
  "build",
  "results",
  "ownership",
  "why",
  "start",
];

export function topicQuestion(id: string, locale: Locale): string {
  const topic = TOPICS[id];
  if (!topic) return "";
  return t(topic.q, locale);
}
