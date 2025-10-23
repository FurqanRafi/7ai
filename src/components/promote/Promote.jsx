"use client";

import { AppContext } from "@/Context/AppContext";
import React, { useContext } from "react";

const Promote = () => {
  const { promote } = useContext(AppContext);
  console.log(promote, "Promote");

  if (!promote || !promote.icon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyContainer mt-20 py-16">
      <div className="flex flex-col items-start gap-10">
        <h1 className="text-4xl lg:text-5xl font-semibold w-full leading-snug tracking-wide">
          This Course is{" "}
          <span className="text-[#7853f0]">
            Definitely <br className="hidden lg:block" /> for You{" "}
          </span>
          if You
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
          {promote.icon.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-2 lg:gap-5 md:gap-5 lg:py-5 md:py-3  rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon Image */}
              <div className="w-15 h-15 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center bg-[#7853f0] p-3 rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>

              {/* Title */}
              <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mt-2 sm:mt-0">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promote;
