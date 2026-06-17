"use client";

import { useEffect } from "react";

/**
 * Scopes all browser-stored progress to the signed-in account.
 *
 * Every per-user value (XP/streaks, profile, economy, flashcards, boss
 * trophies, tutor credits, tour flags) lives in localStorage under a
 * `certus_*` key. localStorage is per-BROWSER, not per-account — so without
 * scoping, a second account on the same browser inherits the first account's
 * progress and name. This records which account owns the local data and wipes
 * it when a different account signs in, then reloads so components re-read the
 * fresh state.
 */
const OWNER_KEY = "certus_owner";

export default function AuthScope({ userId }: { userId: string | null }) {
  useEffect(() => {
    if (!userId) return; // guest — nothing to scope
    let owner: string | null = null;
    try {
      owner = localStorage.getItem(OWNER_KEY);
    } catch {
      return;
    }
    if (owner === userId) return;

    try {
      if (!owner) {
        // No prior owner: this browser's progress was earned as a GUEST (or by
        // this same person before sign-in). ADOPT it into the new account
        // rather than wiping — so creating an account never loses progress.
        // SyncGate then reconciles with any cloud state for this account.
        localStorage.setItem(OWNER_KEY, userId);
        return;
      }
      // A DIFFERENT account previously used this browser → isolate accounts by
      // wiping the prior account's local data, then reload to re-read fresh.
      const stale = Object.keys(localStorage).filter(
        (k) => k.startsWith("certus_") && k !== OWNER_KEY
      );
      stale.forEach((k) => localStorage.removeItem(k));
      localStorage.setItem(OWNER_KEY, userId);
      window.location.reload();
    } catch {
      return;
    }
  }, [userId]);

  return null;
}
