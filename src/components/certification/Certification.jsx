import React from "react";

const Certification = () => {
  const icons = [
    {
      icon: "/ai.webp",
      title: "Official Certification",
      description: "Receive a recognized diploma verifying your AI proficiency",
    },
    {
      icon: "/ai.webp",
      title: "Career Advancement",
      description: "Enhance your resume and stand out to employers",
    },
    {
      icon: "/ai.webp",
      title: "Professional Credibility",
      description: "Demonstrate your commitment to continuous learning",
    },
    {
      icon: "/ai.webp",
      title: "Networking Opportunities",
      description: "Receive a recognized diploma verifying your AI proficiency",
    },
  ];
  return (
    <div className="MyContainer flex flex-col items-stretch py-20">
      <div className="w-full flex flex-col md:flex-row items-center gap-5">
        <div className="w-full md:w-1/2 md:pr-10 text-center  md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-light leading-none mb-4">
            <span className="text-[#7b3efc]">Certificate</span> of Completion
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-white/50 leading-8">
            After completing the course and the final test, you will receive a
            certificate that will certify that you have acquired thorough
            knowledge and skills in the use of artificial intelligence in the
            automation of business processes.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="/certificate.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-25">
        {icons.map((icon, index) => (
          <div className="w-full" key={index}>
            <div className="flex flex-col items-start gap-5">
              <div className="bg-[#7b3efc] rounded-full p-2 flex items-center justify-center">
                <img className="w-20 h-20" src={icon.icon} alt={icon.icon} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl lg:text-2xl font-light">
                  {" "}
                  {icon.title}
                </h1>
                <p className="text-white/50 text-sm md:text-base lg:text-base">
                  {icon.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
