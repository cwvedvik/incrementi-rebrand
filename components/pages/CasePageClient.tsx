"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/sections/PageShell";
import { getCase, localizeCase } from "@/lib/cases";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function CasePageClient({ slug }: { slug: string }) {
  const { locale, href } = useLocale();
  const raw = getCase(slug);
  if (!raw) {
    notFound();
  }
  const cs = localizeCase(raw, locale);

  return (
    <PageShell experienceTopic="results">
      <div className="eyebrow-sm">
        {cs.client} · {cs.sector}
      </div>
      <h1 className="page-title">{cs.title}</h1>
      <p className="page-intro">{cs.summary}</p>

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
