import Link from "next/link";
import type { Metadata } from "next";
import MarketingChrome from "@/components/MarketingChrome";
import { BRAND } from "@/lib/brand";

// ============================================================
// Series 7 ranking target.
//
// WHY THIS PAGE EXISTS: every ranking target the site had was CFA
// (/free-cfa-mock-exam, /cheapest-cfa-prep, /cfa-level-1-prep), which is
// almost certainly why organic traffic arrives with CFA intent even though
// we sell six tracks. Series 7 has 1,631 practice questions and a full
// 125-question timed mock behind it, so this page promises nothing the
// product doesn't already deliver.
//
// EVERY NUMBER HERE IS VERIFIED:
//   · 125 scored questions / 3 h 45 m / 72% passing — FINRA content outline
//   · $395 exam fee since 1 January 2026 (was $300)
//   · 1,631 questions in the bank — scripts/coverage.mjs
// ============================================================

const SITE = "https://certus.website";

export const metadata: Metadata = {
  title: "Free Series 7 Practice Exam — Full 125 Questions, No Signup",
  description:
    "Take a free, full-length Series 7 mock exam: 125 questions weighted to the FINRA job functions, 3 h 45 m timed, scored against the real 72% passing standard. Plus 1,631 practice questions. No signup, no card.",
  alternates: { canonical: "/free-series-7-practice-exam" },
  openGraph: {
    type: "website",
    url: `${SITE}/free-series-7-practice-exam`,
    title: "Free Series 7 Practice Exam — Full 125 Questions, No Signup",
    description:
      "Full-length Series 7 mock: 125 questions, timed, scored against the real 72% standard. No signup, no card.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: `${BRAND.name} — Free Series 7 Practice Exam`,
      applicationCategory: "EducationApplication",
      operatingSystem: "Web",
      url: `${SITE}/free-series-7-practice-exam`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "A free, full-length Series 7 mock exam — 125 questions weighted to the FINRA job functions, timed at 3 hours 45 minutes, with an instant per-function score report. No signup required.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is there a free Series 7 practice exam?",
          acceptedAnswer: { "@type": "Answer", text: `Yes. ${BRAND.name} offers a full-length 125-question Series 7 mock exam free, with no signup and no card. It is timed at the real 3 hours 45 minutes and scored against the actual 72% passing standard.` },
        },
        {
          "@type": "Question",
          name: "How many questions is the Series 7 exam?",
          acceptedAnswer: { "@type": "Answer", text: "The Series 7 Top-Off exam is 125 scored questions in a single 3-hour-45-minute session, weighted across four job functions: Seeks Business (7%), Opens Accounts (9%), Provides Information and Makes Recommendations (73%), and Processes Transactions (11%). You need 72% to pass." },
        },
        {
          "@type": "Question",
          name: "How much does the Series 7 exam cost?",
          acceptedAnswer: { "@type": "Answer", text: "The Series 7 exam fee rose to $395 on 1 January 2026, up from $300. You also need the SIE ($100) as a co-requisite, and you must be sponsored by a FINRA member firm." },
        },
        {
          "@type": "Question",
          name: "How many Series 7 practice questions does Certus have?",
          acceptedAnswer: { "@type": "Answer", text: `${BRAND.name} has 1,631 Series 7 practice questions with full explanations, distributed across the four FINRA job functions at the official blueprint weights, plus the separate 125-question mock exam that is held back so a sitting is always unseen.` },
        },
      ],
    },
  ],
};

const included = [
  ["125 questions at exam pacing", "One 3 h 45 m session at the real 108-seconds-per-question pace — the same endurance problem as exam day, not a 20-question sampler."],
  ["Weighted to the FINRA job functions", "Seeks Business 7%, Opens Accounts 9%, Information & Recommendations 73%, Processes Transactions 11% — the actual outline, not an even split."],
  ["Scored against the real 72% standard", "You find out whether you passed by FINRA's own bar, not against a curve we invented to make you feel good."],
  ["Per-function score report", "Options, margin, municipal securities, suitability, regulations — see precisely which function cost you the points."],
  ["Held back from the practice bank", "The mock's 125 questions never appear in practice drills, so your score reflects knowledge rather than recall of questions you already drilled."],
];

export default function FreeSeries7Page() {
  return (
    <MarketingChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          style={{ background: "var(--ats-green-bg)", color: "var(--ats-green)" }}>
          Free · No signup · No card
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.08] mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          Free Series 7 practice exam &mdash; the full 125 questions
        </h1>
        <p className="text-lg mb-7" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Genuinely free. Take a full-length, timed Series 7 mock &mdash; 125 questions weighted to the four
          FINRA job functions, one 3 h 45 m session &mdash; and get an instant per-function score measured
          against the real 72% passing standard. No account, no card, no email. Short on time? The
          15-question readiness check runs about 27 minutes.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <Link href="/mock?exam=series-7" className="btn-primary text-base px-8 py-3.5" style={{ borderRadius: 14 }}>Start the free Series 7 mock &rarr;</Link>
          <Link href="/check?exam=series-7" className="btn-secondary text-base px-7 py-3.5" style={{ borderRadius: 14 }}>Or take the 3-minute check</Link>
        </div>
        <p className="text-xs mb-12" style={{ color: "var(--text-muted)" }}>
          The Series 7 costs $395 to take as of January 2026, and you need a sponsoring firm to take it.
          Finding out whether you&apos;re ready shouldn&apos;t cost anything.
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

        <h2 className="font-display text-2xl mb-3" style={{ color: "var(--text-primary)" }}>What the Series 7 actually tests</h2>
        <p className="text-base mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Nearly three-quarters of the exam &mdash; 91 of the 125 scored questions &mdash; sits inside one job
          function: providing information and making recommendations. That is where options strategies,
          margin arithmetic, municipal securities and suitability live, and it is where most candidates
          lose the exam. Preparation that spreads effort evenly across the four functions is preparing
          for the wrong exam.
        </p>
        <p className="text-base mb-12" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          {BRAND.name} has <strong>1,631 Series 7 practice questions</strong> with worked explanations, weighted
          to that same outline, plus full readings on options, margin, debt and municipal securities. After the
          mock, your weak functions become a gamified daily plan &mdash; five-minute lessons and streaks, the{" "}
          <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>Duolingo-style way to pass</Link>.
          Taking the SIE first? There&apos;s a{" "}
          <Link href="/free-sie-practice-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free SIE practice exam</Link>{" "}
          too, and a{" "}
          <Link href="/free-series-66-practice-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free Series 66 mock</Link>{" "}
          for the advisory side.
        </p>

        <div className="card p-7 text-center" style={{ border: "1.5px solid var(--primary)" }}>
          <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Would you pass the Series 7 today?</h2>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>125 questions. Real pacing. Scored against 72%. No signup.</p>
          <Link href="/mock?exam=series-7" className="btn-primary text-base px-9 py-3.5 inline-block" style={{ borderRadius: 14 }}>Start the free Series 7 mock &rarr;</Link>
        </div>
      </main>
    </MarketingChrome>
  );
}
