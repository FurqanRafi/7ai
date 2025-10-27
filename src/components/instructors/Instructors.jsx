"use client";
import React, { useContext } from "react";
import { AppContext } from "@/Context/AppContext";

const Instructors = () => {
  const { instructor } = useContext(AppContext);
  console.log(instructor, "instructor");

  if (!instructor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyContainer flex flex-col lg:flex-row items-center justify-between gap-10 py-20 lg:py-40">
      {/* LEFT TEXT SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5 ">
        <h2 className="text-2xl lg:text-xl tracking-wide text-[#b7a8ff]">
          {instructor.uptitle}
        </h2>

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          {instructor.title}
        </h1>

        <p className="text-gray-300 text-xl font-light leading-relaxed">
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
        {/* 👇 is blur wali div ko remove kar diya */}
        {/* <div className="absolute w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] bg-[#7b3efc] blur-[180px] opacity-30 rounded-full -z-10"></div> */}

        <div className="w-64 h-64 lg:w-96 lg:h-96 object-contain drop-shadow-[0_0_40px_rgba(155,131,245,0.5)] hover:scale-105 transition-transform duration-500">
          <img
            src={instructor.img}
            alt="Instructor"
            className="w-full h-full object-cover rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
