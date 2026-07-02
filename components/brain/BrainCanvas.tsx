"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import BrainScene, { type BrainTier } from "./BrainScene";

type Mode = { kind: "webgl"; tier: BrainTier } | { kind: "poster" } | null;

function detectMode(): Mode {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return { kind: "poster" };
  }
  let webgl = false;
  try {
    const c = document.createElement("canvas");
    webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    webgl = false;
  }
  if (!webgl) return { kind: "poster" };

  const isMobile = window.innerWidth < 768;
  const lowPower =
    (navigator.hardwareConcurrency ?? 8) <= 4 ||
    (isMobile && window.innerWidth < 480);

  const tier: BrainTier = lowPower
    ? { neurons: 180, dust: 800, bloom: false, dpr: [1, 1.5] }
    : isMobile
      ? { neurons: 250, dust: 1400, bloom: true, dpr: [1, 2] }
      : { neurons: 420, dust: 2600, bloom: true, dpr: [1, 2] };

  return { kind: "webgl", tier };
}

export default function BrainCanvas() {
  const [mode, setMode] = useState<Mode>(null);

  useEffect(() => {
    setMode(detectMode());
  }, []);

  if (!mode) return <div className="brain-layer" aria-hidden="true" />;
  if (mode.kind === "poster")
    return <div className="brain-poster" aria-hidden="true" />;

  return (
    <div className="brain-layer" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 40 }}
        dpr={mode.tier.dpr}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <BrainScene tier={mode.tier} />
        {mode.tier.bloom && (
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.55}
              intensity={0.85}
              radius={0.72}
              mipmapBlur
            />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
}
