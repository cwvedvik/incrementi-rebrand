"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import HubSpotForm from "@/components/sections/HubSpotForm";
import HeroVideo from "@/components/landing/HeroVideo";
import { IconArrowUpRight } from "@/components/icons";
import { CertSeals, NinetyNineXBadge } from "@/components/trust/TrustBadges";
import { aiControl } from "@/lib/content/aiControl";
import { CLIENTS } from "@/lib/clients";
import { home } from "@/lib/content/home";
import { PEOPLE } from "@/lib/people";

const ease = [0.16, 1, 0.3, 1] as const;
const contactPerson = PEOPLE.find((p) => p.slug === "espen-slyngstad");

function CtaButton({ label = aiControl.cta.primary }: { label?: string }) {
  return (
    <a className="mkt-btn mkt-btn-primary" href="#kontakt">
      {label}
      <span className="mkt-btn-icon" aria-hidden="true">
        <IconArrowUpRight width={14} height={14} />
      </span>
    </a>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Lagdiagrammet: AI-forbrukerne over, kildene under, kontrollaget imellom. */
function ControlStack() {
  const { stack } = aiControl.layer;
  return (
    <div className="lp-stack">
      <div className="lp-stack-row">
        <p className="lp-stack-label">{stack.topLabel}</p>
        <ul>
          {stack.top.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="lp-stack-wires" aria-hidden="true">
        {stack.core.map((c) => (
          <span key={c.k} />
        ))}
      </div>

      <div className="lp-stack-core mkt-on-deep">
        <p className="lp-stack-core-name">{stack.coreName}</p>
        <ul>
          {stack.core.map((c) => (
            <li key={c.k}>
              <strong>{c.k}</strong>
              <span>{c.v}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lp-stack-wires lp-stack-wires-up" aria-hidden="true">
        {stack.core.map((c) => (
          <span key={c.k} />
        ))}
      </div>

      <div className="lp-stack-row lp-stack-base">
        <p className="lp-stack-label">{stack.baseLabel}</p>
        <ul>
          {stack.base.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SelfCheck() {
  const { check } = aiControl;
  const [checked, setChecked] = useState<boolean[]>(() =>
    check.items.map(() => false),
  );
  const [touched, setTouched] = useState(false);
  const count = checked.filter(Boolean).length;
  const total = check.items.length;

  let result: string = check.resultIdle;
  if (touched) {
    if (count === 0) result = check.resultNone;
    else if (count === total) result = check.resultAll;
    else result = check.resultSome(count, total);
  }

  return (
    <div className="lp-check">
      <ul className="lp-check-list">
        {check.items.map((item, i) => (
          <li key={item}>
            <label className={checked[i] ? "is-checked" : undefined}>
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => {
                  setTouched(true);
                  setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)));
                }}
              />
              <span className="lp-check-box" aria-hidden="true" />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="lp-check-result">
        <div className="lp-check-meter" aria-hidden="true">
          {check.items.map((item, i) => (
            <span key={item} className={i < count ? "on" : undefined} />
          ))}
        </div>
        <p aria-live="polite">{result}</p>
        <CtaButton />
      </div>
    </div>
  );
}

export default function AiControlLanding() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const { hero, meeting, shift, layer, check, faq, contact } = aiControl;

  useEffect(() => {
    document.body.dataset.mode = "marketing";
    return () => {
      delete document.body.dataset.mode;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobillinja vises først når hero-knappen er ute av syne, og trekker seg
  // unna igjen når skjemaet er i bildet, så den aldri dekker selve skjemaet.
  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const contactEl = document.getElementById("kontakt");
    if (!heroCta || !contactEl) return;
    let heroVisible = true;
    let contactVisible = false;
    const update = () => setShowSticky(!heroVisible && !contactVisible);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === heroCta) heroVisible = e.isIntersecting;
        if (e.target === contactEl) contactVisible = e.isIntersecting;
      }
      update();
    });
    io.observe(heroCta);
    io.observe(contactEl);
    return () => io.disconnect();
  }, []);

  return (
    <div className="mkt lp">
      <div className="grain grain-static" aria-hidden="true" />

      <header
        className={`topbar mkt-topbar lp-topbar${scrolled ? " mkt-topbar-scrolled" : ""}`}
      >
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/incrementi-logo-ink.png" alt="Incrementi" />
        </Link>
        <a className="lp-topbar-cta" href="#kontakt">
          <span className="lp-topbar-cta-long">{aiControl.cta.primary}</span>
          <span className="lp-topbar-cta-short">{aiControl.cta.short}</span>
        </a>
      </header>

      <main>
        {/* ——— HERO ——— */}
        <section className="lp-hero" id="top">
          <div className="lp-wrap lp-hero-grid">
            <div className="lp-hero-copy">
              <motion.p
                className="mkt-eyebrow"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                {hero.eyebrow}
              </motion.p>
              <motion.h1
                className="mkt-hero-title display"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.04, ease }}
              >
                {hero.titleMain}{" "}
                <span className="mkt-hero-title-accent">{hero.titleAccent}</span>
              </motion.h1>
              <motion.p
                className="mkt-hero-lead"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease }}
              >
                {hero.lead}
              </motion.p>
              <motion.div
                className="mkt-hero-actions"
                id="hero-cta"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease }}
              >
                <CtaButton />
                <a className="mkt-btn mkt-btn-ghost" href="#kontrollaget">
                  {hero.secondary}
                </a>
              </motion.div>
              <motion.ul
                className="lp-reassure"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease }}
              >
                {hero.reassurance.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              className="lp-hero-media"
              initial={reduce ? false : { opacity: 0, scale: 1.03, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
            >
              <HeroVideo />
            </motion.div>
          </div>
        </section>

        {/* ——— KUNDELOGOER ——— */}
        <section className="mkt-logos mkt-on-deep" aria-label={home.logos.eyebrow.no}>
          <div className="mkt-wrap">
            <p className="mkt-logos-eyebrow">{home.logos.eyebrow.no}</p>
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

        {/* ——— LEDERMØTET ——— */}
        <section className="mkt-section" id="ledermotet">
          <div className="lp-wrap">
            <header className="mkt-section-head">
              <p className="mkt-eyebrow">{meeting.eyebrow}</p>
              <h2 className="display">{meeting.title}</h2>
            </header>
            <div className="lp-roles">
              {meeting.roles.map((r, i) => (
                <Reveal key={r.role} className="lp-role" delay={i * 0.06}>
                  <p className="lp-role-body">
                    <strong>{r.role}</strong> {r.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="lp-bridge">{meeting.bridge}</p>
          </div>
        </section>

        <section className="lp-question mkt-on-deep" aria-label={meeting.question}>
          <div className="lp-wrap">
            <Reveal>
              <p className="lp-question-text display">{meeting.question}</p>
              <a className="lp-question-link" href="#kontakt">
                {meeting.questionCta}
                <IconArrowUpRight width={14} height={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ——— SKIFTET ——— */}
        <section className="mkt-section" id="utfordringen">
          <div className="lp-wrap">
            <header className="mkt-section-head lp-shift-head">
              <p className="mkt-eyebrow">{shift.eyebrow}</p>
              <h2 className="display">{shift.title}</h2>
              <p className="mkt-lead">{shift.lead}</p>
            </header>
            <div className="lp-points">
              {shift.points.map((p, i) => (
                <Reveal key={p.title} className="lp-point" delay={i * 0.06}>
                  <h3 className="display">{p.title}</h3>
                  <p>{p.body}</p>
                </Reveal>
              ))}
            </div>
            <p className="lp-conclusion display">{shift.conclusion}</p>
          </div>
        </section>

        {/* ——— KONTROLLAGET ——— */}
        <section className="mkt-section mkt-section-steel" id="kontrollaget">
          <div className="lp-wrap lp-layer-grid">
            <div className="lp-layer-copy">
              <header className="mkt-section-head">
                <p className="mkt-eyebrow">{layer.eyebrow}</p>
                <h2 className="display">{layer.title}</h2>
                <p className="mkt-lead">{layer.lead}</p>
              </header>
              <ul className="lp-benefits">
                {layer.benefits.map((b) => (
                  <li key={b.title}>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </li>
                ))}
              </ul>
              <CtaButton />
            </div>
            <Reveal className="lp-layer-visual">
              <ControlStack />
            </Reveal>
          </div>
        </section>

        {/* ——— SELVSJEKK ——— */}
        <section className="mkt-section" id="sjekk">
          <div className="lp-wrap lp-check-grid">
            <header className="mkt-section-head">
              <p className="mkt-eyebrow">{check.eyebrow}</p>
              <h2 className="display">{check.title}</h2>
              <p className="mkt-lead">{check.lead}</p>
            </header>
            <SelfCheck />
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section className="mkt-section mkt-section-quiet" id="faq">
          <div className="lp-wrap mkt-faq">
            <header className="mkt-section-head">
              <h2 className="display">{faq.title}</h2>
            </header>
            <div className="mkt-faq-list">
              {faq.items.map((item) => (
                <details key={item.q} className="mkt-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ——— KONTAKT ——— */}
        <section className="mkt-section mkt-cta" id="kontakt">
          <div className="lp-wrap lp-contact-grid">
            <div className="lp-contact-intro">
              <p className="mkt-eyebrow">{contact.eyebrow}</p>
              <h2 className="display">{contact.title}</h2>
              <p className="mkt-lead lp-contact-lead">{contact.lead}</p>
              <p className="lp-contact-body">{contact.body}</p>
            </div>
            <div className="contact-card mkt-hubspot-card lp-contact-form">
              <div className="k">{contact.formKicker}</div>
              <h4>{contact.formHeading}</h4>
              <HubSpotForm />
            </div>
            <div className="lp-contact-aside">
              {contactPerson ? (
                <div className="lp-contact-person">
                  {contactPerson.photo ? (
                    <Image
                      src={contactPerson.photo}
                      alt={contactPerson.name}
                      width={96}
                      height={96}
                      className="lp-contact-photo"
                    />
                  ) : null}
                  <div className="mkt-contact-person">
                    <span>{contact.personIntro}</span>
                    <strong>{contactPerson.name}</strong>
                    <span>{contactPerson.role.no}</span>
                    {contactPerson.email ? (
                      <a href={`mailto:${contactPerson.email}`}>{contactPerson.email}</a>
                    ) : null}
                    {contactPerson.phone ? (
                      <a href={`tel:${contactPerson.phone.replace(/\s/g, "")}`}>
                        {contactPerson.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
              <div className="lp-contact-trust">
                <NinetyNineXBadge size="sm" />
                <CertSeals size="sm" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mkt-footer mkt-on-deep">
        <div className="lp-wrap lp-footer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/incrementi-logo.png" alt="Incrementi" className="mkt-footer-logo" />
          <div className="mkt-footer-legal">
            <strong>{home.footer.legalName.no}</strong>
            <span>{home.footer.orgNr.no}</span>
            <a href={home.footer.mapsHref} target="_blank" rel="noopener noreferrer">
              {home.footer.address.no}
            </a>
            <a href={home.footer.telHref}>
              {home.footer.telLabel.no}: {home.footer.telDisplay.no}
            </a>
          </div>
          <nav className="mkt-footer-nav" aria-label="Footer">
            <Link href="/">incrementi.no</Link>
            <a href="#kontakt">{aiControl.cta.primary}</a>
          </nav>
        </div>
      </footer>

      <div className={`lp-sticky${showSticky ? " is-visible" : ""}`} aria-hidden={!showSticky}>
        <span>{aiControl.sticky}</span>
        <a className="mkt-btn mkt-btn-primary" href="#kontakt" tabIndex={showSticky ? 0 : -1}>
          {aiControl.cta.short}
        </a>
      </div>
    </div>
  );
}
