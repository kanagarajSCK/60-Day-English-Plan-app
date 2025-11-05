import React, { useState, useEffect } from 'react';
import { MiniExercise } from '../types';
import Confetti from './Confetti';

interface MiniQuizProps {
  exercise: Extract<MiniExercise, { type: 'quiz' }>;
  onComplete: () => void;
}

const MiniQuiz: React.FC<MiniQuizProps> = ({ exercise, onComplete }) => {
  const { instruction, questions } = exercise;
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSelectAnswer = (questionIndex: number, answer: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);

    if (currentScore === questions.length) {
        setShowConfetti(true);
        // Hide confetti after the animation is roughly over
        setTimeout(() => setShowConfetti(false), 6000);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setShowConfetti(false);
  };
  
  useEffect(() => {
    if (isSubmitted && score === questions.length) {
      // Use a timeout to allow the user to see the result before marking as complete
      const timer = setTimeout(() => {
        onComplete();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, score, questions.length, onComplete]);

  return (
    <div className="bg-gray-900/50 p-4 rounded-lg relative overflow-hidden">
      {showConfetti && <Confetti />}
      <p className="font-semibold text-gray-100">{instruction}</p>
      <div className="mt-4 space-y-6">
        {questions.map((q, qIndex) => (
          <div key={qIndex}>
            <p className="mb-2 text-white">{qIndex + 1}. {q.question}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((option, oIndex) => {
                const isSelected = selectedAnswers[qIndex] === option;
                const isCorrect = option === q.correctAnswer;
                
                let buttonClass = "px-3 py-1.5 text-sm rounded-md border transition-all duration-200 transform disabled:cursor-not-allowed";
                
                if (isSubmitted) {
                    if (isCorrect) {
                        buttonClass += " bg-green-500/20 border-green-500 text-white font-semibold";
                    } else if (isSelected) {
                        buttonClass += " bg-red-500/20 border-red-500 text-white line-through";
                    } else {
                        buttonClass += " border-gray-600 text-gray-400 opacity-60";
                    }
                } else {
                    buttonClass += isSelected 
                        ? " bg-cyan-500/20 border-cyan-400 text-white" 
                        : " border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-cyan-500 hover:scale-105";
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelectAnswer(qIndex, option)}
                    disabled={isSubmitted}
                    className={buttonClass}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length !== questions.length}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            Check Answers
          </button>
        ) : (
          <div className="p-4 rounded-lg bg-gray-800 animate-pop-in-result">
            <h5 className="text-xl font-bold">
                {score === questions.length ? '🎉 Excellent! 🎉' : 'Keep Practicing!'}
            </h5>
            <p className="text-lg mt-1">Your score: <span className="font-bold text-cyan-400">{score} / {questions.length}</span></p>
            <button
                onClick={handleReset}
                className="mt-4 bg-gray-600 text-white px-4 py-1.5 rounded-md hover:bg-gray-500 transition-colors text-sm"
            >
                Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniQuiz;