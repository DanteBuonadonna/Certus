import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { EXAMS, difficultyLabel, totalHours } from "@/lib/exams";

const RANKS = ["Intern", "Analyst", "Associate", "VP", "Director", "MD", "Partner"];

export default function LandingPage() {
  const featured = EXAMS.slice(0, 6);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="font-medium" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm px-4 py-2 rounded-lg" style={{ color: "var(--text-secondary)" }}>Sign in</Link>
          <Link href="/dashboard" className="btn-primary text-sm">Start free</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-24 pb-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
          style={{ background: "var(--primary-light)", color: "var(--primary)", border: "0.5px solid rgba(83,74,183,0.25)" }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--primary)", display: "inline-block" }} />
          Prep that works like a career, not homework
        </div>

        <h1 className="text-5xl font-medium leading-tight mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
          Pass finance&apos;s hardest exams.
          <br />
          <span style={{ color: "var(--primary)" }}>Climb from intern to partner.</span>
        </h1>

        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {BRAND.name} turns CFA, CPA, Series 7 and more into a career you level up.
          Clear daily assignments, earn your title, and sit Exam Day when you&apos;ve truly earned it.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link href="/dashboard" className="btn-primary text-base px-6 py-3">Start your track →</Link>
          <Link href="/dashboard" className="btn-secondary text-base px-6 py-3">Explore the exams</Link>
        </div>
        <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>Free to start. The full CFA track, on the house.</p>
      </section>

      {/* Rank ladder */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {RANKS.map((r, i) => (
            <span key={r} className="flex items-center gap-1.5">
              <span className="text-xs font-medium px-3 py-1.5 rounded-lg" style={{
                background: i === RANKS.length - 1 ? "var(--primary)" : "var(--bg-card)",
                color: i === RANKS.length - 1 ? "#fff" : "var(--text-secondary)",
                border: "0.5px solid var(--border)",
              }}>{r}</span>
              {i < RANKS.length - 1 && <span style={{ color: "var(--text-muted)" }}>→</span>}
            </span>
          ))}
        </div>
        <p className="text-center text-xs mt-3" style={{ color: "var(--text-muted)" }}>
          Every chapter read, deck drilled, and set won earns XP — and promotions.
        </p>
      </section>

      {/* How it works */}
      <section className="py-16 px-6" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-medium mb-12" style={{ color: "var(--text-primary)" }}>
            A desk you&apos;ll actually want to sit at
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {[
              { n: "01", t: "Pick your track", d: "Choose an exam and your test date. Certus back-calculates the hours and lays out a daily plan." },
              { n: "02", t: "Clear assignments", d: "Read, drill flashcards, win practice sets — each is a quest with XP, capital, and a clear reward." },
              { n: "03", t: "Earn your title", d: "Level up from Intern to Partner. Unlock titles, banners, and a profile that shows your standing." },
              { n: "04", t: "Sit Exam Day", d: "Master the track to unlock the boss — a timed, comprehensive exam. Beat it to prove you're ready." },
            ].map((s) => (
              <div key={s.n} className="card p-5">
                <div className="text-xs font-semibold mb-3" style={{ color: "var(--primary)" }}>{s.n}</div>
                <h3 className="text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>{s.t}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam grid */}
      <section className="py-16 px-6" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-medium mb-2" style={{ color: "var(--text-primary)" }}>
            The exams that decide careers
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "var(--text-secondary)" }}>
            Ten of finance&apos;s hardest certifications — plus a guided wealth-management track.
          </p>
          <div className="grid grid-cols-3 gap-5">
            {featured.map((e) => (
              <div key={e.slug} className="card p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-semibold"
                    style={{ background: e.accent + "1a", color: e.accent }}>{e.name.slice(0, 2)}</span>
                  <span className="text-[11px] font-medium" style={{ color: e.accent }}>{difficultyLabel(e.difficulty)}</span>
                </div>
                <h3 className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>{e.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{e.blurb}</p>
                <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>~{totalHours(e)} hrs to exam-ready</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/dashboard" className="text-sm font-medium" style={{ color: "var(--primary)" }}>See all {EXAMS.length} exams →</Link>
          </div>
        </div>
      </section>

      {/* Gamified pitch */}
      <section className="py-16 px-6" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-medium mb-12" style={{ color: "var(--text-primary)" }}>
            Built to keep you coming back
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { t: "Quests, not chores", d: "Daily and weekly assignments with real rewards. Studying becomes a streak you don't want to break." },
              { t: "Earn your standing", d: "XP unlocks promotions, titles, banners, and profile upgrades. Your progress is something you can show off." },
              { t: "Exam Day boss", d: "A timed, comprehensive mock you have to earn. Pass it and you're genuinely ready for the real thing." },
              { t: "Learn from every miss", d: "Every question explains why each answer is right or wrong — and sends you back to your weakest topics." },
              { t: "Spaced repetition", d: "Flashcards resurface right before you'd forget them, the proven way to make it stick." },
              { t: "Adaptive plan", d: "Fall behind and the schedule quietly re-balances. No guilt spiral, just a clear path back." },
            ].map((f) => (
              <div key={f.t} className="card p-5">
                <h3 className="text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>{f.t}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-medium mb-4" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            The corner office starts with one exam.
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            The candidates who pass aren&apos;t the smartest — they&apos;re the most consistent. {BRAND.name} makes consistency the easy part.
          </p>
          <Link href="/dashboard" className="btn-primary text-base px-8 py-3">Start free →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 flex items-center justify-between" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="flex items-center gap-2">
          <LogoMark size={18} />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>{BRAND.name}</span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/optimizer" className="text-xs" style={{ color: "var(--text-muted)" }}>{BRAND.legacyToolName}</Link>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>© {BRAND.year} {BRAND.name}</p>
        </div>
      </footer>
    </div>
  );
}

function LogoMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#534AB7" />
      <path d="M6 16V11M10 16V8M14 16V12M18 16V6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
