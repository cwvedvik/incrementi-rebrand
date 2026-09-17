/**
 * Gjør de sju kundelogoene om til hvite monokrome merker på gjennomsiktig
 * bunn, klare til å legges på det dypgrønne båndet.
 *
 * Logoene kommer i fire formater og tre helt ulike konstruksjoner, så de kan
 * ikke behandles likt:
 *
 *   silhouette  Fargekunst på gjennomsiktig bunn. Alfakanalen er merket, så
 *               den brukes rett som maske. Optimar, Seagems.
 *   svg-fills   Rene fyll uten bakgrunn. Alle fyll settes til hvitt.
 *               accru, Europris.
 *   svg-keep    Hvit tekst stanset ut av en farget flate. Silhuett ville gitt
 *               en solid klump, så bakgrunnsklassene fjernes og bare de hvite
 *               bokstavformene beholdes. HRP, Takringen.
 *   knockout    Samme konstruksjon, men bare som raster. Masken bygges fra de
 *               lyse pikslene i stedet. Thon Hotels.
 *
 * Til slutt trimmes hvert merke til sin egen ramme og skaleres optisk, siden
 * sideforholdene spenner fra 1,0 til 5,1 og uniform høyde ville gjort
 * Seagems fem ganger bredere enn Thon.
 */
import sharp from "sharp";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const SRC = path.join(os.homedir(), "Documents/Incrementi");
const OUT = "public/media/clients";

/** Felles lerret. Alle merker leveres i samme boks, sentrert. */
const BOX = { w: 640, h: 160 };
/**
 * Taket merket ikke får bryte, uansett hva arealregnestykket sier. Høyden er
 * satt høyere enn arealmålet krever for de brede ordmerkene, fordi de to
 * stablede merkene, Takringen og Thon, ellers blir klemt: de er nesten
 * kvadratiske og kommer aldri opp i målarealet innenfor en lav ramme.
 */
const FIT = { w: 600, h: 130 };
/**
 * Optisk balansering skjer på blekkareal, ikke på rammen. To merker med
 * samme høyde kan se helt ulike ut i vekt: HRP er en tett blokk og Optimar
 * er en tynn strek. Antall dekkede piksler er et langt bedre mål på hvor
 * tungt et merke leser enn bredden og høyden på rammen rundt det.
 */
const INK_TARGET = 13000;

const LOGOS = [
  {
    slug: "optimar",
    name: "Optimar",
    file: "Optimar-Logo-m-Farge-e1772114676553.png",
    mode: "silhouette",
  },
  {
    slug: "seagems",
    name: "Seagems",
    file: "Seagems-logoHorizontal-fullColor-digital-sand.webp",
    mode: "silhouette",
  },
  {
    slug: "takringen",
    name: "Takringen",
    file: "Takringen-Logo_Hovedlogo.svg",
    mode: "svg-keep",
    keep: ["cls-4"],
  },
  {
    slug: "accru-partners",
    name: "Accru Partners",
    file: "accru_logo.svg",
    mode: "svg-fills",
  },
  {
    slug: "europris",
    name: "Europris",
    file: "europris_logo.svg",
    mode: "svg-fills",
  },
  {
    slug: "hrp",
    name: "HRP",
    file: "logo-hrp.svg",
    mode: "svg-keep",
    keep: ["st1"],
    // De åtte hvite <rect>-ene er 2 px skillelinjer inne i den røde flaten,
    // ikke del av merket. De strekker seg over hele høyden og ville blåst
    // opp rammen slik at bokstavene ble knøttsmå.
    dropTags: ["rect"],
  },
  {
    slug: "thon-hotels",
    name: "Thon Hotels",
    file: "thonhotels-logo.png",
    mode: "knockout",
  },
];

/** Beholder bare de oppgitte klassene og maler dem hvite. */
function svgKeepClasses(svgText, keep, dropTags = []) {
  const elements = svgText.match(/<(path|polygon|rect|circle|polyline)\b[^>]*\/?>/g) || [];
  const kept = elements.filter((el) => {
    const tag = el.match(/^<(\w+)/)[1];
    if (dropTags.includes(tag)) return false;
    const cls = el.match(/class="([^"]*)"/);
    return cls && keep.some((k) => cls[1].split(/\s+/).includes(k));
  });
  const open = svgText.match(/<svg\b[^>]*>/)[0];
  const clean = kept.map((el) =>
    el
      .replace(/\s*class="[^"]*"/, "")
      .replace(/\s*fill="[^"]*"/, "")
      // Kildefilene skriver <path ...></path>, og siden bare åpningstaggen
      // plukkes ut må den lukkes selv, ellers blir SVG-en ugyldig.
      .replace(/\/?>$/, "/>")
  );
  return `${open}<g fill="#ffffff">${clean.join("")}</g></svg>`;
}

/** Setter alle fyll til hvitt, men lar fill="none" stå. */
function svgWhitenFills(svgText) {
  return svgText
    .replace(/fill="(?!none)[^"]*"/g, 'fill="#ffffff"')
    .replace(/fill:\s*(?!none)#?[0-9a-fA-F]{3,8}/g, "fill:#ffffff");
}

/** Bygger et hvitt merke med den gitte gråtonemasken som alfa. */
async function whiteFromMask(maskBuf, width, height) {
  return sharp({
    create: { width, height, channels: 3, background: "#ffffff" },
  })
    .joinChannel(maskBuf, { raw: { width, height, channels: 1 } })
    .png()
    .toBuffer();
}

async function maskFromAlpha(file) {
  const img = sharp(file, { density: 600 });
  const { width, height } = await img.metadata();
  const alpha = await sharp(file, { density: 600 })
    .ensureAlpha()
    .extractChannel("alpha")
    .raw()
    .toBuffer();
  return { mask: alpha, width, height };
}

/** Lyse piksler blir merket. Alt annet, inkludert den fargede flaten, faller bort. */
async function maskFromLightPixels(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const n = info.width * info.height;
  const mask = Buffer.alloc(n);
  for (let i = 0, p = 0; p < n; i += info.channels, p += 1) {
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
    const light = (r + g + b) / 3;
    // Terskel ved 190: ren hvit tekst treffes, den røde flaten (~200,30,40
    // i snitt per kanal er langt lavere) gjør det ikke. Antialiasing mellom
    // 150 og 190 tas med som delvis dekning, så kantene ikke blir harde.
    let v = 0;
    if (light >= 190) v = 255;
    else if (light >= 150) v = Math.round(((light - 150) / 40) * 255);
    mask[p] = Math.round((v * a) / 255);
  }
  return { mask, width: info.width, height: info.height };
}

async function build(logo) {
  const src = path.join(SRC, logo.file);
  let flat;

  if (logo.mode === "silhouette") {
    const { mask, width, height } = await maskFromAlpha(src);
    flat = await whiteFromMask(mask, width, height);
  } else if (logo.mode === "knockout") {
    const { mask, width, height } = await maskFromLightPixels(src);
    flat = await whiteFromMask(mask, width, height);
  } else {
    const raw = fs.readFileSync(src, "utf8");
    const edited =
      logo.mode === "svg-keep"
        ? svgKeepClasses(raw, logo.keep, logo.dropTags)
        : svgWhitenFills(raw);
    // Rasteriseres stort, så trimming og nedskalering blir skarpt
    flat = await sharp(Buffer.from(edited), { density: 900 }).png().toBuffer();
  }

  // Trim til merkets egen ramme, så sideforholdet blir det reelle og ikke
  // det kildefilen tilfeldigvis hadde.
  const trimmed = await sharp(flat).trim({ threshold: 1 }).png().toBuffer();
  const meta = await sharp(trimmed).metadata();

  // Finn høyden som gir riktig blekkareal, og la deretter rammetaket
  // overstyre hvis merket er så bredt eller høyt at det ikke får plass.
  const inkShare = await inkRatio(trimmed);
  const areaAt = (h) => inkShare * h * h * (meta.width / meta.height);
  const idealH = Math.sqrt(INK_TARGET / (inkShare * (meta.width / meta.height)));
  const fitH = Math.min(
    Math.round(idealH * (logo.nudge ?? 1)),
    FIT.h,
    Math.round((FIT.w * meta.height) / meta.width)
  );
  const resized = await sharp(trimmed)
    .resize({ height: fitH, withoutEnlargement: false })
    .png()
    .toBuffer();
  const rMeta = await sharp(resized).metadata();
  const ink = Math.round(areaAt(fitH));

  const out = path.join(OUT, `${logo.slug}.png`);
  await sharp({
    create: {
      width: BOX.w,
      height: BOX.h,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: resized,
        left: Math.round((BOX.w - rMeta.width) / 2),
        top: Math.round((BOX.h - rMeta.height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(out);

  return {
    slug: logo.slug,
    kilde: `${meta.width}x${meta.height}`,
    ar: (meta.width / meta.height).toFixed(2),
    plassert: `${rMeta.width}x${rMeta.height}`,
    blekk: String(ink),
  };
}

/** Andelen av rammen som faktisk er dekket, vektet med alfa. */
async function inkRatio(buf) {
  const { data, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let sum = 0;
  for (let i = info.channels - 1; i < data.length; i += info.channels) sum += data[i];
  return sum / 255 / (info.width * info.height);
}

/**
 * Incrementi-logoen er levert som nesten hvit: lysheten på de synlige
 * pikslene er 247 av 255. Den fungerte på mørk bunn, men blir usynlig på
 * Off White. Alfakanalen brukes derfor som maske for en mørk variant, slik
 * at den hvite originalen kan bli stående til bruk på det dypgrønne båndet.
 */
async function buildBrandLogo() {
  const src = "public/incrementi-logo.png";
  const { width, height } = await sharp(src).metadata();
  const alpha = await sharp(src).ensureAlpha().extractChannel("alpha").raw().toBuffer();
  await sharp({ create: { width, height, channels: 3, background: "#283b2b" } })
    .joinChannel(alpha, { raw: { width, height, channels: 1 } })
    .png({ compressionLevel: 9 })
    .toFile("public/incrementi-logo-ink.png");
  console.log(`incrementi-logo-ink.png  ${width}x${height}`);
}

fs.mkdirSync(OUT, { recursive: true });
await buildBrandLogo();
const rows = [];
for (const logo of LOGOS) rows.push(await build(logo));
console.log("slug".padEnd(16), "trimmet".padEnd(12), "ar".padEnd(6), "plassert".padEnd(10), "blekk");
for (const r of rows)
  console.log(
    r.slug.padEnd(16),
    r.kilde.padEnd(12),
    r.ar.padEnd(6),
    r.plassert.padEnd(10),
    r.blekk
  );

// Kontaktark på det dypgrønne båndet, slik de faktisk vil bli sett
const tiles = await Promise.all(
  LOGOS.map((l) =>
    sharp(path.join(OUT, `${l.slug}.png`)).resize({ width: 320, height: 80, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer()
  )
);
const cols = 2;
await sharp({
  create: {
    width: 320 * cols,
    height: 80 * Math.ceil(tiles.length / cols),
    channels: 3,
    background: "#1c291e",
  },
})
  .composite(tiles.map((b, i) => ({ input: b, left: (i % cols) * 320, top: Math.floor(i / cols) * 80 })))
  .png()
  .toFile("/tmp/logos-on-deep.png");
console.log("\nkontaktark: /tmp/logos-on-deep.png");
