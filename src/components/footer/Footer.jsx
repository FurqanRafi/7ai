import React from "react";
import { Search, Facebook, Youtube, Instagram } from "lucide-react";

// ✅ Dynamic Data
const socialLinks = [
  { icon: <Facebook className="w-4 h-4" />, href: "#" },
  { icon: <Youtube className="w-4 h-4" />, href: "#" },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
  },
  { icon: <Instagram className="w-4 h-4" />, href: "#" },
];

const contactLinks = [
  {
    label: "1-800-123-4567",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    href: "tel:1-800-123-4567",
  },
  {
    label: "support@yourcourse.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    href: "mailto:support@yourcourse.com",
  },
];

const quickLinks = [
  "About Course",
  "Pricing Plans",
  "News & Articles",
  "Design System",
];

const policyLinks = [
  "Terms & Conditions",
  "Cookie Policy",
  "Maintenance Page",
  "404 Error Page",
];

export default function Footer() {
  return (
    <div className=" flex flex-col justify-end">
      <footer className="relative text-white bg-gradient-to-b from-[#130033] via-[#25004d] to-[#25004d] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-indigo-500/20 blur-[500px] opacity-30 rounded-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <div className="w-6 h-6 border-2 border-white rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold">Seven AI</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stay ahead of industry trends by adopting cutting-edge AI
                technologies.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="w-10 h-10 rounded-full border border-gray-600 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:bg-purple-500/10"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-indigo-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                {contactLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
              <div className="space-y-3 pt-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {policyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3">
                    Newsletter Signup
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    Sign up to our newsletter and receive a{" "}
                    <span className="text-purple-400 font-semibold">
                      10% discount
                    </span>{" "}
                    on the course fee!
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
                    Sign Up Now
                  </button>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                71
                <br />
                DEMOS
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© Copyright 2025 | All Rights Reserved</p>
              <p>
                Powered by{" "}
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  The7 Theme
                </a>{" "}
                from{" "}
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Dream-Theme
                </a>
              </p>
            </div>
          </div>
        </div>

        <button className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </footer>
    </div>
  );
}
