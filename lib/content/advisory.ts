/**
 * Landingssiden /radgivning. Kampanjesiden er bare på norsk, så tekstene er
 * vanlige strenger og ikke LocalizedString. Brødteksten følger briefen
 * ordrett; figurtekstene er korte utdrag av den.
 */

export type InitiativeId =
  | "ai"
  | "new-solutions"
  | "maintenance"
  | "costs"
  | "ai-tools"
  | "processes";

export type RoleId = "ceo" | "cio" | "cfo" | "staff";

/** Rutene i Eisenhower-matrisen: viktig/haster, viktig, haster, ingen av delene. */
export type Quadrant = "now" | "plan" | "delegate" | "reassess";

export const advisory = {
  meta: {
    title: "Teknologirådgivning og forretningsutvikling | Incrementi",
    description:
      "Teknologien utvikler seg raskt. Incrementi hjelper dere å vurdere mulighetene, prioritere investeringene og finne tiltak som gir resultater nå og bygger verdi over tid.",
  },
  cta: "Book en samtale",
  ctaShort: "Book samtale",
  ctaNote: "Uforpliktende · 30 minutter",
  hero: {
    eyebrow: "Rådgivning",
    title: "Teknologien utvikler seg raskt.",
    titleQuestion: "Investerer dere i de riktige prosjektene?",
    lead: "Vi hjelper dere å prioritere teknologiinvesteringene, slik at de gir resultater nå og bygger verdi over tid.",
  },
  /** Filmen finnes ikke ennå. Fyll inn src, så vises spilleren i stedet for bildet. */
  video: {
    src: null,
    poster: "/media/environment/2026_Incrementi_fotoCRoka_110c.jpg",
    alt: "Fire fra Incrementi i et møte ved en tavle med en systemskisse",
    label: "Film: Rådgivning",
    play: "Spill av filmen",
  },
  logosLabel: "Utvalgte kunder",

  meeting: {
    title: "Se for deg neste ledermøte",
    paragraphs: [
      "Daglig leder ønsker å vite hvordan virksomheten kan utnytte mulighetene innen kunstig intelligens.",
      "IT-lederen vurderer nye løsninger, samtidig som eksisterende systemer krever vedlikehold og videreutvikling.",
      "Økonomiansvarlig ønsker bedre oversikt over teknologikostnadene og hva virksomheten får igjen for investeringene.",
      "Ute i organisasjonen har medarbeidere begynt å teste nye AI-verktøy. Flere ser muligheter for å forenkle arbeidsprosesser og løse oppgaver på nye måter.",
      "Hvert initiativ har sin begrunnelse. Flere av dem kan skape verdi.",
    ],
    emphasis:
      "Men hvem vurderer helheten, og hvordan avgjør dere hva som bør prioriteres?",
  },

  choices: {
    title: "De riktige valgene blir stadig viktigere",
    pace: "Teknologien utvikler seg raskt. Funksjonalitet som krevde omfattende utvikling for to år siden, kan i dag være tilgjengelig som standard. Nye muligheter oppstår, samtidig som tidligere investeringer må vurderes i lys av utviklingen.",
    horizon:
      "Virksomheten trenger forbedringer som gir effekt på kort sikt. Samtidig må investeringene støtte en langsiktig retning og gi fleksibilitet til å utnytte nye muligheter.",
    emphasis:
      "Det handler om å prioritere riktig, utnytte det dere allerede har investert i, og redusere risikoen for kostbare feilvalg.",
  },

  photo: {
    src: "/media/environment/2026_Incrementi_fotoCRoka_007c.jpg",
    alt: "To rådgivere fra Incrementi utenfor kontoret",
  },

  together: {
    title: "La oss se på mulighetene sammen",
    paragraphs: [
      "I Incrementi kombinerer vi forretningsforståelse med praktisk erfaring fra teknologiutvikling og gjennomføring.",
      "Vi hjelper dere med å vurdere mulighetene, prioritere investeringene og finne tiltak som gir resultater på kort sikt og bygger verdi over tid.",
    ],
  },

  contact: {
    title: "Hvilke teknologivalg står dere overfor?",
    lead: "Book et innledende strategimøte for å diskutere muligheter innen teknologi og digitalisering.",
    personIntro: "Du snakker med",
  },

  figures: {
    initiatives: {
      ai: "AI-muligheter",
      "new-solutions": "Nye løsninger",
      maintenance: "Vedlikehold",
      costs: "Kostnadsoversikt",
      "ai-tools": "Nye AI-verktøy",
      processes: "Enklere prosesser",
    } satisfies Record<InitiativeId, string>,

    meeting: {
      label:
        "Fire perspektiver i ledergruppen, hver med egne initiativer, som alle peker mot det samme spørsmålet: hvem vurderer helheten?",
      center: "Helheten?",
      idle: "Hvert initiativ har sin begrunnelse. Velg en rolle for å se hva den er opptatt av.",
      roles: [
        {
          id: "ceo",
          label: "Daglig leder",
          summary: "Vil vite hvordan virksomheten kan utnytte mulighetene innen kunstig intelligens.",
          initiatives: ["ai"],
        },
        {
          id: "cio",
          label: "IT-leder",
          summary: "Vurderer nye løsninger, mens eksisterende systemer krever vedlikehold og videreutvikling.",
          initiatives: ["new-solutions", "maintenance"],
        },
        {
          id: "cfo",
          label: "Økonomiansvarlig",
          summary: "Ønsker oversikt over teknologikostnadene og hva investeringene gir igjen.",
          initiatives: ["costs"],
        },
        {
          id: "staff",
          label: "Medarbeidere",
          summary: "Tester nye AI-verktøy og ser muligheter for å forenkle arbeidsprosesser.",
          initiatives: ["ai-tools", "processes"],
        },
      ] satisfies readonly {
        id: RoleId;
        label: string;
        summary: string;
        initiatives: readonly InitiativeId[];
      }[],
    },

    horizon: {
      label:
        "Tiltak med effekt på kort sikt bygger på det virksomheten allerede har investert i, og følger en langsiktig retning med rom for nye muligheter. Et feilvalg ender blindt.",
      foundation: "Det dere allerede har investert i",
      steps: "Effekt på kort sikt",
      direction: "Langsiktig retning",
      flexibility: "Fleksibilitet",
      misstep: "Kostbart feilvalg",
      caption: "Små steg som peker samme vei, på fundamentet dere allerede har.",
    },

    priority: {
      label:
        "Forretningsforståelse og teknologierfaring sorterer initiativene fra ledermøtet i en Eisenhower-matrise etter hvor viktige de er og hvor mye de haster. Det som er både viktig og haster, er grunnpilarene kontekstlag, dataplattform og AI Governance.",
      lenses: ["Forretningsforståelse", "Teknologi og gjennomføring"],
      intake: "Initiativene fra ledermøtet",
      urgent: "Haster",
      notUrgent: "Haster ikke",
      important: "Viktig",
      notImportant: "Ikke viktig",
      quadrants: {
        now: "Gjør nå",
        plan: "Planlegg",
        delegate: "Deleger",
        reassess: "Vurder på nytt",
      } satisfies Record<Quadrant, string>,
      pillars: ["Kontekstlag", "Dataplattform", "AI Governance"],
      pillarsNote: "Grunnpilarene alt annet bygger på.",
      placement: {
        ai: "plan",
        "new-solutions": "plan",
        costs: "plan",
        processes: "delegate",
        "ai-tools": "delegate",
        maintenance: "reassess",
      } satisfies Record<InitiativeId, Exclude<Quadrant, "now">>,
      caption: "Illustrasjon. Plasseringen avgjøres sammen med dere.",
    },
  },
} as const;
