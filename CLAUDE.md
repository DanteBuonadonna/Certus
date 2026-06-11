# Certus — project context & handoff

Read this first. It's the fast path to understanding the project so you can
continue building without re-deriving everything.

## What Certus is
A gamified study platform for finance's hardest exams (tagline: "The certain
path to certified"). It began as a resume optimizer ("Rezbuild") and was
pivoted to exam prep; the resume tool survives as a minor utility under /optimizer.

## Tech stack
- Next.js 16 (App Router) + React + TypeScript + Tailwind (core utility classes only).
- Supabase (auth + Postgres) — schema in `supabase-schema.sql`.
- Stripe (subscriptions: Monthly $12 / Annual $115). Live at certus-opal.vercel.app.
- Anthropic SDK (powers the legacy resume optimizer only).
- Brand name lives in ONE file: `src/lib/brand.ts` (BRAND.name = "Certus").

## Auth status (IMPORTANT)
Login is currently DISABLED so the app is fully browsable without an account:
- `src/app/(app)/layout.tsx` renders a demo user, no Supabase gate.
- `src/lib/supabase/middleware.ts` is a pass-through (no redirects).
- Landing CTAs point to /dashboard.
To re-enable auth later, restore the Supabase getUser() check + redirect.

## Freemium gating (client-side MVP)
- `src/lib/access.ts` — FREE_EXAM = "cfa"; isPro() reads localStorage "certus_pro".
- `src/lib/useAccess.ts` — hook: { pro, ready, canExam(slug), canBoss() }.
- Free users get the full CFA track; all other exams + ALL boss battles are Pro.
- `src/components/UpgradeGate.tsx` — <UpgradeCard/> shown on locked content.
- Owner testing: visit /unlock (grants Pro in browser) or /lock (revokes).
- NOTE: this is client-side only. When real accounts return, enforce server-side
  against the Stripe subscription so it can't be bypassed.

## Content system (the heart of the app)
- Model: `src/content/types.ts`. A Chapter has sections; each section can use the
  rich `blocks: Block[]` array. Block kinds: "p", "bullets", "callout", "figure",
  "formula", "table", "example". Older chapters still use legacy paragraphs/bullets/callout.
- Renderer: `src/app/(app)/learn/LearnClient.tsx` (BlockView component).
- Figures are inline SVG strings that MUST use CSS variables for color
  (var(--primary), var(--text-muted), var(--ats-green/red/amber), var(--border),
  var(--bg-card)) so they theme in light/dark. Keep viewBox ~460 wide.
- Content files (registered in `src/content/index.ts`):
  - cfa.ts + cfa-extra.ts (10 chapters), series7.ts (+extra,+wave3), series66.ts,
    cfp.ts, cpa.ts. Each exports chapters[] and questions[].

## The "gold-standard" chapter format (the quality bar)
Each upgraded chapter is a genuine ~18–22 min college-level read with:
- Accurate, worked-through prose (no filler). Numbers must be correct.
- Purposeful figures (graphs/diagrams) — only where they earn their place.
- formula blocks, a table or two, and worked examples (prompt → steps → answer).
- Honest readingMinutes.
Reference exemplars already done: CFA Quant, Fixed Income, FRA, Equity, Derivatives,
Portfolio Management, Economics, Corporate Issuers.

## Gamification
- `src/lib/studyPlan.ts` — XP, levels, streaks, badges, adaptive plan.
- `src/lib/gameStore.ts` — localStorage persistence (key "certus_state_v1").
- `src/lib/flashcards.ts` — Leitner spaced repetition (auto-built from chapter key terms).
- `src/lib/bossExam.ts` — comprehensive timed mock exam ("boss"), per-exam themes,
  weak-topic analysis. UI: `src/app/(app)/boss/BossClient.tsx`.

## Status / what's left
DONE: deploy live; paywall + nav; rich-content engine; 8/10 CFA chapters upgraded.
TODO (depth upgrade to gold standard):
  1. CFA: Ethics, Alternative Investments (last 2).
  2. Then upgrade Series 7, Series 66, CFP, CPA chapters.
Other future work: skill-tree gating consistency; server-side paywall enforcement
when auth is restored; deeper question banks; CFA Levels II/III.

## Build / deploy
- `npm install && npm run build` must stay green. The (app) layout is force-dynamic.
- Live on Vercel (certus-opal.vercel.app), auto-deploys on push to main.
- Env vars are set in Vercel (Supabase, Anthropic, Stripe). `.env.local` is gitignored.
- Rotate any keys that were shared in chat.
