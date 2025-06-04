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
      {/* Top Padding 20% */}
      <div className="pt-[10%]"></div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        HopeThatIWillPass team <br />
        <span
          className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Digital Data
        </span>{' '}
        Analyzing Platform
      </h1>

      {/* Log In Button */}
      <div className="flex justify-center mb-12">
        <Link
          href="/login"
          className="flex items-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors"
        >
          <span>Get Started</span>
          <ArrowRightIcon className="w-5 md:w-6 ml-2" />
        </Link>
      </div>

      {/* Images */}
      <div className="relative w-full max-w-5xl flex justify-center items-center space-x-4 mb-[10%]">
        {/* Image 1 */}
        <img
          src="/homepage/introduce1.png"
          alt="Introduce 1"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform -rotate-6"
          style={{ opacity: 1.0 }}
        />

        {/* Image 2 */}
        <img
          src="/homepage/introduce2.png"
          alt="Introduce 2"
          className="w-64 h-96 object-cover rounded-lg shadow-lg"
          style={{ opacity: 1.0 }}
        />

        {/* Image 3 */}
        <img
          src="/homepage/introduce3.png"
          alt="Introduce 3"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform rotate-6"
          style={{ opacity: 1.0 }}
        />

        {/* Image 4 */}
        <img
          src="/homepage/introduce4.png"
          alt="Introduce 4"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform -rotate-3"
          style={{ opacity: 1.0 }}
        />

        {/* Image 5 */}
        <img
          src="/homepage/introduce5.png"
          alt="Introduce 5"
          className="w-64 h-96 object-cover rounded-lg shadow-lg transform rotate-3"
          style={{ opacity: 1.0 }}
        />
      </div>

      {/* Logo Section */}
      <div className="w-full py-4 flex flex-col items-center">
        {/* Text Line */}
        <div className="text-white text-lg mb-2">Trusted by the Best and Brightest Digital Brands</div>
        {/* Logo Line with Marquee */}
        <div className="relative overflow-hidden w-full bg-transparent">
          <div className="animate-marquee whitespace-nowrap">
            <img src="/logos/google.png" alt="Google" className="inline-block h-10 mx-8" />
            <img src="/logos/shopee.png" alt="Shopee" className="inline-block h-10 mx-8" />
            <img src="/logos/lazada.png" alt="Lazada" className="inline-block h-10 mx-8" />
            <img src="/logos/tiktok.png" alt="TikTok" className="inline-block h-10 mx-8" />
            <img src="/logos/facebook.png" alt="Facebook" className="inline-block h-10 mx-8" />
            <img src="/logos/amazon.png" alt="Amazon" className="inline-block h-10 mx-8" />
            <img src="/logos/gs1.png" alt="GS1" className="inline-block h-10 mx-8" />
            <img src="/logos/fao.png" alt="FAO" className="inline-block h-10 mx-8" />
            <img src="/logos/gso.png" alt="GSO" className="inline-block h-10 mx-8" />
            {/* Duplicate for seamless loop */}
            <img src="/logos/google.png" alt="Google" className="inline-block h-10 mx-8" />
            <img src="/logos/shopee.png" alt="Shopee" className="inline-block h-10 mx-8" />
            <img src="/logos/lazada.png" alt="Lazada" className="inline-block h-10 mx-8" />
            <img src="/logos/tiktok.png" alt="TikTok" className="inline-block h-10 mx-8" />
            <img src="/logos/facebook.png" alt="Facebook" className="inline-block h-10 mx-8" />
            <img src="/logos/amazon.png" alt="Amazon" className="inline-block h-10 mx-8" />
            <img src="/logos/gs1.png" alt="GS1" className="inline-block h-10 mx-8" />
            <img src="/logos/fao.png" alt="FAO" className="inline-block h-10 mx-8" />
            <img src="/logos/gso.png" alt="GSO" className="inline-block h-10 mx-8" />
          </div>
        </div>
      </div>
    </div>
  );
}