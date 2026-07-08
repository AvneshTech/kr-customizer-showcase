import React, { useState } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Why KR', href: '#why-different' },
    { name: 'Categories', href: '#categories' },
    { name: 'Results', href: '#results' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo matching Screenshot 1 */}
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Colorful K Hexagon Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1a1640] via-[#4f46e5] to-[#06b6d4] p-0.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#1a1640] rounded-[10px] flex items-center justify-center">
                <span className="text-white font-black text-lg tracking-tighter">K</span>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-black text-[#1a1640] tracking-tight lowercase">
                kr
              </span>
              <span className="text-xl font-normal text-[#33305c] tracking-tight lowercase ml-1">
                customizer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#33305c] hover:text-[#4f46e5] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#hero"
              className="kr-btn-primary py-2.5 px-6 text-xs shadow-sm hover:shadow-md"
            >
              GET STARTED FREE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-50 text-[#1a1640] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#ffd600]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white/98 backdrop-blur-2xl animate-in slide-in-from-top duration-300 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#33305c] hover:text-[#1a1640] hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="kr-btn-primary w-full text-center justify-center py-3.5"
              >
                GET STARTED FREE
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
