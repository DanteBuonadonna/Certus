import Sidebar from "@/components/layout/Sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AuthScope from "@/components/AuthScope";
import { AccessProvider } from "@/lib/AccessContext";

// Render app pages on-demand (not statically prerendered).
export const dynamic = "force-dynamic";

// ACCOUNT MODEL: login required. Every page in the (app) group is gated —
// no authenticated Supabase user means a redirect to /login. The marketing
// landing page, /login, /signup and /auth/callback live OUTSIDE this group
// and stay public. Pro is read server-side from public.users.is_pro and
// handed down through AccessProvider so the browser can't forge it.
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
    // Supabase unreachable / not configured — treat as signed out.
    signedIn = false;
  }

  // The wall. redirect() must live outside the try/catch (it throws by design).
  if (!signedIn || !userId) redirect("/login");

  return (
    <AccessProvider pro={pro}>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <AuthScope userId={userId} />
        <Sidebar credits={credits} email={email} />
        {/* Sidebar margin only on md+; mobile gets a top bar instead. */}
        <main
          className="md:ml-[232px] pt-12 md:pt-0"
          style={{
            flex: 1,
            minHeight: "100vh",
            background: "var(--bg)",
          }}
        >
          {children}
        </main>
      </div>
    </AccessProvider>
  );
}
