// This file is a revised layout configuration for Metrilize homepage
// It fixes logo visibility, text alignment, image blur, and background scaling

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">

      {/* HERO 1 - ESG Overview */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <img
          src="/factory-desktop-bg.png"
          alt="Factory Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 blur-sm"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 text-[#0a1b35]">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built on
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-[#0a1b35] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            Start your journey
          </button>
        </div>
      </section>

      {/* HERO 2 - Carbon Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <img
          src="/carbon-desktop-bg.png"
          alt="Carbon Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 blur-sm"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-[#073b1a]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Measure your carbon footprint<br /> across your company or product
          </h2>
          <p className="text-base lg:text-lg mb-6">
            Professional, data-driven reports that go beyond numbers delivering clear insights
            and actionable recommendations.
          </p>
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            Book Demo
          </button>
        </div>
      </section>

      {/* HERO 3 - Water Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <img
          src="/water-desktop-bg.png"
          alt="Water Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 blur-sm"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-[#002855]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Understand your Water Impact<br /> From Source to Drain
          </h2>
          <p className="text-base lg:text-lg mb-6">
            Track and reduce your water footprint with clarity, from production to wastewater —
            powered by smart data and sustainability insights.
          </p>
          <button className="bg-[#1a4ed8] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            Book Demo
          </button>
        </div>
      </section>
    </div>
  );
}
