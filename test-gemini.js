
import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function listAllModels() {
  // We can't easily list models with the SDK directly in a simple way without a model instance, 
  // but let's try a different model name 'gemini-pro' just to check connectivity.
  // Actually, let's use the API key to fetch valid models via Fetch API if possible, 
  // or just try 'gemini-1.5-pro' and 'gemini-pro'.

  const models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro", "gemini-1.0-pro"];
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  for (const modelName of models) {
    try {
      console.log(`Testing ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Hello");
      console.log(`SUCCESS: ${modelName}`);
      return;
    } catch (e) {
      console.log(`FAILED: ${modelName} - ${e.message.split('\n')[0]}`);
    }
  }
}

listAllModels();
