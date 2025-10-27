"use client";
import { AppContext } from "@/Context/AppContext";
import React, { useContext } from "react";

const Pricing = () => {
  const { pricing, loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading Pricing...
      </div>
    );
  }

  if (!pricing || Object.keys(pricing).length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        No Pricing Data Found
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">{pricing.desc}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20 max-w-4xl mx-auto">
          {Array.isArray(pricing.pricing) &&
            pricing.pricing.map((plan, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-200 to-indigo-200 rounded-3xl p-8 shadow-2xl transform transition hover:scale-105"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {plan.title}
                  </h2>

                  <div className="border-b-2 border-purple-300 w-20 mx-auto mb-8"></div>
                  <div className="mb-6">
                    <p className="text-6xl font-bold text-gray-800">
                      {plan.price}
                    </p>
                    {plan.takeprice && (
                      <p className="text-purple-600 font-semibold text-lg mt-3">
                        {plan.text} {plan.takeprice}
                      </p>
                    )}
                  </div>

                  <a
                    href={plan.btnLink || "#"}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition shadow-lg mt-8 inline-block"
                  >
                    {plan.btnText || "Get Started"}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
