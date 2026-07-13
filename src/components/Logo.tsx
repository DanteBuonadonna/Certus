// ============================================================
// Certus logo — the open book that forms a C.
// A bold "C" (the book's cover + spine) with page leaves fanning
// out beneath it. Two meanings in one shape: Certus, and studying.
//
// Three renderings, one source of truth:
//   • full   — gradient, page fan. Default. Used ≥ 22px.
//   • simple — bold C + a single page. Auto-used < 22px (favicon,
//              tab, tiny UI) because the fan's thin tips mush
//              together at that size.
//   • mono   — single flat colour (currentColor) for dark/photo
//              backgrounds, print, and one-colour contexts.
// ============================================================

import React from "react";

// The C — book cover + spine.
const C_PATH =
  "M 38.2 7.8 L 18.8 12.4 L 18.8 30.6 L 38.2 36.2 L 38.2 29.0 L 26.2 25.8 L 26.2 17.4 L 38.2 14.6 Z";
// Page leaves, fanning out from the spine and tapering to points.
const PAGE_BACK = "M 8.6 18.6 L 11.6 17.3 L 11.6 32.4 L 28.6 39.4 Z";
const PAGE_FRONT = "M 12.2 16.4 L 15.2 15.1 L 15.2 31.4 L 33.0 38.2 Z";

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
  // Below ~22px the tapered page tips collapse into noise, so drop to the
  // reduced mark. Same silhouette, fewer parts — it still reads as the C.
  const reduced = simple ?? size < 22;

  // Unique gradient id so multiple marks on one page don't collide.
  const gid = React.useMemo(() => `certus-g-${++uid}`, []);
  const fill = mono ? "currentColor" : `url(#${gid})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Certus"
      style={{ display: "block", flexShrink: 0 }}
    >
      {!mono && (
        <defs>
          <linearGradient id={gid} x1="0.15" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#C74BF2" />
            <stop offset="50%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
      )}

      {!reduced && <path d={PAGE_BACK} fill={fill} opacity={mono ? 0.45 : 0.45} />}
      <path d={PAGE_FRONT} fill={fill} opacity={mono ? 0.7 : 0.7} />
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
    <span style={{ display: "inline-flex", alignItems: "center", gap: markSize * 0.32 }}>
      <LogoMark size={markSize} mono={mono} />
      <span
        className="font-display"
        style={{ fontSize: textSize, color, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1 }}
      >
        Certus
      </span>
    </span>
  );
}
