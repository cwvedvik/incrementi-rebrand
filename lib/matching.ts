import { TOPICS, type Topic } from "./topics";

/**
 * Free-text question matching.
 * Substring scoring over stem-style keywords (EN + NO), an exact-token
 * bonus, and a synonym layer for common phrasings the keyword lists
 * don't carry. Deterministic and instant — no model.
 */

/** Extra query-side vocabulary per topic (synonyms, common phrasings). */
const EXTRA_KEYWORDS: Record<string, string[]> = {
  speed: ["price", "pricing", "cheap", "slow", "timeline", "tempo", "leveranse"],
  ownership: [
    "cost", "costs", "budget", "expensive", "contract", "license",
    "pris", "kostnad", "kostnader", "dyrt", "avtale", "lisens",
  ],
  context: [
    "privacy", "data protection", "hallucination", "governance", "iso",
    "personvern", "styring", "regelverk", "eu ai act",
  ],
  proof: ["portfolio", "track record", "examples", "eksempler", "prosjekter"],
  build: ["fabric", "azure", "stack", "teknologi", "arkitektur", "architecture"],
  people: ["ceo", "founder", "employees", "ansatte", "grunnlegger", "ledelse"],
  start: ["email", "phone", "call", "demo", "epost", "telefon", "ringe"],
  why: ["99x", "mission", "vision", "visjon", "historie", "story"],
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s½]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Short tokens that are still unambiguous enough to route on,
 * but only when they appear as an exact word.
 */
const STRONG_SHORT = new Set([
  "roi", "ip", "iso", "99x", "fast", "own", "eie", "pris", "case", "gdpr",
]);

function scoreTopic(
  query: string,
  tokens: Set<string>,
  topic: Topic
): { score: number; strong: boolean } {
  const keywords = [...topic.kw, ...(EXTRA_KEYWORDS[topic.id] ?? [])];
  let score = 0;
  let strong = false;
  for (const k of keywords) {
    if (query.includes(k)) {
      score += k.length > 4 ? 2 : 1;
      if (tokens.has(k)) score += 1;
      // a match is "strong" if the keyword is specific: long, a phrase,
      // or a whitelisted exact short token
      if (k.length >= 5 || k.includes(" ") || (STRONG_SHORT.has(k) && tokens.has(k))) {
        strong = true;
      }
    }
  }
  return { score, strong };
}

export interface MatchResult {
  topic: Topic;
  /** Closest topic ids (used to build fallback suggestions). */
  suggestions: string[];
}

export function matchTopic(text: string): MatchResult {
  const query = normalize(text);
  const tokens = new Set(query.split(" "));

  const ranked = Object.values(TOPICS)
    .filter((t) => t.id !== "fallback")
    .map((t) => ({ topic: t, ...scoreTopic(query, tokens, t) }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];
  // route only on confident matches: a specific keyword hit, or an
  // accumulation of weaker signals — otherwise hand off to the fallback
  if (best && best.score >= 2 && (best.strong || best.score >= 4)) {
    return { topic: best.topic, suggestions: [] };
  }

  const near = ranked
    .filter((r) => r.score > 0)
    .slice(0, 2)
    .map((r) => r.topic.id);
  const suggestions = near.length > 0 ? near : ["journey", "proof"];

  return { topic: TOPICS.fallback, suggestions };
}
