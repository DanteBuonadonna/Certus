// ============================================================
// Certus — the 7-day free trial.
//
// WHY A TRIAL: only 22 of 110 signups ever reached 3+ sessions. A paywall that
// waits for a habit is a paywall ~80% of users never see. The trial moves the
// ask to the moment intent peaks — when they've just hit a wall and want more —
// and asks "try it" instead of "pay me $115".
//
// WHY FREE AND NOT $1: the card is the commitment, not the dollar. Both
// versions collect payment details, so both are "opt-out" trials and land in
// the same conversion band. The $1 adds no real skin in the game — but a
// disputed $1 charge costs a $15 non-refundable Stripe fee (net −$14) AND a
// tick against a dispute ratio that must stay under 0.75%. At 5 customers there
// is no denominator to absorb that.
//
// WHY THE DISCLOSURES BELOW ARE NOT OPTIONAL:
// Disclosure is our defence against the FTC (ROSCA / the revived Negative
// Option rulemaking) and California's ARL. It is NOT a defence against the card
// networks — a dispute counts against us the moment it's *initiated*, win or
// lose. So disclosure handles the regulator and the REMINDER EMAIL handles the
// disputes. Almost every trial dispute is "I forgot", not "I was defrauded".
// Ship both or neither.
// ============================================================

import { ANNUAL_TOTAL, MONTHLY_PRICE, ANNUAL_PER_MONTH } from "./tier";

export const TRIAL_DAYS = 7;

/** Send the heads-up this many days before the card is charged. */
export const TRIAL_REMINDER_DAYS_BEFORE = 2;

/** The button. Says what it does — no "Start free" ambiguity. */
export const TRIAL_CTA = `Start your ${TRIAL_DAYS} free days`;

/**
 * CLEAR AND CONSPICUOUS DISCLOSURE — must sit next to the button, in readable
 * type, not behind a link and not in a footer. "Clear and conspicuous" is a
 * legal standard about placement and prominence, not about whether the words
 * technically exist somewhere on the site.
 */
export function trialDisclosure(plan: "annual" | "monthly"): string {
  const amount = plan === "annual" ? `$${ANNUAL_TOTAL}` : `$${MONTHLY_PRICE}`;
  const cadence = plan === "annual" ? "year" : "month";
  return (
    `Free for ${TRIAL_DAYS} days. We'll email you ${TRIAL_REMINDER_DAYS_BEFORE} days before it ends. ` +
    `After that it's ${amount} per ${cadence}, automatically, until you cancel. ` +
    `Cancel any time in one click from your dashboard — cancel before day ${TRIAL_DAYS} and you're never charged.`
  );
}

/** Short version for tight spaces (gate cards). Still states amount + date. */
export function trialDisclosureShort(plan: "annual" | "monthly"): string {
  const amount = plan === "annual" ? `$${ANNUAL_TOTAL}/yr (${ANNUAL_PER_MONTH}/mo)` : `$${MONTHLY_PRICE}/mo`;
  return `Free for ${TRIAL_DAYS} days, then ${amount}. Cancel any time — one click, no email required.`;
}

/** The date the card gets charged, given a trial that starts now. */
export function trialEndDate(from: Date = new Date()): Date {
  const d = new Date(from);
  d.setDate(d.getDate() + TRIAL_DAYS);
  return d;
}

export function formatTrialEnd(d: Date = trialEndDate()): string {
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
