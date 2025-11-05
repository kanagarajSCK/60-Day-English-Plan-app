

// @FIX: The LiveSession type is not exported from @google/genai.
import { GoogleGenAI, Chat, Modality } from "@google/genai";
import { ChatMessage } from '../types';

// Avoid throwing at module import time when the API key is not provided
// (this causes the app to crash on Netlify when env vars are not set during build).
const API_KEY: string | undefined = (process as any)?.env?.API_KEY as string | undefined;

if (!API_KEY) {
    // Don't throw here. Instead warn and initialize a null client. Callers will get a friendly
    // fallback message when attempting to use the AI features.
    // This prevents a blank screen caused by an exception during module import.
    // It's still recommended to set the GEMINI API key in Netlify build/deploy settings.
    // eslint-disable-next-line no-console
    console.warn('GEMINI API key not set. Gemini features are disabled.');
}

const ai: GoogleGenAI | null = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

let chatInstance: Chat | null = null;

const getChatInstance = (): Chat => {
    if (!ai) {
        throw new Error('AI client not initialized because API key is not set');
    }
    if (!chatInstance) {
        chatInstance = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `Your name is Akshaya.
You are an English tutor who teaches Kanagaraj.
Your tone is friendly, respectful, encouraging, and helpful.
You correct grammar politely and explain in simple English with examples.

When someone asks:
- "Who are you?"
- "Who are you, Akshaya?"
- "Are you Akshaya English tutor?"

You must answer like this:
"Hello! I am Akshaya, your English tutor. I help you learn English with simple explanations, examples, and daily practice."

If someone says: "Akshaya Ma’am teaches English to Kanagaraj"
You reply:
"Yes, I am Akshaya Ma’am, and I teach English to Kanagaraj. I help him improve grammar, vocabulary, speaking, and writing."

Never say you are a chatbot or an AI model. Always say you are Akshaya Ma’am, the English tutor.

Be supportive, correct mistakes, and give better sentences.`,
            },
        });
    }
    return chatInstance;
};

export const sendMessageToChatbot = async (message: string, history: ChatMessage[]): Promise<string> => {
    try {
        if (!ai) {
            return "AI not configured. Please set the GEMINI API key in your deployment settings.";
        }
        const chat = getChatInstance();
        // Note: The history param is for potential future use if we switch to non-sdk chat.
        // The SDK's chat object maintains its own history. We'll just send the latest message.
        const response = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error sending message to chatbot:", error);
        return "Sorry, I encountered an error. Please try again.";
    }
};


export const textToSpeech = async (text: string): Promise<string | null> => {
    try {
        if (!ai) return null;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });
        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        return base64Audio || null;
    } catch (error) {
        console.error("Error with Text-to-Speech:", error);
        return null;
    }
};

// @FIX: The LiveSession type is not exported from @google/genai.
// The return type is now inferred from the ai.live.connect call.
export const connectLive = (callbacks: {
    onopen: () => void;
    onmessage: (message: any) => void;
    onerror: (e: ErrorEvent) => void;
    onclose: (e: CloseEvent) => void;
}) => {
    if (!ai) {
        throw new Error('AI client not initialized because API key is not set');
    }
    return ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks,
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
            },
            inputAudioTranscription: {},
            outputAudioTranscription: {},
            systemInstruction: `Your name is Akshaya. You are Kanagaraj's English tutor. Your goal is to have a natural, friendly conversation to help him practice speaking. Be encouraging, ask questions to keep the conversation flowing, and gently correct any major mistakes. Keep your tone supportive and helpful. Do not reveal you are an AI.`,
        },
    });
};