import type { LocalizedString } from "@/lib/i18n/types";

export interface Person {
  slug: string;
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  photo?: string;
  /** Uncropped portrait for the profile page */
  fullPhoto?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  /** Placeholder initials when no photo */
  initials?: string;
  /** CSS object-position for non-studio crops */
  photoPosition?: string;
}

export const PEOPLE: Person[] = [
  {
    slug: "espen-slyngstad",
    name: "Espen Slyngstad",
    role: { no: "Founding Partner", en: "Founding Partner" },
    bio: {
      no: "Espen hjelper ledere som vet hva de vil oppnå, men som strever med å få det gjennomført. Ofte skyldes det at data ligger spredt, at systemene ikke henger sammen, eller at gjennomføringen mangler tydelig eierskap. Han har utviklet strategier, vurdert forretningsmodeller, bygget nye forretningsmuligheter og ledet større endringer i flere bransjer og land. Han har også bygget og implementert dataplattformer og digitale løsninger innen industri, maritim næring, bygg og anlegg og finans. I NRC Group utviklet han den digitale strategien og ledet gjennomføringen. En felles dataplattform og et felles arbeidsverktøy ble rullet ut til hele gruppen på 18 måneder. Nå leder han arbeidet med å realisere gevinstene.",
      en: "Espen helps leaders who know what they want to achieve but struggle to get it done. Often the reason is that data is scattered, systems don't connect, or execution lacks clear ownership. He has developed strategies, assessed business models, built new business opportunities and led major change across several industries and countries. He has also built and implemented data platforms and digital solutions in industry, maritime, construction and finance. At NRC Group he developed the digital strategy and led its execution. A shared data platform and a common work tool were rolled out across the whole group in 18 months. He now leads the work of realising the gains.",
    },
    photo:
      "/media/portraits/2026_Incrementi_EspenSlyngstad_fotoCRoka_114c2_kvadrat.jpg",
    fullPhoto: "/media/portraits/full/espen-slyngstad.jpg",
    email: "espen.slyngstad@incrementi.no",
    phone: "+47 934 00 825",
    linkedin: "https://www.linkedin.com/in/espen-slyngstad-593ba631/",
  },
  {
    slug: "camilla-fledsberg-vatne",
    name: "Camilla Fledsberg Vatne",
    role: { no: "Founding Partner", en: "Founding Partner" },
    bio: {
      no: "Camilla er en erfaren og forretningsorientert teknologileder med solid merittliste fra teknologiutvikling og store endringsprosesser. Som CTO har hun ledet utviklingen av en plattformløsning og bidratt til salg og forretningsutvikling. Hun har også ledet innføringen av ERP som ansvarlig produkteier. Hun har bakgrunn som sivilingeniør, konsulent og linjeleder, og hun bygger bro mellom forretning og teknologi. Hun motiveres av å skape resultater sammen med andre.",
      en: "Camilla is an experienced, business-minded technology leader with a strong track record in technology development and large change programmes. As CTO she led the development of a platform solution and contributed to sales and business development. She has also led an ERP implementation as the accountable product owner. With a background as an engineer (MSc), consultant and line manager, she bridges business and technology. She is motivated by achieving results together with others.",
    },
    photo:
      "/media/portraits/2026_Incrementi_CamillaFledsbergVatne_fotoCRoka_157c2_kvadrat.jpg",
    fullPhoto: "/media/portraits/full/camilla-fledsberg-vatne.jpg",
    email: "camilla.vatne@incrementi.no",
    linkedin: "https://www.linkedin.com/in/camilla-fledsberg-vatne-948b51/",
  },
  {
    slug: "dag-martin-romslo",
    name: "Dag Martin Romslo",
    role: { no: "Partner", en: "Partner" },
    bio: {
      no: "Dag Martin er utdannet sivilingeniør innen teknisk kybernetikk og jobber som teknisk arkitekt og utvikler, med spesiell kompetanse innen industriell IT. Han har alltid fokus på forretningsverdi og en lidenskap for god brukeropplevelse. Dette kombinerer han med solid kunnskap om ytelses- og kostnadsoptimalisering. Han har en strukturert tilnærming til oppgaver og evner å forenkle det komplekse. Det gjør ham til en pålitelig rådgiver i kundenes digitaliseringsprosesser.",
      en: "Dag Martin holds an MSc in engineering cybernetics and works as a technical architect and developer, with particular expertise in industrial IT. He always focuses on business value and has a passion for great user experience. He combines this with solid knowledge of performance and cost optimisation. He takes a structured approach to his work and has a talent for simplifying the complex. That makes him a trusted adviser in clients' digitalisation processes.",
    },
    photo:
      "/media/portraits/2026_Incrementi_DagMartinRomslo_fotoCRoka_146c2_kvadrat.jpg",
    fullPhoto: "/media/portraits/full/dag-martin-romslo.jpg",
    email: "dag.martin.romslo@incrementi.no",
    linkedin: "https://www.linkedin.com/in/dag-martin-romslo-5397812/",
  },
  {
    slug: "carl-wilhelm-vedvik",
    name: "Carl-Wilhelm Vedvik",
    role: { no: "Partner", en: "Partner" },
    bio: {
      no: "Carl-Wilhelm er en fremoverlent og forretningsorientert teknologikonsulent. Han jobber med å implementere AI og drive AI-transformasjon hos kundene på en trygg og effektiv måte. Han var medgründer og COO i SaaS-selskapet Adline. Der var han med på å hente 20 millioner kroner i funding til utvikling og internasjonalisering av selskapet. Deretter bygde han opp AI-konsulentselskapet CWV Ventures, som ble kjøpt opp av Incrementi i 2026. Gjennom CWV Ventures har han levert rådgivningstjenester til blant andre Tripletex-brukere, Seagems og Accru Partners. I Accru Partners fungerte han som interim Head of AI i Norden.",
      en: "Carl-Wilhelm is a proactive, business-minded technology consultant. He implements AI and drives AI transformation for clients in a safe and effective way. He was co-founder and COO of the SaaS company Adline, where he helped raise NOK 20 million in funding for the company's development and international expansion. He then built the AI consultancy CWV Ventures, which Incrementi acquired in 2026. Through CWV Ventures he has advised clients including Tripletex users, Seagems and Accru Partners. At Accru Partners he served as interim Head of AI for the Nordics.",
    },
    photo:
      "/media/portraits/2026_Incrementi_CarlWilhelmVedvik_fotoCRoka_173c2_kvadrat.jpg",
    fullPhoto: "/media/portraits/full/carl-wilhelm-vedvik.jpg",
    email: "cwv@incrementi.no",
    linkedin: "https://www.linkedin.com/in/carlwilhelmvedvik/",
  },
  {
    slug: "kristov-rishi-xavier",
    name: "Kristov Rishi Xavier",
    role: { no: "Partner", en: "Partner" },
    bio: {
      no: "Rishi har bakgrunn innen byggautomasjon og styringssystemer (BACS) og IP-nettverksinfrastruktur. I 2006 gikk han over til offshore- og maritim industri. Siden da har han hatt ansvar for over 100 prosjekter, team på mer enn 25 ingeniører og underleverandører, og kontraktsverdier på over 400 MNOK. Senest var han Head of Projects i Aukra Maritime. Han var med på å grunnlegge Seaquent Labs, som utvikler autonome kontrollsystemer for løfte- og håndteringsoperasjoner. Selskapet hadde exit i 2023. Under pandemien bygde og solgte han også en annen virksomhet.",
      en: "Rishi has a background in building automation and control systems (BACS) and IP network infrastructure. In 2006 he moved into the offshore and maritime industry. Since then he has been responsible for more than 100 projects, teams of over 25 engineers and subcontractors, and contract values above NOK 400 million. Most recently he was Head of Projects at Aukra Maritime. He co-founded Seaquent Labs, which develops autonomous control systems for lifting and handling operations, and which exited in 2023. During the pandemic he also built and sold another business.",
    },
    photo: "/media/portraits/2026_Incrementi_KristovRishiXavier_kvadrat.jpg",
    fullPhoto: "/media/portraits/full/kristov-rishi-xavier.jpg",
    initials: "KX",
    email: "krx@incrementi.no",
    linkedin: "https://www.linkedin.com/in/krxavier/",
  },
  {
    slug: "enea-maria-jantsch",
    name: "Enea Maria Jantsch",
    role: { no: "Project Coordinator", en: "Project Coordinator" },
    bio: {
      no: "Enea Maria har bakgrunn innen informatikk og maskinlæring. Hun har erfaring med AI, digitalisering, informasjonsarkitektur, datakvalitet og prosjektarbeid. Hun er nysgjerrig og strukturert, og hun liker å sette seg inn i komplekse problemstillinger. Hun motiveres særlig av å gjøre teknologi og informasjon mer forståelig og anvendelig, i skjæringspunktet mellom teknologi, forretning og mennesker.",
      en: "Enea Maria has a background in informatics and machine learning. She has experience with AI, digitalisation, information architecture, data quality and project work. She is curious and structured, and enjoys getting to grips with complex problems. She is especially motivated by making technology and information easier to understand and use, where technology, business and people meet.",
    },
    photo:
      "/media/portraits/2026_Incrementi_EneaJantsch_fotoCRoka_134c2_kvadrat.jpg",
    fullPhoto: "/media/portraits/full/enea-maria-jantsch.jpg",
    email: "enea.jantsch@incrementi.no",
    linkedin: "https://www.linkedin.com/in/enea-maria-jantsch-informatikkstudent/",
  },
];

export function getPerson(slug: string): Person | undefined {
  return PEOPLE.find((p) => p.slug === slug);
}

export function personPath(slug: string): string {
  return `/team/${slug}`;
}
