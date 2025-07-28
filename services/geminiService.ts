import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";

const getAiClient = (): GoogleGenAI => {
  // This check prevents a crash in browser environments where `process` is not defined.
  if (typeof process === 'undefined' || !process.env.API_KEY) {
    throw new Error("API Key not configured or accessible in this environment.");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

const gameDataSchema = {
  type: Type.OBJECT,
  properties: {
    answer: {
      type: Type.STRING,
      description: "The official English title of a famous Disney movie. Example: 'The Lion King'."
    },
    answerPortuguese: {
      type: Type.STRING,
      description: "The official Brazilian Portuguese title of the same Disney movie. Example: 'O Rei Leão'."
    },
    imagePrompt: {
      type: Type.STRING,
      description: "A detailed, artistic prompt for an AI to generate an image related to the movie. The prompt must not contain the movie title in any language. Example for 'The Lion King': 'A young lion cub with a golden-brown coat and a small tuft of red mane, standing on a sunlit rock overlooking a vast savanna. Epic, digital art style.'"
    }
  },
  required: ['answer', 'answerPortuguese', 'imagePrompt']
};

export const generateGameData = async (): Promise<{ answer: string, answerPortuguese: string, imagePrompt: string }> => {
  const prompt = "You are a Disney trivia master. Generate a single Disney movie guessing game challenge. The answer must be a movie title. Provide the official movie title in both English and Brazilian Portuguese. Also, provide a detailed, artistic prompt for an image generation AI to create a picture related to the movie. Do not include the movie title in the image prompt in any language.";

  try {
    const ai = getAiClient();
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: gameDataSchema,
      },
    });

    const text = response.text.trim();
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating game data from Gemini:", error);
    // Re-throw the error to be handled by the calling component
    throw error;
  }
};

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const ai = getAiClient();
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: '1:1',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    } else {
      throw new Error("No image was generated.");
    }
  } catch (error) {
    console.error("Error generating image from Gemini:", error);
    // Re-throw the error to be handled by the calling component
    throw error;
  }
};