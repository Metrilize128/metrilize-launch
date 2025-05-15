import React from 'react';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-sm">
        <img src="/logo.png" alt="Metrilize Logo" className="h-8" />
        <ul className="flex space-x-6 text-sm font-medium">
          <li>Products</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Login</li>
          <li>EN</li>
          <li>
            <button className="bg-yellow-400 px-4 py-2 rounded-full text-white font-semibold">Book Demo</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section 1 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-300 mb-2">
              Sustainability Insights <br /> Designed Around Your Needs
            </h1>
            <p className="text-base md:text-lg text-white mb-6">
              ESG & Footprint Compliance Made Simple. <br /> Precision, Expertise, and Clarity in One Platform.
            </p>
            <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold shadow">
              Start your journey
            </button>
          </div>

          {/* Grid Visual */}
          <div className="relative w-full h-64 md:h-80 bg-blue-700 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm tracking-widest">
              <div className="grid grid-cols-3 gap-4 text-center text-xs">
                <span className="text-yellow-300">CARBON Footprint</span>
                <span className="text-cyan-300">LCA</span>
                <span className="text-cyan-300">WATER Footprint</span>
                <span className="text-yellow-400">EPD</span>
                <span className="text-lime-300">LCC</span>
                <span className="text-cyan-300">ESG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Graphic with animated city + icons */}
          <div className="relative w-full h-72 bg-gradient-to-tr from-gray-200 to-white rounded-xl shadow-md flex items-center justify-center">
            <div className="absolute flex space-x-4 items-end">
              <div className="w-6 h-20 bg-green-300 rounded-sm"></div>
              <div className="w-6 h-32 bg-green-400 rounded-sm"></div>
              <div className="w-6 h-28 bg-green-500 rounded-sm"></div>
              <div className="w-6 h-40 bg-yellow-400 rounded-sm"></div>
              <div className="w-6 h-48 bg-green-600 rounded-sm"></div>
            </div>
            <span className="absolute bottom-4 text-gray-500 text-sm">Clean Energy Cityscape</span>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
              Measure your Carbon footprint across your company or product without the cost or complexity.
            </h2>
            <p className="text-gray-600 mb-6">
              Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations. <br /> Built for businesses. Trusted by experts.
            </p>
            <button className="bg-yellow-400 px-6 py-2 rounded-full text-white font-semibold">
              Book Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
