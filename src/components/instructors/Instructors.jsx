import React from "react";

const Instructors = () => {
  return (
    <div className="MyContainer flex flex-col lg:flex-row items-center justify-between gap-10 py-20 lg:py-40">
      <div className="w-full lg:w-1/2 flex flex-col gap-5 ">
        <h2 className="text-2xl lg:text-xl tracking-wide text-[#b7a8ff]">
          Comprehensive Online Course
        </h2>

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          "AI Technologies for Business Productivity"
        </h1>

        <p className="text-gray-300 text-xl font-light leading-relaxed">
          In today's competitive landscape, leveraging technology isn't just an
          advantage — it's a necessity.
        </p>
        <p className="text-gray-300 text-xl font-light leading-relaxed">
          Our online course equips you with the knowledge and tools to integrate
          AI into your business seamlessly.
        </p>

        <button className="px-8 py-3 w-fit rounded-full bg-gradient-to-r from-[#8d4bff] to-[#6235e8] text-white font-medium shadow-[0_0_25px_rgba(120,61,255,0.5)] hover:shadow-[0_0_35px_rgba(120,61,255,0.7)] hover:scale-105 transition-all duration-300">
          Meet Your Instructors
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-10 lg:mt-0">
        <div className="absolute w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] bg-[#7b3efc] blur-[180px] opacity-30 rounded-full -z-10"></div>

        <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-[0_0_60px_rgba(123,62,252,0.4)]">
          <img
            src="/aiimage.jpg"
            alt="AI"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
