import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="logo.png" alt="Wikiwide Logo" className="h-12 w-18" />
        <span className="text-3xl  font-serif font-bold leading-tight ">WIKIWIDE</span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 text-sm text-gray-700 font-medium">
        <a href="https://main.site" className="hover:text-black">Main site</a>
        <Link to="/faqs" className="hover:text-black">FAQ's</Link>
        <Link to="/refund" className="hover:text-black">Refund</Link>
        <Link to="/support" className="hover:text-black">Support</Link>
        <Link to="/privacy-policy" className="hover:text-black">Privacy policy</Link>
        <Link to="/registry" className="hover:text-black">Page Registry</Link>
      </nav>
    </header>
  );
};

export default Header;
