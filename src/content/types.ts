// ============================================================
// Certus — Content model
// Original teaching content: reading chapters + practice questions.
// Structured (not raw markdown) so it renders consistently and
// scales cleanly across every exam.
// ============================================================

// A figure: an inline SVG diagram/graph with a caption. SVG should use
// the app's CSS variables for colors so it themes correctly.
export interface Figure {
  caption: string;
  svg: string; // raw <svg>…</svg> markup
  alt?: string;
}

// A formula block rendered in a monospace/centered style.
export interface FormulaBlock {
  label?: string;
  expr: string;
  note?: string;
}

export interface TableBlock {
  caption?: string;
  headers: string[];
  rows: string[][];
}

// A worked numerical example — the "show the math" teaching device.
export interface WorkedExample {
  title: string;
  prompt: string;
  steps: string[];
  answer: string;
}

// Content blocks render IN ORDER within a section, so prose, figures,
// formulas, tables, and examples can be interleaved naturally.
export type Block =
  | { kind: "p"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "callout"; label: string; body: string }
  | { kind: "figure"; figure: Figure }
  | { kind: "formula"; formula: FormulaBlock }
  | { kind: "table"; table: TableBlock }
  | { kind: "example"; example: WorkedExample };

export interface ChapterSection {
  heading: string;
  // Legacy fields (still supported for older chapters):
  paragraphs?: string[];
  bullets?: string[];
  callout?: { label: string; body: string };
  // New rich, ordered content. When present, `blocks` is rendered
  // (after any legacy paragraphs/bullets/callout, which older chapters use).
  blocks?: Block[];
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
