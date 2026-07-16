"use client";

import Link from "next/link";
import { TOPICS, topicQuestion } from "@/lib/topics";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export function Chip({
  id,
  visited,
  onAsk,
}: {
  id: string;
  visited: boolean;
  onAsk: (id: string) => void;
}) {
  const { locale } = useLocale();
  const topic = TOPICS[id];
  if (!topic) return null;
  return (
    <button
      className={`chip${visited ? " visited" : ""}`}
      onClick={() => onAsk(id)}
      type="button"
    >
      <span className="q">?</span>
      {topicQuestion(id, locale)}
    </button>
  );
}

export function UserMessage({ text }: { text: string }) {
  return (
    <div className="msg-user reveal-in">{text}</div>
  );
}

export function ThinkingMessage() {
  const { locale } = useLocale();
  return (
    <div className="msg-ai">
      <div className="thinking">
        {t(ui.chat.thinking, locale)}
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

export function AIMessage({
  topicId,
  query,
  followups,
  nudge,
  visited,
  onAsk,
}: {
  topicId: string;
  query?: string;
  followups: string[];
  nudge?: boolean;
  visited: Set<string>;
  onAsk: (id: string) => void;
}) {
  const { locale, href } = useLocale();
  const resolved =
    topicId === "proof" ? "results" : topicId;
  const topic = TOPICS[resolved] ?? TOPICS.fallback;
  const showBook =
    resolved === "journey" ||
    resolved === "results" ||
    resolved === "start" ||
    nudge;

  return (
    <div className="msg-ai">
      <div className="ai-tag">
        <span className="orb" aria-hidden="true" />
        Incrementi intelligence
      </div>
      <div className="reveal">
        {topic.render({ query })}
        {followups.length > 0 && (
          <div className="followups">
            {followups.map((fid) => (
              <Chip
                key={fid}
                id={fid}
                visited={visited.has(fid)}
                onAsk={onAsk}
              />
            ))}
            {showBook ? (
              <Link href={href("/start")} className="chip chip-cta">
                <span className="q">→</span>
                {t(ui.chat.bookSession, locale)}
              </Link>
            ) : null}
          </div>
        )}
        {nudge && (
          <div className="nudge">
            <p>{t(ui.chat.nudge, locale)}</p>
            <Link href={href("/start")} className="btn-copper">
              {t(ui.ctaBand.button, locale)}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
