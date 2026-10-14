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
  cta: "Book en 30 min strategiprat",
  ctaShort: "Book strategiprat",
  ctaNote: "Uforpliktende · 30 minutter",
  hero: {
    eyebrow: "AI Operations & Control Layer",
    title: "AI kan gi raske svar.",
    titleQuestion: "Men kan dere stole på dem?",
    lead: "Se hvordan dere gir AI riktig kontekst, definerte fullmakter og sporbarhet, på systemene dere allerede har.",
  },
  video: {
    src: "https://26258430.fs1.hubspotusercontent-eu1.net/hubfs/26258430/incrementi_ai_kontroll_voice_1920x1080.mp4",
    poster: "/media/video/ai-kontroll-poster.jpg",
    label: "Film: AI Operations & Control Layer",
    play: "Spill av filmen (33 sekunder, med lyd)",
  },
  logosLabel: "Utvalgte kunder",
  sections: [
    {
      title: "Se for deg neste ledermøte",
      paragraphs: [
        "Daglig leder ser muligheter for å effektivisere arbeidsprosesser med kunstig intelligens.",
        "IT-lederen opplever økende etterspørsel etter AI-verktøy, samtidig som spørsmålene om informasjonssikkerhet, tilgangsstyring og kostnader blir flere.",
        "Medarbeidere bruker allerede AI til å analysere dokumenter, utarbeide rapporter og finne informasjon. Flere ønsker å la AI utføre oppgaver direkte i virksomhetens systemer.",
        "Men svarene avhenger av hvilken informasjon AI har tilgang til, hvor oppdatert den er, og hvordan den blir brukt.",
      ],
      emphasis:
        "Hvordan sikrer dere at AI bruker riktig informasjon, gir etterprøvbare svar og bare utfører handlinger den har tillatelse til?",
    },
    {
      title: "Fra AI-verktøy til kontrollert bruk i virksomheten",
      paragraphs: [
        "AI blir langt mer nyttig når den forstår virksomhetens egne data, dokumenter, arbeidsprosesser og begreper.",
        "Samtidig øker kravene til kvalitet, sikkerhet og kontroll når AI skal brukes i operative prosesser.",
        "Store mengder informasjon kan gi høyt tokenforbruk og økte kostnader. Med flere AI-verktøy og agenter blir det også viktig å ha felles kontroll på hvilke kilder de bruker, hvilke handlinger de kan utføre, og hvordan resultatene kan etterprøves.",
      ],
      emphasis:
        "Virksomheten trenger et felles lag som gir AI riktig kontekst, definerte fullmakter og sporbarhet.",
    },
  ],
  photo: {
    src: "/media/environment/2026_Incrementi_fotoCRoka_093c.jpg",
    alt: "To konsulenter fra Incrementi arbeider sammen ved en PC",
  },
  solution: {
    title: "Slik løser vi det: AI Operations & Control Layer",
    paragraphs: [
      "I Incrementi bygger vi dette gjennom vårt AI Operations & Control Layer. Laget kobler AI til virksomhetens eksisterende systemer og kunnskapskilder, henter relevant informasjon ved behov og gir kontroll over tilganger og operasjoner.",
    ],
    listIntro: "Det gir dere:",
    list: [
      ["Riktig kontekst.", "AI henter relevant informasjon fra egne systemer og kunnskapskilder når den trengs."],
      ["Definerte fullmakter.", "Dere bestemmer hvilke kilder AI kan bruke, og hvilke handlinger den kan utføre."],
      ["Etterprøvbare svar.", "Mer presise svar som kan spores tilbake til hva de bygger på."],
      ["Lavere kostnader.", "Mer effektiv tokenbruk, fordi bare relevant informasjon sendes til modellen."],
      ["Gjenbruk.", "Samme lag fungerer på tvers av AI-modeller, assistenter og agenter, så nye løsninger bygger på integrasjonene, konteksten og kontrollene dere allerede har."],
    ],
  },
  contact: {
    title: "Klar for å få kontroll på AI?",
    lead: "Kontakt oss for en 30 min strategiprat.",
    personIntro: "Du snakker med",
  },
} as const;
