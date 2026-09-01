"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { DiagramZone } from "@/lib/content/platform";
import { diagramChrome } from "@/lib/content/platform";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

export default function DiagramDetail({
  zone,
  onClose,
}: {
  zone: DiagramZone | null;
  onClose: () => void;
}) {
  const { locale } = useLocale();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {zone ? (
        <motion.div
          key="overlay"
          className="diagram-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
        >
          <button
            type="button"
            className="diagram-overlay-backdrop"
            aria-label={locale === "no" ? "Lukk" : "Close"}
            onClick={onClose}
          />
          <motion.aside
            key={zone.id}
            className="diagram-detail"
            role="dialog"
            aria-modal="true"
            aria-labelledby="diagram-detail-title"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="diagram-detail-top">
              <span className="diagram-detail-k">{t(zone.label, locale)}</span>
              <button
                type="button"
                className="diagram-detail-close"
                onClick={onClose}
                aria-label={locale === "no" ? "Lukk" : "Close"}
              >
                ×
              </button>
            </div>
            <h2 id="diagram-detail-title" className="diagram-detail-title">
              {t(zone.title, locale)}
            </h2>
            <p className="diagram-detail-body">{t(zone.body, locale)}</p>
            <p className="diagram-detail-why">
              <span>{t(diagramChrome.whyLabel, locale)}</span>
              {t(zone.why, locale)}
            </p>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
