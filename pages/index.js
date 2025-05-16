export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section 1 */}
      <section
        className="relative w-full h-screen bg-cover bg-center backdrop-blur-md"
        style={{ backgroundImage: "url('/factory-bg.jpg')" }}
      >
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6">
          <img
            src="/metrilize-logo.png"
            alt="Metrilize Logo"
            className="h-16 md:h-20 lg:h-24 transition-transform duration-300 hover:scale-105"
          />
          <div className="hidden md:flex gap-8 text-base lg:text-lg">
            {['Products', 'Solutions', 'Pricing', 'About', 'Login', 'EN'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:bg-gray-100 hover:shadow px-4 py-2 rounded-md transition"
              >
                {item}
              </a>
            ))}
            <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-300">
              Book Demo
            </button>
          </div>
        </nav>
        <div className="absolute top-1/4 left-10 max-w-xl text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#0a1b35]">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="mt-6 text-lg md:text-xl text-sky-600">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built In. <br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="mt-8 bg-sky-100 px-6 py-3 rounded-xl font-bold hover:bg-sky-200">
            Start your journey
          </button>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section
        className="relative w-full h-screen bg-cover bg-center backdrop-blur-md"
        style={{ backgroundImage: "url('/Carbon-bg.jpg')" }}
      >
        <div className="absolute top-1/4 left-10 max-w-xl text-left text-green-900">
          <h2 className="text-2xl md:text-4xl font-bold">
            Measure your Carbon footprint <br /> across your company or product
          </h2>
          <p className="mt-6 text-base md:text-lg">
            Professional, data-driven reports that go beyond numbers delivering <br />
            clear insights and actionable recommendations. <br />
            Built for businesses. Trusted by experts.
          </p>
          <button className="mt-6 bg-green-800 text-white px-6 py-2 rounded shadow hover:bg-green-700">
            Book Demo
          </button>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section
        className="relative w-full h-screen bg-cover bg-center backdrop-blur-md"
        style={{ backgroundImage: "url('/water-bg-2.jpg')" }}
      >
        <div className="absolute top-1/4 left-10 max-w-xl text-left text-sky-900">
          <h2 className="text-2xl md:text-4xl font-bold">
            Understand your Water Impact <br /> From Source to Drain
          </h2>
          <p className="mt-6 text-base md:text-lg">
            Track and reduce your water footprint with clarity, <br />
            from production to wastewater — powered by smart data <br />
            and sustainability insights.
          </p>
          <button className="mt-6 bg-sky-600 text-white px-6 py-2 rounded shadow hover:bg-sky-500">
            Book Demo
          </button>
        </div>
      </section>
    </main>
  );
}
