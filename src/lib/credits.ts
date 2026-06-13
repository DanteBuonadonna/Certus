// ============================================================
// The Associate — question credits.
// Every question to the AI tutor costs 1 credit. New users get
// 3 free credits (one-time grant); more are bought at the
// Perks Desk via Stripe (one-time payments).
// Client-side wallet for the account-less MVP, consistent with
// the rest of the app; move server-side with accounts/sync.
// ============================================================

const KEY = "certus_tutor_credits_v1";

export const FREE_STARTER_CREDITS = 3;

export interface CreditPack {
  id: "credits-25" | "credits-100" | "credits-300";
  credits: number;
  price: string;
  label: string;
  blurb: string;
  priceEnvKey: string; // Stripe one-time Price ID env var
  bestValue?: boolean;
}

export const CREDIT_PACKS: CreditPack[] = [
  {
    id: "credits-25",
    credits: 25,
    price: "$4.99",
    label: "Coffee Chat",
    blurb: "25 questions for The Associate.",
    priceEnvKey: "STRIPE_PRICE_CREDITS_25",
  },
  {
    id: "credits-100",
    credits: 100,
    price: "$14.99",
    label: "Working Lunch",
    blurb: "100 questions — a full study month for most.",
    priceEnvKey: "STRIPE_PRICE_CREDITS_100",
    bestValue: true,
  },
  {
    id: "credits-300",
    credits: 300,
    price: "$29.99",
    label: "On Retainer",
    blurb: "300 questions — exam-season volume.",
    priceEnvKey: "STRIPE_PRICE_CREDITS_300",
  },
];

interface CreditStore {
  balance: number;
  granted: boolean; // starter credits issued?
}

function load(): CreditStore {
  if (typeof window === "undefined") return { balance: 0, granted: false };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { balance: 0, granted: false, ...JSON.parse(raw) };
  } catch {}
  return { balance: 0, granted: false };
}

function save(s: CreditStore): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

/** Returns the balance, issuing the one-time starter grant on first call. */
export function creditBalance(): number {
  const s = load();
  if (!s.granted) {
    s.granted = true;
    s.balance += FREE_STARTER_CREDITS;
    save(s);
  }
  return s.balance;
}

/** Spend one credit. Returns the new balance, or null if insufficient. */
export function spendCredit(): number | null {
  const s = load();
  if (!s.granted) {
    s.granted = true;
    s.balance += FREE_STARTER_CREDITS;
  }
  if (s.balance < 1) {
    save(s);
    return null;
  }
  s.balance -= 1;
  save(s);
  return s.balance;
}

/** Add purchased credits (called on checkout success). */
export function addCredits(n: number): number {
  const s = load();
  if (!s.granted) {
    s.granted = true;
    s.balance += FREE_STARTER_CREDITS;
  }
  s.balance += Math.max(0, Math.floor(n));
  save(s);
  return s.balance;
}

export function getPack(id: string): CreditPack | undefined {
  return CREDIT_PACKS.find((p) => p.id === id);
}
