"use client";

import { useEffect, useMemo, useState } from "react";
import { loadState } from "@/lib/gameStore";
import { EMPTY_STATE, GameState } from "@/lib/studyPlan";
import { loadProfile, Profile } from "@/lib/profile";
import { getLeague, ackLeagueResult, TIERS, LeagueView } from "@/lib/leagues";
import { Avatar } from "@/components/avatar";
import Confetti from "@/components/Confetti";
import { playUnlock, playWrong } from "@/lib/sound";

export default function LeagueClient() {
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [resultBanner, setResultBanner] = useState<LeagueView["lastResult"]>(null);

  useEffect(() => {
    const s = loadState();
    const p = loadProfile();
    setState(s);
    setProfile(p);
    const lg = getLeague(s, p?.avatar, p?.name ?? "You");
    if (lg.lastResult) {
      setResultBanner(lg.lastResult);
      if (lg.lastResult === "promoted") playUnlock();
      else if (lg.lastResult === "relegated") playWrong();
      ackLeagueResult();
    }
    setLoaded(true);
  }, []);

  const league = useMemo(
    () => (loaded ? getLeague(state, profile?.avatar, profile?.name ?? "You") : null),
    [loaded, state, profile]
  );

  if (!loaded || !league) {
    return (
      <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
        <div className="skeleton" style={{ height: 80, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 420 }} />
      </div>
    );
  }

  const { tier, nextTier, standings, youRank, youXp, zone, rivalName, rivalXp, daysLeft, promoteCount, relegateCount } = league;
  const rivalDiff = youXp - rivalXp;

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto" style={{ position: "relative" }}>
      {resultBanner === "promoted" && <Confetti count={110} />}

      {/* Promotion / relegation banner */}
      {resultBanner && (
        <div
          className="anim-pop mb-5 p-4 text-center"
          style={{
            borderRadius: 18,
            border: `2px solid ${resultBanner === "promoted" ? "var(--duo-green)" : "var(--duo-red)"}`,
            borderBottom: `5px solid ${resultBanner === "promoted" ? "var(--duo-green-shadow)" : "var(--duo-red-shadow)"}`,
            background: resultBanner === "promoted" ? "var(--duo-green-bg)" : "var(--duo-red-bg)",
          }}
        >
          <div className="text-2xl font-extrabold" style={{ color: resultBanner === "promoted" ? "var(--duo-green-shadow)" : "var(--duo-red-shadow)" }}>
            {resultBanner === "promoted" ? "Promoted! 🎉" : resultBanner === "relegated" ? "Relegated 📉" : "You held your division"}
          </div>
          <p className="text-sm font-semibold mt-1" style={{ color: "var(--text-secondary)" }}>
            {resultBanner === "promoted"
              ? `You finished top ${promoteCount} last week. Welcome to ${tier.name}.`
              : resultBanner === "relegated"
              ? `You slipped to ${tier.name}. Climb back this week.`
              : `You're still in ${tier.name}.`}
          </p>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>Divisions</h1>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
          {daysLeft} day{daysLeft !== 1 ? "s" : ""} left
        </span>
      </div>

      {/* Tier crest */}
      <div
        className="mb-5 p-4 flex items-center gap-4"
        style={{ borderRadius: 18, background: `linear-gradient(135deg, ${tier.color}22, var(--bg-card))`, border: `2px solid ${tier.color}`, borderBottom: `5px solid ${tier.color}` }}
      >
        <TierCrest color={tier.color} index={TIERS.findIndex((t) => t.id === tier.id)} />
        <div className="flex-1">
          <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Your division</div>
          <div className="font-display text-2xl" style={{ color: tier.color }}>{tier.name}</div>
          <div className="text-xs font-semibold mt-0.5" style={{ color: "var(--text-secondary)" }}>
            Division {TIERS.findIndex((t) => t.id === tier.id) + 1} of {TIERS.length}
            {nextTier && <> · top {promoteCount} → {nextTier.name}</>}
          </div>
        </div>
      </div>

      {/* Rival callout */}
      <div className="card-i p-4 mb-5 flex items-center gap-3" style={{ borderColor: "var(--duo-orange)" }}>
        <span style={{ fontSize: 26 }}>🤺</span>
        <div className="flex-1">
          <div className="text-sm font-extrabold" style={{ color: "var(--text-primary)" }}>Your rival: {rivalName}</div>
          <div className="text-xs font-semibold" style={{ color: rivalDiff >= 0 ? "var(--ats-green)" : "var(--ats-red)" }}>
            {rivalDiff >= 0 ? `You're ahead by ${rivalDiff} XP — keep it up.` : `Behind by ${-rivalDiff} XP — close the gap.`}
          </div>
        </div>
      </div>

      {/* Standings */}
      <div className="card overflow-hidden">
        <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: "0.5px solid var(--border)", background: "var(--bg)" }}>
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>This week's table</span>
          <span className="text-[11px] font-bold" style={{ color: "var(--text-muted)" }}>You're #{youRank}</span>
        </div>
        <div>
          {standings.map((s, i) => {
            const rank = i + 1;
            const inPromote = rank <= promoteCount;
            const inRelegate = rank > standings.length - relegateCount;
            const showPromoteLine = rank === promoteCount + 1;
            const showRelegateLine = rank === standings.length - relegateCount + 1;
            return (
              <div key={s.name + i}>
                {showPromoteLine && <ZoneLine label="Promotion zone ↑" color="var(--ats-green)" top />}
                {showRelegateLine && <ZoneLine label="Relegation zone ↓" color="var(--ats-red)" />}
                <div
                  className="px-4 py-2.5 flex items-center gap-3"
                  style={{
                    background: s.you ? "var(--primary-light)" : "transparent",
                    borderBottom: "0.5px solid var(--border)",
                  }}
                >
                  <span
                    className="font-extrabold font-mono text-sm w-7 text-center flex-shrink-0"
                    style={{ color: inPromote ? "var(--ats-green)" : inRelegate ? "var(--ats-red)" : "var(--text-muted)" }}
                  >
                    {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : rank}
                  </span>
                  <Avatar config={s.avatar} size={32} rounded={9} animated={false} />
                  <span className="flex-1 text-sm font-bold truncate" style={{ color: s.you ? "var(--primary)" : "var(--text-primary)" }}>
                    {s.name}{s.rival && <span className="ml-1.5 text-[10px] font-extrabold" style={{ color: "var(--duo-orange)" }}>RIVAL</span>}
                  </span>
                  <span className="text-sm font-extrabold font-mono flex-shrink-0" style={{ color: "var(--text-secondary)" }}>
                    {s.xp.toLocaleString()} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-center mt-5" style={{ color: "var(--text-muted)" }}>
        Earn XP by studying anywhere in {`Certus`}. The table settles every Monday — finish top {promoteCount} to move up a division.
      </p>
    </div>
  );
}

function ZoneLine({ label, color, top }: { label: string; color: string; top?: boolean }) {
  return (
    <div
      className="px-4 py-1 flex items-center gap-2"
      style={{ background: `${color}14`, borderTop: top ? `1px dashed ${color}` : undefined, borderBottom: !top ? `1px dashed ${color}` : undefined }}
    >
      <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color }}>{label}</span>
    </div>
  );
}

function TierCrest({ color, index }: { color: string; index: number }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" className="flex-shrink-0">
      <path d="M26 3 L46 11 V26 C46 39 37 46 26 49 C15 46 6 39 6 26 V11 Z" fill={`${color}22`} stroke={color} strokeWidth="2.5" />
      <text x="26" y="33" textAnchor="middle" fontSize="18" fontWeight="800" fill={color}>{index + 1}</text>
    </svg>
  );
}
