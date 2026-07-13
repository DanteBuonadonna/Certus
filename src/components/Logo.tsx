// ============================================================
// Certus logo — the open book that forms a C.
// A bold "C" (the book's cover and spine) with page leaves
// splaying out beneath it. Two meanings in one shape: Certus,
// and studying.
//
// Three renderings, one source of truth:
//   • full   — gradient, three page leaves. Default, used ≥ 22px.
//   • simple — bold C + one leaf. Auto-engages < 22px (favicon,
//              browser tab), because three thin leaves collapse
//              into noise at that size.
//   • mono   — flat currentColor, for dark/photo backgrounds,
//              print, and any one-colour context.
// ============================================================

import React from "react";

// The C — book cover + spine.
const C_PATH =
  "M 52.0 10.0 L 28.6 15.6 L 28.6 41.0 L 52.0 48.6 L 52.0 39.6 L 37.4 35.0 L 37.4 22.6 L 52.0 19.0 Z";

// Page leaves — nested, splaying right, tapering to points.
const LEAF_BACK = "M 13.0 20.0 L 16.0 18.6 L 16.0 45.0 L 34.0 52.4 L 32.0 55.0 L 13.0 47.0 Z";
const LEAF_MID = "M 17.4 17.9 L 20.4 16.5 L 20.4 43.3 L 40.5 51.6 L 38.5 54.2 L 17.4 45.4 Z";
const LEAF_FRONT = "M 21.8 15.8 L 24.8 14.4 L 24.8 41.6 L 47.0 50.8 L 45.0 53.4 L 21.8 43.8 Z";

let uid = 0;

export function LogoMark({
  size = 28,
  mono = false,
  /** Force the reduced mark (otherwise it auto-engages below 22px). */
  simple,
}: {
  size?: number;
  /** Single-colour version for dark/photo backgrounds. */
  mono?: boolean;
  simple?: boolean;
}) {
  const reduced = simple ?? size < 22;

  // Unique gradient id so several marks on one page don't collide.
  const gid = React.useMemo(() => `certus-g-${++uid}`, []);
  const fill = mono ? "currentColor" : `url(#${gid})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Certus"
      style={{ display: "block", flexShrink: 0 }}
    >
      {!mono && (
        <defs>
          <linearGradient id={gid} x1="0.1" y1="0.05" x2="0.75" y2="1">
            <stop offset="0%" stopColor="#D14BF5" />
            <stop offset="45%" stopColor="#9B4DEA" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
      )}

      {!reduced && <path d={LEAF_BACK} fill={fill} />}
      {!reduced && <path d={LEAF_MID} fill={fill} />}
      <path d={LEAF_FRONT} fill={fill} />
      <path d={C_PATH} fill={fill} />
    </svg>
  );
}

/** Mark + wordmark lockup. */
export function Logo({
  markSize = 28,
  textSize = 19,
  color = "var(--text-primary)",
  mono = false,
}: {
  markSize?: number;
  textSize?: number;
  color?: string;
  mono?: boolean;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: markSize * 0.3 }}>
      <LogoMark size={markSize} mono={mono} />
      <span
        className="font-display"
        style={{ fontSize: textSize, color, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        certus
      </span>
    </span>
  );
}
