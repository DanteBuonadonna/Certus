// ============================================================
// Certus — Final Boss (comprehensive mock exam)
// A timed exam spanning every topic in an exam. Framed as a
// boss battle: wrong answers cost hearts. Survive + score above
// the pass mark to win; lose and you're sent back to train your
// weakest topics.
// ============================================================

import { getQuestions, getChapters } from "@/content";
import { Question } from "@/content/types";

export interface Boss {
  name: string;
  emoji: string;
  intro: string;
  defeatTaunt: string;
}

const BOSSES: Record<string, Boss> = {
  cfa: {
    name: "The Charterstone Colossus",
    emoji: "🗿",
    intro: "Ten disciplines, one gatekeeper. Show me you've earned the charter.",
    defeatTaunt: "The summit isn't ready for you yet. Train, and return.",
  },
  "series-7": {
    name: "The Compliance Kraken",
    emoji: "🦑",
    intro: "Misquote one rule and I'll drag you under. Prove you're fit to represent.",
    defeatTaunt: "Suitability matters. Go drill your weak spots and face me again.",
  },
  "series-66": {
    name: "The Fiduciary Warden",
    emoji: "⚖️",
    intro: "Advisers answer to a higher duty. Show me you'd put the client first.",
    defeatTaunt: "A fiduciary knows the rules cold. Study, and stand before me again.",
  },
  cfp: {
    name: "The Grand Planner",
    emoji: "🧭",
    intro: "Insurance, tax, retirement, estate — a whole financial life. Plan it without a misstep.",
    defeatTaunt: "A real plan leaves no gap. Patch your weak areas and return.",
  },
  cpa: {
    name: "The Ledger Lord",
    emoji: "📒",
    intro: "Debits, credits, audits, and tax. Balance the books or be balanced yourself.",
    defeatTaunt: "The numbers don't lie. Reconcile your weak spots and face me again.",
  },
};

export function getBoss(examSlug: string): Boss {
  return (
    BOSSES[examSlug] ?? {
      name: "The Final Examiner",
      emoji: "👹",
      intro: "Everything you've learned, all at once. Begin.",
      defeatTaunt: "Not yet. Review and come back stronger.",
    }
  );
}

export interface BossConfig {
  hearts: number;
  passPct: number; // fraction needed to win, e.g. 0.7
  secondsPerQuestion: number;
}

export function bossConfig(questionCount: number): BossConfig {
  return {
    hearts: Math.max(3, Math.ceil(questionCount * 0.3)),
    passPct: 0.7,
    secondsPerQuestion: 75,
  };
}

// Assemble a comprehensive exam that spreads across all topics.
export function buildBossExam(examSlug: string, max = 20): Question[] {
  const all = getQuestions(examSlug);
  // group by topic
  const byTopic = new Map<string, Question[]>();
  for (const q of all) {
    const arr = byTopic.get(q.topicId) ?? [];
    arr.push(q);
    byTopic.set(q.topicId, arr);
  }
  // shuffle within each topic
  for (const [k, arr] of byTopic) byTopic.set(k, shuffle(arr));

  // round-robin across topics so the exam is balanced
  const result: Question[] = [];
  const topicArrays = Array.from(byTopic.values());
  let added = true;
  while (added && result.length < max) {
    added = false;
    for (const arr of topicArrays) {
      if (arr.length) {
        result.push(arr.shift()!);
        added = true;
        if (result.length >= max) break;
      }
    }
  }
  return shuffle(result);
}

export interface TopicResult {
  topicId: string;
  topicName: string;
  correct: number;
  total: number;
  pct: number;
}

export interface BossResult {
  total: number;
  correct: number;
  pct: number;
  passed: boolean;
  weakTopics: TopicResult[]; // topics below the pass mark, weakest first
}

export function analyzeBoss(questions: Question[], answers: (number | null)[], passPct: number): BossResult {
  const byTopic = new Map<string, TopicResult>();
  let correct = 0;
  questions.forEach((q, i) => {
    const ok = answers[i] === q.answerIndex;
    if (ok) correct++;
    const tr = byTopic.get(q.topicId) ?? { topicId: q.topicId, topicName: q.topicName, correct: 0, total: 0, pct: 0 };
    tr.total++;
    if (ok) tr.correct++;
    byTopic.set(q.topicId, tr);
  });
  for (const tr of byTopic.values()) tr.pct = Math.round((tr.correct / tr.total) * 100);

  const total = questions.length;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const weakTopics = Array.from(byTopic.values())
    .filter((t) => t.correct / t.total < passPct)
    .sort((a, b) => a.pct - b.pct);

  return { total, correct, pct, passed: pct >= passPct * 100, weakTopics };
}

// ---- Defeated-boss trophies (localStorage) ----
const KEY = "certus_bosses_v1";
export interface BossTrophy {
  bestPct: number;
  defeatedAt: string;
}
export type BossTrophies = Record<string, BossTrophy>;

export function loadTrophies(): BossTrophies {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

export function recordVictory(examSlug: string, pct: number): BossTrophies {
  const t = loadTrophies();
  const prev = t[examSlug];
  const best = Math.max(prev?.bestPct ?? 0, pct);
  const next = { ...t, [examSlug]: { bestPct: best, defeatedAt: prev?.defeatedAt ?? new Date().toISOString().slice(0, 10) } };
  if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function topicHasReading(examSlug: string, topicId: string): boolean {
  return getChapters(examSlug).some((c) => c.topicId === topicId);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
