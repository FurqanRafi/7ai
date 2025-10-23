"use client";
import { AppContext } from "@/Context/AppContext";
import React, { useContext } from "react";

const What = () => {
  const { what } = useContext(AppContext);
  console.log(what, "what");

  if (!what || !what.what) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyContainer mt-20 py-16">
      <div className="flex flex-col items-start gap-10">
        <h1 className="text-4xl lg:text-5xl font-semibold w-full leading-snug tracking-wide">
          <span className="text-[#7853f0]">What</span> You'll
          <br className="hidden lg:block" />
          Specifically Learn
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-10">
          {what?.what?.map((items, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-center  gap-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                className="w-40 h-40 lg:w-40 lg:h-40 aspect-video bg-[#7853f0] object-cover rounded-3xl"
                src={items.img}
                alt={items.title}
              />
              <div className="w-full md:max-w-[400px] flex flex-col items-start gap-2">
                <h2 className="text-2xl md:text-xl lg:text-2xl leading-relaxed font-light text-white">
                  {items.title}
                </h2>
                <p className="text-lg md:text-base lg:text-lg text-white/60 leading-relaxed">
                  {items.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default What;
