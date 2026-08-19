// ============================================================
// Certus — blueprint coverage
//
// Run: node scripts/coverage.mjs          (summary)
//      node scripts/coverage.mjs --full   (per-topic detail)
//
// WHY THIS EXISTS
// "How complete is the SIE track?" had no answer. Content was written to
// a per-topic quota (Series 7: exactly 11 questions in 13 of 14 topics)
// rather than to the exam's real weighting, and there was no target, so
// "done" meant "felt done". This file is the scorekeeper.
//
// It reports, per exam:
//   - questions vs the blueprint target
//   - per-TOPIC coverage against that topic's real exam weight
//   - difficulty spread vs the 30/45/25 ramp a learner needs
//
// The headline number is deliberately the WORST-CASE reading: a bank that
// is 100% of target overall but empty in one topic is not finished, and
// this reports it as unfinished. It is meant to be hard to fool, including
// by me.
// ============================================================

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = "src/content";
const FULL = process.argv.includes("--full");

// --- read blueprints straight out of the TS source (no build step) ---
const bpSrc = readFileSync(join(DIR, "blueprints.ts"), "utf8");
const blueprints = [];
for (const m of bpSrc.matchAll(
  /examSlug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*examQuestions:\s*(\d+),\s*targetBank:\s*(\d+),\s*source:\s*"([^"]*)",\s*topics:\s*\[([\s\S]*?)\n    \],/g
)) {
  const topics = [...m[6].matchAll(/topicId:\s*"([^"]+)",\s*name:\s*"([^"]*)",\s*weight:\s*([\d.]+)/g)].map(
    (t) => ({ topicId: t[1], name: t[2], weight: Number(t[3]) })
  );
  blueprints.push({
    examSlug: m[1], name: m[2], examQuestions: Number(m[3]),
    targetBank: Number(m[4]), source: m[5], topics,
  });
}

// --- chapter topic -> blueprint topic map ---
const mapSrc = bpSrc.slice(bpSrc.indexOf("export const TOPIC_MAP"));
const TOPIC_MAP = {};
for (const m of mapSrc.matchAll(/^  "?([a-z0-9-]+)"?:\s*\{([\s\S]*?)^  \},/gm)) {
  const exam = m[1]; TOPIC_MAP[exam] = {};
  for (const p of m[2].matchAll(/"?([a-zA-Z0-9-]+)"?:\s*"([a-zA-Z0-9-]+)"/g)) TOPIC_MAP[exam][p[1]] = p[2];
}

// --- read the question banks ---
const banks = new Map(); // exam -> { topicId -> {1:n,2:n,3:n} }
for (const f of readdirSync(DIR).filter((x) => x.endsWith(".ts"))) {
  const src = readFileSync(join(DIR, f), "utf8");
  for (const m of src.matchAll(
    /examSlug:\s*"([^"]+)"[^{]*?topicId:\s*"([^"]+)"[^{]*?difficulty:\s*(\d)[^{]*?stem:/gs
  )) {
    const [, exam, rawTopic, d] = m;
    // fold the chapter topic up to its blueprint topic where a map exists
    const topic = TOPIC_MAP[exam]?.[rawTopic] ?? rawTopic;
    if (!banks.has(exam)) banks.set(exam, new Map());
    const t = banks.get(exam);
    if (!t.has(topic)) t.set(topic, { 1: 0, 2: 0, 3: 0 });
    t.get(topic)[Number(d)]++;
  }
}

const MIX = { 1: 0.30, 2: 0.45, 3: 0.25 };
const pct = (n) => `${(n * 100).toFixed(0)}%`;
const bar = (frac, w = 24) => {
  const n = Math.min(w, Math.round(frac * w));
  return "█".repeat(n) + "░".repeat(w - n);
};

let grandHave = 0, grandTarget = 0;
console.log("\nCERTUS — BLUEPRINT COVERAGE\n" + "=".repeat(74));

for (const bp of blueprints) {
  const bank = banks.get(bp.examSlug) ?? new Map();
  const totalWeight = bp.topics.reduce((s, t) => s + t.weight, 0);
  let have = 0, topicPcts = [];

  const rows = bp.topics.map((t) => {
    const d = bank.get(t.topicId) ?? { 1: 0, 2: 0, 3: 0 };
    const n = d[1] + d[2] + d[3];
    const target = Math.round((t.weight / totalWeight) * bp.targetBank);
    have += n;
    topicPcts.push(target ? Math.min(1, n / target) : 1);
    return { ...t, n, target, d };
  });

  // questions sitting under a topicId the blueprint doesn't know about —
  // these are real questions that currently count toward NOTHING.
  const known = new Set(bp.topics.map((t) => t.topicId));
  let orphan = 0, orphanIds = [];
  for (const [tid, d] of bank) {
    if (!known.has(tid)) { orphan += d[1] + d[2] + d[3]; orphanIds.push(tid); }
  }

  grandHave += have; grandTarget += bp.targetBank;
  const overall = have / bp.targetBank;
  // worst-case: the weakest topic gates the track
  const weakest = topicPcts.length ? Math.min(...topicPcts) : 0;

  console.log(
    `\n${bp.name}  (${bp.examSlug})` +
    `\n  ${bar(overall)}  ${pct(overall)} of target   ${have} / ${bp.targetBank} questions` +
    `\n  weakest topic: ${pct(weakest)}   ← the track is only as done as this` +
    `\n  blueprint: ${bp.source}`
  );
  if (orphan) {
    console.log(`  ⚠ ${orphan} questions on topicIds not in the blueprint (count toward nothing): ${orphanIds.join(", ")}`);
  }

  // difficulty spread across the whole bank
  const tot = { 1: 0, 2: 0, 3: 0 };
  for (const r of rows) for (const k of [1, 2, 3]) tot[k] += r.d[k];
  const sum = tot[1] + tot[2] + tot[3];
  if (sum) {
    const off = [1, 2, 3].map((k) => Math.abs(tot[k] / sum - MIX[k]));
    const bad = Math.max(...off) > 0.08;
    console.log(
      `  difficulty: easy ${pct(tot[1] / sum)} / med ${pct(tot[2] / sum)} / hard ${pct(tot[3] / sum)}` +
      `   target 30/45/25 ${bad ? "← OFF BALANCE" : "✓"}`
    );
  }

  if (FULL) {
    console.log("  " + "-".repeat(70));
    for (const r of rows.sort((a, b) => a.n / (a.target || 1) - b.n / (b.target || 1))) {
      const f = r.target ? Math.min(1, r.n / r.target) : 1;
      console.log(
        `  ${bar(f, 14)} ${String(pct(f)).padStart(4)}  ${String(r.n).padStart(4)}/${String(r.target).padEnd(4)}  ` +
        `${r.name.slice(0, 40)}`
      );
    }
  }
}

console.log("\n" + "=".repeat(74));
console.log(
  `TOTAL  ${bar(grandHave / grandTarget, 30)}  ${pct(grandHave / grandTarget)}` +
  `   ${grandHave} / ${grandTarget} questions   (${grandTarget - grandHave} to write)`
);
console.log("\nA track is FINISHED when every topic hits its target at 30/45/25.");
console.log("Run with --full for per-topic detail.\n");
