import React from "react";

const PurposeSection = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 leading-tight">
              Purpose Beyond the Project
            </h2>

            <p className="mt-6 text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              Whether refining workflows or hardening defences, we see every solution as a 
              contribution. Our clients see the benefit through smoother operations. Our partners 
              see the difference in how we work. Our communities benefit when our systems 
              perform better for everyone involved.
            </p>
          </div>

          {/* Image Container */}
          <div className="flex justify-center md:justify-end">
              <img
                src="/Orbal-Interactive/images/purpose-pic.png"
                alt="Purpose-pic"
                className="rounded-2xl object-cover max-h-90 w-full md:w-auto"
              />
            </div>

        </div>
      </div>
    </section>
  );
};

export default PurposeSection;