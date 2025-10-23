"use client";
import { AppContext } from "@/Context/AppContext";
import React, { useContext } from "react";

const Skill = () => {
  const { skill } = useContext(AppContext);
  console.log(skill, "Skill");

  if (!skill) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyContainer">
      <div className="w-full bg-gradient-to-br from-[#c7b5ff] to-[#d9cbff] mt-20 rounded-3xl lg:rounded-[2.5rem] flex flex-col lg:flex-row items-stretch overflow-hidden shadow-2xl">
        {/* Main Image */}
        <div className="w-full lg:w-[30%] h-64 md:h-80 lg:h-auto relative">
          <img
            src={skill.img}
            alt="AI Skills"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-[70%] flex flex-col items-center justify-center text-[#6442d9] p-6 md:p-10 lg:p-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0f0124] mb-8 lg:mb-12">
            What Skills You'll Gain
          </h1>

          <div className="flex flex-col gap-6 lg:gap-8 w-full">
            {skill?.skill?.map((items, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
                {/* Icon Image */}
                <div className="flex-shrink-0 mt-1">
                  {items.icon && (
                    <img
                      src={items.icon}
                      alt={items.title}
                      className="w-10 h-10 object-cover "
                    />
                  )}
                </div>

                {/* Texts */}
                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-1 sm:gap-4">
                  {/* Title */}
                  <h2 className="text-lg md:text-xl lg:text-2xl font-light text-[#0f0124] w-full sm:w-auto">
                    {items.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm md:text-base font-light leading-relaxed w-full sm:w-auto">
                    {items.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
