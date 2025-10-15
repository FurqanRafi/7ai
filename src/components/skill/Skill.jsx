import React from "react";

const Skill = () => {
  const skills = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#7c3aed"
          viewBox="0 0 256 256"
        >
          <path d="M222,114.56a54,54,0,0,0-58.67-74.73,54,54,0,0,0-94,13.46A54,54,0,0,0,34,141.44a54,54,0,0,0,35.56,73.65A54.54,54.54,0,0,0,83.59,217a52.86,52.86,0,0,0,9.06-.78,54,54,0,0,0,94-13.46A54,54,0,0,0,222,114.56ZM183.37,52.5a42,42,0,0,1,29.21,53.14,54.84,54.84,0,0,0-5.08-3.33L163,76.62a6,6,0,0,0-6,0l-47,27.13V80.66l41.5-24A41.73,41.73,0,0,1,183.37,52.5ZM146,138.39l-18,10.39-18-10.39V117.61l18-10.39,18,10.39ZM78,72a42,42,0,0,1,72.92-28.43,56.18,56.18,0,0,0-5.42,2.74L101,72a6,6,0,0,0-3,5.19v54.27L78,119.92ZM39.13,85.93a41.75,41.75,0,0,1,27.22-20A55.09,55.09,0,0,0,66,72v51.38a6,6,0,0,0,3,5.2l47,27.13L96,167.26l-41.5-24A42,42,0,0,1,39.13,85.93ZM72.63,203.5a42,42,0,0,1-29.21-53.14,54.84,54.84,0,0,0,5.08,3.33L93,179.38a6,6,0,0,0,6,0l47-27.13v23.09l-41.5,24A41.73,41.73,0,0,1,72.63,203.5ZM178,184a42,42,0,0,1-72.92,28.43,56.18,56.18,0,0,0,5.42-2.74L155,184a6,6,0,0,0,3-5.19V124.54l20,11.54Zm38.87-13.93a41.75,41.75,0,0,1-27.22,20A55.09,55.09,0,0,0,190,184V132.62a6,6,0,0,0-3-5.2l-47-27.13,20-11.55,41.5,24A42,42,0,0,1,216.87,170.07Z"></path>
        </svg>
      ),
      title: "Comprehensive Understanding of AI",
      description:
        "Grasp the fundamentals of AI and how it applies to various business functions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#7c3aed"
          viewBox="0 0 256 256"
        >
          <path d="M198,112a6,6,0,0,1-6,6H152a6,6,0,0,1,0-12h40A6,6,0,0,1,198,112Zm-6,26H152a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm36-82V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H214A14,14,0,0,1,228,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H214a2,2,0,0,0,2-2ZM126,96v64a6,6,0,0,1-12,0V107.47L92.24,129.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,10.24,4.24Z"></path>
        </svg>
      ),
      title: "Enhanced Efficiency",
      description:
        "Learn how to automate routine tasks, allowing your team to focus on strategic initiatives.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#7c3aed"
          viewBox="0 0 256 256"
        >
          <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM128,66a62,62,0,1,0,62,62A62.07,62.07,0,0,0,128,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178Z"></path>
        </svg>
      ),
      title: "Improved Customer Engagement",
      description:
        "Utilize AI technologies to provide personalized customer experiences and support.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#7c3aed"
          viewBox="0 0 256 256"
        >
          <path d="M245.66,77.66l-29.9,29.9C209.72,177.43,150.67,218,96,218c-37.88,0-71.61-21.31-87.56-55.39a6,6,0,0,1,9.4-7.47C44.12,189.77,67.37,206,96,206c51.13,0,107.11-38.32,126.34-106.15l-30.57,30.57a6,6,0,0,1-8.48-8.48l40-40a6,6,0,0,1,8.48,0l40,40a6,6,0,1,1-8.48,8.48ZM143.31,126a12,12,0,1,0-14.62,0,38,38,0,1,0,14.62,0ZM128,154a26,26,0,1,1,26-26A26,26,0,0,1,128,154Z"></path>
        </svg>
      ),
      title: "Competitive Edge",
      description:
        "Stay ahead of industry trends by adopting cutting-edge AI technologies.",
    },
  ];

  return (
    <div className="MyContainer">
      <div className="w-full bg-gradient-to-br from-[#c7b5ff] to-[#d9cbff] mt-20 rounded-3xl lg:rounded-[2.5rem] flex flex-col lg:flex-row items-stretch overflow-hidden shadow-2xl">
        <div className="w-full lg:w-[30%] h-64 md:h-80 lg:h-auto relative">
          <img
            src="/skll.jpg"
            alt="AI Skills"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-[70%] flex flex-col items-center justify-center text-[#6442d9] p-6 md:p-10 lg:p-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0f0124] mb-8 lg:mb-12">
            What Skills You'll Gain
          </h1>

          <div className="flex flex-col gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-5">
                <div className="flex-shrink-0 mt-1">{skill.icon}</div>

                <div className="flex items-center gap-3 ">
                  <div className="w-1/2">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-light text-[#0f0124]">
                      {skill.title}
                    </h2>
                  </div>
                  <div className="w-1/2">
                    <p className="text-sm md:text-base text-[#] font-light leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
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
