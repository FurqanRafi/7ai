"use client";
import React, { useContext } from "react";
import { AppContext } from "@/Context/AppContext";
import { Search, Facebook, Youtube, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const { footer, loading } = useContext(AppContext);

  if (loading)
    return (
      <div className="text-center py-10 text-white bg-[#0f0124]">
        Loading Footer...
      </div>
    );

  const footerData = Array.isArray(footer) ? footer[0] : footer || {};

  if (!footerData || Object.keys(footerData).length === 0)
    return (
      <div className="text-center py-10 text-red-400 bg-[#0f0124]">
        ⚠️ No footer data found. Please check your AppContext or API.
      </div>
    );

  const {
    logo = "",
    desc = "",
    Social = [],
    contact = [],
    links = [],
    sideLinks = [],
  } = footerData;

  const handleSubscribe = () => {
    alert("Subscribed successfully!");
  };

  return (
    <footer className="bg-[#240e5c] bg-gradient-to-t from-[#0f0124]/10 via-[#0f0124]/20 to-[#0f0124] z-30 text-white pt-20 pb-8 relative overflow-hidden">
     
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* 1️⃣ Left Column - Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {logo ? (
                <img src={logo} alt="Logo" className="w-60  object-contain" />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-white rounded-full"></div>
                </div>
              )}

            </div>

            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              {desc ||
                "Stay ahead of industry trends by adopting cutting-edge AI technologies."}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {Social.length > 0 ? (
                Social.map((s, i) => (
                  <a 
                    key={i} 
                    href={s.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                  >
                    <img
                      src={s.icon}
                      alt="social"
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </a>
                ))
              ) : (
                <>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </>
              )}
            </div>

            {/* Search Box */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#1a1340] w-full py-3 pl-12 pr-4 rounded-lg text-base text-gray-300 placeholder-gray-500 border border-gray-800 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* 2️⃣ Middle Column - Contact & Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <div className="space-y-4">
                {contact?.length > 0 ? (
                  contact.map((item, i) => (
                    <a
                      key={i}
                      href={item.link || "#"}
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 text-base group transition-colors"
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt="contact"
                          className="w-9 h-9 object-contain"
                        />
                      )}
                      <span className="text-xl">{item.text}</span>
                    </a>
                  ))
                ) : (
                  <>
                    <a href="tel:1-800-123-4567" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 text-base transition-colors">
                      <span>📞</span>
                      <span>1-800-123-4567</span>
                    </a>
                    <a href="mailto:support@yourcourse.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 text-base transition-colors">
                      <span>✉️</span>
                      <span>support@yourcourse.com</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <ul className="space-y-3">
                  {links.length > 0 ? (
                    links.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.links || "#"}
                          className="text-gray-400 hover:text-white text-base transition-colors"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))
                  ) : (
                    <>
                      <li><a href="#" className="text-gray-400 hover:text-white text-base transition-colors">About Course</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Pricing Plans</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white text-base transition-colors">News & Articles</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Design System</a></li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  {sideLinks.length > 0 ? (
                    sideLinks.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.link || "#"}
                          className="text-gray-400 hover:text-white text-base transition-colors"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))
                  ) : (
                    <>
                      <li><a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Terms & Conditions</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Cookie Policy</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white text-base transition-colors">Maintenance Page</a></li>
                      <li><a href="#" className="text-blue-400 hover:text-blue-300 text-base transition-colors">404 Error Page</a></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* 3️⃣ Right Column - Newsletter */}
          <div className="relative">
          
            

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-800/50 rounded-2xl p-8 backdrop-blur-sm relative z-10">
              <div className="absolute top-4 right-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                72 DEMOS
              </div>

              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Newsletter Signup
              </h3>
              
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Sign up to our newsletter and receive a 10% discount on the course fee!
              </p>

              <button
                onClick={handleSubscribe}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-6 py-3 rounded-lg text-base font-semibold shadow-lg shadow-purple-500/30 transition-all transform hover:scale-105"
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© Copyright {new Date().getFullYear()} | All Rights Reserved</p>
            <p>
              Powered by{" "}
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                The7 Theme
              </a>
              {" "}from{" "}
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
    </footer>
  );
}