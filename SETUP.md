# Rezbuild — Setup Guide

## Prerequisites
- Node.js 18+ installed
- A Supabase account (supabase.com)
- An Anthropic API key (console.anthropic.com)
- A Stripe account (stripe.com)
- A GitHub account + Vercel account

---

## Step 1: Install dependencies

```bash
cd rezbuild
npm install
```

---

## Step 2: Create your Supabase project

1. Go to [supabase.com](https://supabase.com) → New project
2. Name it `rezbuild`, choose a region close to your users
3. In the SQL editor, paste and run the contents of `supabase-schema.sql`
4. Go to **Settings → API** and copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret` key → `SUPABASE_SERVICE_ROLE_KEY`

### Enable Google Auth (optional but recommended)
5. Go to **Authentication → Providers → Google**
6. Enable it and add your Google OAuth credentials from Google Cloud Console
7. Add your redirect URL: `https://rezbuild.com/auth/callback`

---

## Step 3: Get your Anthropic API key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an API key → paste into `ANTHROPIC_API_KEY`

---

## Step 4: Set up Stripe

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. **Developers → API keys** → copy `Publishable key` and `Secret key`
3. For webhooks:
   - Go to **Developers → Webhooks → Add endpoint**
   - URL: `https://rezbuild.com/api/stripe/webhook`
   - Events: `checkout.session.completed`
   - Copy the **signing secret** → `STRIPE_WEBHOOK_SECRET`

For local development, use the Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## Step 5: Configure environment variables

Copy `.env.local.example` to `.env.local` and fill in all values:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
ANTHROPIC_API_KEY=sk-ant-...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_APP_URL=https://rezbuild.com
```

---

## Step 6: Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Step 7: Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project → select your GitHub repo
3. Add all environment variables from `.env.local` to Vercel (Settings → Environment Variables)
4. Deploy!

Every `git push` to `main` will auto-deploy.

---

## Project structure

```
rezbuild/
├── src/
│   ├── app/
│   │   ├── (auth)/          # Login & signup pages
│   │   ├── (app)/           # Protected app pages (sidebar layout)
│   │   │   ├── optimizer/   # Main optimizer UI
│   │   │   ├── history/     # Past optimizations
│   │   │   ├── billing/     # Stripe credit purchases
│   │   │   └── referral/    # Referral system
│   │   ├── api/             # API routes
│   │   │   ├── optimize/    # POST: calls Anthropic, deducts credit
│   │   │   ├── credits/     # GET: current balance
│   │   │   ├── history/     # GET: optimization history
│   │   │   ├── referral/    # GET: referral data
│   │   │   └── stripe/      # checkout + webhook
│   │   ├── auth/callback/   # Supabase OAuth callback
│   │   ├── ref/[code]/      # Referral redirect → /signup?ref=code
│   │   └── page.tsx         # Landing page
│   ├── components/
│   │   └── layout/Sidebar.tsx
│   ├── lib/
│   │   └── supabase/        # client, server, middleware helpers
│   ├── types/index.ts        # TypeScript types
│   └── middleware.ts         # Auth redirect middleware
├── supabase-schema.sql       # Run this in Supabase SQL editor
├── .env.local.example        # Copy to .env.local and fill in
└── package.json
```

---

## Credits logic

- New user signup: **1 free credit** (via Supabase trigger `handle_new_user`)
- 1 optimization uses **1 credit** (deducted in `/api/optimize`)
- Referrer gets **+3 credits**, referred user gets **+1 bonus credit** (via `award_referral_credits` RPC)
- Purchase credits via Stripe → webhook adds credits to balance

## Stripe Webhook (important!)

The webhook at `/api/stripe/webhook` uses the **service role key** to bypass RLS when adding credits. Make sure `SUPABASE_SERVICE_ROLE_KEY` is set correctly in production.

Also: in Vercel, make sure the Stripe webhook is added with the **production** endpoint URL.
