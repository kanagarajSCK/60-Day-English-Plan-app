
import React from 'react';
import { Week } from '../types';
import DayCard from './DayCard';

interface StudyPlanProps {
  data: Week[];
  completedDays: Set<number>;
  toggleDayCompletion: (dayNumber: number) => void;
}

const StudyPlan: React.FC<StudyPlanProps> = ({ data, completedDays, toggleDayCompletion }) => {
  return (
    <div className="space-y-12">
      {data.map((week) => (
        <section key={week.week} aria-labelledby={`week-${week.week}-heading`}>
          <div className="mb-8 text-center md:text-left">
            <h2 id={`week-${week.week}-heading`} className="text-3xl font-bold text-white">
              Week {week.week}: {week.title}
            </h2>
            <p className="mt-2 text-md italic text-gray-400">
              "{week.quote}"
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {week.days.map((day) => (
              <DayCard
                key={day.day}
                day={day}
                isCompleted={completedDays.has(day.day)}
                onToggleComplete={toggleDayCompletion}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default StudyPlan;