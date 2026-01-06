import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCaption(base64ImageFile) {
  const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
  });

  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: "image/png",
        data: base64ImageFile,
      },
    },
    "Generate a short Instagram caption with emojis and hashtags.",
  ]);

  return result.response.text();
}

export default generateCaption;
