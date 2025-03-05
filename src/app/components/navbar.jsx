"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import cn from '../lib/utils.ts';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      // Check if the event target is inside the form
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white/95 backdrop-blur shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-display font-bold text-(--primary)">
            BR Accountancy
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-(--primary) text-white rounded-md font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm"
          >
            Free Consultation
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out bg-white shadow-md',
          isMenuOpen ? 'top-[60px] opacity-100' : 'top-[-100%] opacity-0'
        )}
      >
        <div className="container py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 text-gray-700 hover:text-(--primary) transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-(--primary) rounded-md font-medium text-center hover:bg-primary/90 transition-colors shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
