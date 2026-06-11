// ============================================================
// Certus icon set — consistent 24-grid stroke icons.
// Replaces all emoji so the product reads professional, not playful.
// Color comes from `currentColor`; set it via style/className.
// ============================================================

import React from "react";

export interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

function base(
  { size = 16, strokeWidth = 2, className, style }: IconProps,
  children: React.ReactNode,
  filled = false
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Streak flame. */
export const FlameIcon = (p: IconProps) =>
  base(p, <path d="M12 2c1 4-4 5.5-4 10a4 4 0 008 0c0-1.5-.6-2.7-1.4-3.8-.4 1-.9 1.6-1.9 2.1.5-2.8-.2-5.8-.7-8.3z" />);

/** XP bolt. */
export const BoltIcon = (p: IconProps) =>
  base(p, <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />);

export const ClockIcon = (p: IconProps) =>
  base(p, <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>);

export const TrophyIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4h10v6a5 5 0 01-10 0V4z" />
      <path d="M7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4" />
    </>
  );

export const TargetIcon = (p: IconProps) =>
  base(p, <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.6" /></>);

export const MedalIcon = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M9.5 9.5L6 2.5M14.5 9.5L18 2.5M10.5 2.5h3" />
      <path d="M12 12l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3L12 12z" />
    </>
  );

export const CalendarCheckIcon = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
      <path d="M9 14.5l2.2 2.2L15.5 12.5" />
    </>
  );

export const TrendUpIcon = (p: IconProps) =>
  base(p, <><path d="M3 18l6-7 4 4 8-9" /><path d="M15.5 6H21v5.5" /></>);

export const BookIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M2 4h6a4 4 0 014 4v13a3 3 0 00-3-3H2V4z" />
      <path d="M22 4h-6a4 4 0 00-4 4v13a3 3 0 013-3h7V4z" />
    </>
  );

export const CheckIcon = (p: IconProps) =>
  base(p, <path d="M4.5 12.5l5 5L19.5 6.5" />);

export const CheckCircleIcon = (p: IconProps) =>
  base(p, <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16.5 9.5" /></>);

export const LockIcon = (p: IconProps) =>
  base(p, <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>);

export const ShieldIcon = (p: IconProps) =>
  base(p, <path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6l8-3z" />);

export const ShieldCheckIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6l8-3z" />
      <path d="M8.5 11.8l2.4 2.4 4.6-4.9" />
    </>
  );

export const SunriseIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 9V3M9 5.5L12 3l3 2.5" />
      <path d="M5.5 17a6.5 6.5 0 0113 0" />
      <path d="M2 17h2M20 17h2M4.6 11.6l1.4 1.4M19.4 11.6L18 13M2 21h20" />
    </>
  );

export const MountainIcon = (p: IconProps) =>
  base(p, <><path d="M3 19l6.5-11 4 6.5L16 11l5 8H3z" /><circle cx="17.5" cy="5.5" r="1.6" /></>);

export const FlagIcon = (p: IconProps) =>
  base(p, <><path d="M5 21V4" /><path d="M5 4c3-1.8 6 1.8 9 0v8c-3 1.8-6-1.8-9 0" /></>);

export const LaurelIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M5 4c-1 5 .5 11 7 14 6.5-3 8-9 7-14" />
      <path d="M5 4c2.5.5 4 2 4.5 4M19 4c-2.5.5-4 2-4.5 4M4.5 9.5c2 .3 3.4 1.3 4.2 3M19.5 9.5c-2 .3-3.4 1.3-4.2 3" />
      <path d="M12 21v-3" />
    </>
  );

export const BriefcaseIcon = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="7.5" width="18" height="13" rx="2" />
      <path d="M9 7.5V5.5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
      <path d="M11 13v2h2v-2" />
    </>
  );

export const GaugeIcon = (p: IconProps) =>
  base(p, <><path d="M4 18a9 9 0 1116 0" /><path d="M12 14l4-5" /><circle cx="12" cy="14" r="1" /></>);

export const ColumnsIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M3 21h18M4 18h16M12 3L4 7.5h16L12 3z" />
      <path d="M6 10.5V18M10 10.5V18M14 10.5V18M18 10.5V18" />
    </>
  );

export const ScaleIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 3v18M8 21h8M12 6H5M12 6h7" />
      <path d="M5 6l-2.5 6a3 3 0 005 0L5 6zM19 6l-2.5 6a3 3 0 005 0L19 6z" />
    </>
  );

export const ClipboardIcon = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a2 2 0 012-2h2a2 2 0 012 2M9 10h6M9 14h6M9 18h3.5" />
    </>
  );

export const ChartBarIcon = (p: IconProps) =>
  base(p, <><path d="M3 21h18" /><rect x="5.5" y="11" width="3.4" height="7" rx="0.6" /><rect x="10.4" y="6" width="3.4" height="12" rx="0.6" /><rect x="15.3" y="13.5" width="3.4" height="4.5" rx="0.6" /></>);

export const SwordsIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M3.5 3.5L14 14M3.5 3.5h3.2l9.8 9.8M17.5 17.5l3 3M15 19.5l4.5-4.5" />
      <path d="M20.5 3.5L10 14M20.5 3.5h-3.2l-4.1 4.1M6.5 17.5l-3 3M9 19.5l-4.5-4.5" />
    </>
  );

export const ArrowRightIcon = (p: IconProps) =>
  base(p, <><path d="M4 12h16" /><path d="M14 6l6 6-6 6" /></>);

export const ArrowLeftIcon = (p: IconProps) =>
  base(p, <><path d="M20 12H4" /><path d="M10 6l-6 6 6 6" /></>);

export const ListIcon = (p: IconProps) =>
  base(p, <><path d="M9 6h12M9 12h12M9 18h12" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></>);

export const StarIcon = (p: IconProps) =>
  base(p, <path d="M12 2.8l2.8 5.9 6.2.8-4.6 4.4 1.2 6.2L12 17l-5.6 3.1 1.2-6.2L3 9.5l6.2-.8L12 2.8z" />);

export const FootstepsIcon = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M6 14.5c-1.8-4 0-11 2.6-11 2 0 2.6 3.5 2.2 6.5-.3 2-1.2 3.5-2.6 4.7-.9.7-1.8.6-2.2-.2z" />
      <path d="M6.4 17.5c.1 1.8.8 3 2 3s2-1.3 1.8-3.1" />
      <path d="M18 16.5c1.8-4 0-11-2.6-11-2 0-2.6 3.5-2.2 6.5.3 2 1.2 3.5 2.6 4.7.9.7 1.8.6 2.2-.2z" transform="translate(0 2)" />
    </>
  );

/**
 * Per-exam boss crest: a shield bearing the exam's emblem.
 * Drawn at any size; tinted by the exam accent.
 */
export function BossCrest({
  exam,
  accent,
  size = 72,
}: {
  exam: string;
  accent: string;
  size?: number;
}) {
  const glyph = (() => {
    switch (exam) {
      case "cfa":
        return (
          // Bank columns — The Charter Board
          <g strokeWidth="1.4">
            <path d="M24 13l-8 4.4h16L24 13z" />
            <path d="M18.5 19.5v7M24 19.5v7M29.5 19.5v7M16 29h16M17.5 26.8h13" />
          </g>
        );
      case "series-7":
        return (
          // Filing stack — The Compliance Desk
          <g strokeWidth="1.4">
            <rect x="16" y="14" width="16" height="5.4" rx="1" />
            <rect x="16" y="21" width="16" height="5.4" rx="1" />
            <path d="M21.5 16.7h5M21.5 23.7h5" />
          </g>
        );
      case "series-66":
        return (
          // Scales — The Regulator
          <g strokeWidth="1.4">
            <path d="M24 13v14M20.5 27h7M24 15.5h-5.5M24 15.5h5.5" />
            <path d="M18.5 15.5l-2 4.8a2.4 2.4 0 004 0l-2-4.8zM29.5 15.5l-2 4.8a2.4 2.4 0 004 0l-2-4.8z" />
          </g>
        );
      case "cfp":
        return (
          // Clipboard — The Planning Panel
          <g strokeWidth="1.4">
            <rect x="18" y="14" width="12" height="14" rx="1.5" />
            <path d="M21 14a1.8 1.8 0 011.8-1.6h2.4A1.8 1.8 0 0127 14M21 19h6M21 22.5h6M21 26h3.4" />
          </g>
        );
      case "cpa":
        return (
          // Bars — The Audit Board
          <g strokeWidth="1.4">
            <path d="M16.5 28h15" />
            <rect x="18" y="21" width="3" height="5" rx="0.5" />
            <rect x="22.5" y="16.5" width="3" height="9.5" rx="0.5" />
            <rect x="27" y="23" width="3" height="3" rx="0.5" />
          </g>
        );
      default:
        return (
          <g strokeWidth="1.4">
            <path d="M24 13l-8 4.4h16L24 13z" />
            <path d="M18.5 19.5v7M24 19.5v7M29.5 19.5v7M16 29h16" />
          </g>
        );
    }
  })();

  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 4l16 5.5v11.5c0 9.6-6.6 16.7-16 19.5C14.6 37.7 8 30.6 8 21V9.5L24 4z"
        fill={accent + "14"}
        stroke={accent}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <g stroke={accent} fill="none" strokeLinecap="round" strokeLinejoin="round">
        {glyph}
      </g>
    </svg>
  );
}

/** Map badge ids (studyPlan.BADGES) to icons. */
export function BadgeGlyph({ id, size = 24 }: { id: string; size?: number }) {
  const p = { size, strokeWidth: 1.8 };
  switch (id) {
    case "first-climb": return <FootstepsIcon {...p} />;
    case "streak-3": return <FlameIcon {...p} />;
    case "streak-7": return <BoltIcon {...p} />;
    case "streak-30": return <MountainIcon {...p} />;
    case "hours-10": return <ClockIcon {...p} />;
    case "hours-50": return <ChartBarIcon {...p} />;
    case "hours-100": return <LaurelIcon {...p} />;
    case "early-bird": return <SunriseIcon {...p} />;
    case "level-10": return <TrendUpIcon {...p} />;
    case "planner": return <CalendarCheckIcon {...p} />;
    default: return <MedalIcon {...p} />;
  }
}
