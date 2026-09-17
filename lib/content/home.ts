import type { LocalizedString, LocalizedStringArray } from "@/lib/i18n/types";

/** Homepage marketing copy - sourced from Incrementi_homepage_prototype_v22_1 (NO/EN). */

export const homeNav = {
  journey: {"no":"Slik jobber vi","en":"How we work"},
  deliver: {"no":"Hva vi leverer","en":"What we deliver"},
  why: {"no":"Hvorfor oss","en":"Why us"},
  references: {"no":"Referanser","en":"References"},
  about: {"no":"Om oss","en":"About us"},
  faq: {"no":"FAQ","en":"FAQ"},
  talk: {"no":"Snakk med oss","en":"Talk to us"},
  platform: { no: "Plattformen", en: "The Platform" },
  results: { no: "Resultater", en: "Results" },
} as const;

export const home = {
  hero: {
    titleLead: {"no":"Enklere hverdag –","en":"A simpler workday –"},
    titleRest: {"no":"fra fragmenterte data til målbar produktivitet","en":"from fragmented data to measurable productivity"},
    lead: {"no":"Incrementi samler data fra systemene dere allerede har og bygger et fundament for innsikt og automatisering. Dette hjelper bedrifter med å forenkle arbeidsprosesser, få systemer og data til å henge sammen, og bygge løsninger ansatte tar i bruk. Vi rådgir først, validerer før dere investerer, og bygger steg for steg, med trygg og kontrollert bruk av AI når det er riktig verktøy.","en":"Incrementi gathers data from the systems you already have and builds a foundation for insight and automation. This helps companies simplify work processes, connect systems and data, and build solutions employees put to use. We advise first, validate before you invest, and build step by step, with safe and controlled use of AI when it is the right tool."},
    cta: {"no":"Book en strategisamtale","en":"Book a strategy call"},
    secondary: {"no":"Se hvordan vi jobber","en":"See how we work"},
    stats: [
      { value: "650+", label: {"no":"spesialister gjennom 99X","en":"specialists through 99X"} },
      { value: {"no":"20 år","en":"20 years"}, label: {"no":"med digital produktutvikling i gruppen","en":"of digital product development in the group"} },
      { value: "ISO", label: { no: "9001 · 27001 · 27701", en: "9001 · 27001 · 27701" } },
    ],
  },
  logos: {
    eyebrow: {"no":"Utvalgte referanser","en":"Selected references"},
    items: ["HRP", "Sebastian", "Maritech", "Accru Partners", "Envo"],
  },
  journey: {
    eyebrow: {"no":"Slik jobber vi","en":"How we work"},
    title: {"no":"En kundereise som tilpasser seg dere.","en":"A customer journey that adapts to you."},
    lead: {"no":"Utgangspunktet er alltid virksomheten og hvordan dere jobber. Hovedstegene er rådgivning, validering, leveranse og partnerskap. Underveis velger vi de byggeklossene som trengs. Under ser dere hva som skjer i hvert steg.","en":"The starting point is always your business and how you work. The main steps are advisory, validation, delivery and partnership. Along the way we choose the building blocks you need. Below you can see what happens in each step."},
    steps: [
      {
        n: "01",
        title: {"no":"Rådgivning","en":"Advisory"},
        short: {"no":"Målbilde, prioriteringer, forretningsverdi og retning. Vi hjelper dere å velge hva som er verdt å gjøre først.","en":"Target picture, priorities, business value and direction. We help you choose what is worth doing first."},
        detailEyebrow: {"no":"01 · Rådgivning","en":"01 · Advisory"},
        detailTitle: {"no":"Først må vi forstå hvordan dere jobber.","en":"First we need to understand how you work."},
        detailBody: {"no":"God rådgivning handler først om å forstå hvor tiden forsvinner, hvor informasjon stopper opp og hvilke problemer som er verdt å løse.","en":"Good advisory starts with understanding where time is lost, where information gets stuck and which problems are worth solving."},
        checks: {"no":["Forretningsmål, mulige gevinster og prioritering","Arbeidsprosesser, brukerbehov og flaskehalser","System- og datalandskap, arkitektur og risiko","Realistisk roadmap, omfang og investeringsnivå"],"en":["Business goals, potential gains and priorities","Work processes, user needs and bottlenecks","System and data landscape, architecture and risk","A realistic roadmap, scope and investment level"]},
        image: "/media/environment/2026_Incrementi_fotoCRoka_038c.jpg",
      },
      {
        n: "02",
        title: {"no":"Validering","en":"Validation"},
        short: {"no":"Vi bekrefter brukerbehov, datagrunnlag, gjennomførbarhet og omfang, gjerne gjennom en rask prototype.","en":"We confirm user needs, data foundation, feasibility and scope, often through a rapid prototype."},
        detailEyebrow: {"no":"02 · Validering","en":"02 · Validation"},
        detailTitle: {"no":"Test før dere investerer.","en":"Test before you invest."},
        detailBody: {"no":"Vi bruker prototyper som et beslutningsverktøy. Målet er å redusere usikkerhet tidlig, før store utviklingsressurser settes inn.","en":"We use prototypes as a decision-making tool. The goal is to reduce uncertainty early, before major development resources are committed."},
        checks: {"no":["Er dette et reelt brukerbehov, og vil løsningen bli brukt?","Har vi tilgang til dataene, og er kvaliteten god nok?","Er arkitekturen teknisk og sikkerhetsmessig gjennomførbar?","Kan vi definere et tydelig omfang og et troverdig kostnadsbilde?"],"en":["Is this a real user need, and will the solution be used?","Do we have access to the data, and is the quality good enough?","Is the architecture technically feasible and secure?","Can we define a clear scope and a credible cost picture?"]},
        image: "/media/environment/2026_Incrementi_fotoCRoka_093c.jpg",
      },
      {
        n: "03",
        title: {"no":"Leveranse","en":"Delivery"},
        short: {"no":"Vi bygger stegvis på et gjenbrukbart fundament. AI-assistert utvikling gir kort leveransetid, med full kontroll.","en":"We build step by step on a reusable foundation. AI-assisted development means short delivery times, with full control."},
        detailEyebrow: {"no":"03 · Leveranse","en":"03 · Delivery"},
        detailTitle: {"no":"Bygg det dere trenger på et fundament som kan gjenbrukes.","en":"Build what you need on a foundation that can be reused."},
        detailBody: {"no":"Hvor leveransen starter, avhenger av situasjonen. For noen begynner den med integrasjoner og data. For andre med en ny applikasjon eller modernisering av et eksisterende system. Vi setter sammen løpet som passer.","en":"Where delivery starts depends on your situation. For some it begins with integrations and data. For others, a new application or modernisation of an existing system. We put together the path that fits."},
        checks: {"no":["Klikkbare prototyper med AI-verktøy, validert mot reelle brukere før dere investerer","Validerte prototyper bygges om til produksjonsklar kode, med kvalitetssikring i hvert steg","AI-agenter jobber sammen med utviklerne våre, med roller, rettigheter og sporbarhet"],"en":["Clickable prototypes built with AI tools, validated with real users before you invest","Validated prototypes are rebuilt as production-ready code, with quality assurance at every step","AI agents work alongside our developers, with roles, permissions and traceability"]},
        image: "/media/environment/2026_Incrementi_fotoCRoka_110c.jpg",
      },
      {
        n: "04",
        title: {"no":"Partnerskap & forvaltning","en":"Partnership & management"},
        short: {"no":"Videreutvikling, modernisering, produktledelse og støtte over tid, i takt med virksomhetens behov.","en":"Further development, modernisation, product management and support over time, in step with your needs."},
        detailEyebrow: {"no":"04 · Partnerskap & forvaltning","en":"04 · Partnership & management"},
        detailTitle: {"no":"Vi blir med videre etter leveransen.","en":"We stay with you after delivery."},
        detailBody: {"no":"Et godt digitalt fundament skal utvikle seg sammen med virksomheten. Vi kan ta et langsiktig ansvar for produktledelse, videreutvikling, plattform og modernisering, eller overføre kompetansen til deres eget team.","en":"A good digital foundation should evolve with your business. We can take long-term responsibility for product management, further development, platform and modernisation, or transfer the competence to your own team."},
        checks: {"no":["Produktledelse og prioritering av neste steg","Videreutvikling og applikasjonsforvaltning","Arkitektur, sikkerhet, data governance og AI governance","Fleksibel kapasitet: dere velger tempoet"],"en":["Product management and prioritising the next step","Further development and application management","Architecture, security, data governance and AI governance","Flexible capacity: you set the pace"]},
        image: "/media/environment/2026_Incrementi_fotoCRoka_021c.jpg",
      },
    ],
  },
  deliver: {
    eyebrow: {"no":"Hva vi leverer","en":"What we deliver"},
    title: {"no":"Fra rådgivning til løsninger i drift.","en":"From advisory to solutions in operation."},
    lead: {"no":"Vi kombinerer senior forretningsforståelse med teknologisk gjennomføringskraft. AI er en viktig del av verktøykassen, og vi bruker den der den løser et reelt problem.","en":"We combine senior business understanding with strong technical delivery. AI is an important part of our toolbox, and we use it where it solves a real problem."},
    groups: [
      {
        label: {"no":"Rådgivning","en":"Advisory"},
        items: [
          {
            title: {"no":"Digital retning og produktledelse","en":"Digital direction and product management"},
            body: {"no":"Prioritering, roadmap, arkitektur, business case og løpende produktledelse, tett på ledelse og drift.","en":"Priorities, roadmap, architecture, business case and ongoing product management, close to leadership and operations."},
          },
        ],
      },
      {
        label: {"no":"Utvikling","en":"Development"},
        items: [
          {
            title: {"no":"Et gjenbrukbart datagrunnlag","en":"A reusable data foundation"},
            body: {"no":"Vi kobler sammen systemer, applikasjoner, maskindata og IoT slik at data kan brukes på tvers.","en":"We connect systems, applications, machine data and IoT so data can be used across your business."},
          },
          {
            title: {"no":"Tilpassede applikasjoner","en":"Tailored applications"},
            body: {"no":"Brukervennlige arbeidsflater som automatiserer prosesser, støtter felt og drift og gir folk informasjonen de trenger, der de trenger den.","en":"User-friendly applications that automate processes, support field and operations, and give people the information they need, where they need it."},
          },
          {
            title: {"no":"Legacy som får nytt liv","en":"Legacy given new life"},
            body: {"no":"Vi moderniserer eksisterende programvare og arkitektur når det er smartere enn å starte på nytt.","en":"We modernise existing software and architecture when that is smarter than starting over."},
          },
        ],
      },
      {
        label: {"no":"AI","en":"AI"},
        items: [
          {
            title: {"no":"AI operations & control","en":"AI operations & control"},
            body: {"no":"Et kontekst- og kontrollag som gjør hele virksomheten klar for AI: modellene forstår hvordan selskapet henger sammen, og all bruk, fra assistenter og automatisering til egne agenter, skjer med roller, rettigheter, sporbarhet og kostnadskontroll.","en":"A context and control layer that makes your whole business ready for AI: the models understand how your company fits together, and all use, from assistants and automation to your own agents, happens with roles, permissions, traceability and cost control."},
          },
          {
            title: {"no":"Agenter der det gir verdi","en":"Agents where they add value"},
            body: {"no":"Vi klargjør data, verktøy og arbeidsprosesser for agenter når det finnes et konkret behov og et tydelig kontrollregime er på plass.","en":"We prepare data, tools and work processes for agents when there is a concrete need and a clear control regime is in place."},
          },
        ],
      },
    ],
  },
  why: {
    eyebrow: {"no":"Hvorfor Incrementi","en":"Why Incrementi"},
    title: {"no":"Et alternativ til den tradisjonelle konsulentmodellen.","en":"An alternative to the traditional consulting model."},
    lead: {"no":"Dere jobber direkte med et kompakt seniorteam, ikke et lag av mellomledd. Modellen gir mellomstore virksomheter enterprise-teknologi, med kapasiteten, styringen og sikkerheten som kreves når kompleksiteten vokser.","en":"You work directly with a compact senior team, not layers of intermediaries. The model gives mid-sized companies enterprise technology, with the capacity, governance and security required as complexity grows."},
    marketEyebrow: {"no":"Der markedets svar kommer til kort","en":"Where the market's answers fall short"},
    marketBody: {"no":"Rådgivere leverer veikart og rapporter, men byggingen kommer aldri. Plattformleverandører tar eierskap til både dataene og veikartet deres. Og nye AI-verktøy viser imponerende demoer på toppen av rotete data, uten fundamentet som gjør dem pålitelige.","en":"Advisers deliver roadmaps and reports, but the build never comes. Platform vendors take ownership of both your data and your roadmap. And new AI tools show impressive demos on top of messy data, without the foundation that makes them reliable."},
    answerEyebrow: {"no":"Vårt svar","en":"Our answer"},
    answers: [
      {
        title: {"no":"Vi leverer i produksjon.","en":"We deliver in production."},
        body: {"no":"Rådgivningen vår ender i fungerende løsninger, ikke i rapporter. Vi bygger stegvis, og hvert steg står på egne ben.","en":"Our advisory ends in working solutions, not reports. We build step by step, and every step stands on its own."},
      },
      {
        title: {"no":"Dere eier alt fra dag én.","en":"You own everything from day one."},
        body: {"no":"Kildekode, data og design overføres fortløpende. Kapasitet skaleres med behovet, og dere kan stoppe eller bytte leverandør når som helst.","en":"Source code, data and design are transferred continuously. Capacity scales with your needs, and you can stop or switch supplier at any time."},
      },
      {
        title: {"no":"Vi bygger fundamentet først.","en":"We build the foundation first."},
        body: {"no":"Vi bryter ned datasiloer uten å bytte ut kjernesystemene deres. Egne data blir grunnlaget for forenkling, automatisering og trygg bruk av AI.","en":"We break down data silos without replacing your core systems. Your own data becomes the basis for simplification, automation and the safe adoption of AI."},
      },
    ],
    valueEyebrow: {"no":"Verdien vi leverer","en":"The value we deliver"},
    valueLead: {"no":"Alt vi bygger skal styrke konkurransekraften deres.","en":"Everything we build should strengthen your competitiveness."},
    values: [
      {
        glyph: "strategic",
        metric: {"no":"Strategisk","en":"Strategic"},
        title: {"no":"Fleksibilitet for det som kommer","en":"Flexibility for what comes next"},
        body: {"no":"En arkitektur som lar dere utnytte den raske teknologiutviklingen. Fleksibiliteten ligger i et data først-fundament.","en":"An architecture that lets you exploit the rapid pace of technology development. The flexibility comes from a data-first foundation."},
      },
      {
        glyph: "operational",
        metric: {"no":"Operasjonelt","en":"Operational"},
        title: {"no":"Forenkling og kontroll i driften","en":"Simplification and control in operations"},
        body: {"no":"Automatisering, forenkling og kontroll i hele driften. Sanntidsinnsikt fra maskindata og IoT-sensorer.","en":"Automation, simplification and control across the operation. Live insight from machine data and IoT sensors."},
      },
      {
        glyph: "financial",
        metric: {"no":"Finansielt","en":"Financial"},
        title: {"no":"Rask leveranse, transparent kostnad","en":"Fast delivery, transparent cost"},
        body: {"no":"En rask leveransemodell med variabel og transparent kostnad. Ingen leverandørbinding. Dere eier IP-en.","en":"A fast delivery model with variable, transparent cost. No vendor lock-in. You own the IP."},
      },
    ],
    sovereigntyTitle: {"no":"Digital suverenitet på deres premisser","en":"Digital sovereignty on your terms"},
    sovereigntyBody: {"no":"Vi leverer på Microsoft og AWS. Når digital suverenitet er viktig, tilbyr vi også løsninger basert på åpen kildekode og europeisk hosting gjennom vår finske partner UpCloud, med fullt eierskap til kode og data.","en":"We deliver on Microsoft and AWS. When digital sovereignty matters, we also offer open-source solutions and European hosting through our Finnish partner UpCloud, with full ownership of code and data."},
    partners: [
      { name: "UpCloud", role: {"no":"Europeisk hosting-partner","en":"European hosting partner"} },
      { name: "Microsoft Azure", role: {"no":"Leveranseplattform","en":"Delivery platform"} },
      { name: "AWS", role: {"no":"Leveranseplattform","en":"Delivery platform"} },
    ],
  },
  industries: {
    eyebrow: {"no":"Bransjer","en":"Industries"},
    title: {"no":"Vi jobber best der teknologi møter operativ virkelighet.","en":"We work best where technology meets operational reality."},
    lead: {"no":"Vi jobber best med virksomheter der komplekse prosesser, flere systemer og store datamengder gjør digitalisering krevende.","en":"We work best with organisations where complex processes, multiple systems and large volumes of data make digitalisation demanding."},
    items: [
      {
        n: "01",
        title: {"no":"Industri & produksjon","en":"Industry & manufacturing"},
        body: {"no":"ERP, maskindata, IoT, operativ styring og digitalisering av arbeidsprosesser.","en":"ERP, machine data, IoT, operational control and digitalisation of work processes."},
      },
      {
        n: "02",
        title: {"no":"Maritim & havnæring","en":"Maritime & ocean industries"},
        body: {"no":"Operative løsninger, dokumentasjon, feltarbeid, sensor- og dataplattformer.","en":"Operational solutions, documentation, fieldwork, sensor and data platforms."},
      },
      {
        n: "03",
        title: {"no":"Bygg, infrastruktur & prosjekt","en":"Construction, infrastructure & projects"},
        body: {"no":"Prosjektgjennomføring, feltdata, ressursbruk, kontroll og rapportering.","en":"Project execution, field data, resource use, control and reporting."},
      },
      {
        n: "04",
        title: {"no":"Profesjonelle & finansielle tjenester","en":"Professional & financial services"},
        body: {"no":"Datagrunnlag, arbeidsflyter, automatisering og digitale kunde- og medarbeiderprosesser.","en":"Data foundations, workflows, automation and digital customer and employee processes."},
      },
    ],
  },
  references: {
    eyebrow: {"no":"Utvalgte referanser","en":"Selected references"},
    title: {"no":"Vi bygger sammen med kundene.","en":"We build together with our customers."},
    lead: {"no":"Referansene våre spenner fra dataplattform og integrasjon til skreddersydde applikasjoner, produktledelse, modernisering og nye digitale arbeidsprosesser.","en":"Our references span data platforms and integration, tailored applications, product management, modernisation and new digital work processes."},
    items: [
      { client: "NRC Group", label: {"no":"Dataplattform","en":"Data platform"} },
      { client: "Sebastian", label: {"no":"Produktledelse","en":"Product management"} },
      { client: "Maritech", label: {"no":"Maritim sektor","en":"Maritime sector"} },
      { client: "Accru Partners", label: {"no":"Referanse","en":"Reference"} },
      { client: "Envo", label: {"no":"Sensor-til-sky i industri","en":"Sensor-to-cloud in industry"} },
    ],
    ctaResults: { no: "Se resultater og caser", en: "See results and case studies" },
  },
  about: {
    eyebrow: {"no":"Hvem vi er","en":"Who we are"},
    title: {"no":"Et senior kjerneteam som kan skalere ved behov.","en":"A senior core team that scales when needed."},
    lead: {"no":"Dere jobber tett med Incrementi-teamet. Når det trengs, skalerer vi med spesialistkapasitet fra 99X innen arkitektur, utvikling, data, AI, QA, sikkerhet og prosjektledelse.","en":"You work directly with the Incrementi team. When needed, we scale with specialist capacity from 99X in architecture, development, data, AI, QA, security and project management."},
    pillars: [
      {
        title: {"no":"Enterprise-spesialist","en":"Enterprise specialist"},
        body: {"no":"Rettet mot industri, maritim næring, bygg og prosjektbasert virksomhet.","en":"Focused on industrial, maritime, construction and project-based businesses."},
      },
      {
        title: {"no":"Enklere hverdag gjennom data","en":"Simpler operations through data"},
        body: {"no":"Datadrevne applikasjoner og AI-klare løsninger bygget på etablert teknologi.","en":"Data-driven applications and AI-ready solutions built on established technology."},
      },
      {
        title: {"no":"Domenekunnskap i kjernen","en":"Domain knowledge at the core"},
        body: {"no":"Vi forstår drift og forretning, ikke bare teknologi.","en":"We understand operations and business, not just technology."},
      },
      {
        title: {"no":"Sterk lokal forankring","en":"Strong local presence"},
        body: {"no":"Lokal ledelse og kjerneteam er medeiere og gründere.","en":"Local leadership and core teams are co-owners and founders."},
      },
    ],
    groupEyebrow: {"no":"Part of 99X Group","en":"Part of 99X Group"},
    groupTitle: {"no":"Et lokalt team med et internasjonalt fagmiljø bak seg.","en":"A local team backed by an international engineering community."},
    groupBody: {"no":"Incrementi er en del av 99X Group. Vi kombinerer forretningsnær rådgivning og domeneinnsikt med gruppens brede fagmiljø, og leveransene våre er dekket av 99X’ sertifiserte styringssystemer for kvalitet, informasjonssikkerhet og personvern.","en":"Incrementi is part of 99X Group. We combine business-focused advisory and domain insight with the group's broad expertise, and our deliveries are covered by 99X's certified management systems for quality, information security and privacy."},
    badges: [
      { value: "650+", label: {"no":"teknologispesialister","en":"technology specialists"} },
      { value: "ISO 9001", label: {"no":"kvalitetsstyring","en":"quality management"} },
      { value: "ISO 27001", label: {"no":"informasjonssikkerhet","en":"information security"} },
      { value: "ISO 27701", label: {"no":"personvern","en":"privacy"} },
    ],
  },
  faq: {
    eyebrow: {"no":"Spørsmål vi ofte får","en":"Questions we often get"},
    title: {"no":"Hva betyr dette i praksis?","en":"What does this mean in practice?"},
    items: [
      {
        q: {"no":"Må vi bytte ERP eller andre kjernesystemer?","en":"Do we have to replace our ERP or other core systems?"},
        a: {"no":"Som hovedregel nei. Vi starter med det dere allerede har, kobler sammen data og arbeidsflyter og vurderer utskiftning først når det gir en tydelig forretningsmessig gevinst.","en":"As a rule, no. We start with what you already have, connect data and workflows, and consider replacement only when it brings a clear business benefit."},
      },
      {
        q: {"no":"Hva bygger dere egentlig?","en":"What do you actually build?"},
        a: {"no":"Alt fra data- og integrasjonsfundament til operative applikasjoner, modernisering av eksisterende programvare, rapportering, kontrollag for AI og klargjøring for AI-agenter. Leveransen tilpasses behovet.","en":"Everything from data and integration foundations to operational applications, modernisation of existing software, reporting, control layers for AI and preparation for AI agents. The delivery is tailored to your needs."},
      },
      {
        q: {"no":"Eier vi det dere bygger?","en":"Do we own what you build?"},
        a: {"no":"Ja. Dere eier kode, data og IP fra dag én, med minst mulig leverandørbinding.","en":"Yes. You own the code, data and IP from day one, with as little vendor lock-in as possible."},
      },
      {
        q: {"no":"Hvor kommer AI inn?","en":"Where does AI come in?"},
        a: {"no":"Når det skaper verdi. AI kan både gjøre vår egen utviklingsprosess raskere og inngå i løsningene vi bygger. Men vi starter ikke med AI dersom problemet egentlig er en dårlig arbeidsflyt, manglende integrasjon eller utilgjengelige data.","en":"Where it creates value. AI can speed up our own development process and be part of the solutions we build. But we do not start with AI if the real problem is a poor workflow, a missing integration or inaccessible data."},
      },
      {
        q: {"no":"Hva koster det?","en":"What does it cost?"},
        a: {"no":"Rådgivnings- og valideringsfasen er en avgrenset, forutsigbar start. Deretter leverer vi stegvis med variabel og transparent kostnad. Dere kan stoppe etter hvert steg og fortsatt sitte igjen med en løsning i drift.","en":"The advisory and validation phase is a defined, predictable start. From there we deliver step by step with variable, transparent cost. You can stop after any step and still have a working solution in operation."},
      },
      {
        q: {"no":"Hvordan kommer vi i gang?","en":"How do we get started?"},
        a: {"no":"Start med en kort strategisamtale. Hvis det er en god match, går vi videre med en avgrenset rådgivnings- eller valideringsfase før større investeringer besluttes.","en":"Start with a short strategy call. If it is a good match, we move on to a defined advisory or validation phase before larger investments are decided."},
      },
    ],
  },
  contact: {
    eyebrow: {"no":"Neste steg","en":"Next step"},
    title: {"no":"La oss gjøre hverdagen enklere.","en":"Let's make your workday simpler."},
    lead: {"no":"Det starter med en uforpliktende samtale om hvor dere står og hva som bør være neste steg.","en":"It starts with a no-obligation conversation about where you are and what the next step should be."},
    cta: {"no":"Ta kontakt","en":"Get in touch"},
    formHeading: {"no":"Book en strategisamtale","en":"Book a strategy call"},
    person: {
      name: "Espen Slyngstad",
      role: "Founding Partner",
      email: "espen.slyngstad@incrementi.no",
      phone: "+47 934 00 825",
    },
  },
  footer: {
    line: {"no":"Rådgivning · Data · Programvare · Modernisering · AI der det gir verdi","en":"Advisory · Data · Software · Modernisation · AI where it adds value"},
    legalName: { no: "Incrementi AS", en: "Incrementi AS" },
    orgNr: { no: "Org. nr. 930 168 408", en: "Org. no. 930 168 408" },
    addressLabel: { no: "Adresse", en: "Address" },
    address: {
      no: "Dronning Eufemias gate 26, 0191 Oslo",
      en: "Dronning Eufemias gate 26, 0191 Oslo",
    },
    telLabel: { no: "Tel", en: "Tel" },
    telDisplay: { no: "934 00 825", en: "934 00 825" },
    telHref: "tel:+4793400825",
    mapsHref:
      "https://www.openstreetmap.org/?mlat=59.9086&mlon=10.7578#map=17/59.9086/10.7578",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=10.748%2C59.905%2C10.768%2C59.912&layer=mapnik&marker=59.9086%2C10.7578",
    groupBadge: {
      no: "En del av 99X Group",
      en: "Part of 99X Group",
    },
  },
} as const;
