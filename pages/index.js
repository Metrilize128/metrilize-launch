// pages/index.js
export default function Home() {
  return (
    <main className="pt-24">
      {/* Hero 1 - Factory */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/factory-desktop-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] max-w-4xl text-center text-[#0a1b35] backdrop-blur-sm bg-white/50 p-8 rounded-lg">
          <h1 className="text-4xl font-extrabold mb-4">Sustainability Insights Designed Around Your Needs</h1>
          <p className="text-lg mb-6">ESG & Footprint Compliance Made Simple with Sustainability Reporting Built on Precision, Expertise, and Clarity in One Platform.</p>
          <button className="bg-[#0a1b35] text-white py-2 px-6 rounded-full font-medium hover:scale-105 transition">Start your journey</button>
        </div>
      </section>

      {/* Hero 2 - Carbon */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/carbon-desktop-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] max-w-4xl text-center text-[#0a1b35] backdrop-blur-sm bg-white/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Measure your carbon footprint across your company or product</h2>
          <p className="text-md mb-6">Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.</p>
          <button className="bg-green-600 text-white py-2 px-6 rounded-full font-medium hover:scale-105 transition">Book Demo</button>
        </div>
      </section>

      {/* Hero 3 - Water */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/water-desktop-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] max-w-4xl text-center text-[#0a1b35] backdrop-blur-sm bg-white/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Understand your Water Impact From Source to Drain</h2>
          <p className="text-md mb-6">Track and reduce your water footprint with clarity, from production to wastewater — powered by smart data and sustainability insights.</p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-medium hover:scale-105 transition">Book Demo</button>
        </div>
      </section>
    </main>
  );
}
