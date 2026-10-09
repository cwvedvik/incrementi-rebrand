"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import PageShell from "@/components/sections/PageShell";
import { IconLinkedIn } from "@/components/icons";
import { getPerson } from "@/lib/people";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

const ease = [0.16, 1, 0.3, 1] as const;

const copy = {
  back: { no: "Tilbake til teamet", en: "Back to the team" },
  email: { no: "E-post", en: "Email" },
  phone: { no: "Telefon", en: "Phone" },
  linkedin: { no: "LinkedIn", en: "LinkedIn" },
};

export default function PersonPageClient({ slug }: { slug: string }) {
  const { locale, href } = useLocale();
  const reduce = useReducedMotion();
  const person = getPerson(slug);
  if (!person) notFound();

  const photo = person.fullPhoto ?? person.photo;
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  return (
    <PageShell wide>
      <p className="page-back person-back">
        <Link href={`${href("/")}?s=om-oss`}>← {t(copy.back, locale)}</Link>
      </p>

      <article className="person-profile">
        <motion.div className="person-profile-photo" {...fade(0)}>
          {photo ? (
            <Image
              src={photo}
              alt={person.name}
              width={1066}
              height={1600}
              sizes="(max-width: 860px) 100vw, 44vw"
              priority
            />
          ) : (
            <span className="mkt-initials" aria-hidden="true">
              {person.initials ?? person.name.slice(0, 2)}
            </span>
          )}
        </motion.div>

        <div className="person-profile-body">
          <motion.p className="mkt-eyebrow" {...fade(0.05)}>
            {t(person.role, locale)}
          </motion.p>
          <motion.h1 className="display mkt-sub-title" {...fade(0.08)}>
            {person.name}
          </motion.h1>
          <motion.p className="person-profile-bio" {...fade(0.12)}>
            {t(person.bio, locale)}
          </motion.p>

          <motion.dl className="person-profile-contact" {...fade(0.16)}>
            {person.email ? (
              <div>
                <dt>{t(copy.email, locale)}</dt>
                <dd>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </dd>
              </div>
            ) : null}
            {person.phone ? (
              <div>
                <dt>{t(copy.phone, locale)}</dt>
                <dd>
                  <a href={`tel:${person.phone.replace(/\s+/g, "")}`}>
                    {person.phone}
                  </a>
                </dd>
              </div>
            ) : null}
            {person.linkedin ? (
              <div>
                <dt>{t(copy.linkedin, locale)}</dt>
                <dd>
                  <a
                    className="person-profile-linkedin"
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconLinkedIn />
                    <span>{t(copy.linkedin, locale)}</span>
                  </a>
                </dd>
              </div>
            ) : null}
          </motion.dl>
        </div>
      </article>
    </PageShell>
  );
}
