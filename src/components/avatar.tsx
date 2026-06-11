// ============================================================
// Avatar v2 — an expressive game character in a suit.
// Bigger head, lit eyes, moods, detailed tailoring, and life:
// CSS blink (.av-eyes) + idle bob (.av-idle) from globals.css.
// ============================================================

import React, { useId } from "react";
import { AvatarConfig } from "@/lib/profile";

export type AvatarMood = "confident" | "determined" | "neutral";

// ---- Creation options (free; chosen at onboarding) -------------------------
export const SKINS = [
  { id: "s1", color: "#8d5524" },
  { id: "s2", color: "#a96b3c" },
  { id: "s3", color: "#c68642" },
  { id: "s4", color: "#e0ac69" },
  { id: "s5", color: "#f1c27d" },
  { id: "s6", color: "#ffdbac" },
];

export const HAIRS = [
  { id: "h1", name: "Buzz" },
  { id: "h2", name: "Side part" },
  { id: "h3", name: "Slick back" },
  { id: "h4", name: "Curls" },
  { id: "h5", name: "Bun" },
  { id: "h6", name: "Bald" },
];

export const HAIR_COLORS = [
  { id: "c1", color: "#1b1b1b" },
  { id: "c2", color: "#3b2a1d" },
  { id: "c3", color: "#6b4a2b" },
  { id: "c4", color: "#a8743d" },
  { id: "c5", color: "#8e8e96" },
];

// ---- Suit palettes (keyed by shop item id) ----------------------------------
const SUITS: Record<string, { base: string; lapel: string; stripe?: string; trim?: string }> = {
  "suit-navy": { base: "#2b3a66", lapel: "#1f2c50" },
  "suit-charcoal": { base: "#41414c", lapel: "#30303a" },
  "suit-slate": { base: "#53617a", lapel: "#414d62" },
  "suit-pinstripe": { base: "#2e3450", lapel: "#22273d", stripe: "rgba(255,255,255,0.25)" },
  "suit-burgundy": { base: "#67293b", lapel: "#511f2d" },
  "suit-tux": { base: "#191921", lapel: "#06060a" },
  "suit-gold-trim": { base: "#191c33", lapel: "#111324", trim: "#c9a227" },
};

function Backdrop({ id, uid }: { id: string; uid: string }) {
  switch (id) {
    case "bg-dawn":
      return (
        <>
          <defs>
            <linearGradient id={`${uid}-dawn`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f6d8b8" />
              <stop offset="100%" stopColor="#d9a8a0" />
            </linearGradient>
          </defs>
          <rect width="120" height="120" fill={`url(#${uid}-dawn)`} />
          <circle cx="60" cy="80" r="28" fill="#f3b87f" opacity="0.75" />
          <circle cx="60" cy="80" r="40" fill="#f3b87f" opacity="0.25" />
        </>
      );
    case "bg-ticker":
      return (
        <>
          <rect width="120" height="120" fill="#0e251c" />
          {[12, 32, 52, 72, 92].map((x, i) => (
            <g key={x} opacity="0.55">
              <rect x={x} y={28 - (i % 3) * 7} width="6" height={14 + (i % 4) * 8} fill="#1D9E75" rx="1.5" />
              <rect x={x + 9} y={20 + (i % 2) * 10} width="6" height={10 + ((i + 2) % 3) * 9} fill="#2cc28f" rx="1.5" />
            </g>
          ))}
          <path d="M8 58 L30 46 L48 53 L72 38 L94 44 L114 30" stroke="#36e0a4" strokeWidth="2" fill="none" opacity="0.65" strokeLinecap="round" />
        </>
      );
    case "bg-skyline":
      return (
        <>
          <defs>
            <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1d2440" />
              <stop offset="100%" stopColor="#46406b" />
            </linearGradient>
          </defs>
          <rect width="120" height="120" fill={`url(#${uid}-sky)`} />
          <circle cx="92" cy="22" r="9" fill="#f3e9c8" opacity="0.9" />
          {[[4, 42, 17], [25, 30, 15], [44, 50, 19], [67, 36, 14], [85, 46, 18], [105, 32, 13]].map(([x, y, w]) => (
            <g key={x}>
              <rect x={x} y={y} width={w} height={120 - y} fill="#141a30" />
              {[0, 1, 2].map((r) => (
                <rect key={r} x={x + 2.5} y={y + 5 + r * 10} width={w - 5} height="3.4" fill="#f3d98b" opacity={0.35 + (r % 2) * 0.3} />
              ))}
            </g>
          ))}
        </>
      );
    case "bg-library":
      return (
        <>
          <rect width="120" height="120" fill="#42302a" />
          {[8, 42, 76].map((y) => (
            <g key={y}>
              <rect x="0" y={y} width="120" height="26" fill="#2e211a" />
              {[6, 21, 35, 51, 66, 80, 95, 108].map((x, i) => (
                <rect key={x} x={x} y={y + 3} width={8 + (i % 3) * 2.5} height="23" rx="1.5" fill={["#7c4434", "#8d6740", "#566552", "#65425c", "#4f6173"][i % 5]} />
              ))}
            </g>
          ))}
        </>
      );
    case "bg-vault":
      return (
        <>
          <defs>
            <radialGradient id={`${uid}-vault`} cx="50%" cy="40%" r="75%">
              <stop offset="0%" stopColor="#9a7a24" />
              <stop offset="100%" stopColor="#241c06" />
            </radialGradient>
          </defs>
          <rect width="120" height="120" fill={`url(#${uid}-vault)`} />
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <g key={`${row}-${col}`}>
                <rect
                  x={6 + col * 23 + (row % 2) * 11}
                  y={12 + row * 17}
                  width="19"
                  height="11"
                  rx="2"
                  fill="#d9b23a"
                  opacity="0.7"
                />
                <rect
                  x={6 + col * 23 + (row % 2) * 11}
                  y={12 + row * 17}
                  width="19"
                  height="4"
                  rx="2"
                  fill="#f0d27a"
                  opacity="0.5"
                />
              </g>
            ))
          )}
        </>
      );
    case "bg-slate":
    default:
      return (
        <>
          <defs>
            <radialGradient id={`${uid}-slate`} cx="50%" cy="38%" r="75%">
              <stop offset="0%" stopColor="#5a6175" />
              <stop offset="100%" stopColor="#3b404f" />
            </radialGradient>
          </defs>
          <rect width="120" height="120" fill={`url(#${uid}-slate)`} />
        </>
      );
  }
}

// ---- The character -----------------------------------------------------------
export function Avatar({
  config,
  size = 96,
  rounded = 16,
  mood = "confident",
  animated = true,
}: {
  config: AvatarConfig;
  size?: number;
  rounded?: number;
  mood?: AvatarMood;
  animated?: boolean;
}) {
  const uid = useId().replace(/[:]/g, "");
  const skin = SKINS.find((s) => s.id === config.skin) ?? SKINS[2];
  const hairColor = (HAIR_COLORS.find((c) => c.id === config.hairColor) ?? HAIR_COLORS[1]).color;
  const suit = SUITS[config.suit] ?? SUITS["suit-navy"];
  const acc = config.accessory;
  const skinShade = "rgba(0,0,0,0.16)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ borderRadius: rounded, display: "block", flexShrink: 0 }}
      aria-label="Avatar"
    >
      <clipPath id={`${uid}-clip`}>
        <rect width="120" height="120" rx={Math.max(0, (rounded / size) * 120)} />
      </clipPath>
      <g clipPath={`url(#${uid}-clip)`}>
        <Backdrop id={config.background} uid={uid} />

        {/* soft ground shadow */}
        <ellipse cx="60" cy="119" rx="38" ry="7" fill="rgba(0,0,0,0.22)" />

        <g className={animated ? "av-idle" : undefined}>
          {/* ---- Body / tailoring ---- */}
          <path d="M15 120 C17 91 35 79.5 60 79.5 C85 79.5 103 91 105 120 Z" fill={suit.base} />
          {suit.stripe && (
            <g stroke={suit.stripe} strokeWidth="1.2">
              {[26, 34, 42, 50, 70, 78, 86, 94].map((x) => (
                <line key={x} x1={x} y1="86" x2={x - 2.5} y2="120" />
              ))}
            </g>
          )}
          {/* shirt */}
          <path d="M50.5 80.5 L60 100 L69.5 80.5 C65.5 78.6 54.5 78.6 50.5 80.5 Z" fill="#f5f5f9" />
          {/* collar wings */}
          <path d="M53 79.5 L60 84.5 L56 88.5 L51 81.5 Z" fill="#ffffff" />
          <path d="M67 79.5 L60 84.5 L64 88.5 L69 81.5 Z" fill="#ffffff" />

          {/* tie / bow tie */}
          {acc === "acc-tie-red" && (
            <g>
              <path d="M60 86 L56 91 L60 114 L64 91 Z" fill="#a31621" />
              <path d="M56.8 83 L63.2 83 L60 88.5 Z" fill="#c01a27" />
            </g>
          )}
          {acc === "acc-bowtie" && (
            <g fill="#2b3a66">
              <path d="M58.5 84.5 L46.5 79 L46.5 91 Z" />
              <path d="M61.5 84.5 L73.5 79 L73.5 91 Z" />
              <rect x="56.5" y="81.5" width="7" height="6.5" rx="2" />
            </g>
          )}

          {/* lapels */}
          <path d="M60 81 L45.5 120 L33.5 114.5 C38 97.5 46.5 84.5 60 81 Z" fill={suit.lapel} />
          <path d="M60 81 L74.5 120 L86.5 114.5 C82 97.5 73.5 84.5 60 81 Z" fill={suit.lapel} />
          {suit.trim && (
            <g stroke={suit.trim} strokeWidth="1.6" fill="none">
              <path d="M60 81 L45.5 120" />
              <path d="M60 81 L74.5 120" />
            </g>
          )}
          {/* buttons */}
          <circle cx="60" cy="106" r="1.5" fill="rgba(0,0,0,0.4)" />
          <circle cx="60" cy="114" r="1.5" fill="rgba(0,0,0,0.4)" />

          {/* pocket square */}
          {acc === "acc-pocket" && <path d="M72.5 102 L82.5 98.5 L81.5 108.5 Z" fill="#e7c5cf" />}
          {/* gold lapel pin */}
          {acc === "acc-lapel-gold" && (
            <g>
              <circle cx="43.5" cy="99" r="3" fill="#c9a227" stroke="#8a6d1f" strokeWidth="0.8" />
              <circle cx="42.6" cy="98" r="0.9" fill="#f0d27a" />
            </g>
          )}
          {/* heirloom watch — raised wrist */}
          {acc === "acc-watch" && (
            <g>
              <path d="M95 120 L95 107 C95 100.5 105 100.5 105 107 L105 120 Z" fill={suit.base} />
              <rect x="93.8" y="104.5" width="12.4" height="6" rx="2.5" fill="#c9a227" />
              <circle cx="100" cy="107.5" r="4" fill="#f4f1e4" stroke="#c9a227" strokeWidth="1.6" />
              <path d="M100 105.5 L100 107.5 L101.6 108.6" stroke="#3a2e07" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            </g>
          )}

          {/* ---- Neck & head ---- */}
          <rect x="54" y="63" width="12" height="16" rx="5.5" fill={skin.color} />
          <rect x="54" y="63" width="12" height="7.5" rx="3.5" fill={skinShade} opacity="0.55" />

          {/* ears */}
          <circle cx="38.5" cy="48" r="3.8" fill={skin.color} />
          <circle cx="81.5" cy="48" r="3.8" fill={skin.color} />
          {/* head */}
          <ellipse cx="60" cy="44" rx="21.5" ry="23" fill={skin.color} />

          {/* brows */}
          <rect x="47" y="37.5" width="9.5" height="2.6" rx="1.3" fill={hairColor} opacity="0.9"
            transform={mood === "determined" ? "rotate(7 51.75 38.8)" : undefined} />
          <rect x="63.5" y="37.5" width="9.5" height="2.6" rx="1.3" fill={hairColor} opacity="0.9"
            transform={mood === "determined" ? "rotate(-7 68.25 38.8)" : undefined} />

          {/* eyes — blink as a group */}
          <g className={animated ? "av-eyes" : undefined}>
            <ellipse cx="52.5" cy="45.5" rx="2.9" ry="3.4" fill="#23232b" />
            <ellipse cx="67.5" cy="45.5" rx="2.9" ry="3.4" fill="#23232b" />
            <circle cx="53.5" cy="44.2" r="1.1" fill="#ffffff" opacity="0.95" />
            <circle cx="68.5" cy="44.2" r="1.1" fill="#ffffff" opacity="0.95" />
          </g>

          {/* nose */}
          <path d="M60 49 L58.2 55.5 L61.8 55.5 Z" fill={skinShade} />

          {/* mouth by mood */}
          {mood === "confident" && (
            <path d="M52 59 Q60 65.5 68 59" stroke="#23232b" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
          )}
          {mood === "determined" && (
            <path d="M54.5 61 Q60 62.5 65.5 61" stroke="#23232b" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
          )}
          {mood === "neutral" && (
            <path d="M54.5 60.5 L65.5 60.5" stroke="#23232b" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
          )}

          {/* hair */}
          <Hair id={config.hair} color={hairColor} />

          {/* glasses */}
          {acc === "acc-specs" && (
            <g stroke="#2b2b33" strokeWidth="1.8" fill="none">
              <rect x="45" y="41" width="13" height="9.5" rx="4" />
              <rect x="62" y="41" width="13" height="9.5" rx="4" />
              <path d="M58 45.5 L62 45.5" />
              <path d="M45 45 L39.5 44" />
              <path d="M75 45 L80.5 44" />
            </g>
          )}
          {acc === "acc-shades" && (
            <g>
              <rect x="44.5" y="40.5" width="14" height="10" rx="4" fill="#1b1b22" />
              <rect x="61.5" y="40.5" width="14" height="10" rx="4" fill="#1b1b22" />
              <path d="M58.5 45 L61.5 45 M44.5 44.5 L39.5 43.5 M75.5 44.5 L80.5 43.5" stroke="#1b1b22" strokeWidth="2" />
              <rect x="46.5" y="42.5" width="5" height="2.5" rx="1.2" fill="#ffffff" opacity="0.25" />
              <rect x="63.5" y="42.5" width="5" height="2.5" rx="1.2" fill="#ffffff" opacity="0.25" />
            </g>
          )}
        </g>
      </g>
    </svg>
  );
}

function Hair({ id, color }: { id: string; color: string }) {
  switch (id) {
    case "h1": // buzz
      return (
        <path
          d="M38.5 46 C38.5 26.5 47 20.5 60 20.5 C73 20.5 81.5 26.5 81.5 46 C81.5 37.5 74.5 31.5 60 31.5 C45.5 31.5 38.5 37.5 38.5 46 Z"
          fill={color}
        />
      );
    case "h2": // side part
      return (
        <path
          d="M38.5 48 C38 25.5 49 19 60 19 C72 19 82 25.5 81.5 48 C81 38 77.5 34 72 33.5 C62.5 32.6 48 32 44.5 36.5 C41.5 40.2 39 43.5 38.5 48 Z"
          fill={color}
        />
      );
    case "h3": // slick back
      return (
        <g fill={color}>
          <path d="M38.5 46.5 C38.5 24.5 47.5 18.5 60 18.5 C72.5 18.5 81.5 24.5 81.5 46.5 C81.5 35.5 75 30.5 60 30.5 C45 30.5 38.5 35.5 38.5 46.5 Z" />
          <path d="M80.5 38 C84 40.5 84.5 45.5 83.2 49 L80.5 48.2 Z" />
        </g>
      );
    case "h4": // curls
      return (
        <g fill={color}>
          <circle cx="45.5" cy="30.5" r="7" />
          <circle cx="55" cy="25" r="7.5" />
          <circle cx="65.5" cy="25.5" r="7.2" />
          <circle cx="74.5" cy="31" r="6.5" />
          <path d="M38.5 46 C38.5 34 44 29 60 29 C76 29 81.5 34 81.5 46 C78.5 38 72 35 60 35 C48 35 41.5 38 38.5 46 Z" />
        </g>
      );
    case "h5": // bun
      return (
        <g fill={color}>
          <circle cx="60" cy="15.5" r="6.5" />
          <path d="M38.5 48 C38 26.5 49 20 60 20 C71 20 82 26.5 81.5 48 C79 38.5 73 34.5 60 34.5 C47 34.5 41 38.5 38.5 48 Z" />
        </g>
      );
    case "h6": // bald
    default:
      return null;
  }
}
