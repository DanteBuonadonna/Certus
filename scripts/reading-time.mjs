// ============================================================
// Certus — honest readingMinutes
//
// Run:  node scripts/reading-time.mjs          (report only)
//       node scripts/reading-time.mjs --write   (correct the values)
//
// WHY THIS EXISTS
// An audit found every chapter in the app overstating its own length,
// often by 5-10x: SIE chapters claimed 14-20 minutes and contained ~2
// minutes of prose; CFA L1 chapters claimed 62-92 minutes and contained
// 4-15. readingMinutes was being set by intent ("this should be a 20
// minute chapter") rather than by what was actually written.
//
// That is a trust problem, not a cosmetic one. A paying customer who
// budgets 20 minutes and finishes in two concludes the product is thin
// -- correctly. CLAUDE.md already required "honest readingMinutes"; this
// script is what makes the requirement enforceable instead of aspirational.
//
// The number is computed from actual prose at 180 wpm (a deliberate,
// study-pace rate, not skimming), plus fixed time for the elements a
// reader genuinely stops on: figures, formulas, tables, worked examples.
// ============================================================

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = "src/content";
const WPM = 180;              // deliberate study pace
const SEC_PER_FIGURE = 30;    // stop, read the caption, map it to the prose
const SEC_PER_FORMULA = 25;
const SEC_PER_TABLE = 35;
const SEC_PER_EXAMPLE = 60;   // work it through, not skim it
const WRITE = process.argv.includes("--write");

const words = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);

let rows = [];
for (const file of readdirSync(DIR).filter((f) => f.endsWith(".ts"))) {
  const path = join(DIR, file);
  let src = readFileSync(path, "utf8");

  // chapter objects start at 2-space indent with an id
  const starts = [...src.matchAll(/^ {2}\{\n {4}id: "/gm)].map((m) => m.index);
  if (!starts.length) continue;
  starts.push(src.length);

  let edits = [];
  for (let i = 0; i < starts.length - 1; i++) {
    const body = src.slice(starts[i], starts[i + 1]);
    const idM = body.match(/id:\s*"([^"]+)"/);
    const rmM = body.match(/readingMinutes:\s*(\d+)/);
    if (!idM || !rmM) continue;

    // prose carriers
    let w = 0;
    for (const re of [
      /(?:text|body|intro|summary|prompt|answer|note|caption|def)":?\s*/g, // placeholder, real match below
    ]);
    for (const m of body.matchAll(/(?:text|body|intro|prompt|answer|note|def):\s*\n?\s*"((?:[^"\\]|\\.)*)"/g))
      w += words(m[1]);
    for (const m of body.matchAll(/items:\s*\[((?:[^\]\\]|\\.)*)\]/g))
      for (const s of m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)) w += words(s[1]);
    for (const m of body.matchAll(/steps:\s*\[((?:[^\]\\]|\\.)*)\]/g))
      for (const s of m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)) w += words(s[1]);
    for (const m of body.matchAll(/rows:\s*\[(.*?)\]\s*\}/gs))
      for (const s of m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)) w += words(s[1]);
    for (const m of body.matchAll(/takeaways:\s*\[((?:[^\]\\]|\\.)*)\]/g))
      for (const s of m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)) w += words(s[1]);

    const count = (re) => (body.match(re) ?? []).length;
    const extraSec =
      count(/kind:\s*"figure"/g) * SEC_PER_FIGURE +
      count(/kind:\s*"formula"/g) * SEC_PER_FORMULA +
      count(/kind:\s*"table"/g) * SEC_PER_TABLE +
      count(/kind:\s*"example"/g) * SEC_PER_EXAMPLE;

    const honest = Math.max(1, Math.round(w / WPM + extraSec / 60));
    const claimed = Number(rmM[1]);
    rows.push({ file, id: idM[1], claimed, honest, w });
    if (claimed !== honest) edits.push({ body, claimed, honest, start: starts[i] });
  }

  if (WRITE && edits.length) {
    // apply back-to-front so offsets stay valid
    for (const e of edits.reverse()) {
      const seg = src.slice(e.start, starts[starts.indexOf(e.start) + 1] ?? src.length);
      const fixed = seg.replace(/readingMinutes:\s*\d+/, `readingMinutes: ${e.honest}`);
      src = src.slice(0, e.start) + fixed + src.slice(e.start + seg.length);
    }
    writeFileSync(path, src);
  }
}

rows.sort((a, b) => b.claimed - b.honest - (a.claimed - a.honest));
const over = rows.filter((r) => r.claimed > r.honest);
const totalClaimed = rows.reduce((a, r) => a + r.claimed, 0);
const totalHonest = rows.reduce((a, r) => a + r.honest, 0);

console.log(`${rows.length} chapters | claimed ${totalClaimed} min | honest ${totalHonest} min\n`);
console.log("worst overstatements:");
for (const r of over.slice(0, 12))
  console.log(
    `  ${r.id.padEnd(24)} ${String(r.claimed).padStart(3)}min claimed -> ${String(r.honest).padStart(3)}min actual  (${r.w} words)`
  );
console.log(WRITE ? "\nWritten." : "\nReport only. Re-run with --write to correct.");
