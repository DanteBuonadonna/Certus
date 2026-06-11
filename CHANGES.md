# UI Overhaul — June 11, 2026 (Fable)

`npm run build` verified green. All changes are in this folder, ready to commit
and push to `DanteBuonadonna/Certus` (suggested message: "UI overhaul: serif/gold
identity, readiness rating, premium reader, exam-day boss, node-graph skill tree").

## New files (4)

- `src/components/icons.tsx` — full SVG icon set replacing every emoji (flame, bolt, shield, trophy, laurel, etc.), per-exam boss crests (shield + emblem), and badge glyph mapping.
- `src/components/ui.tsx` — animated primitives: AnimatedNumber (count-up), ProgressBar (eased fill + moving sheen), ReadinessGauge (credit-rating style, CCC→AAA), Sparkline, ActivityCalendar (GitHub-style with month/weekday labels), GoldBurst particles, LevelUpOverlay ("PROMOTION" card).
- `src/lib/readiness.ts` — the Readiness Score (0–100): reading coverage 30% + flashcard mastery 30% + best mock score 25% + consistency 15%. Graded like a credit instrument (AAA = exam-ready).
- `src/lib/readingProgress.ts` — tracks completed chapters in localStorage (key `certus_reading_v1`).

## Changed files (7)

- `src/app/globals.css` — Fraunces (serif display) + Inter via @import; gold achievement palette (light+dark); elevation/glow tokens; animation library (stagger entrances, sheen, skeleton, particle burst, stamp-in, streak-risk pulse); `.card-i` hover lift; reading progress bar; `.prose-read` serif reading style; `prefers-reduced-motion` support.
- `src/app/layout.tsx` — trivial revert (fonts now load via CSS so builds never depend on network).
- `src/app/(app)/dashboard/DashboardClient.tsx` — serif greeting; icon stat chips with animated counters + streak-at-risk pulse; gold-gradient level bar; **Readiness Rating card** (gauge + component breakdown); 30-day momentum sparkline; proper activity calendar ("Activity ledger"); badges → gold-medallion "Honors"; level-up = full-screen PROMOTION overlay with gold burst; skeleton loaders.
- `src/app/(app)/learn/LearnClient.tsx` — premium reader: scroll progress bar (purple→gold), sticky section nav with active tracking + time-left estimate, numbered serif section headings, serif body type, styled callouts/examples (accent left borders), course progress card on the chapter list, completed checkmarks, **"Mark chapter complete" banks XP** and feeds the readiness score.
- `src/app/(app)/boss/BossClient.tsx` — reframed as **"The Final"**: briefing card with shield crest per exam, integrity shields instead of hearts, circular countdown timer, "resistance" HP bar; results as a **post-exam performance report** with CLEARED / NOT CLEARED stamp and weak-topic drill list.
- `src/app/(app)/skilltree/SkillTreeClient.tsx` — true node graph: central spine with gold fill as you master checkpoints, numbered nodes, connectors, gold mastery glow, laurel at the summit; skeleton loaders.
- `src/components/layout/Sidebar.tsx` — serif wordmark, active-item accent bar, gold Pro chip.

## Design rules going forward

- Emojis are gone from the product UI. Gold (`--gold`) is reserved for achievement/mastery only.
- Serif (`.font-display`) = headings & reading; Inter = UI; mono = numbers/stats.
- New chapters should keep using the block system; the reader styles them automatically.

## Notes

- All gamification logic (XP math, streaks, badges, boss rules) is untouched — this is a presentation + readiness-layer change.
- `certus-repo/` in this folder is junk from a failed clone — delete it, don't commit it.
- Reading completion is a new state dimension: localStorage only for now, same caveat as the rest (move server-side when auth returns).
