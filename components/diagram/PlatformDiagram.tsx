"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  DIAGRAM_ZONES,
  diagramChrome,
  type DiagramZoneId,
  getDiagramZone,
} from "@/lib/content/platform";
import DiagramDetail from "./DiagramDetail";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

function zoneById(id: DiagramZoneId) {
  return getDiagramZone(id) ?? DIAGRAM_ZONES[0];
}

export default function PlatformDiagram() {
  const { locale } = useLocale();
  const reduce = useReducedMotion();
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
  const chrome = diagramChrome;

  return (
    <div
      className={`platform-diagram-wrap${active ? " is-open" : ""}`}
      ref={rootRef}
    >
      <div className="platform-diagram-stage">
        <motion.div
          className="platform-diagram"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <button
            className={`pd-zone pd-flow${active === "enablement" ? " is-active" : ""}`}
            {...zoneProps("enablement")}
          >
            <span className="pd-zone-label">
              {t(zoneById("enablement").label, locale)}
            </span>
            <div className="pd-flow-steps">
              {chrome.flowSteps.map((step, i) => (
                <div key={step.en} className="pd-flow-step">
                  {i > 0 ? (
                    <span className="pd-flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                  <span
                    className={step.en === "The Gate" ? "pd-gate" : undefined}
                  >
                    {step[locale]}
                  </span>
                </div>
              ))}
            </div>
            <p className="pd-flow-note">{t(chrome.flowNote, locale)}</p>
          </button>

          <div className="pd-main">
            <button
              className={`pd-zone pd-rails${active === "governance" ? " is-active" : ""}`}
              {...zoneProps("governance")}
            >
              <span className="pd-rails-title">
                {t(chrome.railsTitle, locale)}
                <em>{t(chrome.railsSub, locale)}</em>
              </span>
              <ul>
                {chrome.rails.map((r) => (
                  <li key={r.en}>{r[locale]}</li>
                ))}
              </ul>
              <span className="pd-rails-foot">{t(chrome.railsFoot, locale)}</span>
            </button>

            <div className="pd-stack">
              <button
                className={`pd-zone pd-group${active === "group" ? " is-active" : ""}`}
                {...zoneProps("group")}
              >
                <span className="pd-layer-k">
                  {t(zoneById("group").label, locale)}
                </span>
                <span className="pd-layer-h">{t(chrome.groupHead, locale)}</span>
              </button>

              <div className="pd-boundary" aria-hidden="true">
                <span>{t(chrome.boundary, locale)}</span>
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
                    {t(chrome.agentsNote, locale)}
                  </span>
                </div>
                <div className="pd-agents-grid" aria-hidden="true">
                  <div className="pd-agents-corner" />
                  {chrome.domains.map((d) => (
                    <div key={d.en} className="pd-agents-colhead">
                      {d[locale]}
                    </div>
                  ))}
                  {chrome.units.map((u) => (
                    <div key={u.en} className="pd-agents-row">
                      <div className="pd-agents-rowhead">{u[locale]}</div>
                      {chrome.domains.map((d) => (
                        <div
                          key={`${u.en}-${d.en}`}
                          className="pd-agents-cell"
                        >
                          <span className="pd-agents-dot" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="pd-agents-mobile-legend">
                  {t(chrome.agentsNote, locale)}
                </p>
              </button>

              <button
                className={`pd-zone pd-context${active === "context" ? " is-active" : ""}`}
                {...zoneProps("context")}
              >
                <div className="pd-layer-head">
                  <span className="pd-layer-k">
                    {t(chrome.contextHead, locale)}
                  </span>
                </div>
                <div className="pd-context-parts">
                  {chrome.contextParts.map((p) => (
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
                    {t(chrome.foundationHead, locale)}
                  </span>
                  <span className="pd-layer-note">
                    {t(chrome.foundationNote, locale)}
                  </span>
                </div>
                <div className="pd-sources">
                  {chrome.sources.map((s) => (
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
