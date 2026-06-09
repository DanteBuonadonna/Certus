import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert resume coach and ATS (Applicant Tracking System) optimization specialist. Your job is to analyze a job description and resume, then return a JSON object with optimized content.

Instructions:
1. Extract ALL important keywords, skills, technologies, and phrases from the job description
2. Compare them against the resume content
3. Calculate an initial ATS score (0-100) based on keyword match rate and resume quality
4. Rewrite the resume bullets to:
   - Naturally incorporate missing keywords where they fit the candidate's background
   - Quantify achievements with specific, realistic metrics (numbers, percentages, dollar amounts)
   - Use strong action verbs (Engineered, Architected, Led, Scaled, Designed, etc.)
   - Match the technical level and tone of the job description
   - Each bullet should be 1-2 sentences, punchy, and results-focused
5. Write a tailored cover letter (3 short paragraphs) that:
   - Opens with a specific hook about the company/role (not generic)
   - Connects 2-3 of the candidate's best experiences to the role requirements
   - Closes confidently with a specific ask
   - Matches the company's communication style detected from the job description
6. Calculate ats_score_after based on how well the optimized content matches the JD

Return ONLY a valid JSON object with this exact structure (no markdown, no explanation):
{
  "ats_score": <integer 0-100>,
  "missing_keywords": [<array of strings — keywords in JD not found in resume>],
  "found_keywords": [<array of strings — keywords found in both JD and resume>],
  "optimized_bullets": [<array of 4-6 strings — rewritten resume bullets>],
  "optimized_cover_letter": "<full cover letter as a single string with \\n\\n between paragraphs>",
  "ats_score_after": <integer 0-100, always higher than ats_score>
}`;

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    // Auth check
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check credits
    const { data: creditsData } = await supabase
      .from("credits")
      .select("balance")
      .eq("user_id", user.id)
      .single();

    if (!creditsData || creditsData.balance < 1) {
      return NextResponse.json(
        { error: "Insufficient credits. Purchase more to continue." },
        { status: 402 }
      );
    }

    const body = await request.json();
    const { jobDescription, resume, includeResumeBullets, includeCoverLetter } = body;

    if (!jobDescription || !resume) {
      return NextResponse.json(
        { error: "Job description and resume are required." },
        { status: 400 }
      );
    }

    // Extract company and role from JD (simple heuristic)
    const roleMatch = jobDescription.match(/(?:role|position|title)[:\s]+([^\n]+)/i);
    const companyMatch = jobDescription.match(/(?:at|@|company)[:\s]+([^\n]+)/i);
    const role_title = roleMatch ? roleMatch[1].trim().slice(0, 80) : "Software Engineer";
    const company_name = companyMatch ? companyMatch[1].trim().slice(0, 80) : "Company";

    // Call Anthropic
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `JOB DESCRIPTION:\n${jobDescription}\n\n---\n\nRESUME:\n${resume}\n\n---\n\nOptimize this resume for the job description above. Return only valid JSON.`,
        },
      ],
    });

    const rawText =
      message.content[0].type === "text" ? message.content[0].text : "";

    // Parse JSON — strip any markdown fences if present
    const jsonStr = rawText.replace(/^```json\n?/i, "").replace(/```$/, "").trim();
    const result = JSON.parse(jsonStr);

    // Deduct 1 credit
    await supabase
      .from("credits")
      .update({ balance: creditsData.balance - 1, updated_at: new Date().toISOString() })
      .eq("user_id", user.id);

    // Save to history
    await supabase.from("optimization_history").insert({
      user_id: user.id,
      company_name,
      role_title,
      ats_score_before: result.ats_score,
      ats_score_after: result.ats_score_after,
      missing_keywords: result.missing_keywords,
      found_keywords: result.found_keywords,
      optimized_bullets: JSON.stringify(result.optimized_bullets),
      optimized_cover_letter: result.optimized_cover_letter,
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("Optimize error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
