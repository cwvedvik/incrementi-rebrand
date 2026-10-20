"use client";

import { useEffect } from "react";
import Link from "next/link";
import SiteNav from "./SiteNav";
import PageCtaBand from "./PageCtaBand";
import CookieSettingsButton from "@/components/analytics/CookieSettingsButton";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

/**
 * Shared shell for marketing subpages (/platform, /results, cases).
 * Matches the industrial mkt- language used on the homepage.
 */
export default function PageShell({
  children,
  wide = false,
  cta = true,
}: {
  children: React.ReactNode;
  wide?: boolean;
  cta?: boolean;
}) {
  const { locale, href } = useLocale();

  useEffect(() => {
    document.body.dataset.mode = "marketing";
    return () => {
      delete document.body.dataset.mode;
    };
  }, []);

  return (
    <div className="mkt mkt-subpage">
      <SiteNav marketing subpage />
      <main className={`mkt-sub-main${wide ? " mkt-sub-main-wide" : ""}`}>
        {children}
        {cta && <PageCtaBand />}
        <div className="mkt-sub-legal">
          <Link href={href("/personvern")} className="cookie-settings-link">
            {t(ui.privacy, locale)}
          </Link>
          <CookieSettingsButton />
        </div>
      </main>
    </div>
  );
}
