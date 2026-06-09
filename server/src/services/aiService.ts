import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY as string
  );

export const generateEcoAdvice =
  async (
    carbonScore: number,
    emission: number,
    recommendations: string[]
  ) => {

    const model =
      genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
      });

    const prompt = `
You are a sustainability expert.

Carbon Score:
${carbonScore}

Carbon Emission:
${emission}

Recommendations:
${recommendations.join("\n")}

Provide:

1. Carbon analysis
2. Improvement suggestions
3. Weekly eco challenge
4. Motivation message

Keep response under 200 words.
`;

    const result =
      await model.generateContent(
        prompt
      );

    return result.response.text();
};
