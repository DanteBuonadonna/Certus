-- ============================================================
-- Rezbuild — Supabase Schema
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. users table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  referral_code TEXT UNIQUE NOT NULL,
  referred_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. credits table
CREATE TABLE IF NOT EXISTS public.credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  balance INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. optimization_history table
CREATE TABLE IF NOT EXISTS public.optimization_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL DEFAULT '',
  role_title TEXT NOT NULL DEFAULT '',
  ats_score_before INTEGER NOT NULL DEFAULT 0,
  ats_score_after INTEGER NOT NULL DEFAULT 0,
  missing_keywords TEXT[] NOT NULL DEFAULT '{}',
  found_keywords TEXT[] NOT NULL DEFAULT '{}',
  optimized_bullets TEXT NOT NULL DEFAULT '',
  optimized_cover_letter TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. referrals table
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  referred_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  credits_awarded BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- Row Level Security (RLS)
-- ============================================================

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.optimization_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

-- users: users can read/update their own row
CREATE POLICY "Users can view their own profile"
  ON public.users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.users FOR UPDATE
  USING (auth.uid() = id);

-- credits: users can read their own credits
CREATE POLICY "Users can view their own credits"
  ON public.credits FOR SELECT
  USING (auth.uid() = user_id);

-- optimization_history: users can CRUD their own history
CREATE POLICY "Users can view their own history"
  ON public.optimization_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own history"
  ON public.optimization_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- referrals: referrers and referred users can view their rows
CREATE POLICY "Users can view referrals they are part of"
  ON public.referrals FOR SELECT
  USING (auth.uid() = referrer_id OR auth.uid() = referred_id);

-- ============================================================
-- Function: auto-create user record + credits on signup
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  new_referral_code TEXT;
  referrer_user_id UUID;
BEGIN
  -- Generate a unique referral code
  new_referral_code := 'rez' || substr(md5(random()::text), 1, 7);

  -- Insert into public.users
  INSERT INTO public.users (id, email, referral_code)
  VALUES (NEW.id, NEW.email, new_referral_code);

  -- Create credits record with 1 free credit
  INSERT INTO public.credits (user_id, balance)
  VALUES (NEW.id, 1);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger: fires after a new auth user is created
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================================
-- Function: award referral credits
-- Call this after first login of referred user
-- ============================================================
CREATE OR REPLACE FUNCTION public.award_referral_credits(p_referred_id UUID)
RETURNS VOID AS $$
DECLARE
  referral_row public.referrals%ROWTYPE;
BEGIN
  -- Find pending referral
  SELECT * INTO referral_row
  FROM public.referrals
  WHERE referred_id = p_referred_id
    AND credits_awarded = FALSE
  LIMIT 1;

  IF FOUND THEN
    -- +3 to referrer
    UPDATE public.credits
    SET balance = balance + 3, updated_at = NOW()
    WHERE user_id = referral_row.referrer_id;

    -- +1 to new user
    UPDATE public.credits
    SET balance = balance + 1, updated_at = NOW()
    WHERE user_id = p_referred_id;

    -- Mark as awarded
    UPDATE public.referrals
    SET credits_awarded = TRUE
    WHERE id = referral_row.id;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- ASCENT — Gamified exam-prep tables
-- (Added in the exam-prep pivot. The web app uses localStorage
--  for v1; these tables enable cloud sync + leaderboards later.)
-- ============================================================

-- Per-user game stats (XP, streak, etc.)
CREATE TABLE IF NOT EXISTS public.user_stats (
  user_id UUID PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  xp INTEGER NOT NULL DEFAULT 0,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_study_date DATE,
  freezes INTEGER NOT NULL DEFAULT 1,
  unlocked_badges TEXT[] NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- A user's study plan for a given exam (their "climb").
CREATE TABLE IF NOT EXISTS public.study_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  exam_slug TEXT NOT NULL,
  level_id TEXT NOT NULL DEFAULT '',
  exam_date DATE NOT NULL,
  target_hours INTEGER NOT NULL DEFAULT 0,
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Individual logged study sessions (drives XP, streaks, heatmap).
CREATE TABLE IF NOT EXISTS public.study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  exam_slug TEXT NOT NULL DEFAULT 'general',
  topic_id TEXT,
  minutes INTEGER NOT NULL DEFAULT 0,
  xp_earned INTEGER NOT NULL DEFAULT 0,
  studied_on DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sessions_user_date ON public.study_sessions (user_id, studied_on);
CREATE INDEX IF NOT EXISTS idx_plans_user ON public.study_plans (user_id);

-- RLS
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage their own stats"
  ON public.user_stats FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users manage their own plans"
  ON public.study_plans FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users manage their own sessions"
  ON public.study_sessions FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Seed a user_stats row whenever a public.users row is created.
CREATE OR REPLACE FUNCTION public.handle_new_user_stats()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_stats (user_id) VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_user_created_stats ON public.users;
CREATE TRIGGER on_user_created_stats
  AFTER INSERT ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_stats();

-- Optional leaderboard view (public XP ranking, no PII).
CREATE OR REPLACE VIEW public.leaderboard AS
  SELECT s.user_id, s.xp, s.current_streak, s.longest_streak
  FROM public.user_stats s
  ORDER BY s.xp DESC;
