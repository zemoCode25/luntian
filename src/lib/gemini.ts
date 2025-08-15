import { GoogleGenAI, Type } from "@google/genai";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export const genAI = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });
