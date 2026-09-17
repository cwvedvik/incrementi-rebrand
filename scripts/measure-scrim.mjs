/**
 * Måler hvor sterkt et Off White-slør må være for at mørk tekst skal holde
 * kontrastkravet over et foto.
 *
 * Regionsnitt alene lyver: en region kan ha et greit snitt og likevel ha
 * mørke flekker der en tekstlinje faktisk ligger. Derfor rapporteres både
 * snittet og 10. persentil, altså de mørkeste pikslene, og kravet settes
 * mot persentilen.
 */
import sharp from "sharp";

const OFF_WHITE = [232, 227, 222];
const TEXT = { overskrift: "#283b2b", brødtekst: "#344d38" };

const srgb = (v) => {
  v /= 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};
const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
const hexRgb = (h) => h.replace("#", "").match(/../g).map((x) => parseInt(x, 16));
const contrast = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)];
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};
const over = (rgb, alpha) =>
  rgb.map((v, i) => OFF_WHITE[i] * alpha + v * (1 - alpha));

/** Minste sløralfa som får teksten opp til målkontrasten. */
function neededAlpha(rgb, textHex, target) {
  const text = hexRgb(textHex);
  for (let a = 0; a <= 1.0001; a += 0.01) {
    if (contrast(text, over(rgb, a)) >= target) return a;
  }
  return null;
}

async function region(file, { x0, x1, y0, y1 }) {
  const img = sharp(file);
  const { width, height } = await img.metadata();
  const left = Math.round(x0 * width);
  const top = Math.round(y0 * height);
  const w = Math.max(1, Math.round((x1 - x0) * width));
  const h = Math.max(1, Math.round((y1 - y0) * height));

  // extract() må bli sin egen buffer, ellers leser stats() hele bildet
  const buf = await sharp(file).extract({ left, top, width: w, height: h }).toBuffer();
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });

  const px = [];
  let sum = [0, 0, 0];
  for (let i = 0; i < data.length; i += info.channels) {
    const rgb = [data[i], data[i + 1], data[i + 2]];
    px.push({ rgb, l: lum(rgb) });
    sum = sum.map((s, k) => s + rgb[k]);
  }
  px.sort((a, b) => a.l - b.l);
  const n = px.length;
  return {
    mean: sum.map((s) => s / n),
    p10: px[Math.floor(n * 0.1)].rgb,
    dims: `${w}x${h}`,
  };
}

const JOBS = [
  {
    label: "HERO — 110c",
    file: "public/media/environment/2026_Incrementi_fotoCRoka_110c.jpg",
    regions: {
      // Tekstkolonnen slik den faktisk rendres: venstre kant på ca 17 % og
      // høyre kant på ca 46 % av bredden på alle desktopbredder. Blokken er
      // hevet ut av midten fordi veggen øverst i bildet er den lyseste flaten.
      "tekstkolonne (tittel)": { x0: 0.17, x1: 0.46, y0: 0.13, y1: 0.33 },
      "tekstkolonne (ingress)": { x0: 0.17, x1: 0.46, y0: 0.33, y1: 0.5 },
      "tekstkolonne (knapper)": { x0: 0.17, x1: 0.46, y0: 0.5, y1: 0.58 },
      "høyre halvdel (fotoet urørt)": { x0: 0.5, x1: 0.98, y0: 0.1, y1: 0.9 },
    },
  },
  {
    label: "BRANSJER — 007c",
    file: "public/media/environment/2026_Incrementi_fotoCRoka_007c.jpg",
    regions: {
      "topp (overskrift)": { x0: 0.02, x1: 0.98, y0: 0.05, y1: 0.28 },
      "midten (fotoet puster)": { x0: 0.02, x1: 0.98, y0: 0.3, y1: 0.6 },
      "bunn (bransjeraden)": { x0: 0.02, x1: 0.98, y0: 0.62, y1: 0.98 },
    },
  },
];

for (const job of JOBS) {
  console.log(`\n${"=".repeat(64)}\n${job.label}\n${"=".repeat(64)}`);
  for (const [name, box] of Object.entries(job.regions)) {
    const { mean, p10 } = await region(job.file, box);
    const fmt = (rgb) => rgb.map((v) => Math.round(v)).join(",").padEnd(11);
    console.log(`\n${name}`);
    console.log(`  snitt ${fmt(mean)} luminans ${lum(mean).toFixed(3)}`);
    console.log(`  p10   ${fmt(p10)} luminans ${lum(p10).toFixed(3)}  <- de mørkeste`);
    for (const [role, hex] of Object.entries(TEXT)) {
      const aMean = neededAlpha(mean, hex, 4.5);
      const aP10 = neededAlpha(p10, hex, 4.5);
      const aP10hi = neededAlpha(p10, hex, 6);
      console.log(
        `  ${role.padEnd(10)} slør for AA: snitt ${pct(aMean)}, p10 ${pct(aP10)} | for 6:1 på p10: ${pct(aP10hi)}`
      );
    }
  }
}

function pct(a) {
  return a === null ? "umulig" : `${Math.round(a * 100)}%`;
}
