"use client";

import { useState } from "react";
import { CoinBurst, Coin } from "@/components/Coin";
import {
  ChestDrop,
  CHEST_META,
  claimChest,
  dailyBonusInfo,
  claimDailyBonus,
  DAILY_LADDER,
} from "@/lib/rewards";
import { playCoin, playUnlock } from "@/lib/sound";

function Overlay({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(13,13,20,0.66)", backdropFilter: "blur(4px)" }}
    >
      {children}
    </div>
  );
}

// ---- Loot chest ------------------------------------------------------------
export function ChestModal({ drop, onClose }: { drop: ChestDrop; onClose: () => void }) {
  const [opened, setOpened] = useState(false);
  const meta = CHEST_META[drop.tier];

  function open() {
    if (opened) return;
    setOpened(true);
    claimChest(drop);
    playCoin();
    setTimeout(() => playUnlock(), 160);
  }

  return (
    <Overlay>
      <div
        className="pop-in text-center"
        style={{ width: 360, maxWidth: "100%", background: "var(--bg-card)", border: "2px solid var(--border-strong)", borderRadius: 24, padding: "28px 24px", position: "relative", overflow: "visible" }}
      >
        <div className="text-[10px] font-extrabold uppercase tracking-widest mb-1" style={{ color: meta.color }}>
          {meta.label} chest
        </div>
        <div className="font-display text-xl mb-4" style={{ color: "var(--text-primary)" }}>
          {opened ? "Nice find!" : "You found a chest!"}
        </div>

        <div style={{ position: "relative", height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {opened && <CoinBurst count={16} size={24} />}
          <button onClick={open} aria-label="Open chest" className={opened ? "" : "wiggle"} style={{ cursor: opened ? "default" : "pointer", background: "none", border: "none" }}>
            <ChestArt color={meta.color} deep={meta.deep} open={opened} />
          </button>
        </div>

        {opened ? (
          <>
            <div className="anim-xp flex items-center justify-center gap-2 mt-2 mb-5">
              <Coin size={26} />
              <span className="font-display text-3xl" style={{ color: "var(--gold)" }}>+{drop.comp.toLocaleString()}</span>
              <span className="text-sm font-bold" style={{ color: "var(--text-secondary)" }}>Comp</span>
            </div>
            <button className="btn-duo w-full" onClick={onClose}>Collect</button>
          </>
        ) : (
          <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>Tap the chest to open it.</p>
        )}
      </div>
    </Overlay>
  );
}

function ChestArt({ color, deep, open }: { color: string; deep: string; open: boolean }) {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <ellipse cx="60" cy="104" rx="40" ry="7" fill="rgba(0,0,0,0.18)" />
      {/* base */}
      <rect x="26" y="58" width="68" height="42" rx="6" fill={color} stroke={deep} strokeWidth="3" />
      <rect x="52" y="70" width="16" height="20" rx="3" fill={deep} />
      <circle cx="60" cy="80" r="3" fill="#f4e4a8" />
      {/* lid */}
      <g style={{ transform: open ? "rotate(-26deg)" : "rotate(0deg)", transformOrigin: "30px 58px", transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
        <path d="M26 58 C26 42 38 34 60 34 C82 34 94 42 94 58 Z" fill={color} stroke={deep} strokeWidth="3" />
        <rect x="26" y="52" width="68" height="8" rx="2" fill={deep} />
      </g>
      {open && <circle cx="60" cy="56" r="20" fill="#fff3b0" opacity="0.55" />}
    </svg>
  );
}

// ---- Daily "Market Open" bonus --------------------------------------------
export function DailyBonusModal({ onClaim, onClose }: { onClaim: (amount: number) => void; onClose: () => void }) {
  const info = dailyBonusInfo();
  const [claimed, setClaimed] = useState(false);
  const [amount, setAmount] = useState(0);

  function claim() {
    if (claimed) return;
    const got = claimDailyBonus();
    setAmount(got);
    setClaimed(true);
    playCoin();
    setTimeout(() => playUnlock(), 160);
    onClaim(got);
  }

  const todayIndex = ((info.streak - 1) % DAILY_LADDER.length);

  return (
    <Overlay>
      <div
        className="pop-in text-center"
        style={{ width: 400, maxWidth: "100%", background: "var(--bg-card)", border: "2px solid var(--gold-border)", borderRadius: 24, padding: "26px 22px", position: "relative", overflow: "visible" }}
      >
        <div className="pill-gold mb-2" style={{ display: "inline-flex" }}>MARKET OPEN</div>
        <div className="font-display text-2xl mb-1" style={{ color: "var(--text-primary)" }}>
          Day {info.streak} bonus
        </div>
        <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
          {claimed ? "See you tomorrow — keep the chain alive." : "Show up daily and the bonus grows."}
        </p>

        {/* Ladder */}
        <div className="flex items-end justify-center gap-1.5 mb-6">
          {DAILY_LADDER.map((amt, i) => {
            const isToday = i === todayIndex;
            const past = i < todayIndex;
            return (
              <div key={i} className="flex flex-col items-center gap-1" style={{ flex: 1 }}>
                <div
                  className={isToday && !claimed ? "wiggle" : ""}
                  style={{
                    width: "100%",
                    height: 30 + i * 7,
                    borderRadius: 8,
                    background: isToday ? "var(--gold-bright)" : past ? "var(--gold-bg)" : "var(--bg)",
                    border: `2px solid ${isToday ? "var(--gold)" : "var(--border)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isToday ? "#5d4a12" : "var(--text-muted)",
                    fontWeight: 800, fontSize: 10,
                  }}
                >
                  {past ? "✓" : amt}
                </div>
                <span className="text-[9px] font-bold" style={{ color: isToday ? "var(--gold)" : "var(--text-muted)" }}>D{i + 1}</span>
              </div>
            );
          })}
        </div>

        <div style={{ position: "relative" }}>
          {claimed && <CoinBurst count={12} size={20} />}
          {claimed ? (
            <div className="anim-xp flex items-center justify-center gap-2 mb-4">
              <Coin size={24} />
              <span className="font-display text-2xl" style={{ color: "var(--gold)" }}>+{amount.toLocaleString()} Comp</span>
            </div>
          ) : null}
          <button className="btn-duo w-full" onClick={claimed ? onClose : claim}>
            {claimed ? "Let's go" : `Claim +${info.amount} Comp`}
          </button>
        </div>
      </div>
    </Overlay>
  );
}
