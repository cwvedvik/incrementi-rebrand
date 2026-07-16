"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { TOPICS, INITIAL_CHIPS, topicQuestion } from "@/lib/topics";
import { matchTopic } from "@/lib/matching";
import { useBrain } from "@/lib/store";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";
import SiteNav from "@/components/sections/SiteNav";
import Hero from "@/components/sections/Hero";
import HeroSea from "@/components/sections/HeroSea";
import Dock from "./Dock";
import { UserMessage, ThinkingMessage, AIMessage } from "./Message";

const BrainCanvas = dynamic(() => import("@/components/brain/BrainCanvas"), {
  ssr: false,
  loading: () => <div className="brain-layer" aria-hidden="true" />,
});

type Msg =
  | { id: number; kind: "user"; text: string }
  | { id: number; kind: "thinking" }
  | {
      id: number;
      kind: "ai";
      topicId: string;
      query?: string;
      followups: string[];
      nudge?: boolean;
    };

const THINK_MS = 1050;
const ANSWER_MS = 1700;

let nextId = 1;

export default function Experience() {
  const { locale, href } = useLocale();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const busyRef = useRef(false);
  const nudgeShownRef = useRef(false);
  const streamRef = useRef<HTMLDivElement>(null);
  const setPhase = useBrain((s) => s.setPhase);
  const phase = useBrain((s) => s.phase);

  const inConversation = messages.length > 0;

  useEffect(() => {
    document.body.dataset.phase = phase;
  }, [phase]);

  useEffect(() => {
    const el = streamRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const last = messages[messages.length - 1];
      if (last?.kind === "ai") {
        const bubbles = el.querySelectorAll<HTMLElement>(".msg-user");
        const target = bubbles[bubbles.length - 1];
        if (target) {
          el.scrollTo({
            top: Math.max(target.offsetTop - 96, 0),
            behavior: "smooth",
          });
          return;
        }
      }
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }, 90);
    return () => clearTimeout(timer);
  }, [messages]);

  const deliver = useCallback(
    (
      userText: string,
      topicId: string,
      query?: string,
      followupsOverride?: string[],
    ): boolean => {
      if (busyRef.current) return false;
      busyRef.current = true;

      const raw = TOPICS[topicId] ?? TOPICS.fallback;
      const resolvedId = raw.id === "results" || topicId === "proof" ? "results" : raw.id;
      const topic = TOPICS[resolvedId] ?? TOPICS.fallback;
      setPhase("thinking");

      const userId = nextId++;
      const thinkId = nextId++;
      setMessages((m) => [
        ...m,
        { id: userId, kind: "user", text: userText },
        { id: thinkId, kind: "thinking" },
      ]);

      setTimeout(() => {
        let nudge = false;
        if (
          !nudgeShownRef.current &&
          topic.id !== "start" &&
          topic.id !== "fallback"
        ) {
          const seen = new Set(visited);
          seen.add(topic.id);
          if (seen.size >= 4) {
            nudge = true;
            nudgeShownRef.current = true;
          }
        }

        setMessages((m) =>
          m.map((msg) =>
            msg.id === thinkId
              ? {
                  id: thinkId,
                  kind: "ai" as const,
                  topicId: topic.id,
                  query,
                  followups: followupsOverride ?? topic.follow,
                  nudge,
                }
              : msg,
          ),
        );
        setVisited((v) => {
          const next = new Set(v);
          next.add(topic.id);
          return next;
        });
        setPhase("answering");
        busyRef.current = false;

        setTimeout(() => {
          if (useBrain.getState().phase === "answering") setPhase("docked");
        }, ANSWER_MS);
      }, THINK_MS);
      return true;
    },
    [setPhase, visited],
  );

  const ask = useCallback(
    (id: string) => {
      const topic = TOPICS[id];
      if (!topic) return;
      const q = topicQuestion(id, locale);
      if (deliver(q, id)) {
        const tid = topic.id;
        window.history.replaceState(null, "", `${href("/")}?t=${tid}`.replace("/?", "?"));
      }
    },
    [deliver, locale, href],
  );

  const submitFree = useCallback(
    (text: string) => {
      if (busyRef.current) return;
      const { topic, suggestions } = matchTopic(text);
      if (topic.id === "fallback") {
        const follow = [
          ...suggestions,
          ...["journey", "results"].filter((x) => !suggestions.includes(x)),
        ].slice(0, 3);
        deliver(text, "fallback", text, follow);
      } else if (deliver(text, topic.id)) {
        window.history.replaceState(
          null,
          "",
          `${href("/")}?t=${topic.id}`.replace("/?", "?"),
        );
      }
    },
    [deliver, href],
  );

  const reset = useCallback(() => {
    setMessages([]);
    setPhase("idle");
    busyRef.current = false;
    window.history.replaceState(null, "", href("/"));
  }, [setPhase, href]);

  const onListening = useCallback(
    (listening: boolean) => {
      const current = useBrain.getState().phase;
      if (listening && current === "idle") setPhase("listening");
      if (!listening && current === "listening") setPhase("idle");
    },
    [setPhase],
  );

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("t");
    const tid = param === "proof" ? "results" : param;
    if (tid && TOPICS[tid] && tid !== "fallback") {
      const timer = setTimeout(
        () => deliver(topicQuestion(tid, locale), tid),
        650,
      );
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="glow" aria-hidden="true" />
      <HeroSea />
      <BrainCanvas />
      <div className="grain" aria-hidden="true" />

      <SiteNav experienceMode onLogoClick={reset} />

      <AnimatePresence>
        {inConversation && (
          <motion.button
            className="reset"
            onClick={reset}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            type="button"
          >
            {t(ui.chat.back, locale)}
          </motion.button>
        )}
      </AnimatePresence>

      <main className="stage">
        <AnimatePresence mode="wait">
          {!inConversation ? (
            <motion.div
              key="hero"
              style={{ flex: 1, display: "flex", flexDirection: "column" }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Hero />
            </motion.div>
          ) : (
            <motion.div
              key="stream"
              className="stream"
              ref={streamRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              aria-live="polite"
            >
              <div className="stream-inner">
                {messages.map((msg) => {
                  if (msg.kind === "user")
                    return <UserMessage key={msg.id} text={msg.text} />;
                  if (msg.kind === "thinking")
                    return <ThinkingMessage key={msg.id} />;
                  return (
                    <AIMessage
                      key={msg.id}
                      topicId={msg.topicId}
                      query={msg.query}
                      followups={msg.followups}
                      nudge={msg.nudge}
                      visited={visited}
                      onAsk={ask}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Dock
        chips={inConversation ? [] : INITIAL_CHIPS}
        visited={visited}
        onAsk={ask}
        onSubmit={submitFree}
        onListening={onListening}
        inConversation={inConversation}
      />
    </>
  );
}
