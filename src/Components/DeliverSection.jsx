import React from "react";

const DeliverSection = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "Our development teams create business-ready applications that are secure, scalable, and aligned with long-term operational demands. These solutions are not experiments. They are structured to support real work, solve clear problems, and adapt as you grow.",
      // Monitor Icon SVG
      iconPath: '/images/development-icon.png',
      isHighlighted: true,
    },
    {
      title: "IT Consultancy",
      description:
        "We assess the gap between where your systems are and where your business needs them to be. Our consultants do not just offer advice. They work to develop strategic pathways that simplify complexity and reduce inefficiency across every department.",
      // Users Icon SVG
      iconPath: '/images/consultancy-icon.png',
      isHighlighted: false,
    },
    {
      title: "Infrastructure Support",
      description:
        "Day-to-day functionality matters. Our support team provides dependable technical service to resolve issues quickly, prevent repeat problems, and maintain reliable infrastructure. From minor interruptions to larger transitions, you will never face a system issue alone.",
      // Settings/Gear Icon SVG
      iconPath: '/images/infrastructure-icon.png',
      isHighlighted: false,
    },
    {
      title: "Network Security and Monitoring",
      description:
        "Your network cannot afford blind spots. Orbal gives you complete visibility into activity, anomalies, and vulnerabilities. We prevent damage before it spreads and monitor usage patterns to anticipate future needs.",
        iconPath: '/images/security-icon.png',
      isHighlighted: false,
    },
  ];

  return (
    <section className="w-full bg-[#05060f] py-20 font-sans">
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Section Header Tag */}
        <div className="mb-10">
          <div className="inline-flex items-center bg-[#21f3d6] px-5 py-2 rounded-full">
            <div className="w-8 h-1 -ml-8 bg-blue-600 mr-3 rounded-full"></div>
            <span className="text-[#05060f] font-bold text-sm tracking-wide">
              What We Deliver
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 md:p-12 flex flex-col justify-between transition-transform hover:scale-[1.01] ${
                item.isHighlighted
                  ? "bg-linear-to-br from-[#3b82f6] to-[#4f46e5] text-white"
                  : "bg-[#0b0f1a] text-white"
              }`}
            >
              <div>
                <img className="w-16 mb-6" src={item.iconPath} alt="" />
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-5 ${
                    item.isHighlighted ? "text-white" : "text-[#21f3d6]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-10 ${
                    item.isHighlighted ? "text-blue-50" : "text-gray-400"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <button className="cursor-pointer w-fit bg-[#21f3d6] hover:bg-[#1cdbc1] text-[#05060f] font-bold py-3 px-8 rounded-xl text-sm transition-colors">
                Explore More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;