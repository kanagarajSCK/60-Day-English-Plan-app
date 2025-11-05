import React, { useRef, useState, useEffect } from 'react';
import { Day } from '../types';
import TtsButton from './TtsButton';
import { CheckCircleIcon, CircleIcon } from './Icons';
import MiniQuiz from './MiniQuiz';

interface DayCardProps {
  day: Day;
  isCompleted: boolean;
  onToggleComplete: (dayNumber: number) => void;
}

const usePrevious = (value: boolean): boolean | undefined => {
  // @FIX: The call to `useRef` was causing a TypeScript error "Expected 1 arguments, but got 0.".
  // Explicitly initializing it with `undefined` resolves the issue by satisfying an overload that expects an initial value and correctly types the ref's `current` property.
  const ref = useRef<boolean | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useOnScreen = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.01,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
};


const DayCard: React.FC<DayCardProps> = ({ day, isCompleted, onToggleComplete }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(cardRef);
  const [justCompleted, setJustCompleted] = useState(false);
  const prevIsCompleted = usePrevious(isCompleted);

  useEffect(() => {
    if (prevIsCompleted === false && isCompleted === true) {
      setJustCompleted(true);
      const timer = setTimeout(() => setJustCompleted(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isCompleted, prevIsCompleted]);

  const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-4">
      <h4 className="text-lg font-semibold text-cyan-400 mb-2">{title}</h4>
      <div className="text-gray-300 space-y-2">{children}</div>
    </div>
  );

  return (
    <div
      id={`day-${day.day}`}
      ref={cardRef}
      className={`relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border transition-all duration-700 ease-out transform hover:shadow-cyan-500/20 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isCompleted ? 'border-green-500/50 opacity-75' : 'border-gray-700'} ${justCompleted ? 'animate-pulse-green' : ''}`}
    >
      <button
        onClick={() => onToggleComplete(day.day)}
        className="absolute top-4 right-4 p-2 rounded-full group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {isCompleted ? (
          <CheckCircleIcon className="w-8 h-8 text-green-500 group-hover:text-green-400 transition-colors" />
        ) : (
          <CircleIcon className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors" />
        )}
      </button>

      <h3 className={`text-2xl font-bold pr-12 transition-colors ${isCompleted ? 'line-through text-gray-400' : 'text-white'}`}>
        Day {day.day}: {day.title}
      </h3>
      
      <Section title="Grammar">
        <p>{day.grammar}</p>
      </Section>

      {/* <Section title="Vocabulary">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="border-b border-gray-600">
              <tr>
                <th className="p-2">Word</th>
                <th className="p-2">Meaning</th>
                <th className="p-2">Example</th>
              </tr>
            </thead>
            <tbody>
              {day.vocabulary.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="p-2 font-semibold text-white">
                    <div className="flex items-center gap-2">
                      {item.word}
                      <TtsButton text={item.word} />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      {item.meaning}
                      <TtsButton text={item.meaning} />
                    </div>
                  </td>
                  <td className="p-2 italic">
                    <div className="flex items-center gap-2">
                      {item.example}
                      <TtsButton text={item.example} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section> */}

      {day.vocabulary.length > 0 && (
  <Section title="Vocabulary">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="border-b border-gray-600">
          <tr>
            <th className="p-2">Word</th>
            <th className="p-2">Meaning</th>
            <th className="p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          {day.vocabulary.map((item, index) => (
            <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50">
              <td className="p-2 font-semibold text-white">
                <div className="flex items-center gap-2">
                  {item.word}
                  <TtsButton text={item.word} />
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  {item.meaning}
                  <TtsButton text={item.meaning} />
                </div>
              </td>
              <td className="p-2 italic">
                <div className="flex items-center gap-2">
                  {item.example}
                  <TtsButton text={item.example} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Section>
)}

      
      <Section title="Speaking Practice">
        <div className="flex items-start gap-2">
           <p>{day.speakingPractice}</p>
           <TtsButton text={day.speakingPractice} />
        </div>
      </Section>
      
      <Section title="Daily Conversation">
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <p><span className="font-bold text-white">A:</span> {day.dailyConversation.a}</p>
          <p><span className="font-bold text-white">B:</span> {day.dailyConversation.b}</p>
        </div>
      </Section>
      
      <Section title="Mini-Exercise">
        {day.miniExercise.type === 'quiz' ? (
          <MiniQuiz
            key={day.day} // Add key to reset state when day changes
            exercise={day.miniExercise}
            onComplete={() => {
              if (!isCompleted) {
                onToggleComplete(day.day);
              }
            }}
          />
        ) : (
          <>
            <p className="font-semibold text-gray-100">{day.miniExercise.instruction}</p>
            <div className="mt-2 space-y-1">
              {(day.miniExercise.questions as string[]).map((q, index) => (
                <p key={index}>{q}</p>
              ))}
            </div>
          </>
        )}
      </Section>
    </div>
  );
};

export default DayCard;