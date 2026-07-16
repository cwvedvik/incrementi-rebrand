"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale";
import { parsePathname } from "@/lib/i18n/config";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

import { PAGE_NAV } from "@/lib/nav";

export { PAGE_NAV };

export default function SiteNav({
  onLogoClick,
  experienceMode = false,
}: {
  /** Homepage: reset experience instead of navigating */
  onLogoClick?: () => void;
  experienceMode?: boolean;
}) {
  const { locale, setLocale, href } = useLocale();
  const pathname = usePathname() || "/";
  const { path } = parsePathname(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const logoInner = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/incrementi-logo.png" alt="Incrementi" />
      <small>{t(ui.companyLine, locale)}</small>
    </>
  );

  const langToggle = (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={locale === "no" ? "active" : ""}
        onClick={() => setLocale("no")}
        aria-pressed={locale === "no"}
      >
        NO
      </button>
      <span className="lang-sep" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={locale === "en" ? "active" : ""}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );

  const navLinks = (
    <>
      {PAGE_NAV.map((item) => {
        const active =
          path === item.href || path.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={href(item.href)}
            className={active ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {t(ui.nav[item.key], locale)}
          </Link>
        );
      })}
      <Link
        className="start"
        href={href("/start")}
        onClick={() => setOpen(false)}
      >
        {t(ui.nav.start, locale)}
      </Link>
    </>
  );

  return (
    <header className={`topbar${experienceMode ? " experience-topbar" : " page-topbar"}`}>
      {onLogoClick ? (
        <button
          className="logo"
          onClick={onLogoClick}
          aria-label="Incrementi — back to the beginning"
          type="button"
        >
          {logoInner}
        </button>
      ) : (
        <Link href={href("/")} className="logo">
          {logoInner}
        </Link>
      )}

      <nav className="nav desktop-nav" aria-label="Primary">
        {navLinks}
        {langToggle}
      </nav>

      <div className="mobile-nav-controls">
        {langToggle}
        <Link className="start mobile-start" href={href("/start")}>
          {t(ui.nav.start, locale)}
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t(ui.close, locale) : t(ui.menu, locale)}
        </button>
      </div>

      {open ? (
        <div className="mobile-drawer" id="mobile-drawer">
          <nav className="mobile-drawer-nav" aria-label="Mobile">
            {navLinks}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
