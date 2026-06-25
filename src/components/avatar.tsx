// ============================================================
// Sterling the Bull — the Certus mascot, fully customizable.
// Renders a head-and-shoulders "bust" of Sterling with equipped
// cosmetics (suit, hat, eyewear, neckwear, accessory, backdrop)
// plus idle bob + blink (.av-idle / .av-eyes from globals.css).
//
// Keeps the historical <Avatar config .../> prop API so every
// existing call site (dashboard, shop, league, profile, level-up)
// keeps working — the human avatar was swapped for the bull.
// ============================================================

import { useId } from "react";
import { AvatarConfig } from "@/lib/profile";

export type AvatarMood = "confident" | "determined" | "neutral" | "friendly";

// ---- Legacy option lists (kept so older callers / NPC generators that
// still import them keep compiling; the bull ignores skin/hair). -------------
export const SKINS = [{ id: "s1", color: "#8d5524" }, { id: "s2", color: "#a96b3c" }, { id: "s3", color: "#c68642" }];
export const HAIRS = [{ id: "h1", name: "Buzz" }, { id: "h2", name: "Side part" }];
export const HAIR_COLORS = [{ id: "c1", color: "#1b1b1b" }, { id: "c2", color: "#3b2a1d" }];
export const FACIAL_HAIR = [{ id: "none", name: "Clean" }, { id: "stubble", name: "Stubble" }];
export const EXPRESSIONS = [
  { id: "confident", name: "Confident" },
  { id: "determined", name: "Determined" },
  { id: "friendly", name: "Friendly" },
  { id: "neutral", name: "Stoic" },
];

export function expressionToMood(id: string): AvatarMood {
  if (id === "determined") return "determined";
  if (id === "friendly") return "friendly";
  if (id === "neutral") return "neutral";
  return "confident";
}

// ---- Cosmetic visual maps (keyed by shop item id) --------------------------
type SuitSkin = { body: string; lapel: string; shirt?: string; pin?: boolean; gold?: boolean; darkTie?: boolean };
const SUITS: Record<string, SuitSkin> = {
  "suit-navy": { body: "#1f2c49", lapel: "#27355c" },
  "suit-charcoal": { body: "#31343c", lapel: "#42454f" },
  "suit-slate": { body: "#46506a", lapel: "#566079" },
  "suit-forest": { body: "#1f3a2e", lapel: "#27493a" },
  "suit-pinstripe": { body: "#22305a", lapel: "#2c3b66", pin: true },
  "suit-royal": { body: "#26307a", lapel: "#2f3b93" },
  "suit-burgundy": { body: "#5c2433", lapel: "#6e2c3f" },
  "suit-tux": { body: "#14161d", lapel: "#0c0e13", darkTie: true },
  "suit-ivory": { body: "#e7e2d3", lapel: "#d6d0bd", darkTie: true },
  "suit-gold-trim": { body: "#161a2e", lapel: "#1f2540", gold: true },
};
function suitOf(id: string): SuitSkin {
  return SUITS[id] ?? SUITS["suit-navy"];
}

const TIES: Record<string, { color: string; bow?: boolean }> = {
  "neck-gold": { color: "#f2b50a" },
  "neck-red": { color: "#e23d3d" },
  "neck-emerald": { color: "#1fb87a" },
  "neck-royal": { color: "#3b5bd6" },
  "neck-silver": { color: "#c7ccd6" },
  "neck-bow": { color: "#16223a", bow: true },
  "neck-bow-gold": { color: "#f2b50a", bow: true },
};
function tieOf(id: string, darkDefault?: boolean) {
  return TIES[id] ?? { color: darkDefault ? "#11141c" : "#f2b50a" };
}

const BACKDROPS: Record<string, [string, string]> = {
  "bg-slate": ["#eef0f6", "#dde1ea"],
  "bg-dawn": ["#ffe9d6", "#ffcdb0"],
  "bg-ticker": ["#0f2a1e", "#16412c"],
  "bg-skyline": ["#2a3961", "#415489"],
  "bg-library": ["#3c2c1e", "#5c422a"],
  "bg-vault": ["#3c3013", "#6e5720"],
  "bg-trading": ["#13243f", "#1f4b5c"],
  "bg-charter": ["#2a2540", "#473f73"],
};
function Backdrop({ id }: { id: string }) {
  const [a, b] = BACKDROPS[id] ?? BACKDROPS["bg-slate"];
  const gid = useId().replace(/[:]/g, "");
  return (
    <>
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="120" height="120" fill={`url(#${gid}-bg)`} />
      <ellipse cx="60" cy="34" rx="70" ry="40" fill="#ffffff" opacity="0.06" />
    </>
  );
}

// ---- Cosmetic SVG snippets (bull-space coords, 130x150) --------------------
function Hat({ id }: { id: string }) {
  switch (id) {
    case "hat-grad":
      return (<g>
        <path d="M40 16 L65 7 L90 16 L65 25 Z" fill="#16223a" />
        <path d="M55 21 q10 5 20 0 v5 q-10 5 -20 0 z" fill="#23314f" />
        <circle cx="65" cy="11" r="2.2" fill="#f2b50a" />
        <path d="M65 11 q15 3 15 13" stroke="#f2b50a" strokeWidth="1.7" fill="none" />
        <circle cx="80" cy="25" r="2.4" fill="#f2b50a" />
      </g>);
    case "hat-top":
      return (<g transform="rotate(-7 65 11)">
        <rect x="52" y="2" width="26" height="14" rx="2" fill="#1a2438" />
        <rect x="43" y="14" width="44" height="5" rx="2.5" fill="#11192b" />
        <rect x="52" y="11" width="26" height="4" fill="#f2b50a" />
      </g>);
    case "hat-fedora":
      return (<g>
        <path d="M40 22 q25 -14 50 0 q-10 -4 -25 -4 q-15 0 -25 4 z" fill="#3a2c1c" />
        <ellipse cx="65" cy="22" rx="27" ry="6" fill="#2c2114" />
        <rect x="49" y="16" width="32" height="5" fill="#1c150c" />
      </g>);
    case "hat-beanie":
      return (<g>
        <path d="M40 26 Q40 8 65 8 Q90 8 90 26 Z" fill="#b9472f" />
        <rect x="38" y="24" width="54" height="6" rx="3" fill="#9c3a25" />
        <circle cx="65" cy="9" r="4" fill="#e0c08a" />
      </g>);
    case "hat-party":
      return (<g>
        <path d="M65 0 L54 26 L76 26 Z" fill="#5b54d6" />
        <path d="M65 0 L60 13 L70 13 Z" fill="#f2b50a" />
        <circle cx="65" cy="0" r="3.4" fill="#ff5a5a" />
      </g>);
    case "hat-visor":
      return (<g>
        <path d="M40 28 q25 -6 50 0 l4 6 q-29 -6 -58 0 z" fill="#1fb87a" />
        <rect x="44" y="24" width="42" height="6" rx="3" fill="#179463" />
      </g>);
    case "hat-halo":
      return (<ellipse cx="65" cy="10" rx="20" ry="6" fill="none" stroke="#ffe07a" strokeWidth="4" opacity="0.95" />);
    case "hat-crown":
      return (<g>
        <path d="M48 27 L52 14 L58 22 L65 11 L72 22 L78 14 L82 27 Z" fill="#f2b50a" stroke="#c8920a" strokeWidth="1" />
        <circle cx="65" cy="14" r="2" fill="#ff5a5a" /><circle cx="53" cy="16" r="1.6" fill="#5b54d6" /><circle cx="77" cy="16" r="1.6" fill="#5b54d6" />
      </g>);
    default:
      return null;
  }
}

function Eyewear({ id }: { id: string }) {
  switch (id) {
    case "acc-specs":
      return (<g fill="none" stroke="#2c3343" strokeWidth="2.4">
        <circle cx="54" cy="42" r="10" /><circle cx="76" cy="42" r="10" />
        <path d="M64 42 h2" /><path d="M44 42 h-9" /><path d="M86 42 h9" />
      </g>);
    case "eye-nerd":
      return (<g fill="none" stroke="#1b1b1b" strokeWidth="3.4">
        <rect x="44" y="33" width="19" height="17" rx="3" /><rect x="67" y="33" width="19" height="17" rx="3" />
        <path d="M63 40 h4" />
      </g>);
    case "acc-shades":
      return (<g>
        <rect x="45" y="35" width="18" height="13" rx="5" fill="#16223a" /><rect x="67" y="35" width="18" height="13" rx="5" fill="#16223a" />
        <rect x="62" y="39" width="6" height="3" fill="#16223a" /><rect x="33" y="39" width="13" height="3" rx="1.5" fill="#16223a" /><rect x="84" y="39" width="13" height="3" rx="1.5" fill="#16223a" />
        <rect x="47" y="37" width="6" height="3" rx="1.5" fill="#46577a" />
      </g>);
    case "eye-monocle":
      return (<g><g fill="none" stroke="#c8920a" strokeWidth="2.6"><circle cx="76" cy="42" r="10" /></g>
        <path d="M76 52 q4 13 -7 18" stroke="#c8920a" strokeWidth="1.5" fill="none" /></g>);
    case "eye-visor":
      return (<g>
        <path d="M40 38 q25 -5 50 0 l0 7 q-25 -3 -50 0 z" fill="#0e1a2e" opacity="0.92" />
        <path d="M44 40 q21 -3 42 0" stroke="#1fb87a" strokeWidth="2" fill="none" />
      </g>);
    default:
      return null;
  }
}

function Accessory({ id }: { id: string }) {
  switch (id) {
    case "acc-pocket":
      return (<path d="M44 110 l10 0 -2 7 -6 0 z" fill="#f2f4fb" />);
    case "acc-rose":
      return (<g><circle cx="49" cy="112" r="4" fill="#e23d3d" /><circle cx="49" cy="112" r="1.6" fill="#a01f1f" /><path d="M49 116 l-2 7" stroke="#1fb87a" strokeWidth="1.6" /></g>);
    case "acc-watch":
      return (<g><path d="M47 108 q-3 9 2 16" stroke="#c8920a" strokeWidth="1.5" fill="none" /><circle cx="48" cy="122" r="2.4" fill="#f2b50a" /></g>);
    case "acc-chain":
      return (<path d="M50 110 q15 8 30 0" fill="none" stroke="#d9b443" strokeWidth="1.8" strokeDasharray="1.5 2" />);
    case "acc-lapel-gold":
      return (<g><circle cx="50" cy="112" r="3.4" fill="#f2b50a" stroke="#c8920a" strokeWidth="0.8" /><path d="M50 109.6 l0.8 2 2 .2 -1.5 1.4 .4 2 -1.7 -1 -1.7 1 .4 -2 -1.5 -1.4 2 -.2z" fill="#fff8dc" /></g>);
    default:
      return null;
  }
}

// ---- Mood-driven brows + mouth ---------------------------------------------
function moodFace(mood: AvatarMood, cheer: boolean) {
  const happy = cheer || mood === "friendly" || mood === "confident";
  const brows = mood === "determined"
    ? (<g><rect x="46" y="32" width="15" height="3.6" rx="2" fill="#2c3343" transform="rotate(10 53 34)" /><rect x="69" y="32" width="15" height="3.6" rx="2" fill="#2c3343" transform="rotate(-10 77 34)" /></g>)
    : (<g><rect x="46" y="31" width="15" height="3.6" rx="2" fill="#2c3343" /><rect x="69" y="31" width="15" height="3.6" rx="2" fill="#2c3343" /></g>);
  const mouth = cheer || mood === "friendly"
    ? (<path d="M53 66 Q65 81 77 66" stroke="#6b7486" strokeWidth="3.4" fill="none" strokeLinecap="round" />)
    : happy
      ? (<path d="M55 67 Q65 78 75 67" stroke="#6b7486" strokeWidth="3.2" fill="none" strokeLinecap="round" />)
      : (<rect x="58" y="68" width="14" height="3.2" rx="1.6" fill="#6b7486" />);
  return { brows, mouth };
}

export function Avatar({
  config,
  size = 96,
  rounded = 16,
  mood,
  animated = true,
  cheer = false,
}: {
  config: AvatarConfig;
  size?: number;
  rounded?: number;
  mood?: AvatarMood;
  animated?: boolean;
  cheer?: boolean;
}) {
  const uid = useId().replace(/[:]/g, "");
  const suit = suitOf(config.suit);
  const tie = tieOf(config.neckwear ?? "neck-gold", suit.darkTie);
  const effMood: AvatarMood = mood ?? expressionToMood(config.expression ?? "confident");
  const bodyClass = cheer ? "av-cheer" : animated ? "av-idle" : undefined;
  const { brows, mouth } = moodFace(effMood, cheer);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ borderRadius: rounded, display: "block", flexShrink: 0 }}
      aria-label="Sterling the bull"
    >
      <clipPath id={`${uid}-clip`}>
        <rect width="120" height="120" rx={Math.max(0, (rounded / size) * 120)} />
      </clipPath>
      <g clipPath={`url(#${uid}-clip)`}>
        <Backdrop id={config.background} />
        <g className={bodyClass} style={{ transformOrigin: "center bottom" }}>
          <g transform="translate(6 2) scale(0.9)">
            <defs>
              <linearGradient id={`${uid}-fur`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5b6579" /><stop offset="1" stopColor="#3a4356" /></linearGradient>
              <linearGradient id={`${uid}-horn`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6efda" /><stop offset="1" stopColor="#d6c6a0" /></linearGradient>
              <radialGradient id={`${uid}-muzz`} cx="50%" cy="38%" r="62%"><stop offset="0" stopColor="#cdd4e0" /><stop offset="1" stopColor="#a9b2c3" /></radialGradient>
            </defs>

            {/* neck */}
            <path d="M54 62 L52 95 L78 95 L76 62 Z" fill="#454e60" />
            <ellipse cx="65" cy="63" rx="13" ry="6" fill="#3f4859" />
            {/* suit */}
            <path d="M10 150 C8 110 32 93 65 93 C98 93 122 110 120 150 Z" fill={suit.body} />
            {suit.pin && (<g opacity="0.45" stroke="#9fb0d6" strokeWidth="0.5">
              <path d="M22 110 v40" /><path d="M32 104 v46" /><path d="M100 110 v40" /><path d="M90 104 v46" />
            </g>)}
            <path d="M50 94 L65 116 L80 94 Z" fill={suit.shirt ?? "#ffffff"} />
            <path d="M65 96 L50 106 L59 140 L65 124 Z" fill={suit.lapel} />
            <path d="M65 96 L80 106 L71 140 L65 124 Z" fill={suit.lapel} />
            {suit.gold && (<g fill="none" stroke="#f2b50a" strokeWidth="1.4"><path d="M65 96 L50 106 L59 138" /><path d="M65 96 L80 106 L71 138" /></g>)}
            <path d="M55 93 L65 103 L62 94 Z" fill={suit.shirt ?? "#fff"} /><path d="M75 93 L65 103 L68 94 Z" fill={suit.shirt ?? "#fff"} />

            {/* neckwear */}
            {tie.bow
              ? (<g><path d="M58 100 l-9 -5 0 12 9 -5 z" fill={tie.color} /><path d="M72 100 l9 -5 0 12 -9 -5 z" fill={tie.color} /><rect x="62" y="97" width="6" height="7" rx="2" fill={tie.color} /></g>)
              : (<g><path d="M65 100 l-5.5 6 5.5 26 5.5 -26 z" fill={tie.color} /><rect x="61" y="96" width="8" height="6" rx="1.5" fill="rgba(0,0,0,.2)" /></g>)}

            {/* horns + ears + head */}
            <path d="M44 32 C33 24 24 24 13 11 C18 25 30 29 42 36 Z" fill={`url(#${uid}-horn)`} stroke="#c9b888" strokeWidth="1" />
            <path d="M86 32 C97 24 106 24 117 11 C112 25 100 29 88 36 Z" fill={`url(#${uid}-horn)`} stroke="#c9b888" strokeWidth="1" />
            <ellipse cx="29" cy="47" rx="11" ry="7" fill="#3a4356" transform="rotate(-22 29 47)" />
            <ellipse cx="101" cy="47" rx="11" ry="7" fill="#3a4356" transform="rotate(22 101 47)" />
            <ellipse cx="65" cy="47" rx="30" ry="27" fill={`url(#${uid}-fur)`} />
            <path d="M54 24 q11 -9 22 0 q-4 7 -11 7 q-7 0 -11 -7z" fill="#2c3343" />

            {/* muzzle */}
            <ellipse cx="65" cy="58" rx="20.5" ry="15.5" fill={`url(#${uid}-muzz)`} />
            <ellipse cx="57" cy="57" rx="3.1" ry="4.1" fill="#6b7486" /><ellipse cx="73" cy="57" rx="3.1" ry="4.1" fill="#6b7486" />
            <path d="M60 65 a6 5 0 0 0 10 0" fill="none" stroke="#f2b50a" strokeWidth="2.6" />

            {/* eyes */}
            <g className={animated ? "av-eyes" : undefined} style={{ transformOrigin: "center" }}>
              <ellipse cx="54" cy="42" rx="8" ry="9.5" fill="#fff" /><circle cx="55.5" cy="43" r="4.4" fill="#23232b" /><circle cx="57" cy="41" r="1.5" fill="#fff" />
              <ellipse cx="76" cy="42" rx="8" ry="9.5" fill="#fff" /><circle cx="77.5" cy="43" r="4.4" fill="#23232b" /><circle cx="79" cy="41" r="1.5" fill="#fff" />
            </g>
            {brows}
            {mouth}

            {/* cosmetics on top */}
            <Eyewear id={config.eyewear ?? "eye-none"} />
            <Accessory id={config.accessory ?? "acc-none"} />
            <Hat id={config.hat ?? "hat-none"} />
          </g>
        </g>
      </g>
    </svg>
  );
}
