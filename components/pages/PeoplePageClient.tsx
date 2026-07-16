"use client";

import PageShell from "@/components/sections/PageShell";
import { TOPICS } from "@/lib/topics";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function PeoplePageClient() {
  const { locale } = useLocale();
  return (
    <PageShell experienceTopic="people" wide>
      <div className="eyebrow-sm">{t(ui.pages.peopleEyebrow, locale)}</div>
      <h1 className="page-title">{t(ui.pages.peopleTitle, locale)}</h1>
      {TOPICS.people.render()}
    </PageShell>
  );
}
