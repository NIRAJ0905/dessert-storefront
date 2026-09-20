import React from 'react';
import { ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold">
              Your Cart
            </h1>

            <p className="text-brand-muted mt-3">
              Review your selected desserts here.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-2xl border border-cream-300 p-10 text-center shadow-sm">
            <ShoppingBag className="w-10 h-10 mx-auto text-caramel" />

            <h2 className="font-serif text-2xl font-semibold mt-4">
              Your cart is empty
            </h2>

            <p className="text-brand-muted mt-2">
              Add something sweet from our menu.
            </p>

            <a
              href="/menu"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-brand-black text-white font-medium hover:bg-caramel transition-colors"
            >
              Browse Menu
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}