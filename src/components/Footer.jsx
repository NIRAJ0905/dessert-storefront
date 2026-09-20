import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-cream-300 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="font-serif text-2xl font-bold tracking-tight text-brand-black">
            Dessert Bar
          </div>

          {/* Links to separate pages (Menu, Contact, Location) and socials */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-brand-muted">
            <a href="/menu" className="hover:text-caramel transition-colors">Menu</a>
            <a href="/contact" className="hover:text-caramel transition-colors">Contact</a>
            <a href="/location" className="hover:text-caramel transition-colors">Location</a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-caramel transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-caramel transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
