import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { LogoMark } from "@/components/Logo";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: `Study Guides & Exam Tips — ${BRAND.name} Blog`,
  description:
    "In-depth, free study guides for the CFA, CPA, Series 7, SIE, Series 66, and CFP exams — how each exam works, what's tested, study plans, and the mistakes to avoid.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={20} />
          <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
        </Link>
        <Link href="/dashboard" className="btn-primary text-sm">Start free →</Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="font-display text-3xl mb-2" style={{ color: "var(--text-primary)" }}>
          Study guides & exam tips
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-secondary)" }}>
          Free, in-depth guides for the hardest finance exams — written by the team behind {BRAND.name}.
        </p>

        {posts.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>New guides are on the way.</p>
        ) : (
          <div className="space-y-5">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 block hover:opacity-90 transition-opacity" style={{ border: "0.5px solid var(--border)" }}>
                <div className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{formatDate(p.date)}</div>
                <h2 className="font-display text-xl mb-2" style={{ color: "var(--text-primary)" }}>{p.title}</h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.description}</p>
                <span className="text-sm font-medium inline-block mt-3" style={{ color: "var(--primary)" }}>Read the guide →</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
