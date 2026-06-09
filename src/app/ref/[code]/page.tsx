import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ code: string }>;
}

export default async function RefPage({ params }: Props) {
  const { code } = await params;
  // Redirect to signup with ref param; the signup page will store it in a cookie
  redirect(`/signup?ref=${code}`);
}
