import React from "react";

const Button = () => {
  const button = {
    text: "Meet Your Instructors",
    href: "#",
  };
  return (
    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7b3efc] to-[#5a2dd8] text-white font-medium  hover:scale-105 transition-all duration-300
    
    bg-gradient-to-b from-[#bcaef5]/30 to-[#bcaef5]/10">
      {button.text}
    </button>
  );
};

export default Button;
