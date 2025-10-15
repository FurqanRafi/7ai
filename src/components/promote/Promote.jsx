import React from "react";
import {
  FaRocket,
  FaChartBar,
  FaTasks,
  FaBriefcase,
  FaLaptopCode,
  FaSmile,
} from "react-icons/fa";    

const items = [
  {
    icon: <FaRocket />,
    text: "Have an interest in AI technology but don’t know where to start",
  },
  {
    icon: <FaChartBar />,
    text: "Are a business owner aiming to enhance productivity",
  },
  {
    icon: <FaTasks />,
    text: "Are looking to automate routine tasks to focus on strategic initiatives",
  },
  {
    icon: <FaLaptopCode />,
    text: "Want to stay ahead in your career by learning cutting-edge technology",
  },
  {
    icon: <FaBriefcase />,
    text: "Work in a sector that could benefit from AI integration",
  },
  {
    icon: <FaSmile />,
    text: "Seek to improve customer engagement and satisfaction",
  },
];

const Promote = () => {
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
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-7  p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-white text-3xl bg-[#7853f0] p-3 rounded-lg">
                {item.icon}
              </div>
              <p className="text-white text-xl leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promote;
