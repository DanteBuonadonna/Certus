"use client";

import { useEffect, useRef, useState } from "react";

// An animated SVG boss creature for the Final exam.
// - Breathes/bobs and blinks while idle.
// - Flinches + flashes white and floats a "-1" when you land a hit (hitKey bump).
// - Sweats and looks woozy at low HP.
// - Collapses when defeated.
// Themed to the exam's accent color.
export default function BossMonster({
  accent,
  hpPct,
  hitKey,
  defeated,
  size = 200,
}: {
  accent: string;
  hpPct: number; // 100 = full resistance, 0 = beaten
  hitKey: number; // increment to trigger a hit reaction
  defeated?: boolean;
  size?: number;
}) {
  const [hitting, setHitting] = useState(false);
  const [sparks, setSparks] = useState<number[]>([]);
  const first = useRef(true);

  // React to a hit (hitKey change), but not on first mount.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setHitting(true);
    const id = Date.now();
    setSparks((s) => [...s, id]);
    const t1 = setTimeout(() => setHitting(false), 520);
    const t2 = setTimeout(() => setSparks((s) => s.filter((x) => x !== id)), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hitKey]);

  const groggy = hpPct <= 35 && !defeated;
  const bodyClass = defeated ? "monster-defeat" : "monster-idle";

  // Darker shade of the accent for shading.
  const dark = shade(accent, -0.22);
  const light = shade(accent, 0.22);

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {/* Floating damage numbers + sparks */}
      {sparks.map((id) => (
        <div key={id} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 }}>
          <span
            className="damage-float"
            style={{
              position: "absolute",
              top: size * 0.18,
              left: "50%",
              transform: "translateX(-50%)",
              fontWeight: 900,
              fontSize: size * 0.13,
              color: "#fff",
              textShadow: "0 2px 6px rgba(0,0,0,0.35)",
            }}
          >
            -1
          </span>
          <span
            className="hit-spark"
            style={{
              position: "absolute",
              top: size * 0.36,
              left: size * 0.5,
              width: size * 0.34,
              height: size * 0.34,
              marginLeft: -(size * 0.17),
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,255,255,0) 70%)",
            }}
          />
        </div>
      ))}

      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={hitting ? "monster-hit" : bodyClass}
        style={{ position: "relative", zIndex: 2, display: "block" }}
      >
        {/* Shadow */}
        <ellipse cx="100" cy="182" rx="48" ry="9" fill="rgba(0,0,0,0.18)" />

        {/* Horns */}
        <path d="M58 64 L48 26 L74 54 Z" fill={dark} />
        <path d="M142 64 L152 26 L126 54 Z" fill={dark} />

        {/* Body blob */}
        <path
          d="M100 38
             C56 38 38 70 38 104
             C38 150 66 176 100 176
             C134 176 162 150 162 104
             C162 70 144 38 100 38 Z"
          fill={accent}
        />
        {/* Belly highlight */}
        <ellipse cx="100" cy="128" rx="40" ry="34" fill={light} opacity="0.45" />

        {/* Arms */}
        <ellipse cx="40" cy="120" rx="12" ry="18" fill={dark} transform="rotate(18 40 120)" />
        <ellipse cx="160" cy="120" rx="12" ry="18" fill={dark} transform="rotate(-18 160 120)" />

        {/* Eyebrows — angled menacing, or flat when defeated */}
        {defeated ? (
          <>
            <line x1="62" y1="92" x2="86" y2="92" stroke={dark} strokeWidth="5" strokeLinecap="round" />
            <line x1="114" y1="92" x2="138" y2="92" stroke={dark} strokeWidth="5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <line x1="60" y1="86" x2="84" y2="96" stroke={dark} strokeWidth="6" strokeLinecap="round" />
            <line x1="140" y1="86" x2="116" y2="96" stroke={dark} strokeWidth="6" strokeLinecap="round" />
          </>
        )}

        {/* Eyes */}
        {defeated ? (
          <>
            <DeadEye cx={75} cy={108} />
            <DeadEye cx={125} cy={108} />
          </>
        ) : (
          <>
            <g className="monster-eyelid">
              <circle cx="76" cy="110" r="15" fill="#fff" />
              <circle cx={groggy ? 76 : 79} cy="112" r="7" fill="#1a1a22" />
            </g>
            <g className="monster-eyelid" style={{ animationDelay: "0.2s" }}>
              <circle cx="124" cy="110" r="15" fill="#fff" />
              <circle cx={groggy ? 124 : 121} cy="112" r="7" fill="#1a1a22" />
            </g>
          </>
        )}

        {/* Mouth */}
        {defeated ? (
          <path d="M84 146 Q100 138 116 146" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
        ) : groggy ? (
          <ellipse cx="100" cy="148" rx="13" ry="10" fill={dark} />
        ) : (
          <path d="M80 150 Q100 162 120 150 Q108 150 100 152 Q92 150 80 150 Z" fill={dark} />
        )}
        {/* Fangs when healthy */}
        {!defeated && !groggy && (
          <>
            <path d="M88 150 L92 159 L96 150 Z" fill="#fff" />
            <path d="M104 150 L108 159 L112 150 Z" fill="#fff" />
          </>
        )}

        {/* White hit-flash overlay */}
        {hitting && (
          <path
            className="monster-flash"
            d="M100 38 C56 38 38 70 38 104 C38 150 66 176 100 176 C134 176 162 150 162 104 C162 70 144 38 100 38 Z"
            fill="#fff"
          />
        )}
      </svg>

      {/* Sweat drops when groggy */}
      {groggy && (
        <>
          <Drop style={{ left: size * 0.24, top: size * 0.34 }} />
          <Drop style={{ left: size * 0.7, top: size * 0.3, animationDelay: "0.6s" }} />
        </>
      )}
    </div>
  );
}

function DeadEye({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke="#1a1a22" strokeWidth="4" strokeLinecap="round">
      <line x1={cx - 8} y1={cy - 8} x2={cx + 8} y2={cy + 8} />
      <line x1={cx + 8} y1={cy - 8} x2={cx - 8} y2={cy + 8} />
    </g>
  );
}

function Drop({ style }: { style: React.CSSProperties }) {
  return (
    <span
      className="monster-sweat"
      style={{
        position: "absolute",
        width: 9,
        height: 12,
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        background: "#7ec8f0",
        ...style,
      }}
    />
  );
}

// Lighten/darken a hex color by amount (-1..1).
function shade(hex: string, amt: number): string {
  const m = hex.replace("#", "");
  const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  const num = parseInt(full, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  const t = amt < 0 ? 0 : 255;
  const p = Math.abs(amt);
  r = Math.round((t - r) * p) + r;
  g = Math.round((t - g) * p) + g;
  b = Math.round((t - b) * p) + b;
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
