import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* NAVIGATION BAR */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 md:px-16 z-10">
        <Image
          src="/metrilize-logo.png"
          alt="Metrilize Logo"
          width={160}
          height={50}
          className="object-contain"
        />
        <div className="hidden lg:flex space-x-8 text-[#002C4B] font-medium text-sm items-center">
          <a href="#" className="hover:bg-gray-200 px-3 py-1 rounded-md transition">Products</a>
          <a href="#" className="hover:bg-gray-200 px-3 py-1 rounded-md transition">Solutions</a>
          <a href="#" className="hover:bg-gray-200 px-3 py-1 rounded-md transition">Pricing</a>
          <a href="#" className="hover:bg-gray-200 px-3 py-1 rounded-md transition">About</a>
          <a href="#" className="hover:bg-gray-200 px-3 py-1 rounded-md transition">Login</a>
          <a href="#" className="hover:bg-gray-200 px-3 py-1 rounded-md transition">EN</a>
          <button className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-[#002C4B] font-bold px-5 py-2 rounded-full text-sm">
            Book Demo
          </button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#002C4B] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-2 p-4 lg:hidden">
            <a href="#" className="text-[#002C4B]">Products</a>
            <a href="#" className="text-[#002C4B]">Solutions</a>
            <a href="#" className="text-[#002C4B]">Pricing</a>
            <a href="#" className="text-[#002C4B]">About</a>
            <a href="#" className="text-[#002C4B]">Login</a>
            <a href="#" className="text-[#002C4B]">EN</a>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#002C4B] font-bold px-4 py-2 rounded-full text-sm">
              Book Demo
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <div
        className="h-screen w-full bg-cover bg-center pt-32 md:pt-40 px-6 md:px-20"
        style={{ backgroundImage: 'url(/factory-bg.jpg)' }}
      >
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#002C4B] leading-tight">
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p className="text-md md:text-lg text-[#00AEEF] mt-4 leading-relaxed">
            ESG & Footprint Compliance Made Simple. <br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button className="mt-6 bg-[#B6E0F2] hover:bg-[#A0D4EC] text-[#002C4B] font-semibold px-6 py-3 rounded-full text-sm md:text-base">
            Start your journey
          </button>
        </div>
      </div>
    </div>
  );
}
