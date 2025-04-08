import axios from "axios";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const translateText = async (text, targetLanguage = "hi") => {
  await delay(1000);
  try {
    const response = await axios.post(
      // "https://libretranslate.com/translate",
      {
        q: text,
        source: "en", // Source language (English)
        target: targetLanguage, // Target language (Hindi)
        format: "text",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Fallback to the original text if translation fails
  }
};