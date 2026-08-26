import Link from "next/link";
import type { Metadata } from "next";
import MarketingChrome from "@/components/MarketingChrome";
import { BRAND } from "@/lib/brand";

// ============================================================
// Series 66 ranking target. See free-series-7-practice-exam/page.tsx for
// why these pages exist at all.
//
// EVERY NUMBER HERE IS VERIFIED:
//   · 100 scored questions / 150 min / 73-of-100 to pass — NASAA test
//     specifications effective 12 June 2023
//   · $177 exam fee (NASAA)
//   · 1,116 questions in the bank — scripts/coverage.mjs
// ============================================================

const SITE = "https://certus.website";

export const metadata: Metadata = {
  title: "Free Series 66 Practice Exam — Full 100 Questions, No Signup",
  description:
    "Take a free, full-length Series 66 mock exam: 100 scored questions weighted to the NASAA specifications, 2 h 30 m timed, scored against the real 73-of-100 standard. Plus 1,116 practice questions. No signup, no card.",
  alternates: { canonical: "/free-series-66-practice-exam" },
  openGraph: {
    type: "website",
    url: `${SITE}/free-series-66-practice-exam`,
    title: "Free Series 66 Practice Exam — Full 100 Questions, No Signup",
    description:
      "Full-length Series 66 mock: 100 questions, timed, scored against the real 73-of-100 standard. No signup, no card.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: `${BRAND.name} — Free Series 66 Practice Exam`,
      applicationCategory: "EducationApplication",
      operatingSystem: "Web",
      url: `${SITE}/free-series-66-practice-exam`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "A free, full-length Series 66 mock exam — 100 scored questions weighted to the NASAA test specifications, timed at 150 minutes, with an instant per-section score report. No signup required.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is there a free Series 66 practice exam?",
          acceptedAnswer: { "@type": "Answer", text: `Yes. ${BRAND.name} offers a full-length 100-question Series 66 mock exam free, with no signup and no card. It is timed at the real 150 minutes and scored against the actual 73-of-100 passing standard.` },
        },
        {
          "@type": "Question",
          name: "How many questions is the Series 66 exam?",
          acceptedAnswer: { "@type": "Answer", text: "The Series 66 is 100 scored questions in 150 minutes, weighted across four sections: Economic Factors and Business Information 8%, Investment Vehicle Characteristics 17%, Client Investment Recommendations and Strategies 30%, and Laws, Regulations and Guidelines 45%. You need 73 of 100 to pass." },
        },
        {
          "@type": "Question",
          name: "How much does the Series 66 exam cost?",
          acceptedAnswer: { "@type": "Answer", text: "The Series 66 exam fee is $177 per attempt. The Series 66 must be combined with the Series 7 to qualify as an investment adviser representative — it does not stand alone." },
        },
        {
          "@type": "Question",
          name: "What is the hardest part of the Series 66?",
          acceptedAnswer: { "@type": "Answer", text: "Laws, Regulations and Guidelines is 45% of the exam — nearly half — covering the Uniform Securities Act, registration, fiduciary duty and prohibited practices. Candidates who study proportionally to their comfort rather than to the blueprint routinely underprepare for it." },
        },
      ],
    },
  ],
};

const included = [
  ["100 questions at exam pacing", "One 2 h 30 m session at the real 90-seconds-per-question pace — the full sitting, end to end."],
  ["Weighted to the NASAA specifications", "Laws 45%, Recommendations 30%, Vehicles 17%, Economics 8% — the official distribution effective June 2023."],
  ["Scored against the real 73-of-100", "You find out whether you passed by NASAA's own bar, not against a curve invented to flatter you."],
  ["Per-section score report", "See exactly which of the four sections cost you the points, so revision targets the gap."],
  ["Held back from the practice bank", "The mock's 100 questions never appear in practice drills, so your score reflects knowledge rather than recall."],
];

export default function FreeSeries66Page() {
  return (
    <MarketingChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          style={{ background: "var(--ats-green-bg)", color: "var(--ats-green)" }}>
          Free · No signup · No card
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.08] mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          Free Series 66 practice exam &mdash; the full 100 questions
        </h1>
        <p className="text-lg mb-7" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Genuinely free. Take a full-length, timed Series 66 mock &mdash; 100 scored questions weighted to
          the NASAA specifications, one 2 h 30 m session &mdash; and get an instant per-section score measured
          against the real 73-of-100 passing standard. No account, no card, no email. Short on time? The
          15-question readiness check runs about 22 minutes.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <Link href="/mock?exam=series-66" className="btn-primary text-base px-8 py-3.5" style={{ borderRadius: 14 }}>Start the free Series 66 mock &rarr;</Link>
          <Link href="/check?exam=series-66" className="btn-secondary text-base px-7 py-3.5" style={{ borderRadius: 14 }}>Or take the 3-minute check</Link>
        </div>
        <p className="text-xs mb-12" style={{ color: "var(--text-muted)" }}>
          The Series 66 costs $177 to take. Finding out whether you&apos;re ready shouldn&apos;t cost anything.
        </p>

        <h2 className="font-display text-2xl mb-5" style={{ color: "var(--text-primary)" }}>What&apos;s in the free mock</h2>
        <div className="space-y-3 mb-12">
          {included.map(([t, d]) => (
            <div key={t} className="card p-5" style={{ border: "0.5px solid var(--border)" }}>
              <div className="flex items-start gap-2.5">
                <span style={{ color: "var(--ats-green)", marginTop: 1 }}>✓</span>
                <div>
                  <div className="text-sm font-extrabold mb-0.5" style={{ color: "var(--text-primary)" }}>{t}</div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>{d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl mb-3" style={{ color: "var(--text-primary)" }}>Nearly half the exam is one section</h2>
        <p className="text-base mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Laws, Regulations and Guidelines is 45 of the 100 scored questions &mdash; the Uniform Securities Act,
          registration, fiduciary duty, prohibited practices. Economics, by contrast, is eight. Candidates who
          allocate study time by how interesting a topic is rather than by the blueprint consistently walk in
          underprepared for the half of the exam that decides it.
        </p>
        <p className="text-base mb-12" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          {BRAND.name} has <strong>1,116 Series 66 practice questions</strong> with worked explanations at those
          exact weights, plus full readings on state law and adviser regulation. After the mock, your weak
          sections become a gamified daily plan &mdash; five-minute lessons and streaks, the{" "}
          <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>Duolingo-style way to pass</Link>.
          The Series 66 pairs with the Series 7, and there&apos;s a{" "}
          <Link href="/free-series-7-practice-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free Series 7 practice exam</Link>{" "}
          plus a{" "}
          <Link href="/free-sie-practice-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free SIE mock</Link>{" "}
          if you still need those.
        </p>

        <div className="card p-7 text-center" style={{ border: "1.5px solid var(--primary)" }}>
          <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Would you pass the Series 66 today?</h2>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>100 questions. Real pacing. Scored against 73/100. No signup.</p>
          <Link href="/mock?exam=series-66" className="btn-primary text-base px-9 py-3.5 inline-block" style={{ borderRadius: 14 }}>Start the free Series 66 mock &rarr;</Link>
        </div>
      </main>
    </MarketingChrome>
  );
}
