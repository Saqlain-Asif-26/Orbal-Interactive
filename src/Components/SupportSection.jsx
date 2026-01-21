import React from "react";

const SupportSection = () => {
  return (
    <section className="w-full bg-[#05060f] py-20">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="rounded-3xl bg-linear-to-br from-[#0b0f1a] to-[#070912] p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 leading-snug">
                Global IT Support. Built for <br />
                Performance, Security, and Impact.
              </h2>

              <p className="mt-6 text-sm text-gray-300 leading-relaxed">
                Technology should not be a burden. It should strengthen how you work,
                scale your growth, and protect what matters. Orbal Interactive Services
                delivers precisely that. We support international enterprises with IT
                solutions that turn complex systems into dependable frameworks for success.
              </p>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                From first consultation to daily support, our work is grounded in one
                purpose: to provide real value through reliable performance. We offer more
                than fixes — we design systems that support your business without compromise.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/support-pic.png"
                alt="IT Support Team"
                className="rounded-2xl object-cover max-h-90 w-full md:w-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
