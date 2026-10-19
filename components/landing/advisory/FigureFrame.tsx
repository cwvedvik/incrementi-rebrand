"use client";

import { motion, useReducedMotion as useFramerReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Serveren vet ikke om brukeren har slått av bevegelse. Svarer vi likevel i
 * første klientrendering, blir markupen ulik og hydreringen feiler. Verdien
 * gjelder derfor først etter montering; MotionConfig reducedMotion="user" på
 * siden sørger for at transformene uansett hopper rett til sluttilstanden.
 */
export function useReducedMotion(): boolean {
  const reduce = useFramerReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !!reduce;
}

/**
 * Samme fargemening som ValueGlyph på forsiden: grønt er det som allerede
 * finnes og initiativene som ligger på bordet, magenta er helheten og valget.
 */
export const FIG = {
  green: "rgba(80, 118, 86, 0.78)",
  greenSoft: "rgba(80, 118, 86, 0.45)",
  greenFill: "rgba(80, 118, 86, 0.1)",
  magenta: "rgba(118, 80, 112, 0.92)",
  magentaSoft: "rgba(118, 80, 112, 0.5)",
  magentaFill: "rgba(118, 80, 112, 0.12)",
  muted: "rgba(64, 94, 69, 0.42)",
} as const;

export const EASE = [0.32, 0.72, 0, 1] as const;

export default function FigureFrame({
  children,
  caption,
  className,
}: {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      className={`lp-fig${className ? ` ${className}` : ""}`}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="lp-fig-shell">
        <div className="lp-fig-core">{children}</div>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </motion.figure>
  );
}
