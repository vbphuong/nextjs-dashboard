'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Page() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: 'linear-gradient(180deg, #1e3a8a 0%, #000000 100%)',
      }}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        The World’s Leading AI-Powered{' '}
        <span
          className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Digital Data
        </span>{' '}
        Company
      </h1>

      {/* Log In Button */}
      <div className="flex justify-center mb-12">
        <Link
          href="/login"
          className="flex items-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors"
        >
          <span>Log in</span>
          <ArrowRightIcon className="w-5 md:w-6 ml-2" />
        </Link>
      </div>

      {/* Images */}
      <div className="relative w-full max-w-5xl flex justify-center items-center space-x-4">
        {/* Image 1 */}
        <img
          src="/introduce1.png"
          alt="Introduce 1"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform -rotate-6"
          style={{ opacity: 1.0 }}
        />

        {/* Image 2 */}
        <img
          src="/introduce2.png"
          alt="Introduce 2"
          className="w-64 h-96 object-cover rounded-lg shadow-lg"
          style={{ opacity: 0.9 }}
        />

        {/* Image 3 */}
        <img
          src="/introduce3.png"
          alt="Introduce 3"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform rotate-6"
          style={{ opacity: 0.8 }}
        />

        {/* Image 4 */}
        <img
          src="/introduce4.png"
          alt="Introduce 4"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform -rotate-3"
          style={{ opacity: 0.7 }}
        />

        {/* Image 5 */}
        <img
          src="/introduce5.png"
          alt="Introduce 5"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform rotate-3"
          style={{ opacity: 0.6 }}
        />
      </div>
    </div>
  );
}