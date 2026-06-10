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

export const PLANS: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$12",
    cadence: "/month",
    sub: "Full access, billed monthly. Cancel anytime.",
    priceEnvKey: "STRIPE_PRICE_MONTHLY",
    popular: true,
  },
  {
    id: "annual",
    name: "Annual",
    price: "$115",
    cadence: "/year",
    sub: "Save about 20% vs. monthly. Best for a full exam cycle.",
    priceEnvKey: "STRIPE_PRICE_ANNUAL",
    highlight: "Save 20%",
  },
];

export const PLAN_FEATURES = [
  "All exams & reading chapters",
  "Full question bank with explanations",
  "Adaptive study plan & streaks",
  "Progress tracking across devices",
  "Resume optimizer included",
];
