
"use client";
import { AppContext } from "@/Context/AppContext";
import React, { useContext } from "react";

const Curiculim = () => {
  const { curiculim } = useContext(AppContext);
  console.log(curiculim, "Curriculum");

  const curriculum = [
    { icon: "/ai.webp", title: "3 Weeks" },
    { icon: "/ai.webp", title: "6 Online Lessons" },
    { icon: "/ai.webp", title: "Certificate of Completion" },
  ];
  const peragraphs = [
    {
      paragraph1:
        "We have created a course program for the current needs of everyone who is interested in using artificial intelligence in marketing processes.",
      paragraph2:
        "You will have 3 intensive weeks of training and practice with the support of experienced specialists",
    },
  ];
  const questions = [
    {
      question: "What is Generative Artificial Intelligence?",
      answer: "Introduction. Core fundamentals of AI technology.",
    },
    {
      question: " AI-Based Services ",
      answer: [
        "Explore robust AI-based solutions",
        "Leverage advanced machine intelligence",
        "Enhance daily operations with AI analytics",
        "Implement synergy within teams for smooth results",
      ],
    },
    {
      question: " Writing Prompts for GPT Models",
      answer: [
        "Refine text with context",
        "Provide structured detail to steer content",
        "Focus clarity on desired outcomes",
      ],
    },
    {
      question: "Cases of Writing Prompts for GPT Models",
      answer: [
        "Tailor prompts for variety",
        "Develop queries that spark unique responses",
        "Refine approach to target goals",
        "Practical part: Create your own specialized prompt",
      ],
    },
    {
      question: "Writing Prompts for Generating Images in Midjourney",
      answer: [
        "Shape visuals swiftly",
        "Add clarity through details",
        "Maximize style with precise cues daily",
        "Combine color and theme skillfully",
        "Practical part: Draft a custom Midjourney prompt",
      ],
    },
    {
      question: "Writing Prompts in Stable Diffusion",
      answer: [
        "Refine composition through precise guided steps",
        "Elevate artistry effortlessly",
        "Employ targeted keywords for clarit",
        "Practical part: Construct your Stable Diffusion prompt",
      ],
    },
    {
      question: "Certification ",
      answer: "Take the final test and secure your certificate!",
    },
  ];

  return (
    <div className="MyContainer flex flex-col md:flex-row items-center gap-10 py-10 px-4 md:px-8 lg:px-16 text-white w-full max-w-7xl mx-auto">
      <div className="left w-full md:w-1/2 ">
        <div className="flex flex-col gap-1 overflow-y-auto max-h-[500px] relative custom-scroll pr-2">
          {questions.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === questions.length - 1;
            return (
              <div
                key={index}
                className={`flex flex-col items-start bg-[#260d5c] px-6 md:px-10 py-10 md:py-14 gap-5 transition-all ${
                  isFirst ? "rounded-t-4xl" : ""
                } ${isLast ? "rounded-b-4xl" : ""}`}
              >
                <div className="flex items-start justify-center gap-4 md:gap-6">
                  <span className="text-purple-400 text-lg md:text-3xl font-semibold leading-none">
                    {index + 1}.
                  </span>
                  <span className="text-base md:text-xl lg:text-2xl font-medium">
                    {item.question}
                  </span>
                </div>

                {Array.isArray(item.answer) ? (
                  <ul className="list-disc pl-10 md:pl-20 text-xs md:text-sm lg:text-lg text-white/80 font-medium space-y-1">
                    {item.answer.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-xs md:text-sm lg:text-lg font-medium text-white/80 pl-8 md:pl-12">
                    {item.answer}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="right w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
          <span className="text-white">Course </span>
          <span className="text-purple-400">Curriculum</span>
        </h2>

        <div className="flex flex-wrap gap-4 md:gap-6 mt-4 justify-center md:justify-start">
          {curriculum.map((item, index) => (
            <div key={index} className={`flex items-center gap-2 `}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
              <span className="text-xs md:text-sm font-medium">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 mt-4 text-gray-400 text-sm md:text-lg leading-relaxed text-center md:text-left">
          <p>{peragraphs[0].paragraph1}</p>
          <p>{peragraphs[0].paragraph2}</p>
        </div>
      </div>
    </div>
  );
};

export default Curiculim;
