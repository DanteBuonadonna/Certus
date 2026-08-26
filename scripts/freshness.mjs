#!/usr/bin/env node
// ============================================================
// Certus — content freshness checker
//
// WHY THIS EXISTS
// Two dated facts went stale in the content and both were caught by luck
// rather than by process:
//   · T+1 settlement (effective May 2024) — the bank still said T+2/T+3
//   · CPA BEC retirement (Jan 2024) — replaced by the Discipline sections
// A third nearly shipped: FINRA raised the SIE fee $80 -> $100 and the
// Series 7 fee $300 -> $395 in January 2026.
//
// The pattern: exam sponsors change fees, formats, passing standards and
// settlement rules on their own schedule, and nothing in this repo watches
// for it. A question bank that is quietly wrong is worse than a small one.
//
// WHAT THIS DOES
// It cannot know what changed — no script can. What it CAN do is find every
// dated claim in the content and tell you which ones are due for
// re-verification against the sponsor's own page, so the check is a
// scheduled chore instead of a lucky catch.
//
//   node scripts/freshness.mjs           # what's due now
//   node scripts/freshness.mjs --all     # every tracked claim
//   node scripts/freshness.mjs --json    # machine-readable, for CI
//
// Exit 1 when something is overdue, so it can gate a scheduled task.
// ============================================================

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const ROOT = new URL("..", import.meta.url).pathname;
const CONTENT = join(ROOT, "src/content");
const args = process.argv.slice(2);
const SHOW_ALL = args.includes("--all");
const AS_JSON = args.includes("--json");

// ---- The register of dated claims ---------------------------------------
// Each entry: what the claim is, the regex that finds it in the content, the
// authority that decides it, and how often it needs re-checking.
//
// ADD TO THIS whenever you write a fact that a sponsor could change. The cost
// of an entry is one grep; the cost of a missed change is a wrong answer in
// front of a paying candidate.
const CLAIMS = [
  {
    id: "settlement-cycle",
    what: "Securities settlement cycle (currently T+1)",
    pattern: /\bT\+[0-9]\b/g,
    authority: "SEC Rule 15c6-1 — sec.gov",
    everyDays: 180,
    lastVerified: "2026-08-26",
    note: "Moved T+2 -> T+1 in May 2024. Any T+2 or T+3 in the banks is a bug unless it's a historical aside or a distractor.",
  },
  {
    // Separate, stricter check: T+2/T+3 asserted as the CURRENT cycle. This is
    // the one that actually shipped wrong once, so it gets its own entry
    // rather than hiding inside the general settlement count.
    id: "settlement-stale-assertion",
    what: "T+2 / T+3 asserted as the current settlement cycle",
    pattern: /(?:settle(?:s|ment)?|regular way)[^.]{0,60}\bT\+[23]\b/gi,
    authority: "SEC Rule 15c6-1 — sec.gov",
    everyDays: 180,
    lastVerified: "2026-08-26",
    note: "T+1 has been the cycle since May 2024. Most matches are legitimate — a T+3 distractor, or prose contrasting old with new. Eyeball the lines below; this does not fail the build.",
    // NOT flagIfFound. The first version of this check hard-failed on six
    // matches and every one was correct: a T+3 answer choice, "now T+1, not
    // T+2", and "shortening the cycle from T+2 to T+1". A regex cannot tell a
    // stale assertion from a deliberate historical reference, and a checker
    // that cries wolf gets muted. So it lists the sites for a human glance
    // instead of claiming a bug it can't actually detect.
    review: true,
    showLines: true,
  },
  {
    id: "sie-fee",
    what: "SIE exam fee (currently $100)",
    pattern: /SIE[^.]{0,80}\$\d{2,4}|\$\d{2,4}[^.]{0,40}SIE/gi,
    authority: "FINRA — finra.org",
    everyDays: 180,
    lastVerified: "2026-08-26",
    note: "Raised $80 -> $100 effective January 2026.",
  },
  {
    id: "series7-fee",
    what: "Series 7 exam fee (currently $395)",
    pattern: /Series 7[^.]{0,80}\$\d{3,4}|\$\d{3,4}[^.]{0,40}Series 7/gi,
    authority: "FINRA — finra.org",
    everyDays: 180,
    lastVerified: "2026-08-26",
    note: "Raised $300 -> $395 effective January 2026.",
  },
  {
    id: "series66-fee",
    what: "Series 66 exam fee (currently $177)",
    pattern: /Series 66[^.]{0,80}\$\d{3,4}|\$\d{3,4}[^.]{0,40}Series 66/gi,
    authority: "NASAA — nasaa.org",
    everyDays: 365,
    lastVerified: "2026-08-26",
  },
  {
    id: "cfa-fee",
    what: "CFA registration fee (currently $1,140 early / $1,490 standard)",
    pattern: /\$1,(140|490)/g,
    authority: "CFA Institute — cfainstitute.org",
    everyDays: 365,
    lastVerified: "2026-08-26",
    note: "CFA Institute reprices annually. Check both the early and standard tiers.",
  },
  {
    id: "cfa-topic-weights",
    what: "CFA topic weights (Levels I–III)",
    pattern: /topic weights|blueprint weight/gi,
    authority: "CFA Institute curriculum outline",
    everyDays: 365,
    lastVerified: "2026-08-26",
    note: "Weights are published as ranges and shift between curriculum years. Our blueprints use range midpoints.",
  },
  {
    id: "series7-passing",
    what: "Series 7 passing score (currently 72%)",
    pattern: /72%/g,
    authority: "FINRA content outline",
    everyDays: 365,
    lastVerified: "2026-08-26",
  },
  {
    id: "series66-passing",
    what: "Series 66 passing score (currently 73 of 100)",
    pattern: /73[- ]of[- ]100|73 out of 100/gi,
    authority: "NASAA test specifications, eff. 12 June 2023",
    everyDays: 365,
    lastVerified: "2026-08-26",
  },
  {
    id: "cpa-sections",
    what: "CPA exam sections (AUD / FAR / REG + Discipline)",
    pattern: /\bBEC\b/g,
    authority: "AICPA — aicpa.org",
    everyDays: 365,
    lastVerified: "2026-08-26",
    note: "BEC was retired in January 2024 under CPA Evolution. A LIVE BEC reference is a bug; explaining that it was retired is correct content.",
    // A match here is BAD — but only when BEC is being presented as a current
    // section. The content legitimately explains that BEC was retired, and
    // warns candidates that material still organised around it is out of date.
    // Without this exclusion the checker cried wolf on its own first run: 8
    // matches, all of them correct prose.
    flagIfFound: true,
    contextExclude: /retire|former|post-BEC|no longer|predates|out of date|was retired/i,
    contextWindow: 200,
  },
  {
    id: "reg-t-margin",
    what: "Regulation T initial margin (currently 50%)",
    pattern: /Regulation T|Reg T/g,
    authority: "Federal Reserve Board",
    everyDays: 365,
    lastVerified: "2026-08-26",
  },
  {
    id: "contribution-limits",
    what: "Retirement contribution limits (IRA / 401k) — CFP and CPA content",
    pattern: /contribution limit|\$7,000|\$23,500|\$24,500/gi,
    authority: "IRS — irs.gov, adjusted annually",
    everyDays: 365,
    lastVerified: "2026-08-26",
    note: "The IRS adjusts these EVERY year. This is the single most reliably-stale category in the bank.",
  },
];

// ---- helpers -------------------------------------------------------------

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".ts") || name.endsWith(".md")) out.push(p);
  }
  return out;
}

function daysSince(iso) {
  const then = new Date(iso + "T00:00:00").getTime();
  return Math.floor((Date.now() - then) / 86400000);
}

// ---- scan ----------------------------------------------------------------

const files = walk(CONTENT);
const corpus = files.map((f) => ({ file: f.replace(ROOT, ""), text: readFileSync(f, "utf8") }));

const results = CLAIMS.map((claim) => {
  let hits = 0;
  const where = new Set();
  const sites = [];
  for (const { file, text } of corpus) {
    // Re-create the regex per file: a /g regex carries lastIndex between
    // calls, and reusing one across 84 files silently skips matches.
    const re = new RegExp(claim.pattern.source, claim.pattern.flags);
    let m;
    while ((m = re.exec(text)) !== null) {
      // A claim can declare surrounding words that make the match legitimate —
      // "T+2" inside a sentence about the OLD cycle isn't a stale fact, it's
      // history. Look at a window either side before counting it.
      if (claim.contextExclude) {
        const w = claim.contextWindow ?? 160;
        const ctx = text.slice(Math.max(0, m.index - w), m.index + m[0].length + w);
        if (claim.contextExclude.test(ctx)) continue;
      }
      hits++;
      where.add(file);
      if (claim.showLines) {
        const line = text.slice(0, m.index).split("\n").length;
        const src = text.split("\n")[line - 1].trim();
        sites.push({ file, line, text: src.length > 120 ? src.slice(0, 117) + "..." : src });
      }
      if (!re.global) break;
    }
  }
  const age = daysSince(claim.lastVerified);
  const overdue = age >= claim.everyDays;
  const dueIn = claim.everyDays - age;
  return {
    ...claim,
    pattern: String(claim.pattern),
    hits,
    sites,
    files: [...where].sort(),
    ageDays: age,
    overdue,
    dueIn,
    // A flagIfFound claim is a problem the moment it matches anything.
    violated: !!claim.flagIfFound && hits > 0,
    // A review claim just wants human eyes; it never fails the build.
    needsReview: !!claim.review && hits > 0,
  };
});

if (AS_JSON) {
  console.log(JSON.stringify({ generated: new Date().toISOString(), results }, null, 2));
  process.exit(results.some((r) => r.overdue || r.violated) ? 1 : 0);
}

// ---- report --------------------------------------------------------------

console.log("\nCERTUS — CONTENT FRESHNESS");
console.log("=".repeat(74));
console.log(`Scanned ${corpus.length} content files against ${CLAIMS.length} tracked claims.\n`);

const violations = results.filter((r) => r.violated);
const review = results.filter((r) => r.needsReview);
const overdue = results.filter((r) => r.overdue && !r.violated);
const ok = results.filter((r) => !r.overdue && !r.violated && !r.needsReview);

if (violations.length) {
  console.log("RETIRED FACT STILL PRESENT — fix now");
  for (const r of violations) {
    console.log(`  ✗ ${r.what}`);
    console.log(`    ${r.hits} match(es) in ${r.files.length} file(s): ${r.files.slice(0, 4).join(", ")}`);
    if (r.note) console.log(`    ${r.note}`);
  }
  console.log("");
}

if (review.length) {
  console.log("WORTH A GLANCE — not necessarily wrong");
  for (const r of review) {
    console.log(`  ~ ${r.what}  (${r.hits} site(s))`);
    if (r.note) console.log(`    ${r.note}`);
    for (const s of r.sites.slice(0, 8)) {
      console.log(`      ${s.file}:${s.line}`);
      console.log(`        ${s.text}`);
    }
  }
  console.log("");
}

if (overdue.length) {
  console.log("DUE FOR RE-VERIFICATION");
  for (const r of overdue) {
    console.log(`  ! ${r.what}`);
    console.log(`    last checked ${r.ageDays}d ago (every ${r.everyDays}d) · ${r.authority}`);
    console.log(`    ${r.hits} reference(s) across ${r.files.length} file(s)`);
    if (r.note) console.log(`    ${r.note}`);
  }
  console.log("");
}

if (SHOW_ALL || (!overdue.length && !violations.length)) {
  console.log("CURRENT");
  for (const r of ok) {
    console.log(`  ✓ ${r.what.padEnd(52)} due in ${String(r.dueIn).padStart(3)}d · ${r.hits} ref(s)`);
  }
  console.log("");
}

console.log("=".repeat(74));
if (violations.length || overdue.length) {
  console.log(`${violations.length} violation(s), ${overdue.length} overdue.`);
  console.log("Re-verify against the authority, correct the content, then bump");
  console.log("lastVerified in scripts/freshness.mjs.\n");
  process.exit(1);
}
console.log("All tracked claims are within their re-verification window.\n");
