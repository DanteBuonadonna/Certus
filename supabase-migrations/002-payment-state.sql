-- ============================================================
-- Certus — dunning state on public.users
--
-- WHY
-- A trial ending in a failed charge was invisible. The webhook handled three
-- events and none of them was invoice.payment_failed, so:
--   · nothing recorded that a payment had failed
--   · nothing told the customer their card had been declined
--   · nothing distinguished "in Stripe's retry window" from "healthy"
--
-- POLICY THIS SUPPORTS
-- A customer in past_due KEEPS access while Stripe retries. The commonest
-- cause of a failed renewal is a re-issued or expired card, not someone who
-- decided to stop paying — locking them out mid-chapter loses a customer we
-- already won. But they must be TOLD, or they never update the card and the
-- subscription silently cancels weeks later. That's what payment_state drives.
--
-- is_pro  -> can they use the product
-- payment_state -> is anything wrong that they need to act on
-- Keeping these separate is deliberate: conflating them is what makes
-- "still has access" and "is paying" indistinguishable.
--
-- Run this in the Supabase SQL editor before deploying the webhook change.
-- Safe to re-run.
-- ============================================================

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS payment_state TEXT NOT NULL DEFAULT 'ok'
    CHECK (payment_state IN ('ok', 'past_due'));

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS payment_failed_at TIMESTAMPTZ;

-- The webhook looks users up by Stripe customer id on every invoice event.
-- Without this it's a sequential scan on each one.
CREATE INDEX IF NOT EXISTS users_stripe_customer_id_idx
  ON public.users (stripe_customer_id)
  WHERE stripe_customer_id IS NOT NULL;

COMMENT ON COLUMN public.users.payment_state IS
  'ok | past_due. past_due means a subscription invoice failed and Stripe is retrying. Access is retained during this window; the app shows a card-update banner.';

COMMENT ON COLUMN public.users.payment_failed_at IS
  'When the current dunning episode started. Cleared on recovery or cancellation.';
