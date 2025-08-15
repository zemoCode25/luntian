import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return new NextResponse("Failed to generate content", { status: 500 });
  }
}
