'use client';

import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      const el = bar as HTMLElement; // Ép kiểu rõ ràng
      el.classList.add('animate-grow');
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);
  

  return (
    <div className="bg-gray-900/90 backdrop-blur-md text-white p-6 rounded-lg relative overflow-hidden" style={{ minHeight: '400px' }}>
      <h3 className="text-lg md:text-xl font-semibold tracking-wide z-10 relative">
        Attitude Score (Positive/Negative) in Mekong Delta Provinces
      </h3>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col space-y-4 mt-4">
        <div className="absolute left-0 top-0 h-[300px] md:h-[400px] flex flex-col justify-between text-sm text-gray-400">
          {[100, 80, 60, 40, 20, 0].map((value) => (
            <div key={value} className="relative flex items-center w-full">
              <span className="absolute -left-8 z-10">{value}</span>
              <div className="w-full h-px bg-gray-700/50 z-10"></div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-around items-end pl-10 h-[300px] md:h-[400px] relative z-10">
          {provinces.map((province) => (
            <div
              key={province.name}
              className="relative flex flex-col items-center w-10 md:w-14"
              onMouseEnter={() => setHoveredProvince(province)}
              onMouseLeave={() => setHoveredProvince(null)}
            >
              <div
                className="bar bg-gradient-to-t from-yellow-600 to-yellow-300 rounded-t-lg w-full transition-all duration-500 hover:from-yellow-500 hover:to-yellow-200 hover:shadow-[0_0_15px_rgba(234,179,8,0.6)]"
                style={{
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
        <div className="flex justify-around pl-10 text-sm text-gray-300 z-10">
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
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%), url(/main-background.png)',
        backgroundSize: 'cover',
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
      }}></div>
    </div>
  );
}