

  import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-white transition-transform group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.79 13.91L12.92 2.76C12.58 2.33 11.95 2.3 11.57 2.68L2.21 12.04C1.83 12.42 1.86 13.05 2.29 13.39L13.44 22.25C13.82 22.55 14.38 22.46 14.64 22.04L22.04 14.64C22.25 14.3 22.12 13.84 21.79 13.91Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-bold text-xl tracking-tight">CURSOR</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sign in
          </button>
          <button className="text-sm font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Download
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in-down">
          <nav className="flex flex-col gap-4 text-lg font-medium text-gray-400">
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Enterprise</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Resources</a>
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <button className="text-left font-medium text-white">Sign in</button>
            <button className="font-bold bg-white text-black px-4 py-3 rounded-full text-center">
              Download
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;