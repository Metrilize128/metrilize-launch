import React from 'react';

export default function HomePage() {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section 1 */}
      <section className="bg-[#002C57] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <div className="flex justify-between items-center w-full mb-8">
            <img src="/logo.svg" alt="Metrilize Logo" className="h-10" />
            <nav className="space-x-6 text-sm font-medium">
              <a href="#" className="hover:underline">Products</a>
              <a href="#" className="hover:underline">Solutions</a>
              <a href="#" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Login</a>
              <a href="#" className="hover:underline">EN</a>
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full ml-4">Book Demo</button>
            </nav>
          </div>

          <h2 className="text-green-300 text-xl font-bold mb-2">Sustainability Insights</h2>
          <h1 className="text-3xl font-extrabold text-green-100 mb-4">Designed Around Your Needs</h1>
          <p className="text-sm text-white max-w-lg mb-6">
            ESG & Footprint Compliance Made Simple. Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow">Start your journey</button>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <svg
            viewBox="0 0 800 300"
            className="w-full max-w-4xl h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="800" height="300" fill="#eaf4ff" />
            <rect x="50" y="180" width="60" height="100" fill="#9BBBD4" />
            <rect x="120" y="160" width="80" height="120" fill="#78A5D8" />
            <rect x="220" y="190" width="40" height="90" fill="#6B9AC4" />
            <polygon points="300,190 320,170 340,190" fill="#FFD93D" />
            <rect x="310" y="190" width="20" height="90" fill="#FFC107" />
            <circle cx="600" cy="140" r="20" fill="#90EE90" />
            <rect x="580" y="180" width="40" height="100" fill="#2E7D32" />
            <polygon points="700,180 720,160 740,180" fill="#4CAF50" />
            <rect x="710" y="180" width="20" height="100" fill="#81C784" />
            <text x="400" y="280" textAnchor="middle" fill="#333" fontSize="16">Clean Energy Cityscape</text>
          </svg>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="relative py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
              Measure your Carbon footprint across your company or product without the cost or complexity.
            </h2>
            <p className="text-gray-600 mb-6">
              Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.<br />
              Built for businesses. Trusted by experts.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow">Book Demo</button>
          </div>
          <div className="md:w-1/2">
            <svg
              viewBox="0 0 400 200"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="200" fill="#F1F8E9" />
              <circle cx="60" cy="60" r="20" fill="#AED581" />
              <rect x="100" y="120" width="40" height="70" fill="#81C784" />
              <rect x="160" y="110" width="30" height="80" fill="#66BB6A" />
              <polygon points="250,140 260,120 270,140" fill="#FFB300" />
              <rect x="255" y="140" width="10" height="60" fill="#FFA000" />
              <text x="200" y="190" textAnchor="middle" fill="#333" fontSize="14">Factory & Energy Icons</text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
