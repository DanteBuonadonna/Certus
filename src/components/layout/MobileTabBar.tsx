"use client";

// ============================================================
// Mobile tab bar — the Duolingo pattern.
//
// 5 tabs. Desktop keeps the full sidebar; this is md:hidden. 60% of traffic is
// mobile, so for most people THIS IS THE ENTIRE NAVIGATION.
//
// WHAT WAS BROKEN (2026-07-16) — this bar reached 5 of 18 routes:
//   • "Learn" pointed at /dashboard. It highlighted on /learn but never went
//     there, and the dashboard has zero links to /learn. ~190 chapters — the
//     biggest asset in the product — were unreachable on a phone unless you
//     first finished a practice set, a mock, or a Final.
//   • "More" wasn't a menu. It was a link to /profile, which links out to
//     /career and /shop only. So /skilltree, /flashcards, /challenges and
//     /billing had NO mobile path at all.
//   • /billing being unreachable meant 60% of visitors could not navigate to
//     the page where they pay us. Only tripping a paywall got them there.
//   • The `match` arrays lit tabs up for pages those tabs couldn't open, which
//     is exactly why the nav felt like it should work.
//
// THE RULE NOW: every route in the app is reachable from this bar in at most
// two taps. If you add a route and don't put it here or in the sheet, it does
// not exist on mobile.
// ============================================================

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const ICONS = {
  home: (
    <svg width="23" height="23" viewBox="0 0 24 24" {...S}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  ),
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

// The daily loop: home → read → practice → mock. Everything else is in the sheet.
//
// League lost its slot to Read. A leaderboard is a retention mechanic, and
// retention is the thing that works here (22 of 110 came back 3+ times) — but a
// leaderboard for content nobody can reach is worth less than the content.
// League is one tap away in More.
//
// Every `match` below is a route this tab actually opens. No more lighting up
// for pages you can't get to.
const TABS = [
  { href: "/dashboard", label: "Home", icon: ICONS.home, match: ["/dashboard", "/exams"] },
  { href: "/learn", label: "Read", icon: ICONS.learn, match: ["/learn"] },
  { href: "/practice", label: "Practice", icon: ICONS.practice, match: ["/practice"] },
  { href: "/mock", label: "Mock", icon: ICONS.mock, match: ["/mock", "/boss"] },
];

// The sheet. Ordered by what a real user needs, not by what we built first.
// BILLING IS FIRST. It was unreachable on mobile — the page where people pay us.
const MORE_LINKS: { href: string; label: string; note?: string }[] = [
  { href: "/billing", label: "Membership & billing", note: "Plan, upgrade, cancel" },
  { href: "/league", label: "Divisions", note: "Your weekly league" },
  { href: "/skilltree", label: "Skill tree", note: "Mastery by topic" },
  { href: "/flashcards", label: "Flashcards", note: "Spaced repetition" },
  { href: "/challenges", label: "Challenges", note: "Lightning round, The Open" },
  { href: "/profile", label: "Profile", note: "Your avatar and stats" },
  { href: "/career", label: "The Ladder", note: "Ranks and promotions" },
  { href: "/shop", label: "Perks Desk", note: "Spend your Comp" },
];

const MORE_MATCH = MORE_LINKS.map((l) => l.href);

export default function MobileTabBar() {
  const pathname = usePathname() || "";
  const [sheetOpen, setSheetOpen] = useState(false);

  const hit = (m: string) => pathname === m || pathname.startsWith(m + "/");
  const moreActive = MORE_MATCH.some(hit);

  return (
    <>
      {/* ---- More sheet ---- */}
      {sheetOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 flex items-end"
          style={{ background: "rgba(15,15,25,0.5)" }}
          onClick={() => setSheetOpen(false)}
        >
          <div
            className="w-full rise-in"
            style={{
              background: "var(--bg-card)",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTop: "1px solid var(--border)",
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* grab handle */}
            <div className="flex justify-center pt-2.5 pb-1">
              <div style={{ width: 36, height: 4, borderRadius: 99, background: "var(--border-strong)" }} />
            </div>

            <ul className="px-3 pt-1">
              {MORE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setSheetOpen(false)}
                    className="flex items-center justify-between px-3 py-3.5 rounded-xl"
                    style={{
                      color: hit(l.href) ? "var(--primary)" : "var(--text-primary)",
                      textDecoration: "none",
                      minHeight: 52,
                    }}
                  >
                    <span>
                      <span className="text-sm font-semibold block">{l.label}</span>
                      {l.note && (
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{l.note}</span>
                      )}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>›</span>
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSheetOpen(false)}
              className="w-full text-sm py-3.5 mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <nav
        data-mobile-tabbar
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
            const active = t.match.some(hit);
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

          {/* More — a real sheet, not a link to /profile pretending to be a menu. */}
          <li className="flex-1">
            <button
              onClick={() => setSheetOpen(true)}
              aria-expanded={sheetOpen}
              aria-haspopup="menu"
              className="flex flex-col items-center justify-center gap-0.5 py-2 w-full"
              style={{
                color: moreActive || sheetOpen ? "var(--primary)" : "var(--text-muted)",
                minHeight: 54,
              }}
            >
              {ICONS.more}
              <span style={{ fontSize: 10.5, fontWeight: moreActive ? 700 : 500, letterSpacing: "0.01em" }}>
                More
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
