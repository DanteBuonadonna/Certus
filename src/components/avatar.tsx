// ============================================================
// Avatar — layered flat-geometric corporate portrait.
// Composed from: backdrop → shoulders/suit → shirt/accessory →
// head/skin → hair → face accessories. All inline SVG.
// ============================================================

import React, { useId } from "react";
import { AvatarConfig } from "@/lib/profile";

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

// ---- Suit + backdrop palettes (keyed by shop item id) -----------------------
const SUITS: Record<string, { base: string; lapel: string; stripe?: string; trim?: string }> = {
  "suit-navy": { base: "#27355c", lapel: "#1d2947" },
  "suit-charcoal": { base: "#3a3a44", lapel: "#2c2c34" },
  "suit-slate": { base: "#4d5a6b", lapel: "#3d4856" },
  "suit-pinstripe": { base: "#2b3148", lapel: "#202538", stripe: "rgba(255,255,255,0.22)" },
  "suit-burgundy": { base: "#5c2433", lapel: "#481b27" },
  "suit-tux": { base: "#15151c", lapel: "#000000" },
  "suit-gold-trim": { base: "#171a2e", lapel: "#101220", trim: "#c9a227" },
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
          <circle cx="60" cy="78" r="26" fill="#f3b87f" opacity="0.7" />
        </>
      );
    case "bg-ticker":
      return (
        <>
          <rect width="120" height="120" fill="#10241c" />
          {[14, 34, 54, 74, 94].map((x, i) => (
            <g key={x} opacity="0.5">
              <rect x={x} y={26 - (i % 3) * 6} width="5" height={12 + (i % 4) * 7} fill="#1D9E75" rx="1" />
              <rect x={x + 8} y={20 + (i % 2) * 9} width="5" height={9 + ((i + 2) % 3) * 8} fill="#2cc28f" rx="1" />
            </g>
          ))}
        </>
      );
    case "bg-skyline":
      return (
        <>
          <defs>
            <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1d2440" />
              <stop offset="100%" stopColor="#3a3f63" />
            </linearGradient>
          </defs>
          <rect width="120" height="120" fill={`url(#${uid}-sky)`} />
          {[[6, 40, 16], [26, 28, 14], [44, 48, 18], [66, 34, 13], [83, 44, 17], [102, 30, 12]].map(([x, y, w]) => (
            <g key={x}>
              <rect x={x} y={y} width={w} height={120 - y} fill="#141a30" />
              {[0, 1, 2].map((r) => (
                <rect key={r} x={x + 2.5} y={y + 5 + r * 9} width={w - 5} height="3" fill="#f3d98b" opacity={0.35 + (r % 2) * 0.25} />
              ))}
            </g>
          ))}
        </>
      );
    case "bg-library":
      return (
        <>
          <rect width="120" height="120" fill="#3d2b20" />
          {[10, 42, 74].map((y) => (
            <g key={y}>
              <rect x="0" y={y} width="120" height="24" fill="#2c1f16" />
              {[8, 22, 35, 50, 64, 78, 92, 105].map((x, i) => (
                <rect key={x} x={x} y={y + 3} width={7 + (i % 3) * 2} height="21" rx="1" fill={["#6e3b2c", "#7d5a36", "#4f5d4a", "#5a3a52"][i % 4]} />
              ))}
            </g>
          ))}
        </>
      );
    case "bg-vault":
      return (
        <>
          <defs>
            <radialGradient id={`${uid}-vault`} cx="50%" cy="42%" r="70%">
              <stop offset="0%" stopColor="#8a6d1f" />
              <stop offset="100%" stopColor="#241c06" />
            </radialGradient>
          </defs>
          <rect width="120" height="120" fill={`url(#${uid}-vault)`} />
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={8 + col * 22 + (row % 2) * 11}
                y={14 + row * 16}
                width="18"
                height="10"
                rx="2"
                fill="#c9a227"
                opacity="0.55"
              />
            ))
          )}
        </>
      );
    case "bg-slate":
    default:
      return (
        <>
          <rect width="120" height="120" fill="#454a59" />
          <circle cx="60" cy="50" r="46" fill="#505566" opacity="0.45" />
        </>
      );
  }
}

// ---- The portrait -----------------------------------------------------------
export function Avatar({
  config,
  size = 96,
  rounded = 16,
}: {
  config: AvatarConfig;
  size?: number;
  rounded?: number;
}) {
  const uid = useId().replace(/[:]/g, "");
  const skin = SKINS.find((s) => s.id === config.skin) ?? SKINS[2];
  const hairColor = (HAIR_COLORS.find((c) => c.id === config.hairColor) ?? HAIR_COLORS[1]).color;
  const suit = SUITS[config.suit] ?? SUITS["suit-navy"];
  const acc = config.accessory;

  // darker shade for skin contouring
  const skinShade = "rgba(0,0,0,0.14)";

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

        {/* Shoulders / suit */}
        <path d="M18 120 C20 88 38 78 60 78 C82 78 100 88 102 120 Z" fill={suit.base} />
        {suit.stripe && (
          <g stroke={suit.stripe} strokeWidth="1.1">
            {[28, 36, 44, 52, 68, 76, 84, 92].map((x) => (
              <line key={x} x1={x} y1="84" x2={x - 2} y2="120" />
            ))}
          </g>
        )}
        {/* Lapels */}
        <path d="M60 80 L46 120 L36 116 C40 98 48 84 60 80 Z" fill={suit.lapel} />
        <path d="M60 80 L74 120 L84 116 C80 98 72 84 60 80 Z" fill={suit.lapel} />
        {suit.trim && (
          <g stroke={suit.trim} strokeWidth="1.4" fill="none">
            <path d="M60 80 L46 120" />
            <path d="M60 80 L74 120" />
          </g>
        )}
        {/* Shirt */}
        <path d="M52 79 L60 96 L68 79 C65 77.5 55 77.5 52 79 Z" fill="#f4f4f8" />

        {/* Tie / bow tie */}
        {acc === "acc-tie-red" && (
          <g>
            <path d="M60 84 L56.5 88 L60 110 L63.5 88 Z" fill="#a31621" />
            <path d="M57 80.5 L63 80.5 L60 86 Z" fill="#c01a27" />
          </g>
        )}
        {acc === "acc-bowtie" && (
          <g fill="#27355c">
            <path d="M59 82 L48 77 L48 88 Z" />
            <path d="M61 82 L72 77 L72 88 Z" />
            <rect x="57" y="79.5" width="6" height="5.5" rx="1.5" />
          </g>
        )}

        {/* Pocket square */}
        {acc === "acc-pocket" && <path d="M73 103 L82 100 L81 109 Z" fill="#e7c5cf" />}

        {/* Gold lapel pin */}
        {acc === "acc-lapel-gold" && <circle cx="44.5" cy="98" r="2.6" fill="#c9a227" stroke="#8a6d1f" strokeWidth="0.7" />}

        {/* Heirloom watch — raised wrist, lower right */}
        {acc === "acc-watch" && (
          <g>
            <path d="M96 120 L96 108 C96 102 104 102 104 108 L104 120 Z" fill={suit.base} />
            <rect x="95" y="106" width="10" height="5" rx="2" fill="#c9a227" />
            <circle cx="100" cy="108.5" r="3.4" fill="#f4f1e4" stroke="#c9a227" strokeWidth="1.4" />
          </g>
        )}

        {/* Neck */}
        <rect x="53.5" y="62" width="13" height="16" rx="5" fill={skin.color} />
        <rect x="53.5" y="62" width="13" height="7" rx="3.5" fill={skinShade} opacity="0.5" />

        {/* Head */}
        <g>
          <ellipse cx="60" cy="46" rx="17.5" ry="20" fill={skin.color} />
          {/* ears */}
          <circle cx="42.8" cy="48" r="3.1" fill={skin.color} />
          <circle cx="77.2" cy="48" r="3.1" fill={skin.color} />
          {/* brows */}
          <rect x="49" y="41.5" width="8" height="2" rx="1" fill={hairColor} opacity="0.85" />
          <rect x="63" y="41.5" width="8" height="2" rx="1" fill={hairColor} opacity="0.85" />
          {/* eyes */}
          <circle cx="53" cy="47.5" r="1.8" fill="#23232b" />
          <circle cx="67" cy="47.5" r="1.8" fill="#23232b" />
          {/* nose */}
          <path d="M60 49 L58.4 55 L61.6 55 Z" fill={skinShade} />
          {/* mouth — composed, slight confidence */}
          <path d="M54.5 60.5 Q60 64 65.5 60.5" stroke="#23232b" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.75" />
        </g>

        {/* Hair */}
        <Hair id={config.hair} color={hairColor} />

        {/* Glasses */}
        {acc === "acc-specs" && (
          <g stroke="#2b2b33" strokeWidth="1.6" fill="none">
            <rect x="46.5" y="44" width="11" height="8" rx="3" />
            <rect x="62.5" y="44" width="11" height="8" rx="3" />
            <path d="M57.5 47.5 L62.5 47.5" />
            <path d="M46.5 47 L43 46" />
            <path d="M73.5 47 L77 46" />
          </g>
        )}
        {acc === "acc-shades" && (
          <g>
            <rect x="46" y="43.5" width="12" height="8.5" rx="3" fill="#1b1b22" />
            <rect x="62" y="43.5" width="12" height="8.5" rx="3" fill="#1b1b22" />
            <path d="M58 47 L62 47 M46 46.5 L43 45.5 M74 46.5 L77 45.5" stroke="#1b1b22" strokeWidth="1.8" />
          </g>
        )}
      </g>
    </svg>
  );
}

function Hair({ id, color }: { id: string; color: string }) {
  switch (id) {
    case "h1": // buzz
      return <path d="M42.5 44 C42.5 31 50 26 60 26 C70 26 77.5 31 77.5 44 C77.5 40 73 34.5 60 34.5 C47 34.5 42.5 40 42.5 44 Z" fill={color} />;
    case "h2": // side part
      return (
        <path
          d="M42.5 46 C42 30 51 25 60 25 C70 25 78 30.5 77.5 46 C77 40 74 37 70.5 36.5 C62 36 49 35 46 39 C43.8 41.6 42.8 43.5 42.5 46 Z"
          fill={color}
        />
      );
    case "h3": // slick back
      return <path d="M42.5 45 C42.5 28 50 23.5 60 23.5 C70 23.5 77.5 28 77.5 45 C77.5 36 72.5 32.5 60 32.5 C47.5 32.5 42.5 36 42.5 45 Z M77 38 C80 40 80.5 44 79.5 47 L77.4 46.6 Z" fill={color} />;
    case "h4": // curls
      return (
        <g fill={color}>
          <circle cx="47" cy="33" r="6.5" />
          <circle cx="56" cy="28.5" r="7" />
          <circle cx="66" cy="29" r="6.8" />
          <circle cx="74" cy="34" r="6" />
          <path d="M42.5 46 C42.5 36 47 31 60 31 C73 31 77.5 36 77.5 46 C75 39 70 36.5 60 36.5 C50 36.5 45 39 42.5 46 Z" />
        </g>
      );
    case "h5": // bun
      return (
        <g fill={color}>
          <circle cx="60" cy="22.5" r="6" />
          <path d="M42.5 46 C42 31 51 25.5 60 25.5 C69 25.5 78 31 77.5 46 C75.5 38.5 71 35.5 60 35.5 C49 35.5 44.5 38.5 42.5 46 Z" />
        </g>
      );
    case "h6": // bald
    default:
      return null;
  }
}
