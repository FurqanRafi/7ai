"use client";
import React, { useContext } from "react";
import { AppContext } from "@/Context/AppContext";

const FullPageLoader = () => {
  const { loading } = useContext(AppContext);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0820] via-purple-950 to-[#0a0820]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="mb-4 animate-pulse">
          <img 
            src="/logo white.svg" 
            alt="Logo" 
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Spinner with Logo */}
        

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white animate-pulse">
            Loading
            <span className="inline-block animate-bounce delay-100">.</span>
            <span className="inline-block animate-bounce delay-200">.</span>
            <span className="inline-block animate-bounce delay-300">.</span>
          </h2>
          <p className="text-purple-300 text-lg">Please wait while we prepare everything</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-purple-900/50 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-progress"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default FullPageLoader;