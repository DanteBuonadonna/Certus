"use client";

import { useMemo } from "react";

// A gold coin face. The `spin` flag gives it a continuous flip animation.
export function Coin({ size = 20, spin = false }: { size?: number; spin?: boolean }) {
  return (
    <span
      className={spin ? "coin-spin" : undefined}
      style={{ display: "inline-block", width: size, height: size, lineHeight: 0 }}
    >
      <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden>
        <circle cx="10" cy="10" r="9" fill="var(--gold-bright)" stroke="var(--gold-deep, #8a6d1f)" strokeWidth="1.6" />
        <circle cx="10" cy="10" r="5.8" fill="none" stroke="var(--gold-deep, #8a6d1f)" strokeWidth="1" opacity="0.55" />
        {/* "C" for Comp, not "$". A dollar sign on the play-money coin is what
            made people think the Perks Desk charged real money. */}
        <text x="10" y="13.8" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5d4a12">C</text>
      </svg>
    </span>
  );
}

// A burst of coins that fly upward-and-out, used on earn/spend moments.
// Mount briefly (parent removes after ~1s). Each coin gets a random vector.
export function CoinBurst({ count = 10, size = 22 }: { count?: number; size?: number }) {
  const coins = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const angle = (-90 + (Math.random() * 120 - 60)) * (Math.PI / 180);
        const dist = 60 + Math.random() * 90;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        return {
          id: i,
          dx0: dx * 0.25,
          dy0: dy * 0.25 - 12,
          dx,
          dy,
          delay: Math.random() * 0.12,
          dur: 0.7 + Math.random() * 0.4,
        };
      }),
    [count]
  );

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible", zIndex: 20 }}>
      {coins.map((c) => (
        <span
          key={c.id}
          className="coin-fly"
          style={
            {
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: -size / 2,
              marginTop: -size / 2,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.dur}s`,
              "--dx0": `${c.dx0}px`,
              "--dy0": `${c.dy0}px`,
              "--dx": `${c.dx}px`,
              "--dy": `${c.dy}px`,
            } as React.CSSProperties
          }
        >
          <Coin size={size} />
        </span>
      ))}
    </div>
  );
}
