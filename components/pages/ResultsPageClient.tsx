"use client";

import PageShell from "@/components/sections/PageShell";
import LogoStrip from "@/components/sections/LogoStrip";
import CaseCards from "@/components/sections/CaseCards";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function ResultsPageClient() {
  const { locale } = useLocale();
  return (
    <PageShell experienceTopic="results" wide>
      <div className="eyebrow-sm">{t(ui.pages.resultsEyebrow, locale)}</div>
      <h1 className="page-title">{t(ui.pages.resultsTitle, locale)}</h1>
      <p className="page-intro">{t(ui.pages.resultsIntro, locale)}</p>
      <LogoStrip />
      <CaseCards />
    </PageShell>
  );
}
