"use client";

import PageShell from "@/components/sections/PageShell";
import BuildingBlocks from "@/components/sections/BuildingBlocks";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function JourneyPageClient() {
  const { locale } = useLocale();
  return (
    <PageShell experienceTopic="journey">
      <div className="eyebrow-sm">{t(ui.pages.journeyEyebrow, locale)}</div>
      <h1 className="page-title">{t(ui.pages.journeyTitle, locale)}</h1>
      <p className="page-intro">{t(ui.pages.journeyIntro, locale)}</p>
      <BuildingBlocks variant="page" />
    </PageShell>
  );
}
