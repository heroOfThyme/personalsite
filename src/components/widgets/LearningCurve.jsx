// LearningCurve.jsx
import React from 'react';

export const LearningCurve = ({ stage1, stage2, stage3, stage4 }) => {
  return (
    <div className="my-6">
      <h3 className="text-lg font-medium mb-3">Learning Journey</h3>
      <ol className="space-y-3 ml-1">
        <Stage number="1" description={stage1} />
        <Stage number="2" description={stage2} />
        <Stage number="3" description={stage3} />
        <Stage number="4" description={stage4} />
      </ol>
    </div>
  );
};

const Stage = ({ number, description }) => {
  return (
    <li className="border-l border-accent pl-4 ml-3 relative">
      <div className="absolute -left-3.5 mt-1.5">
        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white text-xs">
          {number}
        </span>
      </div>
      <p className="text-sm">{description}</p>
    </li>
  );
};