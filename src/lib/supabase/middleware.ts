import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

type CookieToSet = { name: string; value: string; options?: CookieOptions };

// Session refresh WITHOUT a login wall.
// This middleware never redirects — the app stays fully usable without an
// account. Its only job is to refresh expired Supabase auth tokens on each
// request so signed-in users STAY signed in (without it, sessions silently
// die after ~1 hour and the sidebar reverts to guest).
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return supabaseResponse; // not configured — guest mode

  try {
    const supabase = createServerClient(url, anonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    });

    // Touching getUser() triggers a token refresh when needed and writes
    // the fresh cookies onto the response. Do not remove.
    await supabase.auth.getUser();
  } catch {
    // Never let auth plumbing take the site down — fall through as guest.
  }

  return supabaseResponse;
}
