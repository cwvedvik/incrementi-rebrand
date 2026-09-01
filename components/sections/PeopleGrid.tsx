"use client";

import Image from "next/image";
import { PEOPLE } from "@/lib/people";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

export default function PeopleGrid() {
  const { locale } = useLocale();

  return (
    <div className="people-grid">
      {PEOPLE.map((p) => (
        <div className="person" key={p.name}>
          <div className="avatar" aria-hidden="true">
            {p.photo ? (
              <Image src={p.photo} alt="" width={120} height={120} />
            ) : (
              p.initials ??
              p.name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")
            )}
          </div>
          <h4>{p.name}</h4>
          <div className="role">{t(p.role, locale)}</div>
        </div>
      ))}
    </div>
  );
}
