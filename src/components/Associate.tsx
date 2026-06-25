"use client";

// Sterling — the Certus bull, as a compact tutor/brand head.
// Floats gently and blinks, reusing .av-idle / .av-eyes from globals.css.
export default function AssociateCharacter({ size = 40, animated = true }: { size?: number; animated?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden style={{ display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id="assoc-fur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5b6579" /><stop offset="1" stopColor="#3a4356" /></linearGradient>
        <linearGradient id="assoc-horn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6efda" /><stop offset="1" stopColor="#d6c6a0" /></linearGradient>
      </defs>
      <g className={animated ? "av-idle" : undefined} style={{ transformOrigin: "center bottom" }}>
        {/* shoulders / suit */}
        <path d="M11 64 C12 52 21 47 32 47 C43 47 52 52 53 64 Z" fill="#1f2c49" />
        <path d="M28 47 L32 55 L36 47 Z" fill="#fff" />
        <path d="M32 49 l-2.4 2.6 2.4 11 2.4 -11 z" fill="#f2b50a" />
        {/* neck */}
        <rect x="28.5" y="40" width="7" height="8" rx="3" fill="#454e60" />
        {/* horns */}
        <path d="M22 17 C16 13 11 13 6 7 C9 14 15 16 21 19 Z" fill="url(#assoc-horn)" stroke="#c9b888" strokeWidth="0.5" />
        <path d="M42 17 C48 13 53 13 58 7 C55 14 49 16 43 19 Z" fill="url(#assoc-horn)" stroke="#c9b888" strokeWidth="0.5" />
        {/* ears */}
        <ellipse cx="16" cy="27" rx="5" ry="3.2" fill="#3a4356" transform="rotate(-20 16 27)" />
        <ellipse cx="48" cy="27" rx="5" ry="3.2" fill="#3a4356" transform="rotate(20 48 27)" />
        {/* head */}
        <ellipse cx="32" cy="27" rx="15" ry="13.5" fill="url(#assoc-fur)" />
        {/* muzzle */}
        <ellipse cx="32" cy="32" rx="10" ry="7.5" fill="#bcc4d2" />
        <ellipse cx="28" cy="31.5" rx="1.5" ry="2" fill="#6b7486" /><ellipse cx="36" cy="31.5" rx="1.5" ry="2" fill="#6b7486" />
        <path d="M30 35 a3 2.4 0 0 0 4 0" fill="none" stroke="#f2b50a" strokeWidth="1.3" />
        {/* eyes (blink) */}
        <g className={animated ? "av-eyes" : undefined} style={{ transformOrigin: "center" }}>
          <ellipse cx="26.5" cy="24" rx="3.6" ry="4.3" fill="#fff" /><circle cx="27.2" cy="24.6" r="2" fill="#23232b" />
          <ellipse cx="37.5" cy="24" rx="3.6" ry="4.3" fill="#fff" /><circle cx="38.2" cy="24.6" r="2" fill="#23232b" />
        </g>
        {/* brows */}
        <rect x="22.5" y="18.5" width="7" height="1.7" rx="0.9" fill="#2c3343" />
        <rect x="34.5" y="18.5" width="7" height="1.7" rx="0.9" fill="#2c3343" />
      </g>
    </svg>
  );
}
