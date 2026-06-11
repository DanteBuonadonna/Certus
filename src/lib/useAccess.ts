"use client";

import { useEffect, useState } from "react";
import { isPro, FREE_PREVIEW_CHAPTERS } from "./access";

// Client hook so gating reads localStorage after mount (no hydration mismatch).
export function useAccess() {
  const [pro, setProState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProState(isPro());
    setReady(true);
  }, []);

  return {
    pro,
    ready,
    freePreview: FREE_PREVIEW_CHAPTERS,
    // Every exam is previewable by everyone; depth is what's gated.
    canExam: (_slug: string) => true,
    // A chapter (by its 0-based index in the exam) is free in the preview window.
    canChapter: (index: number) => pro || index < FREE_PREVIEW_CHAPTERS,
    // The Final (boss exams) is a Pro feature.
    canBoss: () => pro,
  };
}
