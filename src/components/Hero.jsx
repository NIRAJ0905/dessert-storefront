import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { heroData } from '../data/desserts';

export default function Hero() {
  return (
    <section id="home" className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.15]">
            {heroData.heading}
          </h1>

          {heroData.description && (
            <p className="text-lg sm:text-xl text-brand-muted max-w-xl font-normal leading-relaxed">
              {heroData.description}
            </p>
          )}
        </div>

        {/* Hero Image Container */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-cream-300 bg-cream-200/60 aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center shadow-sm">
            {heroData.image ? (
              <img
                src={heroData.image}
                alt={heroData.imageAlt || 'Hero dessert'}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-brand-light text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center border border-cream-300">
                  <ImageIcon className="w-6 h-6 text-brand-light" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-brand-light">
                  Photo placeholder
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
