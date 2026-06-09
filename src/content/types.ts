// ============================================================
// Certus — Content model
// Original teaching content: reading chapters + practice questions.
// Structured (not raw markdown) so it renders consistently and
// scales cleanly across every exam.
// ============================================================

export interface ChapterSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  // Optional highlighted formula/definition box rendered after the prose.
  callout?: { label: string; body: string };
}

export interface KeyTerm {
  term: string;
  def: string;
}

export interface Chapter {
  id: string;
  examSlug: string; // e.g. "cfa"
  topicId: string; // matches Exam topic ids (e.g. "ethics")
  topicName: string;
  title: string;
  readingMinutes: number;
  summary: string; // one-line description shown in the list
  intro: string;
  sections: ChapterSection[];
  keyTerms: KeyTerm[];
  takeaways: string[];
}

export interface Question {
  id: string;
  examSlug: string;
  topicId: string;
  topicName: string;
  difficulty: 1 | 2 | 3; // 1 easy .. 3 hard
  stem: string;
  choices: string[]; // 3-4 options
  answerIndex: number; // index into choices
  // Detailed explanation — the teaching moment. Explains why the right
  // answer is right AND why the tempting wrong answers are wrong.
  explanation: string;
}

export interface ExamContent {
  examSlug: string;
  chapters: Chapter[];
  questions: Question[];
}
