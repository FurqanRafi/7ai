"use client";
import { AppContext } from "@/Context/AppContext";
import Link from "next/link";
import React, { useContext } from "react";

const HeroSection = () => {
  const { hero, loading } = useContext(AppContext);

  if (loading || !hero) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-700 via-purple-900 to-black">
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image - Full colorful waves */}
      <div className="absolute inset-0">
        <img
          src="/heroimg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0124]/10 via-[#0f0124]/80 to-[#0f0124]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between py-12 lg:py-16">
        {/* Main Hero Content */}
        <div className="flex-1 MyContainer flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
              {/* Left Side - Text Content (wider) with fade animation */}
              <div className="lg:col-span-7 space-y-6 lg:space-y-8">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl mt-32 leading-tight text-white animate-fade-in">
                  {hero?.title || ""}
                </h1>

                <div className="flex items-center gap-4 animate-slide-up">
                  <Link
                    href={hero?.buttons?.btnLink || "#"}
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4 rounded-full transition-all duration-300 shadow-lg whitespace-nowrap"
                  >
                    {hero?.buttons?.btnname || ""}
                  </Link>

                  <p className="text-base lg:text-2xl text-white/90 leading-relaxed pt-2">
                    {hero?.description || ""}
                  </p>
                </div>
              </div>

              {/* Right Side - AI Head Image with slide from right animation */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-28 animate-slide-right">
                <img
                  src={hero?.heroimg}
                  alt="AI Head"
                  className="w-full max-w-xs lg:max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards with slide up animation */}
        <div className="inset-0 relative z-50 w-full h-full backdrop-blur-7xl -mt-2 animate-slide-up-delayed">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-2">
              {hero?.icons?.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-4 lg:p-5"
                  style={{
                    animation: `slideUpStagger 0.8s ease-out ${
                      index * 0.2
                    }s both`,
                  }}
                >
                  {/* Icon Square */}
                  <div className="flex-shrink-0 w-15 h-15 lg:w-20 lg:h-20 bg-purple-600 rounded-2xl flex items-center justify-center">
                    {icon.iconimg && (
                      <img
                        src={icon.iconimg}
                        alt="Icon"
                        className="w-7 h-7 lg:w-13 lg:h-13 object-contain brightness-0 invert"
                      />
                    )}
                  </div>

                  {/* Text */}
                  <p className="text-white text-sm lg:text-2xl font-medium leading-snug">
                    {icon.iconDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpStagger {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-out;
        }

        .animate-slide-right {
          animation: slideRight 1s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s both;
        }

        .animate-slide-up-delayed {
          animation: slideUp 1s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
