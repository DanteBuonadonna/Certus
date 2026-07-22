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

// Each boss is reframed as "Exam Day" — a high-stakes proctored final
// or review board you must earn your way into.
const BOSSES: Record<string, Boss> = {
  sie: {
    name: "SIE Exam Day · The Front Desk",
    emoji: "🏢",
    intro: "The industry's front door. Show you know the markets, products, and rules cold before you go further.",
    defeatTaunt: "Everyone starts here. Shore up the basics and take it again.",
  },
  cfa: {
    name: "CFA Level I Exam Day · The Charter Board",
    emoji: "🏛️",
    intro: "Ten disciplines, one proctored test. Sit the board and prove the foundation is solid.",
    defeatTaunt: "Not ready for the charter yet. Sharpen your weak areas and book the retake.",
  },
  "cfa-l2": {
    name: "CFA Level II Exam Day · The Valuation Committee",
    emoji: "🏛️",
    intro: "Vignettes, models, and numbers that must tie out. The committee checks every assumption.",
    defeatTaunt: "Your valuation didn't survive diligence. Rebuild the model and present again.",
  },
  "cfa-l3": {
    name: "CFA Level III Exam Day · The Investment Committee",
    emoji: "🏛️",
    intro: "The last gate. Construct the portfolio, defend the policy, and the charter is yours.",
    defeatTaunt: "The committee tabled your proposal. Refine the policy and return.",
  },
  "series-7": {
    name: "Series 7 Exam Day · The Compliance Desk",
    emoji: "🗄️",
    intro: "One rule misquoted and the desk fails you. Prove you're fit to represent clients.",
    defeatTaunt: "Suitability is everything. Drill your gaps and take the exam again.",
  },
  "series-66": {
    name: "Series 66 Exam Day · The Regulator",
    emoji: "⚖️",
    intro: "Advisers answer to a higher duty. Show the regulator you'd put the client first.",
    defeatTaunt: "A fiduciary knows the rules cold. Study, and face the board again.",
  },
  cfp: {
    name: "CFP Exam Day · The Planning Panel",
    emoji: "📋",
    intro: "Insurance, tax, retirement, estate — a whole financial life. Present a plan with no gaps.",
    defeatTaunt: "A real plan leaves nothing exposed. Patch your weak areas and re-present.",
  },
  "cpa-aud": {
    name: "AUD Exam Day · The Audit Board",
    emoji: "🔍",
    intro: "Risk, evidence, controls, independence, and the report. Sign off only if it holds.",
    defeatTaunt: "An auditor gathers sufficient evidence. Shore up your weak spots and take it again.",
  },
  "cpa-far": {
    name: "FAR Exam Day · The Reporting Board",
    emoji: "📊",
    intro: "Statements, accruals, revenue, leases, and government accounting. Balance every account.",
    defeatTaunt: "The statements must tie out. Reconcile your weak areas and take it again.",
  },
  "cpa-reg": {
    name: "REG Exam Day · The Tax Board",
    emoji: "⚖️",
    intro: "Individual and entity tax, business law, and ethics. File a flawless return.",
    defeatTaunt: "The code is unforgiving. Patch your gaps and take it again.",
  },
  "cpa-disc": {
    name: "Discipline Exam Day · BAR / ISC / TCP",
    emoji: "🎯",
    intro: "Your chosen specialty — analysis, systems, or advanced tax. Prove your depth.",
    defeatTaunt: "Specialists don't guess. Sharpen your discipline and take it again.",
  },
};

export function getBoss(examSlug: string): Boss {
  return (
    BOSSES[examSlug] ?? {
      name: "Exam Day · The Board",
      emoji: "🏛️",
      intro: "Everything you've studied, all at once. Sit the exam.",
      defeatTaunt: "Not yet. Review and book the retake.",
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
