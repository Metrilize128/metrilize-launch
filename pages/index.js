// pages/index.js
import Navbar from '../components/Navbar';
import React from 'react';

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />

      {/* Section 1: Factory */}
      <section className="relative h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `
            url('/factory-desktop-bg.png')`,
        }}
      >
        <div className="text-left px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="mt-4 text-blue-600 text-lg md:text-xl">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built In. <br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="mt-6 bg-blue-100 hover:bg-blue-200 font-semibold py-3 px-6 rounded-xl transition">
            Start your journey
          </button>
        </div>
      </section>

      {/* Section 2: Carbon */}
      <section className="relative h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/carbon-desktop-bg.png')`,
        }}
      >
        <div className="text-left px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-green-900">
            Measure your Carbon footprint <br /> across your company or product
          </h2>
          <p className="mt-4 text-green-800 text-base md:text-lg">
            Professional, data-driven reports that go beyond numbers delivering <br />
            clear insights and actionable recommendations. <br />
            Built for businesses. Trusted by experts.
          </p>
          <button className="mt-6 bg-green-700 text-white hover:bg-green-800 font-bold py-3 px-6 rounded transition">
            Book Demo
          </button>
        </div>
      </section>

      {/* Section 3: Water */}
      <section className="relative h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/water-desktop-bg.png')`,
        }}
      >
        <div className="text-left px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
            Understand your Water Impact <br /> From Source to Drain
          </h2>
          <p className="mt-4 text-blue-800 text-base md:text-lg">
            Track and reduce your water footprint with clarity, <br />
            from production to wastewater — powered by smart data <br /> and sustainability insights.
          </p>
          <button className="mt-6 bg-blue-700 text-white hover:bg-blue-800 font-bold py-3 px-6 rounded transition">
            Book Demo
          </button>
        </div>
      </section>
    </div>
  );
}
