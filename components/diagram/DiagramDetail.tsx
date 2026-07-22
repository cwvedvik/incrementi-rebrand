"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { DiagramZone } from "@/lib/content/diagram";
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

  return (
    <AnimatePresence>
      {zone ? (
        <motion.div
          key="overlay"
          className="diagram-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
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
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
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
              <span>
                {locale === "no" ? "Hvorfor det betyr noe" : "Why it matters"}
              </span>
              {t(zone.why, locale)}
            </p>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
