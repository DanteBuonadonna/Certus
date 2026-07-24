import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { LogoMark } from "@/components/Logo";

// Shared header + footer for the public, indexable marketing/landing pages
// (free-mock, per-exam, price comparison…). Keeps them consistent and gives
// Google a clean internal-linking structure between them and the homepage.
export default function MarketingChrome({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-3.5"
        style={{
          borderBottom: "0.5px solid var(--border)",
          background: "color-mix(in srgb, var(--bg) 72%, transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--text-secondary)" }}>
          <Link href="/free-cfa-mock-exam" className="hover:opacity-70 transition-opacity" style={{ color: "var(--ats-green)", fontWeight: 600 }}>Free CFA mock</Link>
          <Link href="/cheapest-cfa-prep" className="hover:opacity-70 transition-opacity">Pricing</Link>
          <Link href="/blog" className="hover:opacity-70 transition-opacity">Guides</Link>
        </div>
        <Link href="/check" className="btn-primary text-sm">Get started free →</Link>
      </nav>

      {children}

      <footer className="py-10 px-6" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <LogoMark size={18} />
            <span className="font-display text-sm" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>· {BRAND.tagline}</span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs" style={{ color: "var(--text-secondary)" }}>
            <Link href="/free-cfa-mock-exam" className="hover:opacity-70">Free CFA mock</Link>
            <Link href="/cheapest-cfa-prep" className="hover:opacity-70">Cheapest CFA prep</Link>
            <Link href="/cfa-level-1-prep" className="hover:opacity-70">CFA Level 1 prep</Link>
            <Link href="/blog" className="hover:opacity-70">Study guides</Link>
            <Link href="/privacy" className="hover:opacity-70">Privacy</Link>
            <Link href="/terms" className="hover:opacity-70">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
