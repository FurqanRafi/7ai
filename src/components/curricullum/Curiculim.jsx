"use client";
import { AppContext } from "@/Context/AppContext";
import React, { useContext } from "react";

const Curiculim = () => {
  const { curiculim } = useContext(AppContext);

  if (!curiculim || Object.keys(curiculim).length === 0) {
    return (
      <div className="text-white text-center py-10">Loading Curriculum...</div>
    );
  }

  const { icon = [], paragraph1, paragraph2, questions = [] } = curiculim;

  return (
    <div className="MyContainer flex flex-col md:flex-row items-center gap-10 py-10  text-white w-full max-w-7xl mx-auto">
      {/* LEFT SIDE */}
      <div className="left w-full md:w-1/2">
        <div className="flex flex-col gap-1 overflow-y-auto max-h-[500px] relative custom-scroll pr-2">
          {questions.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === questions.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col items-start bg-[#260d5c] px-3 md:px-6 py-10 md:py-10 gap-5 transition-all ${
                  isFirst ? "rounded-t-4xl" : ""
                } ${isLast ? "rounded-b-4xl" : ""}`}
              >
                <div className="flex flex-col md:flex-col lg:flex-row items-start  justify-start gap-4 md:gap-6 px-3 w-full">
                  <span className="text-purple-400 text-lg md:text-3xl font-semibold leading-none">
                    {index + 1}.
                  </span>
                  <span className="text-base md:text-xl lg:text-2xl font-medium text-start  w-full">
                    {item.question}
                  </span>
                </div>

                {Array.isArray(item.answer) ? (
                  <ul className="list-disc   md:pl-20  text-xs md:text-sm lg:text-lg text-white/80 font-medium space-y-1 w-full text-start">
                    {item.answer.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-xs px-3 md:text-sm lg:text-lg font-medium text-white/80  lg:pl-15 w-full text-start">
                    {item.answer}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center ">
          <span className="text-white">Course </span>
          <span className="text-purple-400">Curriculum</span>
        </h2>

        {/* ICONS */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mt-4 items-center justify-center md:justify-start lg:justify-center">
          {icon.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={item.icons}
                alt={item.title}
                className="w-4 h-4 md:w-5 md:h-5 object-contain brightness-0 invert"
              />
              <span className="text-xs md:text-sm font-medium">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* PARAGRAPHS */}
        <div className="space-y-4 mt-4 text-gray-400 text-lg md:text-lg leading-relaxed text-start md:text-left">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
      </div>
    </div>
  );
};

export default Curiculim;
