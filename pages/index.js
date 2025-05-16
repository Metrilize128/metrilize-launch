import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1: Factory */}
      <section
        className="relative w-[92%] mx-auto h-screen flex items-start justify-between bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/factory-desktop-bg.png')`,
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(255,255,255,0.1)'
        }}
      >
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6">
          <img
            src="/images/metrilize-logo.png"
            alt="Metrilize Logo"
            className="h-28 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          />
          <div className="hidden md:flex gap-8 text-[18px] items-center">
            <a className="hover:bg-gray-100 px-3 py-1 rounded transition" href="#">Products</a>
            <a className="hover:bg-gray-100 px-3 py-1 rounded transition" href="#">Solutions</a>
            <a className="hover:bg-gray-100 px-3 py-1 rounded transition" href="#">Pricing</a>
            <a className="hover:bg-gray-100 px-3 py-1 rounded transition" href="#">About</a>
            <a className="hover:bg-gray-100 px-3 py-1 rounded transition" href="#">Login</a>
            <a className="hover:bg-gray-100 px-3 py-1 rounded transition" href="#">EN</a>
            <button className="bg-yellow-400 text-[#0a1b35] font-bold py-2 px-6 rounded-full">
              Book Demo
            </button>
          </div>
        </nav>
        <div className="mt-40 ml-16 max-w-[600px]">
          <h1 className="text-5xl font-bold leading-snug">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="mt-6 text-blue-600 text-xl leading-relaxed">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built In. <br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="mt-8 bg-blue-100 py-3 px-6 rounded-xl font-semibold">
            Start your journey
          </button>
        </div>
      </section>

      {/* Section 2: Carbon */}
      <section
        className="relative w-[92%] mx-auto h-screen flex items-center justify-start bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/carbon-desktop-bg.png')`,
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(255,255,255,0.1)'
        }}
      >
        <div className="ml-16 max-w-[600px]">
          <h2 className="text-4xl font-bold text-green-900 leading-snug">
            Measure your Carbon footprint <br /> across your company or product
          </h2>
          <p className="mt-4 text-green-800 text-lg leading-relaxed">
            Professional, data-driven reports that go beyond numbers delivering <br />
            clear insights and actionable recommendations. <br />
            Built for businesses. Trusted by experts.
          </p>
          <button className="mt-6 bg-green-800 text-white py-3 px-6 rounded-xl font-semibold">
            Book Demo
          </button>
        </div>
      </section>

      {/* Section 3: Water */}
      <section
        className="relative w-[92%] mx-auto h-screen flex items-center justify-start bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/water-desktop-bg.png')`,
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(255,255,255,0.1)'
        }}
      >
        <div className="ml-16 max-w-[600px]">
          <h2 className="text-4xl font-bold text-blue-900 leading-snug">
            Understand your Water Impact <br /> From Source to Drain
          </h2>
          <p className="mt-4 text-blue-800 text-lg leading-relaxed">
            Track and reduce your water footprint with clarity, <br />
            from production to wastewater — powered by <br /> smart data and sustainability insights.
          </p>
          <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold">
            Book Demo
          </button>
        </div>
      </section>
    </div>
  );
}
