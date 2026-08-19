// ============================================================
// Certus — can the readings actually answer the questions?
//
// Run: node scripts/reading-alignment.mjs
//      node scripts/reading-alignment.mjs --exam sie --list
//
// WHY THIS EXISTS
// We built this backwards. Questions were written first, at high quality,
// against knowledge that was never guaranteed to be in the lessons. So a
// student can finish every reading in a topic and still meet questions
// about terms the readings never mention. That is not a hard question —
// it is an unfair one, and it is the fastest way to make someone quit.
//
// Correct order, from here on, per blueprint topic:
//   1. write the reading to full blueprint depth
//   2. extract the concepts it actually teaches
//   3. write questions FROM those concepts
//   4. run this, which fails if a question depends on a term no reading
//      in that exam ever introduces
//
// HOW IT WORKS
// For each question we take the "load-bearing" terms — capitalised
// multi-word phrases, ALL-CAPS emphasis, and finance terms the banks use
// as jargon — and check whether they appear anywhere in that exam's
// readings. A question whose key term is absent everywhere is orphaned:
// nothing we published teaches it.
//
// This is a heuristic, so unmatched terms are reported for judgement
// rather than hard-failing the build. The number that matters is the
// TREND: it should fall to near zero as readings are written first.
// ============================================================

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = "src/content";
const args = process.argv.slice(2);
const examFilter = args.includes("--exam") ? args[args.indexOf("--exam") + 1] : null;
const LIST = args.includes("--list");

// ---- gather reading prose per exam ----
const readings = new Map(); // exam -> lowercased corpus
for (const f of readdirSync(DIR).filter((x) => x.endsWith(".ts"))) {
  const src = readFileSync(join(DIR, f), "utf8");
  const chapterStarts = [...src.matchAll(/^ {2}\{\n {4}id: "/gm)].map((m) => m.index);
  chapterStarts.push(src.length);
  for (let i = 0; i < chapterStarts.length - 1; i++) {
    const body = src.slice(chapterStarts[i], chapterStarts[i + 1]);
    const exam = body.match(/examSlug:\s*"([^"]+)"/)?.[1];
    if (!exam || !/readingMinutes:/.test(body)) continue;
    let prose = "";
    for (const m of body.matchAll(
      /(?:text|body|intro|summary|prompt|answer|note|caption|def|term|heading|title):\s*\n?\s*"((?:[^"\\]|\\.)*)"/g
    )) prose += " " + m[1];
    for (const m of body.matchAll(/(?:items|steps|takeaways|rows|headers):\s*\[([\s\S]*?)\]/g))
      for (const s of m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)) prose += " " + s[1];
    for (const m of body.matchAll(/expr:\s*"((?:[^"\\]|\\.)*)"/g)) prose += " " + m[1];
    readings.set(exam, (readings.get(exam) ?? "") + " " + prose);
  }
}
for (const [k, v] of readings) readings.set(k, v.toLowerCase().replace(/\s+/g, " "));

// ---- gather questions ----
const qre =
  /\{\s*id:\s*"([^"]+)"[^{]*?examSlug:\s*"([^"]+)"[^{]*?topicId:\s*"([^"]+)"[^{]*?stem:\s*"((?:[^"\\]|\\.)*)"\s*,\s*choices:\s*\[((?:[^\]\\]|\\.)*)\]\s*,\s*answerIndex:\s*(\d+)\s*,\s*explanation:\s*"((?:[^"\\]|\\.)*)"/gs;
const questions = [];
for (const f of readdirSync(DIR).filter((x) => x.endsWith(".ts"))) {
  const src = readFileSync(join(DIR, f), "utf8");
  for (const m of src.matchAll(qre)) {
    const [, id, exam, topic, stem, choicesRaw, ai, expl] = m;
    if (examFilter && exam !== examFilter) continue;
    const choices = [...choicesRaw.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((c) => c[1]);
    questions.push({ id, exam, topic, stem, correct: choices[+ai] ?? "", expl });
  }
}

// Terms that are structural English, not finance concepts.
const STOP = new Set(
  ("the a an and or of to in for on at by with from is are was were be been which that this these those " +
   "what when where who whom why how not no yes if then than as it its their his her our your my " +
   "investor customer client company firm question answer choice option best most least generally " +
   "under over above below during within after before because since while although however note " +
   "following true false correct incorrect exam candidate account value price rate amount total " +
   "january february march april may june july august september october november december monday " +
   "tuesday wednesday thursday friday saturday sunday").split(" ")
);

/** Load-bearing phrases: ALL-CAPS emphasis and Capitalised Multi-Word terms. */
function keyTerms(text) {
  const out = new Set();
  // ALL-CAPS emphasis (we use it for jargon in stems/explanations)
  for (const m of text.matchAll(/\b([A-Z]{3,}(?:[ -][A-Z]{2,})*)\b/g)) {
    const t = m[1].toLowerCase();
    if (t.length > 3 && !STOP.has(t)) out.add(t);
  }
  // Capitalised multi-word proper terms ("Regulation Best Interest")
  for (const m of text.matchAll(/\b([A-Z][a-z]{2,}(?:\s+[A-Z][a-z]{2,}){1,3})\b/g)) {
    const t = m[1].toLowerCase();
    if (!t.split(" ").every((w) => STOP.has(w))) out.add(t);
  }
  return out;
}

const results = [];
for (const q of questions) {
  const corpus = readings.get(q.exam) ?? "";
  const terms = new Set([...keyTerms(q.stem), ...keyTerms(q.correct), ...keyTerms(q.expl)]);
  const missing = [...terms].filter((t) => {
    if (corpus.includes(t)) return false;
    // allow a near miss: every word of the phrase present somewhere
    const words = t.split(/[ -]/).filter((w) => w.length > 3 && !STOP.has(w));
    if (words.length && words.every((w) => corpus.includes(w))) return false;
    return true;
  });
  if (missing.length) results.push({ ...q, missing });
}

// ---- report ----
const byExam = new Map();
for (const r of results) {
  if (!byExam.has(r.exam)) byExam.set(r.exam, []);
  byExam.get(r.exam).push(r);
}
const totalByExam = new Map();
for (const q of questions) totalByExam.set(q.exam, (totalByExam.get(q.exam) ?? 0) + 1);

console.log("\nREADING ↔ QUESTION ALIGNMENT");
console.log("Questions whose key terms appear NOWHERE in that exam's readings.\n");

const sorted = [...totalByExam.keys()].sort();
for (const exam of sorted) {
  const bad = byExam.get(exam) ?? [];
  const tot = totalByExam.get(exam);
  const share = bad.length / tot;
  const flag = share > 0.25 ? "  ← readings do not support this bank" : "";
  console.log(
    `  ${exam.padEnd(11)} ${String(bad.length).padStart(4)} / ${String(tot).padEnd(5)} unsupported ` +
    `(${(share * 100).toFixed(0)}%)${flag}`
  );
  if (LIST) {
    const termCount = new Map();
    for (const r of bad) for (const t of r.missing) termCount.set(t, (termCount.get(t) ?? 0) + 1);
    const top = [...termCount].sort((a, b) => b[1] - a[1]).slice(0, 18);
    for (const [t, n] of top) console.log(`        ${String(n).padStart(3)}×  ${t}`);
  }
}

const totalBad = results.length;
console.log(
  `\n  TOTAL ${totalBad} / ${questions.length} questions (${((totalBad / questions.length) * 100).toFixed(0)}%) ` +
  "reference something the readings never teach."
);
console.log("\nWrite the reading FIRST, then the questions from it. This number should fall.\n");
