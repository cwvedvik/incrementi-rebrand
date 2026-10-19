"use client";

import { motion, useInView } from "framer-motion";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { advisory, type RoleId } from "@/lib/content/advisory";
import FigureFrame, { EASE, FIG, useReducedMotion } from "./FigureFrame";

const { meeting, initiatives } = advisory.figures;

interface Wire {
  id: RoleId;
  d: string;
}

/**
 * Linjene måles fra offset-verdiene og ikke fra getBoundingClientRect, fordi
 * kortene glir inn med transform og ellers ville gitt skjeve ankerpunkter.
 */
function measureWires(
  root: HTMLElement,
  center: HTMLElement,
  cards: Partial<Record<RoleId, HTMLElement | null>>,
): Wire[] {
  const cx = center.offsetLeft + center.offsetWidth / 2;
  const cy = center.offsetTop + center.offsetHeight / 2;
  const radius = center.offsetWidth / 2;
  const wires: Wire[] = [];
  for (const role of meeting.roles) {
    const card = cards[role.id];
    if (!card || card.offsetParent !== root) continue;
    const left = card.offsetLeft;
    const right = left + card.offsetWidth;
    const top = card.offsetTop;
    const bottom = top + card.offsetHeight;
    // Kortene står ved siden av bordet på brede skjermer og over og under det
    // på smale. Linjen går ut fra midten av siden som vender mot bordet.
    const horizontal =
      Math.abs(cx - (left + card.offsetWidth / 2)) > Math.abs(cy - (top + card.offsetHeight / 2));
    const sx = horizontal ? (cx < left ? left : right) : left + card.offsetWidth / 2;
    const sy = horizontal ? top + card.offsetHeight / 2 : cy < top ? top : bottom;
    const dx = cx - sx;
    const dy = cy - sy;
    const len = Math.hypot(dx, dy) || 1;
    const ex = cx - (dx / len) * (radius + 6);
    const ey = cy - (dy / len) * (radius + 6);
    const d = horizontal
      ? `M${sx} ${sy} C${sx + dx * 0.55} ${sy}, ${ex - dx * 0.25} ${ey}, ${ex} ${ey}`
      : `M${sx} ${sy} C${sx} ${sy + dy * 0.55}, ${ex} ${ey - dy * 0.25}, ${ex} ${ey}`;
    wires.push({ id: role.id, d });
  }
  return wires;
}

export default function LeadershipTable() {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Partial<Record<RoleId, HTMLElement | null>>>({});
  const [wires, setWires] = useState<Wire[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [active, setActive] = useState<RoleId | null>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.35 });
  const shown = reduce || inView;

  useLayoutEffect(() => {
    const root = rootRef.current;
    const center = centerRef.current;
    if (!root || !center) return;
    const measure = () => {
      setSize({ w: root.offsetWidth, h: root.offsetHeight });
      setWires(measureWires(root, center, cardRefs.current));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  const activeRole = meeting.roles.find((r) => r.id === active);

  return (
    <FigureFrame className="lp-fig-meet">
      <div
        ref={rootRef}
        className="lp-meet"
        role="group"
        aria-label={meeting.label}
        data-active={active ?? undefined}
      >
        <svg
          className="lp-meet-wires"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
          aria-hidden="true"
        >
          {wires.map((w, i) => {
            const on = active === w.id;
            const dim = active !== null && !on;
            return (
              <g key={w.id}>
                {/* pathLength skriver over stroke-dasharray, så tegningen skjer
                    i en maske og den stiplede linjen beholder mønsteret. */}
                <mask id={`${uid}-${w.id}`} maskUnits="userSpaceOnUse">
                  <motion.path
                    d={w.d}
                    fill="none"
                    stroke="#fff"
                    strokeWidth={8}
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: shown ? 1 : 0 }}
                    transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease: EASE }}
                  />
                </mask>
                <motion.path
                  d={w.d}
                  fill="none"
                  mask={`url(#${uid}-${w.id})`}
                  stroke={on ? FIG.magenta : FIG.green}
                  strokeWidth={on ? 1.8 : 1.4}
                  strokeDasharray={on ? undefined : "5 5"}
                  initial={false}
                  animate={{ opacity: dim ? 0.25 : 1 }}
                  transition={{ duration: 0.35 }}
                />
                {reduce ? null : (
                  <motion.circle
                    r={3.5}
                    fill={FIG.magenta}
                    style={{ offsetPath: `path('${w.d}')`, offsetRotate: "0deg" }}
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={
                      shown
                        ? { offsetDistance: "100%", opacity: [0, 1, 1, 0] }
                        : { offsetDistance: "0%", opacity: 0 }
                    }
                    transition={{ duration: 1.4, delay: 1.6 + i * 0.15, ease: EASE }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {meeting.roles.map((role, i) => {
          const on = active === role.id;
          return (
            <motion.button
              key={role.id}
              type="button"
              ref={(el) => {
                cardRefs.current[role.id] = el;
              }}
              className={`lp-meet-role lp-meet-${role.id}${on ? " is-active" : ""}`}
              aria-pressed={on}
              onMouseEnter={() => setActive(role.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(role.id)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(on ? null : role.id)}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            >
              <span className="lp-meet-role-name">{role.label}</span>
              <span className="lp-meet-chips">
                {role.initiatives.map((id, j) => (
                  <motion.span
                    key={id}
                    className="lp-chip"
                    initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                    animate={shown ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 + j * 0.08, ease: EASE }}
                  >
                    {initiatives[id]}
                  </motion.span>
                ))}
              </span>
            </motion.button>
          );
        })}

        <div ref={centerRef} className="lp-meet-center" aria-hidden="true">
          <motion.span
            className="lp-meet-ring"
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            animate={shown ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          >
            {meeting.center}
          </motion.span>
          {reduce ? null : (
            <motion.span
              className="lp-meet-pulse"
              initial={{ opacity: 0, scale: 1 }}
              animate={shown ? { opacity: [0, 0.6, 0], scale: [1, 1.45] } : {}}
              transition={{ duration: 1.6, delay: 2.9, ease: EASE }}
            />
          )}
        </div>
      </div>

      <p className="lp-meet-caption" aria-live="polite">
        {activeRole ? (
          <>
            <strong>{activeRole.label}.</strong> {activeRole.summary}
          </>
        ) : (
          meeting.idle
        )}
      </p>
    </FigureFrame>
  );
}
