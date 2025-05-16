import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
        <Image src="/metrilize-logo.png" alt="Metrilize Logo" width={140} height={40} />
        <nav className="hidden md:flex space-x-6 text-sm text-[#0B1D39] font-medium">
          <a href="#" className="hover:bg-gray-100 rounded-md px-3 py-1 transition">Products</a>
          <a href="#" className="hover:bg-gray-100 rounded-md px-3 py-1 transition">Solutions</a>
          <a href="#" className="hover:bg-gray-100 rounded-md px-3 py-1 transition">Pricing</a>
          <a href="#" className="hover:bg-gray-100 rounded-md px-3 py-1 transition">About</a>
          <a href="#" className="hover:bg-gray-100 rounded-md px-3 py-1 transition">Login</a>
          <a href="#" className="hover:bg-gray-100 rounded-md px-3 py-1 transition">EN</a>
        </nav>
        <button className="bg-yellow-400 text-[#0B1D39] font-bold px-5 py-2 rounded-full text-sm shadow hover:bg-yellow-300">Book Demo</button>
      </header>

      {/* Section 1 - Factory */}
      <section className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-start px-8 md:px-24" style={{ backgroundImage: 'url(/factory-bg.jpg)' }}>
        <div className="z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B1D39] leading-tight mb-4">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="text-[#5A5A5A] text-lg md:text-xl mb-6">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built In.<br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-[#C5E6F8] text-[#0B1D39] font-bold px-6 py-3 rounded-full shadow hover:bg-[#aee2fc]">Start your journey</button>
        </div>
      </section>

      {/* Section 2 - Carbon */}
      <section className="relative w-full h-[75vh] bg-cover bg-center flex items-center px-8 md:px-24" style={{ backgroundImage: 'url(/Carbon-bg.jpg)' }}>
        <div className="z-10 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1D3B2C] mb-4">Measure your Carbon footprint <br /> across your company or product</h2>
          <p className="text-[#444] mb-4 text-sm md:text-base">
            Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations. <br />
            Built for businesses. Trusted by experts.
          </p>
          <button className="bg-[#224D3B] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-[#1a3e2d]">Book Demo</button>
        </div>
      </section>

      {/* Section 3 - Water */}
      <section className="relative w-full h-[75vh] bg-cover bg-center flex items-center px-8 md:px-24" style={{ backgroundImage: 'url(/water-bg.jpg)' }}>
        <div className="z-10 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#064F6C] mb-4">
            Understand your Water Impact <br /> From Source to Drain
          </h2>
          <p className="text-[#1a1a1a] mb-4 text-sm md:text-base">
            Track and reduce your water footprint with clarity, from production to wastewater — powered by smart data and sustainability insights.
          </p>
          <button className="bg-[#1EC9F3] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-[#12b9e2]">Book Demo</button>
        </div>
      </section>
    </div>
  );
}
