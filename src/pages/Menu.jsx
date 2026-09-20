import React from 'react';
import Navbar from '../components/Navbar';
import DessertCard from '../components/DessertCard';
import Footer from '../components/Footer';
import { popularItems } from '../data/desserts';

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
              Our Menu
            </h1>

            <p className="text-brand-muted mt-3">
              Handcrafted desserts made fresh for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <DessertCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}