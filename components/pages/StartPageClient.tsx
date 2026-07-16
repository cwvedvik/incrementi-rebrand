"use client";

import PageShell from "@/components/sections/PageShell";
import ContactForm from "@/components/chat/ContactForm";
import { ConceptIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function StartPageClient() {
  const { locale } = useLocale();
  const outcomes = ui.pages.startOutcomes[locale];

  return (
    <PageShell experienceTopic="start">
      <div className="start-split">
        <div className="start-copy">
          <div className="eyebrow-sm">{t(ui.pages.startEyebrow, locale)}</div>
          <h1 className="page-title">{t(ui.pages.startTitle, locale)}</h1>
          <ConceptIcon name="strategy" className="concept-icon xl start-mark" />
          <h2 className="start-outcomes-title">
            {t(ui.pages.startOutcomesTitle, locale)}
          </h2>
          <ul className="ai-points">
            {outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="page-intro" style={{ marginTop: 28 }}>
            {locale === "no"
              ? "Én uke med Retning — lav risiko, høy klarhet. En partner svarer innen én arbeidsdag."
              : "One week of Direction — low risk, high clarity. A partner replies within one working day."}
          </p>
        </div>
        <div className="start-form">
          <ContactForm />
        </div>
      </div>
    </PageShell>
  );
}
