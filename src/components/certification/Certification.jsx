"use client";
import React, { useContext } from "react";
import { AppContext } from "@/Context/AppContext";

const Certification = () => {
  const { certificate, loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading certification...
      </div>
    );
  }

  if (!certificate || Object.keys(certificate).length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        No certification data found.
      </div>
    );
  }

  return (
    <div className="MyContainer flex flex-col items-stretch py-20">
      <div className="w-full flex flex-col md:flex-row items-center gap-5">
        <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-light leading-none mb-4">
            <span className="text-[#7b3efc]">Certificate</span> of Completion
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-white/50 leading-8">
            {certificate.paragraph}
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={certificate.img}
            alt="Certificate"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-25">
        {certificate.certificate?.map((item, index) => (
          <div className="w-full" key={index}>
            <div className="flex flex-col  items-start gap-5">
              <div className="bg-[#7b3efc] rounded-xl p-3 flex items-center justify-center">
                <img
                  className="w-12 h-12"
                  src={item.img}
                  alt={item.title || `cert-icon-${index}`}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl lg:text-2xl font-light">
                  {item.title}
                </h1>
                <p className="text-white/50 text-sm md:text-base lg:text-base">
                  {item.desc}
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
