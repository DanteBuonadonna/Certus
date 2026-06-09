# Certus — Deploy Guide

The app builds clean and the git repo is committed. Follow these steps to get it live.
Everything below needs YOUR logged-in accounts, which is why it can't be automated.

---

## 1. Push to GitHub

Create a new EMPTY repo on github.com (no README), then in this folder:

```bash
cd rezbuild
git branch -M main
git remote add origin https://github.com/<your-username>/certus.git
git push -u origin main
```

> Your real `.env.local` is gitignored and will NOT be pushed. Good.

---

## 2. Import into Vercel

1. Go to vercel.com → **Add New… → Project** → import the `certus` repo.
2. Framework preset: **Next.js** (auto-detected). Leave build settings default.
3. Before clicking Deploy, add the **Environment Variables** below.

### Environment variables to paste into Vercel
Copy the values from your local `.env.local`:

| Variable | Where it comes from |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | your `.env.local` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | your `.env.local` |
| `SUPABASE_SERVICE_ROLE_KEY` | your `.env.local` |
| `ANTHROPIC_API_KEY` | your `.env.local` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | your `.env.local` |
| `STRIPE_SECRET_KEY` | **still needed** — real `sk_live_…` or `rk_live_…` |
| `STRIPE_WEBHOOK_SECRET` | **still needed** — from Stripe webhook setup |
| `STRIPE_PRICE_MONTHLY` | **still needed** — Stripe Price ID (`price_…`) |
| `STRIPE_PRICE_ANNUAL` | **still needed** — Stripe Price ID (`price_…`) |
| `NEXT_PUBLIC_APP_URL` | set AFTER first deploy to your Vercel URL |

4. Click **Deploy**. You'll get a live URL like `https://certus.vercel.app`.
5. Set `NEXT_PUBLIC_APP_URL` to that URL and redeploy.

---

## 3. Point Supabase at the live URL

1. In Supabase → **SQL Editor**, run the full contents of `supabase-schema.sql`
   (this creates the gamification tables too — safe to re-run).
2. Supabase → **Authentication → URL Configuration**: set the Site URL and add
   `https://<your-domain>/auth/callback` to redirect URLs.
3. If using Google sign-in, add the same callback URL in Google Cloud Console.

---

## 4. Stripe (when you have real keys)

1. Create two **recurring Prices** in Stripe (monthly + annual) → copy their
   `price_…` IDs into `STRIPE_PRICE_MONTHLY` / `STRIPE_PRICE_ANNUAL`.
2. Add a webhook endpoint: `https://<your-domain>/api/stripe/webhook`,
   event `checkout.session.completed` → copy signing secret to `STRIPE_WEBHOOK_SECRET`.
3. Subscriptions will work once `STRIPE_SECRET_KEY` + the price IDs are set.
   Until then, the rest of the app (reading, practice, dashboard) runs fine.

---

## Status

- ✅ Production build passes (`npm run build`, 20 routes)
- ✅ CFA Level I content wave 1: Ethics, Quant, FRA, Fixed Income + question bank
- ✅ Subscription billing scaffolded
- ⏳ Needs: real Stripe secret + Price IDs; more content waves
