"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import PageShell from "@/components/sections/PageShell";
import { getCase, localizeCase } from "@/lib/cases";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CasePageClient({ slug }: { slug: string }) {
  const { locale, href } = useLocale();
  const reduce = useReducedMotion();
  const raw = getCase(slug);
  if (!raw) {
    notFound();
  }
  const cs = localizeCase(raw, locale);

  return (
    <PageShell>
      <header className="mkt-sub-hero">
        <motion.p
          className="mkt-eyebrow"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {cs.client}
        </motion.p>
        <motion.h1
          className="serif mkt-sub-title"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease }}
        >
          {cs.title}
        </motion.h1>
        <motion.p
          className="mkt-sub-lead"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
        >
          {cs.summary}
        </motion.p>
      </header>

      <div className="case-hero-metrics">
        {cs.metrics.map((m, i) => (
          <div className="m" key={i}>
            <div className="n">{m.value}</div>
            <div className="l">{m.label}</div>
          </div>
        ))}
      </div>

      <section className="case-section">
        <h2>{locale === "no" ? "Utfordringen" : "The challenge"}</h2>
        <p>{cs.challenge}</p>
      </section>

      <section className="case-section">
        <h2>{locale === "no" ? "Det vi bygde" : "What we built"}</h2>
        <ul className="ai-points">
          {cs.built.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="case-section">
        <h2>{locale === "no" ? "Resultatene" : "The results"}</h2>
        <ul className="ai-points">
          {cs.results.map((r, i) => (
            <li key={i}>
              <b>{r}</b>
            </li>
          ))}
        </ul>
      </section>

      <p className="page-back">
        <Link href={href("/results")}>
          ← {t(ui.pages.resultsEyebrow, locale)}
        </Link>
      </p>
    </PageShell>
  );
}
