"use client"
import React, { useContext } from "react";
import { AppContext } from "@/Context/AppContext";

const Course = () => {
  const { course } = useContext(AppContext)

  if (!course || !course.course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MyContainer py-20">
      <h1 className="text-5xl leading-relaxed lg:text-6xl font-light tracking-wider text-start mb-5">
        Course <span className="text-[#7853f0]">Highlights</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {course.course.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start text-start gap-6 lg:gap-0"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-64 md:h-64 lg:w-full lg:h-64 object-cover rounded-3xl md:flex-shrink-0"
            />

            <div className="flex flex-col md:w-full">
              <h3 className="text-2xl font-semibold lg:mt-4">{item.title}</h3>
              <p className="text-gray-600 text-lg mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
