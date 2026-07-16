"use client";

import PageShell from "@/components/sections/PageShell";
import { TOPICS } from "@/lib/topics";
import { ConceptIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function AboutPageClient() {
  const { locale } = useLocale();
  return (
    <PageShell experienceTopic="why">
      <div className="eyebrow-sm">{t(ui.pages.aboutEyebrow, locale)}</div>
      <h1 className="page-title">{t(ui.pages.aboutTitle, locale)}</h1>
      <p className="page-intro">{t(ui.pages.aboutIntro, locale)}</p>
      <div className="ownership-mark" aria-hidden="true">
        <ConceptIcon name="ownership" className="concept-icon xl" />
      </div>
      {TOPICS.why.render()}
    </PageShell>
  );
}
