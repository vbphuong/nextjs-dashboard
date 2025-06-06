'use client';

import { useState } from 'react';

const provinces = [
  { name: 'Long An', score: 65, trend: [60, 62, 65, 63, 65] },
  { name: 'Tiền Giang', score: 72, trend: [70, 71, 73, 72, 72] },
  { name: 'Bến Tre', score: 58, trend: [55, 56, 58, 57, 58] },
  { name: 'Vĩnh Long', score: 45, trend: [50, 48, 46, 45, 45] },
  { name: 'Trà Vinh', score: 80, trend: [75, 77, 79, 80, 80] },
  { name: 'Hậu Giang', score: 62, trend: [60, 61, 62, 61, 62] },
  { name: 'Sóc Trăng', score: 53, trend: [55, 54, 53, 53, 53] },
  { name: 'Bạc Liêu', score: 70, trend: [65, 67, 69, 70, 70] },
  { name: 'Cà Mau', score: 48, trend: [50, 49, 48, 48, 48] },
  { name: 'Kiên Giang', score: 85, trend: [80, 82, 84, 85, 85] },
  { name: 'An Giang', score: 67, trend: [65, 66, 67, 67, 67] },
  { name: 'Đồng Tháp', score: 90, trend: [85, 87, 89, 90, 90] },
];

export default function AttitudeChart() {
  const maxScore = 100;
  const [hoveredProvince, setHoveredProvince] = useState<{ name: string; score: number; trend: number[] } | null>(null);

  const generateLineChartPath = (trend: number[]) => {
    const maxTrend = Math.max(...trend);
    const minTrend = Math.min(...trend);
    const range = maxTrend - minTrend || 1;
    const width = 120;
    const height = 60;
    const stepX = width / (trend.length - 1);

    const points = trend.map((value, index) => {
      const x = index * stepX;
      const y = height - ((value - minTrend) / range) * (height - 10);
      return `${x},${y}`;
    });

    return `M${points.join(' L')}`;
  };

  return (
    <div className="bg-gray-900/90 backdrop-blur-md text-white p-6 rounded-lg relative overflow-hidden" style={{ minHeight: '400px', position: 'relative' }}>
      <h3 className="text-lg md:text-xl font-semibold tracking-wide z-10 relative mb-4">
        Attitude Score (Positive/Negative) in Mekong Delta Provinces
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
        <div className="absolute left-0 top-0 h-[300px] md:h-[350px] flex flex-col justify-between text-sm text-gray-400 pr-4">
          {[100, 80, 60, 40, 20, 0].map((value) => (
            <div key={value} className="flex items-center">
              <span className="z-10 mr-4">{value}</span>
              <div className="flex-1 h-px bg-gray-700/50"></div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-between items-end pl-16 h-[300px] md:h-[350px] relative z-10">
          {provinces.map((province, index) => (
            <div
              key={province.name}
              className="relative flex flex-col items-center w-10 md:w-14"
              onMouseEnter={() => setHoveredProvince(province)}
              onMouseLeave={() => setHoveredProvince(null)}
            >
              <div
                className="bg-gradient-to-t from-blue-400 to-blue-100 rounded-t-lg w-full"
                style={{
                  height: `${(province.score / maxScore) * 325}px`,
                  minHeight: '0',
                  animation: `grow ${0.8 + index * 0.1}s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  transformOrigin: 'bottom',
                }}
              />
              {hoveredProvince?.name === province.name && (
                <div className="absolute -top-20 bg-gray-800 text-white text-xs rounded-md p-2 shadow-lg z-20 w-40">
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold">{province.name}</span>
                    <span>Score: {province.score}</span>
                    <svg width="120" height="60" className="mt-1">
                      <path
                        d={generateLineChartPath(province.trend)}
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative left-0 w-full pl-16 pb-2 mt-6 overflow-visible z-10">
          <div className="flex justify-between text-sm text-gray-300 z-10">
            {provinces.map((province) => (
              <span
                key={province.name}
                className="text-center w-8 md:w-12 truncate"
              >
                {province.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}