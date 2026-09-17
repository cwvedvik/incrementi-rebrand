/**
 * Måler kontrast mot hero-en slik den faktisk komponeres i nettleseren.
 *
 * Å måle mot kildebildet lyver på to måter: object-fit: cover beskjærer det,
 * og sløret ligger ikke i fila. Her leses i stedet et skjermbilde tatt med
 * teksten skjult, så pikslene er de samme som glyffene faktisk står mot.
 *
 * Kravet settes mot 10. persentil, ikke snittet. Et bånd kan ha et greit
 * snitt og likevel ha mørke flekker der en linje ligger.
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";

const TEXT = { overskrift: "#283b2b", brødtekst: "#344d38", aksent: "#765070" };

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

/** Tekstbåndene i prosent av viewport, målt med getBoundingClientRect. */
const BANDS = {
  "tittel, linje 1–2 (58 px / 500 — AA stor = 3,0)": { x: [16.7, 45.8], y: [22, 33.5], target: 3, roles: ["overskrift"] },
  // Magenta står bare på siste linje, så den måles der og ikke over hele tittelen.
  "tittel, magenta-linjen (AA stor = 3,0)": { x: [16.7, 45.8], y: [33.5, 39.4], target: 3, roles: ["aksent"] },
  "ingress (17 px — AA = 4,5)": { x: [16.7, 44.6], y: [41.4, 56.7], target: 4.5, roles: ["brødtekst"] },
  "knapper (13 px — AA = 4,5)": { x: [16.7, 45.8], y: [59.3, 63.6], target: 4.5, roles: ["overskrift"] },
};

const file = process.argv[2];
const png = Buffer.from(JSON.parse(readFileSync(file, "utf8")).data, "base64");
const { width, height } = await sharp(png).metadata();

for (const [name, band] of Object.entries(BANDS)) {
  const left = Math.round((band.x[0] / 100) * width);
  const top = Math.round((band.y[0] / 100) * height);
  const w = Math.round(((band.x[1] - band.x[0]) / 100) * width);
  const h = Math.round(((band.y[1] - band.y[0]) / 100) * height);

  const buf = await sharp(png).extract({ left, top, width: w, height: h }).toBuffer();
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });

  const px = [];
  for (let i = 0; i < data.length; i += info.channels) {
    const rgb = [data[i], data[i + 1], data[i + 2]];
    px.push({ rgb, l: lum(rgb) });
  }
  px.sort((a, b) => a.l - b.l);
  const p10 = px[Math.floor(px.length * 0.1)].rgb;
  const darkest = px[0].rgb;

  console.log(`\n${name}  (${w}x${h} px)`);
  console.log(`  p10 ${p10.join(",")}   mørkeste ${darkest.join(",")}`);
  for (const role of band.roles) {
    const c10 = contrast(hexRgb(TEXT[role]), p10);
    const cMin = contrast(hexRgb(TEXT[role]), darkest);
    const ok = c10 >= band.target ? "OK " : "AVVIK";
    console.log(
      `  ${ok} ${role.padEnd(11)} p10 ${c10.toFixed(2)} : 1   mørkeste ${cMin.toFixed(2)} : 1   (krav ${band.target})`
    );
  }
}
