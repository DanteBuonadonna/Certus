// ============================================================
// The Diagnostic — the front door.
//
// 10 real questions, ~5 minutes. It's what every ad lands on (/check), and
// it's the first honest data point we have about a candidate.
//
// It also fixes a genuine bug: readiness used to compute from reading coverage,
// flashcard mastery, boss score and consistency — all of which are ZERO for a
// new user. So a brand-new account was told it had a "2% chance of passing",
// based on nothing at all. Now, if you've taken the diagnostic, THAT anchors
// your score, because it's the only thing we actually know.
// ============================================================

export interface WeakTopic {
  topicId: string;
  topicName: string;
  correct: number;
  total: number;
  pct: number;
}

export interface DiagnosticResult {
  examSlug: string;
  correct: number;
  total: number;
  pct: number; // 0..100
  weakTopics: WeakTopic[]; // worst first
  date: string; // YYYY-MM-DD
}

const KEY = "certus_diagnostic_v1";

// The minimum passing score isn't published. CFA Institute has long indicated
// it sits somewhere around 60–70%. We show a BAND and never a fake precision —
// that honesty is the most credible thing about the product.
export const MPS_LOW = 65;
export const MPS_HIGH = 70;

export function saveDiagnostic(r: DiagnosticResult): void {
  if (typeof window === "undefined") return;
  try {
    const all = loadAll();
    all[r.examSlug] = r;
    localStorage.setItem(KEY, JSON.stringify(all));
    window.dispatchEvent(new Event("certus-diagnostic-changed"));
  } catch {}
}

function loadAll(): Record<string, DiagnosticResult> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function loadDiagnostic(examSlug: string): DiagnosticResult | null {
  return loadAll()[examSlug] ?? null;
}

/** Plain-English verdict. No fake precision, no false comfort. */
export function verdict(pct: number): { label: string; tone: "bad" | "close" | "good" } {
  if (pct >= MPS_HIGH + 8) return { label: "You'd likely pass today.", tone: "good" };
  if (pct >= MPS_LOW) return { label: "You're right on the line.", tone: "close" };
  if (pct >= 50) return { label: "You'd probably fail today.", tone: "bad" };
  return { label: "You would not pass today.", tone: "bad" };
}
