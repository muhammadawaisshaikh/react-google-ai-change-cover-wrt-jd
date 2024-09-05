import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../config";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const TransormCoverAi = async (cover, jd) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const prompt = `generate a brand new catchy cover letter as per provided JD: ${jd}, cover: ${cover}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
}