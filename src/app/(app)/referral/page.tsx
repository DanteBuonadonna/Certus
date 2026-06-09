import { createClient } from "@/lib/supabase/server";
import ReferralClient from "./ReferralClient";

export default async function ReferralPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Get user's referral code
  const { data: userData } = await supabase
    .from("users")
    .select("referral_code")
    .eq("id", user.id)
    .single();

  // Get referrals made by this user
  const { data: referrals } = await supabase
    .from("referrals")
    .select("*, referred:referred_id(email, created_at)")
    .eq("referrer_id", user.id)
    .order("created_at", { ascending: false });

  const referralCode = userData?.referral_code ?? "";
  const referralList = referrals ?? [];
  const creditsEarned = referralList.filter((r) => r.credits_awarded).length * 3;
  const pendingCount = referralList.filter((r) => !r.credits_awarded).length;

  return (
    <ReferralClient
      referralCode={referralCode}
      referrals={referralList}
      totalReferred={referralList.length}
      creditsEarned={creditsEarned}
      pendingCount={pendingCount}
    />
  );
}
