"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LogoStrip from "./LogoStrip";

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.2 + i * 0.16, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <motion.div className="eyebrow" variants={rise} initial="hidden" animate="show" custom={0}>
        The AI transformation partner
      </motion.div>
      <motion.h1 variants={rise} initial="hidden" animate="show" custom={1}>
        The whole journey
        <br />
        to <em>AI-native.</em>
      </motion.h1>
      <motion.p className="sub" variants={rise} initial="hidden" animate="show" custom={2}>
        We build your engine — data foundation, operating system, AI in your
        context — <b>and you keep the keys.</b> One partner, increment by
        increment.
      </motion.p>
      <motion.div variants={rise} initial="hidden" animate="show" custom={3}>
        <Link href="/work/nrc-group" className="hero-stat case-teaser">
          <span className="n">&lt;½</span>
          <span className="sep" aria-hidden="true" />
          <span>
            NRC Group&apos;s HR integration vs. the original estimate —<br />
            advantage that compounds.
          </span>
          <span className="read-case">Read the case →</span>
        </Link>
      </motion.div>
      <motion.div variants={rise} initial="hidden" animate="show" custom={4}>
        <LogoStrip />
      </motion.div>
    </section>
  );
}
