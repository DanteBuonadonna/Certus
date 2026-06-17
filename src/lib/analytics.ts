// ============================================================
// Lightweight analytics helpers on top of PostHog.
// trackOnce() fires an event only the first time per browser/account
// (used for "activated" — the moment a visitor first does real work).
// ============================================================

import posthog from "posthog-js";

export function trackOnce(event: string, flagKey: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  try {
    if (localStorage.getItem(flagKey) === "1") return;
    localStorage.setItem(flagKey, "1");
  } catch {
    // if storage is unavailable, still fire (better a dup than a miss)
  }
  try {
    posthog.capture(event, props);
  } catch {}
}

// First meaningful action (a completed lesson or practice run) = activation.
export function trackActivated(via: "reading" | "practice", props?: Record<string, unknown>): void {
  trackOnce("activated", "certus_activated", { via, ...props });
}
