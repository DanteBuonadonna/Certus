import Link from "next/link";
import type { Metadata } from "next";
import MarketingChrome from "@/components/MarketingChrome";
import { BRAND } from "@/lib/brand";
import { ANNUAL_PER_MONTH } from "@/lib/tier";

const SITE = "https://certus.website";

export const metadata: Metadata = {
  title: "CFA Level 1 Prep — Study Plan, Free Mock & Practice Questions",
  description:
    `Everything you need to prep for CFA Level 1: a topic-by-topic study plan, a free full mock exam, and a gamified daily question bank from ${ANNUAL_PER_MONTH}/mo. Start free, no card.`,
  alternates: { canonical: "/cfa-level-1-prep" },
  openGraph: {
    type: "website",
    url: `${SITE}/cfa-level-1-prep`,
    title: "CFA Level 1 Prep — Study Plan, Free Mock & Practice Questions",
    description: `Topic-by-topic plan, free full mock, and a gamified question bank from ${ANNUAL_PER_MONTH}/mo. Start free.`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const topics = [
  ["Ethical & Professional Standards", "~15%"],
  ["Quantitative Methods", "~8–12%"],
  ["Economics", "~8–12%"],
  ["Financial Statement Analysis", "~11–14%"],
  ["Corporate Issuers", "~8–12%"],
  ["Equity Investments", "~10–12%"],
  ["Fixed Income", "~10–12%"],
  ["Derivatives", "~5–8%"],
  ["Alternative Investments", "~5–8%"],
  ["Portfolio Management", "~8–12%"],
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long should I study for CFA Level 1?",
          acceptedAnswer: { "@type": "Answer", text: "The CFA Institute suggests around 300 hours. Most candidates spread that over 3–6 months. What matters more than raw hours is consistent practice on your weak topics — which is why a daily-habit tool tends to beat cramming." },
        },
        {
          "@type": "Question",
          name: "What's the best way to prep for CFA Level 1 on a budget?",
          acceptedAnswer: { "@type": "Answer", text: `Take a free full mock to find your gaps, then drill those topics with a large question bank. ${BRAND.name} does exactly this from ${ANNUAL_PER_MONTH}/mo — a fraction of $350–$1,500 courses — with a free mock to start.` },
        },
        {
          "@type": "Question",
          name: "Is there a free CFA Level 1 practice test?",
          acceptedAnswer: { "@type": "Answer", text: `Yes — ${BRAND.name} offers a free full-length 180-question CFA Level 1 mock with no signup, plus a quick 15-question version.` },
        },
      ],
    },
  ],
};

export default function CfaLevel1PrepPage() {
  return (
    <MarketingChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <main className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="font-display text-4xl md:text-5xl leading-[1.08] mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          CFA Level 1 prep, without the $1,000 course
        </h1>
        <p className="text-lg mb-7" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          The fastest way to prep for CFA Level 1: find your weak topics with a{" "}
          <Link href="/free-cfa-mock-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free full mock</Link>,
          then drill them daily with a gamified question bank and worked-through readings — from {ANNUAL_PER_MONTH}/mo.
          No 300-hour slog of pure reading; a plan that adapts to what you keep missing.
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/check?exam=cfa" className="btn-primary text-base px-8 py-3.5" style={{ borderRadius: 14 }}>Build my study plan free →</Link>
          <Link href="/free-cfa-mock-exam" className="btn-secondary text-base px-7 py-3.5" style={{ borderRadius: 14 }}>Take the free mock</Link>
        </div>

        <h2 className="font-display text-2xl mb-5" style={{ color: "var(--text-primary)" }}>The 10 Level 1 topics (and their weights)</h2>
        <div className="card overflow-hidden mb-4" style={{ border: "0.5px solid var(--border)", padding: 0 }}>
          {topics.map(([t, w]) => (
            <div key={t} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "0.5px solid var(--border)" }}>
              <span className="text-sm" style={{ color: "var(--text-primary)" }}>{t}</span>
              <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>{w}</span>
            </div>
          ))}
        </div>
        <p className="text-xs mb-12" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
          Weights follow the CFA Institute&apos;s published Level 1 topic ranges and shift slightly year to year — always confirm against the current official curriculum.
        </p>

        <h2 className="font-display text-2xl mb-3" style={{ color: "var(--text-primary)" }}>A study plan that adapts</h2>
        <p className="text-base mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Reading cover-to-cover is the #1 reason smart candidates run out of time. {BRAND.name} flips it: take the mock,
          see exactly where you bled points, and get a daily plan that front-loads your weak topics with five-minute
          lessons and real practice questions — the{" "}
          <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>Duolingo-style way to pass the CFA</Link>.
        </p>
        <p className="text-base mb-12" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Curious about cost? See how it compares on{" "}
          <Link href="/cheapest-cfa-prep" style={{ color: "var(--primary)", fontWeight: 600 }}>cheapest CFA prep</Link>, or read the full{" "}
          <Link href="/blog/cfa-level-1-study-guide" style={{ color: "var(--primary)", fontWeight: 600 }}>CFA Level 1 study guide</Link>.
        </p>

        <div className="card p-7 text-center" style={{ border: "1.5px solid var(--primary)" }}>
          <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Start your Level 1 plan free</h2>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>Answer a few questions, see your gaps, get your plan. No card.</p>
          <Link href="/check?exam=cfa" className="btn-primary text-base px-9 py-3.5 inline-block" style={{ borderRadius: 14 }}>Build my study plan →</Link>
        </div>
      </main>
    </MarketingChrome>
  );
}
