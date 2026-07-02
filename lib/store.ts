import { create } from "zustand";

/**
 * The brain's behavioural phases:
 *  idle       — hero visible, slow breathing, ambient pulses
 *  listening  — visitor is typing, brain leans in and tightens
 *  thinking   — question submitted, pulse storms and brightness swell
 *  answering  — answer streaming in, a wave of energy radiates outward
 *  docked     — conversation mode, brain sits smaller in the upper third
 */
export type BrainPhase =
  | "idle"
  | "listening"
  | "thinking"
  | "answering"
  | "docked";

interface BrainStore {
  phase: BrainPhase;
  /** Monotonic counter — each increment fires one answering wave. */
  waveCount: number;
  setPhase: (phase: BrainPhase) => void;
  triggerWave: () => void;
}

export const useBrain = create<BrainStore>((set) => ({
  phase: "idle",
  waveCount: 0,
  setPhase: (phase) =>
    set((s) => ({
      phase,
      waveCount: phase === "answering" ? s.waveCount + 1 : s.waveCount,
    })),
  triggerWave: () => set((s) => ({ waveCount: s.waveCount + 1 })),
}));
