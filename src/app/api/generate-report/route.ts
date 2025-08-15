import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        You are an expert plant pathologist.
        Given the disease name Powdery mildew, return a detailed plant disease diagnosis report.
        Follow the schema exactly.
        If any information is unknown, use "Information not available".
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diseaseName: {
              type: Type.OBJECT,
              properties: {
                common: { type: Type.STRING },
                scientific: { type: Type.STRING },
              },
              propertyOrdering: ["common", "scientific"],
            },
            description: {
              type: Type.OBJECT,
              properties: {
                overview: { type: Type.STRING },
                symptoms: { type: Type.ARRAY, items: { type: Type.STRING } },
                affectedParts: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
              },
              propertyOrdering: ["overview", "symptoms", "affectedParts"],
            },
            possibleCauses: {
              type: Type.OBJECT,
              properties: {
                environmentalConditions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                pathogenType: { type: Type.STRING },
                cultivationPractices: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
              },
              propertyOrdering: [
                "environmentalConditions",
                "pathogenType",
                "cultivationPractices",
              ],
            },
            remedyTreatment: {
              type: Type.OBJECT,
              properties: {
                immediateAction: { type: Type.STRING },
                organicOptions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                chemicalOptions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
              },
              propertyOrdering: [
                "immediateAction",
                "organicOptions",
                "chemicalOptions",
              ],
            },
            preventionTips: { type: Type.ARRAY, items: { type: Type.STRING } },
            complications: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          propertyOrdering: [
            "diseaseName",
            "description",
            "possibleCauses",
            "remedyTreatment",
            "preventionTips",
            "complications",
          ],
        },
      },
    });

    // Parse into JS object
    const data = JSON.parse(response.text ?? "{}");

    // Return clean JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error generating content:", error);
    return new NextResponse("Failed to generate content", { status: 500 });
  }
}
