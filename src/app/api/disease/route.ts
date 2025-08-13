import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const arrayBuffer = await req.arrayBuffer();
  const imageBuffer = Buffer.from(arrayBuffer);

  const hfResponse = await fetch(
    "https://router.huggingface.co/hf-inference/models/linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "image/jpeg",
      },
      body: imageBuffer,
    }
  );

  const result = await hfResponse.json();
  return NextResponse.json(result);
}
