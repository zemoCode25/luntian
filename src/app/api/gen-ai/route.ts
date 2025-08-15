import { NextRequest, NextResponse } from "next/server";
import { genAI } from "@/lib/gemini";
export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${prompt}`,
    });

    const response = result.text ?? "";

    return NextResponse.json(JSON.stringify({ response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating content:", error);
    return new NextResponse("Failed to generate content", { status: 500 });
  }
}
