"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { advisory } from "@/lib/content/advisory";
import FigureFrame, { EASE, useReducedMotion } from "./FigureFrame";

const { shift } = advisory.figures;

type Era = "then" | "now";

/** Andelen av sporet som en standardfunksjon tar i dag. */
const STANDARD_SHARE = 0.26;

export default function StandardShift() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [era, setEra] = useState<Era>(reduce ? "now" : "then");
  const touched = useRef(false);

  useEffect(() => {
    if (reduce && !touched.current) setEra("now");
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce || touched.current) return;
    const id = window.setTimeout(() => {
      if (!touched.current) setEra("now");
    }, 1400);
    return () => window.clearTimeout(id);
  }, [inView, reduce]);

  function choose(next: Era) {
    touched.current = true;
    setEra(next);
  }

  const now = era === "now";

  return (
    <FigureFrame className="lp-fig-shift" caption={shift.caption}>
      <div ref={ref} role="group" aria-label={shift.label}>
        <div className="lp-seg" role="radiogroup" aria-label={shift.label}>
          {(["then", "now"] as const).map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={era === key}
              className={era === key ? "is-on" : undefined}
              onClick={() => choose(key)}
            >
              {era === key ? (
                <motion.span
                  layoutId="lp-seg-thumb"
                  className="lp-seg-thumb"
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                />
              ) : null}
              <span className="lp-seg-label">{key === "then" ? shift.then : shift.now}</span>
            </button>
          ))}
        </div>

        <div className="lp-shift-rows">
          {shift.rows.map((row, i) => (
            <div className="lp-shift-row" key={row}>
              <span className="lp-shift-name">{row}</span>
              <div className="lp-shift-track">
                <motion.span
                  className="lp-shift-free"
                  style={{ left: `calc(${STANDARD_SHARE * 100}% + 8px)` }}
                  initial={false}
                  animate={{ opacity: now ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: now ? 0.5 + i * 0.1 : 0, ease: EASE }}
                />
                <motion.span
                  className={`lp-shift-bar${now ? " is-standard" : ""}`}
                  initial={false}
                  animate={{ scaleX: now ? STANDARD_SHARE : 0.92 }}
                  transition={{ duration: 1.1, delay: i * 0.12, ease: EASE }}
                />
                <span className="lp-shift-tag">
                  <motion.span
                    initial={false}
                    animate={{ opacity: now ? 0 : 1, y: now ? -6 : 0 }}
                    transition={{ duration: 0.35, delay: i * 0.12 }}
                  >
                    {shift.custom}
                  </motion.span>
                  <motion.span
                    initial={false}
                    animate={{ opacity: now ? 1 : 0, y: now ? 0 : 6 }}
                    transition={{ duration: 0.35, delay: 0.35 + i * 0.12 }}
                  >
                    {shift.standard}
                  </motion.span>
                </span>
              </div>
            </div>
          ))}

          <div className="lp-shift-row lp-shift-bracket-row" aria-hidden={!now}>
            <span className="lp-shift-name" />
            <div className="lp-shift-track lp-shift-track-bare">
              <motion.span
                className="lp-shift-bracket"
                style={{ marginLeft: `calc(${STANDARD_SHARE * 100}% + 8px)` }}
                initial={false}
                animate={{ opacity: now ? 1 : 0, y: now ? 0 : -8 }}
                transition={{ duration: 0.7, delay: now ? 0.9 : 0, ease: EASE }}
              >
                {shift.freed}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </FigureFrame>
  );
}
