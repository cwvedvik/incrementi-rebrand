"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { motion } from "framer-motion";
import {
  DIAGRAM_ZONES,
  type DiagramZoneId,
  getDiagramZone,
} from "@/lib/content/diagram";
import DiagramDetail from "./DiagramDetail";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

const FLOW_STEPS = [
  { no: "Ansatte", en: "Employees" },
  { no: "Sandbox", en: "Sandbox" },
  { no: "Porten", en: "The Gate" },
] as const;

const RAILS = [
  { no: "Tilgangskontroll", en: "Access control" },
  { no: "Enhetsisolasjon", en: "Unit isolation" },
  { no: "Audit · lineage", en: "Audit · lineage" },
  { no: "Modellfleksibilitet", en: "Model flexibility" },
] as const;

const DOMAINS = [
  { no: "Drift", en: "Ops" },
  { no: "Produksjon", en: "Production" },
  { no: "Økonomi", en: "Finance" },
] as const;

const UNITS = [
  { no: "Enhet A", en: "Unit A" },
  { no: "Enhet B", en: "Unit B" },
  { no: "Enhet C", en: "Unit C" },
] as const;

const CONTEXT_PARTS = [
  { k: "MCP", no: "Styrt datatilgang", en: "Governed data access" },
  { k: "RAG", no: "Henter kontekst", en: "Retrieves context" },
  { k: "KG", no: "Relasjoner · lineage", en: "Relations · lineage" },
] as const;

const SOURCES = [
  { no: "ERP / systemer", en: "ERP / systems" },
  { no: "Dokumenter", en: "Documents" },
  { no: "Sensorer / OT", en: "Sensors / OT" },
  { no: "API-er", en: "APIs" },
  { no: "Metadata", en: "Metadata" },
] as const;

function zoneById(id: DiagramZoneId) {
  return getDiagramZone(id) ?? DIAGRAM_ZONES[0];
}

export default function PlatformDiagram() {
  const { locale } = useLocale();
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<DiagramZoneId | null>(null);
  const [hoverTip, setHoverTip] = useState<{
    id: DiagramZoneId;
    x: number;
    y: number;
  } | null>(null);
  const tipId = useId();

  const select = useCallback((id: DiagramZoneId) => {
    setActive((prev) => (prev === id ? null : id));
    setHoverTip(null);
  }, []);

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onDoc(e: globalThis.MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setActive(null);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function onZoneKey(id: DiagramZoneId, e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(id);
    }
  }

  function onZoneEnter(
    id: DiagramZoneId,
    e: MouseEvent<HTMLElement>,
  ) {
    if (window.matchMedia("(hover: hover)").matches) {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) return;
      setHoverTip({
        id,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 12,
      });
    }
  }

  function onZoneMove(e: MouseEvent<HTMLElement>) {
    if (!hoverTip) return;
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHoverTip((prev) =>
      prev
        ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top - 12 }
        : null,
    );
  }

  const tipZone = hoverTip ? zoneById(hoverTip.id) : null;
  const activeZone = active ? zoneById(active) : null;

  return (
    <div
      className={`platform-diagram-wrap${active ? " is-open" : ""}`}
      ref={rootRef}
    >
      <motion.div
        className="platform-diagram"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        {/* Enablement flow */}
        <button
          type="button"
          className={`pd-zone pd-flow${active === "enablement" ? " is-active" : ""}`}
          aria-pressed={active === "enablement"}
          aria-describedby={hoverTip?.id === "enablement" ? tipId : undefined}
          onClick={() => select("enablement")}
          onKeyDown={(e) => onZoneKey("enablement", e)}
          onMouseEnter={(e) => onZoneEnter("enablement", e)}
          onMouseMove={onZoneMove}
          onMouseLeave={() => setHoverTip(null)}
        >
          <span className="pd-zone-label">
            {t(zoneById("enablement").label, locale)}
          </span>
          <div className="pd-flow-steps">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.en} className="pd-flow-step">
                {i > 0 ? <span className="pd-flow-arrow" aria-hidden="true">→</span> : null}
                <span className={step.en === "The Gate" ? "pd-gate" : undefined}>
                  {step[locale]}
                </span>
              </div>
            ))}
          </div>
          <p className="pd-flow-note">
            {locale === "no"
              ? "Sandbox uten klientdata · produksjon kun via plattformen"
              : "Sandbox with no client data · production only via the platform"}
          </p>
        </button>

        <div className="pd-main">
          {/* Governance rails */}
          <button
            type="button"
            className={`pd-zone pd-rails${active === "governance" ? " is-active" : ""}`}
            aria-pressed={active === "governance"}
            onClick={() => select("governance")}
            onKeyDown={(e) => onZoneKey("governance", e)}
            onMouseEnter={(e) => onZoneEnter("governance", e)}
            onMouseMove={onZoneMove}
            onMouseLeave={() => setHoverTip(null)}
          >
            <span className="pd-rails-title">
              {locale === "no" ? "Governance" : "Governance"}
              <em>{locale === "no" ? "Skinnene" : "The rails"}</em>
            </span>
            <ul>
              {RAILS.map((r) => (
                <li key={r.en}>{r[locale]}</li>
              ))}
            </ul>
            <span className="pd-rails-foot">
              {locale === "no"
                ? "Håndhevet én gang, for alt"
                : "Enforced once, for everything"}
            </span>
          </button>

          <div className="pd-stack">
            {/* Group insight */}
            <button
              type="button"
              className={`pd-zone pd-group${active === "group" ? " is-active" : ""}`}
              aria-pressed={active === "group"}
              onClick={() => select("group")}
              onKeyDown={(e) => onZoneKey("group", e)}
              onMouseEnter={(e) => onZoneEnter("group", e)}
              onMouseMove={onZoneMove}
              onMouseLeave={() => setHoverTip(null)}
            >
              <span className="pd-layer-k">
                {t(zoneById("group").label, locale)}
              </span>
              <span className="pd-layer-h">
                {locale === "no"
                  ? "Analyse & benchmarking på tvers"
                  : "Cross-company analytics & benchmarking"}
              </span>
            </button>

            <div className="pd-boundary" aria-hidden="true">
              <span>
                {locale === "no"
                  ? "Konfidensialitetsgrense — rådata krysser ikke opp"
                  : "Confidentiality boundary — raw data never crosses up"}
              </span>
            </div>

            {/* Agents grid */}
            <button
              type="button"
              className={`pd-zone pd-agents${active === "agents" ? " is-active" : ""}`}
              aria-pressed={active === "agents"}
              onClick={() => select("agents")}
              onKeyDown={(e) => onZoneKey("agents", e)}
              onMouseEnter={(e) => onZoneEnter("agents", e)}
              onMouseMove={onZoneMove}
              onMouseLeave={() => setHoverTip(null)}
            >
              <div className="pd-layer-head">
                <span className="pd-layer-k">
                  {t(zoneById("agents").label, locale)}
                </span>
                <span className="pd-layer-note">
                  {locale === "no"
                    ? "Domene × enhet — skinner delt"
                    : "Domain × unit — rails shared"}
                </span>
              </div>
              <div className="pd-agents-grid" aria-hidden="true">
                <div className="pd-agents-corner" />
                {DOMAINS.map((d) => (
                  <div key={d.en} className="pd-agents-colhead">
                    {d[locale]}
                  </div>
                ))}
                {UNITS.map((u) => (
                  <div key={u.en} className="pd-agents-row">
                    <div className="pd-agents-rowhead">{u[locale]}</div>
                    {DOMAINS.map((d) => (
                      <div key={`${u.en}-${d.en}`} className="pd-agents-cell">
                        RAG
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </button>

            {/* Context layer */}
            <button
              type="button"
              className={`pd-zone pd-context${active === "context" ? " is-active" : ""}`}
              aria-pressed={active === "context"}
              onClick={() => select("context")}
              onKeyDown={(e) => onZoneKey("context", e)}
              onMouseEnter={(e) => onZoneEnter("context", e)}
              onMouseMove={onZoneMove}
              onMouseLeave={() => setHoverTip(null)}
            >
              <div className="pd-layer-head">
                <span className="pd-layer-k">
                  {locale === "no"
                    ? "Kontekstlag — delte skinner"
                    : "Context layer — shared rails"}
                </span>
              </div>
              <div className="pd-context-parts">
                {CONTEXT_PARTS.map((p) => (
                  <div key={p.k} className="pd-context-part">
                    <strong>{p.k}</strong>
                    <span>{p[locale]}</span>
                  </div>
                ))}
              </div>
            </button>

            {/* Data foundation */}
            <button
              type="button"
              className={`pd-zone pd-foundation${active === "foundation" ? " is-active" : ""}`}
              aria-pressed={active === "foundation"}
              onClick={() => select("foundation")}
              onKeyDown={(e) => onZoneKey("foundation", e)}
              onMouseEnter={(e) => onZoneEnter("foundation", e)}
              onMouseMove={onZoneMove}
              onMouseLeave={() => setHoverTip(null)}
            >
              <div className="pd-layer-head">
                <span className="pd-layer-k">
                  {locale === "no"
                    ? "Pålitelig datagrunnlag"
                    : "Reliable data foundation"}
                </span>
                <span className="pd-layer-note">
                  {locale === "no"
                    ? "Data blir der den lever — brokered, ikke kopiert inn i kaos"
                    : "Data stays where it lives — brokered, not copied into chaos"}
                </span>
              </div>
              <div className="pd-sources">
                {SOURCES.map((s) => (
                  <span key={s.en} className="pd-source">
                    {s[locale]}
                  </span>
                ))}
              </div>
            </button>
          </div>
        </div>

        {hoverTip && tipZone ? (
          <div
            id={tipId}
            className="pd-tooltip"
            role="tooltip"
            style={{ left: hoverTip.x, top: hoverTip.y }}
          >
            {t(tipZone.tooltip, locale)}
          </div>
        ) : null}
      </motion.div>

      <DiagramDetail zone={activeZone} onClose={() => setActive(null)} />
    </div>
  );
}
