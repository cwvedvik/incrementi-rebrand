"use client";

import PageShell from "@/components/sections/PageShell";
import IndustryChapters from "@/components/sections/IndustryChapters";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function IndustriesPageClient() {
  const { locale } = useLocale();
  return (
    <PageShell experienceTopic="industries" wide>
      <div className="eyebrow-sm">{t(ui.pages.industriesEyebrow, locale)}</div>
      <h1 className="page-title">{t(ui.pages.industriesTitle, locale)}</h1>
      <IndustryChapters />
    </PageShell>
  );
}
