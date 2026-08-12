// ============================================================
// Certus — cancellation save flow config
//
// WHAT THIS IS
// When someone clicks "Manage / cancel subscription" we intercept BEFORE
// handing off to the Stripe portal and make two offers, in order:
//
//   1. First cancel attempt  → "take another week on us" (+7 free days)
//   2. Second cancel attempt → "why are you leaving?" survey.
//      If they answer "too expensive" → offer 50% off.
//
// The 7-day gate the flow is meant to have falls out naturally: offer 1
// buys them a week, so the soonest they can reach offer 2 is a week later.
// We gate on "have they already used the extension", not on a date, so a
// customer who comes back in three months still gets the right screen.
//
// RULES THIS FLOW FOLLOWS — do not weaken these
// Every screen has a plain, one-click "No thanks, cancel" that goes
// straight to the Stripe portal. Cancelling is never more than one click
// further away than it was before this flow existed, nothing is hidden
// behind a timer, and no offer repeats once declined or used. That is
// partly decency and partly self-interest: a customer who can't find the
// cancel button files a chargeback instead, which costs more than the
// subscription was worth and puts the Stripe account at risk.
//
// Each offer is ONE TIME PER SUBSCRIPTION, tracked in Stripe subscription
// metadata (not localStorage — that would reset on a new browser and let
// someone farm free weeks forever).
// ============================================================

export const EXTRA_WEEK_DAYS = 7;

// 50% off for three months. Long enough to rebuild the habit that made
// them subscribe, short enough that it doesn't permanently reprice them.
// Set STRIPE_SAVE_COUPON_ID in env to use a specific coupon instead; the
// API route creates one to match this config if that's unset.
export const SAVE_DISCOUNT_PERCENT = 50;
export const SAVE_DISCOUNT_MONTHS = 3;

// Stripe subscription metadata keys — the source of truth for "already used".
export const META_WEEK_USED = "certus_save_week_used";
export const META_DISCOUNT_USED = "certus_save_discount_used";
export const META_CANCEL_REASON = "certus_cancel_reason";

export type CancelReason =
  | "too_expensive"
  | "not_using"
  | "passed_exam"
  | "missing_content"
  | "technical"
  | "other";

export interface ReasonOption {
  id: CancelReason;
  label: string;
  // What we say back. Honest routing: only "too_expensive" gets the
  // discount, because only that reason is actually about price. Offering
  // money to someone who already passed their exam is insulting and
  // doesn't work.
  followUp: "discount" | "none";
}

export const CANCEL_REASONS: ReasonOption[] = [
  { id: "too_expensive", label: "It's too expensive", followUp: "discount" },
  { id: "not_using", label: "I'm not using it enough", followUp: "none" },
  { id: "passed_exam", label: "I passed my exam", followUp: "none" },
  { id: "missing_content", label: "Missing content I needed", followUp: "none" },
  { id: "technical", label: "It didn't work properly", followUp: "none" },
  { id: "other", label: "Something else", followUp: "none" },
];

// Copy for the "one more week" screen. Deliberately not desperate — the
// pitch is that a lapsed streak is the usual reason people quit, and a
// week is enough to find out whether they'd use it.
export const WEEK_OFFER = {
  title: "Take another week on us",
  body: "Most people who cancel do it in a week where they didn't study — not because the product was wrong for them. Here's seven more days, free, no charge to your card. If it's still not working, cancel then and you'll have lost nothing.",
  accept: "Give me another week",
  decline: "No thanks, cancel my subscription",
};

export const DISCOUNT_OFFER = {
  title: `Would ${SAVE_DISCOUNT_PERCENT}% off help?`,
  body: `If price is the blocker, take ${SAVE_DISCOUNT_PERCENT}% off for the next ${SAVE_DISCOUNT_MONTHS} months. Same full access — every exam, every mock, the tutor. It applies to your next invoice automatically.`,
  accept: `Yes, apply ${SAVE_DISCOUNT_PERCENT}% off`,
  decline: "No thanks, cancel my subscription",
};

export const REASON_PROMPT = {
  title: "Before you go — what went wrong?",
  body: "One tap. It genuinely changes what gets built next, and you can cancel straight after.",
  skip: "Skip and cancel",
};
