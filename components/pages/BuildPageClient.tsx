"use client";

import PageShell from "@/components/sections/PageShell";
import BuildLayers from "@/components/sections/BuildLayers";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function BuildPageClient() {
  const { locale } = useLocale();
  return (
    <PageShell experienceTopic="build">
      <div className="eyebrow-sm">{t(ui.pages.buildEyebrow, locale)}</div>
      <h1 className="page-title">{t(ui.pages.buildTitle, locale)}</h1>
      <BuildLayers />
    </PageShell>
  );
}
