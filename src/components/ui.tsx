"use client";

// ============================================================
// Certus UI primitives — animated numbers, progress, gauges,
// sparklines, activity calendar, gold particle bursts.
// ============================================================

import { useEffect, useRef, useState } from "react";
import { Avatar } from "./avatar";
import type { AvatarConfig } from "@/lib/profile";
import { playUnlock, hapticLevelUp } from "@/lib/sound";

// ---- AnimatedNumber ------------------------------------------------------
// Counts from the previously rendered value to `value` with ease-out.
export function AnimatedNumber({
  value,
  duration = 800,
  format,
}: {
  value: number;
  duration?: number;
  format?: (n: number) => string;
}) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef<number>();

  useEffect(() => {
    const from = fromRef.current;
    if (from === value) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (value - from) * eased;
      setDisplay(current);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = value;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      fromRef.current = value;
    };
  }, [value, duration]);

  const rounded = Math.round(display);
  return <span>{format ? format(rounded) : rounded.toLocaleString()}</span>;
}

// ---- ProgressBar ---------------------------------------------------------
export function ProgressBar({
  pct,
  color = "var(--primary)",
  height = 8,
  sheen = true,
}: {
  pct: number;
  color?: string;
  height?: number;
  sheen?: boolean;
}) {
  const clamped = Math.min(100, Math.max(0, pct));
  return (
    <div className="progress-track" style={{ height }}>
      <div
        className={sheen ? "progress-fill" : undefined}
        style={{
          width: `${clamped}%`,
          height: "100%",
          borderRadius: 100,
          background: color,
          transition: sheen ? undefined : "width 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  );
}

// ---- Readiness Gauge -----------------------------------------------------
// Semi-circular gauge, rated like a credit instrument: CCC → AAA.
export function readinessGrade(score: number): { grade: string; label: string; color: string } {
  if (score >= 90) return { grade: "AAA", label: "Exam-ready", color: "var(--ats-green)" };
  if (score >= 80) return { grade: "AA", label: "Nearly there", color: "var(--ats-green)" };
  if (score >= 70) return { grade: "A", label: "Strong footing", color: "var(--ats-green)" };
  if (score >= 60) return { grade: "BBB", label: "Investment grade", color: "var(--ats-amber)" };
  if (score >= 50) return { grade: "BB", label: "Building", color: "var(--ats-amber)" };
  if (score >= 35) return { grade: "B", label: "Early days", color: "var(--ats-amber)" };
  return { grade: "CCC", label: "Just getting started", color: "var(--ats-red)" };
}

export function ReadinessGauge({ score, size = 190 }: { score: number; size?: number }) {
  const [animated, setAnimated] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(score), 80);
    return () => clearTimeout(t);
  }, [score]);

  const { grade, label, color } = readinessGrade(score);
  const w = size;
  const h = size * 0.62;
  const cx = w / 2;
  const cy = h * 0.92;
  const r = w * 0.38;
  const startAngle = Math.PI;
  const endAngle = 0;

  const arc = (from: number, to: number) => {
    const x1 = cx + r * Math.cos(from);
    const y1 = cy - r * Math.sin(from);
    const x2 = cx + r * Math.cos(to);
    const y2 = cy - r * Math.sin(to);
    const large = Math.abs(from - to) > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  const sweep = startAngle - (animated / 100) * (startAngle - endAngle);
  const circumference = Math.PI * r;
  const dash = (animated / 100) * circumference;

  // Needle
  const nx = cx + (r - 14) * Math.cos(sweep);
  const ny = cy - (r - 14) * Math.sin(sweep);

  return (
    <div style={{ width: w, margin: "0 auto", textAlign: "center" }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {/* Track */}
        <path d={arc(startAngle, endAngle)} fill="none" stroke="var(--bg)" strokeWidth={11} strokeLinecap="round" />
        {/* Fill */}
        <path
          d={arc(startAngle, endAngle)}
          fill="none"
          stroke={color}
          strokeWidth={11}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          style={{ transition: "stroke-dasharray 1s cubic-bezier(0.22,1,0.36,1), stroke 0.4s" }}
        />
        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={nx}
          y2={ny}
          stroke="var(--text-primary)"
          strokeWidth={2}
          strokeLinecap="round"
          style={{ transition: "all 1s cubic-bezier(0.22,1,0.36,1)" }}
        />
        <circle cx={cx} cy={cy} r={4} fill="var(--text-primary)" />
        {/* Scale labels */}
        <text x={cx - r} y={cy + 14} textAnchor="middle" fontSize={9} fill="var(--text-muted)">0</text>
        <text x={cx + r} y={cy + 14} textAnchor="middle" fontSize={9} fill="var(--text-muted)">100</text>
      </svg>
      <div style={{ marginTop: -6 }}>
        <span
          className="font-display"
          style={{ fontSize: "2rem", color, fontWeight: 600, letterSpacing: "0.01em" }}
        >
          {grade}
        </span>
        <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: 2 }}>
          Readiness <AnimatedNumber value={score} /> / 100 · {label}
        </div>
      </div>
    </div>
  );
}

// ---- Sparkline -----------------------------------------------------------
export function Sparkline({
  data,
  width = 220,
  height = 48,
  color = "var(--primary)",
}: {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
}) {
  if (data.length < 2) return null;
  const max = Math.max(...data, 1);
  const pad = 4;
  const stepX = (width - pad * 2) / (data.length - 1);
  const points = data.map((v, i) => {
    const x = pad + i * stepX;
    const y = height - pad - (v / max) * (height - pad * 2);
    return [x, y] as const;
  });
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L ${points[points.length - 1][0].toFixed(1)} ${height - pad} L ${pad} ${height - pad} Z`;
  const id = useRef(`spark-${Math.random().toString(36).slice(2, 8)}`).current;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r={3} fill={color} />
    </svg>
  );
}

// ---- Activity calendar (GitHub-style) ------------------------------------
export function ActivityCalendar({
  data,
}: {
  data: { date: string; minutes: number }[];
}) {
  // Index minutes by date.
  const byDate = new Map(data.map((d) => [d.date, d.minutes]));
  const today = new Date();

  // Build columns of full weeks (Sun→Sat), ending this week. 17 weeks ≈ 4 months.
  const WEEKS = 17;
  const end = new Date(today);
  end.setDate(end.getDate() + (6 - end.getDay())); // end of current week
  const cells: { date: string; minutes: number; future: boolean; month: number }[][] = [];
  for (let w = WEEKS - 1; w >= 0; w--) {
    const col: { date: string; minutes: number; future: boolean; month: number }[] = [];
    for (let d = 0; d < 7; d++) {
      const day = new Date(end);
      day.setDate(end.getDate() - w * 7 - (6 - d));
      const iso = day.toISOString().slice(0, 10);
      col.push({
        date: iso,
        minutes: byDate.get(iso) ?? 0,
        future: day > today,
        month: day.getMonth(),
      });
    }
    cells.push(col);
  }

  function shade(min: number) {
    if (min === 0) return "var(--bg)";
    if (min < 20) return "color-mix(in srgb, var(--primary) 25%, var(--bg))";
    if (min < 45) return "color-mix(in srgb, var(--primary) 50%, var(--bg))";
    if (min < 90) return "color-mix(in srgb, var(--primary) 75%, var(--bg))";
    return "var(--primary)";
  }

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // Month label whenever a column starts a new month.
  const monthLabels = cells.map((col, i) => {
    const m = col[0].month;
    const prev = i > 0 ? cells[i - 1][0].month : -1;
    return m !== prev ? MONTHS[m] : "";
  });

  const CELL = 13;
  const GAP = 3;

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ display: "flex", gap: GAP, marginBottom: 4, marginLeft: 22 }}>
        {monthLabels.map((m, i) => (
          <div key={i} style={{ width: CELL, fontSize: 9, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
            {m}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: GAP }}>
        {/* Weekday gutter */}
        <div style={{ display: "flex", flexDirection: "column", gap: GAP, width: 19 }}>
          {["", "M", "", "W", "", "F", ""].map((d, i) => (
            <div key={i} style={{ height: CELL, fontSize: 9, color: "var(--text-muted)", lineHeight: `${CELL}px` }}>
              {d}
            </div>
          ))}
        </div>
        {cells.map((col, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
            {col.map((c) => (
              <div
                key={c.date}
                title={c.future ? "" : `${c.date} · ${c.minutes} min`}
                style={{
                  width: CELL,
                  height: CELL,
                  borderRadius: 3,
                  background: c.future ? "transparent" : shade(c.minutes),
                  border: c.future ? "0.5px dashed var(--border)" : "0.5px solid var(--border)",
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8, justifyContent: "flex-end" }}>
        <span style={{ fontSize: 9, color: "var(--text-muted)", marginRight: 2 }}>Less</span>
        {[0, 15, 30, 60, 95].map((m) => (
          <div key={m} style={{ width: 10, height: 10, borderRadius: 2, background: shade(m), border: "0.5px solid var(--border)" }} />
        ))}
        <span style={{ fontSize: 9, color: "var(--text-muted)", marginLeft: 2 }}>More</span>
      </div>
    </div>
  );
}

// ---- Gold particle burst (level-up / mastery moments) ---------------------
export function GoldBurst({ count = 18 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
    const dist = 40 + Math.random() * 70;
    return {
      dx: `${Math.cos(angle) * dist}px`,
      dy: `${Math.sin(angle) * dist}px`,
      delay: `${Math.random() * 0.12}s`,
      size: 4 + Math.random() * 5,
    };
  });
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible" }}>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              "--dx": p.dx,
              "--dy": p.dy,
              "--delay": p.delay,
              width: p.size,
              height: p.size,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

// ---- Coin shower -----------------------------------------------------------
export function CoinShower({ count = 16 }: { count?: number }) {
  const coins = Array.from({ length: count }, () => ({
    left: `${6 + Math.random() * 88}%`,
    delay: `${Math.random() * 0.7}s`,
    fall: `${180 + Math.random() * 140}px`,
    spin: `${260 + Math.random() * 320}deg`,
    size: 10 + Math.random() * 8,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", borderRadius: "inherit" }}>
      {coins.map((c, i) => (
        <span
          key={i}
          className="coin"
          style={
            {
              left: c.left,
              width: c.size,
              height: c.size,
              "--delay": c.delay,
              "--fall": c.fall,
              "--spin": c.spin,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

// ---- Level-up overlay ("PROMOTION") -----------------------------------------
export function LevelUpOverlay({
  level,
  rank,
  onDone,
  avatar,
}: {
  level: number;
  rank: string;
  onDone: () => void;
  avatar?: AvatarConfig;
}) {
  const raise = level * 50; // Comp "raise" celebrated at each promotion
  useEffect(() => {
    playUnlock();
    hapticLevelUp();
    const t = setTimeout(onDone, 4200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(13,13,20,0.66)", backdropFilter: "blur(4px)" }}
      onClick={onDone}
    >
      <div
        className="pop-in"
        style={{
          position: "relative",
          padding: "2.4rem 2.8rem 2rem",
          textAlign: "center",
          background: "var(--bg-card)",
          border: "2.5px solid var(--gold)",
          borderRadius: 24,
          boxShadow: "0 6px 0 var(--gold-deep), var(--shadow-lg), var(--glow-gold)",
          overflow: "hidden",
          maxWidth: 380,
        }}
      >
        <div className="rays" style={{ opacity: 0.7 }} />
        <CoinShower count={22} />
        <div style={{ position: "relative" }}>
          <GoldBurst count={26} />
          <div className="pill-gold" style={{ marginBottom: 14, fontSize: "0.85rem", padding: "5px 16px" }}>
            PROMOTION
          </div>

          {/* The player, celebrating */}
          {avatar && (
            <div className="flex justify-center mb-3">
              <div style={{ borderRadius: 20, border: "3px solid var(--gold)", boxShadow: "var(--glow-gold)", overflow: "hidden" }}>
                <Avatar config={avatar} size={104} rounded={17} cheer />
              </div>
            </div>
          )}

          <div
            className="font-display"
            style={{ fontSize: "2.8rem", lineHeight: 1, color: "var(--text-primary)", textShadow: "0 2px 0 rgba(201,162,39,0.3)" }}
          >
            Level {level}
          </div>
          {/* Engraved rank nameplate */}
          <div
            style={{
              display: "inline-block",
              marginTop: 10,
              padding: "5px 18px",
              borderRadius: 8,
              background: "var(--gold-bg)",
              border: "1.5px solid var(--gold-border)",
              fontSize: "1.1rem",
              color: "var(--gold)",
              fontWeight: 800,
              letterSpacing: "0.04em",
            }}
          >
            {rank}
          </div>
          <div className="anim-xp" style={{ fontSize: "0.95rem", color: "var(--ats-green)", marginTop: 14, fontWeight: 800 }}>
            Comp raise +${raise.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", marginTop: 10, fontWeight: 600 }}>
            The desk noticed. Keep compounding.
          </div>
        </div>
      </div>
    </div>
  );
}
