"use client";

// ============================================================
// Mobile tab bar — the Duolingo pattern.
//
// The sidebar has 13 destinations. On a phone they were all buried behind a
// hamburger, which meant the core loop (learn → practice → mock) was invisible
// and everything felt like a menu. Duolingo ships FIVE tabs and nothing else.
//
// Five here too. Everything that isn't the daily loop lives under "More".
// Desktop keeps the full sidebar — this is md:hidden.
// ============================================================

import Link from "next/link";
import { usePathname } from "next/navigation";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const ICONS = {
  learn: (
    <svg width="23" height="23" viewBox="0 0 24 24" {...S}>
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H10a2 2 0 0 1 2 2v13a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 1 3 16Z" />
      <path d="M21 5.5A1.5 1.5 0 0 0 19.5 4H14a2 2 0 0 0-2 2v13a1.5 1.5 0 0 1 1.5-1.5h6A1.5 1.5 0 0 0 21 16Z" />
    </svg>
  ),
  practice: (
    <svg width="23" height="23" viewBox="0 0 24 24" {...S}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.3a2.9 2.9 0 1 1 3.7 3.5c-.6.2-.9.7-.9 1.3v.4" />
      <circle cx="12" cy="17.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  mock: (
    <svg width="23" height="23" viewBox="0 0 24 24" {...S}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2" />
      <path d="M9 2h6" />
    </svg>
  ),
  league: (
    <svg width="23" height="23" viewBox="0 0 24 24" {...S}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0Z" />
      <path d="M7 5H4.5A1.5 1.5 0 0 0 3 6.5C3 8.5 4.8 10 7 10" />
      <path d="M17 5h2.5A1.5 1.5 0 0 1 21 6.5c0 2-1.8 3.5-4 3.5" />
      <path d="M12 13v4M8.5 21h7M10 17h4l.8 4H9.2Z" />
    </svg>
  ),
  more: (
    <svg width="23" height="23" viewBox="0 0 24 24" {...S}>
      <circle cx="5.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
};

// The daily loop, and nothing else. If it isn't something you do most days,
// it belongs under More.
const TABS = [
  { href: "/dashboard", label: "Learn", icon: ICONS.learn, match: ["/dashboard", "/learn", "/exams"] },
  { href: "/practice", label: "Practice", icon: ICONS.practice, match: ["/practice", "/flashcards", "/challenges"] },
  { href: "/mock", label: "Mock", icon: ICONS.mock, match: ["/mock", "/boss"] },
  { href: "/league", label: "League", icon: ICONS.league, match: ["/league"] },
  { href: "/profile", label: "More", icon: ICONS.more, match: ["/profile", "/shop", "/career", "/skilltree", "/billing"] },
];

export default function MobileTabBar() {
  const pathname = usePathname() || "";

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        // Clears the iPhone home indicator. Without this the tabs sit under it.
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
      aria-label="Main"
    >
      <ul className="flex items-stretch justify-around">
        {TABS.map((t) => {
          const active = t.match.some((m) => pathname === m || pathname.startsWith(m + "/"));
          return (
            <li key={t.href} className="flex-1">
              <Link
                href={t.href}
                aria-current={active ? "page" : undefined}
                className="flex flex-col items-center justify-center gap-0.5 py-2"
                style={{
                  color: active ? "var(--primary)" : "var(--text-muted)",
                  textDecoration: "none",
                  // Big enough to hit with a thumb without looking.
                  minHeight: 54,
                }}
              >
                {t.icon}
                <span style={{ fontSize: 10.5, fontWeight: active ? 700 : 500, letterSpacing: "0.01em" }}>
                  {t.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
