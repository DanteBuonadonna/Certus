"use client";

import { FREE_PREVIEW_CHAPTERS } from "./access";
import { useServerPro } from "./AccessContext";

// Gating hook. `pro` is server-authoritative (from public.users.is_pro via
// AccessContext) — consistent on server and client, so no hydration mismatch
// and nothing the browser can forge.
export function useAccess() {
  const pro = useServerPro();

  return {
    pro,
    ready: true,
    freePreview: FREE_PREVIEW_CHAPTERS,
    // Every exam is previewable by everyone; depth is what's gated.
    canExam: (_slug: string) => true,
    // A chapter (by its 0-based index) is free inside the preview window.
    canChapter: (index: number) => pro || index < FREE_PREVIEW_CHAPTERS,
    // The Final (boss exams) is a Pro feature for unlimited retakes.
    canBoss: () => pro,
  };
}
