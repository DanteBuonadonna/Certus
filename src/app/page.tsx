import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { EXAMS, difficultyLabel, totalHours } from "@/lib/exams";

export default function LandingPage() {
  const featured = EXAMS.slice(0, 6);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-8 py-4"
        style={{ borderBottom: "0.5px solid var(--border)" }}
      >
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="font-medium" style={{ color: "var(--text-primary)" }}>
            {BRAND.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm px-4 py-2 rounded-lg" style={{ color: "var(--text-secondary)" }}>
            Sign in
          </Link>
          <Link href="/signup" className="btn-primary text-sm">
            Start climbing free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24 max-w-3xl mx-auto">
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
          style={{ background: "var(--primary-light)", color: "var(--primary)", border: "0.5px solid rgba(83,74,183,0.25)" }}
        >
          <FlameIcon />
          Streaks · XP · daily challenges — studying that's actually fun
        </div>

        <h1 className="text-5xl font-medium leading-tight mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          Pass finance&apos;s hardest exams.
          <br />
          <span style={{ color: "var(--primary)" }}>One climb a day.</span>
        </h1>

        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {BRAND.name} turns CFA, CPA, Series 7 and more into a game. Set your exam date, get a daily plan that
          re-balances when life happens, and keep your streak alive all the way to the summit.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link href="/signup" className="btn-primary text-base px-6 py-3">
            Start climbing free →
          </Link>
          <Link href="/login" className="btn-secondary text-base px-6 py-3">
            Sign in
          </Link>
        </div>

        <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
          Free to start. No credit card. Your first study plan takes 60 seconds.
        </p>
      </section>

      {/* Exam grid */}
      <section className="py-16 px-6" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-medium mb-2" style={{ color: "var(--text-primary)" }}>
            Built for the exams that actually scare people
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "var(--text-secondary)" }}>
            The ten hardest finance certifications — plus a guided Wealth Management track.
          </p>
          <div className="grid grid-cols-3 gap-5">
            {featured.map((e) => (
              <div key={e.slug} className="card p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-semibold"
                    style={{ background: e.accent + "1a", color: e.accent }}
                  >
                    {e.name.slice(0, 2)}
                  </span>
                  <span className="text-[11px] font-medium" style={{ color: e.accent }}>
                    {difficultyLabel(e.difficulty)}
                  </span>
                </div>
                <h3 className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                  {e.name}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                  {e.blurb}
                </p>
                <div className="flex items-center gap-1 text-[11px]" style={{ color: "var(--text-muted)" }}>
                  <ClockIcon /> ~{totalHours(e)} hrs to summit
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/signup" className="text-sm font-medium" style={{ color: "var(--primary)" }}>
              See all {EXAMS.length} exams →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-medium mb-12" style={{ color: "var(--text-primary)" }}>
            A study system you&apos;ll actually stick to
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "🗓️", title: "Set your exam date", desc: "Pick your exam and test day. Ascent back-calculates the hours you need and spreads them into a realistic daily plan." },
              { icon: "🔥", title: "Climb every day", desc: "Short daily sessions, a streak that rewards consistency, XP, levels, and daily challenges that make showing up fun." },
              { icon: "🧗", title: "Stay on pace", desc: "Fall behind and the plan quietly re-balances — no guilt spiral, just a clear path back to on-track." },
              { icon: "🧠", title: "Study the right way", desc: "Spaced repetition, active recall, interleaving, and timed mocks — the methods proven to make knowledge stick." },
              { icon: "🏔️", title: "Skill-tree topics", desc: "Each exam is a route. Unlock topic areas as you master prerequisites and watch your map fill in." },
              { icon: "🏆", title: "Earn your summit", desc: "Badges, milestones, and a leaderboard. Beat your past self and the rest of the climb." },
            ].map((f) => (
              <div key={f.title} className="card p-5">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-medium mb-4" style={{ color: "var(--text-primary)" }}>
            Your exam date isn&apos;t moving. Start the climb today.
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            The candidates who pass aren&apos;t the smartest — they&apos;re the most consistent. {BRAND.name} makes
            consistency the easy part.
          </p>
          <Link href="/signup" className="btn-primary text-base px-8 py-3">
            Start climbing free →
          </Link>
        </div>
      </section>

      {/* Footer (resume tool demoted to a small link here) */}
      <footer className="py-6 px-8 flex items-center justify-between" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="flex items-center gap-2">
          <LogoMark size={18} />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {BRAND.name}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/optimizer" className="text-xs" style={{ color: "var(--text-muted)" }}>
            {BRAND.legacyToolName}
          </Link>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {BRAND.year} {BRAND.name}
          </p>
        </div>
      </footer>
    </div>
  );
}

function LogoMark({ size = 24 }: { size?: number }) {
  // Climbing-summit mark
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#534AB7" />
      <path d="M5 17l4.5-8 3 5 2-3.5L19 17H5z" fill="white" />
      <circle cx="16.5" cy="7.5" r="1.6" fill="rgba(255,255,255,0.85)" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c1 3-1 4-2 6-1 1.5-1 4 1 4 1.5 0 2-1 2-2 1 1 2 2 2 4a5 5 0 11-10 0c0-3 2-5 3-7 1.5-2.5 3-3.5 4-5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
