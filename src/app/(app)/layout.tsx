import Sidebar from "@/components/layout/Sidebar";
import { createClient } from "@/lib/supabase/server";

// Render app pages on-demand (not statically prerendered).
export const dynamic = "force-dynamic";

// ACCOUNT MODEL: accounts are real but OPTIONAL.
// Anyone can use the app without signing in (progress lives in the
// browser); signing up attaches identity for purchases and future
// cross-device sync. No redirect wall — launch traffic flows straight in.
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const credits = 0;
  let email: string | null = null;
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    email = user?.email ?? null;
  } catch {
    // Supabase not configured / no session — guest mode.
  }

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
