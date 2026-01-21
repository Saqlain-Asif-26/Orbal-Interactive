import React from "react";

const DifferenceSection = () => {
  const checkPoints = [
    "Transparent engagement from start to finish",
    "Solutions that adapt to long-term strategic change",
    "Consistent communication and technical clarity",
    "A collaborative team that never cuts corners",
    "Support that evolves with growing business demands",
  ];

  return (
    <section className="w-full rounded-t-4xl py-20 overflow-x-hidden">
      {/* Container to align text with SupportSection */}
      <div className="mx-auto w-[90%] max-w-7xl mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 md:w-1/3 leading-tight">
            The Orbal Difference
          </h2>
          <p className="text-sm text-gray-300 md:w-1/2 leading-relaxed">
            We do not treat support as a product. For us, it is a practice of
            consistency, communication, and care. Every solution is designed by
            people who know what is at stake and understand how downtime,
            disconnection, or disorganisation can impact business outcomes.
          </p>
        </div>
      </div>

      {/* Full-width Image Area */}
      <div className="relative w-full group">
        <div className="w-full h-125 md:h-162.5">
          <img
            src="/Orbal-Interactive/images/difference-pic.png" 
            alt="The Orbal Difference"
            className="w-full h-full object-cover object-center brightness-[0.85]"
          />
        </div>

        {/* Floating Card - Positioned relative to the content width */}
        <div className="absolute bottom-0 left-0 w-full md:left-auto md:right-[5%] lg:left-1/2 md:w-125">
          <div className="bg-linear-to-br from-[#38bdf8] to-[#4f46e5] p-8 md:p-12 rounded-t-3xl shadow-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              What Clients Appreciate Most
            </h3>
            
            <ul className="space-y-5">
              {checkPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  {/* Circular Icon with Checkmark */}
                  <div className="shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-white/90 font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;