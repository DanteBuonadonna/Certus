import Link from "next/link";
import type { Metadata } from "next";
import MarketingChrome from "@/components/MarketingChrome";
import { BRAND } from "@/lib/brand";

// ============================================================
// SIE ranking target. See free-series-7-practice-exam/page.tsx for why
// these pages exist at all.
//
// EVERY NUMBER HERE IS VERIFIED:
//   · 75 scored questions / 1 h 45 m — FINRA SIE content outline
//   · $100 exam fee, raised from $80 effective January 2026
//   · 751 questions in the bank — scripts/coverage.mjs
//   · No sponsorship required — this is the one FINRA exam anyone can take
// ============================================================

const SITE = "https://certus.website";

export const metadata: Metadata = {
  title: "Free SIE Practice Exam — Full 75 Questions, No Signup",
  description:
    "Take a free, full-length SIE mock exam: 75 questions weighted to the FINRA content outline, 1 h 45 m timed, with an instant per-section score report. Plus 751 practice questions. No signup, no card.",
  alternates: { canonical: "/free-sie-practice-exam" },
  openGraph: {
    type: "website",
    url: `${SITE}/free-sie-practice-exam`,
    title: "Free SIE Practice Exam — Full 75 Questions, No Signup",
    description:
      "Full-length SIE mock: 75 questions, timed, instant per-section score. No signup, no card.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: `${BRAND.name} — Free SIE Practice Exam`,
      applicationCategory: "EducationApplication",
      operatingSystem: "Web",
      url: `${SITE}/free-sie-practice-exam`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "A free, full-length SIE mock exam — 75 questions weighted to the FINRA content outline, timed at 1 hour 45 minutes, with an instant per-section score report. No signup required.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is there a free SIE practice exam?",
          acceptedAnswer: { "@type": "Answer", text: `Yes. ${BRAND.name} offers a full-length 75-question SIE mock exam free, with no signup and no card, timed at the real 1 hour 45 minutes with a per-section score report.` },
        },
        {
          "@type": "Question",
          name: "How many questions is the SIE exam?",
          acceptedAnswer: { "@type": "Answer", text: "The SIE is 75 scored questions in one 1-hour-45-minute session (plus 10 unscored pretest questions), weighted across four sections: Knowledge of Capital Markets 16%, Understanding Products and Their Risks 44%, Understanding Trading and Customer Accounts 31%, and Overview of the Regulatory Framework 9%." },
        },
        {
          "@type": "Question",
          name: "How much does the SIE exam cost?",
          acceptedAnswer: { "@type": "Answer", text: "The SIE fee rose to $100 in January 2026, up from $80. Unlike the Series 7, the SIE requires no firm sponsorship — anyone 18 or older can register and take it." },
        },
        {
          "@type": "Question",
          name: "Do I need a sponsor to take the SIE?",
          acceptedAnswer: { "@type": "Answer", text: "No. The SIE is the one FINRA securities exam you can take without being sponsored by a member firm, which is why candidates often take it before applying for jobs. The Series 7 top-off does require sponsorship." },
        },
      ],
    },
  ],
};

const included = [
  ["75 questions at exam pacing", "One 1 h 45 m session at the real pace — the full sitting, not a 20-question sampler."],
  ["Weighted to the FINRA outline", "Products 44%, Trading & Accounts 31%, Capital Markets 16%, Regulatory 9% — the official distribution, not an even split."],
  ["Per-section score report", "See which of the four sections cost you the points, so revision targets the gap instead of the whole syllabus."],
  ["An honest readiness estimate", "A data-based read on where you stand — never a fake guarantee, and never a score inflated to sell you something."],
  ["Held back from the practice bank", "The mock's questions never appear in practice drills, so your score measures knowledge rather than recall."],
];

export default function FreeSiePage() {
  return (
    <MarketingChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          style={{ background: "var(--ats-green-bg)", color: "var(--ats-green)" }}>
          Free · No signup · No card
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.08] mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          Free SIE practice exam &mdash; the full 75 questions
        </h1>
        <p className="text-lg mb-7" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Genuinely free. Take a full-length, timed SIE mock &mdash; 75 questions weighted to the FINRA
          content outline, one 1 h 45 m session &mdash; and get an instant per-section score plus an honest
          estimate of whether you&apos;d pass today. No account, no card, no email. Short on time? The
          15-question readiness check takes about 21 minutes.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <Link href="/mock?exam=sie" className="btn-primary text-base px-8 py-3.5" style={{ borderRadius: 14 }}>Start the free SIE mock &rarr;</Link>
          <Link href="/check?exam=sie" className="btn-secondary text-base px-7 py-3.5" style={{ borderRadius: 14 }}>Or take the 3-minute check</Link>
        </div>
        <p className="text-xs mb-12" style={{ color: "var(--text-muted)" }}>
          The SIE costs $100 to take as of January 2026. Finding out whether you&apos;re ready shouldn&apos;t
          cost anything.
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

        <h2 className="font-display text-2xl mb-3" style={{ color: "var(--text-primary)" }}>The SIE is the one you can take unsponsored</h2>
        <p className="text-base mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Every other FINRA securities exam requires a member firm to sponsor you. The SIE does not &mdash;
          anyone 18 or older can register and take it, which is why candidates often clear it before they
          have a job offer. Passing it early is the cheapest signal you can send a hiring desk, and it stays
          valid for four years.
        </p>
        <p className="text-base mb-12" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          {BRAND.name} has <strong>751 SIE practice questions</strong> with worked explanations at the official
          section weights, plus full readings. After the mock, your weak sections become a gamified daily plan
          &mdash; five-minute lessons and streaks, the{" "}
          <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>Duolingo-style way to pass</Link>.
          Going on to the top-off next? There&apos;s a{" "}
          <Link href="/free-series-7-practice-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free Series 7 practice exam</Link>{" "}
          waiting, and a{" "}
          <Link href="/free-series-66-practice-exam" style={{ color: "var(--primary)", fontWeight: 600 }}>free Series 66 mock</Link>{" "}
          for the advisory side.
        </p>

        <div className="card p-7 text-center" style={{ border: "1.5px solid var(--primary)" }}>
          <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Would you pass the SIE today?</h2>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>75 questions. Real pacing. Instant score. No signup.</p>
          <Link href="/mock?exam=sie" className="btn-primary text-base px-9 py-3.5 inline-block" style={{ borderRadius: 14 }}>Start the free SIE mock &rarr;</Link>
        </div>
      </main>
    </MarketingChrome>
  );
}
