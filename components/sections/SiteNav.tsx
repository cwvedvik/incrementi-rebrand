"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale";
import { parsePathname } from "@/lib/i18n/config";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";
import { HOME_ANCHORS, PAGE_NAV, homeNav } from "@/lib/nav";

export { PAGE_NAV, HOME_ANCHORS };

export default function SiteNav({
  onLogoClick,
  experienceMode = false,
  marketing = false,
  subpage = false,
}: {
  /** Homepage: reset experience instead of navigating */
  onLogoClick?: () => void;
  experienceMode?: boolean;
  /** Long-form marketing homepage */
  marketing?: boolean;
  /** Marketing nav on a subpage: home anchors point to /#… */
  subpage?: boolean;
}) {
  const { locale, setLocale, href } = useLocale();
  const pathname = usePathname() || "/";
  const { path } = parsePathname(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = path === "/";
  const useMarketingChrome = marketing || subpage;

  useEffect(() => {
    setOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!useMarketingChrome) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [useMarketingChrome]);

  function homeHash(id: string) {
    if (onHome && !subpage) return `#${id}`;
    return href(`/#${id}`);
  }

  // Den leverte logoen er nesten hvit og forsvinner på Off White. Den mørke
  // varianten er generert fra samme alfakanal av
  // scripts/prepare-client-logos.mjs.
  const logoInner = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/incrementi-logo-ink.png" alt="Incrementi" />
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

  const marketingLinks = (
    <>
      {HOME_ANCHORS.map((item) => {
        const target = homeHash(item.id);
        const isHash = target.startsWith("#");
        if (isHash) {
          return (
            <a key={item.id} href={target} onClick={() => setOpen(false)}>
              {t(homeNav[item.key], locale)}
            </a>
          );
        }
        return (
          <Link
            key={item.id}
            href={target}
            onClick={() => setOpen(false)}
          >
            {t(homeNav[item.key], locale)}
          </Link>
        );
      })}
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
            {t(homeNav[item.key], locale)}
          </Link>
        );
      })}
      {onHome && !subpage ? (
        <a
          className="start"
          href="#kontakt"
          onClick={() => setOpen(false)}
        >
          {t(homeNav.talk, locale)}
        </a>
      ) : (
        <Link
          className="start"
          href={href("/#kontakt")}
          onClick={() => setOpen(false)}
        >
          {t(homeNav.talk, locale)}
        </Link>
      )}
    </>
  );

  const pageLinks = (
    <>
      <Link href={href("/")} onClick={() => setOpen(false)}>
        {locale === "no" ? "Hjem" : "Home"}
      </Link>
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
            {t(homeNav[item.key], locale)}
          </Link>
        );
      })}
      <Link
        className="start"
        href={href("/#kontakt")}
        onClick={() => setOpen(false)}
      >
        {t(homeNav.talk, locale)}
      </Link>
    </>
  );

  const navLinks = useMarketingChrome ? marketingLinks : pageLinks;

  return (
    <header
      className={`topbar${
        experienceMode ? " experience-topbar" : " page-topbar"
      }${useMarketingChrome ? " mkt-topbar" : ""}${
        useMarketingChrome && scrolled ? " mkt-topbar-scrolled" : ""
      }`}
    >
      {onLogoClick ? (
        <button
          className="logo"
          onClick={onLogoClick}
          aria-label="Incrementi, back to home"
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
        {onHome && !subpage ? (
          <a className="start mobile-start" href="#kontakt">
            {t(homeNav.talk, locale)}
          </a>
        ) : (
          <Link className="start mobile-start" href={href("/#kontakt")}>
            {t(homeNav.talk, locale)}
          </Link>
        )}
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
