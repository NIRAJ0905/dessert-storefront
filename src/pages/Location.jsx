import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Location() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold">
              Visit Us
            </h1>

            <p className="text-brand-muted mt-3">
              Find our store and check our opening hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-cream-300 p-8 shadow-sm">
              <MapPin className="w-8 h-8 text-caramel" />

              <h2 className="font-serif text-2xl font-semibold mt-4">
                Location
              </h2>

              <p className="text-brand-muted mt-3 leading-relaxed">
                Your store address
                <br />
                City, State
                <br />
                PIN Code
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-cream-300 p-8 shadow-sm">
              <Clock className="w-8 h-8 text-caramel" />

              <h2 className="font-serif text-2xl font-semibold mt-4">
                Opening Hours
              </h2>

              <p className="text-brand-muted mt-3">
                Monday - Friday: 10:00 AM - 9:00 PM
              </p>

              <p className="text-brand-muted mt-2">
                Saturday - Sunday: 10:00 AM - 10:00 PM
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-cream-300 p-8 shadow-sm">
            <div className="h-64 bg-cream-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 mx-auto text-caramel" />

                <p className="text-brand-muted mt-3">
                  Map location
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}