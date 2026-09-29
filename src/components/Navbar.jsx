import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/location', label: 'Visit Us' },
    { to: '/contact', label: 'Contact & Orders' },
  ];

  return (
    <>
      {/* Subtle bakery status bar */}
      <div
        className="bg-brand-black text-cream-100 text-xs py-2 px-4 text-center font-medium tracking-wide"
      >
        <span>Fresh oven batches daily at 8:00 AM & 3:30 PM • Counter pickup in Indiranagar</span>
      </div>

      {/* ── Main header ─────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 border-b border-cream-300 bg-cream-100"
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
        >
          {/* Brand */}
          <Link to="/" className="flex flex-col group">
            <span
              className="font-serif font-semibold tracking-wide text-brand-black group-hover:text-caramel transition-colors text-2xl sm:text-3xl"
            >
              Dessert Bar
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.22em] text-brand-muted font-medium"
            >
              Bakehouse & Patisserie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-brand-black">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `transition-colors py-1 relative ${
                    isActive
                      ? 'text-caramel font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-caramel'
                      : 'text-brand-black hover:text-caramel'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              to="/cart"
              id="nav-cart"
              className="flex items-center space-x-2 text-sm font-medium bg-white text-brand-black px-3.5 py-2 rounded-lg border border-cream-300 hover:border-caramel hover:text-caramel transition-colors shadow-none"
            >
              <ShoppingBag className="w-4 h-4 text-caramel" />
              <span>Cart</span>
              <span className="ml-1 px-1.5 py-0.2 bg-cream-200 text-brand-black text-xs font-semibold rounded">
                0
              </span>
            </Link>

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
          <div className="md:hidden bg-white border-b border-cream-300 px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-cream-200 text-caramel font-semibold'
                      : 'text-brand-black hover:bg-cream-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-cream-200">
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-base font-medium text-brand-black bg-cream-100 rounded-md"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-caramel" /> View Cart
                </span>
                <span className="text-xs bg-cream-300 px-2 py-0.5 rounded font-semibold">0 items</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

