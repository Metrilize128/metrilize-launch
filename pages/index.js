// pages/index.js

export default function Home() {
  return (
    <main className="bg-[#001F3F] min-h-screen text-white font-sans">
      {/* Header Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 text-sm">
        <div className="text-lg font-bold">Metrilize</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-yellow-400">Products</a>
          <a href="#" className="hover:text-yellow-400">Solutions</a>
          <a href="#" className="hover:text-yellow-400">Pricing</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Login</a>
          <a href="#" className="hover:text-yellow-400">EN</a>
          <button className="ml-4 bg-yellow-400 text-[#001F3F] font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition">Book Demo</button>
        </div>
      </nav>

      {/* Hero Section 1 */}
      <section className="relative px-8 py-20 bg-[#001F3F]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-2">Sustainability Insights</h2>
          <h3 className="text-2xl font-bold text-green-400 mb-6">Designed Around Your Needs</h3>
          <p className="text-gray-300 mb-6">
            ESG & Footprint Compliance Made Simple.<br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-white text-[#001F3F] font-semibold py-2 px-5 rounded-full hover:bg-gray-100">Start your journey</button>
        </div>

        {/* Keywords Floating Text */}
        <div className="absolute right-10 top-20 space-y-2 text-right text-xs">
          <div className="text-green-200">CARBON Footprint</div>
          <div className="text-cyan-400">LCA</div>
          <div className="text-yellow-400">EPD</div>
          <div className="text-lime-300">LCC</div>
          <div className="text-blue-300">WATER Footprint</div>
          <div className="text-sky-400">ESG</div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="relative px-8 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Measure your Carbon footprint across your company or product without the cost or complexity.
            </h3>
            <p className="text-gray-600 mb-6">
              Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.<br />
              Built for businesses. Trusted by experts.
            </p>
            <button className="bg-yellow-400 text-[#001F3F] font-semibold py-2 px-5 rounded-full hover:bg-yellow-300">Book Demo</button>
          </div>

          {/* Placeholder for future cityscape graphic */}
          <div className="w-full h-60 bg-[url('/images/clean-city.svg')] bg-no-repeat bg-contain bg-center"></div>
        </div>
      </section>
    </main>
  );
}
