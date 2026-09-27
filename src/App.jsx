import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cake, ArrowRight } from 'lucide-react';
import ScrollAnimation from './components/ScrollAnimation';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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

// Number of cards visible per breakpoint (read via JS on mount)
function useVisibleCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

function DealsCarousel() {
  const total = deals.length;
  const visible = useVisibleCount();
  const maxIndex = total - visible;

  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef(null);
  const dragStartX = useRef(null);
  const dragStartIndex = useRef(0);

  const clamp = (val) => Math.max(0, Math.min(val, maxIndex));

  const prev = useCallback(() => setCurrent((c) => clamp(c - 1)), [maxIndex]);
  const next = useCallback(() => setCurrent((c) => clamp(c + 1)), [maxIndex]);

  // Reset current if visible count changes and current is out of bounds
  useEffect(() => {
    setCurrent((c) => clamp(c));
  }, [visible, maxIndex]);

  // ── Pointer drag (mouse + touch via pointer events) ──────────────────────
  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStartX.current = e.clientX;
    dragStartIndex.current = current;
    setIsDragging(true);
    setDragOffset(0);
  };

  const onPointerMove = (e) => {
    if (!isDragging || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    setDragOffset(delta);
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - (dragStartX.current ?? e.clientX);
    const trackWidth = trackRef.current?.offsetWidth ?? 1;
    const cardWidth = trackWidth / visible;
    const stepped = Math.round(-delta / cardWidth);
    setCurrent(clamp(dragStartIndex.current + stepped));
    setDragOffset(0);
    setIsDragging(false);
    dragStartX.current = null;
  };

  // Pixel shift = (index * (100/visible))% converted to px + drag delta
  const cardPct = 100 / visible;
  const baseTranslate = `calc(-${current * cardPct}% + ${dragOffset}px)`;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative px-8 sm:px-10">

        {/* ── Track ──────────────────────────────────────────────── */}
        <div className="overflow-hidden rounded-2xl" ref={trackRef}>
          <div
            className={`flex select-none ${
              isDragging ? '' : 'transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'
            }`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            style={{
              transform: `translateX(${baseTranslate})`,
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
          >
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="flex-none px-2"
                style={{ width: `${cardPct}%` }}
              >
                {/* Card */}
                <div className="bg-white rounded-xl border border-cream-300 overflow-hidden hover:border-caramel/60 hover:shadow-md transition-all duration-200">
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover pointer-events-none"
                      draggable={false}
                      loading="lazy"
                    />
                    {deal.tag && (
                      <span className="absolute top-2.5 left-2.5 bg-brand-black text-white text-[10px] font-semibold px-2 py-0.5 rounded tracking-wide shadow-sm">
                        {deal.tag}
                      </span>
                    )}
                  </div>

                  {/* Text label */}
                  <div className="px-4 py-3 space-y-0.5">
                    <p className="font-serif text-sm font-medium text-brand-black leading-snug line-clamp-1">
                      {deal.name}
                    </p>
                    <p className="text-[11px] text-brand-muted leading-relaxed line-clamp-2">
                      {deal.description}
                    </p>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-sm font-semibold text-brand-black">{deal.price}</span>
                      {deal.originalPrice && (
                        <span className="text-xs text-brand-light line-through">{deal.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Prev arrow ─────────────────────────────────────────── */}
        <button
          type="button"
          onClick={prev}
          disabled={current === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-cream-300 bg-white shadow-sm text-brand-black hover:border-caramel hover:text-caramel transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* ── Next arrow ─────────────────────────────────────────── */}
        <button
          type="button"
          onClick={next}
          disabled={current >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-cream-300 bg-white shadow-sm text-brand-black hover:border-caramel hover:text-caramel transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── Dot indicators ─────────────────────────────────────── */}
      <div className="flex justify-center gap-1.5 mt-5">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to position ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-5 h-1.5 bg-caramel'
                : 'w-1.5 h-1.5 bg-cream-300 hover:bg-caramel/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black"><ScrollAnimation />
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 4. Best Deals / Baker's Specials */}
        <section id="deals" className="py-10 sm:py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-1 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel block">Limited Daily Batches</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-brand-black">
              Today's Counter Specials
            </h2>
            <p className="text-sm text-brand-muted pt-1">
              Curated bake pairings, whole tart specials, and morning gift boxes.
            </p>
          </div>

          {/* Carousel */}
          <DealsCarousel />
        </section>

        {/* 5. Most Popular Items */}
        <section id="popular" className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-cream-300">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">Customer Favorites</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-brand-black">
                Signature Counter Bakes
              </h2>
              <p className="text-sm text-brand-muted pt-1">
                Our most requested daily tarts, gateaux, and hearth breads.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black hover:text-caramel transition-colors"
            >
              <span>View complete menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Popular items grid with generous spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div key={item.id} className="h-full">
                <DessertCard item={item} />
              </div>
            ))}
          </div>
        </section>

        {/* 6. Custom Pre-Orders Section */}
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-cream-300 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-caramel uppercase tracking-[0.16em]">
                <Cake className="w-4 h-4" />
                <span>Pre-orders & Celebrations</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-brand-black leading-snug">
                Custom Whole Cakes & Dessert Platters
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Planning an anniversary, birthday, or weekend family lunch? We take pre-orders for whole cheesecakes, berry tarts, and assorted party boxes with 48 hours notice.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 w-full md:w-auto">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-brand-black text-white text-sm font-medium hover:bg-caramel transition-colors text-center"
              >
                Inquire for Pre-Order
              </Link>
              <Link
                to="/menu"
                className="px-6 py-3 rounded-lg bg-cream-100 border border-cream-300 text-brand-black text-sm font-medium hover:border-caramel hover:text-caramel transition-colors text-center"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
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
