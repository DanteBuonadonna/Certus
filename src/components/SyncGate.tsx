"use client";

import { useEffect, useRef, useState } from "react";
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

// Reliable cross-device sync. Unlike a passive sibling component, this GATES
// the app: on first load of a session it pulls the account's cloud progress
// and writes it to localStorage BEFORE rendering children, so the screens
// never read stale/empty state and then clobber the cloud. After hydration it
// pushes local changes every few seconds and on tab hide.
export default function SyncGate({ userId, children }: { userId: string; children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!userId) {
      setReady(true);
      return;
    }
    const hydratedKey = `certus_hydrated_${userId}`;
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

    const startBackground = () => {
      const interval = setInterval(pushIfChanged, 8000);
      const onHide = () => {
        if (document.visibilityState === "hidden") void pushIfChanged();
      };
      window.addEventListener("visibilitychange", onHide);
      window.addEventListener("pagehide", pushIfChanged);
      cleanupRef.current = () => {
        clearInterval(interval);
        window.removeEventListener("visibilitychange", onHide);
        window.removeEventListener("pagehide", pushIfChanged);
      };
    };

    (async () => {
      let alreadyHydrated = false;
      try {
        alreadyHydrated = sessionStorage.getItem(hydratedKey) === "1";
      } catch {}

      if (alreadyHydrated) {
        setReady(true);
        startBackground();
        return;
      }

      const local = gatherLocal();
      const localHash = hashBlob(local);
      const meta = loadMeta();
      const cloud = await pullCloud(userId);
      if (cancelled) return;

      // Adopt the cloud when it's safe: this device is fresh (empty), or the
      // cloud advanced elsewhere and this device hasn't changed since its last
      // sync. Otherwise this device is the source of truth and pushes up.
      const adopt =
        !!cloud && (isEmpty(local) || (cloud.updatedAt > meta.lastSyncAt && localHash === meta.lastHash));

      if (adopt && cloud) {
        applyBlob(cloud.data);
        saveMeta({ lastHash: hashBlob(cloud.data), lastSyncAt: Date.now() });
      } else {
        if (!isEmpty(local)) await pushCloud(userId, local);
        saveMeta({ lastHash: localHash, lastSyncAt: Date.now() });
      }

      try {
        sessionStorage.setItem(hydratedKey, "1");
      } catch {}
      if (cancelled) return;
      setReady(true);
      startBackground();
    })();

    return () => {
      cancelled = true;
      cleanupRef.current?.();
    };
  }, [userId]);

  if (!ready) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span
          className="spinner"
          style={{ width: 26, height: 26, borderColor: "rgba(83,74,183,0.25)", borderTopColor: "var(--primary)" }}
        />
      </div>
    );
  }

  return <>{children}</>;
}
