"use client";

import { useEffect, useState } from "react";
import {
  FREE_DAILY_QUESTIONS,
  bossAttemptsUsed,
  freeChapterCount,
  isPro,
  questionsUsedToday,
} from "./access";
import { useServerPro } from "./AccessContext";

// ============================================================
// Gating hook.
//
// THE MODEL: give away the diagnosis, sell the treatment.
//   Free → the first 3 chapters of any exam, a FULL timed mock, your real odds
//          of passing, and 25 practice questions a day.
//   Pro  → every reading, unlimited questions, unlimited mock retakes.
//
// The mock is the hook (nobody else gives one away). The reps are the product.
//
// `pro` is normally server-authoritative (public.users.is_pro via AccessContext).
// While login is disabled we also honour a client unlock (a purchase or a
// redeem code — see access.ts). That goes away when accounts come back.
// ============================================================
export function useAccess() {
  const serverPro = useServerPro();
  const [clientPro, setClientPro] = useState(false);
  const [usedToday, setUsedToday] = useState(0);

  useEffect(() => {
    const sync = () => {
      setClientPro(isPro());
      setUsedToday(questionsUsedToday());
    };
    sync();
    window.addEventListener("certus-pro-changed", sync);
    window.addEventListener("certus-daily-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("certus-pro-changed", sync);
      window.removeEventListener("certus-daily-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const pro = serverPro || clientPro;
  const questionsLeft = pro ? Infinity : Math.max(0, FREE_DAILY_QUESTIONS - usedToday);

  return {
    pro,
    ready: true,

    // Readings: free users get the first HALF of each exam.
    freeChapters: (total: number) => freeChapterCount(total),
    canChapter: (index: number, total: number) => pro || index < freeChapterCount(total),

    // Practice: 25 a day free, unlimited on Pro.
    dailyLimit: FREE_DAILY_QUESTIONS,
    questionsLeft,
    canAnswerQuestion: () => pro || questionsLeft > 0,

    // The mock exam and the odds-of-passing score are FREE. That's the hook.
    canMock: () => true,

    // Every exam is browsable; depth is what's gated.
    canExam: (_slug: string) => true,

    // The Final (boss): ONE free attempt per exam, unlimited retakes on Pro.
    //
    // This used to be `() => pro`, which flatly contradicted canStartBoss() in
    // access.ts (one free attempt) — and the boss screen's own copy, which
    // promises "every exam includes one free sitting". The UI reads this hook,
    // so the promise was a lie: free users were bounced from a sitting they'd
    // been told was theirs. Honouring the promise is the fix, not rewording it.
    canBoss: (examSlug?: string) =>
      pro || (examSlug ? bossAttemptsUsed(examSlug) < 1 : false),
  };
}
