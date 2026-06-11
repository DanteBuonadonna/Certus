# Phase 3: Game Feel ("juice") — June 11, 2026 (Fable)

`npm run build` verified green. Ready to commit and push. Suggested message:
"Game feel v2: juice system, expressive animated avatar, loot shop, serpentine quest path, battle FX"

Design rule established: **two visual worlds.** Study surfaces (reading, practice,
dashboard analytics) stay professional serif/gold. Game surfaces (profile, shop,
ladder, boss, rewards) get the Duolingo-grade juice system.

## Changed files (7)

- `src/app/globals.css` — new GAME LAYER: chunky 3D press-down buttons (`.btn-game` + primary/gold/green/ghost variants), thick `.card-game`, fat striped animated progress bars, rarity tier color tokens, springy `popIn`/`wiggle`, screen `shake`, `gold-flash`, pulsing claim rings, bouncing markers, rotating sunburst `.rays`, falling `.coin` shower, legacy-tier shimmer, avatar blink + idle-bob keyframes, OWNED ribbon. All reduced-motion safe.
- `src/components/avatar.tsx` — **Avatar v2, a character not a portrait**: bigger expressive head, lit eyes with highlights that *blink*, idle breathing bob, three moods (confident/determined/neutral — brows + mouth change; streak state drives it), detailed tailoring (collar wings, buttons, working watch with hands), richer backdrops (skyline with moon, ticker wall with chart line, glinting gold vault), ground shadow. Same config schema — existing avatars upgrade automatically.
- `src/app/(app)/profile/ProfileClient.tsx` — **The Stage**: avatar presented big on a gold podium under a rotating spotlight; XP bar to next level on the identity card; chunky game buttons; archetype cards and swatches with 3D press effects.
- `src/app/(app)/shop/ShopClient.tsx` — **loot shop**: rarity-framed cards (grey/blue/purple/gold frames with matching 3D shadows + star count), rarity band header, gold coin icon currency chips, OWNED corner ribbons, legacy items shimmer, buy = wiggle + gold burst, wallet bar with gold gradient.
- `src/app/(app)/career/CareerClient.tsx` — **serpentine quest path**: big 62px 3D circular nodes zig-zagging down the page with dotted curve connectors (gold once claimed), bouncing "YOU ARE HERE" / "CLAIM!" marker, pulsing gold claimable nodes, tap a node → pop-in detail bubble with striped progress + claim button, rank checkpoint banners (briefcase → trophy when cleared, shimmer on gold).
- `src/app/(app)/boss/BossClient.tsx` — battle FX: **screen shake** on wrong answers, **gold flash** on correct, segmented HP bar that cracks away per hit.
- `src/components/ui.tsx` — LevelUpOverlay v2: full PROMOTION moment with rotating sunburst rays, coin shower, gold burst, big serif type. New exported `CoinShower` component.

## No data/logic changes

All stores, quest definitions, prices, and game math are untouched — this phase is purely presentation. No new files, no migrations.
