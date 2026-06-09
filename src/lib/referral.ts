/**
 * Generate a random referral code (e.g., "jordan42")
 */
const adjectives = ['swift', 'bright', 'bold', 'sharp', 'keen', 'quick', 'smart', 'elite', 'prime', 'agile'];
const nouns = ['hire', 'grad', 'pro', 'ace', 'dev', 'star', 'top', 'win', 'edge', 'job'];

export function generateReferralCode(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 90) + 10; // 10–99
  return `${adj}${noun}${num}`;
}

export function getReferralUrl(code: string): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://rezbuild.com';
  return `${appUrl}/ref/${code}`;
}
