import Link from "next/link";
import type { Metadata } from "next";
import MarketingChrome from "@/components/MarketingChrome";
import { BRAND } from "@/lib/brand";

const SITE = "https://certus.website";

export const metadata: Metadata = {
  title: "Free CFA Level 1 Mock Exam — Full 180 Questions, No Signup",
  description:
    "Take a free, full-length CFA Level 1 mock exam: 180 questions at real 90-second pace, timed sessions, instant per-topic score and an honest estimate of your odds of passing. No signup, no card.",
  alternates: { canonical: "/free-cfa-mock-exam" },
  openGraph: {
    type: "website",
    url: `${SITE}/free-cfa-mock-exam`,
    title: "Free CFA Level 1 Mock Exam — Full 180 Questions, No Signup",
    description:
      "Full-length CFA Level 1 mock: 180 questions, timed, instant score + odds of passing. No signup, no card.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

// FAQ + free-tool schema — targets "is there a free CFA mock exam" answer boxes
// and AI citations. price 0, so the "free" claim is machine-readable.
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: `${BRAND.name} — Free CFA Mock Exam`,
      applicationCategory: "EducationApplication",
      operatingSystem: "Web",
      url: `${SITE}/free-cfa-mock-exam`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "A free, full-length CFA Level 1 mock exam — 180 questions, timed, with an instant per-topic score and readiness estimate. No signup required.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the CFA mock exam really free?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. The full CFA Level 1 mock on Certus is free with no signup and no card. You can also take a quick 15-question version first for a fast read on where you stand." },
        },
        {
          "@type": "Question",
          name: "How many questions is the CFA Level 1 mock?",
          acceptedAnswer: { "@type": "Answer", text: "The full mock is 180 questions across two 2-hour-15-minute sessions (90 per session), matching the real exam's blueprint topic weights and 90-seconds-per-question pace. A quick 15-question version takes about 22 minutes." },
        },
        {
          "@type": "Question",
          name: "Do I need to sign up to take the free mock?",
          acceptedAnswer: { "@type": "Answer", text: "No. You can start the mock and see your score without creating an account or entering a card." },
        },
        {
          "@type": "Question",
          name: "Does the mock cover Levels 2 and 3?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Certus has free mocks for Level II (vignette item sets) and Level III (item sets plus constructed-response essays graded against guideline answers), in addition to Level I." },
        },
      ],
    },
  ],
};

const included = [
  ["180 questions, exam-real pacing", "Two 2h15m sessions, 90 per session, three answer choices, at the real 90-seconds-per-question pace."],
  ["Blueprint-weighted topics", "Questions distributed by the CFA Institute's actual topic weights — not a random grab bag."],
  ["Flag-and-review navigation", "The same flag, skip, and review flow you'll use on exam day, so nothing on test day is new."],
  ["Instant per-topic score report", "See exactly which topics you bled points on — Quant, FRA, Ethics, Fixed Income, and the rest."],
  ["An honest estimate of your odds", "A data-based readiness estimate versus the historical passing range — never a fake guarantee."],
];

export default function FreeCfaMockPage() {
  return (
    <MarketingChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <main className="max-w-3xl mx-auto px-6 py-14">
        {/* Lead with the answer — no filler intro. */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          style={{ background: "var(--ats-green-bg)", color: "var(--ats-green)" }}>
          Free · No signup · No card
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.08] mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          Free CFA Level 1 mock exam — the full 180 questions
        </h1>
        <p className="text-lg mb-7" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Yes, it&apos;s genuinely free. Take a full-length, timed CFA Level 1 mock — 180 questions at the real
          90-seconds-per-question pace — and get an instant per-topic score plus an honest estimate of whether
          you&apos;d pass today. No account, no card, no email. Short on time? Start with the 15-question version
          in about 22 minutes.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <Link href="/mock" className="btn-primary text-base px-8 py-3.5" style={{ borderRadius: 14 }}>Start the free mock →</Link>
          <Link href="/check" className="btn-secondary text-base px-7 py-3.5" style={{ borderRadius: 14 }}>Or take the 3-minute check</Link>
        </div>
        <p className="text-xs mb-12" style={{ color: "var(--text-muted)" }}>
          The exam itself costs $1,140. Finding out where you stand shouldn&apos;t cost anything.
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

        <h2 className="font-display text-2xl mb-3" style={{ color: "var(--text-primary)" }}>Why we give the full mock away</h2>
        <p className="text-base mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Most &ldquo;free&rdquo; CFA mocks are 90 questions, gated behind a signup, or a teaser for a $300–$1,500 course.
          {" "}{BRAND.name} is the low-cost prep tool — from $9.58/mo — so the mock is the honest demo: take the real
          thing, see your gaps, and decide for yourself. If the readings and question bank earn it, you&apos;ll upgrade.
          If not, you still walked away with a real score.
        </p>
        <p className="text-base mb-12" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          After the mock, {BRAND.name} turns your weak topics into a gamified daily plan — five-minute lessons,
          streaks, and a full question bank — the {" "}
          <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>Duolingo-style way to pass the CFA</Link>.
          {" "}See the full breakdown on <Link href="/cheapest-cfa-prep" style={{ color: "var(--primary)", fontWeight: 600 }}>pricing</Link>{" "}
          or read the <Link href="/blog/cfa-level-1-study-guide" style={{ color: "var(--primary)", fontWeight: 600 }}>CFA Level 1 study guide</Link>.
        </p>

        <div className="card p-7 text-center" style={{ border: "1.5px solid var(--primary)" }}>
          <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Ready to see where you stand?</h2>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>180 questions. Real pacing. Instant score. No signup.</p>
          <Link href="/mock" className="btn-primary text-base px-9 py-3.5 inline-block" style={{ borderRadius: 14 }}>Start the free CFA mock →</Link>
        </div>
      </main>
    </MarketingChrome>
  );
}
