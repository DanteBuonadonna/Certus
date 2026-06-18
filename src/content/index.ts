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

export function examsWithContent(): string[] {
  return Object.keys(REGISTRY);
}
