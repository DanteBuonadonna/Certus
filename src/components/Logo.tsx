// ============================================================
// Certus logo — the certification seal.
// A scalloped seal (the universal mark of "certified") in brand
// purple, holding a serif C with three gold ascending steps in
// its mouth — the career ladder, sealed.
// Scales from favicon (16px) to hero (any size). One source of
// truth: every surface imports from here.
// ============================================================

import React from "react";

const SEAL_PATH =
  "M 24.00 3.80 A 6.1 6.1 0 0 1 34.10 6.51 A 6.1 6.1 0 0 1 41.49 13.90 A 6.1 6.1 0 0 1 44.20 24.00 A 6.1 6.1 0 0 1 41.49 34.10 A 6.1 6.1 0 0 1 34.10 41.49 A 6.1 6.1 0 0 1 24.00 44.20 A 6.1 6.1 0 0 1 13.90 41.49 A 6.1 6.1 0 0 1 6.51 34.10 A 6.1 6.1 0 0 1 3.80 24.00 A 6.1 6.1 0 0 1 6.51 13.90 A 6.1 6.1 0 0 1 13.90 6.51 A 6.1 6.1 0 0 1 24.00 3.80 Z";

export function LogoMark({
  size = 28,
  mono = false,
}: {
  size?: number;
  /** Single-color version for dark/photo backgrounds. */
  mono?: boolean;
}) {
  const purple = mono ? "currentColor" : "#534AB7";
  const gold = mono ? "rgba(255,255,255,0.85)" : "#C9A227";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Certus" role="img">
      {/* Scalloped seal */}
      <path d={SEAL_PATH} fill={purple} />
      {/* Inner engraved rings */}
      <circle cx="24" cy="24" r="16.6" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.9" />
      <circle cx="24" cy="24" r="15.1" fill="none" stroke={gold} strokeWidth="1.1" opacity="0.9" />
      {/* The C — financial-press serif */}
      <text
        x="21.6"
        y="31.6"
        textAnchor="middle"
        fontSize="21.5"
        fontWeight="600"
        fontFamily="var(--serif, Georgia), Georgia, 'Times New Roman', serif"
        fill="#ffffff"
      >
        C
      </text>
      {/* The ladder — three gold steps rising out of the C's mouth */}
      <g fill={gold}>
        <rect x="27.9" y="26.4" width="2.1" height="3.1" rx="0.55" />
        <rect x="30.8" y="24.4" width="2.1" height="5.1" rx="0.55" />
        <rect x="33.7" y="22.4" width="2.1" height="7.1" rx="0.55" />
      </g>
    </svg>
  );
}

/** Mark + wordmark lockup. */
export function Logo({
  markSize = 28,
  textSize = 19,
  color = "var(--text-primary)",
}: {
  markSize?: number;
  textSize?: number;
  color?: string;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: markSize * 0.32 }}>
      <LogoMark size={markSize} />
      <span
        className="font-display"
        style={{ fontSize: textSize, color, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1 }}
      >
        Certus
      </span>
    </span>
  );
}
