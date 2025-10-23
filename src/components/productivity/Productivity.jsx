"use client";
import React, { useContext } from "react";
import { AppContext } from "@/Context/AppContext";

const Productivity = () => {
  const { productivity } = useContext(AppContext);

  console.log("productivity ", productivity);

  if (!productivity) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyContainer">
      <div className="w-full lg:h-[400px] bg-[#f5f5f5] mt-20 rounded-4xl flex lg:flex-row flex-col items-center">
        {/* Left Image Section */}
        <div className="w-full lg:w-[30%] h-full">
          <img
            src={productivity.img}
            alt="Productivity Banner"
            className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-4xl"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-[70%] h-full flex flex-col items-center justify-center text-black p-6 md:p-10">
          {/* Dynamic Icons */}
          <div className="flex flex-wrap justify-center gap-4  font-medium mb-4">
            {productivity.icon?.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.img && (
                  <img
                    src={item.img}
                    alt="icon"
                    className="w-5 h-5 object-contain text-blue-900"
                  />
                )}
                <span className="text-[#0f0124]">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl  text-[#0f0124] text-center font-semibold mb-6 leading-snug">
            {productivity.title}
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {productivity.buttons?.map((btn, index) => (
              <a
                key={index}
                href={btn.btnLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`px-8 py-4 rounded-full text-lg font-medium transition ${
                    index === 0
                      ? "border border-[#9b7cff] text-[#9b7cff] hover:bg-[#9b7cff] hover:text-white"
                      : "bg-gradient-to-b from-[#b39aff] to-[#5d3dd1] text-white hover:opacity-90"
                  }`}
                >
                  {btn.btnname}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
