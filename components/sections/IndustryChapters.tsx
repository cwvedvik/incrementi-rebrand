"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/content/industries";
import { ConceptIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

export default function IndustryChapters() {
  const { locale, href } = useLocale();

  return (
    <div className="industry-chapters">
      {INDUSTRIES.map((ind, i) => (
        <motion.section
          key={ind.id}
          className="industry-chapter"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.08 * i,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ConceptIcon name={ind.icon} className="concept-icon xl" />
          <div className="industry-body">
            <div className="k">{t(ind.k, locale)}</div>
            <h2>{t(ind.h, locale)}</h2>
            <p>{t(ind.p, locale)}</p>
            {ind.clients.length > 0 ? (
              <p className="industry-clients">{ind.clients.join(" · ")}</p>
            ) : null}
            {ind.caseSlugs.length > 0 ? (
              <div className="industry-cases">
                {ind.caseSlugs.map((slug) => {
                  const label =
                    slug === "nrc-group"
                      ? "NRC Group"
                      : slug === "sebastian"
                        ? "Sebastian"
                        : slug === "4subsea-optimar"
                          ? "4Subsea · Optimar"
                          : slug;
                  return (
                    <Link key={slug} href={href(`/results/${slug}`)}>
                      {label} →
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
