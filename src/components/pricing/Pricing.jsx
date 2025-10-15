import React from "react";

const Pricing = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">
            Get Started <span className="text-indigo-400">Now</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-200 to-indigo-200 rounded-3xl p-8 shadow-2xl transform transition hover:scale-105">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                One Time Payment
              </h2>

              <div className="border-b-2 border-purple-300 w-20 mx-auto mb-8"></div>

              <div className="mb-6">
                <p className="text-7xl font-bold text-gray-800">$247</p>
                <p className="text-purple-600 font-semibold text-lg mt-3">
                  Save $50!
                </p>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition shadow-lg mt-8">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-200 to-indigo-200 rounded-3xl p-8 shadow-2xl transform transition hover:scale-105">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                3 Payments
              </h2>

              <div className="border-b-2 border-purple-300 w-20 mx-auto mb-8"></div>

              <div className="mb-6">
                <p className="text-5xl font-bold text-gray-800">$99/Week*</p>
                <p className="text-purple-600 font-semibold text-lg mt-3">
                  Totalling $297
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  * first payment due upfront
                </p>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition shadow-lg mt-8">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
