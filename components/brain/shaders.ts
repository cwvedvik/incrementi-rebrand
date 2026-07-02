/**
 * GLSL for the living organism.
 * All three primitives (neurons, edges, dust) share the same wobble
 * function so edge endpoints track their neurons exactly.
 */

const WOBBLE = /* glsl */ `
vec3 wobble(vec3 p, float seed, float time) {
  float w = time * (0.35 + seed * 0.5) + seed * 6.2831;
  vec3 offset = vec3(
    sin(w),
    cos(w * 0.83 + seed * 3.0),
    sin(w * 0.61 + seed * 5.0)
  ) * (0.018 + 0.03 * seed);
  float breathe = 1.0 + sin(time * 0.4) * 0.018;
  return (p + offset) * breathe;
}
`;

const WAVE = /* glsl */ `
float waveGlow(float r, float waveT) {
  float on = step(0.001, waveT) * step(waveT, 0.999);
  float front = waveT * 2.4;
  return on * exp(-pow((r - front) * 3.2, 2.0)) * (1.0 - waveT * 0.7);
}
`;

export const neuronVertex = /* glsl */ `
uniform float uTime;
uniform float uWaveT;
uniform float uPixelRatio;
attribute float aSeed;
attribute float aWarm;
attribute float aSize;
varying float vWarm;
varying float vWave;
varying float vSeed;
varying float vDepth;
${WOBBLE}
${WAVE}
void main() {
  vec3 p = wobble(position, aSeed, uTime);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float vz = -mv.z;
  vDepth = clamp((7.2 - vz) * 0.45, 0.25, 1.0);
  vWarm = aWarm;
  vSeed = aSeed;
  vWave = waveGlow(length(position), uWaveT);
  gl_PointSize = aSize * uPixelRatio * (11.0 / vz);
  gl_Position = projectionMatrix * mv;
}
`;

export const neuronFragment = /* glsl */ `
uniform float uEnergy;
uniform float uDim;
uniform float uTime;
varying float vWarm;
varying float vWave;
varying float vSeed;
varying float vDepth;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float core = smoothstep(0.5, 0.06, d);
  float glow = exp(-d * d * 10.0);

  vec3 cool = vec3(0.80, 0.82, 0.86);
  vec3 warm = vec3(0.94, 0.68, 0.47);
  vec3 col = mix(cool, warm, vWarm);

  // slow individual shimmer
  float shimmer = 0.75 + 0.25 * sin(uTime * (0.6 + vSeed) + vSeed * 20.0);

  float intensity =
    (0.35 + vWarm * 0.75) *
    shimmer *
    (0.75 + uEnergy * 1.1 + vWave * 2.6);

  float alpha = core * glow * vDepth * uDim * (0.55 + vWarm * 0.45 + vWave);
  gl_FragColor = vec4(col * intensity * (1.0 + vWave * 1.6), alpha);
}
`;

export const edgeVertex = /* glsl */ `
uniform float uTime;
uniform float uWaveT;
attribute float aT;
attribute float aSeed;
attribute float aNodeSeed;
varying float vT;
varying float vSeed;
varying float vDepth;
varying float vWave;
${WOBBLE}
${WAVE}
void main() {
  vec3 p = wobble(position, aNodeSeed, uTime);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float vz = -mv.z;
  vDepth = clamp((7.2 - vz) * 0.45, 0.15, 1.0);
  vT = aT;
  vSeed = aSeed;
  vWave = waveGlow(length(position), uWaveT);
  gl_Position = projectionMatrix * mv;
}
`;

export const edgeFragment = /* glsl */ `
uniform float uTime;
uniform float uEnergy;
uniform float uDim;
varying float vT;
varying float vSeed;
varying float vDepth;
varying float vWave;

float hash(float x) {
  return fract(sin(x * 127.1) * 43758.5453);
}

void main() {
  // connective tissue — steel, faint, depth-faded
  float baseAlpha = 0.16 * vDepth * uDim * (0.8 + uEnergy * 0.7 + vWave * 1.6);
  vec3 steel = vec3(0.56, 0.64, 0.72);

  // signal pulses travelling along the edge
  float speed = 0.14 + fract(vSeed * 7.31) * 0.22;
  float cycle = uTime * speed + vSeed * 43.0;
  float t = fract(cycle);
  float id = floor(cycle);
  float density = 0.015 + uEnergy * 0.2;
  float gate = step(hash(id + vSeed * 113.0), density);
  float pulse = gate * exp(-pow((vT - t) * 7.0, 2.0));

  vec3 copper = vec3(0.95, 0.66, 0.44);
  vec3 col = steel * baseAlpha + copper * pulse * (1.3 + uEnergy * 1.0) * vDepth * uDim;
  float alpha = baseAlpha + pulse * 0.7 * vDepth * uDim + vWave * 0.25 * vDepth * uDim;
  gl_FragColor = vec4(col, alpha);
}
`;

export const dustVertex = /* glsl */ `
uniform float uTime;
uniform float uPixelRatio;
attribute float aSeed;
attribute float aSize;
varying float vSeed;
varying float vDepth;
void main() {
  vec3 p = position;
  float w = uTime * (0.1 + aSeed * 0.15) + aSeed * 6.2831;
  p += vec3(sin(w), cos(w * 0.7), sin(w * 0.53)) * 0.06;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float vz = -mv.z;
  vDepth = clamp((8.0 - vz) * 0.35, 0.15, 1.0);
  vSeed = aSeed;
  gl_PointSize = aSize * uPixelRatio * (7.0 / vz);
  gl_Position = projectionMatrix * mv;
}
`;

export const dustFragment = /* glsl */ `
uniform float uDim;
uniform float uTime;
varying float vSeed;
varying float vDepth;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float glow = exp(-d * d * 12.0);
  float twinkle = 0.6 + 0.4 * sin(uTime * (0.4 + vSeed * 0.8) + vSeed * 30.0);
  vec3 col = mix(vec3(0.62, 0.68, 0.76), vec3(0.85, 0.66, 0.5), step(0.86, vSeed));
  gl_FragColor = vec4(col * 0.5, glow * 0.11 * twinkle * vDepth * uDim);
}
`;
