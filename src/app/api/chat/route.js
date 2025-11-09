import { GoogleGenerativeAI } from "@google/generative-ai";
import { safyzoneInfo } from "@/data/safyzoneInfo";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Merge context with user conversation
    const context = `
    System Instructions:
    ${safyzoneInfo}

    Now continue this conversation based on the info above.
    `;

    const prompt =
      context + "\n\n" + messages.map((m) => `${m.role}: ${m.content}`).join("\n");

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return Response.json({ text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
