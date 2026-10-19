"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { advisory } from "@/lib/content/advisory";
import FigureFrame, { EASE, FIG, useReducedMotion } from "./FigureFrame";

const { horizon } = advisory.figures;

const BASE_Y = 380;
const BLOCK_W = 70;
const BLOCKS = [
  { x: 110, top: 330 },
  { x: 260, top: 290 },
  { x: 410, top: 245 },
  { x: 560, top: 195 },
  { x: 710, top: 140 },
];

const ROUTE: [number, number][] = [
  [60, 350],
  ...BLOCKS.map(({ x, top }) => [x + BLOCK_W / 2, top - 14] as [number, number]),
  [890, 62],
];

/** Catmull-Rom gjennom punktene, skrevet som kubiske Bézier-kurver. */
function smoothPath(points: [number, number][]): string {
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

const DIRECTION = smoothPath(ROUTE);
const FORKS = ["M445 231 C445 180, 414 160, 410 118", "M595 181 C595 132, 588 110, 585 80"];
const MISSTEP = "M145 316 C150 252, 188 212, 204 172";

function useStage(progress: MotionValue<number>, from: number, to: number, reduce: boolean) {
  const v = useTransform(progress, [from, to], [0, 1]);
  return reduce ? 1 : v;
}

export default function DirectionPath() {
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "center 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });

  const draw = useStage(progress, 0, 0.9, reduce);
  const misstep = useStage(progress, 0.15, 0.35, reduce);
  const forks = useStage(progress, 0.45, 0.65, reduce);
  const arrive = useStage(progress, 0.82, 0.95, reduce);

  return (
    <FigureFrame className="lp-fig-horizon" caption={horizon.caption}>
      <div ref={ref}>
        <svg
          className="lp-horizon-svg"
          viewBox="0 0 960 440"
          role="img"
          aria-label={horizon.label}
          fill="none"
        >
          <path d={`M40 ${BASE_Y} H920`} stroke={FIG.green} strokeWidth="2" />
          {Array.from({ length: 37 }, (_, i) => 52 + i * 24).map((x) => (
            <path
              key={x}
              d={`M${x} ${BASE_Y + 4} L${x - 10} ${BASE_Y + 16}`}
              stroke={FIG.greenSoft}
              strokeWidth="1"
            />
          ))}

          {BLOCKS.map(({ x, top }, i) => (
            <motion.rect
              key={x}
              x={x}
              y={top}
              width={BLOCK_W}
              height={BASE_Y - top}
              fill={FIG.greenFill}
              stroke={FIG.green}
              strokeWidth="1.4"
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
              initial={reduce ? false : { scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: EASE }}
            />
          ))}

          {/* pathLength skriver over stroke-dasharray, så de stiplede grenene
              tegnes fram gjennom en maske. */}
          <defs>
            <mask id="lp-horizon-misstep" maskUnits="userSpaceOnUse">
              <motion.path d={MISSTEP} stroke="#fff" strokeWidth="8" style={{ pathLength: misstep }} />
            </mask>
            <mask id="lp-horizon-forks" maskUnits="userSpaceOnUse">
              {FORKS.map((d) => (
                <motion.path key={d} d={d} stroke="#fff" strokeWidth="8" style={{ pathLength: forks }} />
              ))}
            </mask>
          </defs>

          <path
            d={MISSTEP}
            stroke={FIG.muted}
            strokeWidth="1.4"
            strokeDasharray="3 5"
            mask="url(#lp-horizon-misstep)"
          />
          <motion.g style={{ opacity: misstep }}>
            <path d="M197 165 L211 179 M211 165 L197 179" stroke={FIG.muted} strokeWidth="1.8" />
            <text className="lp-svg-text lp-svg-muted" x="204" y="148" textAnchor="middle">
              {horizon.misstep}
            </text>
          </motion.g>

          {FORKS.map((d) => (
            <path
              key={d}
              d={d}
              stroke={FIG.green}
              strokeWidth="1.3"
              strokeDasharray="4 4"
              mask="url(#lp-horizon-forks)"
            />
          ))}
          <motion.g style={{ opacity: forks }}>
            <circle cx="410" cy="112" r="5.5" stroke={FIG.green} strokeWidth="1.3" fill="#f1eeea" />
            <circle cx="585" cy="74" r="5.5" stroke={FIG.green} strokeWidth="1.3" fill="#f1eeea" />
            <text className="lp-svg-text" x="498" y="58" textAnchor="middle">
              {horizon.flexibility}
            </text>
          </motion.g>

          <motion.path
            d={DIRECTION}
            stroke={FIG.magenta}
            strokeWidth="2.4"
            strokeLinecap="round"
            style={{ pathLength: draw }}
          />
          <motion.g style={{ opacity: arrive }}>
            <circle cx="890" cy="62" r="11" stroke={FIG.magenta} strokeWidth="1.6" fill="#f1eeea" />
            <circle cx="890" cy="62" r="4" fill={FIG.magenta} />
            <text className="lp-svg-text lp-svg-accent" x="870" y="34" textAnchor="end">
              {horizon.direction}
            </text>
          </motion.g>

          <text className="lp-svg-text" x="800" y="352">
            {horizon.steps}
          </text>
          <text className="lp-svg-text" x="40" y="428">
            {horizon.foundation}
          </text>
        </svg>

        <ul className="lp-legend" aria-hidden="true">
          <li>
            <span className="lp-key lp-key-direction" />
            {horizon.direction}
          </li>
          <li>
            <span className="lp-key lp-key-block" />
            {horizon.steps}
          </li>
          <li>
            <span className="lp-key lp-key-fork" />
            {horizon.flexibility}
          </li>
          <li>
            <span className="lp-key lp-key-misstep" />
            {horizon.misstep}
          </li>
          <li>
            <span className="lp-key lp-key-base" />
            {horizon.foundation}
          </li>
        </ul>
      </div>
    </FigureFrame>
  );
}
