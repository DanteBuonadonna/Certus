"use client";

import { useEffect } from "react";

// ============================================================
// LESSON MODE — hide the mobile tab bar while someone is answering.
//
// THE BUG THIS FIXES: the practice quiz's action sheet (the Check / Continue
// button) is `position: fixed; bottom: 0; z-index: 40`. The mobile tab bar is
// `fixed bottom-0 z-40`. Same z-index, both pinned to the bottom — and the tab
// bar renders later in the DOM, so it wins. It sat directly on top of the Check
// button. You could pick an answer and then physically could not advance. The
// core loop was unusable on a phone, which is 60% of traffic.
//
// The fix is NOT to bump z-index and hope. Two fixed bottom bars fighting is a
// design bug, not a stacking bug. A lesson is a focused mode: Duolingo removes
// its nav entirely during one, because tab-switching mid-question isn't a thing
// anyone wants to do. So: while a lesson is live, the tab bar goes away.
//
// Implemented as a body data-attribute rather than context so ANY component —
// practice, mock, boss, anything added later — can opt in with one line and
// without threading props through the layout.
//
// Usage:  useLessonMode(phase === "quiz");
// ============================================================
export function useLessonMode(active: boolean): void {
  useEffect(() => {
    if (!active) return;
    document.body.dataset.lesson = "1";
    return () => {
      // Always clean up — a stuck flag means a user with no navigation.
      delete document.body.dataset.lesson;
    };
  }, [active]);
}
