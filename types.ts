export interface VocabularyItem {
  word: string;
  meaning: string;
  example: string;
}

export interface MiniExerciseQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export type MiniExercise = {
  type: 'quiz';
  instruction: string;
  questions: MiniExerciseQuestion[];
} | {
  type: 'writing';
  instruction: string;
  questions: string[]; // For writing, questions are just prompts.
}

export interface Day {
  day: number;
  title: string;
  grammar: string;
  vocabulary: VocabularyItem[];
  speakingPractice: string;
  dailyConversation: { a: string; b: string };
  miniExercise: MiniExercise;
}

export interface Week {
  week: number;
  title: string;
  quote: string;
  days: Day[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}