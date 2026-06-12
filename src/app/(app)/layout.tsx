import Sidebar from "@/components/layout/Sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// Render app pages on-demand (not statically prerendered).
export const dynamic = "force-dynamic";

// ACCOUNT MODEL: login required. Every page in the (app) group is gated —
// no authenticated Supabase user means a redirect to /login. The marketing
// landing page, /login, /signup and /auth/callback live OUTSIDE this group
// and stay public.
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const credits = 0;
  let email: string | null = null;
  let signedIn = false;
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    email = user?.email ?? null;
    signedIn = !!user;
  } catch {
    // Supabase unreachable / not configured — treat as signed out.
    signedIn = false;
  }

  // The wall. redirect() must live outside the try/catch (it throws by design).
  if (!signedIn) redirect("/login");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar credits={credits} email={email} />
      <main
        style={{
          marginLeft: "var(--sidebar-width)",
          flex: 1,
          minHeight: "100vh",
          background: "var(--bg)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
