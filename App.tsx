import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StudyPlan from './components/StudyPlan';
import Chatbot from './components/Chatbot';
import AiStatusBanner from './components/AiStatusBanner';
import LiveConversation from './components/LiveConversation';
import { ChatIcon, MicrophoneIcon } from './components/Icons';
import { studyPlanData } from './data/studyPlan';
import QuickNav from './components/QuickNav';

export default function App(): React.ReactElement {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [completedDays, setCompletedDays] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('completedDays');
      if (saved) {
        const parsed = JSON.parse(saved);
        return new Set(Array.isArray(parsed) ? parsed : []);
      }
    } catch (error) {
        console.error("Failed to parse completedDays from localStorage", error);
    }
    return new Set();
  });

  useEffect(() => {
    try {
        const dataToSave = JSON.stringify(Array.from(completedDays));
        localStorage.setItem('completedDays', dataToSave);
    } catch (error) {
        console.error("Failed to save completedDays to localStorage", error);
    }
  }, [completedDays]);

  const toggleDayCompletion = (dayNumber: number) => {
    setCompletedDays(prevCompleted => {
      const newCompleted = new Set(prevCompleted);
      if (newCompleted.has(dayNumber)) {
        newCompleted.delete(dayNumber);
      } else {
        newCompleted.add(dayNumber);
      }
      return newCompleted;
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <AiStatusBanner isKeyMissing={!(process.env as any)?.API_KEY} />
      <QuickNav data={studyPlanData} completedDays={completedDays} />
      <main className="container mx-auto px-4 py-8">
        <StudyPlan
          data={studyPlanData}
          completedDays={completedDays}
          toggleDayCompletion={toggleDayCompletion}
        />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsLiveOpen(true)}
          className="fab-pop-in bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-500"
          aria-label="Start Live Conversation"
        >
          <MicrophoneIcon className="w-8 h-8" />
        </button>
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fab-pop-in bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
          aria-label="Open Chatbot"
        >
          <ChatIcon className="w-8 h-8" />
        </button>
      </div>

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
      <LiveConversation isOpen={isLiveOpen} onClose={() => setIsLiveOpen(false)} />
    </div>
  );
}