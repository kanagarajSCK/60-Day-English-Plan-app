
import { VocabularyItem } from '../types';

export const parseVocabularyTable = (markdown: string): VocabularyItem[] => {
  const lines = markdown.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split('|').map(h => h.trim().toLowerCase()).filter(Boolean);
  const dataLines = lines.slice(2);

  const wordIndex = headers.indexOf('word');
  const meaningIndex = headers.indexOf('meaning');
  const exampleIndex = headers.indexOf('example');
  
  if (wordIndex === -1 || meaningIndex === -1 || exampleIndex === -1) {
    console.error("Markdown table headers are incorrect.");
    return [];
  }

  return dataLines.map(line => {
    const cells = line.split('|').map(c => c.trim()).filter(Boolean);
    return {
      word: cells[wordIndex] || '',
      meaning: cells[meaningIndex] || '',
      example: cells[exampleIndex] || '',
    };
  });
};
