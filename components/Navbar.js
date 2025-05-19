// components/Navbar.js
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <img src="/metrilize-logo.png" alt="Metrilize Logo" className="h-12 cursor-pointer" />
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 items-center text-[#0a1b35] font-medium">
        <Link href="#">Products</Link>
        <Link href="#">Solutions</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">About</Link>
        <Link href="#">Login</Link>
        <Link href="#">EN</Link>
        <button className="bg-yellow-400 text-[#0a1b35] font-bold py-2 px-4 rounded-full hover:scale-105 transition">Book Demo</button>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
          <Link href="#" onClick={toggleMenu}>Products</Link>
          <Link href="#" onClick={toggleMenu}>Solutions</Link>
          <Link href="#" onClick={toggleMenu}>Pricing</Link>
          <Link href="#" onClick={toggleMenu}>About</Link>
          <Link href="#" onClick={toggleMenu}>Login</Link>
          <Link href="#" onClick={toggleMenu}>EN</Link>
          <button className="bg-yellow-400 text-[#0a1b35] font-bold py-2 px-6 rounded-full hover:scale-105 transition">Book Demo</button>
        </div>
      )}
    </nav>
  );
}
