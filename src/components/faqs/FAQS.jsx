"use client";
import React, { useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AppContext } from "@/Context/AppContext";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { faqs, loading } = useContext(AppContext);

  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqList = Array.isArray(faqs) ? faqs : [];

  if (loading) return <div className="flex items-center justify-center h-64 text-white">Loading FAQs...</div>;
  if (!faqList.length) return <div className="text-center text-white py-20">No FAQs available at the moment.</div>;

  return (
    <div className="text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-5xl font-bold mb-4">
          Frequently Asked <span className="text-purple-400">Questions</span>
        </h1>

        <div className="mt-12 space-y-4">
          {faqList.map(faqGroup =>
            faqGroup.questions.map((faq, idx) => (
              <div
                key={faq._id || idx}
                className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-4 md:px-8 py-6 flex items-start md:items-center justify-between gap-3 hover:bg-purple-500/10 transition-colors duration-200"
                >
                  <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1 min-w-0">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-purple-400 flex items-center justify-center mt-1 md:mt-0">
                      <span className="text-purple-400 font-semibold">?</span>
                    </div>
                    <span className="text-base md:text-lg font-medium text-left break-words flex-1">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-purple-400 transition-transform duration-300 flex-shrink-0 mt-1 md:mt-0 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-4 md:px-8 bg-purple-500/5 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? "max-h-60 opacity-100 py-4 border-t border-purple-500/20"
                      : "max-h-0 opacity-0 py-0 border-t-0"
                  }`}
                >
                  <p className="text-purple-100 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQS;