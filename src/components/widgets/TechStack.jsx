// TechStack.jsx
import React from 'react';

export const TechStack = ({ primary, database, architecture, deployment }) => {
  return (
    <div className="my-6 border-l-2 border-accent pl-4">
      <h3 className="text-lg font-medium mb-3">Technology Stack</h3>
      <ul className="space-y-2 text-sm">
        <TechItem icon="code" label="Primary" value={primary} />
        <TechItem icon="database" label="Database" value={database} />
        <TechItem icon="layers" label="Architecture" value={architecture} />
        <TechItem icon="box" label="Deployment" value={deployment} />
      </ul>
    </div>
  );
};

const TechItem = ({ icon, label, value }) => {
  return (
    <li className="flex items-center gap-2">
      <span className="text-accent">{getIcon(icon)}</span>
      <span className="font-medium">{label}:</span> {value}
    </li>
  );
};

// Simple inline SVG icons
const getIcon = (name) => {
  switch (name) {
    case 'code':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'database':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'layers':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      );
    case 'box':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
      );
    default:
      return null;
  }
};