"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Profile,
  AvatarConfig,
  DEFAULT_AVATAR,
  ARCHETYPES,
  getArchetype,
  loadProfile,
  saveProfile,
} from "@/lib/profile";
import { Avatar, EXPRESSIONS } from "@/components/avatar";
import {
  Wallet,
  loadWallet,
  compBalance,
  itemsBySlot,
  ownsItem,
  getItem,
  formatComp,
} from "@/lib/economy";
import { GameState, EMPTY_STATE, levelProgress, rankTitle, totalMinutes, BADGES } from "@/lib/studyPlan";
import { loadState } from "@/lib/gameStore";
import { loadTrophies, getBoss, BossTrophies } from "@/lib/bossExam";
import { EXAMS } from "@/lib/exams";
import { examsWithContent } from "@/content";
import { BadgeGlyph, LockIcon, TrophyIcon, BriefcaseIcon } from "@/components/icons";

export default function ProfileClient() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [wallet, setWallet] = useState<Wallet>({ bonus: 0, spent: 0, owned: [] });
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setProfile(loadProfile());
    setState(loadState());
    setWallet(loadWallet());
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="px-4 py-6 md:px-8 md:py-8 max-w-3xl mx-auto">
        <div className="skeleton" style={{ height: 280, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 280 }} />
      </div>
    );
  }

  if (!profile || editing) {
    return (
      <Wizard
        existing={profile}
        wallet={wallet}
        onDone={(p) => {
          saveProfile(p);
          setProfile(p);
          setEditing(false);
        }}
        onCancel={profile ? () => setEditing(false) : undefined}
      />
    );
  }

  return <Locker profile={profile} state={state} wallet={wallet} onEdit={() => setEditing(true)} onUpdate={(p) => { saveProfile(p); setProfile({ ...p }); }} />;
}

// ============================================================
// The Stage — big spotlit avatar presentation
// ============================================================

function Stage({
  avatar,
  size = 200,
  streakAlive,
}: {
  avatar: AvatarConfig;
  size?: number;
  streakAlive?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 18,
        background: "radial-gradient(ellipse at 50% 30%, rgba(201,162,39,0.16), transparent 65%), linear-gradient(180deg, var(--bg) 0%, var(--bg-card) 100%)",
        border: "2px solid var(--border-strong)",
        padding: "26px 0 0",
        textAlign: "center",
      }}
    >
      <div className="rays" style={{ opacity: 0.5 }} />
      <div className="pop-in" style={{ position: "relative", display: "inline-block" }}>
        <Avatar config={avatar} size={size} rounded={size * 0.12} mood={streakAlive === false ? "determined" : "confident"} />
      </div>
      {/* podium */}
      <div
        style={{
          position: "relative",
          height: 16,
          margin: "0 auto",
          width: size * 0.86,
          background: "linear-gradient(180deg, var(--gold-bright), var(--gold-deep))",
          borderRadius: "5px 5px 10px 10px",
          boxShadow: "var(--glow-gold)",
        }}
      />
      <div style={{ height: 14 }} />
    </div>
  );
}

// ============================================================
// New Hire Onboarding — character creation / appearance editor
// ============================================================

function Wizard({
  existing,
  wallet,
  onDone,
  onCancel,
}: {
  existing: Profile | null;
  wallet: Wallet;
  onDone: (p: Profile) => void;
  onCancel?: () => void;
}) {
  const [name, setName] = useState(existing?.name ?? "");
  const [archetype, setArchetype] = useState(existing?.archetype ?? ARCHETYPES[0].id);
  const [avatar, setAvatar] = useState<AvatarConfig>(existing?.avatar ?? DEFAULT_AVATAR);

  const valid = name.trim().length >= 2;

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-3xl mx-auto">
      {!existing && <div className="pill-gold mb-3 pop-in">NEW HIRE ONBOARDING</div>}
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>
        {existing ? "Appearance & identity" : "Welcome to the firm"}
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        {existing
          ? "Adjust your character, archetype, or display name."
          : "Build your character. Everything here is cosmetic — your readiness is earned, not bought."}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Live preview */}
        <div className="lg:col-span-2">
          <div style={{ position: "sticky", top: 24 }}>
            <Stage avatar={avatar} size={190} />
            <div className="text-center mt-3">
              <div className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
                {name.trim() || "Your name"}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                {getArchetype(archetype).name}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-3 space-y-5">
          <div className="card-game p-5">
            <SectionLabel>Display name</SectionLabel>
            <input
              className="input-field"
              placeholder="e.g. D. Buonadonna"
              maxLength={24}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="card-game p-5">
            <SectionLabel>Study archetype</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ARCHETYPES.map((a) => {
                const active = a.id === archetype;
                return (
                  <button
                    key={a.id}
                    onClick={() => setArchetype(a.id)}
                    className={`text-left p-3 transition-all ${active ? "pop-in" : ""}`}
                    style={{
                      borderRadius: 14,
                      background: active ? "var(--primary-light)" : "var(--bg)",
                      border: active ? "2px solid var(--primary)" : "2px solid var(--border)",
                      boxShadow: active ? "0 3px 0 var(--primary-deep)" : "0 3px 0 var(--border)",
                    }}
                  >
                    <div className="text-sm font-bold" style={{ color: active ? "var(--primary)" : "var(--text-primary)" }}>
                      {a.name}
                    </div>
                    <div className="text-[11px] mt-0.5" style={{ color: "var(--text-secondary)", lineHeight: 1.4 }}>
                      {a.desc}
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] mt-2.5" style={{ color: "var(--text-muted)" }}>
              {getArchetype(archetype).habit}
            </p>
          </div>

          <AvatarEditor avatar={avatar} wallet={wallet} onChange={setAvatar} />

          <div className="flex items-center gap-3">
            <button className="btn-game btn-game-gold flex-1" disabled={!valid} onClick={() => onDone({
              name: name.trim(),
              archetype,
              avatar,
              title: existing?.title ?? null,
              createdAt: existing?.createdAt ?? new Date().toISOString().slice(0, 10),
            })}>
              {existing ? "SAVE CHANGES" : "SIGN YOUR OFFER →"}
            </button>
            {onCancel && (
              <button className="btn-game btn-game-ghost" onClick={onCancel}>CANCEL</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarEditor({
  avatar,
  wallet,
  onChange,
}: {
  avatar: AvatarConfig;
  wallet: Wallet;
  onChange: (a: AvatarConfig) => void;
}) {
  const suits = itemsBySlot("suit");
  const hats = itemsBySlot("hat");
  const eyewear = itemsBySlot("eyewear");
  const neckwear = itemsBySlot("neckwear");
  const accessories = itemsBySlot("accessory");
  const backgrounds = itemsBySlot("background");

  return (
    <div className="card-game p-5 space-y-4">
      <div>
        <SectionLabel>Sterling&apos;s mood</SectionLabel>
        <div className="flex items-center gap-2 flex-wrap">
          {EXPRESSIONS.map((e) => (
            <Chip key={e.id} label={e.name} active={(avatar.expression ?? "confident") === e.id} onClick={() => onChange({ ...avatar, expression: e.id })} />
          ))}
        </div>
      </div>

      <ItemRow label="Suit" items={suits} selected={avatar.suit} wallet={wallet} onSelect={(id) => id && onChange({ ...avatar, suit: id })} />
      <ItemRow label="Hat" items={hats} selected={avatar.hat === "hat-none" ? null : avatar.hat} wallet={wallet} allowNone onSelect={(id) => onChange({ ...avatar, hat: id ?? "hat-none" })} />
      <ItemRow label="Eyewear" items={eyewear} selected={avatar.eyewear === "eye-none" ? null : avatar.eyewear} wallet={wallet} allowNone onSelect={(id) => onChange({ ...avatar, eyewear: id ?? "eye-none" })} />
      <ItemRow label="Tie" items={neckwear} selected={avatar.neckwear === "neck-gold" ? null : avatar.neckwear} wallet={wallet} allowNone onSelect={(id) => onChange({ ...avatar, neckwear: id ?? "neck-gold" })} />
      <ItemRow label="Flair" items={accessories} selected={avatar.accessory} wallet={wallet} allowNone onSelect={(id) => onChange({ ...avatar, accessory: id })} />
      <ItemRow label="Backdrop" items={backgrounds} selected={avatar.background} wallet={wallet} onSelect={(id) => id && onChange({ ...avatar, background: id })} />
      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
        Locked gear is sold at the <Link href="/shop" className="hover:underline font-semibold" style={{ color: "var(--primary)" }}>Perks Desk</Link> for Comp you earn by studying.
      </p>
    </div>
  );
}

function ItemRow({
  label,
  items,
  selected,
  wallet,
  allowNone,
  onSelect,
}: {
  label: string;
  items: ReturnType<typeof itemsBySlot>;
  selected: string | null;
  wallet: Wallet;
  allowNone?: boolean;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <div className="flex items-center gap-2 flex-wrap">
        {allowNone && <Chip label="None" active={selected === null} onClick={() => onSelect(null)} />}
        {items.map((item) => {
          const owned = ownsItem(item.id, wallet);
          const active = selected === item.id;
          return (
            <button
              key={item.id}
              disabled={!owned}
              onClick={() => onSelect(item.id)}
              title={owned ? item.desc : `${item.name} — ${formatComp(item.price)} at the Perks Desk`}
              className="text-xs px-3 py-1.5 flex items-center gap-1.5 transition-all"
              style={{
                borderRadius: 12,
                fontWeight: 600,
                background: active ? "var(--primary-light)" : "var(--bg)",
                border: active ? "2px solid var(--primary)" : "2px solid var(--border)",
                color: !owned ? "var(--text-muted)" : active ? "var(--primary)" : "var(--text-secondary)",
                opacity: owned ? 1 : 0.55,
                cursor: owned ? "pointer" : "not-allowed",
              }}
            >
              {!owned && <LockIcon size={11} />}
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// The Corner Office — locker view
// ============================================================

function Locker({
  profile,
  state,
  wallet,
  onEdit,
  onUpdate,
}: {
  profile: Profile;
  state: GameState;
  wallet: Wallet;
  onEdit: () => void;
  onUpdate: (p: Profile) => void;
}) {
  const lp = levelProgress(state.xp);
  const rank = rankTitle(lp.level);
  const arch = getArchetype(profile.archetype);
  const trophies: BossTrophies = loadTrophies();
  const trophyCount = Object.keys(trophies).length;
  const equippedTitle = profile.title ? getItem(profile.title)?.name : null;
  const ownedTitles = itemsBySlot("title").filter((t) => ownsItem(t.id, wallet));

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-3xl mx-auto">
      {/* Hero: stage + identity */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-6 rise-in">
        <div className="lg:col-span-2">
          <Stage avatar={profile.avatar} size={196} streakAlive={state.currentStreak > 0} />
        </div>
        <div className="lg:col-span-3 card-game p-6 flex flex-col justify-center" style={{ position: "relative", overflow: "hidden" }}>
          <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Employee record · joined {profile.createdAt}
          </div>
          <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>{profile.name}</h1>
          {equippedTitle && <div className="pill-gold mt-2" style={{ alignSelf: "flex-start" }}>&ldquo;{equippedTitle}&rdquo;</div>}
          <p className="text-sm mt-2.5" style={{ color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--gold)", fontWeight: 700 }}>{rank}</span> · Level {lp.level} · {arch.name}
          </p>

          {/* XP bar to next level */}
          <div className="mt-3 mb-1">
            <div className="progress-game">
              <div style={{ width: `${lp.pct}%`, background: "linear-gradient(90deg, var(--primary), var(--gold-bright))" }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>{lp.xpIntoLevel} / {lp.xpForNext} XP</span>
              <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>L{lp.level + 1}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 mt-3">
            <button className="btn-game btn-game-ghost text-xs px-4" style={{ padding: "0.55rem 1rem" }} onClick={onEdit}>
              EDIT CHARACTER
            </button>
            <Link href="/shop" className="btn-game btn-game-gold text-xs" style={{ padding: "0.55rem 1rem" }}>
              {formatComp(compBalance(state, wallet))} · PERKS DESK
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 stagger">
        <Stat label="Hours studied" value={`${Math.round(totalMinutes(state) / 60)}`} />
        <Stat label="Longest streak" value={`${state.longestStreak}d`} />
        <Stat label="Honors earned" value={`${state.unlockedBadges.length}/${BADGES.length}`} />
        <Stat label="Finals cleared" value={`${trophyCount}`} />
      </div>

      {/* Title selection */}
      {ownedTitles.length > 0 && (
        <>
          <h2 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>Working title</h2>
          <div className="card-game p-4 mb-6 flex items-center gap-2 flex-wrap">
            <TitleChip label="None" active={profile.title === null} onClick={() => onUpdate({ ...profile, title: null })} />
            {ownedTitles.map((t) => (
              <TitleChip
                key={t.id}
                label={t.name}
                title={t.desc}
                gold
                active={profile.title === t.id}
                onClick={() => onUpdate({ ...profile, title: t.id })}
              />
            ))}
          </div>
        </>
      )}

      {/* Trophy case */}
      <h2 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
        <span style={{ color: "var(--gold)" }}><TrophyIcon size={15} /></span>
        Trophy case
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6 stagger">
        {EXAMS.filter((e) => examsWithContent().includes(e.slug)).map((e) => {
          const trophy = trophies[e.slug];
          const boss = getBoss(e.slug);
          return (
            <div
              key={e.slug}
              className={trophy ? "card-game p-3 text-center legacy-sheen" : "card-game p-3 text-center"}
              title={trophy ? `${boss.name} — cleared at ${trophy.bestPct}%` : `${boss.name} — not yet cleared`}
              style={{
                opacity: trophy ? 1 : 0.45,
                borderColor: trophy ? "var(--gold-border)" : undefined,
                boxShadow: trophy ? "var(--glow-gold)" : undefined,
              }}
            >
              <div className="flex justify-center mb-1.5" style={{ color: trophy ? "var(--gold)" : "var(--text-muted)" }}>
                <TrophyIcon size={24} />
              </div>
              <div className="text-[11px] font-bold" style={{ color: "var(--text-primary)" }}>{e.name}</div>
              <div className="text-[10px] font-mono" style={{ color: trophy ? "var(--gold)" : "var(--text-muted)" }}>
                {trophy ? `${trophy.bestPct}%` : "—"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Honors wall */}
      <h2 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        Honors wall · {state.unlockedBadges.length}/{BADGES.length}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 stagger">
        {BADGES.map((b) => {
          const unlocked = state.unlockedBadges.includes(b.id);
          return (
            <div key={b.id} className="card-game p-3 text-center" style={{ opacity: unlocked ? 1 : 0.45 }} title={b.desc}>
              <div
                className="mx-auto mb-2 flex items-center justify-center rounded-full"
                style={{
                  width: 38,
                  height: 38,
                  background: unlocked ? "var(--gold-bg)" : "var(--bg)",
                  border: unlocked ? "2px solid var(--gold-border)" : "2px solid var(--border)",
                  color: unlocked ? "var(--gold)" : "var(--text-muted)",
                }}
              >
                <BadgeGlyph id={b.id} size={19} />
              </div>
              <p className="text-[11px] font-bold" style={{ color: "var(--text-primary)" }}>{b.name}</p>
            </div>
          );
        })}
      </div>

      <div className="card-game p-4 flex items-center justify-between" style={{ background: "var(--primary-light)" }}>
        <div className="flex items-center gap-2.5">
          <span style={{ color: "var(--primary)" }}><BriefcaseIcon size={18} /></span>
          <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            Climb the ladder — quests pay Comp at every rank.
          </div>
        </div>
        <Link href="/career" className="btn-game btn-game-primary text-xs" style={{ padding: "0.55rem 1.1rem" }}>THE LADDER →</Link>
      </div>
    </div>
  );
}

// ---- bits ------------------------------------------------------------------
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
      {children}
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs px-3 py-1.5 transition-all"
      style={{
        borderRadius: 12,
        fontWeight: 600,
        background: active ? "var(--primary-light)" : "var(--bg)",
        border: active ? "2px solid var(--primary)" : "2px solid var(--border)",
        boxShadow: active ? "0 2.5px 0 var(--primary-deep)" : "0 2.5px 0 var(--border)",
        color: active ? "var(--primary)" : "var(--text-secondary)",
      }}
    >
      {label}
    </button>
  );
}

function TitleChip({
  label,
  title,
  active,
  gold,
  onClick,
}: {
  label: string;
  title?: string;
  active: boolean;
  gold?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="text-xs px-3 py-1.5 transition-all"
      style={{
        borderRadius: 12,
        fontWeight: active ? 800 : 600,
        background: active ? (gold ? "var(--gold-bg)" : "var(--primary-light)") : "var(--bg)",
        border: active ? `2px solid ${gold ? "var(--gold)" : "var(--primary)"}` : "2px solid var(--border)",
        boxShadow: active ? `0 2.5px 0 ${gold ? "var(--gold-deep)" : "var(--primary-deep)"}` : "0 2.5px 0 var(--border)",
        color: active ? (gold ? "var(--gold)" : "var(--primary)") : "var(--text-secondary)",
      }}
    >
      {label}
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-game p-3.5 text-center">
      <div className="font-display text-xl" style={{ color: "var(--text-primary)" }}>{value}</div>
      <div className="text-[10px] mt-0.5 font-semibold" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}
