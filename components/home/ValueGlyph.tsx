/**
 * Fargene bærer mening i stedet for å være dekor, og det er den samme
 * meningen overalt på siden: grønt er data og fundament, det som allerede
 * finnes og ligger fast. Magenta er valget, AI-en og kontrollpunktet, altså
 * det vi legger til. Derfor er alle bærende linjer og valgte tilstander
 * magenta, mens kilder, grunnlinjer og åpne alternativer er grønne.
 *
 * Verdiene er mørke fordi figurene står på Off White.
 */
const MAGENTA = "rgba(118, 80, 112, 0.92)";
const MAGENTA_SOFT = "rgba(118, 80, 112, 0.5)";
const GREEN = "rgba(80, 118, 86, 0.78)";
const GREEN_SOFT = "rgba(80, 118, 86, 0.45)";

export type ValueGlyphKind = "strategic" | "operational" | "financial";

/**
 * Ett fundament, flere mulige veier videre: den midterste ruten er valgt,
 * de to andre står åpne.
 */
function Strategic() {
  return (
    <>
      {/* Fundamentet er grønt, som alle steder ellers. Det er bare veivalget
          og den valgte ruten som er magenta. */}
      <path d="M8 54 H80" stroke={GREEN} strokeWidth="1.6" />
      <path d="M8 54 V47 M80 54 V47" stroke={GREEN} strokeWidth="1.6" />

      <path
        d="M44 52 C44 40, 16 38, 16 27"
        stroke={GREEN}
        strokeWidth="1.3"
        strokeDasharray="4 4"
      />
      <path d="M44 52 V27" stroke={MAGENTA} strokeWidth="1.4" />
      <path
        d="M44 52 C44 40, 72 38, 72 27"
        stroke={GREEN}
        strokeWidth="1.3"
        strokeDasharray="4 4"
      />

      <rect
        x="7"
        y="13"
        width="18"
        height="14"
        stroke={GREEN_SOFT}
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <rect
        x="35"
        y="13"
        width="18"
        height="14"
        fill="rgba(118, 80, 112, 0.14)"
        stroke={MAGENTA}
        strokeWidth="1.4"
      />
      <rect
        x="63"
        y="13"
        width="18"
        height="14"
        stroke={GREEN_SOFT}
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
    </>
  );
}

/** Spredte kilder som samles gjennom ett kontrollpunkt og kommer ut ordnet. */
function Operational() {
  return (
    <>
      <rect x="6" y="10" width="13" height="10" stroke={GREEN} strokeWidth="1.2" />
      <rect x="6" y="27" width="13" height="10" stroke={GREEN} strokeWidth="1.2" />
      <rect x="6" y="44" width="13" height="10" stroke={GREEN} strokeWidth="1.2" />

      <path
        d="M19 15 C31 15, 32 30, 41 32"
        stroke={GREEN_SOFT}
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
      <path
        d="M19 32 H41"
        stroke={GREEN_SOFT}
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
      <path
        d="M19 49 C31 49, 32 34, 41 32"
        stroke={GREEN_SOFT}
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />

      <path d="M44 8 V56" stroke={MAGENTA} strokeWidth="1.6" />
      <path d="M44 8 H51 M44 56 H51" stroke={MAGENTA} strokeWidth="1.4" />

      <path d="M52 20 H81" stroke={MAGENTA_SOFT} strokeWidth="1.3" />
      <path d="M52 32 H81" stroke={MAGENTA} strokeWidth="1.4" />
      <path d="M52 44 H81" stroke={MAGENTA_SOFT} strokeWidth="1.3" />
    </>
  );
}

/** Verdi som bygger seg opp steg for steg. Det siste steget er stiplet: valgfritt. */
function Financial() {
  return (
    <>
      <path d="M8 54 H81" stroke={GREEN} strokeWidth="1.2" />

      <rect x="12" y="41" width="13" height="13" stroke={GREEN} strokeWidth="1.25" />
      <rect x="30" y="32" width="13" height="22" stroke={GREEN} strokeWidth="1.25" />
      <rect x="48" y="23" width="13" height="31" stroke={GREEN} strokeWidth="1.25" />
      <rect
        x="66"
        y="14"
        width="13"
        height="40"
        stroke={MAGENTA_SOFT}
        strokeWidth="1.25"
        strokeDasharray="3 3"
      />

      <path
        d="M18.5 41 L36.5 32 L54.5 23 L72.5 14"
        stroke={MAGENTA}
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
    </>
  );
}

const GLYPHS: Record<ValueGlyphKind, () => React.ReactElement> = {
  strategic: Strategic,
  operational: Operational,
  financial: Financial,
};

/** Dekorativ strekfigur til verdifeltet, i samme språk som hero-diagrammet. */
export default function ValueGlyph({ kind }: { kind: ValueGlyphKind }) {
  const Shape = GLYPHS[kind];
  return (
    <svg
      className="mkt-value-glyph"
      viewBox="0 0 88 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMinYMid meet"
    >
      <Shape />
    </svg>
  );
}
