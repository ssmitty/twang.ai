import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = "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";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { mood, speed, tempo, theme, story } = body;

  // Craft the prompt for OpenAI
  const prompt = `Write original country music lyrics.\nMood: ${mood}\nSpeed: ${speed}\nTempo: ${tempo}\nTheme: ${theme}\n${story ? `Story: ${story}` : ""}\nLyrics:`;

  // Call OpenAI API
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a creative country music lyricist." },
        { role: "user", content: prompt },
      ],
      max_tokens: 256,
      temperature: 0.9,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ lyrics: "Sorry, there was an error generating your lyrics." }, { status: 500 });
  }

  const data = await response.json();
  const lyrics = data.choices?.[0]?.message?.content?.trim() || "Sorry, no lyrics generated.";

  return NextResponse.json({ lyrics });
} 