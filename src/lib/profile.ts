// ============================================================
// Player profile — identity, archetype, avatar config, title.
// Client-side (localStorage), same pattern as gameStore.
// ============================================================

const KEY = "certus_profile_v1";

export interface AvatarConfig {
  skin: string;       // skin tone id
  hair: string;       // hair style id
  hairColor: string;  // hair color id
  facialHair: string; // facial-hair style id ("none" = clean shaven)
  expression: string; // expression id (maps to avatar mood)
  suit: string;       // shop item id (suit slot)
  accessory: string | null; // shop item id (accessory slot)
  background: string; // shop item id (background slot)
}

export interface Profile {
  name: string;
  archetype: string;  // archetype id
  avatar: AvatarConfig;
  title: string | null; // equipped title (shop item id)
  createdAt: string;
}

export const DEFAULT_AVATAR: AvatarConfig = {
  skin: "s3",
  hair: "h2",
  hairColor: "c2",
  facialHair: "none",
  expression: "confident",
  suit: "suit-navy",
  accessory: null,
  background: "bg-slate",
};

// ---- Study archetypes (flavor + recommended cadence) ----------------------
export interface Archetype {
  id: string;
  name: string;
  desc: string;
  habit: string;
}

export const ARCHETYPES: Archetype[] = [
  {
    id: "sprinter",
    name: "The Sprinter",
    desc: "Short, intense bursts. You close positions fast and move on.",
    habit: "Best with 2–3 sessions of 25 minutes a day.",
  },
  {
    id: "marathoner",
    name: "The Marathoner",
    desc: "Long, steady blocks. You compound quietly and never break style.",
    habit: "Best with one deep 60–90 minute session a day.",
  },
  {
    id: "dawn-patrol",
    name: "The Dawn Patrol",
    desc: "You take the open. Markets and chapters are quietest before 8am.",
    habit: "Study first thing — earn the Early Bird honor fast.",
  },
  {
    id: "night-desk",
    name: "The Night Desk",
    desc: "After close is your edge. The late shift suits you.",
    habit: "Guard your evening block like a position limit.",
  },
  {
    id: "quant",
    name: "The Quant",
    desc: "Drills over prose. You learn by reps, formulas, and flashcards.",
    habit: "Lead with practice questions; read to patch gaps.",
  },
  {
    id: "scholar",
    name: "The Scholar",
    desc: "Theory first. You want the full picture before you touch a question.",
    habit: "Read the chapter, then drill it the same day.",
  },
];

export function getArchetype(id: string): Archetype {
  return ARCHETYPES.find((a) => a.id === id) ?? ARCHETYPES[0];
}

// ---- Persistence -----------------------------------------------------------
export function loadProfile(): Profile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return { ...p, avatar: { ...DEFAULT_AVATAR, ...p.avatar } };
    }
  } catch {}
  return null;
}

export function saveProfile(p: Profile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {}
}
