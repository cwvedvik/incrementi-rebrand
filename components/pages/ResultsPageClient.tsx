"use client";

import { motion, useReducedMotion } from "framer-motion";
import PageShell from "@/components/sections/PageShell";
import CaseCards from "@/components/sections/CaseCards";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ResultsPageClient() {
  const { locale } = useLocale();
  const reduce = useReducedMotion();

  return (
    <PageShell wide>
      <header className="mkt-sub-hero">
        <motion.h1
          className="display mkt-sub-title"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          {t(ui.pages.resultsTitle, locale)}
        </motion.h1>
        <motion.p
          className="mkt-sub-lead"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
        >
          {t(ui.pages.resultsIntro, locale)}
        </motion.p>
      </header>
      <CaseCards />
    </PageShell>
  );
}
