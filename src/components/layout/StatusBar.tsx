"use client";

// ============================================================
// Persistent status bar — Comp, level, XP progress, streak.
//
// WHY: these numbers ARE the game. They were only visible on the dashboard and
// the shop, which means the loop's whole feedback mechanism vanished the moment
// you started doing the thing that feeds it. Duolingo keeps its currency and
// streak on screen at all times for exactly this reason: the number ticking up
// is the reward, and a reward you have to navigate to isn't one.
//
// Hidden in lesson mode — while answering, nothing competes with the question.
// (The XP payoff lands on the results screen, which is the right moment for it.)
// ============================================================

import { useEffect, useState } from "react";
import Link from "next/link";
import { Coin } from "@/components/Coin";
import StreakFlame from "@/components/StreakFlame";
import { EMPTY_STATE, GameState, levelProgress, rankTitle } from "@/lib/studyPlan";
import { GAME_KEY } from "@/lib/gameStore";
import { loadWallet, compBalance } from "@/lib/economy";

export default function StatusBar() {
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [comp, setComp] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      try {
        const raw = localStorage.getItem(GAME_KEY);
        const s: GameState = raw ? { ...EMPTY_STATE, ...JSON.parse(raw) } : EMPTY_STATE;
        setState(s);
        setComp(compBalance(s, loadWallet()));
      } catch {}
      setReady(true);
    };
    sync();
    // There is no "coins changed" event in the app — economy.ts dispatches
    // nothing — so don't listen for one that never fires. Re-read on focus and
    // on route-ish changes; the big XP moments have their own celebrations, this
    // bar just has to be right whenever you look at it.
    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);
    const iv = setInterval(sync, 2000);
    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
      clearInterval(iv);
    };
  }, []);

  if (!ready) return null;

  const lp = levelProgress(state.xp);
  const streak = state.currentStreak ?? 0;

  return (
    /* top-12 on mobile: the Sidebar renders its own `fixed top-0 z-30` bar
       (logo + menu) and <main> is pt-12 to clear it. Sticking at top-0 here
       would park this on top of that bar — same z-index, and main comes later
       in the DOM, so we'd win and cover the menu button. Sit below it. */
    <div
      data-status-bar
      className="sticky top-12 md:top-0 z-30 flex items-center gap-3 px-4 py-2"
      style={{
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      {/* Level + XP bar — the thing that fills as you answer. */}
      <Link href="/career" className="flex items-center gap-2 flex-1 min-w-0" style={{ textDecoration: "none" }}>
        <span
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: 26, height: 26, borderRadius: 8,
            background: "var(--primary-light)", color: "var(--primary)",
            fontSize: 11, fontWeight: 800,
          }}
        >
          {lp.level}
        </span>
        <span className="flex-1 min-w-0">
          <span className="flex items-baseline justify-between gap-2 mb-0.5">
            <span className="text-[10px] font-bold truncate" style={{ color: "var(--text-secondary)" }}>
              {rankTitle(lp.level)}
            </span>
            <span className="text-[10px] font-mono flex-shrink-0" style={{ color: "var(--text-muted)" }}>
              {lp.xpIntoLevel}/{lp.xpForNext}
            </span>
          </span>
          <span className="block" style={{ height: 5, borderRadius: 99, background: "var(--primary-light)", overflow: "hidden" }}>
            <span
              className="block"
              style={{
                height: "100%",
                width: `${Math.min(100, lp.pct)}%`,
                background: "var(--primary)",
                borderRadius: 99,
                transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          </span>
        </span>
      </Link>

      {/* Streak */}
      {streak > 0 && (
        <span className="flex items-center gap-1 flex-shrink-0">
          <StreakFlame streak={streak} size={17} />
          <span className="text-sm font-extrabold" style={{ color: "var(--ats-amber, var(--gold))" }}>{streak}</span>
        </span>
      )}

      {/* Comp — the game currency. NO dollar sign; that belongs to Stripe. */}
      <Link
        href="/shop"
        className="flex items-center gap-1.5 flex-shrink-0 px-2 py-1 rounded-lg"
        style={{ background: "var(--gold-bg)", textDecoration: "none" }}
      >
        <Coin size={16} />
        <span className="text-sm font-extrabold font-mono" style={{ color: "var(--gold)" }}>
          {comp.toLocaleString()}
        </span>
      </Link>
    </div>
  );
}
