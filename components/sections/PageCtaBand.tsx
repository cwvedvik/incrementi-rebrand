"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function PageCtaBand() {
  const { locale, href } = useLocale();

  return (
    <section className="mkt-sub-cta">
      <h2 className="display">{t(ui.ctaBand.line, locale)}</h2>
      <Link href={href("/#kontakt")} className="mkt-btn mkt-btn-primary">
        {t(ui.ctaBand.button, locale)}
      </Link>
    </section>
  );
}
