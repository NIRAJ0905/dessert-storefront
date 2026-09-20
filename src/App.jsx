import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Location from './pages/Location';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DealCard from './components/DealCard';
import DessertCard from './components/DessertCard';
import Footer from './components/Footer';
import { deals, popularItems } from './data/desserts';

function Home() { 
  const dealsScrollRef = useRef(null);

  const scrollDeals = (direction) => {
    if (dealsScrollRef.current) {
      const scrollAmount = 320;
      dealsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black selection:bg-lightblue-light selection:text-brand-black">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Best Deals */}
        <section id="deals" className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-black">
                Best Deals
              </h2>
              <p className="text-sm text-brand-muted mt-1">
                Limited-time sweet pairings & daily specials
              </p>
            </div>

            {/* Optional scroll arrow buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                type="button"
                onClick={() => scrollDeals('left')}
                className="p-2 rounded-full border border-cream-300 bg-white text-brand-black hover:border-lightblue hover:text-lightblue-hover transition-colors shadow-sm"
                aria-label="Scroll deals left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollDeals('right')}
                className="p-2 rounded-full border border-cream-300 bg-white text-brand-black hover:border-lightblue hover:text-lightblue-hover transition-colors shadow-sm"
                aria-label="Scroll deals right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontally scrollable row of 4 deal items */}
          <div
            ref={dealsScrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 pt-1 px-1 no-scrollbar scroll-smooth snap-x"
          >
            {deals.map((deal) => (
              <div key={deal.id} className="snap-start">
                <DealCard deal={deal} />
              </div>
            ))}
          </div>
        </section>

        {/* 4. Most Popular */}
        <section id="popular" className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-black">
              Most Popular
            </h2>
            <p className="text-sm text-brand-muted mt-1">
              Our community's favorite handcrafted creations
            </p>
          </div>

          {/* 6 popular items generated with .map() */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <DessertCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 5. Small CTA */}
        <section className="py-16 text-center max-w-3xl mx-auto px-4">
          <div className="py-10 px-6 rounded-3xl bg-cream-200/70 border border-cream-300">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-black">
              Something Sweet Is Waiting
            </h2>
            <div className="mt-6">
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-black text-white font-medium hover:bg-caramel transition-colors shadow-sm"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
export default function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}