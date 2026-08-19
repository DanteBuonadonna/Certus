// ============================================================
// Certus — question correctness verifier
//
// Run: node scripts/verify-questions.mjs
//      node scripts/verify-questions.mjs --exam sie
//
// WHY THIS EXISTS
// audit-questions.mjs checks whether a bank is GAMEABLE (position bias,
// length tells, duplicates). It does not check whether a question is
// CORRECT. Those are different failures and the second one is worse: a
// gameable bank teaches pattern-matching, a wrong bank teaches wrong
// finance to someone about to sit a licensing exam.
//
// We are about to go from ~660 questions to ~9,000. At that volume the
// binding constraint is the author's error rate, and mine is not zero —
// in one month I shipped a choice reading $9,556 against an explanation
// computing $9,565, a question listing "$40.00" twice as two different
// options, and a forward-rate question whose spot rates I changed without
// updating the arithmetic beneath it. All three were caught by hand.
// Hand-catching does not scale to 9,000.
//
// WHAT IT CHECKS
//  1. NUMERIC AGREEMENT — the final number computed in the explanation
//     should appear in the answer that is marked correct. This is the
//     check that catches the $9,556/$9,565 class of error.
//  2. DUPLICATE CHOICES — the same option listed twice in one question.
//  3. CROSS-BANK DUPLICATE STEMS — audit-questions only looks within a
//     bank; SIE and Series 7 legitimately share topics and can collide.
//  4. LETTER REFERENCES — an explanation asserting "Choice B is correct"
//     that disagrees with answerIndex.
//  5. STRUCTURAL — answerIndex in range, no empty choices, stem present.
//
// Findings are reported as WARN (worth a look) or FAIL (definitely wrong).
// Only FAIL exits non-zero, because the numeric heuristic has false
// positives and a noisy gate is a gate people learn to ignore.
// ============================================================

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = "src/content";
const examFilter = process.argv.includes("--exam")
  ? process.argv[process.argv.indexOf("--exam") + 1]
  : null;

const qre =
  /\{\s*id:\s*"([^"]+)"[^{]*?examSlug:\s*"([^"]+)"[^{]*?topicId:\s*"([^"]+)"[^{]*?difficulty:\s*(\d)[^{]*?stem:\s*"((?:[^"\\]|\\.)*)"\s*,\s*choices:\s*\[((?:[^\]\\]|\\.)*)\]\s*,\s*answerIndex:\s*(\d+)\s*,\s*explanation:\s*"((?:[^"\\]|\\.)*)"/gs;

const rows = [];
for (const f of readdirSync(DIR).filter((x) => x.endsWith(".ts"))) {
  const src = readFileSync(join(DIR, f), "utf8");
  for (const m of src.matchAll(qre)) {
    const [, id, exam, topic, diff, stem, choicesRaw, ai, explanation] = m;
    const choices = [...choicesRaw.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((c) => c[1]);
    if (!choices.length) continue;
    if (examFilter && exam !== examFilter) continue;
    rows.push({ file: f, id, exam, topic, diff: +diff, stem, choices, ai: +ai, explanation });
  }
}

const fails = [];
const warns = [];

// --- pull numbers out of text, normalised (strip $ , % and trailing .00)
const WORD_NUM = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8,
  nine:9, ten:10, eleven:11, twelve:12, fifteen:15, twenty:20, thirty:30, forty:40,
  fifty:50, sixty:60, seventy:70, eighty:80, ninety:90, hundred:100 };

// allowWords: explanations freely mix "three years" with "10 years", so they
// always contribute BOTH. An answer choice only falls back to spelled numbers
// when it contains no digits of its own — otherwise prose leaks in as values.
const numbersIn = (s, allowWords = true) => {
  const out = new Set();
  for (const m of s.matchAll(/-?\$?\s?\d[\d,]*\.?\d*\s?%?/g)) {
    let t = m[0].replace(/[$,%\s]/g, "");
    if (!t || t === "-" || t === ".") continue;
    const n = Number(t);
    if (!Number.isFinite(n)) continue;
    out.add(Math.abs(n));
  }
  // Spelled numbers ("three years" vs "3 years") — but ONLY when the text
  // has no digits of its own. Otherwise prose words leak in as values: the
  // "one" in "divided by ONE minus the tax rate" matched a 1 in the
  // explanation and masked a genuinely wrong answer (sie-muni-q2, whose
  // choice read 3.72% while its own explanation computed 3.95%).
  if (allowWords) {
    for (const w of s.toLowerCase().matchAll(/\b([a-z]+)\b/g)) {
      if (WORD_NUM[w[1]] !== undefined) out.add(WORD_NUM[w[1]]);
    }
  }
  return out;
};

// A question is fine if the explanation's number matches the answer to
// ROUNDING — an explanation computing 2.28% against a "2.3%" choice is
// correct, not a defect. 1.5% relative tolerance, or 0.05 absolute for
// small values.
const closeTo = (a, b) => {
  if (a === b) return true;
  const diff = Math.abs(a - b);
  return diff <= 0.05 || diff / Math.max(Math.abs(a), Math.abs(b)) <= 0.015;
};
const anyClose = (setA, setB) => [...setA].some((a) => [...setB].some((b) => closeTo(a, b)));

for (const r of rows) {
  const correct = r.choices[r.ai];

  // 5. structural
  if (r.ai < 0 || r.ai >= r.choices.length) {
    fails.push([r, `answerIndex ${r.ai} out of range (${r.choices.length} choices)`]);
    continue;
  }
  if (!r.stem.trim()) fails.push([r, "empty stem"]);
  if (r.choices.some((c) => !c.trim())) fails.push([r, "empty choice"]);

  // 2. duplicate choices within one question
  //
  // CAREFUL: the first version of this stripped everything except [a-z0-9.],
  // which destroyed the sign and the operators — so "+13.4%" and "−13.4%"
  // normalised identical, as did "n − 1" / "n + 1" and two put-call parity
  // formulas differing only in a minus. That produced 11 false FAILs, and
  // "fixing" them would have broken correct questions. Signs and operators
  // ARE the answer in a finance bank. Only case and whitespace are noise.
  const norm = (c) =>
    c
      .toLowerCase()
      .replace(/[−–—]/g, "-") // unicode minus/dashes -> ascii
      .replace(/[²]/g, "^2")            // superscript two
      .replace(/\s+/g, "")
      .replace(/[,;:!?'"()]/g, ""); // NOTE: "." is KEPT — stripping it merged "$24 trillion" with "$2.4 trillion" and "$7.2M" with "$72M"
  const seen = new Map();
  for (const [i, c] of r.choices.entries()) {
    const k = norm(c);
    if (seen.has(k)) fails.push([r, `choices ${seen.get(k)} and ${i} are identical: "${c}"`]);
    else seen.set(k, i);
  }

  // 4. letter references that contradict answerIndex
  const L = "ABCDEFGH";
  for (const m of r.explanation.matchAll(
    /\b(?:choice|option)\s+([A-H])\s+is\s+(?:the\s+)?correct/gi
  )) {
    if (L.indexOf(m[1].toUpperCase()) !== r.ai)
      fails.push([r, `explanation says choice ${m[1]} is correct, answerIndex is ${L[r.ai]}`]);
  }

  // 1. numeric agreement — only for questions that are actually numeric
  const correctDigits = numbersIn(correct, false);
  const correctNums = correctDigits.size ? correctDigits : numbersIn(correct, true);
  if (correctNums.size) {
    const explNums = numbersIn(r.explanation);
    // Does ANY number in the correct answer appear in the explanation?
    const overlap = anyClose(correctNums, explNums);
    if (!overlap && explNums.size) {
      warns.push([
        r,
        `no number from the correct answer ("${correct.slice(0, 46)}") appears in its explanation`,
      ]);
    }
    // Stronger signal: a DISTRACTOR's number matches the explanation but
    // the correct answer's does not — the classic transcription slip.
    //
    // Gate this on the correct answer containing actual DIGITS. When the
    // answer is prose ("One year or less") there is no arithmetic to verify,
    // and a good explanation names the distractors to explain why they are
    // wrong — so their spelled numbers ("two to ten years") appear and the
    // check fires on correct questions. Only run it where a number is
    // genuinely being asserted.
    for (const [i, c] of (correctDigits.size ? r.choices.entries() : [])) {
      if (i === r.ai) continue;
      const cd = numbersIn(c, false);
      const dn = cd.size ? cd : numbersIn(c, true);
      const distractorMatches = anyClose(dn, explNums) && !anyClose(dn, correctNums);
      if (distractorMatches && !overlap) {
        fails.push([
          r,
          `explanation's numbers match DISTRACTOR ${L[i]} ("${c.slice(0, 40)}") but not the marked answer`,
        ]);
      }
    }
  }
}

// 3. cross-bank duplicate stems
const stemKey = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim().slice(0, 110);
const byStem = new Map();
for (const r of rows) {
  const k = stemKey(r.stem);
  if (!byStem.has(k)) byStem.set(k, []);
  byStem.get(k).push(r);
}
for (const [, group] of byStem) {
  if (group.length > 1) {
    const exams = [...new Set(group.map((g) => g.exam))];
    const ids = group.map((g) => `${g.exam}/${g.id}`).join(", ");
    // same exam = a real duplicate; different exams = shared topic, allowed
    if (exams.length === 1) fails.push([group[0], `duplicate stem within ${exams[0]}: ${ids}`]);
    else warns.push([group[0], `same stem across exams (ok if intentional): ${ids}`]);
  }
}

// --- report ---
const show = (list, label) => {
  if (!list.length) return;
  console.log(`\n${label} (${list.length})`);
  for (const [r, msg] of list.slice(0, 40)) {
    console.log(`  [${r.exam}/${r.id}] ${msg}`);
  }
  if (list.length > 40) console.log(`  … and ${list.length - 40} more`);
};

console.log(`Verified ${rows.length} questions${examFilter ? ` (exam: ${examFilter})` : ""}`);
show(warns, "WARN — worth a human look");
show(fails, "FAIL — definitely wrong");

console.log(
  fails.length
    ? `\nFAILED: ${fails.length} question(s) are wrong and must be fixed.`
    : "\nNo correctness failures."
);
process.exit(fails.length ? 1 : 0);
