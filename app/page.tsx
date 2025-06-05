"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const scrollLeft = () => {
    if (cardsRef.current) {
      console.log("Scrolling left"); // Debug
      cardsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      console.log("cardsRef is not defined"); // Debug
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      console.log("Scrolling right"); // Debug
      cardsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    } else {
      console.log("cardsRef is not defined"); // Debug
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: "linear-gradient(180deg, #1e3a8a 0%, #000000 100%)",
      }}
    >
      {/* Top Padding 10% */}
      <div className="pt-[10%]"></div>

      {/* Title (2 Lines) */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        HopeThatIWillPass team <br />
        <span
          className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Digital Data
        </span>{" "}
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
      <div className="w-full py-4 flex flex-col items-center pb-5">
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

      {/* AI Dream Team Section */}
      <div
        ref={sectionRef}
        className="w-full py-12 opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
      >
        <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text mb-8">
          Meet the AI Dream Team
        </h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 z-10"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 z-10"
          >
            &gt;
          </button>
          {/* Scrollable Cards Container */}
          <div
            ref={cardsRef}
            className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide snap-x snap-mandatory"
          >
            {/* Main Card (Large) */}
            <div className="min-w-[400px] bg-white/10 rounded-lg p-6 flex flex-col items-center text-center snap-center">
              <img
                src="/homepage/idea1.png"
                alt="AI Expert"
                className="w-40 h-40 mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-300">AI Expert</h3>
              <p className="text-gray-300 mt-2">
                An AI expert for every area of your business. Put Similarweb's digital insights to work in a click with our AI-powered experts.
              </p>
              <button className="mt-4 bg-cyan-500 text-white py-2 px-4 rounded-full hover:bg-cyan-600">
                Book a demo
              </button>
              <button className="mt-2 text-cyan-500 underline">Learn more</button>
            </div>
            {/* Additional Cards */}
            <div className="min-w-[300px] bg-white/10 rounded-lg p-6 flex flex-col items-center text-center snap-center">
              <img
                src="/homepage/idea2.png"
                alt="Trend Spotter"
                className="w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold text-green-300">Trend Spotter</h3>
              <p className="text-gray-300 mt-2">
                Spots trends mainstream. Detects spikes you can act on.
              </p>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
                Book a demo
              </button>
            </div>
            <div className="min-w-[300px] bg-white/10 rounded-lg p-6 flex flex-col items-center text-center snap-center">
              <img
                src="/homepage/idea3.png"
                alt="Data Analyst"
                className="w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-300">Data Analyst</h3>
              <p className="text-gray-300 mt-2">
                Analyzes data with precision for actionable insights.
              </p>
              <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600">
                Book a demo
              </button>
            </div>
            <div className="min-w-[300px] bg-white/10 rounded-lg p-6 flex flex-col items-center text-center snap-center">
              <img
                src="/homepage/idea4.png"
                alt="Insight Generator"
                className="w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold text-teal-300">Insight Generator</h3>
              <p className="text-gray-300 mt-2">
                Generates deep insights from complex data sets.
              </p>
              <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600">
                Book a demo
              </button>
            </div>
            <div className="min-w-[300px] bg-white/10 rounded-lg p-6 flex flex-col items-center text-center snap-center">
              <img
                src="/homepage/idea5.png"
                alt="Strategy Advisor"
                className="w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-300">Strategy Advisor</h3>
              <p className="text-gray-300 mt-2">
                Advises on strategies based on market trends.
              </p>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}