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
import { Avatar, SKINS, HAIRS, HAIR_COLORS } from "@/components/avatar";
import {
  Wallet,
  loadWallet,
  compBalance,
  itemsBySlot,
  ownsItem,
  getItem,
  formatComp,
  TIER_META,
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
      <div className="px-8 py-8 max-w-3xl mx-auto">
        <div className="skeleton" style={{ height: 180, marginBottom: 16 }} />
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
    <div className="px-8 py-8 max-w-3xl mx-auto">
      {!existing && (
        <div className="pill-gold mb-3">NEW HIRE ONBOARDING</div>
      )}
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>
        {existing ? "Appearance & identity" : "Welcome to the firm"}
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        {existing
          ? "Adjust your portrait, archetype, or display name."
          : "Build your professional identity. Everything here is cosmetic — your readiness is earned, not bought."}
      </p>

      <div className="grid grid-cols-5 gap-5">
        {/* Live preview */}
        <div className="col-span-2">
          <div className="card p-5 text-center" style={{ position: "sticky", top: 24 }}>
            <div className="flex justify-center mb-3 scale-in">
              <Avatar config={avatar} size={168} rounded={20} />
            </div>
            <div className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
              {name.trim() || "Your name"}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              {getArchetype(archetype).name}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="col-span-3 space-y-5">
          <div className="card p-5">
            <SectionLabel>Display name</SectionLabel>
            <input
              className="input-field"
              placeholder="e.g. D. Buonadonna"
              maxLength={24}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="card p-5">
            <SectionLabel>Study archetype</SectionLabel>
            <div className="grid grid-cols-2 gap-2">
              {ARCHETYPES.map((a) => {
                const active = a.id === archetype;
                return (
                  <button
                    key={a.id}
                    onClick={() => setArchetype(a.id)}
                    className="text-left p-3 rounded-lg transition-all"
                    style={{
                      background: active ? "var(--primary-light)" : "var(--bg)",
                      border: active ? "1px solid var(--primary)" : "1px solid var(--border)",
                    }}
                  >
                    <div className="text-sm font-semibold" style={{ color: active ? "var(--primary)" : "var(--text-primary)" }}>
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
            <button className="btn-primary flex-1" disabled={!valid} onClick={() => onDone({
              name: name.trim(),
              archetype,
              avatar,
              title: existing?.title ?? null,
              createdAt: existing?.createdAt ?? new Date().toISOString().slice(0, 10),
            })}>
              {existing ? "Save changes" : "Sign your offer →"}
            </button>
            {onCancel && (
              <button className="btn-secondary" onClick={onCancel}>Cancel</button>
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
  const accessories = itemsBySlot("accessory");
  const backgrounds = itemsBySlot("background");

  return (
    <div className="card p-5 space-y-4">
      <div>
        <SectionLabel>Skin tone</SectionLabel>
        <div className="flex items-center gap-2">
          {SKINS.map((s) => (
            <Swatch key={s.id} color={s.color} active={avatar.skin === s.id} onClick={() => onChange({ ...avatar, skin: s.id })} />
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Hair</SectionLabel>
        <div className="flex items-center gap-2 flex-wrap mb-2">
          {HAIRS.map((h) => (
            <Chip key={h.id} label={h.name} active={avatar.hair === h.id} onClick={() => onChange({ ...avatar, hair: h.id })} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {HAIR_COLORS.map((c) => (
            <Swatch key={c.id} color={c.color} active={avatar.hairColor === c.id} onClick={() => onChange({ ...avatar, hairColor: c.id })} />
          ))}
        </div>
      </div>

      <ItemRow
        label="Suit"
        items={suits}
        selected={avatar.suit}
        wallet={wallet}
        onSelect={(id) => id && onChange({ ...avatar, suit: id })}
      />
      <ItemRow
        label="Accessory"
        items={accessories}
        selected={avatar.accessory}
        wallet={wallet}
        allowNone
        onSelect={(id) => onChange({ ...avatar, accessory: id })}
      />
      <ItemRow
        label="Backdrop"
        items={backgrounds}
        selected={avatar.background}
        wallet={wallet}
        onSelect={(id) => id && onChange({ ...avatar, background: id })}
      />
      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
        Locked items are sold at the <Link href="/shop" className="hover:underline" style={{ color: "var(--primary)" }}>Perks Desk</Link> for Comp you earn by studying.
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
        {allowNone && (
          <Chip label="None" active={selected === null} onClick={() => onSelect(null)} />
        )}
        {items.map((item) => {
          const owned = ownsItem(item.id, wallet);
          const active = selected === item.id;
          return (
            <button
              key={item.id}
              disabled={!owned}
              onClick={() => onSelect(item.id)}
              title={owned ? item.desc : `${item.name} — ${formatComp(item.price)} at the Perks Desk`}
              className="text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all"
              style={{
                background: active ? "var(--primary-light)" : "var(--bg)",
                border: active ? "1px solid var(--primary)" : "1px solid var(--border)",
                color: !owned ? "var(--text-muted)" : active ? "var(--primary)" : "var(--text-secondary)",
                opacity: owned ? 1 : 0.6,
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
    <div className="px-8 py-8 max-w-3xl mx-auto">
      {/* Identity card */}
      <div className="card mb-6 rise-in" style={{ overflow: "hidden" }}>
        <div className="px-6 py-3 flex items-center justify-between" style={{ background: "var(--bg)", borderBottom: "0.5px solid var(--border)" }}>
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Employee record · joined {profile.createdAt}
          </span>
          <button onClick={onEdit} className="text-xs hover:underline" style={{ color: "var(--primary)" }}>
            Edit appearance
          </button>
        </div>
        <div className="p-6 flex items-center gap-6">
          <Avatar config={profile.avatar} size={132} rounded={18} />
          <div className="flex-1">
            <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>{profile.name}</h1>
            {equippedTitle && (
              <div className="pill-gold mt-1.5">&ldquo;{equippedTitle}&rdquo;</div>
            )}
            <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>{rank}</span> · Level {lp.level} · {arch.name}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{arch.habit}</p>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
              Comp balance
            </div>
            <div className="font-display text-2xl" style={{ color: "var(--gold)" }}>
              {formatComp(compBalance(state, wallet))}
            </div>
            <Link href="/shop" className="text-xs hover:underline" style={{ color: "var(--primary)" }}>
              Perks Desk →
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-4 gap-3 mb-6 stagger">
        <Stat label="Hours studied" value={`${Math.round(totalMinutes(state) / 60)}`} />
        <Stat label="Longest streak" value={`${state.longestStreak}d`} />
        <Stat label="Honors earned" value={`${state.unlockedBadges.length}/${BADGES.length}`} />
        <Stat label="Finals cleared" value={`${trophyCount}`} />
      </div>

      {/* Title selection */}
      {ownedTitles.length > 0 && (
        <>
          <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>Working title</h2>
          <div className="card p-4 mb-6 flex items-center gap-2 flex-wrap">
            <button
              onClick={() => onUpdate({ ...profile, title: null })}
              className="text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: profile.title === null ? "var(--primary-light)" : "var(--bg)",
                border: profile.title === null ? "1px solid var(--primary)" : "1px solid var(--border)",
                color: profile.title === null ? "var(--primary)" : "var(--text-secondary)",
              }}
            >
              None
            </button>
            {ownedTitles.map((t) => {
              const active = profile.title === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => onUpdate({ ...profile, title: t.id })}
                  className="text-xs px-3 py-1.5 rounded-lg"
                  title={t.desc}
                  style={{
                    background: active ? "var(--gold-bg)" : "var(--bg)",
                    border: active ? "1px solid var(--gold-border)" : "1px solid var(--border)",
                    color: active ? "var(--gold)" : "var(--text-secondary)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {t.name}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Trophy case */}
      <h2 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
        <span style={{ color: "var(--gold)" }}><TrophyIcon size={15} /></span>
        Trophy case
      </h2>
      <div className="grid grid-cols-5 gap-3 mb-6 stagger">
        {EXAMS.filter((e) => examsWithContent().includes(e.slug)).map((e) => {
          const trophy = trophies[e.slug];
          const boss = getBoss(e.slug);
          return (
            <div
              key={e.slug}
              className="card p-3 text-center"
              title={trophy ? `${boss.name} — cleared at ${trophy.bestPct}%` : `${boss.name} — not yet cleared`}
              style={{
                opacity: trophy ? 1 : 0.45,
                position: "relative",
                border: trophy ? "1px solid var(--gold-border)" : undefined,
                boxShadow: trophy ? "var(--glow-gold)" : undefined,
              }}
            >
              <div className="flex justify-center mb-1.5" style={{ color: trophy ? "var(--gold)" : "var(--text-muted)" }}>
                <TrophyIcon size={22} />
              </div>
              <div className="text-[11px] font-medium" style={{ color: "var(--text-primary)" }}>{e.name}</div>
              <div className="text-[10px] font-mono" style={{ color: trophy ? "var(--gold)" : "var(--text-muted)" }}>
                {trophy ? `${trophy.bestPct}%` : "—"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Honors wall */}
      <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
        Honors wall · {state.unlockedBadges.length}/{BADGES.length}
      </h2>
      <div className="grid grid-cols-5 gap-3 mb-8 stagger">
        {BADGES.map((b) => {
          const unlocked = state.unlockedBadges.includes(b.id);
          return (
            <div key={b.id} className="card p-3 text-center" style={{ opacity: unlocked ? 1 : 0.45 }} title={b.desc}>
              <div
                className="mx-auto mb-2 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  background: unlocked ? "var(--gold-bg)" : "var(--bg)",
                  border: unlocked ? "1px solid var(--gold-border)" : "1px solid var(--border)",
                  color: unlocked ? "var(--gold)" : "var(--text-muted)",
                }}
              >
                <BadgeGlyph id={b.id} size={18} />
              </div>
              <p className="text-[11px] font-medium" style={{ color: "var(--text-primary)" }}>{b.name}</p>
            </div>
          );
        })}
      </div>

      <div className="card p-4 flex items-center justify-between" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)" }}>
        <div className="flex items-center gap-2.5">
          <span style={{ color: "var(--primary)" }}><BriefcaseIcon size={18} /></span>
          <div className="text-sm" style={{ color: "var(--text-primary)" }}>
            Climb the ladder — quests pay Comp at every rank.
          </div>
        </div>
        <Link href="/career" className="btn-primary text-sm px-4 py-2">The Ladder →</Link>
      </div>
    </div>
  );
}

// ---- bits ------------------------------------------------------------------
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
      {children}
    </div>
  );
}

function Swatch({ color, active, onClick }: { color: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full transition-transform"
      style={{
        width: 26,
        height: 26,
        background: color,
        border: active ? "2.5px solid var(--primary)" : "2px solid var(--border-strong)",
        transform: active ? "scale(1.12)" : "scale(1)",
      }}
      aria-label={color}
    />
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs px-3 py-1.5 rounded-lg transition-all"
      style={{
        background: active ? "var(--primary-light)" : "var(--bg)",
        border: active ? "1px solid var(--primary)" : "1px solid var(--border)",
        color: active ? "var(--primary)" : "var(--text-secondary)",
      }}
    >
      {label}
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-3.5 text-center">
      <div className="font-display text-xl" style={{ color: "var(--text-primary)" }}>{value}</div>
      <div className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}
