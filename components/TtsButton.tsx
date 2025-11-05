
import React, { useState, useCallback } from 'react';
import { textToSpeech } from '../services/geminiService';
import { decodeAudioData } from '../utils/audioUtils';
import { SpeakerIcon, LoadingSpinner } from './Icons';

interface TtsButtonProps {
  text: string;
}

// Global AudioContext to prevent issues with too many contexts
let audioContext: AudioContext | null = null;
const getAudioContext = () => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    return audioContext;
};

const TtsButton: React.FC<TtsButtonProps> = ({ text }) => {
  const [isLoading, setIsLoading] = useState(false);

  const playAudio = useCallback(async (base64Audio: string) => {
    try {
      const ctx = getAudioContext();
      // Resume context if it's suspended (e.g., due to browser policy)
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
      
      const audioData = atob(base64Audio);
      const bytes = new Uint8Array(audioData.length);
      for (let i = 0; i < audioData.length; i++) {
        bytes[i] = audioData.charCodeAt(i);
      }

      // This is a simplified decoding for PCM data as returned by Gemini TTS
      const audioBuffer = await decodeAudioData(bytes, ctx, 24000, 1);

      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.start();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  }, []);

  const handlePlay = async (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!text || isLoading) return;
    setIsLoading(true);
    try {
      const audioData = await textToSpeech(text);
      if (audioData) {
        await playAudio(audioData);
      }
    } catch (error) {
      console.error("Failed to generate speech:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isLoading}
      className="p-1 rounded-full text-gray-400 hover:bg-gray-700 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
      aria-label="Listen"
    >
      {isLoading ? (
        <LoadingSpinner className="w-4 h-4" />
      ) : (
        <SpeakerIcon className="w-4 h-4" />
      )}
    </button>
  );
};

export default TtsButton;
