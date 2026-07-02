"use client";

import { motion } from "framer-motion";
import { TOPICS } from "@/lib/topics";

export function Chip({
  id,
  visited,
  onAsk,
}: {
  id: string;
  visited: boolean;
  onAsk: (id: string) => void;
}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  return (
    <button
      className={`chip${visited ? " visited" : ""}`}
      onClick={() => onAsk(id)}
      type="button"
    >
      <span className="q">?</span>
      {topic.q}
    </button>
  );
}

export function UserMessage({ text }: { text: string }) {
  return (
    <motion.div
      className="msg-user"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.div>
  );
}

export function ThinkingMessage() {
  return (
    <motion.div
      className="msg-ai"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="thinking">
        Reasoning
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
      </div>
    </motion.div>
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
  const topic = TOPICS[topicId] ?? TOPICS.fallback;
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
          </div>
        )}
        {nudge && (
          <div className="nudge">
            <p>
              You&apos;ve covered a good slice of Incrementi. The rest is
              better as a conversation — start with an AI &amp; data strategy
              session.
            </p>
            <button
              className="btn-copper"
              type="button"
              onClick={() => onAsk("start")}
            >
              Book a strategy session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
