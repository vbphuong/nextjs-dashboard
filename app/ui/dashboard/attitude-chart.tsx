'use client';

import { useState } from 'react';

const provinces = [
  { name: 'Long An', score: 65 },
  { name: 'Tiền Giang', score: 72 },
  { name: 'Bến Tre', score: 58 },
  { name: 'Vĩnh Long', score: 45 },
  { name: 'Trà Vinh', score: 80 },
  { name: 'Hậu Giang', score: 62 },
  { name: 'Sóc Trăng', score: 53 },
  { name: 'Bạc Liêu', score: 70 },
  { name: 'Cà Mau', score: 48 },
  { name: 'Kiên Giang', score: 85 },
  { name: 'An Giang', score: 67 },
  { name: 'Đồng Tháp', score: 90 },
];

export default function AttitudeChart() {
  const maxScore = 100;
  const [hoveredProvince, setHoveredProvince] = useState<{ name: string; score: number } | null>(null);

  return (
    <div className="bg-gray-900/90 backdrop-blur-md text-white p-6 rounded-lg relative overflow-hidden" style={{ minHeight: '400px', position: 'relative' }}>
      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold tracking-wide z-10 relative mb-4">
        Attitude Score (Positive/Negative) in Mekong Delta Provinces
      </h3>
      
      {/* Geometric Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(0, 0, 0, 0.9)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 0.5)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
          <path d="M0,0 L100%,0 L100%,80% L0,100% Z" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" />
          <path d="M0,20% L100%,20% L100%,100% L0,80% Z" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" />
          <path d="M0,40% L100%,0 L100%,100% L0,60% Z" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" />
        </svg>
      </div>

      {/* Chart Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Y-Axis Labels and Grid Lines */}
        <div className="absolute left-0 top-0 h-[300px] md:h-[350px] flex flex-col justify-between text-sm text-gray-400 pr-4">
          {[100, 80, 60, 40, 20, 0].map((value) => (
            <div key={value} className="flex items-center">
              <span className="z-10 mr-4">{value}</span>
              <div className="flex-1 h-px bg-gray-700/50"></div>
            </div>
          ))}
        </div>

        {/* Bars */}
        <div className="flex-1 flex justify-between pl-16 h-[300px] md:h-[350px] relative z-10">
          {provinces.map((province, index) => (
            <div
              key={province.name}
              className="relative flex flex-col items-center w-10 md:w-14"
              onMouseEnter={() => setHoveredProvince(province)}
              onMouseLeave={() => setHoveredProvince(null)}
            >
              <div
                className="bg-gradient-to-t from-yellow-600 to-yellow-300 rounded-t-lg w-full"
                style={{
                  animation: `grow ${0.8 + index * 0.1}s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  transformOrigin: 'bottom',
                  transition: 'all 0.5s',
                  height: `${(province.score / maxScore) * 100}%`,
                }}
              />
              {hoveredProvince?.name === province.name && (
                <div className="absolute -top-8 bg-gray-800 text-white text-xs rounded-md px-2 py-1 shadow-lg z-20">
                  {province.score}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* X-Axis Labels - Fixed at Bottom */}
        <div className="absolute bottom-0 left-0 w-full pl-16 pb-2">
          <div className="flex justify-between text-sm text-gray-300 z-10">
            {provinces.map((province) => (
              <span
                key={province.name}
                className="text-center w-10 md:w-14 truncate"
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