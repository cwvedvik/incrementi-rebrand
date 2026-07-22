"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
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

  const select = useCallback((id: DiagramZoneId) => {
    setActive((prev) => (prev === id ? null : id));
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

  function zoneProps(id: DiagramZoneId) {
    return {
      type: "button" as const,
      "aria-pressed": active === id,
      title: t(zoneById(id).tooltip, locale),
      onClick: () => select(id),
      onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => onZoneKey(id, e),
    };
  }

  const activeZone = active ? zoneById(active) : null;

  return (
    <div
      className={`platform-diagram-wrap${active ? " is-open" : ""}`}
      ref={rootRef}
    >
      <div className="platform-diagram-stage">
        <motion.div
          className="platform-diagram"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <button
            className={`pd-zone pd-flow${active === "enablement" ? " is-active" : ""}`}
            {...zoneProps("enablement")}
          >
            <span className="pd-zone-label">
              {t(zoneById("enablement").label, locale)}
            </span>
            <div className="pd-flow-steps">
              {FLOW_STEPS.map((step, i) => (
                <div key={step.en} className="pd-flow-step">
                  {i > 0 ? (
                    <span className="pd-flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
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
            <button
              className={`pd-zone pd-rails${active === "governance" ? " is-active" : ""}`}
              {...zoneProps("governance")}
            >
              <span className="pd-rails-title">
                Governance
                <em>Guardrails</em>
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
              <button
                className={`pd-zone pd-group${active === "group" ? " is-active" : ""}`}
                {...zoneProps("group")}
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

              <button
                className={`pd-zone pd-agents${active === "agents" ? " is-active" : ""}`}
                {...zoneProps("agents")}
              >
                <div className="pd-layer-head">
                  <span className="pd-layer-k">
                    {t(zoneById("agents").label, locale)}
                  </span>
                  <span className="pd-layer-note">
                    {locale === "no"
                      ? "Domene × enhet — guardrails delt"
                      : "Domain × unit — guardrails shared"}
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

              <button
                className={`pd-zone pd-context${active === "context" ? " is-active" : ""}`}
                {...zoneProps("context")}
              >
                <div className="pd-layer-head">
                  <span className="pd-layer-k">
                    {locale === "no"
                      ? "Kontekstlag — delte guardrails"
                      : "Context layer — shared guardrails"}
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

              <button
                className={`pd-zone pd-foundation${active === "foundation" ? " is-active" : ""}`}
                {...zoneProps("foundation")}
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
        </motion.div>
      </div>

      <DiagramDetail zone={activeZone} onClose={() => setActive(null)} />
    </div>
  );
}
