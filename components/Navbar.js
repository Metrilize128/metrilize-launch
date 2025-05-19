// components/Navbar.js
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <img src="/metrilize-logo.png" alt="Metrilize Logo" className="h-10 cursor-pointer" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link href="#" className="hover:font-bold text-sm text-[#0a1b35]">Products</Link>
        <Link href="#" className="hover:font-bold text-sm text-[#0a1b35]">Solutions</Link>
        <Link href="#" className="hover:font-bold text-sm text-[#0a1b35]">Pricing</Link>
        <Link href="#" className="hover:font-bold text-sm text-[#0a1b35]">About</Link>
        <Link href="#" className="hover:font-bold text-sm text-[#0a1b35]">Login</Link>
        <Link href="#" className="hover:font-bold text-sm text-[#0a1b35]">EN</Link>
        <button className="bg-yellow-400 text-[#0a1b35] font-bold py-2 px-4 rounded-full hover:scale-105 transition">Book Demo</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <Link href="#" className="hover:font-bold text-[#0a1b35]" onClick={toggleMenu}>Products</Link>
          <Link href="#" className="hover:font-bold text-[#0a1b35]" onClick={toggleMenu}>Solutions</Link>
          <Link href="#" className="hover:font-bold text-[#0a1b35]" onClick={toggleMenu}>Pricing</Link>
          <Link href="#" className="hover:font-bold text-[#0a1b35]" onClick={toggleMenu}>About</Link>
          <Link href="#" className="hover:font-bold text-[#0a1b35]" onClick={toggleMenu}>Login</Link>
          <Link href="#" className="hover:font-bold text-[#0a1b35]" onClick={toggleMenu}>EN</Link>
          <button className="bg-yellow-400 text-[#0a1b35] font-bold py-2 px-6 rounded-full hover:scale-105 transition">Book Demo</button>
        </div>
      )}
    </nav>
  );
}
