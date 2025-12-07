import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/Interium Logo.png" alt="Interium" className="h-8 w-8" />
            <span className="text-xl font-serif text-slate-900">Interium</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              FAQ
            </button>
            <button className="bg-gradient-to-r from-brand-500 to-brand-700 text-white hover:from-brand-600 hover:to-brand-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Try AI For Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4">
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left text-slate-600 hover:text-slate-900 font-medium py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-slate-600 hover:text-slate-900 font-medium py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-left text-slate-600 hover:text-slate-900 font-medium py-2"
            >
              FAQ
            </button>
            <button className="w-full bg-gradient-to-r from-brand-500 to-brand-700 text-white hover:from-brand-600 hover:to-brand-800 px-4 py-3 rounded-lg text-sm font-medium mt-2 transition-all">
              Try AI For Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
