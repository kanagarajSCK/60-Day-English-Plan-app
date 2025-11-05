import React, { useState, useRef, useEffect, useCallback } from 'react';
import { connectLive } from '../services/geminiService';
import { decode, encode, decodeAudioData } from '../utils/audioUtils';
import { CloseIcon, MicrophoneIcon } from './Icons';
// @FIX: The LiveSession type is not exported from @google/genai.
import { Blob as GenAiBlob } from '@google/genai';

interface LiveConversationProps {
  isOpen: boolean;
  onClose: () => void;
}

enum ConnectionState {
  IDLE,
  CONNECTING,
  CONNECTED,
  DISCONNECTED,
  ERROR
}

const LiveConversation: React.FC<LiveConversationProps> = ({ isOpen, onClose }) => {
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.IDLE);
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const [currentUserInput, setCurrentUserInput] = useState('');
  const [currentModelOutput, setCurrentModelOutput] = useState('');

  // @FIX: The LiveSession type is not exported from @google/genai.
  // We now use ReturnType<typeof connectLive> to get the type of the session promise.
  const sessionPromiseRef = useRef<ReturnType<typeof connectLive> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const nextStartTimeRef = useRef(0);
  
  const cleanup = useCallback(() => {
    sessionPromiseRef.current?.then(session => session.close());
    sessionPromiseRef.current = null;
    
    streamRef.current?.getTracks().forEach(track => track.stop());
    streamRef.current = null;
    
    scriptProcessorRef.current?.disconnect();
    mediaStreamSourceRef.current?.disconnect();
    
    inputAudioContextRef.current?.close().catch(console.error);
    outputAudioContextRef.current?.close().catch(console.error);
    inputAudioContextRef.current = null;
    outputAudioContextRef.current = null;

    setConnectionState(ConnectionState.IDLE);
    setTranscripts([]);
    setCurrentUserInput('');
    setCurrentModelOutput('');
    nextStartTimeRef.current = 0;
  }, []);

  const handleClose = () => {
    cleanup();
    onClose();
  };
  
  const startConversation = async () => {
    if (connectionState !== ConnectionState.IDLE) return;
    setConnectionState(ConnectionState.CONNECTING);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      sessionPromiseRef.current = connectLive({
          onopen: () => {
              setConnectionState(ConnectionState.CONNECTED);
              const source = inputAudioContextRef.current!.createMediaStreamSource(stream);
              mediaStreamSourceRef.current = source;
              const scriptProcessor = inputAudioContextRef.current!.createScriptProcessor(4096, 1, 1);
              scriptProcessorRef.current = scriptProcessor;

              scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
                  const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                  const l = inputData.length;
                  const int16 = new Int16Array(l);
                  for (let i = 0; i < l; i++) {
                      int16[i] = inputData[i] * 32768;
                  }
                  const pcmBlob: GenAiBlob = {
                      data: encode(new Uint8Array(int16.buffer)),
                      mimeType: 'audio/pcm;rate=16000',
                  };
                  sessionPromiseRef.current?.then((session) => {
                      session.sendRealtimeInput({ media: pcmBlob });
                  });
              };
              source.connect(scriptProcessor);
              scriptProcessor.connect(inputAudioContextRef.current!.destination);
          },
          onmessage: async (message) => {
              const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
              if (base64Audio) {
                  const outputAudioContext = outputAudioContextRef.current!;
                  nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContext.currentTime);
                  const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContext, 24000, 1);
                  const source = outputAudioContext.createBufferSource();
                  source.buffer = audioBuffer;
                  source.connect(outputAudioContext.destination);
                  source.start(nextStartTimeRef.current);
                  nextStartTimeRef.current += audioBuffer.duration;
              }

              if (message.serverContent?.inputTranscription) {
                  setCurrentUserInput(prev => prev + message.serverContent.inputTranscription.text);
              }
              if (message.serverContent?.outputTranscription) {
                  setCurrentModelOutput(prev => prev + message.serverContent.outputTranscription.text);
              }
              if (message.serverContent?.turnComplete) {
                  const fullUserInput = currentUserInput + (message.serverContent?.inputTranscription?.text || '');
                  const fullModelOutput = currentModelOutput + (message.serverContent?.outputTranscription?.text || '');
                  
                  if(fullUserInput.trim()) {
                    setTranscripts(prev => [...prev, `You: ${fullUserInput}`]);
                  }
                  if(fullModelOutput.trim()) {
                     setTranscripts(prev => [...prev, `AI: ${fullModelOutput}`]);
                  }

                  setCurrentUserInput('');
                  setCurrentModelOutput('');
              }
          },
          onerror: (e) => {
              console.error("Live session error:", e);
              setConnectionState(ConnectionState.ERROR);
              cleanup();
          },
          onclose: (e) => {
              setConnectionState(ConnectionState.DISCONNECTED);
              cleanup();
          },
      });
    } catch (error) {
        console.error("Failed to get media devices:", error);
        setConnectionState(ConnectionState.ERROR);
    }
  };

  useEffect(() => {
      // Cleanup on component unmount
      return () => {
          cleanup();
      };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 w-full max-w-2xl h-[80vh] rounded-lg shadow-2xl flex flex-col mx-4">
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Live Conversation Practice</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {transcripts.map((t, i) => <p key={i} className={t.startsWith('You:') ? 'text-blue-400' : 'text-green-400'}>{t}</p>)}
          {currentUserInput && <p className="text-blue-400/70">You: {currentUserInput}</p>}
          {currentModelOutput && <p className="text-green-400/70">AI: {currentModelOutput}</p>}
        </div>
        <div className="p-4 border-t border-gray-700 flex flex-col items-center justify-center">
            {connectionState === ConnectionState.IDLE && (
                <button onClick={startConversation} className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-colors">
                    <MicrophoneIcon className="w-6 h-6" />
                    <span>Start Conversation</span>
                </button>
            )}
             {connectionState === ConnectionState.CONNECTING && <p className="text-yellow-400">Connecting...</p>}
             {connectionState === ConnectionState.CONNECTED && (
                 <div className="flex items-center space-x-2 text-red-500">
                    <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                    <span>Listening...</span>
                 </div>
             )}
             {connectionState === ConnectionState.DISCONNECTED && <p className="text-gray-400">Disconnected.</p>}
             {connectionState === ConnectionState.ERROR && <p className="text-red-500">An error occurred. Please try again.</p>}
        </div>
      </div>
    </div>
  );
};

export default LiveConversation;