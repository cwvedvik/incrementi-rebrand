"use client";

import { useEffect, useState } from "react";
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
  sourcesCompact: [
    { no: "ERP", en: "ERP" },
    { no: "CRM", en: "CRM" },
    { no: "Excel", en: "Excel" },
    { no: "OT", en: "OT" },
    { no: "Fagsys.", en: "LOB" },
  ] as const satisfies readonly LocalizedString[],
  outputs: [
    { no: "Applikasjoner", en: "Applications" },
    { no: "AI-agenter", en: "AI agents" },
    { no: "Assistenter", en: "Assistants" },
  ] as const satisfies readonly LocalizedString[],
  outputsCompact: [
    { no: "Apper", en: "Apps" },
    { no: "Agenter", en: "Agents" },
    { no: "Assist", en: "Assist" },
  ] as const satisfies readonly LocalizedString[],
};

/** Atmospheric hero diagram: sources → industrial data/context foundation → apps & agents. */
export default function HeroPlatformGhost() {
  const { locale } = useLocale();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const apply = () => setCompact(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const sourceCopy = compact ? copy.sourcesCompact : copy.sources;
  const outputCopy = compact ? copy.outputsCompact : copy.outputs;
  const sources = sourceCopy.map((s) => t(s, locale));
  const outputs = outputCopy.map((s) => t(s, locale));
  const hubTop = t(copy.hubTop, locale);
  const hubBottom = t(copy.hubBottom, locale);

  const chipW = compact ? 88 : 112;
  const chipH = compact ? 30 : 34;
  const chipX = -chipW / 2;
  const chipY = -chipH / 2;

  const nodes = compact
    ? [
        { x: 96, y: 58, label: sources[0] },
        { x: 198, y: 38, label: sources[1] },
        { x: 320, y: 26, label: sources[2] },
        { x: 442, y: 38, label: sources[3] },
        { x: 544, y: 58, label: sources[4] },
      ]
    : [
        { x: 58, y: 70, label: sources[0] },
        { x: 174, y: 42, label: sources[1] },
        { x: 320, y: 28, label: sources[2] },
        { x: 466, y: 42, label: sources[3] },
        { x: 582, y: 70, label: sources[4] },
      ];

  const hubCx = 320;
  const hubCy = compact ? 228 : 248;
  const hubW = compact ? 280 : 312;
  const hubH = compact ? 88 : 100;

  const outs = compact
    ? [
        { x: 150, y: 400, label: outputs[0] },
        { x: 320, y: 422, label: outputs[1] },
        { x: 490, y: 400, label: outputs[2] },
      ]
    : [
        { x: 118, y: 448, label: outputs[0] },
        { x: 320, y: 472, label: outputs[1] },
        { x: 522, y: 448, label: outputs[2] },
      ];

  return (
    <div className={`mkt-hero-ghost${compact ? " is-compact" : ""}`}>
      <svg
        className="mkt-hero-ghost-svg"
        viewBox={compact ? "16 0 608 470" : "0 0 640 560"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        preserveAspectRatio="xMidYMid meet"
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

        <rect
          width="640"
          height={compact ? 500 : 560}
          fill="url(#mkt-ghost-glow)"
        />
        <rect
          x="40"
          y="90"
          width="560"
          height={compact ? 260 : 300}
          fill="url(#mkt-ghost-grid)"
          opacity="0.9"
        />

        <line
          x1="48"
          y1={hubCy - 68}
          x2="592"
          y2={hubCy - 68}
          stroke="url(#mkt-ghost-rail)"
          strokeWidth="1"
        />
        <line
          x1="48"
          y1={hubCy + 68}
          x2="592"
          y2={hubCy + 68}
          stroke="url(#mkt-ghost-rail)"
          strokeWidth="1"
        />

        <g className="mkt-hero-ghost-paths">
          {nodes.map((n, i) => (
            <path
              key={`in-${n.label}`}
              className="mkt-hero-ghost-path"
              style={{ animationDelay: `${i * 0.28}s` }}
              d={`M ${n.x} ${n.y + chipH / 2} C ${n.x} ${n.y + 80}, ${hubCx} ${hubCy - 100}, ${hubCx} ${hubCy - hubH / 2}`}
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
              d={`M ${hubCx} ${hubCy + hubH / 2} C ${hubCx} ${hubCy + 96}, ${o.x} ${o.y - 64}, ${o.x} ${o.y - 26}`}
              stroke="rgba(227, 165, 116, 0.72)"
              strokeWidth="1.45"
              strokeDasharray="4 5"
            />
          ))}
        </g>

        {nodes.map((n) => (
          <g
            key={n.label}
            className="mkt-hero-ghost-node"
            transform={`translate(${n.x}, ${n.y})`}
          >
            <rect
              x={chipX}
              y={chipY}
              width={chipW}
              height={chipH}
              fill="rgba(12, 15, 20, 0.78)"
              stroke="rgba(143, 163, 184, 0.55)"
              strokeWidth="1.15"
            />
            <path
              d={`M${chipX} ${chipY} H${chipX + 12} M${-chipX} ${chipY} H${-chipX - 12} M${chipX} ${-chipY} H${chipX + 12} M${-chipX} ${-chipY} H${-chipX - 12}`}
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

        <g
          className="mkt-hero-ghost-hub"
          transform={`translate(${hubCx}, ${hubCy})`}
        >
          <rect
            x={-hubW / 2 - 12}
            y={-hubH / 2 - 12}
            width={hubW + 24}
            height={hubH + 24}
            fill="rgba(8, 9, 11, 0.45)"
            stroke="rgba(143, 163, 184, 0.28)"
            strokeWidth="1"
          />
          <rect
            x={-hubW / 2}
            y={-hubH / 2}
            width={hubW}
            height={hubH}
            fill="url(#mkt-ghost-hub)"
            stroke="rgba(143, 163, 184, 0.7)"
            strokeWidth="1.4"
          />
          <rect
            x={-hubW / 2 + 8}
            y={-hubH / 2 + 8}
            width={hubW - 16}
            height={hubH - 16}
            fill="none"
            stroke="rgba(201, 138, 94, 0.45)"
            strokeWidth="1.1"
          />
          <path
            d={`M${-hubW / 2} ${-hubH / 2} V${-hubH / 2 + 12} M${-hubW / 2} ${-hubH / 2} H${-hubW / 2 + 12} M${hubW / 2} ${-hubH / 2} V${-hubH / 2 + 12} M${hubW / 2} ${-hubH / 2} H${hubW / 2 - 12} M${-hubW / 2} ${hubH / 2} V${hubH / 2 - 12} M${-hubW / 2} ${hubH / 2} H${-hubW / 2 + 12} M${hubW / 2} ${hubH / 2} V${hubH / 2 - 12} M${hubW / 2} ${hubH / 2} H${hubW / 2 - 12}`}
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
          <text textAnchor="middle" y="18" className="mkt-hero-ghost-hub-sub">
            {hubBottom}
          </text>
        </g>

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
              r={i === 1 ? (compact ? 30 : 36) : compact ? 26 : 30}
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
              y={i === 1 ? 48 : 42}
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
