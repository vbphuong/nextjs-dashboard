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
    <div className="bg-gray-900/90 backdrop-blur-md text-white animate-fadeIn border-none shadow-[0_0_15px_rgba(0,0,0,0.5)] p-6 rounded-lg">
      <h3 className="text-lg md:text-xl font-semibold tracking-wide">
        Attitude Score (Positive/Negative) in Mekong Delta Provinces
      </h3>
      <div className="relative flex flex-col space-y-4 mt-4">
        <div className="absolute left-0 top-0 h-[300px] md:h-[400px] flex flex-col justify-between text-sm text-gray-400">
          {[100, 80, 60, 40, 20, 0].map((value) => (
            <div key={value} className="relative flex items-center w-full">
              <span className="absolute -left-8">{value}</span>
              <div className="w-full h-px bg-gray-700/50"></div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-around items-end pl-10 h-[300px] md:h-[400px]">
          {provinces.map((province, index) => (
            <div
              key={province.name}
              className="relative flex flex-col items-center w-10 md:w-14"
              onMouseEnter={() => setHoveredProvince(province)}
              onMouseLeave={() => setHoveredProvince(null)}
            >
              <div
                className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg w-full transition-all duration-500 hover:from-blue-500 hover:to-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                style={{
                  height: `${(province.score / maxScore) * 100}%`,
                  animation: `growBar 0.8s ease-out ${index * 0.1}s forwards`,
                  transformOrigin: 'bottom',
                  transform: 'scaleY(0)',
                }}
              />
              {hoveredProvince?.name === province.name && (
                <div className="absolute -top-8 bg-gray-800 text-white text-xs rounded-md px-2 py-1 shadow-lg">
                  {province.score}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-around pl-10 text-sm text-gray-300">
          {provinces.map((province) => (
            <span
              key={province.name}
              className="text-center w-10 md:w-14 truncate"
              style={{ writingMode: 'horizontal-tb' }}
            >
              {province.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}