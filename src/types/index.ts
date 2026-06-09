export interface User {
  id: string;
  email: string;
  referral_code: string;
  referred_by: string | null;
  created_at: string;
}

export interface Credits {
  id: string;
  user_id: string;
  balance: number;
  updated_at: string;
}

export interface OptimizationHistory {
  id: string;
  user_id: string;
  company_name: string;
  role_title: string;
  ats_score_before: number;
  ats_score_after: number;
  missing_keywords: string[];
  found_keywords: string[];
  optimized_bullets: string;
  optimized_cover_letter: string;
  created_at: string;
}

export interface Referral {
  id: string;
  referrer_id: string;
  referred_id: string;
  credits_awarded: boolean;
  created_at: string;
}

export interface OptimizeRequest {
  jobDescription: string;
  resume: string;
  includeResumeBullets: boolean;
  includeCoverLetter: boolean;
}

export interface OptimizeResult {
  ats_score: number;
  missing_keywords: string[];
  found_keywords: string[];
  optimized_bullets: string[];
  optimized_cover_letter: string;
  ats_score_after: number;
}

export interface HistoryItem extends OptimizationHistory {
  // Extended if needed
}

export type ATSLevel = 'green' | 'amber' | 'red';

export function getATSLevel(score: number): ATSLevel {
  if (score >= 80) return 'green';
  if (score >= 60) return 'amber';
  return 'red';
}

export function getATSColor(score: number): string {
  const level = getATSLevel(score);
  if (level === 'green') return '#1D9E75';
  if (level === 'amber') return '#BA7517';
  return '#E24B4A';
}
