import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DessertCard from '../components/DessertCard';
import DealCard from '../components/DealCard';
import Footer from '../components/Footer';
import { popularItems, deals } from '../data/desserts';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tarts', 'Cakes', 'Pastries', 'Chocolates', 'Breads'];

  const filteredItems = selectedCategory === 'All'
    ? popularItems
    : popularItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">Daily Counter Menu</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black">
              Fresh From Our Morning Ovens
            </h1>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed pt-1">
              Every item is crafted in small batches daily using cultured butter, slow-proved dough, and seasonal produce. Available at our counter until sold out.
            </p>
          </div>

          {/* Category Filter & Notice */}
          <div className="mt-12 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-cream-300">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand-black text-white'
                      : 'bg-white text-brand-black border border-cream-300 hover:border-caramel hover:text-caramel'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-brand-muted gap-2 pt-1">
              <span>Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} in {selectedCategory === 'All' ? 'all categories' : selectedCategory}</span>
              <span>Crafted daily with 100% French cultured butter & seasonal ingredients</span>
            </div>
          </div>

          {/* Grid of items with generous spacing */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="h-full">
                <DessertCard item={item} />
              </div>
            ))}
          </div>

          {/* Special Daily Deals Section with generous spacing */}
          <div className="mt-28 pt-20 border-t border-cream-300">
            <div className="mb-10 max-w-xl space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">Special Combinations</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-black">
                Baker's Bundles & Specials
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed pt-1">
                Pairings and gift boxes prepared fresh each morning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {deals.map((deal) => (
                <div key={deal.id} className="h-full">
                  <DealCard deal={deal} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}