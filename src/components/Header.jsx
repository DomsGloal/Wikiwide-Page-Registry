import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Use lucide icons or replace with any

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="relative px-4 py-3 border-b bg-white shadow-sm">

      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="logo.png" alt="Wikiwide Logo" className="h-12 w-auto" />
          <span className="text-2xl font-serif font-bold leading-tight">WIKIWIDE</span>
        </div>

        {/* Hamburger Menu Button (visible only on mobile) */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 text-sm text-gray-700 font-medium">
          <a href="/" className="hover:text-black">Main site</a>
          <Link to="/faqs" className="hover:text-black">FAQ's</Link>
          <Link to="/refund" className="hover:text-black">Refund</Link>
          <Link to="/support" className="hover:text-black">Support</Link>
          <Link to="/privacy-policy" className="hover:text-black">Privacy policy</Link>
          <Link to="/registry" className="hover:text-black">Page Registry</Link>
        </nav>
      </div>


{menuOpen && (
  <nav
    className="
      absolute top-full right-0  w-60
      bg-white  shadow-2xl rounded-lg
      flex flex-col  overflow-hidden z-50 sm:hidden
      text-gray-800 font-medium text-base transition-all duration-300
    "
  >
    <Link to="/" className="px-4 py-3 ">Main site</Link>
    <Link to="/faqs" className="px-4 py-3 hover:bg-gray-100">FAQ's</Link>
    <Link to="/refund" className="px-4 py-3 hover:bg-gray-100">Refund</Link>
    <Link to="/support" className="px-4 py-3 hover:bg-gray-100">Support</Link>
    <Link to="/privacy-policy" className="px-4 py-3 hover:bg-gray-100">Privacy policy</Link>
    <Link to="/registry" className="px-4 py-3 hover:bg-gray-100">Page Registry</Link>
  </nav>
)}
    </header>
  );
};

export default Header;
