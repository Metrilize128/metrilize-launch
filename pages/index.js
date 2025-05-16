// pages/index.js

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* Hero Section 1 - Factory */}
      <section className="relative h-[90vh] min-h-[700px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/factory-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Navigation */}
        <nav className="absolute top-6 left-0 right-0 mx-auto flex max-w-7xl items-center justify-between px-6">
          <Image src="/metrilize-logo.png" alt="Metrilize Logo" width={180} height={60} />
          <div className="hidden md:flex items-center space-x-6 text-[15px] font-medium text-[#00305A]">
            {['Products', 'Solutions', 'Pricing', 'About', 'Login', 'EN'].map((item) => (
              <a
                key={item}
                href="#"
                className="transition rounded-md px-3 py-1 hover:bg-[#f2f2f2] hover:shadow"
              >
                {item}
              </a>
            ))}
            <button className="rounded-full bg-[#FFD058] px-5 py-2 font-semibold text-[#00305A] hover:shadow-md">
              Book Demo
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="relative z-10 mt-40 px-6 md:ml-32 max-w-xl text-[#00305A]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-md">
            ESG & Footprint Compliance Made Simple<br />
            with Sustainability Reporting Built In. <br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="mt-6 rounded-full bg-[#C2E7F2] px-6 py-3 text-sm font-semibold text-[#00305A] hover:shadow-md">
            Start your journey
          </button>
        </div>
      </section>

      {/* Hero Section 2 - Carbon */}
      <section className="relative h-[90vh] min-h-[700px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/Carbon-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 mt-32 px-6 md:ml-32 max-w-xl text-[#234F2E]">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Measure your Carbon footprint <br /> across your company or product
          </h2>
          <p className="mt-4 text-[16px] max-w-lg text-[#234F2E]">
            Professional, data-driven reports that go beyond numbers delivering<br />
            clear insights and actionable recommendations. <br />
            Built for businesses. Trusted by experts.
          </p>
          <button className="mt-6 rounded-md bg-[#234F2E] px-6 py-2 text-white font-semibold hover:bg-opacity-90">
            Book Demo
          </button>
        </div>
      </section>

      {/* Hero Section 3 - Water */}
      <section className="relative h-[90vh] min-h-[700px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/water-bg.jpg')" }}>
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10 mt-32 px-6 md:ml-32 max-w-xl text-[#007BAC]">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Understand your Water Impact<br /> From Source to Drain
          </h2>
          <p className="mt-4 text-[16px] max-w-lg text-[#007BAC]">
            Track and reduce your water footprint with clarity,<br />
            from production to wastewater — powered by<br />
            smart data and sustainability insights.
          </p>
          <button className="mt-6 rounded-md bg-[#00C2A8] px-6 py-2 text-white font-semibold hover:bg-opacity-90">
            Book Demo
          </button>
        </div>
      </section>

    </main>
  );
}
