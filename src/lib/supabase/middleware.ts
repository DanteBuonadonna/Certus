import { NextResponse, type NextRequest } from 'next/server';

// NOTE: Auth redirects are temporarily DISABLED so every page is
// reachable without signing in. This is a pass-through that makes no
// Supabase calls. Restore the original logic to re-enable the login gate.
export async function updateSession(request: NextRequest) {
  return NextResponse.next({ request });
}
