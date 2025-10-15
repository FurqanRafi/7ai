"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes, this course is designed for beginners. We start from the basics and gradually progress to advanced topics, ensuring everyone can follow along regardless of their prior experience.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course is approximately 40-50 hours of content. However, you can learn at your own pace, and the estimated completion time is 4-6 weeks if you dedicate 8-10 hours per week.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes, upon successful completion of all modules and assignments, you will receive a recognized certificate that you can add to your professional portfolio.",
    },
    {
      question: "What if I have questions during the course?",
      answer:
        "We have a dedicated support team and community forum where you can ask questions. We typically respond within 24-48 hours, and our community members are always helpful too.",
    },
    {
      question: "If the course doesn't suit me, can I get a refund?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within 30 days of purchase, no questions asked.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-5xl font-bold mb-4">
          Frequently Asked <span className="text-purple-400">Questions</span>
        </h1>

        <div className="mt-12 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-purple-500/10 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-purple-400 flex items-center justify-center">
                    <span className="text-purple-400 font-semibold">?</span>
                  </div>
                  <span className="text-lg font-medium text-left">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-8 bg-purple-500/5 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-60 opacity-100 py-4 border-t border-purple-500/20"
                    : "max-h-0 opacity-0 py-0 border-t-0"
                }`}
              >
                <p className="text-purple-100 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
