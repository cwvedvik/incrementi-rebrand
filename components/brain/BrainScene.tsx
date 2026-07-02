"use client";

import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { buildBrainGraph } from "@/lib/graph";
import { useBrain, type BrainPhase } from "@/lib/store";
import {
  neuronVertex,
  neuronFragment,
  edgeVertex,
  edgeFragment,
  dustVertex,
  dustFragment,
} from "./shaders";

/** Behavioural targets per phase — the brain's state machine. */
const PHASE_TARGETS: Record<
  BrainPhase,
  { energy: number; scale: number; y: number; dim: number; rot: number }
> = {
  idle: { energy: 0.16, scale: 1.22, y: 0.3, dim: 1.0, rot: 0.05 },
  listening: { energy: 0.42, scale: 1.16, y: 0.28, dim: 1.0, rot: 0.1 },
  thinking: { energy: 1.0, scale: 0.46, y: 1.5, dim: 0.6, rot: 0.16 },
  answering: { energy: 0.68, scale: 0.46, y: 1.5, dim: 0.5, rot: 0.09 },
  docked: { energy: 0.18, scale: 0.44, y: 1.5, dim: 0.38, rot: 0.045 },
};

const WAVE_DURATION = 1.9; // seconds

export interface BrainTier {
  neurons: number;
  dust: number;
  bloom: boolean;
  dpr: [number, number];
}

export default function BrainScene({ tier }: { tier: BrainTier }) {
  const graph = useMemo(
    () => buildBrainGraph(tier.neurons, tier.dust),
    [tier.neurons, tier.dust]
  );

  const groupRef = useRef<THREE.Group>(null);

  const shared = useRef({
    energy: 0.12,
    scale: 1.0,
    y: 0.35,
    dim: 1.0,
    rotAccum: 0,
    rotSpeed: 0.05,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    waveStart: -100,
    lastWaveCount: 0,
  });

  const neuronMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: neuronVertex,
        fragmentShader: neuronFragment,
        uniforms: {
          uTime: { value: 0 },
          uEnergy: { value: 0.12 },
          uDim: { value: 1 },
          uWaveT: { value: 0 },
          uPixelRatio: { value: 1 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  const edgeMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: edgeVertex,
        fragmentShader: edgeFragment,
        uniforms: {
          uTime: { value: 0 },
          uEnergy: { value: 0.12 },
          uDim: { value: 1 },
          uWaveT: { value: 0 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  const dustMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: dustVertex,
        fragmentShader: dustFragment,
        uniforms: {
          uTime: { value: 0 },
          uDim: { value: 1 },
          uPixelRatio: { value: 1 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  const neuronGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.BufferAttribute(graph.neuronPositions, 3)
    );
    g.setAttribute("aSeed", new THREE.BufferAttribute(graph.neuronSeeds, 1));
    g.setAttribute("aWarm", new THREE.BufferAttribute(graph.neuronWarm, 1));
    g.setAttribute("aSize", new THREE.BufferAttribute(graph.neuronSizes, 1));
    return g;
  }, [graph]);

  const edgeGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.BufferAttribute(graph.edgePositions, 3)
    );
    g.setAttribute("aT", new THREE.BufferAttribute(graph.edgeT, 1));
    g.setAttribute("aSeed", new THREE.BufferAttribute(graph.edgeSeeds, 1));
    g.setAttribute(
      "aNodeSeed",
      new THREE.BufferAttribute(graph.edgeNodeSeeds, 1)
    );
    return g;
  }, [graph]);

  const dustGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.BufferAttribute(graph.dustPositions, 3)
    );
    g.setAttribute("aSeed", new THREE.BufferAttribute(graph.dustSeeds, 1));
    g.setAttribute("aSize", new THREE.BufferAttribute(graph.dustSizes, 1));
    return g;
  }, [graph]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      shared.current.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      shared.current.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    return () => {
      neuronGeometry.dispose();
      edgeGeometry.dispose();
      dustGeometry.dispose();
      neuronMaterial.dispose();
      edgeMaterial.dispose();
      dustMaterial.dispose();
    };
  }, [
    neuronGeometry,
    edgeGeometry,
    dustGeometry,
    neuronMaterial,
    edgeMaterial,
    dustMaterial,
  ]);

  useFrame((state, delta) => {
    const s = shared.current;
    const { phase, waveCount } = useBrain.getState();
    const target = PHASE_TARGETS[phase];
    const t = state.clock.elapsedTime;
    const damp = 1 - Math.exp(-delta * 3.2);

    s.energy += (target.energy - s.energy) * damp;
    s.scale += (target.scale - s.scale) * damp;
    s.y += (target.y - s.y) * damp;
    s.dim += (target.dim - s.dim) * damp;
    s.rotSpeed += (target.rot - s.rotSpeed) * damp;
    s.rotAccum += delta * s.rotSpeed;

    s.mouseX += (s.targetMouseX - s.mouseX) * (1 - Math.exp(-delta * 2.5));
    s.mouseY += (s.targetMouseY - s.mouseY) * (1 - Math.exp(-delta * 2.5));

    if (waveCount !== s.lastWaveCount) {
      s.lastWaveCount = waveCount;
      s.waveStart = t;
    }
    const waveProgress = (t - s.waveStart) / WAVE_DURATION;
    const waveT = waveProgress > 0 && waveProgress < 1 ? waveProgress : 0;

    const group = groupRef.current;
    if (group) {
      group.rotation.y = s.rotAccum + s.mouseX * 0.28;
      group.rotation.x = s.mouseY * 0.16 + Math.sin(t * 0.11) * 0.05;
      group.position.y = s.y;
      group.scale.setScalar(s.scale);
    }

    const pr = Math.min(state.gl.getPixelRatio(), 2);

    neuronMaterial.uniforms.uTime.value = t;
    neuronMaterial.uniforms.uEnergy.value = s.energy;
    neuronMaterial.uniforms.uDim.value = s.dim;
    neuronMaterial.uniforms.uWaveT.value = waveT;
    neuronMaterial.uniforms.uPixelRatio.value = pr;

    edgeMaterial.uniforms.uTime.value = t;
    edgeMaterial.uniforms.uEnergy.value = s.energy;
    edgeMaterial.uniforms.uDim.value = s.dim;
    edgeMaterial.uniforms.uWaveT.value = waveT;

    dustMaterial.uniforms.uTime.value = t;
    dustMaterial.uniforms.uDim.value = s.dim;
    dustMaterial.uniforms.uPixelRatio.value = pr;
  });

  return (
    <group ref={groupRef}>
      <points geometry={dustGeometry} material={dustMaterial} />
      <lineSegments geometry={edgeGeometry} material={edgeMaterial} />
      <points geometry={neuronGeometry} material={neuronMaterial} />
    </group>
  );
}
