// ============================================================
// Certus — Content registry
// Maps each exam slug to its reading + question content.
// Add new exams here as their content waves are authored.
// ============================================================

import { ExamContent, Chapter, Question } from "./types";
import { cfaContent } from "./cfa";
import { series7Content } from "./series7";
import { series66Content } from "./series66";
import { cfpContent } from "./cfp";
import { cpaContent } from "./cpa";
import { sieContent } from "./sie";

const REGISTRY: Record<string, ExamContent> = {
  sie: sieContent,
  cfa: cfaContent,
  "series-7": series7Content,
  "series-66": series66Content,
  cfp: cfpContent,
  cpa: cpaContent,
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
