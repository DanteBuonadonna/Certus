// ============================================================
// Certus — Content registry
// Maps each exam slug to its reading + question content.
// Add new exams here as their content waves are authored.
// ============================================================

import { ExamContent, Chapter, Question } from "./types";
import { cfaContent } from "./cfa";
import { cfaL2Content } from "./cfa-l2";
import { cfaL3Content } from "./cfa-l3";
import { series7Content } from "./series7";
import { series66Content } from "./series66";
import { cfpContent } from "./cfp";
import { cpaAudContent, cpaFarContent, cpaRegContent, cpaDiscContent } from "./cpa";
import { sieContent } from "./sie";

const REGISTRY: Record<string, ExamContent> = {
  sie: sieContent,
  cfa: cfaContent, // CFA Level I (original slug kept so user progress carries over)
  "cfa-l2": cfaL2Content,
  "cfa-l3": cfaL3Content,
  "series-7": series7Content,
  "series-66": series66Content,
  cfp: cfpContent,
  // CPA — split into 4 tracks (3 Core + 1 combined Discipline), mirroring CFA.
  "cpa-aud": cpaAudContent,
  "cpa-far": cpaFarContent,
  "cpa-reg": cpaRegContent,
  "cpa-disc": cpaDiscContent,
  // future: frm, caia, ...
};

export function getExamContent(slug: string): ExamContent | undefined {
  return REGISTRY[slug];
}

export function getChapters(slug: string): Chapter[] {
  return REGISTRY[slug]?.chapters ?? [];
}

export function getChapter(slug: string, chapterId: string): Chapter | undefined {
  return REGISTRY[slug]?.chapters.find((c) => c.id === chapterId);
}

export function getQuestions(slug: string, topicId?: string): Question[] {
  const qs = REGISTRY[slug]?.questions ?? [];
  return topicId ? qs.filter((q) => q.topicId === topicId) : qs;
}

/**
 * Exams that have content, IN THE CANONICAL ORDER from lib/exams.ts.
 *
 * This used to be `Object.keys(REGISTRY)` — i.e. the order the keys happen to
 * be typed in this file, which starts with `sie`. Seven pages do
 * `useState(available[0] ?? "cfa")`, so an incidental line-ordering decision in
 * a registry literal was silently choosing the default exam for Reading,
 * Practice, Flashcards, Skill tree, Challenges, The Final and Career — landing
 * everyone on the SIE while their dashboard said CFA. `?? "cfa"` never fired,
 * because available[0] was always truthy.
 *
 * EXAMS is the deliberate order (CFA I → II → III → CPA → … → Series). Sorting
 * by it means available[0] is CFA Level I, and every exam list in the app reads
 * in the same sequence instead of registry-insertion order.
 */
// Canonical display order. Mirrors EXAMS in lib/exams.ts — kept local rather
// than importing it, because content/ is the leaf layer and shouldn't depend on
// lib/exams (which imports nothing from here today, but that's exactly the kind
// of cycle that bites later). Anything not listed sorts to the end.
const DISPLAY_ORDER = [
  "cfa", "cfa-l2", "cfa-l3",
  "cpa-aud", "cpa-far", "cpa-reg", "cpa-disc",
  "cfp",
  "sie", "series-7", "series-66",
];

export function examsWithContent(): string[] {
  return Object.keys(REGISTRY).sort((a, b) => {
    const ia = DISPLAY_ORDER.indexOf(a);
    const ib = DISPLAY_ORDER.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
}
