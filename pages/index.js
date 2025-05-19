// pages/index.js

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section 1: Factory */}
      <section className="relative w-[90%] max-w-screen-xl mx-auto min-h-screen flex items-center justify-center text-left">
        <div className="absolute inset-0 z-0">
          <Image
            src="/factory-desktop-bg.png"
            alt="Factory Background"
            layout="fill"
            objectFit="cover"
            className="blur-sm opacity-80"
            priority
          />
        </div>
        <div className="relative z-10 max-w-3xl space-y-6 text-[#0a1b35]">
          <h1 className="text-5xl font-bold leading-tight">
            Sustainability Insights<br />
            Designed Around Your Needs
          </h1>
          <p className="text-lg">
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built on
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <Link href="#">
            <button className="bg-[#0a1b35] text-white py-3 px-6 rounded-full hover:scale-105 transition">
              Start your journey
            </button>
          </Link>
        </div>
      </section>

      {/* Hero Section 2: Carbon */}
      <section className="relative w-[90%] max-w-screen-xl mx-auto min-h-screen flex items-center justify-center text-left">
        <div className="absolute inset-0 z-0">
          <Image
            src="/carbon-desktop-bg.png"
            alt="Carbon Background"
            layout="fill"
            objectFit="cover"
            className="blur-sm opacity-80"
            priority
          />
        </div>
        <div className="relative z-10 max-w-3xl space-y-6 text-[#0a1b35]">
          <h2 className="text-4xl font-bold leading-tight">
            Measure your carbon footprint<br />
            across your company or product
          </h2>
          <p className="text-base">
            Professional, data-driven reports that go beyond numbers delivering clear insights
            and actionable recommendations.
          </p>
          <Link href="#">
            <button className="bg-green-600 text-white py-3 px-6 rounded-full hover:scale-105 transition">
              Book Demo
            </button>
          </Link>
        </div>
      </section>

      {/* Hero Section 3: Water */}
      <section className="relative w-[90%] max-w-screen-xl mx-auto min-h-screen flex items-center justify-center text-left">
        <div className="absolute inset-0 z-0">
          <Image
            src="/water-desktop-bg.png"
            alt="Water Background"
            layout="fill"
            objectFit="cover"
            className="blur-sm opacity-80"
            priority
          />
        </div>
        <div className="relative z-10 max-w-3xl space-y-6 text-[#0a1b35]">
          <h2 className="text-4xl font-bold leading-tight">
            Understand your Water Impact<br />
            From Source to Drain
          </h2>
          <p className="text-base">
            Track and reduce your water footprint with clarity,
            from production to wastewater — powered by smart data
            and sustainability insights.
          </p>
          <Link href="#">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:scale-105 transition">
              Book Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
