/**
 * Landingssiden /ai-kontroll. Kampanjesiden er bare på norsk, så tekstene er
 * vanlige strenger og ikke LocalizedString.
 */

export const aiControl = {
  meta: {
    title: "AI Operations & Control Layer | Incrementi",
    description:
      "Gi AI riktig kontekst, definerte fullmakter og sporbarhet. Incrementi kobler AI til virksomhetens egne systemer og kunnskapskilder. Book en 30 min strategiprat.",
  },
  cta: {
    primary: "Book 30 min strategiprat",
    short: "Book strategiprat",
  },
  hero: {
    eyebrow: "AI Operations & Control Layer",
    titleMain: "AI kan gi raske svar.",
    titleAccent: "Men kan dere stole på dem?",
    lead: "Vi kobler AI til virksomhetens egne systemer og kunnskapskilder, med riktig kontekst, definerte fullmakter og sporbarhet. Slik blir svarene presise og etterprøvbare, og kostnadene holder seg nede.",
    secondary: "Slik fungerer det",
    reassurance: ["Uforpliktende", "30 minutter", "Konkrete neste steg"],
  },
  video: {
    // Filen legges i public/media/video/. Den er for stor til å genereres og
    // må lastes opp fra originalen.
    src: "/media/video/incrementi_ai_kontroll_voice_1920x1080.mp4",
    poster: "/media/environment/2026_Incrementi_fotoCRoka_093c.jpg",
    label: "Film om AI Operations & Control Layer",
    play: "Se filmen med lyd",
    replay: "Se filmen igjen",
    endTitle: "Klar for å få kontroll på AI?",
  },
  meeting: {
    eyebrow: "Se for deg neste ledermøte",
    title: "Alle vil bruke AI. Ingen vet helt hva den bygger på.",
    roles: [
      {
        role: "Daglig leder",
        body: "ser muligheter for å effektivisere arbeidsprosesser med kunstig intelligens.",
      },
      {
        role: "IT-leder",
        body: "opplever økende etterspørsel etter AI-verktøy, samtidig som spørsmålene om informasjonssikkerhet, tilgangsstyring og kostnader blir flere.",
      },
      {
        role: "Medarbeiderne",
        body: "bruker allerede AI til å analysere dokumenter, utarbeide rapporter og finne informasjon. Flere vil la AI utføre oppgaver direkte i virksomhetens systemer.",
      },
    ],
    bridge:
      "Men svarene avhenger av hvilken informasjon AI har tilgang til, hvor oppdatert den er, og hvordan den blir brukt.",
    question:
      "Hvordan sikrer dere at AI bruker riktig informasjon, gir etterprøvbare svar og bare utfører handlinger den har tillatelse til?",
    questionCta: "Ta det opp med oss",
  },
  shift: {
    eyebrow: "Fra AI-verktøy til kontrollert bruk",
    title: "Jo nærmere driften AI kommer, jo mer må den kontrolleres.",
    lead: "AI blir langt mer nyttig når den forstår virksomhetens egne data, dokumenter, arbeidsprosesser og begreper. Samtidig øker kravene til kvalitet, sikkerhet og kontroll når AI skal brukes i operative prosesser.",
    points: [
      {
        title: "Kvalitet og sikkerhet",
        body: "I operative prosesser holder det ikke at svaret høres riktig ut. Det må bygge på riktig og oppdatert informasjon, og bare de som skal ha tilgang, skal få den.",
      },
      {
        title: "Tokenforbruk og kostnader",
        body: "Store mengder informasjon gir høyt tokenforbruk. Uten styring vokser kostnadene raskere enn nytten.",
      },
      {
        title: "Mange verktøy og agenter",
        body: "Med flere AI-verktøy og agenter må dere ha felles kontroll på hvilke kilder de bruker, hvilke handlinger de kan utføre, og hvordan resultatene kan etterprøves.",
      },
    ],
    conclusion:
      "Virksomheten trenger et felles lag som gir AI riktig kontekst, definerte fullmakter og sporbarhet.",
  },
  layer: {
    eyebrow: "Incrementi AI Operations & Control Layer",
    title: "Ett felles lag mellom AI og virksomheten.",
    lead: "Laget kobler AI til virksomhetens eksisterende systemer og kunnskapskilder, henter relevant informasjon ved behov og gir kontroll over tilganger og operasjoner.",
    stack: {
      topLabel: "Det som bruker AI",
      top: ["AI-modeller", "Assistenter", "Agenter"],
      coreName: "AI Operations & Control Layer",
      core: [
        { k: "Kontekst", v: "Henter relevant informasjon ved behov" },
        { k: "Fullmakter", v: "Styrer tilganger og operasjoner" },
        { k: "Sporbarhet", v: "Gjør svar og handlinger etterprøvbare" },
        { k: "Tokenbruk", v: "Sender bare det modellen trenger" },
      ],
      baseLabel: "Det dere allerede har",
      base: ["Fagsystemer", "Data", "Dokumenter", "Kunnskapskilder"],
    },
    benefits: [
      {
        title: "Presise og etterprøvbare svar",
        body: "AI svarer ut fra virksomhetens egne kilder, og dere kan se hva svaret bygger på.",
      },
      {
        title: "Kontroll på tilganger og handlinger",
        body: "Dere bestemmer hvilke kilder AI kan bruke, og hvilke operasjoner den har fullmakt til å utføre.",
      },
      {
        title: "Lavere tokenkostnader",
        body: "Når bare relevant informasjon hentes inn, går tokenforbruket ned, og kostnadene med det.",
      },
      {
        title: "Gjenbruk i neste løsning",
        body: "Samme lag brukes på tvers av modeller, assistenter og agenter. Nye løsninger bygger på integrasjonene, konteksten og kontrollene dere allerede har.",
      },
    ],
  },
  check: {
    eyebrow: "Hvor trygg er deres bruk av AI?",
    title: "Fem spørsmål før neste AI-prosjekt.",
    lead: "Kryss av for det dere har på plass i dag.",
    items: [
      "Vi vet hvilke kilder AI-verktøyene våre henter informasjon fra.",
      "Svarene AI gir kan etterprøves og spores tilbake til kilden.",
      "AI og agenter kan bare utføre handlinger de har fått tillatelse til.",
      "Vi har oversikt over tokenforbruk og kostnader ved AI-bruken.",
      "Nye AI-løsninger kan gjenbruke integrasjoner og kontroller vi allerede har.",
    ],
    resultIdle: "Ingen avkrysninger ennå.",
    resultNone:
      "Ingen av punktene er på plass ennå. Det er vanlig, og det er der en strategiprat gir mest.",
    resultSome: (n: number, total: number) =>
      `${n} av ${total} på plass. Punktene som står åpne, er et godt sted å starte.`,
    resultAll:
      "Alle fem på plass. Da er dere godt i gang, og vi tar gjerne en prat om hvordan dere skalerer videre.",
  },
  faq: {
    title: "Spørsmål før dere booker",
    items: [
      {
        q: "Hva får vi ut av strategipraten?",
        a: "En gjennomgang av hvordan dere bruker AI i dag, hvor risikoen og kostnadene ligger, og hva som er et fornuftig første steg mot kontrollert bruk. Praten tar 30 minutter og er uforpliktende.",
      },
      {
        q: "Må vi bytte AI-verktøy eller språkmodell?",
        a: "Nei. Laget brukes på tvers av AI-modeller, assistenter og agenter. Dere kan bruke verktøyene som passer dere, og bytte senere uten å bygge integrasjoner og kontroller på nytt.",
      },
      {
        q: "Må vi bytte systemene vi har i dag?",
        a: "Nei. Laget kobler AI til de systemene og kunnskapskildene dere allerede har.",
      },
      {
        q: "Hvordan gir dette lavere kostnader?",
        a: "Laget henter bare informasjonen som trengs for hver oppgave, i stedet for å sende store mengder data til modellen. Det gir mer effektiv tokenbruk og lavere kostnader.",
      },
      {
        q: "Hvordan ivaretas informasjonssikkerheten?",
        a: "Dere styrer hvilke kilder AI har tilgang til og hvilke handlinger den kan utføre, og bruken kan spores. Incrementi er en del av 99X Group, som er sertifisert etter ISO/IEC 27001 for informasjonssikkerhet og ISO/IEC 27701 for personvern.",
      },
      {
        q: "Eier vi det dere bygger?",
        a: "Ja. Dere eier kode, data og IP fra dag én, med minst mulig leverandørbinding.",
      },
    ],
  },
  contact: {
    eyebrow: "Neste steg",
    title: "Klar for å få kontroll på AI?",
    lead: "Kontakt oss for en 30 min strategiprat.",
    body: "Vi ser på hvordan dere kan ta AI fra enkeltstående verktøy til kontrollerte løsninger som skaper verdi i virksomhetens arbeidsprosesser.",
    formKicker: "Strategiprat · 30 min",
    formHeading: "Fortell oss litt om dere, så tar vi kontakt.",
    personIntro: "Du snakker med",
  },
  sticky: "Klar for å få kontroll på AI?",
} as const;
