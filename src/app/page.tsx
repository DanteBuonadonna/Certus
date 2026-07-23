import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { EXAMS, difficultyLabel, totalHours } from "@/lib/exams";
import { examsWithContent } from "@/content";
import { statHeadline } from "@/lib/contentStats";
import { liveTestimonials, hasRealTestimonials } from "@/lib/testimonials";
import { LogoMark } from "@/components/Logo";
import { FREE_INCLUDES, PRO_INCLUDES, ANNUAL_PER_MONTH, ANNUAL_TOTAL, MONTHLY_PRICE, EXAM_COST_ANCHOR } from "@/lib/tier";
import { TRIAL_CTA, trialDisclosureShort } from "@/lib/trial";

const RANKS = ["Intern", "Analyst", "Associate", "VP", "Director", "MD", "Partner"];

export default function LandingPage() {
  // Only ever feature / promise exams that actually have content.
  const live = new Set(examsWithContent());
  const liveExams = EXAMS.filter((e) => live.has(e.slug));
  const featured = liveExams.slice(0, 6);
  const ticker = [...EXAMS, ...EXAMS];
  const stats = statHeadline();
  const testimonials = liveTestimonials();

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>
      {/* ---------- Glass nav ---------- */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-3.5"
        style={{
          borderBottom: "0.5px solid var(--border)",
          background: "color-mix(in srgb, var(--bg) 72%, transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
        </div>
        {/* These pointed at /signup — a bare email/password form — which is a dead
            end for someone in research mode who just wants to know what this is.
            They anchor-scroll to the real sections now. "Free mock" is here
            because it's the best thing we give away and it was unfindable. */}
        <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--text-secondary)" }}>
          <Link href="#exams" className="hover:opacity-70 transition-opacity">Exams</Link>
          <Link href="#how" className="hover:opacity-70 transition-opacity">How it works</Link>
          <Link href="/mock" className="hover:opacity-70 transition-opacity" style={{ color: "var(--ats-green)", fontWeight: 600 }}>Free mock</Link>
          <Link href="#pricing" className="hover:opacity-70 transition-opacity">Pricing</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm px-3 py-2 rounded-lg hover:opacity-70 transition-opacity" style={{ color: "var(--text-secondary)" }}>Sign in</Link>
          <Link href="/welcome" className="btn-primary text-sm">Start free</Link>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <section className="relative px-6 pt-20 pb-24" style={{ overflow: "hidden" }}>
        {/* animated gradient blobs */}
        <div aria-hidden className="lp-blob" style={{ width: 460, height: 460, top: -120, left: "8%", background: "var(--primary)" }} />
        <div aria-hidden className="lp-blob" style={{ width: 380, height: 380, top: 40, right: "6%", background: "#8b5cf6", animationDelay: "-5s" }} />
        <div aria-hidden className="lp-blob" style={{ width: 320, height: 320, top: 260, left: "38%", background: "var(--gold-bright)", opacity: 0.32, animationDelay: "-9s" }} />
        {/* faint grid */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, #000 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, #000 30%, transparent 75%)",
            opacity: 0.5,
          }}
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* left: copy */}
          <div className="text-center lg:text-left rise-in">
            {/* THE POSITIONING LINE. Four words that tell a stranger the whole
                category. "Prep that runs like a career, not homework" was ours
                alone — nobody had a hook for it. Everyone already knows what
                Duolingo feels like, so this borrows that understanding for free. */}
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
              style={{ background: "var(--bg-card)", color: "var(--primary)", border: "0.5px solid var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--ats-green)", display: "inline-block", boxShadow: "0 0 0 3px var(--ats-green-bg)" }} />
              Duolingo for finance&apos;s hardest exams
            </div>

            {/* THE ASK IS NOW A QUESTION THEY ALREADY HAVE.
                164 sessions landed here and 121 never clicked anything. The old
                headline ("Pass finance's hardest exams. Earn the title.") is
                something Kaplan could run — it names the category, not us. And
                the old CTA, "Start learning free", asks for an open-ended
                commitment to studying. Nobody wakes up wanting to start
                learning. They do wake up wondering whether they'd pass. */}
            <h1 className="font-display text-5xl lg:text-6xl leading-[1.04] mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
              Would you pass
              <br />
              the CFA
              <br />
              <span className="lp-gradient-text">today?</span>
            </h1>

            <p className="text-lg mb-6 max-w-lg mx-auto lg:mx-0" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Answer a few quick questions and {BRAND.name} builds your plan: where you stand,
              exactly what to drill, and your projected path to passing. Works for the CFA,
              SIE, Series 7 &amp; 66, CPA, and CFP.
            </p>

            {/* The differentiator, stated where it can be checked. This is the
                sharpest thing we own and it wasn't on the page at all. */}
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-3.5 py-2 rounded-lg mb-7"
              style={{ background: "var(--ats-green-bg)", color: "var(--ats-green)" }}
            >
              <span>✓</span>
              Full timed mock exam — free. No signup, no card.
            </div>

            {/* ONE big, broad ask. "Take the 6-minute check" filtered for the
                sliver of visitors willing to be tested right now (121 of 164
                sessions bounced without a click). The button now promises
                something personal and effortless — the onboarding taps — and
                the diagnostic comes later, once they're invested. */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <Link href="/check" className="btn-primary text-lg px-12 py-4 w-full sm:w-auto text-center" style={{ borderRadius: 16 }}>
                Get started — it&apos;s free →
              </Link>
              <Link href="/mock" className="text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
                Or jump straight into the free mock exam
              </Link>
            </div>
            <p className="text-xs mt-4 mb-5" style={{ color: "var(--text-muted)" }}>
              No signup. No card. No email. The exam costs $1,140 — finding out where you stand shouldn&apos;t.
            </p>
          </div>

          {/* right: floating promotion mock */}
          <div className="relative rise-in" style={{ animationDelay: "0.12s" }}>
            <PromotionCard />
          </div>
        </div>
      </section>

      {/* ---------- Exam ticker ---------- */}
      <section className="py-6" style={{ borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)", background: "var(--bg-card)" }}>
        <div className="relative" style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}>
          <div className="lp-marquee gap-3">
            {ticker.map((e, i) => {
              const soon = !live.has(e.slug);
              return (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mx-1.5 text-sm font-medium"
                  style={{ background: "var(--bg)", border: "0.5px solid var(--border)", color: "var(--text-secondary)", flex: "0 0 auto", opacity: soon ? 0.5 : 1 }}>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-semibold" style={{ background: e.accent + "1a", color: e.accent }}>{e.name.slice(0, 2)}</span>
                  {e.name}
                  {soon && <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>· soon</span>}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- By the numbers (live depth proof) ---------- */}
      <section className="px-6 py-14" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <p className="text-center text-xs uppercase tracking-wider mb-8" style={{ color: "var(--text-muted)" }}>
          A real curriculum — not thin summaries
        </p>
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { n: stats.hours, l: "hours of textbook-depth readings" },
            { n: stats.questions, l: "trap-aware practice questions" },
            { n: stats.lessons, l: "lessons across the library" },
            { n: `${stats.exams}`, l: "exam tracks, one subscription" },
          ].map((x) => (
            <div key={x.l}>
              <div className="font-display text-3xl sm:text-4xl mb-1" style={{ color: "var(--primary)" }}>{x.n}</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.4 }}>{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Free mock exams (Levels I–III) ---------- */}
      <section className="px-6 py-20" style={{ borderBottom: "0.5px solid var(--border)", background: "var(--bg-card)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--primary)" }}>
            Free — no account, no card
          </p>
          <h2 className="font-display text-3xl mb-3" style={{ color: "var(--text-primary)" }}>
            Would you pass if the exam were today?
          </h2>
          <p className="text-sm max-w-2xl mx-auto mb-10" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Other providers charge up to $1,400 for full-length mocks. Ours are free — faithful
            replicas of all three CFA exams, with a formal per-topic score report and an honest,
            data-based estimate of your odds of passing. Start with a short readiness check, or take
            the full mock end to end.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
            {[
              { lvl: "Level I", spec: "180 questions · two 2 h 15 m sessions", detail: "Blueprint-weighted MCQs at the real 90-seconds-per-question pace, with flag-and-review navigation." },
              { lvl: "Level II", spec: "22 item sets · 88 questions", detail: "Case vignettes with exhibits — the format shift that surprises every Level II candidate, replicated exactly." },
              { lvl: "Level III", spec: "Item sets + graded essays", detail: "Constructed-response essays scored against guideline answers with point rubrics, just like exam day." },
            ].map((x) => (
              <div key={x.lvl} className="rounded-xl p-5" style={{ background: "var(--bg)", border: "0.5px solid var(--border)" }}>
                <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{x.lvl}</div>
                <div className="text-[11px] font-mono mb-2" style={{ color: "var(--primary)" }}>{x.spec}</div>
                <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>{x.detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/mock"
            className="inline-block px-8 py-3 rounded-xl text-sm font-semibold"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            See your odds of passing — free →
          </Link>
          <p className="text-[11px] mt-4" style={{ color: "var(--text-muted)" }}>
            Odds are statistical estimates from your score vs. the historical passing range — never a guarantee.
          </p>
        </div>
      </section>

      {/* ---------- Rank ladder ---------- */}
      <section className="px-6 py-20" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-2" style={{ color: "var(--text-primary)" }}>From the bullpen to the corner office</h2>
          <p className="text-sm mb-10" style={{ color: "var(--text-secondary)" }}>
            Every chapter read, deck drilled, and set won earns XP — and promotions.
          </p>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {RANKS.map((r, i) => {
              const last = i === RANKS.length - 1;
              return (
                <span key={r} className="flex items-center gap-1.5">
                  <span
                    className="text-xs font-semibold px-3.5 py-2 rounded-lg"
                    style={{
                      background: last ? "var(--primary)" : "var(--bg-card)",
                      color: last ? "#fff" : "var(--text-secondary)",
                      border: last ? "none" : "0.5px solid var(--border)",
                      animation: "ladderPromote 7s ease-in-out infinite",
                      animationDelay: `${i * 0.55}s`,
                    }}
                  >
                    {r}
                  </span>
                  {!last && <span style={{ color: "var(--text-muted)" }}>→</span>}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how" className="py-20 px-6" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-display text-3xl mb-3" style={{ color: "var(--text-primary)" }}>A desk you&apos;ll actually want to sit at</h2>
          <p className="text-center text-sm mb-12" style={{ color: "var(--text-secondary)" }}>Four moves from first day to fully credentialed.</p>
          <div className="grid md:grid-cols-4 gap-5 stagger">
            {[
              { n: "01", t: "Pick your track", d: "Choose an exam and a test date. Certus back-calculates the hours and lays out a daily plan." },
              { n: "02", t: "Clear assignments", d: "Read, drill flashcards, win practice sets — each a quest with XP, capital, and a clear reward." },
              { n: "03", t: "Earn your title", d: "Level up from Intern to Partner. Unlock titles, banners, and a profile that shows your standing." },
              { n: "04", t: "Take Exam Day", d: "Master the track to unlock the boss — a timed, comprehensive exam. Beat it to prove you're ready." },
            ].map((s) => (
              <div key={s.n} className="card-i p-5">
                <div className="font-mono text-xs font-semibold mb-3 inline-flex items-center justify-center w-8 h-8 rounded-lg" style={{ color: "var(--primary)", background: "var(--primary-light)" }}>{s.n}</div>
                <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{s.t}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Exam grid ---------- */}
      <section id="exams" className="py-20 px-6" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-display text-3xl mb-2" style={{ color: "var(--text-primary)" }}>The exams that decide careers</h2>
          <p className="text-center text-sm mb-12" style={{ color: "var(--text-secondary)" }}>
            Finance&apos;s hardest certifications — plus a guided wealth-management track.
          </p>
          <div className="grid md:grid-cols-3 gap-5 stagger">
            {featured.map((e) => (
              <div key={e.slug} className="card-i p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-semibold" style={{ background: e.accent + "1a", color: e.accent }}>{e.name.slice(0, 2)}</span>
                  <span className="text-[11px] font-medium" style={{ color: e.accent }}>{difficultyLabel(e.difficulty)}</span>
                </div>
                <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{e.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{e.blurb}</p>
                <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>~{totalHours(e)} hrs to exam-ready</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/signup" className="text-sm font-medium" style={{ color: "var(--primary)" }}>Explore every exam →</Link>
          </div>
        </div>
      </section>

      {/* ---------- Gamified pitch ---------- */}
      <section className="py-20 px-6" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-display text-3xl mb-12" style={{ color: "var(--text-primary)" }}>Built to keep you coming back</h2>
          <div className="grid md:grid-cols-3 gap-5 stagger">
            {[
              { t: "Quests, not chores", d: "Daily and weekly assignments with real rewards. Studying becomes a streak you don't want to break." },
              { t: "Earn your standing", d: "XP unlocks promotions, titles, banners, and profile upgrades. Progress you can actually show off." },
              { t: "Exam Day boss", d: "A timed, comprehensive mock you have to earn. Pass it and you're genuinely ready for the real thing." },
              { t: "Learn from every miss", d: "Every question explains why each answer is right or wrong — and routes you back to your weakest topics." },
              { t: "Spaced repetition", d: "Flashcards resurface right before you'd forget them — the proven way to make it stick." },
              { t: "Adaptive plan", d: "Fall behind and the schedule quietly re-balances. No guilt spiral, just a clear path back." },
            ].map((f) => (
              <div key={f.t} className="card-i p-5">
                <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{f.t}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials (only render once REAL quotes exist) ---------- */}
      {hasRealTestimonials() && (
        <section className="py-20 px-6" style={{ borderBottom: "0.5px solid var(--border)" }}>
          <h2 className="text-center font-display text-2xl mb-10" style={{ color: "var(--text-primary)" }}>
            What early students say
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-6 flex flex-col" style={{ border: "0.5px solid var(--border)" }}>
                <p className="text-sm mb-4 flex-1" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{t.name}</div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.exam}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Pricing ----------
          There was NO price anywhere on this page. Not one number. The "Pricing"
          nav link went to /billing, which needs an account to be useful. A buyer
          who can't find a price assumes it's expensive and leaves — and we were
          hiding a number ($9.58/mo) that's cheap next to a $1,140 exam. Hiding
          your best argument is a strange way to sell. */}
      <section id="pricing" className="py-20 px-6" style={{ borderBottom: "0.5px solid var(--border)", background: "var(--bg-card)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Pricing</p>
          <h2 className="font-display text-3xl text-center mb-2" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Start free. Pay when it&apos;s working.
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "var(--text-secondary)" }}>
            {EXAM_COST_ANCHOR} This is the cheapest part of your prep.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Free */}
            <div className="card p-6" style={{ border: "0.5px solid var(--border)" }}>
              <div className="text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>Free</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-4xl" style={{ color: "var(--text-primary)" }}>$0</span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>forever</span>
              </div>
              <ul className="space-y-2 mb-6">
                {FREE_INCLUDES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--ats-green)", marginTop: 1 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/check" className="btn-secondary w-full text-center block">Get started free</Link>
            </div>

            {/* Pro — annual badged, monthly-framed price */}
            <div className="card p-6 relative" style={{ border: "1.5px solid var(--primary)" }}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap" style={{ background: "var(--ats-green)", color: "#fff" }}>
                Best value
              </span>
              <div className="text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>Pro</div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl" style={{ color: "var(--text-primary)" }}>{ANNUAL_PER_MONTH}</span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>/mo, billed yearly</span>
              </div>
              <div className="text-xs mt-1 mb-4" style={{ color: "var(--text-muted)" }}>
                ${ANNUAL_TOTAL} once — or ${MONTHLY_PRICE}/mo month to month.
              </div>
              <ul className="space-y-2 mb-6">
                {PRO_INCLUDES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--ats-green)", marginTop: 1 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/billing" className="btn-primary w-full text-center block">{TRIAL_CTA} →</Link>
              <p className="text-xs mt-3" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
                {trialDisclosureShort("annual")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative py-24 px-6 text-center" style={{ overflow: "hidden" }}>
        <div aria-hidden className="lp-blob" style={{ width: 420, height: 420, top: -80, left: "50%", marginLeft: -210, background: "var(--primary)", opacity: 0.32 }} />
        <div className="relative max-w-xl mx-auto">
          <h2 className="font-display text-4xl mb-4" style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            The corner office starts with one exam.
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            The candidates who pass aren&apos;t the smartest — they&apos;re the most consistent. {BRAND.name} makes consistency the easy part.
          </p>
          {/* Same ask as the hero. A second, different CTA here would just split
              intent again — the whole page should be pulling one direction. */}
          <Link href="/check" className="btn-primary text-lg px-10 py-4" style={{ borderRadius: 16 }}>Get started — it&apos;s free →</Link>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="py-7 px-8 flex items-center justify-between" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="flex items-center gap-2.5">
          <LogoMark size={18} />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>{BRAND.name}</span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <Link href="/blog" className="text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>Blog</Link>
          <Link href="/terms" className="text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>Terms</Link>
          <Link href="/privacy" className="text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>Privacy</Link>
          <Link href="/refund" className="text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>Refunds</Link>
          <a href={`mailto:${BRAND.supportEmail}`} className="text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>Support</a>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>© {BRAND.year} {BRAND.name}</p>
        </div>
      </footer>
    </div>
  );
}

/* Logo lives in src/components/Logo.tsx — the Certus certification seal. */

/* ============================================================
   Hero visual — a live "promotion" card with a climbing XP bar,
   floating gently. Pure CSS motion, no client JS.
   ============================================================ */
function PromotionCard() {
  return (
    <div className="relative mx-auto lp-float" style={{ maxWidth: 380 }}>
      {/* glow */}
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 40%, rgba(83,74,183,0.25), transparent 70%)", filter: "blur(24px)" }} />

      <div className="relative card p-5" style={{ boxShadow: "var(--shadow-lg)", borderColor: "var(--border-strong)" }}>
        {/* header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--primary)", color: "#fff" }}>DB</div>
            <div>
              <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Your desk</div>
              <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>CFA · Level I track</div>
            </div>
          </div>
          <span className="pill-gold">★ Associate</span>
        </div>

        {/* promotion toast */}
        <div className="rounded-xl p-3 mb-4 flex items-center gap-3" style={{ background: "var(--gold-bg)", border: "0.5px solid var(--gold-border)" }}>
          <div className="text-xl" style={{ animation: "bob 1.4s ease-in-out infinite" }}>🏆</div>
          <div>
            <div className="text-xs font-bold" style={{ color: "var(--gold)" }}>Promotion unlocked</div>
            <div className="text-[11px]" style={{ color: "var(--text-secondary)" }}>Associate → Vice President</div>
          </div>
        </div>

        {/* XP bar */}
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-medium" style={{ color: "var(--text-secondary)" }}>XP to next rank</span>
          <span className="text-[11px] font-mono font-semibold" style={{ color: "var(--primary)" }}>3,180 / 4,000</span>
        </div>
        <div className="progress-track mb-4">
          <div className="progress-fill" style={{ width: "79%", background: "linear-gradient(90deg, var(--primary), var(--gold-bright))" }} />
        </div>

        {/* quest chips */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: "Read", v: "Derivatives" },
            { l: "Drill", v: "24 cards" },
            { l: "Streak", v: "12 days 🔥" },
          ].map((q) => (
            <div key={q.l} className="rounded-lg p-2.5 text-center" style={{ background: "var(--bg)", border: "0.5px solid var(--border)" }}>
              <div className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "var(--text-muted)" }}>{q.l}</div>
              <div className="text-[11px] font-semibold" style={{ color: "var(--text-primary)" }}>{q.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* floating mini badge */}
      <div className="absolute -right-4 -bottom-4 card px-3 py-2 flex items-center gap-2 lp-float" style={{ animationDelay: "-2.5s", boxShadow: "var(--shadow-md)", borderColor: "var(--border-strong)" }}>
        <span className="text-base">📈</span>
        <div>
          <div className="text-[11px] font-bold" style={{ color: "var(--text-primary)" }}>+250 XP</div>
          <div className="text-[9px]" style={{ color: "var(--text-muted)" }}>Practice set won</div>
        </div>
      </div>
    </div>
  );
}
