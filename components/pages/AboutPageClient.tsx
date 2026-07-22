"use client";

import PageShell from "@/components/sections/PageShell";
import BuildingBlocks from "@/components/sections/BuildingBlocks";
import PeopleGrid from "@/components/sections/PeopleGrid";
import { TOPICS } from "@/lib/topics";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function AboutPageClient() {
  const { locale } = useLocale();

  return (
    <PageShell experienceTopic="why" wide>
      <div className="eyebrow-sm">{t(ui.pages.aboutEyebrow, locale)}</div>
      <h1 className="page-title">{t(ui.pages.aboutTitle, locale)}</h1>
      <p className="page-intro about-intro">{t(ui.pages.aboutIntro, locale)}</p>

      <section className="about-section" aria-labelledby="about-people">
        <div className="eyebrow-sm" id="about-people">
          {t(ui.pages.peopleEyebrow, locale)}
        </div>
        <h2 className="about-section-title">
          {t(ui.pages.peopleTitle, locale)}
        </h2>
        <div className="about-people-lead">
          {locale === "no" ? (
            <>
              Senior partnere leder hvert engasjement.{" "}
              <em>99X’ 650+ spesialister skalerer det.</em> Ingen
              bait-and-switch til juniorer.
            </>
          ) : (
            <>
              Senior partners lead every engagement.{" "}
              <em>99X&apos;s 650+ specialists scale it.</em> No
              bait-and-switch to juniors.
            </>
          )}
        </div>
        <p className="ai-body about-people-body">
          {locale === "no"
            ? "Folkene under eier engasjementet personlig — fra første Retnings-uke til dagen ansatte kjører egne agenter. Bak dem står hele 99X Group når en fase krever elastisk kapasitet."
            : "The people below own the engagement personally — from the first Direction week to the day your employees run their own agents. Behind them stands the full weight of 99X Group when a phase demands elastic capacity."}
        </p>
        <PeopleGrid />
      </section>

      <section className="about-section" aria-labelledby="about-why">
        <div className="eyebrow-sm" id="about-why">
          {locale === "no" ? "Hvorfor oss" : "Why us"}
        </div>
        {TOPICS.why.render()}
      </section>

      <section className="about-section" aria-labelledby="about-journey">
        <div className="eyebrow-sm" id="about-journey">
          {t(ui.pages.journeyEyebrow, locale)}
        </div>
        <h2 className="about-section-title">
          {t(ui.pages.journeyTitle, locale)}
        </h2>
        <p className="page-intro about-journey-intro">
          {t(ui.pages.journeyIntro, locale)}
        </p>
        <BuildingBlocks variant="page" />
      </section>
    </PageShell>
  );
}
