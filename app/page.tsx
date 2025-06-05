"use client";

import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const advancedSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // Biến trạng thái để điều chỉnh gradient
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  useEffect(() => {
    const advancedSection = advancedSectionRef.current;
    if (!advancedSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Chỉ bắt đầu chuyển đổi khi cuộn xuống gần section "Advanced Data Services"
        const progress = Math.max(0, entry.intersectionRatio - 0.2); // Bắt đầu khi 20% section hiện lên
        setScrollProgress(progress);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    observer.observe(advancedSection);

    return () => {
      if (advancedSection) observer.unobserve(advancedSection);
    };
  }, []);

  const scrollLeft = () => {
    if (cardsRef.current) {
      console.log("Scrolling left");
      cardsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      console.log("cardsRef is not defined");
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      console.log("Scrolling right");
      cardsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    } else {
      console.log("cardsRef is not defined");
    }
  };

    // Tính toán màu nền dựa trên scrollProgress
    const startColor = "rgba(30, 58, 138, 1)"; // #1e3a8a (blue-900)
    const endColor = "rgba(255, 255, 255, 1)"; // #ffffff (white)
    const blackColor = "rgba(0, 0, 0, 1)"; // #000000 (black)
  
    // Tạo gradient động, chỉ chuyển đổi khi scrollProgress > 0
    const backgroundStyle = {
      background: scrollProgress > 0.9
        ? endColor // Khi cuộn gần hết, chuyển thành trắng hoàn toàn
        : scrollProgress > 0
        ? `linear-gradient(
            180deg,
            ${
              scrollProgress < 0.5
                ? `rgba(30, 58, 138, ${1 - scrollProgress * 2}), rgba(59, 130, 246, ${scrollProgress * 2})`
                : `rgba(59, 130, 246, ${(1 - (scrollProgress - 0.5) * 2)}), rgba(255, 255, 255, ${(scrollProgress - 0.5) * 2})`
            } 0%,
            ${
              scrollProgress < 0.5
                ? `rgba(0, 0, 0, ${1 - scrollProgress * 2}), rgba(59, 130, 246, ${scrollProgress * 2})`
                : `rgba(59, 130, 246, ${(1 - (scrollProgress - 0.5) * 2)}), rgba(255, 255, 255, ${(scrollProgress - 0.5) * 2})`
            } 100%
          )`
        : `linear-gradient(180deg, ${startColor} 0%, ${blackColor} 100%)`,
      transition: "background 0.5s ease",
    };

  // Điều chỉnh màu chữ dựa trên scrollProgress
  const textColorClass = scrollProgress > 0.7 ? "text-gray-800" : "text-white";

  return (
    <>
      <div
        className={`relative flex flex-col items-center justify-center p-6 ${textColorClass}`}
        style={backgroundStyle}
      >
        {/* Top Padding 10% */}
        <div className="pt-[10%]"></div>

        {/* Title (2 Lines) */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          HopeThatIWillPass team&#39;s <br />
          <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
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
          <div className="text-lg mb-2">Trusted by the Best and Brightest Digital Brands</div>
          <div className="relative overflow-hidden w-full bg-transparent">
            <div className="animate-marquee whitespace-nowrap">
              {[
                "google.png",
                "shopee.png",
                "lazada.png",
                "tiktok.png",
                "facebook.png",
                "amazon.png",
                "gs1.png",
                "fao.png",
                "gso.png",
              ].map((logo, index) => (
                <img
                  key={index}
                  src={`/logos/${logo}`}
                  alt={logo.split(".")[0]}
                  className="inline-block h-10 mx-8"
                />
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "google.png",
                "shopee.png",
                "lazada.png",
                "tiktok.png",
                "facebook.png",
                "amazon.png",
                "gs1.png",
                "fao.png",
                "gso.png",
              ].map((logo, index) => (
                <img
                  key={index + 9}
                  src={`/logos/${logo}`}
                  alt={logo.split(".")[0]}
                  className="inline-block h-10 mx-8"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Access 5 Different Sides Section */}
        <div
          ref={sectionRef}
          className="w-full mt-[10%] py-12 opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
        >
          <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text mb-8">
            Access 5 Different Sides
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all z-10 shadow-md"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all z-10 shadow-md"
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
            <div
              ref={cardsRef}
              className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide snap-x snap-mandatory"
            >
              {[
                {
                  title: "Customer's Experience & Behaviour",
                  description:
                    "Customer's feelings is one of the most important factor that should be enhance when mentioning about market. Their attitude is also crucial to contribute to good traditional value.",
                  color: "cyan-300",
                  buttonColor: "blue-600",
                  hoverButtonColor: "blue-700",
                  index: 1,
                },
                {
                  title: "Product's Quality & Fair Competition",
                  description: "This approach not only protects buyer's right, but also form appropriate environment for any suppliers or sellers",
                  color: "green-300",
                  buttonColor: "orange-500",
                  hoverButtonColor: "orange-600",
                  index: 2,
                },
                {
                  title: "Environment Forecast and Suggestion",
                  description: "Environmental issue is the most detrimental aspect to Mekong Delta when you find something destroying this region's market.",
                  color: "purple-300",
                  buttonColor: "green-500",
                  hoverButtonColor: "green-600",
                  index: 3,
                },
                {
                  title: "Market Trends",
                  description: "Finding some products that are miscarried from the trends can support both sellers and buyers while keeping indeginous value of this region",
                  color: "teal-300",
                  buttonColor: "blue-500",
                  hoverButtonColor: "blue-600",
                  index: 4,
                },
                {
                  title: "Supply Chain",
                  description: "It is essential to provide people a well-designed flow of products or people. Recognizing benefits of this aspect helps optimization significantly",
                  color: "yellow-300",
                  buttonColor: "green-500",
                  hoverButtonColor: "green-600",
                  index: 5,
                },
              ].map((card) => (
                <div
                  key={card.index}
                  className="min-w-[900px] bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-6 flex items-center text-center snap-center shadow-[0_0_15px_rgba(0,191,255,0.3)]"
                  onMouseEnter={() => setHoveredCard(card.index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="w-1/2 p-4">
                    <h3 className={`text-3xl font-bold text-${card.color} mb-2`}>{card.title}</h3>
                    <p className="text-gray-400 mb-4">{card.description}</p>
                    <button
                      className={`bg-${card.buttonColor} text-white py-2 px-6 rounded-full hover:bg-${card.hoverButtonColor} mr-4`}
                      onClick={() => window.location.href = "/login"}
                    >
                      Book a demo
                    </button>
                    <button className={`text-${card.color} underline`} 
                    onClick={() => window.location.href = "/login"}
                    >Learn more →</button>
                  </div>
                  <div className="w-1/2">
                    <img
                      src={
                        hoveredCard === card.index
                          ? `/homepage/idea${card.index}.gif`
                          : `/homepage/idea${card.index}.png`
                      }
                      alt={card.title}
                      className="w-[400px] h-[400px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Khoảng trống 10% trước Advanced Data Services */}
        <div className="pt-[10%]"></div>

        {/* Advanced Data Services Section */}
        <div
          ref={advancedSectionRef}
          className="w-full py-12 transition-all duration-1000 ease-in-out"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Advanced Data Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Custom data solutions for your enterprise needs
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Data-as-a-Service (API) */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
              <img
                src="/homepage/advance1.png"
                alt="Data-as-a-Service (API)"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Data-as-a-Service (API)
              </h3>
              <p className="text-gray-600 mb-4">
                Integrate Similarweb data into your products and workflows with our flexible APIs.
              </p>
              <button className="text-blue-500 underline">Learn more →</button>
            </div>

            {/* Card 2: Advisory Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
              <img
                src="/homepage/advance2.png"
                alt="Advisory Services"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advisory Services</h3>
              <p className="text-gray-600 mb-4">
                Solve your toughest challenges with our digital experts and custom insights.
              </p>
              <button className="text-blue-500 underline">Learn more →</button>
            </div>

            {/* Card 3: Data Partnerships (OEM) */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
              <img
                src="/homepage/advance3.png"
                alt="Data Partnerships (OEM)"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Data Partnerships (OEM)
              </h3>
              <p className="text-gray-600 mb-4">
                Power your products with our data through strategic partnerships.
              </p>
              <button className="text-blue-500 underline">Learn more →</button>
            </div>
          </div>
        </div>

        {/* Khoảng trống 10% trước Footer */}
        <div className="mt-[10%]"></div>
      </div>

      {/* Footer - Đặt bên trong Fragment nhưng ngoài div chính để không bị ảnh hưởng bởi padding */}
      <footer className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-6">
        <div className="max-w-full px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">HopeThatIWillPass</h3>
              <p className="text-sm text-gray-300">Empowering your data journey with innovative solutions.</p>
            </div>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 HopeThatIWillPass Team. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}