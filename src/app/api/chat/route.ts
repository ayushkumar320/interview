import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await ai.getGenerativeModel({
    model: "gemini-2.0-flash",
  }).generateContent(prompt);

  return Response.json({ response: response.response.text() });
}
