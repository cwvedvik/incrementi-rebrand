"use client";

import { motion, useReducedMotion } from "framer-motion";
import PageShell from "@/components/sections/PageShell";
import PlatformDiagram from "@/components/diagram/PlatformDiagram";
import { platform } from "@/lib/content/platform";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

const ease = [0.16, 1, 0.3, 1] as const;

export default function DiagramPageClient() {
  const { locale } = useLocale();
  const reduce = useReducedMotion();

  return (
    <PageShell wide>
      <header className="mkt-sub-hero">
        <motion.p
          className="mkt-eyebrow"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          {t(platform.hero.eyebrow, locale)}
        </motion.p>
        <motion.h1
          className="serif mkt-sub-title"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease }}
        >
          {t(platform.hero.title, locale)}
        </motion.h1>
        <motion.p
          className="mkt-sub-lead"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
        >
          {t(platform.hero.lead, locale)}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease }}
        >
          <a className="mkt-btn mkt-btn-primary" href="#arkitektur">
            {t(platform.hero.cta, locale)}
          </a>
        </motion.div>
      </header>

      <section className="mkt-sub-section mkt-pillars-section">
        <ul className="mkt-pillars-grid">
          {platform.pillars.map((p, i) => (
            <motion.li
              key={p.title.en}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease }}
            >
              <h2>{t(p.title, locale)}</h2>
              <p>{t(p.body, locale)}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="mkt-sub-section">
        <h2 className="serif mkt-sub-h2">{t(platform.layers.title, locale)}</h2>
        <p className="mkt-sub-lead tight">{t(platform.layers.lead, locale)}</p>
        <ol className="mkt-layer-list">
          {platform.layers.items.map((item, i) => (
            <motion.li
              key={item.title.en}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
            >
              <span className="mkt-layer-n" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="serif">{t(item.title, locale)}</h3>
                <p>{t(item.body, locale)}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="mkt-sub-section mkt-diagram-section" id="arkitektur">
        <h2 className="serif mkt-sub-h2">{t(platform.diagram.title, locale)}</h2>
        <p className="mkt-sub-lead tight">{t(platform.diagram.lead, locale)}</p>
        <PlatformDiagram />
      </section>
    </PageShell>
  );
}
