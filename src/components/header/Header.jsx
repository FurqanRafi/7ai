"use client";

import React, { useContext, useState } from "react";
import { AppContext } from "@/Context/AppContext";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { navbar, loading } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Loading state
  if (loading) {
    return (
      <header className="w-full fixed top-0 left-0 z-30 flex items-center justify-center py-4 px-3">
        <div className="max-w-7xl w-full bg-gradient-to-t from-[#ffffff] to-[#c3b3f7] flex items-center justify-center rounded-full backdrop-blur-sm shadow-md px-6 h-14 py-9">
          <span className="text-[#7853f0] font-medium">Loading...</span>
        </div>
      </header>
    );
  }

  // Extract navbar data from backend schema
  const logo = {
    src: navbar?.logo || "/logo7ai.svg",
    alt: "Logo",
  };

  const navLinks = navbar?.menu || [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Instructors", link: "/instructors" },
    { name: "Program", link: "/program" },
    { name: "FAQS", link: "/faqs" },
    { name: "Contact", link: "/contact" },
    { name: "News & Articles", link: "/news" },
  ];

  const ctaButton = {
    text: navbar?.button?.btnname || "Enroll Now",
    href: navbar?.button?.btnLink || "#",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-[#c3b3f7] to-[#ffffff] z-50 transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6">
            <img src={logo.src} alt={logo.alt} className="h-8 object-contain" />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-[#7853f0] text-white hover:bg-[#6442d9] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col p-6 space-y-4 flex-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link || "#"}
                className="text-[#0f0124] text-lg font-medium hover:text-[#7853f0] transition-colors duration-200 py-2"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Menu Footer with CTA */}
          <div className="p-6">
            <a href={ctaButton.href} className="block">
              <button className="w-full bg-[#7853f0] text-white px-6 py-3 rounded-full uppercase font-medium tracking-wider hover:bg-[#6442d9] transition-all duration-200 text-sm">
                {ctaButton.text}
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-30 flex items-center justify-center py-4 px-3">
        <div className="max-w-7xl w-full bg-gradient-to-t from-[#ffffff] to-[#c3b3f7] flex items-center justify-between text-[#DAC5A7] rounded-full backdrop-blur-sm shadow-md px-1.5 sm:px-6 md:px-6 h-14 py-9 transition-all duration-300 ease-in-out">
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-7 sm:h-6 md:h-6 lg:h-9 object-contain"
            />
          </a>

          <nav className="hidden xl:flex gap-6 lg:gap-8 text-sm xl:text-lg tracking-wide">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link || "#"}
                className="hover:text-[#7853f0] text-[#0f0124] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href={ctaButton.href}>
              <button className="lg:bg-[#7853f0] border border-[#7853f0] bg-[#a28af355] text-[#0f0124] lg:text-[#ffffff] px-2 sm:px-4 md:px-7 py-3 md:py-4 sm:py-2 rounded-full uppercase font-thin tracking-wider sm:tracking-widest hover:bg-[#6442d9] transition-all duration-200 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                {ctaButton.text}
              </button>
            </a>

            <button
              onClick={toggleMenu}
              className="xl:hidden bg-[#7853f0] rounded-full p-2 sm:p-2.5 md:p-3 text-white focus:outline-none hover:bg-[#6442d9] transition-all duration-200 flex-shrink-0"
            >
              <Menu
                size={20}
                className="sm:w-[22px] sm:h-[22px] md:w-6 md:h-6"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;