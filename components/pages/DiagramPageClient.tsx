"use client";

import PageShell from "@/components/sections/PageShell";
import PlatformDiagram from "@/components/diagram/PlatformDiagram";
import { DIAGRAM_HERO } from "@/lib/content/diagram";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

export default function DiagramPageClient() {
  const { locale } = useLocale();

  return (
    <PageShell wide experienceTopic="build">
      <div className="diagram-hero">
        <div className="eyebrow-sm">{t(DIAGRAM_HERO.eyebrow, locale)}</div>
        <h1 className="page-title diagram-hero-title">
          {t(DIAGRAM_HERO.title, locale)}
        </h1>
        <p className="diagram-hero-sub">{t(DIAGRAM_HERO.subtitle, locale)}</p>
        <p className="diagram-hero-hint">{t(DIAGRAM_HERO.hint, locale)}</p>
      </div>
      <PlatformDiagram />
    </PageShell>
  );
}
