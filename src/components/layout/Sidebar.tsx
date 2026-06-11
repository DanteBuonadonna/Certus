"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { BRAND } from "@/lib/brand";
import { useAccess } from "@/lib/useAccess";

interface SidebarProps {
  credits: number;
  email: string;
}

type NavItem = { label: string; href: string; icon: React.ReactNode };

const I = {
  dashboard: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
  ),
  exams: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18l6-10 4 6 3-4 5 8H3z"/><circle cx="17" cy="5" r="1.6"/></svg>
  ),
  reading: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
  ),
  practice: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
  ),
  flashcards: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="16" height="12" rx="2"/><path d="M22 8v10a2 2 0 01-2 2H7"/></svg>
  ),
  skilltree: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M12 7v4M12 11l-6 6M12 11l6 6"/></svg>
  ),
  boss: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l2-5 4 3 3-4 3 4 4-3 2 5v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 13h.01M15 13h.01"/></svg>
  ),
  referral: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  billing: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
  ),
  resume: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
  ),
};

const SECTIONS: { label: string; items: NavItem[] }[] = [
  {
    label: "Study",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: I.dashboard },
      { label: "Exams", href: "/exams", icon: I.exams },
    ],
  },
  {
    label: "Train",
    items: [
      { label: "Reading", href: "/learn", icon: I.reading },
      { label: "Practice", href: "/practice", icon: I.practice },
      { label: "Flashcards", href: "/flashcards", icon: I.flashcards },
      { label: "Skill tree", href: "/skilltree", icon: I.skilltree },
      { label: "Boss battle", href: "/boss", icon: I.boss },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Refer & earn", href: "/referral", icon: I.referral },
      { label: "Billing", href: "/billing", icon: I.billing },
    ],
  },
];

export default function Sidebar({ email }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const { pro } = useAccess();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  function renderItem(item: NavItem, muted = false) {
    const isActive = pathname === item.href;
    return (
      <Link
        key={item.href}
        href={item.href}
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors"
        style={{
          background: isActive ? "var(--primary-light)" : "transparent",
          color: isActive ? "var(--primary)" : muted ? "var(--text-muted)" : "var(--text-secondary)",
          fontWeight: isActive ? 500 : 400,
          boxShadow: isActive ? "inset 2.5px 0 0 var(--primary)" : "none",
        }}
      >
        <span style={{ opacity: isActive ? 1 : muted ? 0.6 : 0.7 }}>{item.icon}</span>
        {item.label}
      </Link>
    );
  }

  return (
    <aside
      className="fixed left-0 top-0 h-full flex flex-col"
      style={{ width: "var(--sidebar-width)", background: "var(--bg-sidebar)", borderRight: "0.5px solid var(--border)", zIndex: 10 }}
    >
      {/* Logo */}
      <div className="px-5 py-5">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
        </div>
      </div>

      {/* Nav grouped into sections */}
      <nav className="flex-1 px-3 overflow-y-auto">
        {SECTIONS.map((section) => (
          <div key={section.label} className="mb-4">
            <div className="px-3 pb-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                {section.label}
              </span>
            </div>
            <div className="space-y-0.5">{section.items.map((item) => renderItem(item))}</div>
          </div>
        ))}

        {/* Tools */}
        <div className="mb-2">
          <div className="px-3 pb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Tools</span>
          </div>
          {renderItem({ label: BRAND.legacyToolName, href: "/optimizer", icon: I.resume }, true)}
        </div>
      </nav>

      {/* Bottom: plan + user */}
      <div className="px-3 pb-5 space-y-2">
        {pro ? (
          <div className="rounded-lg px-3 py-2.5 flex items-center justify-between" style={{ background: "var(--gold-bg)", border: "1px solid var(--gold-border)" }}>
            <span className="text-xs font-semibold" style={{ color: "var(--gold)" }}>Pro — full access</span>
          </div>
        ) : (
          <div className="rounded-lg px-3 py-3" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)" }}>
            <div className="text-xs font-medium mb-1.5" style={{ color: "var(--primary)" }}>Free plan</div>
            <div className="text-[11px] mb-2" style={{ color: "var(--text-secondary)" }}>CFA unlocked. Get every exam + boss battles.</div>
            <Link href="/billing" className="block text-center text-xs font-medium py-1.5 rounded-md" style={{ background: "var(--primary)", color: "#fff" }}>
              Upgrade to Pro
            </Link>
          </div>
        )}

        {/* User */}
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg" style={{ border: "0.5px solid var(--border)" }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
            {email.charAt(0).toUpperCase()}
          </div>
          <span className="text-xs truncate flex-1" style={{ color: "var(--text-secondary)" }}>{email}</span>
          <button onClick={handleSignOut} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity" title="Sign out">
            <SignOutIcon />
          </button>
        </div>
      </div>
    </aside>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#534AB7" />
      <path d="M5 17l4.5-8 3 5 2-3.5L19 17H5z" fill="white" />
      <circle cx="16.5" cy="7.5" r="1.6" fill="rgba(255,255,255,0.85)" />
    </svg>
  );
}

function SignOutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  );
}
