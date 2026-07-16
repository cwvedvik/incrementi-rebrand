"use client";

import { motion } from "framer-motion";
import { BUILD_LAYERS } from "@/lib/content/build";
import { ConceptIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

export default function BuildLayers() {
  const { locale } = useLocale();
  const core = BUILD_LAYERS.filter((l) => !l.wide);
  const consulting = BUILD_LAYERS.find((l) => l.wide);

  return (
    <div className="build-layers">
      {core.map((layer, i) => (
        <motion.div
          key={layer.id}
          className="build-layer"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.65,
            delay: 0.1 * i,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ConceptIcon name={layer.icon} className="concept-icon lg" />
          <div>
            <div className="k">{t(layer.k, locale)}</div>
            <h3>{t(layer.h, locale)}</h3>
            <p>{t(layer.p, locale)}</p>
          </div>
        </motion.div>
      ))}
      {consulting ? (
        <motion.div
          className="build-rail"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <ConceptIcon name="consulting" className="concept-icon lg" />
          <div>
            <div className="k">{t(consulting.k, locale)}</div>
            <h3>{t(consulting.h, locale)}</h3>
            <p>{t(consulting.p, locale)}</p>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
