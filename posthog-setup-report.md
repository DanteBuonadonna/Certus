# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into Certus. The integration covers the full user journey: account creation, learning activity, practice sessions, boss exam attempts, and subscription conversion — both client-side and server-side.

**New files created:**
- `instrumentation-client.ts` — initialises PostHog on the client using Next.js 15.3+ instrumentation API, with reverse-proxy routing and exception tracking enabled.
- `src/lib/posthog-server.ts` — singleton `posthog-node` client for server-side event capture in API routes.
- `next.config.mjs` updated — added `/ingest/*` rewrites so PostHog traffic routes through the app's own domain (avoids ad-blockers, no CORS issues).

**Environment variables added to `.env.local`:**
- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Events instrumented

| Event | Description | File |
|---|---|---|
| `user_signed_up` | User completed account registration | `src/app/(auth)/signup/page.tsx` |
| `user_logged_in` | User signed in successfully | `src/app/(auth)/login/page.tsx` |
| `chapter_started` | User opened a chapter to read | `src/app/(app)/learn/LearnClient.tsx` |
| `chapter_completed` | User clicked "Mark chapter complete" | `src/app/(app)/learn/LearnClient.tsx` |
| `practice_session_completed` | User finished a practice quiz (with accuracy, XP, combo) | `src/app/(app)/practice/PracticeClient.tsx` |
| `boss_exam_started` | User entered the timed Final boss exam | `src/app/(app)/boss/BossClient.tsx` |
| `boss_exam_completed` | User finished the Final (with pass/fail and score) | `src/app/(app)/boss/BossClient.tsx` |
| `upgrade_cta_clicked` | User clicked "Go Pro" from an upgrade gate | `src/components/UpgradeGate.tsx` |
| `checkout_initiated` | User clicked a subscription plan button on billing page | `src/app/(app)/billing/page.tsx` |
| `checkout_session_created` | Stripe checkout session created (server-side) | `src/app/api/stripe/checkout/route.ts` |
| `subscription_activated` | Subscription confirmed via webhook (server-side) | `src/app/api/stripe/webhook/route.ts` |
| `subscription_cancelled` | Subscription deleted via webhook (server-side) | `src/app/api/stripe/webhook/route.ts` |
| `credits_purchased` | Credit pack purchased via webhook (server-side) | `src/app/api/stripe/webhook/route.ts` |

**User identification:** `posthog.identify()` is called with the Supabase user ID as the distinct ID on both signup and login, linking all subsequent events to the same person profile.

## Next steps

We've built a dashboard and five insights to monitor Certus's key metrics:

**Dashboard:** [Analytics basics (wizard)](https://us.posthog.com/project/474925/dashboard/1726684)

**Insights:**
- [Signups over time](https://us.posthog.com/project/474925/insights/xwFVN1Of) — daily new user registrations
- [Subscription conversion funnel](https://us.posthog.com/project/474925/insights/3j9rTlcT) — upgrade CTA → checkout → subscription activated
- [Learning activity](https://us.posthog.com/project/474925/insights/z8cVoleN) — chapter starts vs completions
- [Practice sessions completed](https://us.posthog.com/project/474925/insights/DdUXvReD) — daily sessions and unique learners
- [Boss exam started vs passed](https://us.posthog.com/project/474925/insights/KAtB9XB3) — exam attempts vs passes

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any environment variable documentation so collaborators know what to set. Also add them to Vercel's environment variable settings for the production deployment.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or equivalent) into CI so production stack traces de-minify correctly in PostHog Error Tracking.
- [ ] Confirm the returning-visitor path also calls `identify` — currently `identify` is only called on fresh login/signup. When auth is re-enabled and sessions are restored, a `posthog.identify()` call should be added to the session-restore path so returning users are not left on anonymous distinct IDs.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
