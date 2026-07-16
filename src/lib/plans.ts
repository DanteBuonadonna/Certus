// ============================================================
// Certus — subscription plans
// Display config lives here; the actual charge uses the Stripe
// recurring Price IDs set in env (STRIPE_PRICE_MONTHLY / _ANNUAL).
// ============================================================

export interface Plan {
  id: "monthly" | "annual";
  name: string;
  price: string;
  cadence: string;
  sub: string;
  priceEnvKey: "STRIPE_PRICE_MONTHLY" | "STRIPE_PRICE_ANNUAL";
  highlight?: string;
  popular?: boolean;
}

// ORDER MATTERS: annual first. It's the plan we want them on — 4.6x the value
// of a monthly that churns in month two — and it's genuinely better for a
// candidate whose exam is months away.
//
// The badge used to sit on Monthly ("Most popular"), which anchored people onto
// the worse option while the copy simultaneously pushed 62% off. Two signals
// fighting each other; the badge won, because badges always do.
export const PLANS: Plan[] = [
  {
    // $24.99/mo × 12 = $299.88, so $115/yr ≈ 62% off. Update this if the
    // monthly price changes.
    id: "annual",
    name: "Annual",
    // Lead with the monthly-sounding number. Same money, and $9.58 doesn't
    // trigger the flinch that $115 does from someone who hasn't built a habit.
    price: "$9.58",
    cadence: "/mo, billed yearly",
    sub: "$115 once. 62% off monthly — and less than one hour of a tutor.",
    priceEnvKey: "STRIPE_PRICE_ANNUAL",
    popular: true,
    highlight: "Best value",
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$24.99",
    cadence: "/month",
    sub: "Full flexibility, billed monthly. Cancel anytime.",
    priceEnvKey: "STRIPE_PRICE_MONTHLY",
  },
];

export const PLAN_FEATURES = [
  "Every chapter of every exam — CFA I/II/III, SIE, Series 7 & 66, CFP, CPA",
  "Unlimited Finals (full timed mock exams)",
  "Full question bank with trap-aware explanations",
  "Adaptive study plan, streaks & readiness rating",
  "Spaced-repetition flashcards & The Associate AI tutor",
];
