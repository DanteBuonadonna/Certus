"use client";

import { useEffect, useState } from "react";
import { FREE_PREVIEW_CHAPTERS, isPro } from "./access";
import { useServerPro } from "./AccessContext";

// Gating hook. `pro` is normally server-authoritative (from public.users.is_pro
// via AccessContext) so it can't be forged. While login is disabled (guest
// mode) the server value is always false, so we ALSO honor a client-side unlock
// flag set by a purchase or a creator redeem code (see access.ts). This is the
// intentional MVP softness; when real accounts return, entitlement is enforced
// server-side against the Stripe subscription.
export function useAccess() {
  const serverPro = useServerPro();
  const [clientPro, setClientPro] = useState(false);

  useEffect(() => {
    const sync = () => setClientPro(isPro());
    sync();
    // Update when the flag changes in this tab (redeem/purchase) or another tab.
    window.addEventListener("certus-pro-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("certus-pro-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const pro = serverPro || clientPro;

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
