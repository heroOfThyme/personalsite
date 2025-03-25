// PerformanceMetrics.jsx
import React from 'react';

export const PerformanceMetrics = ({ lighthouse, metrics }) => {
  return (
    <div className="my-6">
      <h3 className="text-lg font-medium mb-3">Performance Metrics</h3>
      
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
        <div className="col-span-2">
          <h4 className="text-base font-medium mb-2">Lighthouse Scores</h4>
          <div className="space-y-2">
            <MetricBar 
              label="Performance" 
              value={lighthouse.performance} 
            />
            <MetricBar 
              label="Accessibility" 
              value={lighthouse.accessibility} 
            />
            <MetricBar 
              label="Best Practices" 
              value={lighthouse.bestPractices} 
            />
            <MetricBar 
              label="SEO" 
              value={lighthouse.seo} 
            />
          </div>
        </div>
        
        <div className="col-span-2 mt-2">
          <h4 className="text-base font-medium mb-2">Core Web Vitals</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
            <MetricItem label="FCP" value={metrics.fcp} />
            <MetricItem label="LCP" value={metrics.lcp} />
            <MetricItem label="CLS" value={metrics.cls} />
            <MetricItem label="TTFB" value={metrics.ttfb} />
            <MetricItem label="TTI" value={metrics.tti} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricBar = ({ label, value }) => {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full bg-gray-200 h-1.5 rounded-sm">
        <div 
          className="h-1.5 rounded-sm bg-accent" 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

const MetricItem = ({ label, value }) => {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-xs text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};