import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/dashboard';

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Handle referral: read cookie set during signup
      const cookieHeader = request.headers.get('cookie') || '';
      const referralMatch = cookieHeader.match(/referral_code=([^;]+)/);
      const referralCode = referralMatch ? referralMatch[1] : null;

      if (referralCode) {
        // Find the referrer by referral code
        const { data: referrer } = await supabase
          .from('users')
          .select('id')
          .eq('referral_code', referralCode)
          .single();

        if (referrer && referrer.id !== data.user.id) {
          // Create referral record (ignore if already exists)
          await supabase.from('referrals').upsert(
            {
              referrer_id: referrer.id,
              referred_id: data.user.id,
              credits_awarded: false,
            },
            { onConflict: 'referred_id' }
          );

          // Award credits
          await supabase.rpc('award_referral_credits', {
            p_referred_id: data.user.id,
          });
        }
      }

      const forwardedHost = request.headers.get('x-forwarded-host');
      const isLocalEnv = process.env.NODE_ENV === 'development';

      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
