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
  TIER_META,
  formatComp,
} from "@/lib/economy";
import { GameState, EMPTY_STATE } from "@/lib/studyPlan";
import { loadState } from "@/lib/gameStore";
import { Profile, loadProfile, saveProfile } from "@/lib/profile";
import { Avatar } from "@/components/avatar";
import { AnimatedNumber, GoldBurst } from "@/components/ui";
import { CheckIcon, LockIcon, BoltIcon } from "@/components/icons";

const SLOT_TABS: { slot: ItemSlot | "all"; label: string }[] = [
  { slot: "all", label: "All" },
  { slot: "suit", label: "Suits" },
  { slot: "accessory", label: "Accessories" },
  { slot: "background", label: "Backdrops" },
  { slot: "title", label: "Titles" },
];

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
    setTimeout(() => setJustBought(null), 1200);
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

      {/* Wallet */}
      <div className="card p-4 mb-6 flex items-center justify-between rise-in" style={{ borderColor: "var(--gold-border)" }}>
        <div className="flex items-center gap-4">
          {profile && <Avatar config={profile.avatar} size={52} rounded={10} />}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Comp balance
            </div>
            <div className="font-display text-2xl" style={{ color: "var(--gold)" }}>
              $<AnimatedNumber value={balance} />
            </div>
          </div>
        </div>
        <div className="text-right text-xs" style={{ color: "var(--text-muted)" }}>
          <div>Lifetime earned: {formatComp(compEarned(state, wallet))}</div>
          <div className="flex items-center gap-1 justify-end mt-0.5">
            <BoltIcon size={11} /> 1 XP = $1 · quests pay bonuses
          </div>
        </div>
      </div>

      {!profile && (
        <div className="card p-4 mb-6 flex items-center justify-between" style={{ background: "var(--primary-light)" }}>
          <span className="text-sm" style={{ color: "var(--text-primary)" }}>
            Create your profile first so you can equip what you buy.
          </span>
          <Link href="/profile" className="btn-primary text-sm px-4 py-2">Onboard →</Link>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {SLOT_TABS.map((t) => (
          <button
            key={t.slot}
            onClick={() => setTab(t.slot)}
            className="text-xs px-3 py-1.5 rounded-lg"
            style={{
              background: tab === t.slot ? "var(--primary)" : "var(--bg-card)",
              color: tab === t.slot ? "#fff" : "var(--text-secondary)",
              border: "0.5px solid var(--border)",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Catalog */}
      <div className="grid grid-cols-2 gap-3 stagger">
        {items.map((item) => {
          const owned = ownsItem(item.id, wallet);
          const equipped = isEquipped(item);
          const affordable = balance >= item.price;
          const tier = TIER_META[item.tier];
          const preview = profile ? previewConfig(profile, item) : null;
          return (
            <div
              key={item.id}
              className="card-i p-4"
              style={{
                position: "relative",
                borderColor: item.tier === "legacy" ? "var(--gold-border)" : undefined,
                boxShadow: item.tier === "legacy" ? "var(--glow-gold)" : undefined,
              }}
            >
              {justBought === item.id && <GoldBurst count={14} />}
              <div className="flex items-start gap-3">
                {preview && item.slot !== "title" ? (
                  <Avatar config={preview} size={62} rounded={10} />
                ) : (
                  <div
                    className="flex items-center justify-center rounded-lg font-display"
                    style={{ width: 62, height: 62, background: "var(--gold-bg)", color: "var(--gold)", fontSize: 22, flexShrink: 0 }}
                  >
                    &ldquo;
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>{item.name}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider flex-shrink-0" style={{ color: tier.color }}>
                      {tier.label}
                    </span>
                  </div>
                  <p className="text-[11px] mt-0.5 mb-2" style={{ color: "var(--text-secondary)", lineHeight: 1.4 }}>
                    {item.desc}
                  </p>
                  {owned ? (
                    equipped ? (
                      <span className="text-[11px] font-semibold flex items-center gap-1" style={{ color: "var(--ats-green)" }}>
                        <CheckIcon size={12} /> Equipped
                      </span>
                    ) : (
                      <button
                        className="text-[11px] font-semibold px-3 py-1 rounded-md"
                        style={{ background: "var(--primary-light)", color: "var(--primary)", border: "1px solid rgba(83,74,183,0.25)" }}
                        onClick={() => handleEquip(item)}
                        disabled={!profile}
                      >
                        Equip
                      </button>
                    )
                  ) : (
                    <button
                      className="text-[11px] font-semibold px-3 py-1 rounded-md flex items-center gap-1.5"
                      style={{
                        background: affordable ? "var(--gold-bg)" : "var(--bg)",
                        color: affordable ? "var(--gold)" : "var(--text-muted)",
                        border: affordable ? "1px solid var(--gold-border)" : "1px solid var(--border)",
                        cursor: affordable ? "pointer" : "not-allowed",
                      }}
                      disabled={!affordable}
                      onClick={() => handleBuy(item)}
                      title={affordable ? `Buy for ${formatComp(item.price)}` : `Earn ${formatComp(item.price - balance)} more Comp by studying`}
                    >
                      {!affordable && <LockIcon size={11} />}
                      {formatComp(item.price)}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-center mt-6" style={{ color: "var(--text-muted)" }}>
        Comp is earned, never bought. Every dollar here represents real study time.
      </p>
    </div>
  );
}

/** Preview the item on the player's current avatar. */
function previewConfig(profile: Profile, item: ShopItem) {
  const a = { ...profile.avatar };
  if (item.slot === "suit") a.suit = item.id;
  else if (item.slot === "accessory") a.accessory = item.id;
  else if (item.slot === "background") a.background = item.id;
  return a;
}
