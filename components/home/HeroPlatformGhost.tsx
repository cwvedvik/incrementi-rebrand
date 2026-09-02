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
    { no: "BI", en: "BI" },
    { no: "Maskindata / OT", en: "Machine data / OT" },
    { no: "Fagsystemer", en: "Line systems" },
  ] as const satisfies readonly LocalizedString[],
  sourcesCompact: [
    { no: "ERP", en: "ERP" },
    { no: "CRM", en: "CRM" },
    { no: "Excel", en: "Excel" },
    { no: "BI", en: "BI" },
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

/** Side-panel hero diagram: sources → data/context foundation → apps & agents. */
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

  const chipW = compact ? 78 : 96;
  const chipH = compact ? 28 : 30;
  const chipX = -chipW / 2;
  const chipY = -chipH / 2;

  // 6 sources: wider spacing, irregular heights; inset so chips aren't clipped
  const nodes = compact
    ? [
        { x: 78, y: 70, label: sources[0] },
        { x: 172, y: 28, label: sources[1] },
        { x: 268, y: 52, label: sources[2] },
        { x: 364, y: 22, label: sources[3] },
        { x: 456, y: 62, label: sources[4] },
        { x: 548, y: 34, label: sources[5] },
      ]
    : [
        { x: 60, y: 86, label: sources[0] },
        { x: 172, y: 28, label: sources[1] },
        { x: 292, y: 64, label: sources[2] },
        { x: 412, y: 20, label: sources[3] },
        { x: 532, y: 78, label: sources[4] },
        { x: 640, y: 38, label: sources[5] },
      ];

  const hubCx = compact ? 316 : 350;
  const hubCy = compact ? 222 : 248;
  const hubW = compact ? 248 : 268;
  const hubH = compact ? 82 : 90;

  const outs = compact
    ? [
        { x: 140, y: 388, label: outputs[0] },
        { x: 316, y: 408, label: outputs[1] },
        { x: 490, y: 388, label: outputs[2] },
      ]
    : [
        { x: 130, y: 438, label: outputs[0] },
        { x: 350, y: 462, label: outputs[1] },
        { x: 570, y: 438, label: outputs[2] },
      ];

  const viewW = compact ? 626 : 700;
  const viewH = compact ? 460 : 530;

  return (
    <div className={`mkt-hero-ghost${compact ? " is-compact" : ""}`}>
      <svg
        className="mkt-hero-ghost-svg"
        viewBox={compact ? "0 0 626 460" : "0 0 700 530"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="mkt-ghost-glow" cx="50%" cy="46%" r="58%">
            <stop offset="0%" stopColor="rgba(201, 138, 94, 0.32)" />
            <stop offset="40%" stopColor="rgba(143, 163, 184, 0.16)" />
            <stop offset="100%" stopColor="rgba(8, 9, 11, 0)" />
          </radialGradient>
          <linearGradient id="mkt-ghost-hub" x1="0" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="rgba(163, 180, 198, 0.42)" />
            <stop offset="50%" stopColor="rgba(36, 46, 60, 0.78)" />
            <stop offset="100%" stopColor="rgba(22, 28, 38, 0.88)" />
          </linearGradient>
          <linearGradient id="mkt-ghost-rail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(143, 163, 184, 0)" />
            <stop offset="50%" stopColor="rgba(143, 163, 184, 0.45)" />
            <stop offset="100%" stopColor="rgba(143, 163, 184, 0)" />
          </linearGradient>
          <pattern
            id="mkt-ghost-grid"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 22 0 L 0 0 0 22"
              fill="none"
              stroke="rgba(143, 163, 184, 0.12)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width={viewW} height={viewH} fill="url(#mkt-ghost-glow)" />
        <rect
          x="28"
          y="80"
          width={viewW - 56}
          height={compact ? 240 : 270}
          fill="url(#mkt-ghost-grid)"
          opacity="0.95"
        />

        <line
          x1="36"
          y1={hubCy - 62}
          x2={viewW - 36}
          y2={hubCy - 62}
          stroke="url(#mkt-ghost-rail)"
          strokeWidth="1"
        />
        <line
          x1="36"
          y1={hubCy + 62}
          x2={viewW - 36}
          y2={hubCy + 62}
          stroke="url(#mkt-ghost-rail)"
          strokeWidth="1"
        />

        <g className="mkt-hero-ghost-paths">
          {nodes.map((n, i) => (
            <path
              key={`in-${n.label}`}
              className="mkt-hero-ghost-path"
              style={{ animationDelay: `${i * 0.22}s` }}
              d={`M ${n.x} ${n.y + chipH / 2} C ${n.x} ${n.y + 72}, ${hubCx} ${hubCy - 92}, ${hubCx} ${hubCy - hubH / 2}`}
              stroke="rgba(168, 186, 204, 0.78)"
              strokeWidth="1.45"
              strokeDasharray="5 6"
            />
          ))}
          {outs.map((o, i) => (
            <path
              key={`out-${o.label}`}
              className="mkt-hero-ghost-path mkt-hero-ghost-path-out"
              style={{ animationDelay: `${0.5 + i * 0.28}s` }}
              d={`M ${hubCx} ${hubCy + hubH / 2} C ${hubCx} ${hubCy + 88}, ${o.x} ${o.y - 58}, ${o.x} ${o.y - 24}`}
              stroke="rgba(227, 165, 116, 0.85)"
              strokeWidth="1.5"
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
              fill="rgba(28, 36, 48, 0.88)"
              stroke="rgba(168, 186, 204, 0.72)"
              strokeWidth="1.2"
            />
            <path
              d={`M${chipX} ${chipY} H${chipX + 10} M${-chipX} ${chipY} H${-chipX - 10} M${chipX} ${-chipY} H${chipX + 10} M${-chipX} ${-chipY} H${-chipX - 10}`}
              stroke="rgba(227, 165, 116, 0.7)"
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
            x={-hubW / 2 - 10}
            y={-hubH / 2 - 10}
            width={hubW + 20}
            height={hubH + 20}
            fill="rgba(18, 24, 34, 0.55)"
            stroke="rgba(168, 186, 204, 0.35)"
            strokeWidth="1"
          />
          <rect
            x={-hubW / 2}
            y={-hubH / 2}
            width={hubW}
            height={hubH}
            fill="url(#mkt-ghost-hub)"
            stroke="rgba(188, 202, 216, 0.85)"
            strokeWidth="1.45"
          />
          <rect
            x={-hubW / 2 + 7}
            y={-hubH / 2 + 7}
            width={hubW - 14}
            height={hubH - 14}
            fill="none"
            stroke="rgba(227, 165, 116, 0.55)"
            strokeWidth="1.15"
          />
          <path
            d={`M${-hubW / 2} ${-hubH / 2} V${-hubH / 2 + 11} M${-hubW / 2} ${-hubH / 2} H${-hubW / 2 + 11} M${hubW / 2} ${-hubH / 2} V${-hubH / 2 + 11} M${hubW / 2} ${-hubH / 2} H${hubW / 2 - 11} M${-hubW / 2} ${hubH / 2} V${hubH / 2 - 11} M${-hubW / 2} ${hubH / 2} H${-hubW / 2 + 11} M${hubW / 2} ${hubH / 2} V${hubH / 2 - 11} M${hubW / 2} ${hubH / 2} H${hubW / 2 - 11}`}
            stroke="rgba(227, 165, 116, 0.95)"
            strokeWidth="1.5"
          />
          <text
            textAnchor="middle"
            y="-7"
            className="mkt-hero-ghost-hub-label"
          >
            {hubTop}
          </text>
          <text textAnchor="middle" y="16" className="mkt-hero-ghost-hub-sub">
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
              r={i === 1 ? (compact ? 28 : 32) : compact ? 24 : 27}
              fill="rgba(201, 138, 94, 0.14)"
              stroke="rgba(227, 165, 116, 0.82)"
              strokeWidth="1.35"
            />
            <circle
              r={i === 1 ? 6.5 : 5}
              fill="rgba(227, 165, 116, 0.95)"
            />
            <text
              textAnchor="middle"
              y={i === 1 ? 46 : 40}
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
