import React from 'react';
import { Link } from 'react-router-dom';
import { storeInfo } from '../data/desserts';

export default function Footer() {
  return (
    <footer className="border-t border-cream-300 bg-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-cream-200">
          {/* Brand & Philosophy */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-block font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-brand-black hover:text-caramel transition-colors">
              Dessert Bar
            </Link>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-sm">
              An independent small-batch bakehouse in Indiranagar, Bengaluru. We bake daily with cultured butter, slow-proved doughs, and unrefined sugars.
            </p>
            <div className="text-xs text-brand-muted pt-1">
              <span>{storeInfo.address}, {storeInfo.city}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-black">
              Explore Our Counter
            </h4>
            <ul className="space-y-1.5 text-sm text-brand-muted">
              <li>
                <Link to="/menu" className="hover:text-caramel transition-colors">
                  Daily Menu & Bakes
                </Link>
              </li>
              <li>
                <Link to="/#deals" className="hover:text-caramel transition-colors">
                  Oven Specials
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-caramel transition-colors">
                  Your Order Tray
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-caramel transition-colors">
                  Custom Cake Pre-Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-black">
              Visit & Timings
            </h4>
            <div className="text-xs text-brand-muted space-y-1">
              <p><span className="font-semibold text-brand-black">Tue – Sun:</span> 8:00 AM – 9:00 PM</p>
              <p><span className="font-semibold text-brand-black">Mon:</span> Closed for kitchen prep</p>
              <p className="pt-2">Counter Phone: <span className="font-medium text-brand-black">{storeInfo.phone}</span></p>
            </div>
            <div className="pt-2 flex items-center space-x-4 text-xs font-medium text-brand-muted">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-caramel transition-colors"
              >
                Instagram
              </a>
              <span>•</span>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-caramel transition-colors"
              >
                Facebook
              </a>
              <span>•</span>
              <Link to="/location" className="hover:text-caramel transition-colors">
                Map & Directions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted gap-3">
          <p>© {new Date().getFullYear()} Dessert Bar. Handcrafted with care.</p>
          <p className="text-[11px]">No pre-mixes • Small batch daily baking</p>
        </div>
      </div>
    </footer>
  );
}
