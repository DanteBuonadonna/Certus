# Phase 4: Unlock + Content Engine begins — June 11, 2026 (Fable)

`npm run build` verified green. Suggested commit message:
"Unlock all content; gold-standard CFA Ethics chapter (38-min deep read) + 12 aligned questions"

## Files for this handoff (3)

- `src/lib/access.ts` (changed) — **everything unlocked**: all exams, all Finals (boss battles), no Pro gates anywhere. One flag (`UNLOCK_ALL`) flips the paywall back on later; all the freemium machinery is preserved.
- `src/content/cfa-ethics.ts` (NEW) — the first true gold-standard chapter and the template for all others:
  - ~8,700 words / 38-minute read across 12 sections — Code + PCP enforcement, all 7 Standards covering all 22 sub-standards with the exact tested nuances (strictest-law rule, dissociation, gift rules by source, issuer travel, plagiarism carve-outs, misconduct vs personal life, MNPI + mosaic theory + firewalls, manipulation intent, soft dollars, fair-vs-equal dealing, hot IPO allocation, portfolio-level suitability, unsolicited trades, survivorship bias, confidentiality's three exceptions, departing-employee rules, written-consent comp, supervisor adequacy, group-research dissent, record ownership, conflict prominence, beneficial ownership, referral fee timing, designation usage rules), GIPS (firm-wide claims, composites, 5→10yr history, voluntary verification), and a final section on exam technique with the "looks-like-a-violation-but-isn't" and "looks-innocent-but-violates" memorization lists.
  - 4 worked vignette examples, 3 reference tables, 1 decision-flow figure, 4 testable-nuance callouts.
  - **16 key terms** (these auto-build the ethics flashcard deck — fully aligned to the reading).
  - **12 new exam-style questions** (cfa-eth-q5…q16) with trap-aware explanations, each tied to a specific section of the reading. Combined with the 4 legacy questions: 16 ethics questions feeding Practice and The Final.
- `src/content/cfa.ts` (changed) — imports the new chapter (supersedes the old thin inline ethics chapter) and merges the new question bank.

## Content research basis

Structured to the current CFA Institute Code & Standards (7 Standards / 22 sub-standards) and L1 emphasis confirmed against 2026 prep-provider curricula (AnalystPrep, 300Hours, Kaplan Schweser outlines). All writing is original.

## The pipeline from here (one chapter per handoff)

CFA: Quant → FRA → Fixed Income → Equity → Derivatives → Alts → Portfolio Mgmt → Economics → Corporate Issuers (each rebuilt to ~35–40 min with aligned questions/flashcards), then Series 7, Series 66, CFP, CPA.
