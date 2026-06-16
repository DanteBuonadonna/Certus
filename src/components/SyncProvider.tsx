"use client";

import { useEffect } from "react";
import {
  gatherLocal,
  applyBlob,
  hashBlob,
  isEmpty,
  loadMeta,
  saveMeta,
  pullCloud,
  pushCloud,
} from "@/lib/cloudSync";

// Mirrors browser-local progress to the signed-in account's cloud blob, and
// hydrates a fresh device from the cloud — without ever clobbering a device
// that has its own unsynced changes. See lib/cloudSync.ts for the rationale.
export default function SyncProvider({ userId }: { userId: string }) {
  useEffect(() => {
    if (!userId) return;
    let interval: ReturnType<typeof setInterval> | null = null;
    let cancelled = false;

    const pushIfChanged = async () => {
      const cur = gatherLocal();
      if (isEmpty(cur)) return;
      const h = hashBlob(cur);
      const m = loadMeta();
      if (h !== m.lastHash) {
        await pushCloud(userId, cur);
        saveMeta({ lastHash: h, lastSyncAt: Date.now() });
      }
    };

    const onHide = () => {
      if (document.visibilityState === "hidden") void pushIfChanged();
    };

    (async () => {
      const local = gatherLocal();
      const localHash = hashBlob(local);
      const meta = loadMeta();
      const cloud = await pullCloud(userId);
      if (cancelled) return;

      const localEmpty = isEmpty(local);
      const changedSinceSync = localHash !== meta.lastHash;
      const cloudAdvanced = !!cloud && cloud.updatedAt > meta.lastSyncAt;

      // Adopt the cloud only when it can't lose local work.
      const adopt = !!cloud && (localEmpty || (cloudAdvanced && !changedSinceSync));

      if (adopt && cloud) {
        applyBlob(cloud.data);
        saveMeta({ lastHash: hashBlob(cloud.data), lastSyncAt: Date.now() });
        const flag = `certus_synced_${userId}`;
        if (!sessionStorage.getItem(flag)) {
          sessionStorage.setItem(flag, "1");
          window.location.reload(); // let components re-read hydrated state
          return;
        }
      } else {
        if (!localEmpty) await pushCloud(userId, local);
        saveMeta({ lastHash: localHash, lastSyncAt: Date.now() });
      }

      interval = setInterval(pushIfChanged, 20000);
      window.addEventListener("visibilitychange", onHide);
      window.addEventListener("pagehide", pushIfChanged);
    })();

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
      window.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", pushIfChanged);
    };
  }, [userId]);

  return null;
}
