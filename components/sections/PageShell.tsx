"use client";

import Link from "next/link";
import SiteNav from "./SiteNav";
import PageCtaBand from "./PageCtaBand";
import StickySessionBar from "./StickySessionBar";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

/**
 * Shell for static, crawlable pages behind the homepage experience.
 */
export default function PageShell({
  children,
  experienceTopic,
  wide = false,
}: {
  children: React.ReactNode;
  experienceTopic?: string;
  wide?: boolean;
}) {
  const { locale, href } = useLocale();
  const expHref = experienceTopic
    ? href(`/?t=${experienceTopic}`)
    : href("/");

  return (
    <div className="page-shell">
      <div className="glow" aria-hidden="true" />
      <SiteNav />
      <main className={`page-main${wide ? " page-main-wide" : ""}`}>
        {children}
        <PageCtaBand />
        <p className="page-exp-link">
          <Link href={expHref}>{t(ui.openExperience, locale)} →</Link>
        </p>
      </main>
      <StickySessionBar />
    </div>
  );
}
