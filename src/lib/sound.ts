// ============================================================
// Certus — tiny Web Audio sound engine (no asset files).
// Synthesizes the Duolingo-style answer feedback tones on the fly.
// All calls are no-ops on the server and respect a mute flag.
// ============================================================

let ctx: AudioContext | null = null;
const MUTE_KEY = "certus_muted";

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new AC();
    }
    // Browsers suspend the context until a user gesture — resume on play.
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    return ctx;
  } catch {
    return null;
  }
}

export function isMuted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setMuted(muted: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
  } catch {}
}

export function toggleMuted(): boolean {
  const next = !isMuted();
  setMuted(next);
  return next;
}

// Play a single tone.
function tone(freq: number, start: number, dur: number, type: OscillatorType = "sine", gain = 0.16) {
  const ac = audio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ac.currentTime + start);
  g.gain.setValueAtTime(0.0001, ac.currentTime + start);
  g.gain.exponentialRampToValueAtTime(gain, ac.currentTime + start + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + dur);
  osc.connect(g);
  g.connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + dur + 0.02);
}

// Bright rising two-note chime for a correct answer.
export function playCorrect(): void {
  if (isMuted()) return;
  tone(660, 0, 0.16, "triangle", 0.18);
  tone(990, 0.09, 0.22, "triangle", 0.18);
}

// Low buzzy double-blip for a wrong answer.
export function playWrong(): void {
  if (isMuted()) return;
  tone(196, 0, 0.18, "sawtooth", 0.1);
  tone(155, 0.1, 0.22, "sawtooth", 0.1);
}

// A short ascending fanfare for lesson completion.
export function playComplete(): void {
  if (isMuted()) return;
  const notes = [523, 659, 784, 1047]; // C E G C
  notes.forEach((f, i) => tone(f, i * 0.12, 0.3, "triangle", 0.16));
}

// A tiny tick used while XP counts up.
export function playTick(): void {
  if (isMuted()) return;
  tone(880, 0, 0.04, "square", 0.05);
}

// A rising "whoosh" for a growing combo.
export function playCombo(level: number): void {
  if (isMuted()) return;
  const base = 520 + Math.min(level, 8) * 70;
  tone(base, 0, 0.12, "triangle", 0.14);
  tone(base * 1.5, 0.06, 0.16, "triangle", 0.12);
}

// A bright metallic coin "ka-ching" for earning/spending Comp.
export function playCoin(): void {
  if (isMuted()) return;
  tone(1320, 0, 0.08, "square", 0.07);
  tone(1760, 0.05, 0.12, "square", 0.06);
  tone(2640, 0.1, 0.14, "triangle", 0.05);
}

// A short triumphant sting for unlocking/equipping an item.
export function playUnlock(): void {
  if (isMuted()) return;
  tone(587, 0, 0.14, "triangle", 0.15);
  tone(880, 0.08, 0.16, "triangle", 0.15);
  tone(1175, 0.16, 0.26, "triangle", 0.14);
}
