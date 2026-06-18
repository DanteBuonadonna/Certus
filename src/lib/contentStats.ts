// ============================================================
// Certus — live platform content stats
// Computed from the actual content registry so the marketing proof
// ("120+ hours of readings, 950+ questions…") never goes stale and
// is never exam-specific. Update content → these numbers update.
// ============================================================

import { examsWithContent, getChapters, getQuestions } from "@/content";

export interface PlatformStats {
  exams: number;        // number of exam tracks with content
  chapters: number;     // total lessons/chapters
  questions: number;    // total practice questions
  readingHours: number; // total reading minutes ÷ 60
}

let cached: PlatformStats | null = null;

export function platformStats(): PlatformStats {
  if (cached) return cached;
  const slugs = examsWithContent();
  let chapters = 0;
  let minutes = 0;
  let questions = 0;
  for (const slug of slugs) {
    const chs = getChapters(slug);
    chapters += chs.length;
    minutes += chs.reduce((sum, c) => sum + (c.readingMinutes ?? 0), 0);
    questions += getQuestions(slug).length;
  }
  cached = {
    exams: slugs.length,
    chapters,
    questions,
    readingHours: Math.round(minutes / 60),
  };
  return cached;
}

// Rounded-down "marquee" figures for headline copy — always truthful
// (we round DOWN so the real number is at least this big).
function floorTo(n: number, step: number): number {
  return Math.floor(n / step) * step;
}

export function statHeadline(): { hours: string; questions: string; lessons: string; exams: number } {
  const s = platformStats();
  return {
    hours: `${floorTo(s.readingHours, 10)}+`,
    questions: `${floorTo(s.questions, 50)}+`,
    lessons: `${floorTo(s.chapters, 10)}+`,
    exams: s.exams,
  };
}
