import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../config";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const TransformCoverAi = async (cover, jd) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        const prompt = `Generate a brand new catchy cover letter based on the provided JD: ${jd}, and cover: ${cover}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        return "An error occurred while generating the cover letter.";
    }
};
