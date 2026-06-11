"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Wallet,
  loadWallet,
  compBalance,
  compEarned,
  buyItem,
  ownsItem,
  SHOP_ITEMS,
  ShopItem,
  ItemSlot,
  ItemTier,
  TIER_META,
  formatComp,
} from "@/lib/economy";
import { GameState, EMPTY_STATE } from "@/lib/studyPlan";
import { loadState } from "@/lib/gameStore";
import { Profile, loadProfile, saveProfile } from "@/lib/profile";
import { Avatar } from "@/components/avatar";
import { AnimatedNumber, GoldBurst } from "@/components/ui";
import { CheckIcon, LockIcon } from "@/components/icons";

const SLOT_TABS: { slot: ItemSlot | "all"; label: string }[] = [
  { slot: "all", label: "All" },
  { slot: "suit", label: "Suits" },
  { slot: "accessory", label: "Accessories" },
  { slot: "background", label: "Backdrops" },
  { slot: "title", label: "Titles" },
];

const TIER_FRAME: Record<ItemTier, { frame: string; deep: string; bg: string }> = {
  standard: { frame: "var(--tier-standard)", deep: "var(--tier-standard-deep)", bg: "rgba(125,133,150,0.1)" },
  premium: { frame: "var(--tier-premium)", deep: "var(--tier-premium-deep)", bg: "rgba(77,141,224,0.1)" },
  executive: { frame: "var(--tier-executive)", deep: "var(--tier-executive-deep)", bg: "rgba(139,92,246,0.1)" },
  legacy: { frame: "var(--tier-legacy)", deep: "var(--tier-legacy-deep)", bg: "rgba(201,162,39,0.12)" },
};

function CoinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden>
      <circle cx="10" cy="10" r="9" fill="var(--gold-bright)" stroke="var(--gold-deep)" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="5.8" fill="none" stroke="var(--gold-deep)" strokeWidth="1" opacity="0.55" />
      <text x="10" y="13.6" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5d4a12">$</text>
    </svg>
  );
}

export default function ShopClient() {
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [wallet, setWallet] = useState<Wallet>({ bonus: 0, spent: 0, owned: [] });
  const [profile, setProfile] = useState<Profile | null>(null);
  const [tab, setTab] = useState<ItemSlot | "all">("all");
  const [justBought, setJustBought] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setState(loadState());
    setWallet(loadWallet());
    setProfile(loadProfile());
    setLoaded(true);
  }, []);

  const balance = compBalance(state, wallet);
  const items = useMemo(
    () => SHOP_ITEMS.filter((i) => !i.free && (tab === "all" || i.slot === tab)),
    [tab]
  );

  function handleBuy(item: ShopItem) {
    const w = buyItem(state, item.id);
    if (!w) return;
    setWallet({ ...w });
    setJustBought(item.id);
    setTimeout(() => setJustBought(null), 1400);
  }

  function handleEquip(item: ShopItem) {
    if (!profile) return;
    const p: Profile = { ...profile };
    if (item.slot === "suit") p.avatar = { ...p.avatar, suit: item.id };
    else if (item.slot === "accessory") p.avatar = { ...p.avatar, accessory: item.id };
    else if (item.slot === "background") p.avatar = { ...p.avatar, background: item.id };
    else if (item.slot === "title") p.title = item.id;
    saveProfile(p);
    setProfile(p);
  }

  function isEquipped(item: ShopItem): boolean {
    if (!profile) return false;
    if (item.slot === "suit") return profile.avatar.suit === item.id;
    if (item.slot === "accessory") return profile.avatar.accessory === item.id;
    if (item.slot === "background") return profile.avatar.background === item.id;
    return profile.title === item.id;
  }

  if (!loaded) {
    return (
      <div className="px-8 py-8 max-w-3xl mx-auto">
        <div className="skeleton" style={{ height: 90, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 400 }} />
      </div>
    );
  }

  return (
    <div className="px-8 py-8 max-w-3xl mx-auto">
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>The Perks Desk</h1>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Spend the Comp you&apos;ve earned studying. Strictly cosmetic — readiness can&apos;t be bought.
      </p>

      {/* Wallet bar */}
      <div
        className="card-game p-4 mb-6 flex items-center justify-between rise-in"
        style={{ borderColor: "var(--gold-border)", background: "linear-gradient(180deg, var(--gold-bg), var(--bg-card) 80%)" }}
      >
        <div className="flex items-center gap-4">
          {profile && <Avatar config={profile.avatar} size={56} rounded={12} />}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Comp balance
            </div>
            <div className="font-display text-2xl flex items-center gap-2" style={{ color: "var(--gold)" }}>
              <CoinIcon size={20} />
              $<AnimatedNumber value={balance} />
            </div>
          </div>
        </div>
        <div className="text-right text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
          <div>Lifetime earned: {formatComp(compEarned(state, wallet))}</div>
          <div className="mt-0.5">1 XP = $1 · quests pay bonuses</div>
        </div>
      </div>

      {!profile && (
        <div className="card-game p-4 mb-6 flex items-center justify-between" style={{ background: "var(--primary-light)" }}>
          <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            Create your character first so you can equip what you buy.
          </span>
          <Link href="/profile" className="btn-game btn-game-primary text-xs" style={{ padding: "0.55rem 1.1rem" }}>ONBOARD →</Link>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {SLOT_TABS.map((t) => {
          const active = tab === t.slot;
          return (
            <button
              key={t.slot}
              onClick={() => setTab(t.slot)}
              className="text-xs px-4 py-2 transition-all"
              style={{
                borderRadius: 12,
                fontWeight: 700,
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : "var(--text-secondary)",
                border: active ? "2px solid var(--primary)" : "2px solid var(--border)",
                boxShadow: active ? "0 3px 0 var(--primary-deep)" : "0 3px 0 var(--border)",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Loot grid */}
      <div className="grid grid-cols-2 gap-4 stagger">
        {items.map((item) => {
          const owned = ownsItem(item.id, wallet);
          const equipped = isEquipped(item);
          const affordable = balance >= item.price;
          const tier = TIER_META[item.tier];
          const frame = TIER_FRAME[item.tier];
          const preview = profile ? previewConfig(profile, item) : null;
          const isLegacy = item.tier === "legacy";
          return (
            <div
              key={item.id}
              className={`${isLegacy ? "legacy-sheen " : ""}${justBought === item.id ? "wiggle " : ""}card-game`}
              style={{
                position: "relative",
                overflow: "hidden",
                borderColor: frame.frame,
                boxShadow: `0 4px 0 ${frame.deep}`,
              }}
            >
              {justBought === item.id && <GoldBurst count={16} />}
              {owned && <div className="ribbon-owned">OWNED</div>}

              {/* Rarity band */}
              <div
                className="px-4 py-1.5 flex items-center justify-between"
                style={{ background: frame.bg, borderBottom: `2px solid ${frame.frame}` }}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: tier.color }}>
                  {tier.label}
                </span>
                <span className="flex gap-0.5">
                  {Array.from({ length: tierStars(item.tier) }).map((_, i) => (
                    <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill={frame.frame}>
                      <path d="M12 2.8l2.8 5.9 6.2.8-4.6 4.4 1.2 6.2L12 17l-5.6 3.1 1.2-6.2L3 9.5l6.2-.8L12 2.8z" />
                    </svg>
                  ))}
                </span>
              </div>

              <div className="p-4 flex items-start gap-3.5">
                {/* Art */}
                {preview && item.slot !== "title" ? (
                  <Avatar config={preview} size={76} rounded={14} animated={false} />
                ) : (
                  <div
                    className="flex items-center justify-center font-display"
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: 14,
                      background: frame.bg,
                      border: `2px solid ${frame.frame}`,
                      color: frame.frame,
                      fontSize: 26,
                      flexShrink: 0,
                    }}
                  >
                    &ldquo;&rdquo;
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-extrabold truncate" style={{ color: "var(--text-primary)" }}>{item.name}</div>
                  <p className="text-[11px] mt-0.5 mb-2.5" style={{ color: "var(--text-secondary)", lineHeight: 1.45 }}>
                    {item.desc}
                  </p>

                  {owned ? (
                    equipped ? (
                      <span className="text-[11px] font-extrabold flex items-center gap-1" style={{ color: "var(--ats-green)" }}>
                        <CheckIcon size={12} /> EQUIPPED
                      </span>
                    ) : (
                      <button
                        className="btn-game btn-game-primary"
                        style={{ padding: "0.4rem 1rem", fontSize: "0.72rem", borderRadius: 11 }}
                        onClick={() => handleEquip(item)}
                        disabled={!profile}
                      >
                        EQUIP
                      </button>
                    )
                  ) : (
                    <button
                      className={affordable ? "btn-game btn-game-gold" : "btn-game btn-game-ghost"}
                      style={{ padding: "0.4rem 0.9rem", fontSize: "0.72rem", borderRadius: 11 }}
                      disabled={!affordable}
                      onClick={() => handleBuy(item)}
                      title={affordable ? `Buy for ${formatComp(item.price)}` : `Earn ${formatComp(item.price - balance)} more Comp by studying`}
                    >
                      {affordable ? <CoinIcon size={13} /> : <LockIcon size={11} />}
                      {formatComp(item.price)}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-center mt-7 font-semibold" style={{ color: "var(--text-muted)" }}>
        Comp is earned, never bought. Every dollar here represents real study time.
      </p>
    </div>
  );
}

function tierStars(t: ItemTier): number {
  return t === "standard" ? 1 : t === "premium" ? 2 : t === "executive" ? 3 : 4;
}

/** Preview the item on the player's current avatar. */
function previewConfig(profile: Profile, item: ShopItem) {
  const a = { ...profile.avatar };
  if (item.slot === "suit") a.suit = item.id;
  else if (item.slot === "accessory") a.accessory = item.id;
  else if (item.slot === "background") a.background = item.id;
  return a;
}
