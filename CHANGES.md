# Phase 2: RPG Systems — June 11, 2026 (Fable)

`npm run build` verified green (all routes incl. new /profile, /shop, /career).
Everything below is in this folder, ready to commit and push. Suggested message:
"RPG layer: character creation, profile locker, Comp economy + Perks Desk shop, career quest ladder"

## New files (9)

Data layer:
- `src/lib/profile.ts` — player identity: name, study archetype (6 options: Sprinter, Marathoner, Dawn Patrol, Night Desk, Quant, Scholar), avatar config, equipped title. localStorage `certus_profile_v1`.
- `src/lib/economy.ts` — the **Comp** economy: $1 per XP earned (retroactive for existing users) + quest bonuses; spending never touches XP/level. Full Perks Desk catalog: 7 suits, 7 accessories, 6 backdrops, 6 titles across Standard/Premium/Executive/Legacy tiers ($250–$6,000). localStorage `certus_wallet_v1`.
- `src/lib/career.ts` — **The Ladder**: 6 rank tiers (Intern→Partner) gated by existing level thresholds, 22 quests checked against real study state (chapters read, cards mastered, Final scores, readiness rating, streaks, hours). Claiming pays Comp. localStorage `certus_career_v1`.

Avatar:
- `src/components/avatar.tsx` — layered flat-geometric corporate portrait SVG: 6 skin tones, 6 hairstyles, 5 hair colors (free) + suit/accessory/backdrop layers driven by shop items. Backdrops include animated-feel scenes (ticker wall, skyline, reading room, gold vault). Unique SVG ids per instance.

Pages:
- `src/app/(app)/profile/page.tsx` + `ProfileClient.tsx` — **New Hire Onboarding** wizard (name, archetype, live avatar preview, appearance editor) and the **locker**: employee-record identity card, Comp balance, stats strip, working-title selector, trophy case (per-exam Finals), honors wall.
- `src/app/(app)/shop/page.tsx` + `ShopClient.tsx` — **The Perks Desk**: wallet header with lifetime earnings, slot tabs, every item previewed on YOUR avatar, buy → gold burst → equip. Legacy items glow gold.
- `src/app/(app)/career/page.tsx` + `CareerClient.tsx` — **The Ladder** quest map: gold spine fills to your current rank, per-tier briefs, quest progress bars, claim buttons with payouts, locked tiers show level gates. Ends with "Name on the door."

## Changed files (2)

- `src/components/layout/Sidebar.tsx` — new "Career" nav section (Profile, The Ladder, Perks Desk); user box now shows your avatar + display name.
- `src/app/(app)/dashboard/DashboardClient.tsx` — gold NEW HIRE onboarding banner when no profile; avatar + first-name greeting + equipped title in the header.

## Design guardrails kept

- Everything cosmetic; Comp can't buy readiness, spending can't de-level you.
- Gold = achievement only. No emojis. Corporate flavor throughout ("Sign your offer", "paid $400", "Embarrass the board").
- All client-side localStorage, consistent with the rest — same server-side migration caveat when auth returns.

## Phase 1 recap (already pushed earlier)

Serif/gold identity, SVG icon set, Readiness Rating (CCC→AAA), premium reader with completion XP, The Final (boss) re-theme, node-graph skill tree, sidebar polish.
