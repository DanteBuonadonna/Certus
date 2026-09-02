#!/usr/bin/env node
// ============================================================
// Certus — accessibility guardrail
//
// WHY THIS EXISTS
// WCAG 2.1 AA is not a polish item for this business: it is a procurement
// gate. US public colleges buy against Section 508 and ask for a VPAT, and
// "we'll get to it" ends the conversation. An audit on 2026-08-26 found the
// whole app carried 7 aria- attributes and one :focus rule, and the core
// answer loop — four bare buttons in a div — was unusable without sight.
//
// This catches the regressions that would quietly undo that work. It is a
// STATIC check: it cannot judge contrast ratios, focus order, or whether a
// label is meaningful. It catches the mechanical failures, which is most of
// them. Real conformance still needs a screen reader and a keyboard.
//
//   node scripts/audit-a11y.mjs
//   node scripts/audit-a11y.mjs --verbose   # every finding, with lines
//
// Exit 1 on any error-level finding.
// ============================================================

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const ROOT = new URL("..", import.meta.url).pathname;
const VERBOSE = process.argv.includes("--verbose");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".tsx")) out.push(p);
  }
  return out;
}

// Text that carries no accessible name on its own. A button whose only child
// is one of these is a button a screen reader announces as nothing useful.
const BARE_GLYPHS = /^[\s{}"'`]*(?:[ -㌀\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}✓✔✕✖✗×→←↑↓·•▴▾▲▼]|&[a-z]+;)+[\s{}"'`]*$/u;

const RULES = [
  {
    id: "clickable-div",
    level: "error",
    what: "onClick on a non-interactive element (not keyboard reachable)",
    wcag: "2.1.1 Keyboard (A)",
    test: (src) => {
      const out = [];
      const re = /<(div|span|li|td|p|section|article)\b/g;
      let m;
      while ((m = re.exec(src))) {
        // Find the real end of the opening tag. indexOf(">") is wrong here:
        // `onClick={() => close()}` contains a ">" inside the arrow function,
        // which truncated the tag and made this rule miss every attribute
        // after the handler. Track brace depth instead.
        let i = m.index + m[0].length;
        let depth = 0;
        while (i < src.length) {
          const c = src[i];
          if (c === "{") depth++;
          else if (c === "}") depth--;
          else if (c === ">" && depth === 0) break;
          i++;
        }
        const tag = src.slice(m.index, i + 1);
        if (!/\bonClick=/.test(tag)) continue;
        // A real role + tabIndex makes it legitimate.
        if (/\brole=/.test(tag) && /\btabIndex=/.test(tag)) continue;
        // A self-closing aria-hidden scrim is out of the a11y tree entirely and
        // the click is a mouse convenience; Escape is the keyboard path.
        // NOTE: this only holds for a scrim with NO children — aria-hidden on a
        // backdrop that WRAPS the dialog would hide the dialog too.
        if (/aria-hidden=["{]?true/.test(tag) && /\/>\s*$/.test(tag)) continue;
        // A dismissal backdrop wrapping a role="dialog" panel: the panel owns
        // the keyboard contract via useDialog (Escape + focus management).
        // useDialog returns panelProps, but callers rename it (sheetProps,
        // levelUpProps) when a file has more than one dialog. Match the
        // convention, not one literal name.
        if (/\{\.\.\.\w*[Pp]rops\}|role="dialog"/.test(src.slice(m.index, m.index + 700))) continue;
        out.push({ index: m.index, snippet: tag.replace(/\s+/g, " ").slice(0, 100) });
      }
      return out;
    },
  },
  {
    id: "img-no-alt",
    level: "error",
    what: "<img> without an alt attribute",
    wcag: "1.1.1 Non-text Content (A)",
    test: (src) => {
      const out = [];
      const re = /<img\b[^>]*>/g;
      let m;
      while ((m = re.exec(src))) {
        if (!/\balt=/.test(m[0])) out.push({ index: m.index, snippet: m[0].slice(0, 100) });
      }
      return out;
    },
  },
  {
    id: "glyph-only-button",
    level: "error",
    what: "Button whose only content is an icon or glyph, with no accessible name",
    wcag: "4.1.2 Name, Role, Value (A)",
    test: (src) => {
      const out = [];
      const re = /<button\b([^>]*)>([\s\S]{0,120}?)<\/button>/g;
      let m;
      while ((m = re.exec(src))) {
        const [, attrs, body] = m;
        if (/aria-label|aria-labelledby|title=/.test(attrs)) continue;
        // Strip nested elements marked aria-hidden — those are decorative and
        // the name must come from elsewhere, which we just checked for.
        const text = body.replace(/<[^>]+>/g, "").trim();
        if (!text) continue;
        if (BARE_GLYPHS.test(text)) out.push({ index: m.index, snippet: m[0].slice(0, 110) });
      }
      return out;
    },
  },
  {
    id: "input-no-label",
    level: "error",
    what: "Form control with no label, aria-label or aria-labelledby",
    wcag: "3.3.2 Labels or Instructions (A)",
    test: (src) => {
      const out = [];
      const re = /<(input|select|textarea)\b([^>]*)>/g;
      let m;
      while ((m = re.exec(src))) {
        const attrs = m[2];
        if (/aria-label|aria-labelledby|\bid=/.test(attrs)) continue;
        if (/type=["']?(hidden|submit|button)/.test(attrs)) continue;
        out.push({ index: m.index, snippet: m[0].slice(0, 100) });
      }
      return out;
    },
  },
  {
    id: "positive-tabindex",
    level: "error",
    what: "Positive tabIndex — hijacks the natural focus order",
    wcag: "2.4.3 Focus Order (A)",
    test: (src) => {
      const out = [];
      const re = /tabIndex=\{?\s*([1-9]\d*)/g;
      let m;
      while ((m = re.exec(src))) out.push({ index: m.index, snippet: m[0] });
      return out;
    },
  },
  {
    id: "svg-unlabelled",
    level: "warn",
    what: "Inline <svg> with neither aria-hidden nor a role/label — decorative icons should be hidden",
    wcag: "1.1.1 Non-text Content (A)",
    test: (src) => {
      const out = [];
      const re = /<svg\b([^>]*)>/g;
      let m;
      while ((m = re.exec(src))) {
        if (/aria-hidden|\brole=|aria-label/.test(m[1])) continue;
        out.push({ index: m.index, snippet: m[0].slice(0, 90) });
      }
      return out;
    },
  },
  {
    id: "autofocus",
    level: "warn",
    what: "autoFocus moves focus without user intent — legitimate inside a dialog the user just opened, a problem on page load",
    wcag: "3.2.1 On Focus (A)",
    test: (src) => {
      const out = [];
      const re = /\bautoFocus\b/g;
      let m;
      while ((m = re.exec(src))) out.push({ index: m.index, snippet: "autoFocus" });
      return out;
    },
  },
];

// ---- run -----------------------------------------------------------------

const files = [...walk(join(ROOT, "src/app")), ...walk(join(ROOT, "src/components"))];
const findings = [];

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const rel = file.replace(ROOT, "");
  for (const rule of RULES) {
    for (const hit of rule.test(src)) {
      const line = src.slice(0, hit.index).split("\n").length;
      findings.push({ rule, file: rel, line, snippet: hit.snippet.replace(/\s+/g, " ") });
    }
  }
}

const errors = findings.filter((f) => f.rule.level === "error");
const warns = findings.filter((f) => f.rule.level === "warn");

console.log("\nCERTUS — ACCESSIBILITY AUDIT");
console.log("=".repeat(74));
console.log(`Scanned ${files.length} components.\n`);

function report(list, heading) {
  if (!list.length) return;
  console.log(heading);
  const byRule = new Map();
  for (const f of list) {
    if (!byRule.has(f.rule.id)) byRule.set(f.rule.id, []);
    byRule.get(f.rule.id).push(f);
  }
  for (const [id, group] of byRule) {
    const { what, wcag } = group[0].rule;
    console.log(`  ${id} — ${group.length} finding(s)`);
    console.log(`    ${what}`);
    console.log(`    WCAG ${wcag}`);
    const show = VERBOSE ? group : group.slice(0, 5);
    for (const f of show) {
      console.log(`      ${f.file}:${f.line}`);
      console.log(`        ${f.snippet.slice(0, 96)}`);
    }
    if (!VERBOSE && group.length > 5) console.log(`      ... and ${group.length - 5} more (--verbose)`);
  }
  console.log("");
}

report(errors, "ERRORS — these break the experience for someone using a keyboard or screen reader");
report(warns, "WARNINGS — check these by hand");

// Positive checks: foundations that must exist somewhere.
const globals = readFileSync(join(ROOT, "src/app/globals.css"), "utf8");
const appLayout = readFileSync(join(ROOT, "src/app/(app)/layout.tsx"), "utf8");
const rootLayout = readFileSync(join(ROOT, "src/app/layout.tsx"), "utf8");
const foundations = [
  [":focus-visible indicator", /:focus-visible/.test(globals), "2.4.7 Focus Visible (AA)"],
  ["sr-only utility", /\.sr-only\s*\{/.test(globals), "supports 1.3.1 / 4.1.3"],
  ["prefers-reduced-motion", /prefers-reduced-motion/.test(globals), "2.3.3 Animation from Interactions (AAA)"],
  ["skip link", /skip-link/.test(appLayout) && /\.skip-link/.test(globals), "2.4.1 Bypass Blocks (A)"],
  ["html lang", /<html[^>]*lang=/.test(rootLayout), "3.1.1 Language of Page (A)"],
];

console.log("FOUNDATIONS");
let missing = 0;
for (const [name, ok, wcag] of foundations) {
  console.log(`  ${ok ? "✓" : "✗"} ${name.padEnd(28)} ${wcag}`);
  if (!ok) missing++;
}
console.log("");

console.log("=".repeat(74));
console.log(`${errors.length} error(s), ${warns.length} warning(s), ${missing} missing foundation(s).`);
console.log("Static analysis only — it cannot judge contrast, focus order or whether");
console.log("a label is meaningful. Conformance still needs a keyboard and a screen reader.\n");
process.exit(errors.length || missing ? 1 : 0);
