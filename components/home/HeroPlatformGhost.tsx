"use client";

import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";
import type { LocalizedString } from "@/lib/i18n/types";

const copy = {
  hubTop: {
    no: "Datagrunnlag",
    en: "Data foundation",
  } satisfies LocalizedString,
  hubBottom: {
    no: "& Kontekstlag",
    en: "& Context layer",
  } satisfies LocalizedString,
  sources: [
    { no: "ERP", en: "ERP" },
    { no: "CRM", en: "CRM" },
    { no: "Excel", en: "Excel" },
    { no: "Maskindata / OT", en: "Machine data / OT" },
    { no: "Fagsystemer", en: "Line systems" },
  ] as const satisfies readonly LocalizedString[],
  outputs: [
    { no: "Applikasjoner", en: "Applications" },
    { no: "AI-agenter", en: "AI agents" },
    { no: "Assistenter", en: "Assistants" },
  ] as const satisfies readonly LocalizedString[],
};

/** Atmospheric hero diagram: sources → industrial data/context foundation → apps & agents. */
export default function HeroPlatformGhost() {
  const { locale } = useLocale();

  const sources = copy.sources.map((s) => t(s, locale));
  const outputs = copy.outputs.map((s) => t(s, locale));
  const hubTop = t(copy.hubTop, locale);
  const hubBottom = t(copy.hubBottom, locale);

  const nodes = [
    { x: 58, y: 70, label: sources[0] },
    { x: 174, y: 42, label: sources[1] },
    { x: 320, y: 28, label: sources[2] },
    { x: 466, y: 42, label: sources[3] },
    { x: 582, y: 70, label: sources[4] },
  ];

  const hubCx = 320;
  const hubCy = 248;

  const outs = [
    { x: 118, y: 448, label: outputs[0] },
    { x: 320, y: 472, label: outputs[1] },
    { x: 522, y: 448, label: outputs[2] },
  ];

  return (
    <div className="mkt-hero-ghost">
      <svg
        className="mkt-hero-ghost-svg"
        viewBox="0 0 640 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <radialGradient id="mkt-ghost-glow" cx="50%" cy="48%" r="58%">
            <stop offset="0%" stopColor="rgba(201, 138, 94, 0.28)" />
            <stop offset="42%" stopColor="rgba(143, 163, 184, 0.12)" />
            <stop offset="100%" stopColor="rgba(8, 9, 11, 0)" />
          </radialGradient>
          <linearGradient id="mkt-ghost-hub" x1="0" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="rgba(143, 163, 184, 0.28)" />
            <stop offset="55%" stopColor="rgba(26, 32, 42, 0.72)" />
            <stop offset="100%" stopColor="rgba(14, 17, 22, 0.9)" />
          </linearGradient>
          <linearGradient id="mkt-ghost-rail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(143, 163, 184, 0)" />
            <stop offset="50%" stopColor="rgba(143, 163, 184, 0.35)" />
            <stop offset="100%" stopColor="rgba(143, 163, 184, 0)" />
          </linearGradient>
          <pattern
            id="mkt-ghost-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="rgba(143, 163, 184, 0.07)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="640" height="560" fill="url(#mkt-ghost-glow)" />
        <rect
          x="40"
          y="100"
          width="560"
          height="300"
          fill="url(#mkt-ghost-grid)"
          opacity="0.9"
        />

        {/* Structural rails */}
        <line
          x1="48"
          y1={hubCy - 72}
          x2="592"
          y2={hubCy - 72}
          stroke="url(#mkt-ghost-rail)"
          strokeWidth="1"
        />
        <line
          x1="48"
          y1={hubCy + 72}
          x2="592"
          y2={hubCy + 72}
          stroke="url(#mkt-ghost-rail)"
          strokeWidth="1"
        />

        {/* Inbound paths */}
        <g className="mkt-hero-ghost-paths">
          {nodes.map((n, i) => (
            <path
              key={`in-${n.label}`}
              className="mkt-hero-ghost-path"
              style={{ animationDelay: `${i * 0.28}s` }}
              d={`M ${n.x} ${n.y + 20} C ${n.x} ${n.y + 88}, ${hubCx} ${hubCy - 110}, ${hubCx} ${hubCy - 58}`}
              stroke="rgba(143, 163, 184, 0.62)"
              strokeWidth="1.4"
              strokeDasharray="5 6"
            />
          ))}
          {outs.map((o, i) => (
            <path
              key={`out-${o.label}`}
              className="mkt-hero-ghost-path mkt-hero-ghost-path-out"
              style={{ animationDelay: `${0.6 + i * 0.32}s` }}
              d={`M ${hubCx} ${hubCy + 58} C ${hubCx} ${hubCy + 110}, ${o.x} ${o.y - 70}, ${o.x} ${o.y - 28}`}
              stroke="rgba(227, 165, 116, 0.72)"
              strokeWidth="1.45"
              strokeDasharray="4 5"
            />
          ))}
        </g>

        {/* Source nodes */}
        {nodes.map((n) => (
          <g
            key={n.label}
            className="mkt-hero-ghost-node"
            transform={`translate(${n.x}, ${n.y})`}
          >
            <rect
              x="-56"
              y="-17"
              width="112"
              height="34"
              fill="rgba(12, 15, 20, 0.78)"
              stroke="rgba(143, 163, 184, 0.55)"
              strokeWidth="1.15"
            />
            <path
              d="M-56 -17 H-44 M56 -17 H44 M-56 17 H-44 M56 17 H44"
              stroke="rgba(227, 165, 116, 0.55)"
              strokeWidth="1.25"
            />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              y="1"
              className="mkt-hero-ghost-label"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Industrial hub — nested bezel, sharp */}
        <g
          className="mkt-hero-ghost-hub"
          transform={`translate(${hubCx}, ${hubCy})`}
        >
          <rect
            x="-168"
            y="-62"
            width="336"
            height="124"
            fill="rgba(8, 9, 11, 0.45)"
            stroke="rgba(143, 163, 184, 0.28)"
            strokeWidth="1"
          />
          <rect
            x="-156"
            y="-50"
            width="312"
            height="100"
            fill="url(#mkt-ghost-hub)"
            stroke="rgba(143, 163, 184, 0.7)"
            strokeWidth="1.4"
          />
          <rect
            x="-148"
            y="-42"
            width="296"
            height="84"
            fill="none"
            stroke="rgba(201, 138, 94, 0.45)"
            strokeWidth="1.1"
          />
          {/* Corner registration marks */}
          <path
            d="M-156 -50 V-38 M-156 -50 H-144 M156 -50 V-38 M156 -50 H144 M-156 50 V38 M-156 50 H-144 M156 50 V38 M156 50 H144"
            stroke="rgba(227, 165, 116, 0.85)"
            strokeWidth="1.5"
          />
          <text
            textAnchor="middle"
            y="-8"
            className="mkt-hero-ghost-hub-label"
          >
            {hubTop}
          </text>
          <text
            textAnchor="middle"
            y="18"
            className="mkt-hero-ghost-hub-sub"
          >
            {hubBottom}
          </text>
        </g>

        {/* Output nodes: apps / agents / assistants */}
        {outs.map((o, i) => (
          <g
            key={o.label}
            className="mkt-hero-ghost-out"
            transform={`translate(${o.x}, ${o.y})`}
          >
            <circle
              className={
                i === 1 ? "mkt-hero-ghost-pulse" : "mkt-hero-ghost-pulse-soft"
              }
              r={i === 1 ? 36 : 30}
              fill="rgba(201, 138, 94, 0.1)"
              stroke="rgba(227, 165, 116, 0.7)"
              strokeWidth="1.3"
            />
            <circle
              r={i === 1 ? 7 : 5.5}
              fill="rgba(227, 165, 116, 0.92)"
            />
            <text
              textAnchor="middle"
              y={i === 1 ? 54 : 48}
              className="mkt-hero-ghost-tip-label"
            >
              {o.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
