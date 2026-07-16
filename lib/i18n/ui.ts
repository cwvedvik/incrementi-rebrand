import type { LocalizedString } from "./types";

export const ui = {
  nav: {
    journey: { no: "Reisen", en: "The Journey" },
    build: { no: "Hva vi bygger", en: "What we build" },
    industries: { no: "Bransjer", en: "Industries" },
    results: { no: "Resultater", en: "Results" },
    people: { no: "Folk", en: "People" },
    about: { no: "Om oss", en: "About" },
    start: { no: "Strategisesjon", en: "Strategy session" },
  },
  lang: {
    no: { no: "NO", en: "NO" },
    en: { no: "EN", en: "EN" },
    switchTo: { no: "Bytt til engelsk", en: "Switch to Norwegian" },
  },
  menu: { no: "Meny", en: "Menu" },
  close: { no: "Lukk", en: "Close" },
  companyLine: { no: "A 99x Company", en: "A 99x Company" },
  openExperience: {
    no: "Åpne den levende opplevelsen",
    en: "Open the live experience",
  },
  preferAsk: {
    no: "Vil du heller spørre først?",
    en: "Prefer to ask first?",
  },
  ctaBand: {
    eyebrow: { no: "Fase 0 — Retning", en: "Phase 0 — Direction" },
    line: {
      no: "Én uke. Felles plan. Ingen innlåsing.",
      en: "One week. Shared plan. No lock-in.",
    },
    button: {
      no: "Book en strategisesjon",
      en: "Book a strategy session",
    },
  },
  sticky: {
    line: {
      no: "AI- og datastrategisesjon",
      en: "AI & data strategy session",
    },
    button: { no: "Book nå", en: "Book now" },
    dismiss: { no: "Skjul", en: "Dismiss" },
  },
  dock: {
    placeholder: { no: "Spør Incrementi…", en: "Ask Incrementi…" },
    hint: {
      no: "Foreslåtte spørsmål over — eller skriv ditt eget. Spør om det som betyr noe. Hopp over resten.",
      en: "Suggested questions above — or type your own. Ask what matters to you. Skip what doesn't.",
    },
    hintAfter: {
      no: "Fortsett å spørre — eller trykk «Tilbake til starten» for å nullstille.",
      en: "Keep asking — or press “Back to the beginning” to reset.",
    },
    send: { no: "Send", en: "Send" },
  },
  chat: {
    thinking: { no: "Tenker…", en: "Thinking…" },
    bookSession: {
      no: "Book strategisesjonen",
      en: "Book the strategy session",
    },
    nudge: {
      no: "Klar for å snakke med et menneske?",
      en: "Ready to talk to a human?",
    },
    back: {
      no: "← Tilbake til starten",
      en: "← Back to the beginning",
    },
  },
  form: {
    heading: {
      no: "Book en AI- og datastrategisesjon",
      en: "Book an AI & data strategy session",
    },
    compactHeading: {
      no: "Spør oss direkte",
      en: "Ask us this directly",
    },
    name: { no: "Navn", en: "Name" },
    email: { no: "E-post", en: "Email" },
    company: { no: "Selskap", en: "Company" },
    message: { no: "Melding", en: "Message" },
    submit: { no: "Send forespørsel", en: "Send request" },
    sending: { no: "Sender…", en: "Sending…" },
    success: {
      no: "Takk — en partner svarer innen én arbeidsdag.",
      en: "Thank you — a partner will reply within one working day.",
    },
    error: {
      no: "Noe gikk galt. Prøv igjen, eller skriv til oss direkte.",
      en: "Something went wrong. Try again, or email us directly.",
    },
    note: {
      no: "Svar innen én arbeidsdag · Ingen forpliktelse",
      en: "Reply within one working day · No commitment",
    },
    callLink: {
      no: "Book en 30-minutters intro-samtale",
      en: "Book a 30-minute intro call",
    },
  },
  hero: {
    eyebrow: {
      no: "AI-transformasjonspartner",
      en: "The AI transformation partner",
    },
    titleLine1: { no: "Hele reisen", en: "The whole journey" },
    titleLine2: { no: "til AI-native.", en: "to AI-native." },
    subBefore: {
      no: "Vi bygger motoren din — dataplattform, operativsystem, AI i din kontekst —",
      en: "We build your engine — data foundation, operating system, AI in your context —",
    },
    subBold: {
      no: "og du beholder nøklene.",
      en: "and you keep the keys.",
    },
    subAfter: {
      no: "Én partner, steg for steg.",
      en: "One partner, increment by increment.",
    },
    readCase: { no: "Les casen →", en: "Read the case →" },
    caseTeaser: {
      no: "NRC Groups HR-integrasjon vs. opprinnelig estimat — fordel som forsterker seg.",
      en: "NRC Group's HR integration vs. the original estimate — advantage that compounds.",
    },
  },
  pages: {
    journeyEyebrow: { no: "Incrementi-reisen", en: "The Incrementi Journey" },
    journeyTitle: {
      no: "Slik tar vi et selskap til AI-native.",
      en: "How we take a firm to AI-native.",
    },
    journeyIntro: {
      no: "Én reise, seks byggeklosser. Dere styrer prioritet og tempo — hver kloss står alene og forsterker den neste.",
      en: "One journey, six building blocks. You control the priority and the pace — every block stands on its own and compounds into the next.",
    },
    buildEyebrow: { no: "Hva vi bygger", en: "What we build" },
    buildTitle: {
      no: "Fire lag som blir til et selskap som kjører på egne data.",
      en: "Four layers that stack into a firm that runs on its own data.",
    },
    industriesEyebrow: { no: "Bransjer", en: "Industries" },
    industriesTitle: {
      no: "Tre sektorer. Én profil.",
      en: "Three sectors. One profile.",
    },
    resultsEyebrow: { no: "Resultater", en: "Results" },
    resultsTitle: {
      no: "Tallene overbeviser.",
      en: "The numbers do the persuading.",
    },
    resultsIntro: {
      no: "Hver case åpner til hele historien — resultater først.",
      en: "Every case opens into the full story — results first.",
    },
    peopleEyebrow: { no: "Folk", en: "People" },
    peopleTitle: {
      no: "Hvem dere faktisk jobber med.",
      en: "Who you will actually work with.",
    },
    aboutEyebrow: { no: "Om Incrementi", en: "About Incrementi" },
    aboutTitle: {
      no: "AI-transformasjonspartner.",
      en: "The AI transformation partner.",
    },
    aboutIntro: {
      no: "Vi tar driftsintensive selskaper hele veien til AI-native — vi bygger motoren, og dere beholder nøklene. A 99x company.",
      en: "We take operations-heavy firms the whole journey to AI-native — we build the engine, and you keep the keys. A 99x company.",
    },
    startEyebrow: { no: "Kom i gang", en: "Get started" },
    startTitle: {
      no: "AI- og datastrategisesjon.",
      en: "AI & data strategy session.",
    },
    startOutcomesTitle: {
      no: "Det dere går ut med",
      en: "What you leave with",
    },
    startOutcomes: {
      no: [
        "En delt forståelse av hvor verdien sitter i driften deres",
        "En målarkitektur og rekkefølge for byggingen",
        "En retning hele reisen kan styres etter — uten stor forpliktelse",
      ],
      en: [
        "A shared view of where value sits in your operations",
        "A target architecture and build sequence",
        "A direction the whole journey can steer by — without a big commitment",
      ],
    } as Record<"no" | "en", string[]>,
  },
  blocksNote: {
    no: "Vi bygger på åpen, etablert teknologi — og tilpasser oss stacken dere allerede eier.",
    en: "We build on open, established technology — and adapt to the stack you already own.",
  },
  consulting: {
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
} as const satisfies Record<string, unknown>;

export type UiKey = keyof typeof ui;

export function uiT(
  entry: LocalizedString,
  locale: "no" | "en",
): string {
  return entry[locale];
}
