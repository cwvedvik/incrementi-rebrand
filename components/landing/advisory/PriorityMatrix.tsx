"use client";

import { LayoutGroup, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { advisory, type InitiativeId, type Quadrant } from "@/lib/content/advisory";
import FigureFrame, { EASE, FIG, useReducedMotion } from "./FigureFrame";

const { priority, initiatives } = advisory.figures;

const ORDER = Object.keys(initiatives) as InitiativeId[];
/** Rutenettet leses som et koordinatsystem: øverst til høyre er best på begge akser. */
const CELLS: Quadrant[] = ["direction", "prioritize", "reassess", "quick"];

function Chip({ id, hot }: { id: InitiativeId; hot: boolean }) {
  return (
    <motion.span
      layoutId={`lp-prio-${id}`}
      className={`lp-chip${hot ? " is-hot" : ""}`}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
    >
      {initiatives[id]}
    </motion.span>
  );
}

function Lenses({ shown, reduce }: { shown: boolean; reduce: boolean }) {
  return (
    <svg className="lp-prio-lens" viewBox="0 0 200 112" fill="none" aria-hidden="true">
      <motion.circle
        cx="74"
        cy="56"
        r="46"
        stroke={FIG.green}
        strokeWidth="1.4"
        initial={reduce ? false : { x: -22, opacity: 0 }}
        animate={shown ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: EASE }}
      />
      <motion.circle
        cx="126"
        cy="56"
        r="46"
        stroke={FIG.green}
        strokeWidth="1.4"
        initial={reduce ? false : { x: 22, opacity: 0 }}
        animate={shown ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: EASE }}
      />
      <motion.path
        d="M100 18.05 A46 46 0 0 1 100 93.95 A46 46 0 0 1 100 18.05 Z"
        fill={FIG.magentaFill}
        stroke={FIG.magenta}
        strokeWidth="1.6"
        initial={reduce ? false : { opacity: 0, scale: 0.6 }}
        animate={shown ? { opacity: 1, scale: 1 } : {}}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
      />
    </svg>
  );
}

export default function PriorityMatrix() {
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);
  const shown = useInView(ref, { once: true, amount: 0.25 }) || reduce;
  const matrixInView = useInView(matrixRef, { once: true, amount: 0.6 });
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    if (reduce) {
      setSorted(true);
      return;
    }
    if (!matrixInView) return;
    const id = window.setTimeout(() => setSorted(true), 600);
    return () => window.clearTimeout(id);
  }, [matrixInView, reduce]);

  const inCell = (q: Quadrant) => ORDER.filter((id) => priority.placement[id] === q);

  return (
    <FigureFrame className="lp-fig-prio" caption={priority.caption}>
      <div ref={ref} role="group" aria-label={priority.label}>
        <div className="lp-prio-lenses">
          <span>{priority.lenses[0]}</span>
          <Lenses shown={shown} reduce={reduce} />
          <span>{priority.lenses[1]}</span>
        </div>

        <motion.span
          className="lp-prio-drop"
          aria-hidden="true"
          initial={reduce ? false : { scaleY: 0 }}
          animate={shown ? { scaleY: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
        />

        <LayoutGroup>
          <div className="lp-prio-intake">
            <span className="lp-prio-intake-label">{priority.intake}</span>
            <div className="lp-prio-intake-chips">
              {sorted
                ? ORDER.map((id) => (
                    <span key={id} className="lp-chip lp-chip-ghost" aria-hidden="true">
                      {initiatives[id]}
                    </span>
                  ))
                : ORDER.map((id) => <Chip key={id} id={id} hot={false} />)}
            </div>
          </div>

          <div ref={matrixRef} className="lp-prio-matrix">
            <span className="lp-prio-axis lp-prio-axis-y">{priority.yAxis}</span>
            <div className="lp-prio-grid">
              {CELLS.map((q) => (
                <div
                  key={q}
                  className={`lp-prio-cell lp-prio-${q}${sorted && q === "prioritize" ? " is-lit" : ""}`}
                >
                  <span className="lp-prio-cell-name">{priority.quadrants[q]}</span>
                  <div className="lp-prio-cell-chips">
                    {sorted
                      ? inCell(q).map((id) => <Chip key={id} id={id} hot={q === "prioritize"} />)
                      : null}
                  </div>
                </div>
              ))}
            </div>
            <span className="lp-prio-axis lp-prio-axis-x">{priority.xAxis}</span>
          </div>
        </LayoutGroup>

        <ol className="lp-prio-steps">
          {priority.steps.map((s, i) => (
            <motion.li
              key={s.verb}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            >
              <strong>{s.verb}</strong>
              <span>{s.note}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </FigureFrame>
  );
}
