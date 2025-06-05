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
          <path d="M0,0 L100%,0 L100%,80% L0,100% Z" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" />
          <path d="M0,20% L100%,20% L100%,100% L0,80% Z" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" />
          <path d="M0,40% L100%,0 L100%,100% L0,60% Z" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" />
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

        <div className="relative flex-1 pl-16 h-[300px] md:h-[350px] z-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            {provinces.map((province, index) => {
              const barWidth = 100 / provinces.length;
              const barHeight = (province.score / maxScore) * 100;
              const xPosition = (index * barWidth) + (barWidth * 0.2);
              const barActualWidth = barWidth * 0.6;

              return (
                <g key={province.name}>
                  <rect
                    x={`${xPosition}%`}
                    y={`${120 - barHeight}%`}
                    width={`${barActualWidth}%`}
                    height={`${barHeight}%`}
                    fill="url(#barGradient)"
                    className="transition-all duration-500 hover:fill-[url(#barHoverGradient)] hover:shadow-[0_0_15px_rgba(234,179,8,0.6)]"
                    onMouseEnter={() => setHoveredProvince(province)}
                    onMouseLeave={() => setHoveredProvince(null)}
                    style={{
                      animation: `grow ${0.8 + index * 0.1}s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                      transformOrigin: 'bottom',
                    }}
                  />
                  {hoveredProvince?.name === province.name && (
                    <text
                      x={`${xPosition + barActualWidth / 2}%`}
                      y={`${100 - barHeight - 5}%`}
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      className="z-20"
                    >
                      {province.score}
                    </text>
                  )}
                </g>
              );
            })}
            <defs>
              <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FDE68A', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="barHoverGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FEF3C7', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full pl-16 pt-8">
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