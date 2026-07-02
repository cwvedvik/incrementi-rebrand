import type { ReactNode } from "react";
import PeopleGrid from "@/components/sections/PeopleGrid";
import ContactForm from "@/components/chat/ContactForm";
import BuildingBlocks from "@/components/sections/BuildingBlocks";
import CaseCards from "@/components/sections/CaseCards";
import LogoStrip from "@/components/sections/LogoStrip";

/* ============================================================
   CONTENT — the intelligence's answers.
   Grounded in real offers, proposals and delivered client work.
   Keywords carry both English and Norwegian variants.
   ============================================================ */

export interface TopicRenderContext {
  /** The visitor's own typed question (fallback topic only). */
  query?: string;
}

export interface Topic {
  id: string;
  /** The question as shown in chips / nav. */
  q: string;
  /** Keywords for free-text matching (English + Norwegian). */
  kw: string[];
  render: (ctx?: TopicRenderContext) => ReactNode;
  follow: string[];
}

/* ---------- small layout helpers ---------- */

function Mini({
  k,
  h,
  p,
  wide = false,
}: {
  k: string;
  h: string;
  p: string;
  wide?: boolean;
}) {
  return (
    <div className={`mini${wide ? " wide" : ""}`}>
      <div className="k">{k}</div>
      <h4>{h}</h4>
      <p>{p}</p>
    </div>
  );
}

/* ---------- the topics ---------- */

export const TOPICS: Record<string, Topic> = {
  journey: {
    id: "journey",
    q: "How do you take a firm to AI-native?",
    kw: [
      "journey", "how", "process", "start with", "steps", "phases",
      "transform", "roadmap", "path", "reise", "prosess", "steg",
      "faser", "transformasjon", "veikart", "hvordan",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          One journey, six building blocks. You control the priority and the
          pace — <em>every block stands on its own and compounds into the next.</em>
        </div>
        <BuildingBlocks />
      </>
    ),
    follow: ["build", "speed", "context", "start"],
  },

  build: {
    id: "build",
    q: "What exactly do you build?",
    kw: [
      "build", "what do you", "capabilities", "product", "platform",
      "make", "deliver", "solution", "bygge", "lage", "leverer",
      "løsning", "plattform", "hva gjør",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          Four layers that stack into a firm that runs on its own data.
        </div>
        <div className="cards2">
          <Mini k="Foundation" h="Data & integration platform" p="A modern lakehouse platform — Microsoft Fabric, Azure or Databricks, matched to your estate. Data first, lowest TCO, connect anything as a building block." />
          <Mini k="Products" h="The operating system" p="The apps your crew, operations, leadership and customers actually use — built in production increments on open technology like .NET, React and OpenBridge." />
          <Mini k="Intelligence" h="AI context & control layer" p="MCP, RAG and a knowledge graph so AI works on your data, in your reality, with sources and audit." />
          <Mini k="Capability" h="Agent enablement" p="Your employees build and operate their own agents — the capability stays in the organisation." />
          <Mini
            wide
            k="Alongside the journey"
            h="Product management & development consulting"
            p="Senior product owners and engineers embedded in your teams — steering roadmaps, shipping products and raising delivery capability, with 99X's 650+ specialists behind them."
          />
        </div>
      </>
    ),
    follow: ["context", "journey", "ownership", "proof"],
  },

  proof: {
    id: "proof",
    q: "Show me the proof.",
    kw: [
      "proof", "results", "evidence", "case", "reference", "work",
      "clients", "roi", "numbers", "done", "bevis", "resultater",
      "kunder", "referanser", "tall", "erfaring",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          The numbers do the persuading. The brand stays understated —{" "}
          <em>every case opens into the full story.</em>
        </div>
        <LogoStrip dense />
        <CaseCards />
      </>
    ),
    follow: ["industries", "ownership", "people", "start"],
  },

  ownership: {
    id: "ownership",
    q: "Do we own what you build?",
    kw: [
      "own", "ownership", "ip", "lock", "lock-in", "vendor", "code",
      "rights", "keep", "proprietary", "eie", "eierskap", "kildekode",
      "rettigheter", "leverandør", "innlåsing",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          Yes. <em>You own the engine.</em> That is the whole point.
        </div>
        <ul className="ai-points">
          <li><b>Open, established technology</b> — Microsoft Fabric, OpenBridge, .NET, React. No proprietary black boxes.</li>
          <li><b>Your code, your data, your architecture</b> — in your tenant. Any team can pick it up and continue.</li>
          <li><b>ISO 9001, 27001 &amp; 27701</b> — quality, security and privacy governance built in from the start.</li>
          <li><b>Variable cost</b> — value shipped every cycle; stop whenever you want and still own something that works.</li>
        </ul>
      </>
    ),
    follow: ["context", "proof", "journey"],
  },

  industries: {
    id: "industries",
    q: "Which industries do you serve?",
    kw: [
      "industries", "sector", "maritime", "industrial", "finance",
      "financial", "who do you", "serve", "vertical", "bransje",
      "sektor", "industri", "finans", "hvem",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          Three sectors, one profile: firms that <em>run on operations</em>{" "}
          and can&apos;t afford to bet the company.
        </div>
        <div className="cards2">
          <Mini k="Maritime & ocean" h="Vessels, subsea, aquaculture" p="OT/sensor data, fragmented systems, growth by acquisition. ABYS, Sebastian, 4Subsea, Optimar, Upkip." />
          <Mini k="Industrial" h="Infrastructure, energy, field-service" p="Multi-site operations, spread data, predictive-maintenance upside. NRC Group, Envo, BUS." />
          <Mini k="Financial & professional" h="Accounting, finance functions" p="Compliance-bound, document-heavy workflows built for governed AI and agents." />
        </div>
      </>
    ),
    follow: ["proof", "build", "start"],
  },

  speed: {
    id: "speed",
    q: "How fast do we see value?",
    kw: [
      "fast", "speed", "quick", "time", "when", "how long", "weeks",
      "value", "deliver", "rask", "hurtig", "tid", "uker", "verdi",
      "hvor lang",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          First value in production in <em>weeks</em> — and it accelerates
          from there.
        </div>
        <ul className="ai-points">
          <li><b>2–4 weeks</b> to a validated, clickable prototype and a locked scope.</li>
          <li><b>AI-DLC delivery in &quot;bolts&quot;</b> — prototypes converted straight to production; velocity up, cost per cycle down.</li>
          <li><b>650+ 99X specialists</b> for elastic capacity when a phase demands it.</li>
          <li><b>It compounds</b> — every data source connected makes the next solution faster and cheaper.</li>
        </ul>
      </>
    ),
    follow: ["journey", "ownership", "start"],
  },

  context: {
    id: "context",
    q: "How is your AI safe — and different?",
    kw: [
      "safe", "secure", "security", "different", "risk", "govern",
      "hallucinat", "context", "trust", "gdpr", "compliance", "agent",
      "sikker", "sikkerhet", "trygg", "risiko", "kontekst", "tillit",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          Because the AI works on <em>your context</em> — not a generic model
          bolted on.
        </div>
        <p className="ai-body">
          We build a context &amp; control layer over your data: a knowledge
          graph of your real world, governed access through MCP, retrieval
          that grounds every answer in your sources. Agents know your
          vessels, sites, customers and processes — and operate inside roles,
          permissions, lineage and audit.
        </p>
        <ul className="ai-points">
          <li><b>Grounded answers</b> with traceable sources — reduced hallucination.</li>
          <li><b>Pilot sandbox → gate → governed scale</b> — explore fast, scale only what earns it.</li>
          <li><b>Human-in-the-loop</b> and full audit trails by default.</li>
        </ul>
      </>
    ),
    follow: ["build", "ownership", "journey"],
  },

  why: {
    id: "why",
    q: "Why Incrementi?",
    kw: [
      "why", "about", "who are you", "different", "instead",
      "competitor", "choose", "trust", "company", "hvorfor", "om dere",
      "hvem er", "konkurrent", "velge", "selskap",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          Everyone else stops halfway.{" "}
          <em>We own the whole journey — then hand it over.</em>
        </div>
        <ul className="ai-points">
          <li><b>Not a strategy house</b> that advises and leaves. We build it and ship it to production.</li>
          <li><b>Not a software vendor</b> that locks you in. Open tech, your IP.</li>
          <li><b>Not a dev shop</b> shipping features on messy data. Foundations first.</li>
          <li><b>Backed by 99X Group</b> — 650+ specialists, 474 MNOK revenue, 20 years, 150+ products.</li>
          <li><b>Beyond the journey</b> — product management and development consulting: senior product owners and engineers embedded in your teams.</li>
        </ul>
        <p className="ai-body" style={{ marginTop: 16 }}>
          The result is the compounding advantage: increment by increment,
          your firm gets faster, sharper and more autonomous.
        </p>
      </>
    ),
    follow: ["people", "journey", "proof", "start"],
  },

  people: {
    id: "people",
    q: "Who will we actually work with?",
    kw: [
      "people", "team", "partner", "partners", "advisor", "advisors",
      "adviser", "consultant", "consultants", "who works", "faces",
      "folk", "team", "partnere", "rådgivere", "konsulenter", "hvem jobber",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          Senior partners lead every engagement.{" "}
          <em>99X&apos;s 650+ specialists scale it.</em> No bait-and-switch
          to juniors.
        </div>
        <p className="ai-body">
          The people below own your journey personally — from the first
          Direction week to the day your employees run their own agents.
          Behind them stands the full weight of 99X Group when a phase
          demands elastic capacity.
        </p>
        <PeopleGrid />
      </>
    ),
    follow: ["why", "proof", "start"],
  },

  start: {
    id: "start",
    q: "How do we start?",
    kw: [
      "start", "begin", "contact", "talk", "book", "meeting",
      "get started", "next step", "reach", "starte", "begynne",
      "kontakt", "snakke", "møte", "komme i gang", "neste steg",
    ],
    render: () => (
      <>
        <div className="ai-lead">
          With an <em>AI &amp; data strategy session.</em> One week of
          Direction — low risk, high clarity.
        </div>
        <p className="ai-body">
          The session brings your leadership and our partners around your
          reality: where the value sits, what the target architecture looks
          like, and what to build first. It becomes the shared plan the whole
          journey steers by. No big commitment to find out if we&apos;re
          right for each other — you leave with a direction, whether or not
          we work together.
        </p>
        <ContactForm />
      </>
    ),
    follow: ["journey", "why", "people"],
  },

  fallback: {
    id: "fallback",
    q: "",
    kw: [],
    render: (ctx) => (
      <>
        <div className="ai-lead">
          Good question — and exactly the kind a person should answer
          properly.
        </div>
        <p className="ai-body">
          The closest ground I can cover is below. Or send your question
          straight to the team — they answer these directly, usually within
          a day.
        </p>
        <ContactForm
          compact
          initialMessage={ctx?.query}
          heading="Ask us this directly"
        />
      </>
    ),
    follow: ["journey", "proof", "start"],
  },
};

export const INITIAL_CHIPS = [
  "journey",
  "build",
  "proof",
  "ownership",
  "people",
  "start",
];

export const NAV_ITEMS: Array<{ id: string; label: string }> = [
  { id: "journey", label: "The Journey" },
  { id: "build", label: "What we build" },
  { id: "industries", label: "Industries" },
  { id: "proof", label: "Work" },
  { id: "people", label: "People" },
  { id: "why", label: "About" },
];
