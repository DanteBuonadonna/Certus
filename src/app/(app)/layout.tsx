import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Sidebar from "@/components/layout/Sidebar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch credits
  const { data: creditsData } = await supabase
    .from("credits")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  const credits = creditsData?.balance ?? 0;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar credits={credits} email={user.email ?? ""} />
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
