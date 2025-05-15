export default function Home() {
  return (
    <main className="bg-[#001E3C] text-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-xl font-bold">METRILIZE</div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Solutions</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">EN</a>
        </div>
        <button className="bg-yellow-400 text-[#001E3C] font-semibold px-4 py-2 rounded-xl hover:bg-yellow-300 transition">Book Demo</button>
      </nav>

      {/* Hero Section 1 */}
      <section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
            Sustainability Insights<br />Designed Around Your Needs
          </h1>
          <p className="text-gray-300 mb-6 max-w-md">
            ESG & Footprint Compliance Made Simple.<br />Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-white text-[#001E3C] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Start your journey
          </button>
        </div>

        {/* Vector Graphic Replacement */}
        <div className="relative">
          <div className="w-full h-64 bg-gradient-to-tr from-blue-800 to-cyan-700 rounded-xl flex justify-center items-center">
            <div className="text-center">
              <p className="text-yellow-300 font-bold text-lg">CARBON Footprint</p>
              <p className="text-cyan-300 font-bold text-lg">LCA</p>
              <p className="text-blue-400 font-bold text-lg">WATER Footprint</p>
              <p className="text-yellow-400 font-bold text-lg">EPD</p>
              <p className="text-lime-400 font-bold text-lg">LCC</p>
              <p className="text-teal-300 font-bold text-lg">ESG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="px-10 py-20 bg-[#F5F7F9] text-[#001E3C] grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold">
            Measure your Carbon footprint across your company or product without the cost or complexity.
          </h2>
          <p className="text-gray-700 max-w-md">
            Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations. Built for businesses. Trusted by experts.
          </p>
          <button className="bg-yellow-400 px-6 py-2 rounded-xl font-semibold text-[#001E3C] hover:bg-yellow-300 transition">
            Book Demo
          </button>
        </div>

        {/* Icon Graphic Placeholder */}
        <div className="w-full h-64 bg-gradient-to-br from-green-200 to-white rounded-xl flex items-center justify-center">
          <div className="text-center text-green-700 font-bold text-lg">Factory & Energy Icons</div>
        </div>
      </section>
    </main>
  );
}
