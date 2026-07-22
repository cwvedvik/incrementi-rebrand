"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LogoStrip from "./LogoStrip";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.2 + i * 0.16,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Hero() {
  const { locale, href } = useLocale();

  return (
    <section className="hero" aria-label="Introduction">
      <motion.div
        className="eyebrow"
        variants={rise}
        initial="hidden"
        animate="show"
        custom={0}
      >
        {t(ui.hero.eyebrow, locale)}
      </motion.div>
      <motion.h1 variants={rise} initial="hidden" animate="show" custom={1}>
        {t(ui.hero.titleLine1, locale)}
        <br />
        {t(ui.hero.titleTo, locale)} <em>{t(ui.hero.titleEm, locale)}</em>
      </motion.h1>
      <motion.p className="sub" variants={rise} initial="hidden" animate="show" custom={2}>
        {t(ui.hero.subBefore, locale)}{" "}
        <b>{t(ui.hero.subBold, locale)}</b> {t(ui.hero.subAfter, locale)}
      </motion.p>
      <motion.div variants={rise} initial="hidden" animate="show" custom={3}>
        <Link href={href("/results/nrc-group")} className="hero-stat case-teaser">
          <span className="n">&lt;½</span>
          <span className="sep" aria-hidden="true" />
          <span>
            {t(ui.hero.caseTeaser, locale)}
          </span>
          <span className="read-case">{t(ui.hero.readCase, locale)}</span>
        </Link>
      </motion.div>
      <motion.div variants={rise} initial="hidden" animate="show" custom={4}>
        <LogoStrip />
      </motion.div>
    </section>
  );
}
