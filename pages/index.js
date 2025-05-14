// File: app/page.tsx (or pages/index.js if using older Next.js structure)

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#003B60] text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-green-300 mb-2">
            Sustainability Insights
          </h1>
          <h2 className="text-2xl font-bold text-green-300 mb-6">
            Designed Around Your Needs
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            ESG &amp; Footprint Compliance Made Simple<br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="bg-white text-[#003B60] font-semibold px-6 py-3 rounded-full">
            Start your journey
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/metrilize-hero-graphic.png"
            alt="ESG Graphic"
            width={500}
            height={400}
          />
        </div>
      </div>

      {/* Carbon Insight Section */}
      <div className="bg-white text-[#003B60] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Measure your Carbon footprint across your company or product without the cost or complexity.
            </h3>
            <p className="mb-4 text-gray-700">
              Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.
            </p>
            <p className="mb-6 text-gray-700">
              Built for businesses. Trusted by experts.
            </p>
            <Link href="/demo">
              <button className="bg-yellow-400 text-[#003B60] font-semibold px-6 py-3 rounded-full">
                Book Demo
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/co2-diagram.png"
              alt="CO2 Diagram"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
