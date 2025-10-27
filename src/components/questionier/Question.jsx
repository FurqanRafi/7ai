"use client";
import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";

export default function Question() {
  const [phone, setPhone] = useState("");
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔹 Detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden text-white bg-[#0f0124]"
    >
      {/* 🔹 Background Glow Blob (Static behind content) */}
      <div className="absolute right-0 lg:right-32 top-1/2 -translate-y-1/2 w-[450px] md:w-[550px] h-[450px] md:h-[550px] bg-gradient-radial from-[#9b83f5]/30 via-[#7853f0]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* 🔹 Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-16 lg:gap-24">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Have Additional
            <br />
            <span className="text-[#9b83f5] font-semibold">Questions?</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
            Get in touch! Our support specialists are ready to help you with any
            questions about our programs and services.
          </p>

          <div className="space-y-4 mb-10">
            <a
              href="tel:1-800-123-4567"
              className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-[#9b83f5] transition-colors"
            >
              <Phone size={20} />
              <span className="text-base md:text-lg">1-800-123-4567</span>
            </a>
            <a
              href="mailto:support@yourcourse.com"
              className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-[#9b83f5] transition-colors"
            >
              <Mail size={20} />
              <span className="text-base md:text-lg">
                support@yourcourse.com
              </span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 min-w-[250px] px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#9b83f5] transition-all shadow-lg"
            />
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9b83f5] to-[#7853f0] text-white font-semibold text-sm md:text-base hover:from-[#7853f0] hover:to-[#6545e6] transition-all shadow-lg hover:shadow-[#9b83f5]/40 transform hover:-translate-y-0.5 active:translate-y-0">
              Request Callback
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE WITH GLOW */}
        <div className="flex-1 flex items-center justify-center relative mt-16 lg:mt-0 z-30">
          {/* 🔹 Animated Glow Background */}
          <div
            className={`absolute rounded-full blur-3xl transition-all duration-[1500ms] ease-out ${
              isVisible
                ? "opacity-100 scale-105 animate-[glowPulse_6s_ease-in-out_infinite]"
                : "opacity-0 scale-90"
            }`}
            style={{
              width: "420px",
              height: "420px",
              background:
                "radial-gradient(circle, rgba(155,131,245,0.4) 0%, rgba(120,83,240,0.2) 40%, transparent 70%)",
              filter: isVisible
                ? "drop-shadow(0 0 80px rgba(155,131,245,0.6))"
                : "drop-shadow(0 0 0 rgba(0,0,0,0))",
            }}
          ></div>

          {/* 🔹 Image */}
          <img
            src="/Amelia.jpg"
            alt="Support illustration"
            className={`relative w-[240px] sm:w-[320px] md:w-[400px] lg:w-[430px] rounded-full object-contain transition-all duration-[1500ms] ease-out ${
              isVisible
                ? "scale-105 drop-shadow-[0_0_30px_rgba(155,131,245,0.8)]"
                : "scale-95 drop-shadow-[0_0_10px_rgba(155,131,245,0.3)]"
            }`}
          />
        </div>
      </div>

      {/* 🔹 Inline Keyframes for Glow Animation */}
      <style jsx>{`
        @keyframes glowPulse {
          0% {
            opacity: 0.7;
            transform: scale(1);
            filter: drop-shadow(0 0 30px rgba(155, 131, 245, 0.6));
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
            filter: drop-shadow(0 0 80px rgba(155, 131, 245, 0.9));
          }
          100% {
            opacity: 0.7;
            transform: scale(1);
            filter: drop-shadow(0 0 30px rgba(155, 131, 245, 0.6));
          }
        }
      `}</style>
    </section>
  );
}
