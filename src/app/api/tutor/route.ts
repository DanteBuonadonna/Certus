import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// ============================================================
// The Associate — AI tutor endpoint.
// Claude Haiku, context-aware (gets the chapter/section or the
// practice question the student is looking at), hard-capped and
// rate-limited so an open endpoint can't run up the bill.
// ============================================================

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// --- Simple per-IP rate limit (per serverless instance). ---
// Not bulletproof across instances, but stops casual abuse cold.
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 25;
const hits = new Map<string, { count: number; start: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  h.count += 1;
  if (hits.size > 5000) hits.clear(); // memory guard
  return h.count > MAX_PER_WINDOW;
}

const SYSTEM_PROMPT = `You are "The Associate" — the sharp, friendly in-house tutor inside Certus, a study platform for finance certification exams (CFA, SIE, Series 7, Series 66, CFP, CPA).

Your job: teach the concept the student asks about, fast and clearly, at the level of the exam they are studying. You are talking to a motivated student mid-study-session.

Rules:
- Be concise. Lead with the answer or core idea in the first sentence, then explain. Most replies should be 80–200 words. Use a short worked example with real numbers when it helps.
- Use the provided STUDY CONTEXT (the chapter section or practice question they're looking at) as your anchor. Teach consistently with it.
- Plain language over jargon; define any term of art you must use.
- If asked to "quiz me", ask ONE exam-style multiple-choice question, wait for their answer, then grade and explain.
- If the student's question is unrelated to finance, exams, or studying, politely steer back in one sentence. Never write essays, code, or content unrelated to exam prep.
- Never claim to be a financial adviser; this is exam education, not investment advice.
- Format: short paragraphs. No headers. Minimal bullets. No emoji.`;

interface TutorMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "You're moving fast — The Associate needs a short breather. Try again in a bit." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const question: string = String(body.question ?? "").slice(0, 1500);
    const context: string = String(body.context ?? "").slice(0, 6000);
    const history: TutorMessage[] = Array.isArray(body.history)
      ? body.history
          .slice(-8) // last 4 exchanges max
          .filter((m: TutorMessage) => m && (m.role === "user" || m.role === "assistant"))
          .map((m: TutorMessage) => ({ role: m.role, content: String(m.content).slice(0, 2000) }))
      : [];

    if (!question.trim()) {
      return NextResponse.json({ error: "Ask a question." }, { status: 400 });
    }

    const messages: TutorMessage[] = [
      ...history,
      {
        role: "user",
        content: context
          ? `STUDY CONTEXT (what I'm looking at right now):\n${context}\n\nMY QUESTION: ${question}`
          : question,
      },
    ];

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 700,
      system: SYSTEM_PROMPT,
      messages,
    });

    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { type: "text"; text: string }).text)
      .join("\n");

    return NextResponse.json({ answer: text });
  } catch (err) {
    console.error("Tutor error:", err);
    return NextResponse.json(
      { error: "The Associate stepped away from the desk. Try again in a moment." },
      { status: 500 }
    );
  }
}
