import Image from "next/image";

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* Hero Section 1 - Factory */}
      <section
        className="bg-cover bg-center py-24 px-6 md:px-20 lg:px-32 text-white"
        style={{ backgroundImage: "url('/factory-bg.jpg')" }}
      >
        <nav className="flex items-center justify-between mb-16">
          <Image src="/metrilize-logo.png" alt="Metrilize Logo" width={140} height={50} />
          <div className="hidden md:flex gap-8 text-sm">
            <a className="hover:bg-white/20 px-3 py-1 rounded transition" href="#">Products</a>
            <a className="hover:bg-white/20 px-3 py-1 rounded transition" href="#">Solutions</a>
            <a className="hover:bg-white/20 px-3 py-1 rounded transition" href="#">Pricing</a>
            <a className="hover:bg-white/20 px-3 py-1 rounded transition" href="#">About</a>
            <a className="hover:bg-white/20 px-3 py-1 rounded transition" href="#">Login</a>
            <a className="hover:bg-white/20 px-3 py-1 rounded transition" href="#">EN</a>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-full shadow-md transition text-sm">
            Book Demo
          </button>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="text-md md:text-xl text-white/90 mb-8">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built In.<br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-sky-200 hover:bg-sky-300 text-blue-900 font-semibold py-2 px-6 rounded-full shadow-sm text-sm md:text-base">
            Start your journey
          </button>
        </div>
      </section>

      {/* Hero Section 2 - Carbon */}
      <section
        className="bg-cover bg-center py-24 px-6 md:px-20 lg:px-32 text-white"
        style={{ backgroundImage: "url('/Carbon-bg.jpg')" }}
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-green-900">
            Measure your Carbon footprint <br className="hidden md:block" /> across your company or product
          </h2>
          <p className="text-md md:text-lg text-green-900 mb-6">
            Professional, data-driven reports that go beyond numbers delivering <br className="hidden md:block" />
            clear insights and actionable recommendations. <br />
            Built for businesses. Trusted by experts.
          </p>
          <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full text-sm md:text-base">
            Book Demo
          </button>
        </div>
      </section>

      {/* Hero Section 3 - Water */}
      <section
        className="bg-cover bg-center py-24 px-6 md:px-20 lg:px-32 text-white"
        style={{ backgroundImage: "url('/water-bg.jpg')" }}
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-cyan-900">
            Understand your Water Impact <br className="hidden md:block" />
            From Source to Drain
          </h2>
          <p className="text-md md:text-lg text-cyan-900 mb-6">
            Track and reduce your water footprint with clarity, <br className="hidden md:block" />
            from production to wastewater — powered by <br className="hidden md:block" />
            smart data and sustainability insights.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-6 rounded-full text-sm md:text-base">
            Book Demo
          </button>
        </div>
      </section>
    </main>
  );
}
