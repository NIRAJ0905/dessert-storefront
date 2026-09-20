import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream-100/90 backdrop-blur-md border-b border-cream-300/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="/" 
          className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-black hover:text-caramel transition-colors"
        >
          Dessert Bar
        </a>

        {/* Desktop Navigation - separate pages to be added later */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-black">
          <a href="/" className="hover:text-caramel transition-colors">Home</a>
          <a href="/menu" className="hover:text-caramel transition-colors">Menu</a>
          <a href="/contact" className="hover:text-caramel transition-colors">Contact</a>
          <a href="/location" className="hover:text-caramel transition-colors">Location</a>
        </nav>

        {/* Cart and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Cart (0) - Navigation/UI element */}
          <div 
            id="nav-cart"
            role="button"
            tabIndex={0}
            className="flex items-center space-x-2 text-sm font-semibold bg-white text-brand-black px-4 py-2 rounded-full border border-cream-300 hover:border-lightblue hover:text-brand-black transition-all cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-caramel" />
            <span>Cart (0)</span>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-black hover:bg-cream-200 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-b border-cream-300 px-4 pt-2 pb-6 space-y-3">
          <a 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-black hover:bg-cream-200 rounded-md"
          >
            Home
          </a>
          <a 
            href="/menu" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-black hover:bg-cream-200 rounded-md"
          >
            Menu
          </a>
          <a 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-black hover:bg-cream-200 rounded-md"
          >
            Contact
          </a>
          <a 
            href="/location" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-black hover:bg-cream-200 rounded-md"
          >
            Location
          </a>
        </div>
      )}
    </header>
  );
}
