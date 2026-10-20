import type { Locale } from "@/lib/i18n/config";

/**
 * Personvernerklæring for incrementi.no.
 *
 * Teksten beskriver de faktiske dataflytene i koden: Vercel (drift),
 * HubSpot EU (skjema, CRM, analyse, samtykkebanner og LinkedIn-piksel),
 * Google Tag Manager med Google Analytics 4 i Consent Mode, og
 * språk-informasjonskapselen fra middleware.ts. Endres dataflytene, må
 * erklæringen og `updated` oppdateres samtidig.
 *
 * Inline-markup i tekst: **fet** og [lenketekst](href).
 */

export const PRIVACY_PATHS = {
  no: "/personvern",
  en: "/en/privacy-policy",
} as const satisfies Record<Locale, string>;

export const PRIVACY_CONTACT = {
  email: "espen.slyngstad@incrementi.no",
  phone: "+47 934 00 825",
  phoneHref: "tel:+4793400825",
} as const;

export type PrivacyBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] };

export type PrivacySection = {
  id: string;
  title: string;
  blocks: PrivacyBlock[];
};

export type PrivacyDoc = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  updatedLabel: string;
  updated: string;
  updatedIso: string;
  summaryTitle: string;
  summary: string[];
  tocLabel: string;
  cookieButtonLead: string;
  languageNote?: string;
  sections: PrivacySection[];
};

const UPDATED_ISO = "2026-10-20";
const mail = `[${PRIVACY_CONTACT.email}](mailto:${PRIVACY_CONTACT.email})`;
const phone = `[${PRIVACY_CONTACT.phone}](${PRIVACY_CONTACT.phoneHref})`;

const no: PrivacyDoc = {
  meta: {
    title: "Personvernerklæring | Incrementi",
    description:
      "Slik behandler Incrementi AS personopplysninger på incrementi.no og i kontakt med kunder og samarbeidspartnere: formål, rettslig grunnlag, informasjonskapsler, lagringstid og dine rettigheter.",
  },
  eyebrow: "Personvern",
  title: "Personvernerklæring",
  lead: "Her forklarer vi hvilke personopplysninger Incrementi AS behandler, hvorfor vi gjør det, hvem vi deler dem med, hvor lenge vi lagrer dem og hvilke rettigheter du har.",
  updatedLabel: "Sist oppdatert",
  updated: "20. oktober 2026",
  updatedIso: UPDATED_ISO,
  summaryTitle: "Kort fortalt",
  summary: [
    "Incrementi AS er behandlingsansvarlig for opplysningene som beskrives her.",
    "Vi bruker opplysningene til å svare på henvendelser, følge opp kunder og samarbeidspartnere, drifte nettstedet og – bare hvis du samtykker – til analyse og markedsføring.",
    "Vi selger aldri personopplysninger.",
    "Du kan når som helst endre valgene dine for informasjonskapsler, be om innsyn, retting eller sletting, og klage til Datatilsynet.",
  ],
  tocLabel: "Innhold",
  cookieButtonLead: "Endre eller trekk tilbake samtykket ditt:",
  sections: [
    {
      id: "behandlingsansvarlig",
      title: "Hvem som er ansvarlig",
      blocks: [
        {
          type: "p",
          text: "**Incrementi AS** (org.nr. 930 168 408), Dronning Eufemias gate 26, 0191 Oslo, er behandlingsansvarlig for behandlingen av personopplysninger som beskrives i denne erklæringen. Incrementi er en del av 99X Group.",
        },
        {
          type: "p",
          text: `Spørsmål om personvern og forespørsler om rettighetene dine sender du til ${mail}, eller ringer ${phone}. Du kan også skrive til oss på adressen over. Vi er ikke pålagt å ha personvernombud og har derfor ikke oppnevnt det; henvendelsene behandles av daglig ledelse.`,
        },
      ],
    },
    {
      id: "omfang",
      title: "Hva erklæringen gjelder",
      blocks: [
        {
          type: "p",
          text: "Erklæringen gjelder når du besøker incrementi.no, tar kontakt med oss, mottar informasjon fra oss, eller er kontaktperson hos en kunde, leverandør eller samarbeidspartner.",
        },
        {
          type: "p",
          text: "Når vi behandler personopplysninger på vegne av kundene våre i et oppdrag – for eksempel data i systemer vi bygger eller drifter – er kunden behandlingsansvarlig og vi databehandler. Da gjelder kundens personvernerklæring og databehandleravtalen vi har inngått med kunden, ikke denne erklæringen.",
        },
        {
          type: "p",
          text: "Behandlingen følger personopplysningsloven og personvernforordningen (GDPR). Bruk av informasjonskapsler følger i tillegg ekomloven § 3-15, og elektronisk markedsføring følger markedsføringsloven § 15.",
        },
      ],
    },
    {
      id: "formal",
      title: "Hva vi behandler, hvorfor og på hvilket grunnlag",
      blocks: [
        {
          type: "p",
          text: "Vi behandler bare opplysninger vi trenger til et bestemt formål. Tabellen viser formålene, opplysningene og det rettslige grunnlaget etter GDPR artikkel 6.",
        },
        {
          type: "table",
          caption: "Formål, opplysninger og rettslig grunnlag",
          head: ["Formål", "Opplysninger", "Rettslig grunnlag"],
          rows: [
            [
              "**Drift og sikkerhet på nettstedet** – levere sidene, oppdage feil og hindre misbruk.",
              "IP-adresse, nettlesertype, enhet, besøkt adresse, henvisende side og tidspunkt i tekniske logger.",
              "Berettiget interesse (art. 6 nr. 1 bokstav f) i et sikkert og stabilt nettsted.",
            ],
            [
              "**Svare på henvendelser** via skjema, e-post eller telefon, og booke møter.",
              "Navn, e-post, selskap, eventuelt stilling og telefonnummer, det du skriver til oss, og hvilken side du sendte skjemaet fra.",
              "Tiltak du ber om før en eventuell avtale (bokstav b), og berettiget interesse (bokstav f) i å svare og følge opp bedriftshenvendelser.",
            ],
            [
              "**Kunde- og leverandørforhold** – inngå og gjennomføre avtaler, kommunisere, fakturere.",
              "Kontaktopplysninger og rolle for kontaktpersoner, korrespondanse, møtenotater, avtaler og fakturagrunnlag.",
              "Berettiget interesse (bokstav f) i å ivareta avtalen med virksomheten du representerer, avtale (bokstav b) når du selv er part, og rettslig forpliktelse (bokstav c) etter bokføringsloven.",
            ],
            [
              "**Markedsføring og invitasjoner** – nyhetsbrev, fagartikler og arrangementer til bedriftskontakter.",
              "Navn, e-post, selskap, stilling, interesser du har oppgitt, og om e-postene våre åpnes og lenker klikkes.",
              "Samtykke (bokstav a) der markedsføringsloven krever det. Ellers berettiget interesse (bokstav f), for eksempel overfor eksisterende kunder om tilsvarende tjenester. Du kan alltid reservere deg.",
            ],
            [
              "**Analyse og forbedring** av nettstedet med Google Analytics og HubSpot.",
              "Sidevisninger, klikk, innsendte skjema, omtrentlig plassering, enhet, nettleser, henvisningskilde og tilfeldige identifikatorer i informasjonskapsler.",
              "Samtykke (bokstav a, jf. ekomloven § 3-15). Uten samtykke: se avsnittet om Google Consent Mode under.",
            ],
            [
              "**Måling og målretting av annonser** på LinkedIn.",
              "Besøk på sidene våre koblet til en identifikator fra LinkedIn, URL, henvisende side, IP-adresse, enhets- og nettleserdata.",
              "Samtykke (bokstav a, jf. ekomloven § 3-15).",
            ],
            [
              "**Rettslige krav** – fastsette, gjøre gjeldende eller forsvare krav.",
              "Opplysninger som er relevante for kravet.",
              "Berettiget interesse (bokstav f).",
            ],
          ],
        },
        {
          type: "p",
          text: "Der vi bygger på berettiget interesse, har vi vurdert at interessen vår veier tyngre enn hensynet til personvernet ditt, blant annet fordi opplysningene er begrenset, gjelder rollen din i arbeidslivet og brukes slik du med rimelighet kan forvente. Du kan be om å få vurderingen, og du kan protestere (se «Dine rettigheter»).",
        },
        {
          type: "p",
          text: "Du har ingen plikt til å gi oss personopplysninger. Uten kontaktopplysninger kan vi likevel ikke svare deg, og uten nødvendige opplysninger kan vi ikke inngå eller gjennomføre avtaler.",
        },
        {
          type: "p",
          text: "Vi ber ikke om særlige kategorier av personopplysninger, som helseopplysninger. Ikke send slike opplysninger i skjema eller e-post.",
        },
      ],
    },
    {
      id: "informasjonskapsler",
      title: "Informasjonskapsler og sporing",
      blocks: [
        {
          type: "p",
          text: "Informasjonskapsler (cookies) er små filer som lagres i nettleseren din. Vi lagrer eller leser bare informasjonskapsler som er strengt nødvendige uten samtykke. Analyse-, funksjons- og markedsføringskapsler settes først når du har samtykket i banneret, og du velger kategoriene hver for seg. Det skal være like enkelt å avslå som å godta.",
        },
        {
          type: "p",
          text: "Du kan endre eller trekke tilbake samtykket når som helst med knappen «Informasjonskapsler» nederst på hver side, eller med knappen under. Når du trekker samtykket tilbake, slutter vi å sette nye kapsler i den kategorien. Du kan også slette eksisterende kapsler i nettleserinnstillingene.",
        },
        {
          type: "table",
          caption: "Informasjonskapsler på incrementi.no",
          head: ["Navn", "Leverandør", "Formål", "Kategori", "Varighet"],
          rows: [
            ["incrementi_locale", "Incrementi", "Husker om du har valgt norsk eller engelsk.", "Nødvendig", "1 år"],
            ["__hs_cookie_cat_pref", "HubSpot", "Lagrer hvilke kategorier du har samtykket til.", "Nødvendig", "6 måneder"],
            ["__hs_initial_opt_in", "HubSpot", "Hindrer at banneret vises på nytt i samme økt etter et valg.", "Nødvendig", "7 dager"],
            ["__hs_opt_out", "HubSpot", "Husker at du har avslått sporing.", "Nødvendig", "6 måneder"],
            ["__hs_do_not_track", "HubSpot", "Hindrer at HubSpot sender sporingsdata.", "Nødvendig", "6 måneder"],
            ["__hstc", "HubSpot", "Hovedkapsel for besøksstatistikk: domene, tidspunkt for første, forrige og nåværende besøk og antall økter.", "Analyse", "6 måneder"],
            ["hubspotutk", "HubSpot", "Identifiserer den besøkende, og kobler besøk til et innsendt skjema.", "Analyse", "6 måneder"],
            ["__hssc", "HubSpot", "Teller sidevisninger i en økt.", "Analyse", "30 minutter"],
            ["__hssrc", "HubSpot", "Registrerer om nettleseren er startet på nytt.", "Analyse", "Økt"],
            ["_ga", "Google", "Skiller besøkende fra hverandre i Google Analytics.", "Analyse", "2 år"],
            ["_ga_2G6DJVNXDH", "Google", "Holder på øktstatus i Google Analytics 4.", "Analyse", "2 år"],
            ["li_sugr, bcookie, lidc", "LinkedIn", "Identifiserer nettleseren og fordeler trafikk for LinkedIn Insight Tag.", "Markedsføring", "1 dag–1 år"],
            ["UserMatchHistory, AnalyticsSyncHistory", "LinkedIn", "Synkroniserer identifikatorer for annonsemåling og målretting.", "Markedsføring", "30 dager"],
            ["li_fat_id", "LinkedIn", "Kobler et klikk på en LinkedIn-annonse til et besøk hos oss.", "Markedsføring", "30 dager"],
          ],
        },
        {
          type: "p",
          text: "Varigheten er satt av leverandørene og kan endres av dem. Leverandørene kan også sette tekniske kapsler med andre navn for de samme formålene.",
        },
        { type: "h3", text: "Google Consent Mode" },
        {
          type: "p",
          text: "Vi bruker Google Tag Manager med Googles samtykkemodus. Før du har tatt et valg, og hvis du avslår analyse eller markedsføring, setter og leser Google-taggen ingen informasjonskapsler for disse formålene. Den kan likevel sende enkle signaler uten informasjonskapsler til Google, for eksempel at en side ble vist, tidspunkt, nettlesertype, samtykkestatus og omtrentlig region. Google bruker signalene til aggregert og modellert statistikk og oppgir at IP-adresser ikke lagres i Google Analytics 4. Lenkeparametere fra annonseklikk kan i tillegg bli med i nettadressen når du går mellom sider.",
        },
        {
          type: "p",
          text: "Grunnlaget for dette er vår berettigede interesse i å forstå bruken av nettstedet på et overordnet nivå. Du kan protestere ved å kontakte oss, eller blokkere signalene med en innholdsblokker i nettleseren.",
        },
        { type: "h3", text: "LinkedIn Insight Tag" },
        {
          type: "p",
          text: "Hvis du samtykker til markedsføring, laster HubSpot LinkedIn Insight Tag. Den lar oss måle effekten av LinkedIn-annonser og nå personer som har besøkt nettstedet. Vi ser bare aggregert statistikk, aldri hvem du er. For innsamlingen og overføringen til LinkedIn er vi og LinkedIn Ireland Unlimited Company felles behandlingsansvarlige. LinkedIn er selvstendig ansvarlig for sin videre bruk av opplysningene, og du kan utøve rettighetene dine overfor begge. Se [LinkedIns personvernerklæring](https://www.linkedin.com/legal/privacy-policy) og innstillingene for annonser på LinkedIn-kontoen din.",
        },
        { type: "h3", text: "HubSpot-sporing og innsendte skjema" },
        {
          type: "p",
          text: "Hvis du har samtykket til analyse og sender inn et skjema, kan HubSpot koble tidligere og senere besøk på nettstedet til kontaktopplysningene dine. Vi bruker dette til å forstå hva du er interessert i, slik at oppfølgingen blir relevant. Uten samtykke registreres bare det du sender inn.",
        },
      ],
    },
    {
      id: "mottakere",
      title: "Hvem vi deler opplysninger med",
      blocks: [
        {
          type: "p",
          text: "Vi selger ikke personopplysninger og deler dem ikke med andre for deres egen markedsføring. Vi bruker disse leverandørene som databehandlere etter skriftlige databehandleravtaler. De kan bare bruke opplysningene etter våre instrukser:",
        },
        {
          type: "table",
          caption: "Databehandlere",
          head: ["Leverandør", "Tjeneste", "Lagring og overføring"],
          rows: [
            [
              "Vercel Inc.",
              "Drift og levering av nettstedet, tekniske logger og skjemaendepunkt.",
              "Globalt nettverk for innholdslevering, selskap i USA.",
            ],
            [
              "HubSpot Ireland Ltd. (HubSpot, Inc.)",
              "Skjema, kunde- og kontaktregister (CRM), e-post, besøksanalyse, samtykkebanner og video på enkelte sider.",
              "Data lagres i HubSpots EU-datasenter i Tyskland. Tilgang fra USA kan forekomme ved drift og support.",
            ],
            [
              "Google Ireland Ltd. (Google LLC)",
              "Google Tag Manager og Google Analytics 4.",
              "EØS og USA.",
            ],
            [
              "Microsoft Ireland Operations Ltd.",
              "E-post, dokumenter og møter (Microsoft 365).",
              "EØS, med mulig tilgang fra USA ved drift og support.",
            ],
          ],
        },
        {
          type: "p",
          text: "For LinkedIn Insight Tag er LinkedIn felles behandlingsansvarlig, ikke databehandler (se over).",
        },
        {
          type: "p",
          text: "I tillegg kan vi dele opplysninger med selskaper i 99X Group når de bidrar i et kundeoppdrag eller i et salgsløp, med regnskapsfører og revisor, med rådgivere ved behov, og med offentlige myndigheter når loven krever det. Hvis virksomheten eller deler av den blir solgt eller fusjonert, kan opplysningene overføres til den nye eieren, som må følge denne erklæringen.",
        },
      ],
    },
    {
      id: "overforing",
      title: "Overføring utenfor EØS",
      blocks: [
        {
          type: "p",
          text: "Noen leverandører er amerikanske eller har underleverandører utenfor EØS. Vi overfører bare personopplysninger ut av EØS når overføringen har et lovlig grunnlag etter GDPR kapittel V:",
        },
        {
          type: "list",
          items: [
            "**EU–US Data Privacy Framework**: EU-kommisjonens beslutning om at USA har tilstrekkelig beskyttelse. Den gjelder også i Norge gjennom EØS-avtalen. Vercel, HubSpot, Google, Microsoft og LinkedIn er sertifisert under rammeverket.",
            "**EUs standardkontrakter (Standard Contractual Clauses)** med supplerende tiltak, for eksempel kryptering, i de tilfellene rammeverket ikke dekker overføringen.",
          ],
        },
        {
          type: "p",
          text: `Ta kontakt på ${mail} hvis du vil ha en kopi av garantiene vi bruker.`,
        },
      ],
    },
    {
      id: "lagringstid",
      title: "Hvor lenge vi lagrer opplysningene",
      blocks: [
        {
          type: "p",
          text: "Vi lagrer ikke opplysninger lenger enn formålet krever. Når lagringstiden er ute, sletter eller anonymiserer vi opplysningene.",
        },
        {
          type: "table",
          caption: "Lagringstid",
          head: ["Opplysninger", "Lagringstid"],
          rows: [
            ["Tekniske logger hos driftsleverandøren", "Kort tid, normalt ikke mer enn 30 dager."],
            ["Henvendelser som ikke fører til et kundeforhold", "Inntil 24 måneder etter siste kontakt."],
            ["Kontaktpersoner hos kunder, leverandører og partnere", "Så lenge forholdet varer, og inntil 24 måneder etter siste kontakt."],
            ["Regnskapsmateriale, for eksempel fakturaer og avtaler", "Fem år etter utgangen av regnskapsåret, slik bokføringsloven § 13 krever."],
            ["Mottakere av markedsføring", "Til du reserverer deg, eller etter 24 måneder uten aktivitet."],
            ["Reservasjoner mot markedsføring", "Så lenge det trengs for å respektere reservasjonen."],
            ["Analysedata i Google Analytics", "Inntil 14 måneder."],
            ["Informasjonskapsler", "Se tabellen over."],
          ],
        },
        {
          type: "p",
          text: "Opplysninger kan bli lagret lenger hvis det er nødvendig for å fastsette, gjøre gjeldende eller forsvare et rettskrav.",
        },
      ],
    },
    {
      id: "rettigheter",
      title: "Dine rettigheter",
      blocks: [
        { type: "p", text: "Du har rett til å:" },
        {
          type: "list",
          items: [
            "**få innsyn** i hvilke opplysninger vi har om deg, og få en kopi (art. 15),",
            "**få rettet** feil eller ufullstendige opplysninger (art. 16),",
            "**få slettet** opplysninger når vi ikke lenger har grunn til å behandle dem (art. 17),",
            "**begrense** behandlingen, for eksempel mens vi vurderer et krav om retting (art. 18),",
            "**få utlevert** opplysninger du har gitt oss, i et maskinlesbart format, når behandlingen bygger på samtykke eller avtale (art. 20),",
            "**protestere** mot behandling som bygger på berettiget interesse (art. 21). Protesterer du mot direkte markedsføring, stanser vi den alltid,",
            "**trekke tilbake samtykke** når som helst, uten at det påvirker behandlingen før du trakk det tilbake (art. 7 nr. 3).",
          ],
        },
        {
          type: "p",
          text: `Send forespørselen til ${mail}. Vi svarer uten ugrunnet opphold, og senest innen én måned. Er forespørselen omfattende, kan fristen forlenges med inntil to måneder, men da gir vi deg beskjed. Det er gratis. Vi kan be deg bekrefte identiteten din før vi utleverer eller sletter opplysninger. Hver markedsførings-e-post har dessuten en lenke for å melde seg av.`,
        },
        {
          type: "p",
          text: "Vi tar ingen avgjørelser som utelukkende bygger på automatisert behandling og har rettsvirkning eller tilsvarende betydning for deg (art. 22).",
        },
      ],
    },
    {
      id: "klage",
      title: "Klage til Datatilsynet",
      blocks: [
        {
          type: "p",
          text: "Mener du at vi behandler personopplysninger i strid med regelverket, kan du klage til Datatilsynet. Vi setter pris på om du tar kontakt med oss først, så vi kan rydde opp.",
        },
        {
          type: "p",
          text: "**Datatilsynet**, Postboks 458 Sentrum, 0105 Oslo. Telefon 22 39 69 00. [datatilsynet.no](https://www.datatilsynet.no). Bor eller arbeider du i et annet EØS-land, kan du også klage til tilsynsmyndigheten der.",
        },
      ],
    },
    {
      id: "sikkerhet",
      title: "Slik sikrer vi opplysningene",
      blocks: [
        {
          type: "p",
          text: "Vi bruker tekniske og organisatoriske tiltak for å beskytte opplysningene: kryptert overføring (HTTPS), tilgangsstyring slik at bare de som trenger opplysningene har tilgang, databehandleravtaler med leverandørene, og rutiner for å håndtere avvik. Leveransene våre er dekket av 99X’ sertifiserte styringssystemer for informasjonssikkerhet (ISO/IEC 27001) og personvern (ISO/IEC 27701).",
        },
        {
          type: "p",
          text: "Ved et brudd på personopplysningssikkerheten melder vi fra til Datatilsynet innen 72 timer når regelverket krever det. Hvis bruddet sannsynligvis innebærer en høy risiko for deg, varsler vi deg også.",
        },
      ],
    },
    {
      id: "ovrig",
      title: "Barn, lenker og endringer",
      blocks: [
        {
          type: "p",
          text: "Nettstedet og tjenestene våre er rettet mot virksomheter, ikke mot barn, og vi samler ikke bevisst inn opplysninger om barn.",
        },
        {
          type: "p",
          text: "Nettstedet lenker til andre nettsteder, for eksempel LinkedIn, 99x.io og Google Maps. Vi er ikke ansvarlige for hvordan disse behandler personopplysninger. Les personvernerklæringene deres.",
        },
        {
          type: "p",
          text: "Vi oppdaterer erklæringen når behandlingen endres. Datoen øverst viser når den sist ble endret. Ved vesentlige endringer som berører deg, varsler vi på nettstedet eller direkte, og ber om nytt samtykke der det trengs.",
        },
      ],
    },
  ],
};

const en: PrivacyDoc = {
  meta: {
    title: "Privacy policy | Incrementi",
    description:
      "How Incrementi AS processes personal data on incrementi.no and when working with clients and partners: purposes, legal bases, cookies, retention and your rights.",
  },
  eyebrow: "Privacy",
  title: "Privacy policy",
  lead: "This policy explains which personal data Incrementi AS processes, why, who we share it with, how long we keep it and what rights you have.",
  updatedLabel: "Last updated",
  updated: "20 October 2026",
  updatedIso: UPDATED_ISO,
  summaryTitle: "In short",
  summary: [
    "Incrementi AS is the controller of the personal data described here.",
    "We use the data to reply to enquiries, work with clients and partners, run the website and – only if you consent – for analytics and marketing.",
    "We never sell personal data.",
    "You can change your cookie choices at any time, ask for access, correction or erasure, and complain to the Norwegian Data Protection Authority.",
  ],
  tocLabel: "Contents",
  cookieButtonLead: "Change or withdraw your consent:",
  languageNote:
    "This is a translation of the Norwegian privacy policy (personvernerklæring). If the two versions differ, the Norwegian version applies.",
  sections: [
    {
      id: "controller",
      title: "Who is responsible",
      blocks: [
        {
          type: "p",
          text: "**Incrementi AS** (org. no. 930 168 408), Dronning Eufemias gate 26, 0191 Oslo, Norway, is the controller for the processing of personal data described in this policy. Incrementi is part of 99X Group.",
        },
        {
          type: "p",
          text: `Send privacy questions and requests to exercise your rights to ${mail}, or call ${phone}. You can also write to us at the address above. We are not required to appoint a data protection officer and have not done so; requests are handled by management.`,
        },
      ],
    },
    {
      id: "scope",
      title: "What this policy covers",
      blocks: [
        {
          type: "p",
          text: "This policy applies when you visit incrementi.no, contact us, receive information from us, or are a contact person at a client, supplier or partner.",
        },
        {
          type: "p",
          text: "When we process personal data on behalf of our clients in an engagement – for example data in systems we build or operate – the client is the controller and we are the processor. In that case the client's privacy policy and our data processing agreement with the client apply, not this policy.",
        },
        {
          type: "p",
          text: "Processing follows the Norwegian Personal Data Act and the General Data Protection Regulation (GDPR). Cookies are also governed by section 3-15 of the Norwegian Electronic Communications Act, and electronic marketing by section 15 of the Norwegian Marketing Control Act.",
        },
      ],
    },
    {
      id: "purposes",
      title: "What we process, why and on which legal basis",
      blocks: [
        {
          type: "p",
          text: "We only process data we need for a specific purpose. The table shows the purposes, the data and the legal basis under Article 6 GDPR.",
        },
        {
          type: "table",
          caption: "Purposes, data and legal basis",
          head: ["Purpose", "Data", "Legal basis"],
          rows: [
            [
              "**Running and securing the website** – serving pages, detecting errors and preventing abuse.",
              "IP address, browser type, device, URL visited, referring page and time, in technical logs.",
              "Legitimate interest (Art. 6(1)(f)) in a secure and stable website.",
            ],
            [
              "**Replying to enquiries** via forms, email or phone, and booking meetings.",
              "Name, email, company, job title and phone number if provided, what you write to us, and the page you submitted the form from.",
              "Steps taken at your request before a possible contract (Art. 6(1)(b)), and legitimate interest (Art. 6(1)(f)) in replying to and following up business enquiries.",
            ],
            [
              "**Client and supplier relationships** – entering into and performing agreements, communicating, invoicing.",
              "Contact details and role of contact persons, correspondence, meeting notes, agreements and invoicing data.",
              "Legitimate interest (Art. 6(1)(f)) in managing the agreement with the organisation you represent, contract (Art. 6(1)(b)) where you are a party yourself, and legal obligation (Art. 6(1)(c)) under the Norwegian Bookkeeping Act.",
            ],
            [
              "**Marketing and invitations** – newsletters, articles and events for business contacts.",
              "Name, email, company, job title, interests you have shared, and whether our emails are opened and links clicked.",
              "Consent (Art. 6(1)(a)) where the Marketing Control Act requires it. Otherwise legitimate interest (Art. 6(1)(f)), for example towards existing clients about similar services. You can always opt out.",
            ],
            [
              "**Analytics and improvement** of the website with Google Analytics and HubSpot.",
              "Page views, clicks, form submissions, approximate location, device, browser, referral source and random identifiers in cookies.",
              "Consent (Art. 6(1)(a), cf. section 3-15 of the Electronic Communications Act). Without consent: see the Google Consent Mode section below.",
            ],
            [
              "**Measuring and targeting ads** on LinkedIn.",
              "Visits to our pages linked to a LinkedIn identifier, URL, referring page, IP address, device and browser data.",
              "Consent (Art. 6(1)(a), cf. section 3-15 of the Electronic Communications Act).",
            ],
            [
              "**Legal claims** – establishing, exercising or defending claims.",
              "Data relevant to the claim.",
              "Legitimate interest (Art. 6(1)(f)).",
            ],
          ],
        },
        {
          type: "p",
          text: "Where we rely on legitimate interest, we have assessed that our interest outweighs your privacy interests, among other things because the data is limited, relates to your professional role and is used as you would reasonably expect. You can ask for the assessment and you can object (see \u201cYour rights\u201d).",
        },
        {
          type: "p",
          text: "You are not obliged to give us personal data. Without contact details, however, we cannot reply to you, and without the necessary data we cannot enter into or perform agreements.",
        },
        {
          type: "p",
          text: "We do not ask for special categories of personal data, such as health data. Please do not send such data in forms or emails.",
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies and tracking",
      blocks: [
        {
          type: "p",
          text: "Cookies are small files stored in your browser. Without consent we only store or read cookies that are strictly necessary. Analytics, functionality and marketing cookies are set only after you consent in the banner, and you choose each category separately. Declining is as easy as accepting.",
        },
        {
          type: "p",
          text: "You can change or withdraw your consent at any time with the \u201cCookie settings\u201d button at the bottom of every page, or with the button below. Once you withdraw consent, we stop setting new cookies in that category. You can also delete existing cookies in your browser settings.",
        },
        {
          type: "table",
          caption: "Cookies on incrementi.no",
          head: ["Name", "Provider", "Purpose", "Category", "Duration"],
          rows: [
            ["incrementi_locale", "Incrementi", "Remembers whether you chose Norwegian or English.", "Necessary", "1 year"],
            ["__hs_cookie_cat_pref", "HubSpot", "Stores the categories you have consented to.", "Necessary", "6 months"],
            ["__hs_initial_opt_in", "HubSpot", "Stops the banner from reappearing in the same session after a choice.", "Necessary", "7 days"],
            ["__hs_opt_out", "HubSpot", "Remembers that you declined tracking.", "Necessary", "6 months"],
            ["__hs_do_not_track", "HubSpot", "Stops HubSpot from sending tracking data.", "Necessary", "6 months"],
            ["__hstc", "HubSpot", "Main visitor statistics cookie: domain, time of first, previous and current visit, and session count.", "Analytics", "6 months"],
            ["hubspotutk", "HubSpot", "Identifies the visitor and links visits to a submitted form.", "Analytics", "6 months"],
            ["__hssc", "HubSpot", "Counts page views in a session.", "Analytics", "30 minutes"],
            ["__hssrc", "HubSpot", "Detects whether the browser has been restarted.", "Analytics", "Session"],
            ["_ga", "Google", "Distinguishes visitors in Google Analytics.", "Analytics", "2 years"],
            ["_ga_2G6DJVNXDH", "Google", "Keeps session state in Google Analytics 4.", "Analytics", "2 years"],
            ["li_sugr, bcookie, lidc", "LinkedIn", "Identifies the browser and routes traffic for the LinkedIn Insight Tag.", "Marketing", "1 day–1 year"],
            ["UserMatchHistory, AnalyticsSyncHistory", "LinkedIn", "Syncs identifiers for ad measurement and targeting.", "Marketing", "30 days"],
            ["li_fat_id", "LinkedIn", "Links a click on a LinkedIn ad to a visit to our site.", "Marketing", "30 days"],
          ],
        },
        {
          type: "p",
          text: "Durations are set by the providers and may be changed by them. Providers may also set technical cookies with other names for the same purposes.",
        },
        { type: "h3", text: "Google Consent Mode" },
        {
          type: "p",
          text: "We use Google Tag Manager with Google's consent mode. Before you make a choice, and if you decline analytics or marketing, the Google tag does not set or read cookies for those purposes. It may still send simple cookieless signals to Google, such as that a page was viewed, the time, browser type, consent state and approximate region. Google uses these signals for aggregated, modelled statistics and states that IP addresses are not stored in Google Analytics 4. Link parameters from ad clicks may also be carried in the URL as you move between pages.",
        },
        {
          type: "p",
          text: "The legal basis for this is our legitimate interest in understanding use of the website at an aggregate level. You can object by contacting us, or block the signals with a content blocker in your browser.",
        },
        { type: "h3", text: "LinkedIn Insight Tag" },
        {
          type: "p",
          text: "If you consent to marketing, HubSpot loads the LinkedIn Insight Tag. It lets us measure the effect of LinkedIn ads and reach people who have visited the website. We only see aggregated statistics, never who you are. For the collection and transfer to LinkedIn, we and LinkedIn Ireland Unlimited Company are joint controllers. LinkedIn is independently responsible for its further use of the data, and you can exercise your rights against either of us. See [LinkedIn's privacy policy](https://www.linkedin.com/legal/privacy-policy) and the ad settings in your LinkedIn account.",
        },
        { type: "h3", text: "HubSpot tracking and form submissions" },
        {
          type: "p",
          text: "If you have consented to analytics and submit a form, HubSpot may link earlier and later visits to the website to your contact details. We use this to understand what you are interested in, so our follow-up is relevant. Without consent, only what you submit is recorded.",
        },
      ],
    },
    {
      id: "recipients",
      title: "Who we share data with",
      blocks: [
        {
          type: "p",
          text: "We do not sell personal data or share it with others for their own marketing. We use these providers as processors under written data processing agreements. They may only use the data on our instructions:",
        },
        {
          type: "table",
          caption: "Processors",
          head: ["Provider", "Service", "Storage and transfer"],
          rows: [
            [
              "Vercel Inc.",
              "Hosting and delivery of the website, technical logs and the form endpoint.",
              "Global content delivery network, US company.",
            ],
            [
              "HubSpot Ireland Ltd. (HubSpot, Inc.)",
              "Forms, contact and client register (CRM), email, visitor analytics, cookie banner and video on some pages.",
              "Data is stored in HubSpot's EU data centre in Germany. Access from the US may occur for operations and support.",
            ],
            [
              "Google Ireland Ltd. (Google LLC)",
              "Google Tag Manager and Google Analytics 4.",
              "EEA and US.",
            ],
            [
              "Microsoft Ireland Operations Ltd.",
              "Email, documents and meetings (Microsoft 365).",
              "EEA, with possible access from the US for operations and support.",
            ],
          ],
        },
        {
          type: "p",
          text: "For the LinkedIn Insight Tag, LinkedIn is a joint controller, not a processor (see above).",
        },
        {
          type: "p",
          text: "We may also share data with companies in 99X Group when they contribute to a client engagement or a sales process, with our accountant and auditor, with advisers when needed, and with public authorities when required by law. If all or part of the business is sold or merged, the data may be transferred to the new owner, who must comply with this policy.",
        },
      ],
    },
    {
      id: "transfers",
      title: "Transfers outside the EEA",
      blocks: [
        {
          type: "p",
          text: "Some providers are US companies or use sub-processors outside the EEA. We only transfer personal data outside the EEA when the transfer has a lawful basis under Chapter V GDPR:",
        },
        {
          type: "list",
          items: [
            "**EU–US Data Privacy Framework**: the European Commission's decision that the US provides adequate protection. It also applies in Norway through the EEA Agreement. Vercel, HubSpot, Google, Microsoft and LinkedIn are certified under the framework.",
            "**EU Standard Contractual Clauses** with supplementary measures, such as encryption, where the framework does not cover the transfer.",
          ],
        },
        {
          type: "p",
          text: `Contact us at ${mail} if you would like a copy of the safeguards we use.`,
        },
      ],
    },
    {
      id: "retention",
      title: "How long we keep data",
      blocks: [
        {
          type: "p",
          text: "We do not keep data longer than the purpose requires. When the retention period ends, we delete or anonymise the data.",
        },
        {
          type: "table",
          caption: "Retention",
          head: ["Data", "Retention"],
          rows: [
            ["Technical logs at our hosting provider", "A short time, normally no more than 30 days."],
            ["Enquiries that do not lead to a client relationship", "Up to 24 months after the last contact."],
            ["Contact persons at clients, suppliers and partners", "For as long as the relationship lasts, and up to 24 months after the last contact."],
            ["Accounting records, such as invoices and agreements", "Five years after the end of the financial year, as required by section 13 of the Bookkeeping Act."],
            ["Marketing recipients", "Until you opt out, or after 24 months without activity."],
            ["Marketing opt-outs", "For as long as needed to respect the opt-out."],
            ["Analytics data in Google Analytics", "Up to 14 months."],
            ["Cookies", "See the table above."],
          ],
        },
        {
          type: "p",
          text: "Data may be kept longer if needed to establish, exercise or defend a legal claim.",
        },
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      blocks: [
        { type: "p", text: "You have the right to:" },
        {
          type: "list",
          items: [
            "**access** the data we hold about you and get a copy (Art. 15),",
            "**rectify** incorrect or incomplete data (Art. 16),",
            "**erase** data when we no longer have grounds to process it (Art. 17),",
            "**restrict** processing, for example while we assess a request for rectification (Art. 18),",
            "**receive** data you have given us in a machine-readable format, when processing is based on consent or contract (Art. 20),",
            "**object** to processing based on legitimate interest (Art. 21). If you object to direct marketing, we always stop,",
            "**withdraw consent** at any time, without affecting processing before the withdrawal (Art. 7(3)).",
          ],
        },
        {
          type: "p",
          text: `Send your request to ${mail}. We reply without undue delay and within one month at the latest. If the request is complex, the deadline may be extended by up to two months, and we will tell you if it is. It is free of charge. We may ask you to confirm your identity before we disclose or delete data. Every marketing email also has an unsubscribe link.`,
        },
        {
          type: "p",
          text: "We do not make decisions based solely on automated processing that have legal or similarly significant effects on you (Art. 22).",
        },
      ],
    },
    {
      id: "complaints",
      title: "Complaints to Datatilsynet",
      blocks: [
        {
          type: "p",
          text: "If you believe we process personal data in breach of the rules, you can complain to the Norwegian Data Protection Authority (Datatilsynet). We would appreciate the chance to put things right first, so please contact us.",
        },
        {
          type: "p",
          text: "**Datatilsynet**, Postboks 458 Sentrum, 0105 Oslo, Norway. Phone +47 22 39 69 00. [datatilsynet.no](https://www.datatilsynet.no/en/). If you live or work in another EEA country, you can also complain to the supervisory authority there.",
        },
      ],
    },
    {
      id: "security",
      title: "How we protect data",
      blocks: [
        {
          type: "p",
          text: "We use technical and organisational measures to protect data: encrypted transfer (HTTPS), access control so that only those who need the data can access it, data processing agreements with providers, and procedures for handling incidents. Our deliveries are covered by 99X's certified management systems for information security (ISO/IEC 27001) and privacy (ISO/IEC 27701).",
        },
        {
          type: "p",
          text: "If a personal data breach occurs, we notify Datatilsynet within 72 hours when the rules require it. If the breach is likely to result in a high risk to you, we will also notify you.",
        },
      ],
    },
    {
      id: "other",
      title: "Children, links and changes",
      blocks: [
        {
          type: "p",
          text: "Our website and services are aimed at businesses, not children, and we do not knowingly collect data about children.",
        },
        {
          type: "p",
          text: "The website links to other websites, such as LinkedIn, 99x.io and Google Maps. We are not responsible for how they process personal data. Please read their privacy policies.",
        },
        {
          type: "p",
          text: "We update this policy when our processing changes. The date at the top shows when it was last changed. If there are material changes that affect you, we will let you know on the website or directly, and ask for new consent where needed.",
        },
      ],
    },
  ],
};

export const privacy: Record<Locale, PrivacyDoc> = { no, en };
