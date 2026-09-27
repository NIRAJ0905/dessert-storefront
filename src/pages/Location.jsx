import React from 'react';
import { MapPin, Clock, Navigation, Coffee, Dog, CreditCard, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { storeInfo } from '../data/desserts';

export default function Location() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">Find Us</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mt-1">
              Visit Our Indiranagar Bakery
            </h1>
            <p className="text-sm sm:text-base text-brand-muted mt-2 leading-relaxed">
              Drop by for a warm butter croissant with pour-over coffee in the morning, or pick up a dessert box on your way home.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Address & Directions Card */}
            <div className="bg-white rounded-xl border border-cream-300 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-cream-200 text-caramel">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-brand-black">
                    Bakery Address
                  </h2>
                  <span className="text-xs text-caramel font-semibold">Counter Pickup & Dine-In</span>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm text-brand-black">
                <p className="font-medium">{storeInfo.address}</p>
                <p className="text-brand-muted">{storeInfo.city}</p>
                <div className="pt-2 text-xs text-brand-muted">
                  <p className="font-semibold text-brand-black">Landmark:</p>
                  <p>{storeInfo.landmark}</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-cream-200 flex items-center justify-between">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(storeInfo.name + ' ' + storeInfo.address + ' ' + storeInfo.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-black text-white text-xs font-medium hover:bg-caramel transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
                <span className="text-xs text-brand-muted">5 min from Metro</span>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-xl border border-cream-300 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-cream-200 text-caramel">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-brand-black">
                    Bakehouse Hours
                  </h2>
                  <span className="text-xs text-caramel font-semibold">Weekly Schedule</span>
                </div>
              </div>

              <div className="mt-5 divide-y divide-cream-200 text-xs sm:text-sm">
                {storeInfo.hours.map((schedule) => (
                  <div key={schedule.days} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-semibold text-brand-black block">{schedule.days}</span>
                      <span className="text-xs text-brand-muted">{schedule.note}</span>
                    </div>
                    <span className={`font-medium ${schedule.hours === 'Closed' ? 'text-caramel font-semibold' : 'text-brand-black'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visitor Guide & Amenities (Grounded human details) */}
          <div className="mt-8 bg-white rounded-xl border border-cream-300 p-6 sm:p-8">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-black mb-4">
              Visiting the Counter
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-brand-muted">
              <div className="flex items-start gap-3">
                <Coffee className="w-4 h-4 text-caramel mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-black">Coffee & Seating</p>
                  <p className="mt-0.5">Espresso bar & 4 outdoor courtyard tables for dine-in pastries.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-caramel mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-black">Oven Batch Times</p>
                  <p className="mt-0.5">First batch of croissants at 8:00 AM; afternoon tarts at 3:30 PM.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Dog className="w-4 h-4 text-caramel mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-black">Pet-Friendly</p>
                  <p className="mt-0.5">Water bowls and outdoor shade for your furry companions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="w-4 h-4 text-caramel mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-black">Accepted Payments</p>
                  <p className="mt-0.5">Google Pay, UPI, all credit/debit cards, and cash.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}