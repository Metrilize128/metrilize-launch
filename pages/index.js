import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans text-[#0a1b35]">
      {/* Section 1: Factory Hero */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/factory-desktop-bg.png')",
          height: '90vh',
          backdropFilter: 'blur(2px)',
        }}
      >
        <nav className="flex justify-between items-center px-12 py-6">
          <img
            src="/metrilize-logo.png"
            alt="Metrilize Logo"
            className="h-16 md:h-20 hover:scale-105 transition-transform duration-300"
          />
          <div className="hidden md:flex gap-10 text-sm md:text-base">
            {['Products', 'Solutions', 'Pricing', 'About', 'Login', 'EN'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:bg-gray-100 px-3 py-1 rounded transition"
              >
                {item}
              </a>
            ))}
            <button className="bg-yellow-400 text-[#0a1b35] font-bold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition">
              Book Demo
            </button>
          </div>
        </nav>
        <div className="px-12 py-20 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="text-blue-600 text-base md:text-lg leading-relaxed mb-8">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built In. <br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-[#d4edf9] px-6 py-3 rounded-lg font-bold shadow hover:shadow-md">
            Start your journey
          </button>
        </div>
      </section>

      {/* Section 2: Carbon Hero */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-[#254423]"
        style={{
          backgroundImage: "url('/carbon-desktop-bg.png')",
          height: '80vh',
          backdropFilter: 'blur(2px)',
        }}
      >
        <div className="px-12 py-24 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Measure your Carbon footprint <br /> across your company or product
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Professional, data-driven reports that go beyond numbers delivering <br />
            clear insights and actionable recommendations. <br />
            Built for businesses. Trusted by experts.
          </p>
          <button className="bg-[#2e5c37] text-white px-6 py-3 rounded-md font-bold hover:bg-[#254423]">
            Book Demo
          </button>
        </div>
      </section>

      {/* Section 3: Water Hero */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat text-[#185a92]"
        style={{
          backgroundImage: "url('/water-desktop-bg.png')",
          height: '80vh',
          backdropFilter: 'blur(2px)',
        }}
      >
        <div className="px-12 py-24 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Understand your Water Impact <br /> From Source to Drain
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Track and reduce your water footprint with clarity, <br />
            from production to wastewater — powered by <br />
            smart data and sustainability insights.
          </p>
          <button className="bg-[#26b5d9] text-white px-6 py-3 rounded-md font-bold hover:bg-[#1a9cbf]">
            Book Demo
          </button>
        </div>
      </section>
    </div>
  );
}
