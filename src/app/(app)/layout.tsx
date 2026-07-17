import Sidebar from "@/components/layout/Sidebar";
import MobileTabBar from "@/components/layout/MobileTabBar";
import StatusBar from "@/components/layout/StatusBar";
import { createClient } from "@/lib/supabase/server";
import AuthScope from "@/components/AuthScope";
import SyncGate from "@/components/SyncGate";
import { AccessProvider } from "@/lib/AccessContext";

// Render app pages on-demand (not statically prerendered).
export const dynamic = "force-dynamic";

// ACCOUNT MODEL: try-before-you-sign-up. Anyone — including a guest with no
// account — can use the app; their progress lives in localStorage and is
// adopted into an account when they create one (see AuthScope/SyncGate).
// Signed-in users additionally get cloud sync and (if subscribed) Pro, read
// server-side from public.users.is_pro so the browser can't forge it.
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const credits = 0;
  let email: string | null = null;
  let userId: string | null = null;
  let pro = false;
  let signedIn = false;
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    email = user?.email ?? null;
    userId = user?.id ?? null;
    signedIn = !!user;
    if (user) {
      const { data: row } = await supabase
        .from("users")
        .select("is_pro")
        .eq("id", user.id)
        .single();
      pro = row?.is_pro === true;
    }
  } catch {
    // Supabase unreachable / not configured — treat as a guest.
    signedIn = false;
  }

  return (
    <AccessProvider pro={pro} signedIn={signedIn}>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <AuthScope userId={userId} />
        <Sidebar credits={credits} email={email} />
        {/* Sidebar margin only on md+; mobile gets a top bar instead.
            minWidth:0 lets this column shrink below its content so wide
            tables/figures stay contained on a phone instead of overflowing. */}
        <main
          className="md:ml-[232px] pt-12 md:pt-0"
          style={{
            flex: 1,
            minWidth: 0,
            minHeight: "100vh",
            background: "var(--bg)",
          }}
        >
          <StatusBar />
          <SyncGate userId={userId}>{children}</SyncGate>
          {/* Clear the fixed tab bar so the last card isn't hidden under it.
              Uses --tabbar-h (globals.css) so this can't drift out of sync with
              the bar's real height — and collapses to 0 in lesson mode, where
              the bar is hidden and the extra gap would just be dead space. */}
          <div style={{ height: "var(--tabbar-h)" }} />
        </main>
        <MobileTabBar />
      </div>
    </AccessProvider>
  );
}
