import Sidebar from "@/components/layout/Sidebar";

// Render app pages on-demand (not statically prerendered).
export const dynamic = "force-dynamic";

// NOTE: Sign-in is temporarily DISABLED so the app is fully viewable
// without an account. Re-enable auth later by restoring the Supabase
// getUser() check and the redirect to /login.
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const credits = 0;
  const email = "demo@certus.app";

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
