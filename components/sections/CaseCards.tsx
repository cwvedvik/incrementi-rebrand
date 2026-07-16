"use client";

import Link from "next/link";
import { CASES, localizeCase } from "@/lib/cases";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";
import { ConceptIcon } from "@/components/icons";

export default function CaseCards() {
  const { locale, href } = useLocale();

  return (
    <div className="case-cards">
      {CASES.map((raw) => {
        const c = localizeCase(raw, locale);
        return (
          <Link
            href={href(`/results/${c.slug}`)}
            className="case-card"
            key={c.slug}
          >
            {raw.industryIcon ? (
              <ConceptIcon
                name={raw.industryIcon}
                className="concept-icon sm case-mark"
              />
            ) : null}
            <div className="metric">
              <span className="n">{c.headline.value}</span>
              <span className="l">{c.headline.label}</span>
            </div>
            <div className="who">
              <span className="client">{c.client}</span>
              <span className="sector">{c.sector}</span>
            </div>
            <span className="open">{t(ui.hero.readCase, locale)}</span>
          </Link>
        );
      })}
    </div>
  );
}
