'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: 'linear-gradient(180deg, #1e3a8a 0%, #000000 100%)',
      }}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        The World’s Leading AI-Powered <br />
        <span className="text-orange-500">Digital Data Company</span>
      </h1>

      {/* Replace Search Bar with Orange Log In Button */}
      <div className="flex justify-center mb-12">
        <Link
          href="/login"
          className="flex items-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors"
        >
          <span>Log in</span>
          <ArrowRightIcon className="w-5 md:w-6 ml-2" />
        </Link>
      </div>

      {/* Dashboard Cards (Static Mockup) */}
      <div className="relative w-full max-w-5xl flex justify-center items-center">
        {/* Card 1 - Website Performance */}
        <div className="absolute -left-20 top-0 bg-white/90 rounded-lg shadow-lg p-4 w-64 transform -rotate-6">
          <h3 className="text-gray-800 font-semibold">Website Performance</h3>
          <div className="text-gray-600 mt-2">
            <p>Organic Search: 95.26M</p>
            <p>Paid Search: 6.24M</p>
          </div>
        </div>

        {/* Card 2 - Main Dashboard */}
        <div className="relative bg-white/95 rounded-lg shadow-lg p-6 w-full max-w-2xl z-10">
          <h2 className="text-gray-800 font-semibold text-lg mb-4">nike.com</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-600">Traffic & Engagement</h3>
              <p className="text-gray-800 font-semibold">39.2M</p>
            </div>
            <div>
              <h3 className="text-gray-600">Device Distribution</h3>
              <p className="text-gray-800">Desktop: 32.5%</p>
              <p className="text-gray-800">Mobile Web: 75.1%</p>
            </div>
            <div>
              <h3 className="text-gray-600">Global Rank</h3>
              <p className="text-gray-800 font-semibold">#244</p>
            </div>
            <div>
              <h3 className="text-gray-600">Industry Rank</h3>
              <p className="text-gray-800 font-semibold">#3</p>
            </div>
          </div>
        </div>

        {/* Card 3 - Top Countries */}
        <div className="absolute -right-20 top-0 bg-white/90 rounded-lg shadow-lg p-4 w-64 transform rotate-6">
          <h3 className="text-gray-800 font-semibold">Top Countries</h3>
          <div className="text-gray-600 mt-2">
            <p>United States: 32.5%</p>
            <p>India: 12.4%</p>
            <p>Germany: 8.7%</p>
          </div>
        </div>
      </div>
    </div>
  );
}