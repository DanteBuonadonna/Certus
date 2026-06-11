// ============================================================
// Reading progress — tracks which chapters have been completed.
// Client-side (localStorage), mirrors gameStore's approach.
// ============================================================

const KEY = "certus_reading_v1";

export type ReadingStore = Record<string, string>; // "exam:chapterId" -> ISO date completed

export function loadReading(): ReadingStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

export function isChapterRead(exam: string, chapterId: string, store?: ReadingStore): boolean {
  const s = store ?? loadReading();
  return Boolean(s[`${exam}:${chapterId}`]);
}

export function markChapterRead(exam: string, chapterId: string): ReadingStore {
  const s = loadReading();
  if (!s[`${exam}:${chapterId}`]) {
    s[`${exam}:${chapterId}`] = new Date().toISOString().slice(0, 10);
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch {}
  }
  return s;
}

export function readCount(exam: string, chapterIds: string[], store?: ReadingStore): number {
  const s = store ?? loadReading();
  return chapterIds.filter((id) => Boolean(s[`${exam}:${id}`])).length;
}
