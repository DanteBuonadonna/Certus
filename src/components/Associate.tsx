"use client";

// The Associate — an animated little tutor character (suit + specs).
// Floats gently and blinks, reusing .av-idle / .av-eyes from globals.css.
export default function AssociateCharacter({ size = 40, animated = true }: { size?: number; animated?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden style={{ display: "block", overflow: "visible" }}>
      <g className={animated ? "av-idle" : undefined} style={{ transformOrigin: "center bottom" }}>
        {/* shoulders / suit */}
        <path d="M12 64 C13 51 21 45 32 45 C43 45 51 51 52 64 Z" fill="#27355c" />
        {/* collar + tie */}
        <path d="M27 46 L32 56 L37 46 C34.5 44.5 29.5 44.5 27 46 Z" fill="#fff" />
        <path d="M32 47 L29.6 50 L32 60 L34.4 50 Z" fill="var(--primary)" />
        {/* neck */}
        <rect x="28.5" y="40" width="7" height="8" rx="3" fill="#e0ac69" />
        {/* head */}
        <ellipse cx="32" cy="28" rx="13" ry="13.5" fill="#f1c27d" />
        {/* ears */}
        <circle cx="19.5" cy="29" r="2.3" fill="#f1c27d" />
        <circle cx="44.5" cy="29" r="2.3" fill="#f1c27d" />
        {/* hair */}
        <path d="M19 27 C19 16 25 12 32 12 C39 12 45 16 45 27 C45 20 40 18 32 18 C24 18 19 20 19 27 Z" fill="#3b2a1d" />
        {/* eyebrows */}
        <rect x="24" y="24.5" width="6" height="1.8" rx="0.9" fill="#3b2a1d" />
        <rect x="34" y="24.5" width="6" height="1.8" rx="0.9" fill="#3b2a1d" />
        {/* eyes (blink) */}
        <g className={animated ? "av-eyes" : undefined} style={{ transformOrigin: "center" }}>
          <circle cx="27" cy="29" r="2.1" fill="#23232b" />
          <circle cx="37" cy="29" r="2.1" fill="#23232b" />
          <circle cx="27.7" cy="28.3" r="0.7" fill="#fff" />
          <circle cx="37.7" cy="28.3" r="0.7" fill="#fff" />
        </g>
        {/* glasses */}
        <g stroke="#2b2b33" strokeWidth="1.3" fill="none">
          <rect x="22.5" y="26" width="9" height="6.5" rx="2.5" />
          <rect x="32.5" y="26" width="9" height="6.5" rx="2.5" />
          <path d="M31.5 28.5 L32.5 28.5" />
        </g>
        {/* smile */}
        <path d="M28 35.5 Q32 38.5 36 35.5" stroke="#23232b" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.8" />
      </g>
    </svg>
  );
}
