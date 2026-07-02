/**
 * Deterministic generation of the brain's neural structure.
 * Seeded so the organism is identical on every load and across resizes.
 */

export interface BrainGraph {
  /** Connective neurons (graph nodes). */
  neuronPositions: Float32Array; // n * 3
  neuronSeeds: Float32Array; // n — per-node random phase
  neuronWarm: Float32Array; // n — 1 = copper node, 0 = cool node
  neuronSizes: Float32Array; // n — point size base
  /** Connective tissue (line segments, 2 vertices per edge). */
  edgePositions: Float32Array; // e * 2 * 3
  edgeT: Float32Array; // e * 2 — 0 at A, 1 at B (pulse parameter)
  edgeSeeds: Float32Array; // e * 2 — same per edge (pulse identity)
  edgeNodeSeeds: Float32Array; // e * 2 — seed of the node at each endpoint
  edgeCount: number;
  /** Ambient dust for volume and depth. */
  dustPositions: Float32Array;
  dustSeeds: Float32Array;
  dustSizes: Float32Array;
}

/** mulberry32 — small, fast, deterministic PRNG. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Gaussian-ish sample via averaging — organic density falloff. */
function organicRadius(rnd: () => number) {
  return Math.pow((rnd() + rnd() + rnd()) / 3, 0.85);
}

export function buildBrainGraph(
  neuronCount: number,
  dustCount: number,
  seed = 20260701
): BrainGraph {
  const rnd = mulberry32(seed);
  const R = 1.3; // brain radius in world units

  // --- neurons: organic ellipsoid cloud, slightly wider than tall ---
  const neuronPositions = new Float32Array(neuronCount * 3);
  const neuronSeeds = new Float32Array(neuronCount);
  const neuronWarm = new Float32Array(neuronCount);
  const neuronSizes = new Float32Array(neuronCount);

  for (let i = 0; i < neuronCount; i++) {
    const theta = rnd() * Math.PI * 2;
    const phi = Math.acos(2 * rnd() - 1);
    const r = organicRadius(rnd) * R;
    // perturb radius with low-frequency variation for a non-spherical silhouette
    const lump =
      1 +
      0.09 * Math.sin(theta * 2.3 + phi * 1.7) +
      0.05 * Math.sin(theta * 4.1);
    const rr = r * lump;
    neuronPositions[i * 3] = Math.sin(phi) * Math.cos(theta) * rr * 1.12;
    neuronPositions[i * 3 + 1] = Math.cos(phi) * rr * 0.82;
    neuronPositions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * rr;
    neuronSeeds[i] = rnd();
    neuronWarm[i] = rnd() < 0.16 ? 1 : 0;
    neuronSizes[i] = 1.6 + rnd() * 2.6 + neuronWarm[i] * 1.4;
  }

  // --- edges: k nearest neighbours, deduplicated ---
  const edgeSet = new Set<string>();
  const edgeList: Array<[number, number]> = [];
  for (let i = 0; i < neuronCount; i++) {
    const dists: Array<[number, number]> = [];
    const ax = neuronPositions[i * 3];
    const ay = neuronPositions[i * 3 + 1];
    const az = neuronPositions[i * 3 + 2];
    for (let j = 0; j < neuronCount; j++) {
      if (i === j) continue;
      const dx = ax - neuronPositions[j * 3];
      const dy = ay - neuronPositions[j * 3 + 1];
      const dz = az - neuronPositions[j * 3 + 2];
      dists.push([j, dx * dx + dy * dy + dz * dz]);
    }
    dists.sort((p, q) => p[1] - q[1]);
    const k = 2 + Math.floor(rnd() * 2);
    for (let n = 0; n < k && n < dists.length; n++) {
      const j = dists[n][0];
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edgeList.push(i < j ? [i, j] : [j, i]);
      }
    }
  }

  const edgeCount = edgeList.length;
  const edgePositions = new Float32Array(edgeCount * 2 * 3);
  const edgeT = new Float32Array(edgeCount * 2);
  const edgeSeeds = new Float32Array(edgeCount * 2);
  const edgeNodeSeeds = new Float32Array(edgeCount * 2);

  for (let e = 0; e < edgeCount; e++) {
    const [a, b] = edgeList[e];
    const es = rnd();
    for (let v = 0; v < 2; v++) {
      const node = v === 0 ? a : b;
      const o = (e * 2 + v) * 3;
      edgePositions[o] = neuronPositions[node * 3];
      edgePositions[o + 1] = neuronPositions[node * 3 + 1];
      edgePositions[o + 2] = neuronPositions[node * 3 + 2];
      edgeT[e * 2 + v] = v;
      edgeSeeds[e * 2 + v] = es;
      edgeNodeSeeds[e * 2 + v] = neuronSeeds[node];
    }
  }

  // --- dust: wider, sparser halo ---
  const dustPositions = new Float32Array(dustCount * 3);
  const dustSeeds = new Float32Array(dustCount);
  const dustSizes = new Float32Array(dustCount);
  for (let i = 0; i < dustCount; i++) {
    const theta = rnd() * Math.PI * 2;
    const phi = Math.acos(2 * rnd() - 1);
    const r = Math.pow(rnd(), 0.6) * R * 1.4;
    dustPositions[i * 3] = Math.sin(phi) * Math.cos(theta) * r * 1.15;
    dustPositions[i * 3 + 1] = Math.cos(phi) * r * 0.85;
    dustPositions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;
    dustSeeds[i] = rnd();
    dustSizes[i] = 0.6 + rnd() * 1.2;
  }

  return {
    neuronPositions,
    neuronSeeds,
    neuronWarm,
    neuronSizes,
    edgePositions,
    edgeT,
    edgeSeeds,
    edgeNodeSeeds,
    edgeCount,
    dustPositions,
    dustSeeds,
    dustSizes,
  };
}
