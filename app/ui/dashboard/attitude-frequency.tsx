'use client';

import { useState } from 'react';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const data = [45, 50, 55, 60, 65, 70, 68, 72, 75, 70, 65, 60];

export default function AttitudeFrequency() {
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null);

  const generateLineChartPath = (data: number[]) => {
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue || 1;
    const width = 100;
    const height = 200;
    const stepX = width / (data.length - 1);

    const points = data.map((value, index) => {
      const x = index * stepX;
      const y = height - ((value - minValue) / range) * (height - 20);
      return `${x},${y}`;
    });

    return `M${points.join(' L')}`;
  };

  return (
    <div className="bg-gray-900/90 backdrop-blur-md text-white p-6 rounded-lg relative overflow-hidden" style={{ minHeight: '400px', position: 'relative' }}>
      <h3 className="text-lg md:text-xl font-semibold tracking-wide z-10 relative mb-4">
        Attitude Frequency - January - December 2025
      </h3>
      
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(0, 0, 0, 0.9)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 0.5)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
          <path d="M0,0 L100%,0 L100%,80% L0,100% Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
          <path d="M0,20% L100%,20% L100%,100% L0,80% Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
          <path d="M0,40% L100%,0 L100%,100% L0,60% Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="absolute left-0 top-0 h-[200px] flex flex-col justify-between text-sm text-gray-400 pr-4">
          {[80, 60, 40, 20, 0].map((value) => (
            <div key={value} className="flex items-center">
              <span className="z-10 mr-4">{value}</span>
              <div className="flex-1 h-px bg-gray-700/50"></div>
            </div>
          ))}
        </div>

        <div className="relative pl-16 h-[200px] z-10">
          <svg width="100%" height="200" className="w-full">
            <path
              d={generateLineChartPath(data)}
              fill="none"
              stroke="#60A5FA"
              strokeWidth="2"
            />
            {data.map((value, index) => {
              const maxValue = Math.max(...data);
              const minValue = Math.min(...data);
              const range = maxValue - minValue || 1;
              const x = (index / (data.length - 1)) * 100;
              const y = 200 - ((value - minValue) / range) * (200 - 20);
              return (
                <circle
                  key={index}
                  cx={`${x}%`}
                  cy={`${y}px`}
                  r="4"
                  fill="#60A5FA"
                  onMouseEnter={() => setHoveredMonth(months[index])}
                  onMouseLeave={() => setHoveredMonth(null)}
                />
              );
            })}
          </svg>
          {hoveredMonth && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 shadow-lg z-20">
              {hoveredMonth}: {data[months.indexOf(hoveredMonth)]}
            </div>
          )}
        </div>

        <div className="flex justify-between pl-16 text-sm text-gray-300 mt-2 z-10">
          {months.map((month) => (
            <span key={month} className="w-8 text-center truncate">
              {month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}