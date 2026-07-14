// ============================================================
// Google Ads conversion tracking.
//
// The base gtag in layout.tsx only reports pageviews. That tells Google which
// keywords produce CLICKS — which is the number that flatters everyone and
// decides nothing. To optimize on money, Google has to see the sale.
//
// SETUP (one time, in Google Ads):
//   Tools → Conversions → + New → Website → Set up manually
//   Name it "Purchase", category Purchase, value: use different values.
//   Google gives you a Conversion ID + LABEL that looks like:
//        AW-18273063884/AbC-D_efGhIjKlMn
//   Put the whole thing in Vercel as:
//        NEXT_PUBLIC_GADS_PURCHASE_LABEL=AW-18273063884/AbC-D_efGhIjKlMn
//
// Until that env var is set, this is a safe no-op.
// ============================================================

type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { gtag?: GtagFn };
  return typeof w.gtag === "function" ? w.gtag : null;
}

/** Fire when a subscription actually completes. Value = what they paid. */
export function trackPurchase(valueUsd: number, transactionId?: string): void {
  const send_to = process.env.NEXT_PUBLIC_GADS_PURCHASE_LABEL;
  const g = gtag();
  if (!g || !send_to) return; // not configured yet — no-op
  g("event", "conversion", {
    send_to,
    value: valueUsd,
    currency: "USD",
    transaction_id: transactionId ?? "",
  });
}
