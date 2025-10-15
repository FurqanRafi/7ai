import React from "react";

const Productivity = () => {
  return (
    <div className="MyContainer ">
      <div className="w-full lg:h-[400px] bg-[#f5f5f5] mt-20 rounded-4xl flex lg:flex-row flex-col items-center ">
        <div className="w-full lg:w-[30%]  h-full">
          <img
            src="/process.jpg"
            alt=""
            className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-4xl"
          />
        </div>
        <div className="w-full lg:w-[70%] h-full flex flex-col items-center justify-center text-black p-6 md:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-4 text-[#5b34da] font-medium mb-4">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-calendar"></i>
              <span>2 Weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-video"></i>
              <span>6 Online Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-certificate"></i>
              <span>Certificate of Completion</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl text-center font-semibold mb-6 leading-snug">
            Are You Ready to Boost Your <br className="hidden md:block" />
            Productivity with AI?
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border border-[#9b7cff] text-[#9b7cff] px-6 py-2 rounded-full font-medium hover:bg-[#9b7cff] hover:text-white transition">
              Course Program
            </button>
            <button className="bg-gradient-to-b from-[#b39aff] to-[#5d3dd1] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
