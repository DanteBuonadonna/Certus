"use client";

// ============================================================
// QuickStart — 20-second character creation shown on first open.
// Name + look, one screen, with a randomize dice. Full editing
// lives in /profile; this just gets the player in the door.
// ============================================================

import { useState } from "react";
import {
  Profile,
  AvatarConfig,
  DEFAULT_AVATAR,
  ARCHETYPES,
  saveProfile,
} from "@/lib/profile";
import { Avatar, SKINS, HAIRS, HAIR_COLORS } from "@/components/avatar";

function randomAvatar(): AvatarConfig {
  const pick = <T,>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)];
  return {
    ...DEFAULT_AVATAR,
    skin: pick(SKINS).id,
    hair: pick(HAIRS).id,
    hairColor: pick(HAIR_COLORS).id,
    suit: pick(["suit-navy", "suit-charcoal"] as const),
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
            Make it yours — 20 seconds
          </h2>
          <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            Quick look + a name. Fine-tune everything later in your Profile.
          </p>
        </div>

        <div className="px-6 py-4 flex items-center gap-5">
          {/* Preview */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <Avatar config={avatar} size={132} rounded={18} />
            <button
              className="btn-game btn-game-ghost"
              style={{ padding: "0.4rem 0.9rem", fontSize: "0.7rem" }}
              onClick={() => setAvatar(randomAvatar())}
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
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "var(--text-muted)" }}>
                Skin
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {SKINS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setAvatar({ ...avatar, skin: s.id })}
                    className="rounded-full"
                    style={{
                      width: 24,
                      height: 24,
                      background: s.color,
                      border: avatar.skin === s.id ? "2.5px solid var(--primary)" : "2px solid var(--border-strong)",
                    }}
                    aria-label="skin tone"
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "var(--text-muted)" }}>
                Hair
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {HAIRS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setAvatar({ ...avatar, hair: h.id })}
                    className="text-[10px] px-2 py-1 rounded-md font-semibold"
                    style={{
                      background: avatar.hair === h.id ? "var(--primary-light)" : "var(--bg)",
                      border: avatar.hair === h.id ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
                      color: avatar.hair === h.id ? "var(--primary)" : "var(--text-secondary)",
                    }}
                  >
                    {h.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                {HAIR_COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setAvatar({ ...avatar, hairColor: c.id })}
                    className="rounded-full"
                    style={{
                      width: 18,
                      height: 18,
                      background: c.color,
                      border: avatar.hairColor === c.id ? "2.5px solid var(--primary)" : "2px solid var(--border-strong)",
                    }}
                    aria-label="hair color"
                  />
                ))}
              </div>
            </div>
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
