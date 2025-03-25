// StackComparison.jsx
import React from 'react';

export const StackComparison = ({ frameworks }) => {
  return (
    <div className="my-6">
      <h3 className="text-lg font-medium mb-3">Framework Comparison</h3>
      <div className="space-y-4">
        {frameworks.map((framework, index) => (
          <FrameworkCard
            key={index}
            name={framework.name}
            pros={framework.pros}
            cons={framework.cons}
            isSelected={framework.name === "Astro"}
          />
        ))}
      </div>
    </div>
  );
};

const FrameworkCard = ({ name, pros, cons, isSelected }) => {
  return (
    <div className={`border-l-2 pl-3 ${isSelected ? 'border-accent' : 'border-gray-200'}`}>
      <div className="flex items-center">
        <h4 className="text-base font-medium">{name}</h4>
        {isSelected && (
          <span className="ml-2 text-xs text-accent border border-accent rounded-sm px-1">
            Selected
          </span>
        )}
      </div>
      
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div>
          <h5 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Pros</h5>
          <ul className="list-disc ml-4 space-y-1 text-xs">
            {pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Cons</h5>
          <ul className="list-disc ml-4 space-y-1 text-xs">
            {cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};