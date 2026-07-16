"use client";

import Link from "next/link";
import { ConceptIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function PageCtaBand() {
  const { locale, href } = useLocale();

  return (
    <section className="page-cta-band">
      <div className="page-cta-inner">
        <ConceptIcon name="strategy" className="concept-icon lg cta-mark" />
        <div className="page-cta-copy">
          <div className="eyebrow-sm">{t(ui.ctaBand.eyebrow, locale)}</div>
          <p className="page-cta-line">{t(ui.ctaBand.line, locale)}</p>
          <div className="page-cta-actions">
            <Link href={href("/start")} className="btn-primary">
              {t(ui.ctaBand.button, locale)}
            </Link>
            <Link href={href("/")} className="btn-quiet">
              {t(ui.preferAsk, locale)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
