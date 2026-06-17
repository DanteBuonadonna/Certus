"use client";

import { useMemo } from "react";

// Dependency-free confetti burst. Renders a fixed-position layer of colored
// pieces that fall and spin via the confettiFall keyframe in globals.css.
// Mount it conditionally; it self-renders for ~3s then the parent unmounts it.
const COLORS = ["#58cc02", "#1cb0f6", "#ffc800", "#ff4b4b", "#a560f0", "#ff9600"];

export default function Confetti({ count = 80 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.6;
        const duration = 2.2 + Math.random() * 1.6;
        const size = 7 + Math.random() * 8;
        const color = COLORS[i % COLORS.length];
        const rounded = Math.random() > 0.5;
        return { id: i, left, delay, duration, size, color, rounded };
      }),
    [count]
  );

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 60,
      }}
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: 0,
            left: `${p.left}%`,
            width: p.size,
            height: p.size * (p.rounded ? 1 : 0.5),
            background: p.color,
            borderRadius: p.rounded ? "50%" : 2,
            animation: `confettiFall ${p.duration}s linear ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}
