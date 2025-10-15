"use client";
import React, { useState } from "react";

const HeroSection = () => {
  const [heroData] = useState({
    title: "Boost Your Business Productivity with AI Technologies",
    subtitle:
      "Stay ahead of industry trends by adopting cutting-edge AI technologies.",
    buttonText: "Become AI Expert",
    backgroundImage: "/heroimg.jpg",    
    aiHeadImage: "/ai.webp", 
    features: [
      {
        title: "Master the fundamentals of AI tools usage",
      },
      {
        title: "Integrate AI technologies into your business",
      },
      {
        title: "Automate routine tasks & enhance productivity",
      },
    ],
  });

  return (
    <div className="relative  min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-300 via-purple-500 to-purple-900">
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-purple-600/40 to-purple-900/40"></div>
      </div>

      <div className="relative MyContainer z-10 MyContainer mx-auto py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          <div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold ">
              {heroData.title}
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap">
                {heroData.buttonText}
              </button>
              <p className="text-lg sm:text-xl text-white/90">
                {heroData.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-8 lg:pt-12">
              {heroData.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-purple-700/40 backdrop-blur-md rounded-2xl p-6 hover:bg-purple-600/50 transition-all duration-300 hover:scale-105 border border-purple-400/30"
                >
                  <p className="text-white font-medium leading-snug">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative">
                <img
                  src={heroData.aiHeadImage}
                  alt="AI Technology"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
