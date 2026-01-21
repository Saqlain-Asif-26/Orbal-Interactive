import React, { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section
      className='relative h-[95%] w-full bg-[url("/images/hero-bg.png")] bg-cover bg-center bg-no-repeat overflow-hidden'
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <div className="relative z-10 flex justify-center pt-6">
        <div className="flex w-[90%] md:w-[50%] items-center justify-between rounded-2xl bg-black/70 px-4 py-2 backdrop-blur-md">
          <img
            src="/images/logo.png"
            alt="Orbal"
            className="h-12"
          />
          <img
            src="/images/menu-button.png"
            alt="Menu"
            className="h-8 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center">
        <div className="mx-auto w-[90%] max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-cyan-400 leading-tight">
            ORBAL INTERACTIVE <br /> SERVICES
          </h1>
          <p className="mt-4 max-w-md text-md text-gray-200">
            Where Innovation Meets Long-Term Results
          </p>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mt-10 z-10">
        <button
          onClick={toggleMenu}
          className="cursor-pointer rounded-t-xl bg-cyan-400 px-6 py-3 text-sm font-medium text-black shadow-lg hover:bg-cyan-300 transition"
        >
          Scroll Down ↓
        </button>
      </div>

      {/* Full Screen Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-[#0b0f1a] transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-cyan-400 text-2xl cursor-pointer"
        >
          ✕
        </button>

        {/* Menu Content */}
        <div className="flex h-full flex-col justify-center px-10 sm:px-20 space-y-6 text-white">
          <p className="text-blue-500 text-lg font-medium cursor-pointer hover:underline">Home</p>
          <p className="text-lg cursor-pointer hover:underline">Who We Are</p>

          <div>
            <p className="mb-3 text-lg cursor-pointer hover:underline">Our Specialities</p>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:underline">→ Software Development</li>
              <li className="cursor-pointer hover:underline">→ IT Consultancy</li>
              <li className="cursor-pointer hover:underline">→ Infrastructure Support</li>
              <li className="cursor-pointer hover:underline">→ Network Security & Monitoring</li>
            </ul>
          </div>

          <p className="text-lg cursor-pointer hover:underline">Reach Us Here</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
