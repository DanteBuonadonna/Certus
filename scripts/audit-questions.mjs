// ============================================================
// Certus — question bank quality audit
//
// Run: node scripts/audit-questions.mjs
//
// WHY THIS EXISTS
// A user-facing audit found two flaws that made the banks gameable
// without knowing any finance:
//   1. ANSWER-POSITION BIAS — 80–89% of answers were choice B in several
//      banks. Always clicking B scored in the 80s.
//   2. LONGEST-ANSWER BIAS — the wordiest choice was correct ~67–74% of
//      the time (random ≈ 25–33%), because the correct answer got the
//      careful explanation and the distractors got three words.
// Both are classic test-writing failures. They train pattern-matching
// instead of knowledge, which is the opposite of the product's promise.
//
// This script is the guardrail. Run it after any content change.
// Non-zero exit = a bank regressed past the thresholds.
// ============================================================

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = "src/content";
const files = readdirSync(DIR).filter((f) => f.endsWith(".ts"));

// Thresholds — a bank failing any of these is gameable.
//
// NOTE ON MEASURING THE LENGTH TELL. The first version of this script
// flagged a question whenever the correct answer was the longest by ANY
// amount, including one character. That over-counts: a 1–3 character
// difference is invisible to a student and is just noise in how the
// sentences happened to fall. What a student can actually exploit is a
// VISIBLY longer correct answer. So the gate is the visible margin, and
// the raw "longest by any amount" figure is still printed alongside it
// for transparency rather than hidden.
const MAX_POSITION_SHARE = 0.45; // no single answer position above 45%
const VISIBLE_MARGIN = 8; // chars: the point a length difference becomes noticeable
const BIG_MARGIN = 20; // chars: a blatant giveaway
const MAX_VISIBLE_SHARE = 0.25; // at most 25% may have a visibly longer correct answer
const MAX_BIG_SHARE = 0.1; // at most 10% may have a blatant one
const MAX_DUPLICATES = 0;

const qre =
  /\{\s*id:\s*"([^"]+)"[^{]*?examSlug:\s*"([^"]+)"[^{]*?topicId:\s*"([^"]+)"[^{]*?stem:\s*"((?:[^"\\]|\\.)*)"\s*,\s*choices:\s*\[((?:[^\]\\]|\\.)*)\]\s*,\s*answerIndex:\s*(\d+)/gs;

const rows = [];
for (const f of files) {
  const src = readFileSync(join(DIR, f), "utf8");
  for (const m of src.matchAll(qre)) {
    const [, id, exam, topic, stem, choicesRaw, ai] = m;
    const choices = [...choicesRaw.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((c) => c[1]);
    if (!choices.length) continue;
    rows.push({ file: f, id, exam, topic, stem, choices, ai: Number(ai) });
  }
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").slice(0, 90);
const byExam = new Map();
for (const r of rows) {
  if (!byExam.has(r.exam)) byExam.set(r.exam, []);
  byExam.get(r.exam).push(r);
}

let failed = false;
console.log(`Parsed ${rows.length} questions across ${byExam.size} exams\n`);

for (const [exam, rs] of [...byExam].sort()) {
  const n = rs.length;
  const pos = {};
  for (const r of rs) pos[r.ai] = (pos[r.ai] ?? 0) + 1;
  const topPos = Math.max(...Object.values(pos));
  const posShare = topPos / n;

  let rawLongest = 0;
  let visible = 0;
  let big = 0;
  for (const r of rs) {
    const lens = r.choices.map((c) => c.length);
    const correct = lens[r.ai];
    const bestOther = Math.max(...lens.filter((_, i) => i !== r.ai));
    if (correct === Math.max(...lens)) rawLongest++;
    const margin = correct - bestOther;
    if (margin >= VISIBLE_MARGIN) visible++;
    if (margin >= BIG_MARGIN) big++;
  }
  const rawShare = rawLongest / n;
  const visShare = visible / n;
  const bigShare = big / n;

  const seen = new Map();
  for (const r of rs) seen.set(norm(r.stem), (seen.get(norm(r.stem)) ?? 0) + 1);
  const dups = [...seen.values()].filter((v) => v > 1).reduce((a, v) => a + v - 1, 0);

  // explanations that reference letters break if choices are ever shuffled
  const problems = [];
  if (posShare > MAX_POSITION_SHARE)
    problems.push(`position bias ${(posShare * 100).toFixed(0)}% (max ${MAX_POSITION_SHARE * 100}%)`);
  if (visShare > MAX_VISIBLE_SHARE)
    problems.push(
      `visibly-longer answer ${(visShare * 100).toFixed(0)}% (max ${MAX_VISIBLE_SHARE * 100}%)`
    );
  if (bigShare > MAX_BIG_SHARE)
    problems.push(`blatant giveaway ${(bigShare * 100).toFixed(0)}% (max ${MAX_BIG_SHARE * 100}%)`);
  if (dups > MAX_DUPLICATES) problems.push(`${dups} duplicate stems`);

  const status = problems.length ? "FAIL" : "ok  ";
  if (problems.length) failed = true;
  console.log(
    `${status} ${exam.padEnd(10)} n=${String(n).padStart(4)}  ` +
      `pos=${(posShare * 100).toFixed(0)}%  visible=${(visShare * 100).toFixed(0)}%  ` +
      `blatant=${(bigShare * 100).toFixed(0)}%  (raw-longest ${(rawShare * 100).toFixed(0)}%)  dups=${dups}` +
      (problems.length ? `\n       → ${problems.join("; ")}` : "")
  );
}

console.log(
  failed
    ? "\nFAILED — at least one bank is gameable without subject knowledge."
    : "\nAll banks pass."
);
process.exit(failed ? 1 : 0);
