import React from 'react';

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navigation Bar */}
      <div className="bg-[#002B5B] text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo-white.png" alt="Metrilize Logo" className="h-8" />
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Solutions</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">EN</a>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-full font-semibold text-sm">
          Book Demo
        </button>
      </div>

      {/* Hero Section 1 */}
      <div className="bg-[#002B5B] text-white py-16 px-6 text-center">
        <h2 className="text-lg font-semibold text-green-400 mb-2">Sustainability Insights</h2>
        <h1 className="text-2xl font-bold mb-4">Designed Around Your Needs</h1>
        <p className="text-sm mb-6">
          ESG & Footprint Compliance Made Simple.<br />
          Precision, Expertise, and Clarity in One Platform.
        </p>
        <button className="bg-white text-[#002B5B] font-semibold px-6 py-2 rounded-full text-sm">
          Start your journey
        </button>
        <div className="mt-10">
          <img src="/hero-image.png" alt="Sustainability Graphic" className="mx-auto max-w-md" />
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="bg-white py-20 px-6 text-center">
        <h2 className="text-xl font-semibold text-[#002B5B] mb-4">
          Measure your Carbon footprint across your company or product without the cost or complexity.
        </h2>
        <p className="text-sm max-w-2xl mx-auto mb-6">
          Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.<br />
          Built for businesses. Trusted by experts.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold text-sm">
          Book Demo
        </button>
        <div className="mt-10">
          <img src="/carbon-icon.png" alt="Carbon Analysis" className="mx-auto max-w-sm" />
        </div>
      </div>
    </div>
  );
}
