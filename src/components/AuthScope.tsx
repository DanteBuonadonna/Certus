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

export default function AuthScope({ userId }: { userId: string }) {
  useEffect(() => {
    if (!userId) return;
    let owner: string | null = null;
    try {
      owner = localStorage.getItem(OWNER_KEY);
    } catch {
      return;
    }
    if (owner === userId) return;

    try {
      const stale = Object.keys(localStorage).filter(
        (k) => k.startsWith("certus_") && k !== OWNER_KEY
      );
      stale.forEach((k) => localStorage.removeItem(k));
      localStorage.setItem(OWNER_KEY, userId);
    } catch {
      return;
    }
    window.location.reload();
  }, [userId]);

  return null;
}
