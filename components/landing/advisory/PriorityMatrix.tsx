"use client";

import { LayoutGroup, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { advisory, type InitiativeId, type Quadrant } from "@/lib/content/advisory";
import FigureFrame, { EASE, FIG, useReducedMotion } from "./FigureFrame";

const { priority, initiatives } = advisory.figures;

const ORDER = Object.keys(initiatives) as InitiativeId[];

function Chip({ id }: { id: InitiativeId }) {
  return (
    <motion.span
      layoutId={`lp-prio-${id}`}
      className="lp-chip"
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
    >
      {initiatives[id]}
    </motion.span>
  );
}

/** Initiativene som sorteres inn i en rute. «Gjør nå» får ingen: der står grunnpilarene. */
function Chips({ quadrant, sorted }: { quadrant: Quadrant; sorted: boolean }) {
  return (
    <div className="lp-eis-chips">
      {sorted
        ? ORDER.filter((id) => priority.placement[id] === quadrant).map((id) => (
            <Chip key={id} id={id} />
          ))
        : null}
    </div>
  );
}

function Pillars({ shown, reduce }: { shown: boolean; reduce: boolean }) {
  return (
    <div className="lp-pillars">
      <div className="lp-pillars-row">
        {priority.pillars.map((name, i) => (
          <motion.span
            key={name}
            className="lp-pillar"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={shown ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: EASE }}
          >
            {name}
          </motion.span>
        ))}
      </div>
      <motion.span
        className="lp-pillars-base"
        aria-hidden="true"
        initial={reduce ? false : { scaleX: 0 }}
        animate={shown ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
      />
      <span className="lp-pillars-note">{priority.pillarsNote}</span>
    </div>
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
  const matrixInView = useInView(matrixRef, { once: true, amount: 0.5 });
  const matrixShown = matrixInView || reduce;
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    if (reduce) {
      setSorted(true);
      return;
    }
    if (!matrixInView) return;
    const id = window.setTimeout(() => setSorted(true), 1300);
    return () => window.clearTimeout(id);
  }, [matrixInView, reduce]);

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
                : ORDER.map((id) => <Chip key={id} id={id} />)}
            </div>
          </div>

          <div ref={matrixRef} className="lp-eis">
            <span aria-hidden="true" />
            <span className="lp-eis-col">{priority.urgent}</span>
            <span className="lp-eis-col">{priority.notUrgent}</span>

            <span className="lp-eis-row">{priority.important}</span>
            <div className={`lp-eis-cell lp-eis-now${matrixShown ? " is-lit" : ""}`}>
              <span className="lp-eis-name">{priority.quadrants.now}</span>
              <Pillars shown={matrixShown} reduce={reduce} />
            </div>
            <div className="lp-eis-cell lp-eis-plan">
              <span className="lp-eis-name">{priority.quadrants.plan}</span>
              <Chips quadrant="plan" sorted={sorted} />
            </div>

            <span className="lp-eis-row">{priority.notImportant}</span>
            <div className="lp-eis-cell lp-eis-delegate">
              <span className="lp-eis-name">{priority.quadrants.delegate}</span>
              <Chips quadrant="delegate" sorted={sorted} />
            </div>
            <div className="lp-eis-cell lp-eis-reassess">
              <span className="lp-eis-name">{priority.quadrants.reassess}</span>
              <Chips quadrant="reassess" sorted={sorted} />
            </div>
          </div>
        </LayoutGroup>
      </div>
    </FigureFrame>
  );
}
