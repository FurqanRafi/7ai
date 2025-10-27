"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "@/Context/AppContext";

const Instructors = () => {
  const { instructor } = useContext(AppContext);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔹 Detect when section is visible in viewport
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

  if (!instructor) {
    return <div>Loading...</div>;
  }

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent transition-all duration-700"
    >
      {/* 🔹 Main Content */}
      <div className="MyContainer flex flex-col lg:flex-row items-center justify-between gap-10 py-20 lg:py-40 text-white">
        {/* LEFT TEXT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <h2 className="text-2xl lg:text-xl tracking-wide text-[#b7a8ff]">
            {instructor.uptitle}
          </h2>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            {instructor.title}
          </h1>

          <p className="text-gray-200 text-xl font-light leading-relaxed">
            {instructor.description}
          </p>

          <a href={instructor.btnLink}>
            <button className="px-8 py-3 w-fit rounded-full bg-gradient-to-r from-[#8d4bff] to-[#6235e8] text-white font-medium shadow-[0_0_25px_rgba(120,61,255,0.5)] hover:shadow-[0_0_35px_rgba(120,61,255,0.7)] hover:scale-105 transition-all duration-300">
              {instructor.btnname}
            </button>
          </a>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-10 lg:mt-0">
          <div
            className={`w-64 h-64 lg:w-96 lg:h-96 rounded-full transition-all duration-[1500ms] ease-out ${
              isVisible ? "scale-105 opacity-100" : "scale-95 opacity-60"
            }`}
            style={{
              filter: isVisible
                ? "drop-shadow(0 0 70px rgba(155,131,245,0.9))"
                : "drop-shadow(0 0 0 rgba(0,0,0,0))",
            }}
          >
            <img
              src={instructor.img}
              alt="Instructor"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
