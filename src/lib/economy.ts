// ============================================================
// The Comp economy + Perks Desk catalog.
// Comp ($) is earned 1:1 with lifetime XP, plus quest bonuses.
// It is never deducted from XP — spending Comp can't de-level you.
// ============================================================

import { GameState } from "./studyPlan";

const KEY = "certus_wallet_v1";

export interface Wallet {
  bonus: number;     // Comp granted by quest payouts
  spent: number;     // Comp spent at the Perks Desk
  owned: string[];   // purchased item ids
}

const EMPTY_WALLET: Wallet = { bonus: 0, spent: 0, owned: [] };

export function loadWallet(): Wallet {
  if (typeof window === "undefined") return EMPTY_WALLET;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...EMPTY_WALLET, ...JSON.parse(raw) };
  } catch {}
  return EMPTY_WALLET;
}

export function saveWallet(w: Wallet): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(w));
  } catch {}
}

export function compEarned(state: GameState, w: Wallet): number {
  return state.xp + w.bonus;
}

export function compBalance(state: GameState, w: Wallet): number {
  return Math.max(0, compEarned(state, w) - w.spent);
}

export function grantBonus(amount: number): Wallet {
  const w = loadWallet();
  w.bonus += amount;
  saveWallet(w);
  return w;
}

// Spend Comp (e.g., a wager stake). Increases `spent`, lowering the balance.
export function spendComp(amount: number): Wallet {
  const w = loadWallet();
  w.spent += amount;
  saveWallet(w);
  return w;
}

/** Returns updated wallet, or null if it can't be afforded / already owned. */
export function buyItem(state: GameState, itemId: string): Wallet | null {
  const item = getItem(itemId);
  if (!item) return null;
  const w = loadWallet();
  if (w.owned.includes(itemId)) return null;
  if (compBalance(state, w) < item.price) return null;
  w.spent += item.price;
  w.owned = [...w.owned, itemId];
  saveWallet(w);
  return w;
}

export function ownsItem(itemId: string, w?: Wallet): boolean {
  const item = getItem(itemId);
  if (item?.free) return true;
  const wallet = w ?? loadWallet();
  return wallet.owned.includes(itemId);
}

// ---- Catalog ---------------------------------------------------------------
export type ItemSlot = "suit" | "hat" | "eyewear" | "neckwear" | "accessory" | "background" | "title";
export type ItemTier = "standard" | "premium" | "executive" | "legacy";

export interface ShopItem {
  id: string;
  slot: ItemSlot;
  name: string;
  desc: string;
  price: number; // Comp
  tier: ItemTier;
  free?: boolean; // starter kit
}

export const TIER_META: Record<ItemTier, { label: string; color: string }> = {
  standard: { label: "Standard", color: "var(--text-muted)" },
  premium: { label: "Premium", color: "var(--primary)" },
  executive: { label: "Executive", color: "var(--ats-green)" },
  legacy: { label: "Legacy", color: "var(--gold)" },
};

export const SHOP_ITEMS: ShopItem[] = [
  // ---- Suits (Sterling's tailoring) ----
  { id: "suit-navy", slot: "suit", name: "Navy Two-Piece", desc: "Day-one issue. Dependable.", price: 0, tier: "standard", free: true },
  { id: "suit-charcoal", slot: "suit", name: "Charcoal Classic", desc: "Reads serious in any meeting.", price: 0, tier: "standard", free: true },
  { id: "suit-slate", slot: "suit", name: "Slate Modern", desc: "Slim cut for the new class.", price: 400, tier: "standard" },
  { id: "suit-forest", slot: "suit", name: "Forest Tweed", desc: "Old money, quiet confidence.", price: 700, tier: "standard" },
  { id: "suit-pinstripe", slot: "suit", name: "Banker's Pinstripe", desc: "The old guard nods as you pass.", price: 1200, tier: "premium" },
  { id: "suit-royal", slot: "suit", name: "Royal Blue", desc: "Stand out on the trading floor.", price: 1600, tier: "premium" },
  { id: "suit-burgundy", slot: "suit", name: "Burgundy Power", desc: "For closers only.", price: 2000, tier: "executive" },
  { id: "suit-tux", slot: "suit", name: "Black-Tie", desc: "Awards-dinner ready.", price: 3500, tier: "executive" },
  { id: "suit-ivory", slot: "suit", name: "Ivory Dinner Jacket", desc: "Monte Carlo energy.", price: 4200, tier: "executive" },
  { id: "suit-gold-trim", slot: "suit", name: "Partner's Midnight", desc: "Midnight wool, gold thread. Whisper-loud.", price: 6000, tier: "legacy" },

  // ---- Hats ----
  { id: "hat-grad", slot: "hat", name: "Grad Cap", desc: "You earned the tassel.", price: 0, tier: "standard", free: true },
  { id: "hat-visor", slot: "hat", name: "Dealer's Visor", desc: "Counting cards, counting coupons.", price: 300, tier: "standard" },
  { id: "hat-beanie", slot: "hat", name: "Startup Beanie", desc: "Casual-Friday Sterling.", price: 500, tier: "standard" },
  { id: "hat-party", slot: "hat", name: "Party Hat", desc: "Streak milestone vibes.", price: 600, tier: "standard" },
  { id: "hat-fedora", slot: "hat", name: "Felt Fedora", desc: "Smooth operator.", price: 800, tier: "premium" },
  { id: "hat-top", slot: "hat", name: "Top Hat", desc: "Tycoon territory.", price: 1200, tier: "premium" },
  { id: "hat-halo", slot: "hat", name: "Saintly Halo", desc: "Never missed a day.", price: 2500, tier: "executive" },
  { id: "hat-crown", slot: "hat", name: "Gold Crown", desc: "For charterholders only.", price: 5000, tier: "legacy" },

  // ---- Eyewear ----
  { id: "acc-specs", slot: "eyewear", name: "Analyst Spectacles", desc: "You read the footnotes.", price: 250, tier: "standard" },
  { id: "eye-nerd", slot: "eyewear", name: "Thick Frames", desc: "Quant-desk chic.", price: 350, tier: "standard" },
  { id: "acc-shades", slot: "eyewear", name: "Aviators", desc: "Post-exam victory lap.", price: 600, tier: "premium" },
  { id: "eye-monocle", slot: "eyewear", name: "Gold Monocle", desc: "Distinguished. Slightly absurd.", price: 1500, tier: "executive" },
  { id: "eye-visor", slot: "eyewear", name: "Cyber Visor", desc: "Algo-trading the future.", price: 1800, tier: "executive" },

  // ---- Neckwear ----
  { id: "neck-red", slot: "neckwear", name: "Power Tie", desc: "Crimson. Unmissable.", price: 200, tier: "standard" },
  { id: "neck-emerald", slot: "neckwear", name: "Emerald Tie", desc: "Green across the board.", price: 350, tier: "standard" },
  { id: "neck-royal", slot: "neckwear", name: "Royal Tie", desc: "Cool and composed.", price: 450, tier: "standard" },
  { id: "neck-bow", slot: "neckwear", name: "Professor's Bow Tie", desc: "You've read the primary sources.", price: 700, tier: "premium" },
  { id: "neck-silver", slot: "neckwear", name: "Silver Silk", desc: "Boardroom polish.", price: 900, tier: "premium" },
  { id: "neck-bow-gold", slot: "neckwear", name: "Gold Bow Tie", desc: "Black-tie, gold-standard.", price: 2200, tier: "executive" },

  // ---- Accessories (lapel flair) ----
  { id: "acc-pocket", slot: "accessory", name: "Silk Pocket Square", desc: "Detail is a strategy.", price: 900, tier: "premium" },
  { id: "acc-rose", slot: "accessory", name: "Boutonnière", desc: "Closing-day rose.", price: 700, tier: "premium" },
  { id: "acc-watch", slot: "accessory", name: "Heirloom Watch", desc: "Time in the market.", price: 1800, tier: "executive" },
  { id: "acc-chain", slot: "accessory", name: "Pocket-Watch Chain", desc: "Old-school class.", price: 2600, tier: "executive" },
  { id: "acc-lapel-gold", slot: "accessory", name: "Gold Lapel Pin", desc: "Charter energy.", price: 4000, tier: "legacy" },

  // ---- Office backdrops ----
  { id: "bg-slate", slot: "background", name: "Slate Wall", desc: "Clean. Focused.", price: 0, tier: "standard", free: true },
  { id: "bg-dawn", slot: "background", name: "Dawn Gradient", desc: "Pre-market calm.", price: 0, tier: "standard", free: true },
  { id: "bg-ticker", slot: "background", name: "Ticker Wall", desc: "Green across the board.", price: 800, tier: "premium" },
  { id: "bg-skyline", slot: "background", name: "Corner Office Skyline", desc: "Forty-second floor, north face.", price: 1500, tier: "executive" },
  { id: "bg-library", slot: "background", name: "The Reading Room", desc: "Leather, mahogany, first editions.", price: 1500, tier: "executive" },
  { id: "bg-trading", slot: "background", name: "Trading Floor", desc: "Adrenaline in teal and navy.", price: 2200, tier: "executive" },
  { id: "bg-charter", slot: "background", name: "Charter Hall", desc: "Where the ceremony happens.", price: 3000, tier: "executive" },
  { id: "bg-vault", slot: "background", name: "The Gold Vault", desc: "For those who finished the ladder.", price: 5000, tier: "legacy" },

  // ---- Titles ----
  { id: "title-grinder", slot: "title", name: "First In, Last Out", desc: "Streak culture.", price: 500, tier: "standard" },
  { id: "title-compounder", slot: "title", name: "The Compounder", desc: "Small daily gains, ruthless consistency.", price: 900, tier: "premium" },
  { id: "title-rainmaker", slot: "title", name: "Rainmaker", desc: "You bring the numbers.", price: 1500, tier: "premium" },
  { id: "title-margin", slot: "title", name: "Margin of Safety", desc: "You never walk in underprepared.", price: 2200, tier: "executive" },
  { id: "title-corner", slot: "title", name: "Corner Office", desc: "It was never about the view.", price: 3000, tier: "executive" },
  { id: "title-charterholder", slot: "title", name: "The Charterhound", desc: "Certifications fear you.", price: 5500, tier: "legacy" },
];

export function getItem(id: string): ShopItem | undefined {
  return SHOP_ITEMS.find((i) => i.id === id);
}

export function itemsBySlot(slot: ItemSlot): ShopItem[] {
  return SHOP_ITEMS.filter((i) => i.slot === slot);
}

/**
 * Comp is a GAME CURRENCY. Never render it with a dollar sign.
 *
 * This used to return `$3,180`, and the Perks Desk said "1 XP = $1". A user
 * looking at a cosmetics shop priced in "$" reasonably concludes either (a)
 * these hats cost real money, or (b) we're holding $3,180 of their money. Both
 * are wrong, and both make the REAL paywall harder to read — if "$" means play
 * money here, what does "$115" mean on the billing page?
 *
 * One currency symbol per product. The dollar sign belongs to Stripe.
 */
export function formatComp(n: number): string {
  return `${n.toLocaleString()} Comp`;
}

/** Bare number, for places that render the coin icon next to it. */
export function formatCompShort(n: number): string {
  return n.toLocaleString();
}
