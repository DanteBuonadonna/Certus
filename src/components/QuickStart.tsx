"use client";

// ============================================================
// QuickStart — 20-second character creation shown on first open.
// Meet Sterling, give him a starter look + your name. Full
// customization (and the rest of his wardrobe) lives in /profile.
// ============================================================

import { useState } from "react";
import {
  Profile,
  AvatarConfig,
  DEFAULT_AVATAR,
  ARCHETYPES,
  saveProfile,
} from "@/lib/profile";
import { Avatar } from "@/components/avatar";
import { playUnlock } from "@/lib/sound";

const SUIT_CHOICES = [
  { id: "suit-navy", label: "Navy" },
  { id: "suit-charcoal", label: "Charcoal" },
];
const HAT_CHOICES = [
  { id: "hat-none", label: "Bare" },
  { id: "hat-grad", label: "Grad cap" },
];
const BG_CHOICES = [
  { id: "bg-slate", label: "Slate" },
  { id: "bg-dawn", label: "Dawn" },
];

function randomAvatar(): AvatarConfig {
  const pick = <T,>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)];
  return {
    ...DEFAULT_AVATAR,
    suit: pick(["suit-navy", "suit-charcoal"] as const),
    hat: pick(["hat-none", "hat-grad"] as const),
    background: pick(["bg-slate", "bg-dawn"] as const),
  };
}

export default function QuickStart({
  onDone,
  onSkip,
}: {
  onDone: (p: Profile) => void;
  onSkip: () => void;
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<AvatarConfig>(DEFAULT_AVATAR);
  const [cheer, setCheer] = useState(false);
  const valid = name.trim().length >= 2;

  function finish() {
    if (!valid) return;
    const p: Profile = {
      name: name.trim(),
      archetype: ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)].id,
      avatar,
      title: null,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    saveProfile(p);
    onDone(p);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(13,13,20,0.62)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="pop-in"
        style={{
          width: 520,
          maxWidth: "100%",
          background: "var(--bg-card)",
          border: "2px solid var(--border-strong)",
          borderRadius: 22,
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
        }}
      >
        <div className="px-6 pt-6 pb-2 text-center">
          <div className="pill-gold mb-2">DAY ONE</div>
          <h2 className="font-display text-2xl" style={{ color: "var(--text-primary)" }}>
            Meet Sterling
          </h2>
          <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            Your study partner. Give him a starter look and a name — dress him up later as you earn Comp.
          </p>
        </div>

        <div className="px-6 py-4 flex items-center gap-5">
          {/* Preview */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <Avatar config={avatar} size={132} rounded={18} cheer={cheer} />
            <button
              className="btn-game btn-game-ghost"
              style={{ padding: "0.4rem 0.9rem", fontSize: "0.7rem" }}
              onClick={() => { setAvatar(randomAvatar()); setCheer(true); playUnlock(); setTimeout(() => setCheer(false), 900); }}
            >
              🎲 RANDOMIZE
            </button>
          </div>

          {/* Controls */}
          <div className="flex-1 min-w-0 space-y-3">
            <input
              className="input-field"
              placeholder="Your name"
              maxLength={24}
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && finish()}
            />
            <QuickPick label="Suit" choices={SUIT_CHOICES} selected={avatar.suit} onPick={(id) => setAvatar({ ...avatar, suit: id })} />
            <QuickPick label="Hat" choices={HAT_CHOICES} selected={avatar.hat} onPick={(id) => setAvatar({ ...avatar, hat: id })} />
            <QuickPick label="Backdrop" choices={BG_CHOICES} selected={avatar.background} onPick={(id) => setAvatar({ ...avatar, background: id })} />
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 flex items-center gap-3">
          <button className="btn-game btn-game-gold flex-1" disabled={!valid} onClick={finish}>
            START MY CAREER →
          </button>
          <button
            className="text-xs hover:underline flex-shrink-0"
            style={{ color: "var(--text-muted)" }}
            onClick={onSkip}
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}

function QuickPick({
  label,
  choices,
  selected,
  onPick,
}: {
  label: string;
  choices: { id: string; label: string }[];
  selected: string;
  onPick: (id: string) => void;
}) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "var(--text-muted)" }}>
        {label}
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        {choices.map((c) => {
          const active = selected === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onPick(c.id)}
              className="text-[11px] px-2.5 py-1 rounded-md font-semibold"
              style={{
                background: active ? "var(--primary-light)" : "var(--bg)",
                border: active ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
                color: active ? "var(--primary)" : "var(--text-secondary)",
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
