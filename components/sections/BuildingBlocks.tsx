"use client";

import { motion } from "framer-motion";
import { PHASES } from "@/lib/content/phases";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";
import { ui } from "@/lib/i18n/ui";
import { ConceptIcon, type IconName } from "@/components/icons";

const ICON_MAP: Record<(typeof PHASES)[number]["icon"], IconName> = {
  direction: "direction",
  prototype: "prototype",
  data: "data",
  os: "os",
  context: "context",
  agents: "agents",
};

/**
 * Journey phases as building blocks.
 * `variant="page"` uses chapter spacing + large marks for content pages.
 * `variant="chat"` keeps denser chat-friendly layout.
 */
export default function BuildingBlocks({
  variant = "chat",
}: {
  variant?: "chat" | "page";
}) {
  const { locale } = useLocale();
  const isPage = variant === "page";

  return (
    <div className={`blocks${isPage ? " blocks-page" : ""}`}>
      {PHASES.map((ph, i) => (
        <motion.div
          className={`block${isPage ? " block-chapter" : ""}`}
          key={ph.n}
          initial={{ opacity: 0, y: isPage ? 40 : 32, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{
            once: true,
            amount: isPage ? 0.25 : 0.2,
            margin: isPage ? "0px 0px -20% 0px" : "0px 0px -35% 0px",
          }}
          transition={{
            duration: 0.7,
            delay: i === 0 ? 0.2 : 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {isPage ? (
            <div className="block-mark" aria-hidden="true">
              <ConceptIcon name={ICON_MAP[ph.icon]} className="concept-icon lg" />
            </div>
          ) : (
            <div className="stack-glyph" aria-hidden="true">
              {[5, 4, 3, 2, 1, 0].map((s) => (
                <i key={s} className={s <= i ? "on" : ""} />
              ))}
            </div>
          )}
          <div className="block-body">
            <div className="block-head">
              <span className="n">{ph.n}</span>
              {!isPage ? (
                <ConceptIcon
                  name={ICON_MAP[ph.icon]}
                  className="concept-icon sm"
                />
              ) : null}
              <h4>{t(ph.h, locale)}</h4>
            </div>
            <p>{t(ph.p, locale)}</p>
          </div>
        </motion.div>
      ))}
      <p className="blocks-note">{t(ui.blocksNote, locale)}</p>
    </div>
  );
}

export { PHASES };
