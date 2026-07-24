import Link from "next/link";
import type { Metadata } from "next";
import MarketingChrome from "@/components/MarketingChrome";
import { BRAND } from "@/lib/brand";
import { ANNUAL_PER_MONTH, ANNUAL_TOTAL, MONTHLY_PRICE } from "@/lib/tier";

const SITE = "https://certus.website";

export const metadata: Metadata = {
  title: `Cheapest CFA Prep in 2026 — ${BRAND.name} vs Schweser, AnalystPrep & UWorld`,
  description:
    `The cheapest way to prep for the CFA in 2026. ${BRAND.name} is ${ANNUAL_PER_MONTH}/mo billed yearly — a fraction of AnalystPrep ($349+), UWorld, and Schweser ($429–$1,499). Full mock free, no signup.`,
  alternates: { canonical: "/cheapest-cfa-prep" },
  openGraph: {
    type: "website",
    url: `${SITE}/cheapest-cfa-prep`,
    title: `Cheapest CFA Prep in 2026 — ${BRAND.name} vs Schweser & AnalystPrep`,
    description: `${BRAND.name} is ${ANNUAL_PER_MONTH}/mo billed yearly — a fraction of $350–$1,500 CFA courses. Free full mock.`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

// Prices below are from each provider's public 2026 pricing as reported by
// AnalystPrep, UWorld, and third-party comparison sites (see web research).
// Ranges, not exact SKUs, so they stay accurate as tiers change.
const rows: { name: string; price: string; note: string; highlight?: boolean }[] = [
  { name: BRAND.name, price: `${ANNUAL_PER_MONTH}/mo`, note: `$${ANNUAL_TOTAL}/yr, or $${MONTHLY_PRICE}/mo. Free full mock, 7-day trial.`, highlight: true },
  { name: "AnalystPrep", price: "~$349–$399", note: "Per level. Question bank, notes, mocks." },
  { name: "UWorld CFA", price: "Mid-premium", note: "Higher-priced; advanced analytics and visuals." },
  { name: "Kaplan Schweser", price: "~$429–$1,499", note: "Per level. Notes, videos, mocks; top tiers include coaching." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the cheapest CFA prep course?",
          acceptedAnswer: { "@type": "Answer", text: `${BRAND.name} is among the cheapest CFA prep options at ${ANNUAL_PER_MONTH}/mo billed annually ($${ANNUAL_TOTAL}/year) or $${MONTHLY_PRICE}/mo — well below AnalystPrep (~$349+ per level) and Kaplan Schweser (~$429–$1,499 per level). It also includes a free full-length mock exam.` },
        },
        {
          "@type": "Question",
          name: "Is cheap CFA prep good enough to pass?",
          acceptedAnswer: { "@type": "Answer", text: `Passing the CFA is about consistent practice on your weak topics, not how much you spend. ${BRAND.name} pairs deep readings with a large question bank and full mocks, delivered as a gamified daily plan so you actually keep at it.` },
        },
        {
          "@type": "Question",
          name: `How is ${BRAND.name} so much cheaper than Schweser?`,
          acceptedAnswer: { "@type": "Answer", text: `${BRAND.name} is a lean, software-first subscription rather than a bundled course with printed books and video lectures. That keeps the price at a fraction of traditional providers while covering the same core material.` },
        },
      ],
    },
  ],
};

export default function CheapestCfaPrepPage() {
  return (
    <MarketingChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
          Updated for 2026
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.08] mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          The cheapest CFA prep in 2026
        </h1>
        <p className="text-lg mb-7" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {BRAND.name} is one of the cheapest ways to prep for the CFA: <strong style={{ color: "var(--text-primary)" }}>{ANNUAL_PER_MONTH}/mo</strong> billed
          yearly (${ANNUAL_TOTAL}/year), or ${MONTHLY_PRICE}/mo month to month. That&apos;s a fraction of AnalystPrep
          (~$349+ per level) and Kaplan Schweser (~$429–$1,499 per level) — and it comes with a{" "}
          <Link href="/free-cfa-mock-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free full mock exam</Link>{" "}
          you can take right now, no signup.
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/check" className="btn-primary text-base px-8 py-3.5" style={{ borderRadius: 14 }}>Get started free →</Link>
          <Link href="/free-cfa-mock-exam" className="btn-secondary text-base px-7 py-3.5" style={{ borderRadius: 14 }}>Take the free mock</Link>
        </div>

        <h2 className="font-display text-2xl mb-5" style={{ color: "var(--text-primary)" }}>CFA prep pricing compared</h2>
        <div className="card overflow-hidden mb-4" style={{ border: "0.5px solid var(--border)", padding: 0 }}>
          {rows.map((r) => (
            <div key={r.name} className="flex items-start gap-4 px-5 py-4"
              style={{ borderBottom: "0.5px solid var(--border)", background: r.highlight ? "var(--primary-light)" : "transparent" }}>
              <div className="flex-1">
                <div className="text-sm font-extrabold" style={{ color: r.highlight ? "var(--primary)" : "var(--text-primary)" }}>{r.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>{r.note}</div>
              </div>
              <div className="text-sm font-mono font-bold whitespace-nowrap" style={{ color: r.highlight ? "var(--primary)" : "var(--text-primary)" }}>{r.price}</div>
            </div>
          ))}
        </div>
        <p className="text-xs mb-12" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
          Competitor prices reflect publicly listed 2026 pricing and vary by tier and promotion; check each provider for current figures.
        </p>

        <h2 className="font-display text-2xl mb-3" style={{ color: "var(--text-primary)" }}>Cheap doesn&apos;t mean thin</h2>
        <p className="text-base mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          The price is low because {BRAND.name} is software-first — no printed books, no bundled lecture library — not because
          the material is. You get deep, worked-through readings, a large question bank with real explanations, and full timed
          mocks, all wrapped in a gamified daily plan so you actually keep showing up. It&apos;s the{" "}
          <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>Duolingo-style way to pass the CFA</Link>.
        </p>
        <p className="text-base mb-12" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Prepping a specific level? Start with the{" "}
          <Link href="/cfa-level-1-prep" style={{ color: "var(--primary)", fontWeight: 600 }}>CFA Level 1 prep guide</Link>{" "}
          or take the <Link href="/free-cfa-mock-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free mock</Link> first.
        </p>

        <div className="card p-7 text-center" style={{ border: "1.5px solid var(--primary)" }}>
          <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Pass the CFA without the $1,000 price tag</h2>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>From {ANNUAL_PER_MONTH}/mo. Free mock. 7-day trial. Cancel anytime.</p>
          <Link href="/check" className="btn-primary text-base px-9 py-3.5 inline-block" style={{ borderRadius: 14 }}>Get started free →</Link>
        </div>
      </main>
    </MarketingChrome>
  );
}
