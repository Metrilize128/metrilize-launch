// components/Navbar.js
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center w-full px-6 py-4 z-50 bg-white bg-opacity-70 backdrop-blur-sm fixed top-0 left-0">
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <img src="/metrilize-logo.png" alt="Metrilize Logo" className="h-10 cursor-pointer" />
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link href="#" className="hover:font-bold">Products</Link>
        <Link href="#" className="hover:font-bold">Solutions</Link>
        <Link href="#" className="hover:font-bold">Pricing</Link>
        <Link href="#" className="hover:font-bold">About</Link>
        <Link href="#" className="hover:font-bold">Login</Link>
        <Link href="#" className="hover:font-bold">EN</Link>
        <button className="bg-yellow-400 text-[#0a1b35] font-bold py-2 px-4 rounded-full hover:scale-105 transition">Book Demo</button>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <Link href="#" className="hover:font-bold" onClick={toggleMenu}>Products</Link>
          <Link href="#" className="hover:font-bold" onClick={toggleMenu}>Solutions</Link>
          <Link href="#" className="hover:font-bold" onClick={toggleMenu}>Pricing</Link>
          <Link href="#" className="hover:font-bold" onClick={toggleMenu}>About</Link>
          <Link href="#" className="hover:font-bold" onClick={toggleMenu}>Login</Link>
          <Link href="#" className="hover:font-bold" onClick={toggleMenu}>EN</Link>
          <button className="bg-yellow-400 text-[#0a1b35] font-bold py-2 px-6 rounded-full hover:scale-105 transition">Book Demo</button>
        </div>
      )}
    </nav>
  );
}
