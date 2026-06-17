"use client";

// An evolving streak flame: a cold ember when you have no streak, growing
// into a roaring fire, then a rare blue flame past 100 days. The visual
// progression makes the streak feel precious to protect.
export function streakTier(streak: number): { from: string; to: string; core: string; label: string; scale: number } {
  if (streak <= 0) return { from: "#9aa0ab", to: "#6b7280", core: "#c2c7cf", label: "ember", scale: 0.8 };
  if (streak < 3) return { from: "#ffd24a", to: "#ff9600", core: "#fff1c2", label: "spark", scale: 0.9 };
  if (streak < 7) return { from: "#ffb02e", to: "#ff6a00", core: "#ffe39a", label: "flame", scale: 1 };
  if (streak < 30) return { from: "#ff8a1e", to: "#ff3d00", core: "#ffd27a", label: "blaze", scale: 1.08 };
  if (streak < 100) return { from: "#ff5e3a", to: "#e01030", core: "#ffd0a0", label: "inferno", scale: 1.16 };
  return { from: "#5ad1ff", to: "#1c6bff", core: "#d6f3ff", label: "blue fire", scale: 1.24 };
}

export default function StreakFlame({
  streak,
  size = 40,
  showCount = false,
  animate = true,
}: {
  streak: number;
  size?: number;
  showCount?: boolean;
  animate?: boolean;
}) {
  const t = streakTier(streak);
  const s = size * t.scale;
  const cold = streak <= 0;
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size }}>
      <svg
        width={s}
        height={s}
        viewBox="0 0 48 48"
        className={animate && !cold ? "anim-flame" : undefined}
        style={{ filter: cold ? "grayscale(0.6)" : "none", overflow: "visible" }}
      >
        {/* outer flame */}
        <path
          d="M24 3 C28 13 38 17 38 29 C38 38 31 45 24 45 C17 45 10 38 10 29 C10 21 16 19 17 12 C20 16 21 18 24 18 C24 12 22 8 24 3 Z"
          fill={t.to}
        />
        {/* inner flame */}
        <path
          d="M24 14 C27 20 31 22 31 30 C31 36 28 41 24 41 C20 41 17 36 17 30 C17 25 20 24 21 19 C22.5 21.5 23 22 24 22 C24 19 23 16 24 14 Z"
          fill={t.from}
        />
        {/* hot core */}
        <ellipse cx="24" cy="33" rx="4.5" ry="6" fill={t.core} opacity="0.92" />
      </svg>
      {showCount && (
        <span
          className="font-mono"
          style={{ position: "absolute", bottom: -2, right: -2, fontSize: size * 0.34, fontWeight: 800, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
        >
          {streak}
        </span>
      )}
    </span>
  );
}
