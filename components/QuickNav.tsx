import React, { useState, useRef, useEffect } from 'react';
import { Week } from '../types';
import { CheckCircleIcon } from './Icons';

interface QuickNavProps {
  data: Week[];
  completedDays: Set<number>;
}

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const QuickNav: React.FC<QuickNavProps> = ({ data, completedDays }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  const allDays = data.flatMap(week => week.days);

  return (
    <nav className="sticky top-0 z-40 bg-gray-800/80 backdrop-blur-lg shadow-lg border-b border-gray-700">
      <div className="container mx-auto px-4 py-2">
        <div className="relative" ref={navRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <span>Jump to a day...</span>
            <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`absolute top-full left-0 right-0 mt-2 bg-gray-700 border border-gray-600 rounded-md shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="max-h-72 overflow-y-auto">
              {allDays.map(day => (
                <li key={day.day}>
                  <a
                    href={`#day-${day.day}`}
                    onClick={(e) => handleNavClick(e, `day-${day.day}`)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-200 hover:bg-cyan-600 hover:text-white transition-colors"
                  >
                    <span>
                      <span className="font-bold">Day {day.day}:</span> {day.title}
                    </span>
                    {completedDays.has(day.day) && (
                      <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default QuickNav;