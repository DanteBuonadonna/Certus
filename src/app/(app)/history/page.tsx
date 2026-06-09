import { createClient } from "@/lib/supabase/server";
import HistoryClient from "./HistoryClient";

export default async function HistoryPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: history } = await supabase
    .from("optimization_history")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const { data: creditsData } = await supabase
    .from("credits")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  const items = history ?? [];
  const credits = creditsData?.balance ?? 0;

  const avgScore =
    items.length > 0
      ? Math.round(items.reduce((sum, i) => sum + i.ats_score_after, 0) / items.length)
      : 0;

  return (
    <HistoryClient
      history={items}
      totalOptimizations={items.length}
      creditsLeft={credits}
      avgAtsScore={avgScore}
    />
  );
}
