/**
 * Klargjør merkevarefiler fra designleveransen.
 *
 * Logoen leveres i én utgave: svart ordmerke med farget merke, ment for lys
 * bakgrunn. Footeren står på mørk grønn, så den lyse varianten må utledes.
 * Utledningen er en ren fargeombytting per grunnfarge, ikke en filtrering:
 * PNG-en bruker rett alfa, så kantpiksler har grunnfargens RGB og varierer
 * bare i alfa. Da kan hver farge byttes eksakt uten at kantene får glorie.
 *
 * Kjør: node scripts/prepare-brand-assets.mjs <logo.png> <portrett.jpg>
 */
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const [logoKilde, portrettKilde] = process.argv.slice(2);
if (!logoKilde || !portrettKilde) {
  console.error("Bruk: node scripts/prepare-brand-assets.mjs <logo.png> <portrett.jpg>");
  process.exit(1);
}

/** Fargene i leveransen, og hva de blir på mørk bakgrunn. */
const PAA_MOERK = {
  blekk: [0xf1, 0xee, 0xea], // svart ordmerke → Off White, 13,11:1 mot #1c291e
  gronn: [0x7a, 0xa8, 0x82], // #507656 er for mørk mot #1c291e
  magenta: [0xa8, 0x7a, 0xa0], // #765070 likeså
};

function klassifiser(r, g, b) {
  if (g > r && g > b) return "gronn";
  if (r > g && b > g) return "magenta";
  return "blekk";
}

/** WCAG-kontrast, for å kunne dokumentere at merket faktisk leses. */
function luminans([r, g, b]) {
  const k = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * k[0] + 0.7152 * k[1] + 0.0722 * k[2];
}
function kontrast(a, b) {
  const [x, y] = [luminans(a), luminans(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

// ——— Logo for lys bakgrunn: brukes som levert ———
await sharp(logoKilde).png({ compressionLevel: 9 }).toFile("public/incrementi-logo-ink.png");

// ——— Logo for mørk bakgrunn: utledet ———
const { data, info } = await sharp(logoKilde)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const ut = Buffer.from(data);
const brukt = new Set();
for (let i = 0; i < ut.length; i += info.channels) {
  if (ut[i + 3] === 0) continue;
  const gruppe = klassifiser(ut[i], ut[i + 1], ut[i + 2]);
  brukt.add(gruppe);
  const [r, g, b] = PAA_MOERK[gruppe];
  ut[i] = r;
  ut[i + 1] = g;
  ut[i + 2] = b;
}

await sharp(ut, {
  raw: { width: info.width, height: info.height, channels: info.channels },
})
  .png({ compressionLevel: 9 })
  .toFile("public/incrementi-logo.png");

// ——— Portrett: ned til samme format som de øvrige i teamet ———
await sharp(portrettKilde)
  .resize(1080, 1080, { fit: "cover" })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile("public/media/portraits/2026_Incrementi_KristovRishiXavier_kvadrat.jpg");

// ——— Rapport ———
const LYS = [0xe8, 0xe3, 0xde];
const MOERK = [0x1c, 0x29, 0x1e];
console.log("grupper funnet i logoen:", [...brukt].join(", "));
console.log("\nkontrast på lys flate #e8e3de (som levert):");
console.log("  svart ordmerke ", kontrast([0, 0, 0], LYS).toFixed(2) + ":1");
console.log("  grønn stolpe   ", kontrast([0x50, 0x76, 0x56], LYS).toFixed(2) + ":1");
console.log("  magenta stolpe ", kontrast([0x76, 0x50, 0x70], LYS).toFixed(2) + ":1");
console.log("\nkontrast på mørk flate #1c291e (utledet):");
for (const [navn, farge] of Object.entries(PAA_MOERK)) {
  console.log("  " + navn.padEnd(15), kontrast(farge, MOERK).toFixed(2) + ":1");
}
