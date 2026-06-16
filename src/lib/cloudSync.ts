"use client";

// ============================================================
// Certus — cross-device progress sync
//
// Strategy (data-loss-safe): a user's browser-local progress (all the
// `certus_*` keys — XP, streaks, profile, economy, flashcards, reading,
// boss trophies) is mirrored to a per-account JSONB blob in Supabase
// (public.user_state). On load we ADOPT the cloud copy only when it's safe:
//   - this device has no local progress (a fresh device/browser), OR
//   - the cloud advanced on another device AND this device hasn't changed
//     since its last sync (so adopting can't lose anything here).
// Otherwise this (active) device wins and pushes its state up. Concurrent
// edits on two active devices resolve last-write-wins at the cloud.
// ============================================================

import { createClient } from "@/lib/supabase/client";

const META_KEY = "certus_sync_meta";
// Device-local keys that must never sync.
const EXCLUDE = new Set(["certus_owner", "certus_pro", "certus_sync_meta", "certus_rotatehint"]);

export type Blob = Record<string, string>;
export type Meta = { lastHash: string; lastSyncAt: number };

export function gatherLocal(): Blob {
  const out: Blob = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith("certus_") || EXCLUDE.has(k)) continue;
      const v = localStorage.getItem(k);
      if (v != null) out[k] = v;
    }
  } catch {}
  return out;
}

export function applyBlob(blob: Blob) {
  try {
    // Clear current synced keys first so removals propagate, then write cloud's.
    const existing = gatherLocal();
    for (const k of Object.keys(existing)) localStorage.removeItem(k);
    for (const [k, v] of Object.entries(blob)) localStorage.setItem(k, v);
  } catch {}
}

export function isEmpty(blob: Blob): boolean {
  return Object.keys(blob).length === 0;
}

export function hashBlob(blob: Blob): string {
  const keys = Object.keys(blob).sort();
  const s = keys.map((k) => k + "=" + blob[k]).join("");
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) | 0;
  return String(h >>> 0);
}

export function loadMeta(): Meta {
  try {
    const raw = localStorage.getItem(META_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { lastHash: "", lastSyncAt: 0 };
}

export function saveMeta(m: Meta) {
  try {
    localStorage.setItem(META_KEY, JSON.stringify(m));
  } catch {}
}

export async function pullCloud(userId: string): Promise<{ data: Blob; updatedAt: number } | null> {
  try {
    const sb = createClient();
    const { data } = await sb
      .from("user_state")
      .select("data, updated_at")
      .eq("user_id", userId)
      .single();
    if (data && data.data) {
      return { data: data.data as Blob, updatedAt: new Date(data.updated_at).getTime() };
    }
  } catch {}
  return null;
}

export async function pushCloud(userId: string, blob: Blob): Promise<void> {
  try {
    const sb = createClient();
    await sb.from("user_state").upsert(
      { user_id: userId, data: blob, updated_at: new Date().toISOString() },
      { onConflict: "user_id" }
    );
  } catch {}
}
