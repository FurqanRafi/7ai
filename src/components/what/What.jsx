import React from "react";

const items = [
  {
    img: "/ai.webp",
    title: "Introduction to Artificial Intelligence",
    text: "Understanding AI concepts and terminology.",
  },
  {
    img: "/ai.webp",
    title: "AI in Various Industries",
    text: "Case studies on AI applications from programming to medicine.",
  },
  {
    img: "/ai.webp",
    title: "Integrating AI Technologies into Your Business",
    text: "Step-by-step guidance on selecting and implementing AI tools.",
  },
  {
    img: "/ai.webp",
    title: "Enhancing Customer Experience",
    text: "Utilizing AI for personalized marketing and support.",
  },
  {
    img: "/ai.webp",
    title: "Automating Business Processes",
    text: "Techniques for streamlining operations using AI technology.",
  },
  {
    img: "/ai.webp",
    title: "Data Analysis and Decision-Making",
    text: "Leveraging AI for insightful analytics and forecasting.",
  },
];

const What = () => {
  return (
    <div className="MyContainer mt-20 py-16">
      <div className="flex flex-col items-start gap-10">
        <h1 className="text-4xl lg:text-5xl font-semibold w-full leading-snug tracking-wide">
          <span className="text-[#7853f0]">What</span> You'll
          <br className="hidden lg:block" />
          Specifically Learn
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-10">
          {items.map((items, index) => (
            <div
              key={index}
              className="flex items-center gap-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                className="w-60 h-46 bg-[#7853f0] object-cover rounded-3xl"
                src={items.img}
                alt=""
              />
              <div className="max-w-[300px]">
                <h2 className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-white">
                  {items.title}
                </h2>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  {items.text}
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
