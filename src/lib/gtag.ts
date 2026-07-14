// ============================================================
// Google Ads conversion tracking.
//
// The base gtag (layout.tsx) only reports pageviews. That tells Google which
// keywords produce CLICKS — the number that flatters everyone and decides
// nothing. To optimize on money, Google has to see the SALE and its value.
//
// This fires Google's own conversion event, with the dollar value attached, so
// the Search terms report can show cost-per-CUSTOMER per keyword instead of
// cost-per-click. That's the number that tells you whether Google is a channel
// or a hole.
// ============================================================

// The event name Google generated for the "Subscribe" conversion action.
const CONVERSION_EVENT = "ads_conversion_Subscribe_1";

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { gtag?: GtagFn };
  return typeof w.gtag === "function" ? w.gtag : null;
}

/**
 * Fire when a subscription actually completes.
 * value = what they paid, so Google can optimize on revenue, not volume:
 * an annual sale ($115) is worth ~4.6x a monthly one ($24.99) and Google
 * should know that.
 */
export function trackPurchase(valueUsd: number, transactionId?: string): void {
  const gtag = getGtag();
  if (!gtag) return; // script blocked or not loaded yet — never throw on a paid user
  gtag("event", CONVERSION_EVENT, {
    value: valueUsd,
    currency: "USD",
    transaction_id: transactionId ?? "",
  });
}
