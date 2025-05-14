import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section 1 */}
      <section className="relative w-full">
        <Image
          src="/images/metrilize-hero-1.png"
          alt="Metrilize Hero 1"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-white text-center px-6 md:px-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Sustainability Insights Designed Around Your Needs
            </h1>
            <p className="text-lg md:text-xl mb-6">
              ESG & Footprint Compliance Made Simple. Precision, Expertise, and Clarity in One Platform.
            </p>
            <Link href="#">
              <a className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow">
                Start your journey
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="relative w-full mt-12">
        <Image
          src="/images/metrilize-hero-2.png"
          alt="Metrilize Hero 2"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-blue-800 text-center px-6 md:px-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Measure your Carbon footprint across your company or product without the cost or complexity.
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.
              <br />
              Built for businesses. Trusted by experts.
            </p>
            <Link href="#">
              <a className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow">
                Book Demo
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
