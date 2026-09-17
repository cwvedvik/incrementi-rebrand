"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import ContactForm from "@/components/chat/ContactForm";
import SiteNav from "@/components/sections/SiteNav";
import ValueGlyph from "@/components/home/ValueGlyph";
import { IconArrowUpRight } from "@/components/icons";
import { CLIENTS } from "@/lib/clients";
import { home } from "@/lib/content/home";
import { PEOPLE } from "@/lib/people";
import { useLocale } from "@/lib/i18n/locale";
import { t, tList } from "@/lib/i18n/types";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function MarketingHome() {
  const { locale } = useLocale();
  const reduce = useReducedMotion();
  const searchParams = useSearchParams();
  const [journeyStep, setJourneyStep] = useState(0);

  useEffect(() => {
    document.body.dataset.mode = "marketing";
    return () => {
      delete document.body.dataset.mode;
    };
  }, []);

  useEffect(() => {
    const section = searchParams.get("s");
    if (!section) return;
    const el = document.getElementById(section);
    if (!el) return;
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [searchParams]);

  const step = home.journey.steps[journeyStep];

  return (
    <div className="mkt">
      {/* Papirfølelsen på Off White. Statisk variant: den animerte i chat-visningen
          ligger på fire ganger viewportarealet og flytter seg i evig loop. */}
      <div className="grain grain-static" aria-hidden="true" />
      <SiteNav marketing />

      {/* ——— HERO ——— */}
      <header className="mkt-hero" id="top">
        <div className="mkt-wrap mkt-hero-grid">
          <div className="mkt-hero-copy">
            <motion.h1
              className="mkt-hero-title display"
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(home.hero.titleMain, locale)}{" "}
              <span className="mkt-hero-title-accent">
                {t(home.hero.titleAccent, locale)}
              </span>
            </motion.h1>

            <motion.p
              className="mkt-hero-lead"
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(home.hero.lead, locale)}
            </motion.p>

            <motion.div
              className="mkt-hero-actions"
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <a className="mkt-btn mkt-btn-primary" href="#kontakt">
                {t(home.hero.cta, locale)}
                <span className="mkt-btn-icon" aria-hidden="true">
                  <IconArrowUpRight width={14} height={14} />
                </span>
              </a>
              <a className="mkt-btn mkt-btn-ghost" href="#slik-jobber-vi">
                {t(home.hero.secondary, locale)}
                <span className="mkt-btn-icon" aria-hidden="true">
                  <IconArrowUpRight width={14} height={14} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Fotoet er et objekt på flaten, ikke flaten selv: ytre skall med
              hårstrek og polstring, indre kjerne som beskjærer. Teksten står
              på ren Off White, så det trengs ikke noe slør noe sted. */}
          <motion.div
            className="mkt-hero-plate-shell"
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0, scale: 1.02, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="mkt-hero-plate-core">
              <Image
                src="/media/environment/2026_Incrementi_fotoCRoka_110c.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 660px"
                className="mkt-hero-img"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ——— POST-HERO (stats) ——— */}
      <section className="mkt-post-hero" aria-label={t(home.hero.titleMain, locale)}>
        <div className="mkt-wrap mkt-post-hero-inner">
          <ul className="mkt-post-hero-stats">
            {home.hero.stats.map((s) => (
              <li key={typeof s.value === "string" ? s.value : s.value.no}>
                <strong>
                  {typeof s.value === "string" ? s.value : t(s.value, locale)}
                </strong>
                <span>{t(s.label, locale)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— KUNDELOGOER ——— */}
      <section className="mkt-logos mkt-on-deep" aria-label={t(home.logos.eyebrow, locale)}>
        <div className="mkt-wrap">
          <p className="mkt-logos-eyebrow">{t(home.logos.eyebrow, locale)}</p>
          <div className="mkt-logo-row">
            {CLIENTS.map((c) => (
              <span className="mkt-logo-mark" key={c.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logoSrc} alt={c.name} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ——— JOURNEY ——— */}
      <section className="mkt-section" id="slik-jobber-vi">
        <div className="mkt-wrap">
          <header className="mkt-section-head">
            <h2 className="display">{t(home.journey.title, locale)}</h2>
            <p className="mkt-lead">{t(home.journey.lead, locale)}</p>
          </header>

          <div
            className="mkt-journey-tabs"
            role="tablist"
            aria-label={t(home.journey.eyebrow, locale)}
          >
            {home.journey.steps.map((s, i) => (
              <button
                key={s.n}
                type="button"
                role="tab"
                aria-selected={i === journeyStep}
                className={`mkt-journey-tab${i === journeyStep ? " active" : ""}`}
                onClick={() => setJourneyStep(i)}
              >
                <span className="mkt-journey-n">{s.n}</span>
                <strong>{t(s.title, locale)}</strong>
                <span className="mkt-journey-short">{t(s.short, locale)}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={journeyStep}
            className="mkt-journey-detail"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mkt-journey-photo">
              <Image
                src={step.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className="mkt-cover"
              />
            </div>
            <div className="mkt-journey-copy">
              <h3 className="display">{t(step.detailTitle, locale)}</h3>
              <p>{t(step.detailBody, locale)}</p>
              <ul className="mkt-checks">
                {tList(step.checks, locale).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— DELIVER ——— */}
      <section className="mkt-section mkt-section-steel" id="hva-vi-leverer">
        <div className="mkt-wrap">
          <header className="mkt-section-head">
            <h2 className="display">{t(home.deliver.title, locale)}</h2>
            <p className="mkt-lead">{t(home.deliver.lead, locale)}</p>
          </header>
          <div className="mkt-deliver-groups">
            {home.deliver.groups.map((group) => (
              <section key={group.label.no} className="mkt-deliver-group">
                <h3 className="display mkt-deliver-label">
                  {t(group.label, locale)}
                </h3>
                <div className="mkt-deliver-items">
                  {group.items.map((item) => (
                    <article key={item.title.no}>
                      <h4 className="display">{t(item.title, locale)}</h4>
                      <p>{t(item.body, locale)}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* ——— WHY (editorial) ——— */}
      <section className="mkt-section" id="hvorfor-oss">
        <div className="mkt-wrap">
          <header className="mkt-section-head mkt-why-head">
            <h2 className="display">{t(home.why.title, locale)}</h2>
            <p className="mkt-lead">{t(home.why.lead, locale)}</p>
          </header>

          <div className="mkt-why-split">
            <blockquote className="mkt-why-problem">
              <p className="mkt-why-problem-label">
                {t(home.why.marketEyebrow, locale)}
              </p>
              <p className="mkt-why-problem-body">
                {t(home.why.marketBody, locale)}
              </p>
            </blockquote>

            <div className="mkt-why-answers">
              {home.why.answers.map((a) => (
                <article key={a.title.no}>
                  <h3 className="display">{t(a.title, locale)}</h3>
                  <p>{t(a.body, locale)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mkt-why-band">
          <div className="mkt-wrap">
            <h3 className="display mkt-why-band-title">
              {t(home.why.valueLead, locale)}
            </h3>
            <div className="mkt-why-band-grid">
              {home.why.values.map((v) => (
                <article key={v.metric.no} className="mkt-why-value">
                  <ValueGlyph kind={v.glyph} />
                  <p className="mkt-why-metric display">{t(v.metric, locale)}</p>
                  <h4 className="display">{t(v.title, locale)}</h4>
                  <p className="mkt-why-value-body">{t(v.body, locale)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mkt-wrap">
          <div className="mkt-sovereignty">
            <h3 className="display">{t(home.why.sovereigntyTitle, locale)}</h3>
            <p>{t(home.why.sovereigntyBody, locale)}</p>
            <p className="mkt-partner-line">
              {home.why.partners.map((p) => p.name).join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* ——— INDUSTRIES ——— */}
      <section className="mkt-section mkt-section-photo" id="bransjer">
        <div className="mkt-section-photo-bg" aria-hidden="true">
          <Image
            src="/media/environment/2026_Incrementi_fotoCRoka_007c.jpg"
            alt=""
            fill
            sizes="100vw"
            className="mkt-cover"
          />
          <div className="mkt-section-photo-shade" />
        </div>
        <div className="mkt-wrap mkt-section-photo-content">
          <header className="mkt-section-head mkt-industry-head">
            <h2 className="display">{t(home.industries.title, locale)}</h2>
            <p className="mkt-lead">{t(home.industries.lead, locale)}</p>
          </header>
          <div className="mkt-industry-row">
            {home.industries.items.map((ind) => (
              <article key={ind.n} className="mkt-industry">
                <h3 className="display">{t(ind.title, locale)}</h3>
                <p>{t(ind.body, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— ABOUT ——— */}
      <section className="mkt-section mkt-section-steel" id="om-oss">
        <div className="mkt-wrap">
          <header className="mkt-section-head">
            <h2 className="display">{t(home.about.title, locale)}</h2>
            <p className="mkt-lead">{t(home.about.lead, locale)}</p>
          </header>

          <div className="mkt-pillars">
            {home.about.pillars.map((p) => (
              <article key={p.title.no} className="mkt-pillar">
                <strong>{t(p.title, locale)}</strong>
                <span>{t(p.body, locale)}</span>
              </article>
            ))}
          </div>

          <div className="mkt-team">
            {PEOPLE.map((person) => (
              <article key={person.name} className="mkt-person">
                <div className="mkt-portrait">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={480}
                      height={480}
                      className="mkt-cover"
                      style={
                        person.photoPosition
                          ? { objectPosition: person.photoPosition }
                          : undefined
                      }
                    />
                  ) : (
                    <span className="mkt-initials" aria-hidden="true">
                      {person.initials ?? person.name.slice(0, 2)}
                    </span>
                  )}
                </div>
                <div className="mkt-person-info">
                  <h3>{person.name}</h3>
                  <p>{t(person.role, locale)}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mkt-group">
            <h3 className="display">{t(home.about.groupTitle, locale)}</h3>
            <p>{t(home.about.groupBody, locale)}</p>
            <div className="mkt-badges">
              {home.about.badges.map((b) => (
                <div key={b.value} className="mkt-badge">
                  <strong>{b.value}</strong>
                  <span>{t(b.label, locale)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="mkt-section mkt-section-quiet" id="faq">
        <div className="mkt-wrap mkt-faq">
          <header className="mkt-section-head">
            <h2 className="display">{t(home.faq.title, locale)}</h2>
          </header>
          <div className="mkt-faq-list">
            {home.faq.items.map((item) => (
              <details key={item.q.no} className="mkt-faq-item">
                <summary>{t(item.q, locale)}</summary>
                <p>{t(item.a, locale)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CONTACT ——— */}
      <section className="mkt-section mkt-cta" id="kontakt">
        <div className="mkt-wrap mkt-cta-grid">
          <div>
            <p className="mkt-eyebrow">{t(home.contact.eyebrow, locale)}</p>
            <h2 className="display">{t(home.contact.title, locale)}</h2>
            <p className="mkt-lead">{t(home.contact.lead, locale)}</p>
            <div className="mkt-contact-person">
              <strong>{home.contact.person.name}</strong>
              <span>{home.contact.person.role}</span>
              <a href={`mailto:${home.contact.person.email}`}>
                {home.contact.person.email}
              </a>
              <a href={`tel:${home.contact.person.phone.replace(/\s/g, "")}`}>
                {home.contact.person.phone}
              </a>
            </div>
          </div>
          <ContactForm heading={t(home.contact.formHeading, locale)} />
        </div>
      </section>

      <footer className="mkt-footer mkt-on-deep">
        <div className="mkt-wrap mkt-footer-grid">
          <div className="mkt-footer-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/incrementi-logo.png"
              alt="Incrementi"
              className="mkt-footer-logo"
            />
            <p className="mkt-footer-line">{t(home.footer.line, locale)}</p>
            <div className="mkt-footer-legal">
              <strong>{t(home.footer.legalName, locale)}</strong>
              <span>{t(home.footer.orgNr, locale)}</span>
              <a href={home.footer.telHref}>
                {t(home.footer.telLabel, locale)}:{" "}
                {t(home.footer.telDisplay, locale)}
              </a>
            </div>
            <nav className="mkt-footer-nav" aria-label="Footer">
              <a href="#kontakt">{t(home.hero.cta, locale)}</a>
            </nav>
          </div>

          <div className="mkt-footer-col mkt-footer-place-col">
            <a
              className="mkt-place"
              href={home.footer.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mkt-place-pin" aria-hidden="true" />
              <span className="mkt-place-copy">
                <strong>{t(home.footer.addressLabel, locale)}</strong>
                <span>{t(home.footer.address, locale)}</span>
                <span className="mkt-place-cta">
                  {locale === "no" ? "Åpne i kart →" : "Open in maps →"}
                </span>
              </span>
            </a>

            <a
              className="mkt-99x-badge"
              href="https://99x.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/brand/99xlogo-color.svg" alt="99X" />
              <span>{t(home.footer.groupBadge, locale)}</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
