
import { GoogleGenAI } from "@google/genai";

export async function generateSushiVideo(imageBytes: string, prompt: string, aspectRatio: '16:9' | '9:16' = '16:9') {
  const apiKey = process.env.API_KEY;
  if (!apiKey) throw new Error("API Key not found");

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      image: {
        imageBytes: imageBytes,
        mimeType: 'image/jpeg',
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) throw new Error("Video generation failed");

    const response = await fetch(`${downloadLink}&key=${apiKey}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Video Generation Error:", error);
    throw error;
  }
}

export async function checkApiKey() {
  if (typeof window.aistudio === 'undefined') return true; // fallback
  return await window.aistudio.hasSelectedApiKey();
}

export async function requestApiKey() {
  if (typeof window.aistudio === 'undefined') return;
  await window.aistudio.openSelectKey();
}
