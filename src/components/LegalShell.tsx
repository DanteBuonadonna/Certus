import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { LogoMark } from "@/components/Logo";

// Shared frame for the public legal pages (terms, privacy, refund).
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
        </Link>
        <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>← Home</Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>{title}</h1>
        <p className="text-xs mb-8" style={{ color: "var(--text-muted)" }}>Last updated: {updated}</p>
        <div className="legal-prose" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7 }}>
          {children}
        </div>
        <p className="text-xs mt-12" style={{ color: "var(--text-muted)" }}>
          Questions? Email <a href={`mailto:${BRAND.supportEmail}`} style={{ color: "var(--primary)" }}>{BRAND.supportEmail}</a>.
        </p>
      </main>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-medium mt-7 mb-2" style={{ color: "var(--text-primary)", fontSize: "1.05rem" }}>
      {children}
    </h2>
  );
}
