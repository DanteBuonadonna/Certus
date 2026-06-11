"use client";

import { useEffect, useState } from "react";
import { isPro, FREE_EXAM } from "./access";

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
    canExam: (slug: string) => pro || slug === FREE_EXAM,
    canBoss: () => pro,
  };
}
