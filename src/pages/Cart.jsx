import React from 'react';
import { ShoppingBag, ArrowRight, Clock, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DessertCard from '../components/DessertCard';
import { popularItems } from '../data/desserts';

export default function Cart() {
  const suggestions = popularItems.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">Order Tray</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-black mt-1">
              Your Counter Order
            </h1>
            <p className="text-sm text-brand-muted mt-2 leading-relaxed">
              Review your items for pickup at our Indiranagar counter.
            </p>
          </div>

          {/* Empty Tray Box */}
          <div className="mt-8 bg-white rounded-xl border border-cream-300 p-8 sm:p-12 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-cream-200 flex items-center justify-center text-caramel">
              <ShoppingBag className="w-6 h-6" />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-medium mt-4 text-brand-black">
              Your tray is currently empty
            </h2>

            <p className="text-sm text-brand-muted mt-2 max-w-md mx-auto leading-relaxed">
              Our morning batch of pastries and tarts is prepared fresh starting at 6 AM. Pick your favorites to reserve them before the counter sells out.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-black text-white text-sm font-medium hover:bg-caramel transition-colors"
              >
                <span>Browse Today's Counter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bakery Pickup Details Card */}
          <div className="mt-8 bg-cream-200/60 rounded-xl border border-cream-300 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <Store className="w-5 h-5 text-caramel mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-brand-black">Counter Pickup</h4>
                <p className="text-xs text-brand-muted mt-0.5">
                  12th Main Road, Indiranagar. Reserved boxes held for up to 90 minutes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-caramel mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-brand-black">Morning & Evening Batches</h4>
                <p className="text-xs text-brand-muted mt-0.5">
                  Hot out of the deck oven at 8:00 AM and again at 3:30 PM.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="mt-14">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-black mb-6">
              Popular morning picks to consider
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {suggestions.map((item) => (
                <DessertCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}