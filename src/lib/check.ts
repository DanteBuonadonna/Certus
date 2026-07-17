// ============================================================
// Certus — the /check diagnostic, in numbers.
//
// Lives in lib/ (not in the page) because the LANDING PAGE promises these
// numbers and the CHECK PAGE delivers them. Those two must never drift: a hero
// that says "10 questions" over a check that asks 6 is the same class of bug as
// the paywall telling three different stories. One constant, both callers.
//
// Why 6: 52 of 56 people who landed on /check bounced. Every extra question is
// another chance to leave. Six across the topic list is a noisier read — you're
// often flagging a topic weak off a single miss — but a diagnostic nobody
// finishes has a precision of zero.
// ============================================================

export const N_QUESTIONS = 6;

/** Honest wall-clock estimate. Don't inflate it; the promise is the product. */
export const CHECK_MINUTES = 3;
