import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';
import { heroData } from '../data/desserts';

export default function Hero() {
  return (
    <section id="home" className="py-14 sm:py-20 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {heroData.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream-200 border border-cream-300 rounded text-xs font-semibold uppercase tracking-[0.16em] text-caramel">
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>{heroData.eyebrow}</span>
            </div>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black leading-[1.12]">
            {heroData.heading}
          </h1>

          {heroData.description && (
            <p className="text-base sm:text-lg text-brand-muted max-w-xl font-normal leading-relaxed">
              {heroData.description}
            </p>
          )}

          {/* Action buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-black text-white text-sm font-medium hover:bg-caramel transition-colors"
            >
              <span>Explore Today's Counter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/location"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-cream-300 text-brand-black text-sm font-medium hover:border-caramel hover:text-caramel transition-colors"
            >
              <Clock className="w-4 h-4 text-caramel" />
              <span>Visit & Timings</span>
            </Link>
          </div>

          {/* Natural bakery note */}
          <div className="pt-6 border-t border-cream-300/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-brand-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-caramel inline-block" />
              100% Cultured Butter
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-caramel inline-block" />
              No Preservatives
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-caramel inline-block" />
              Small-Batch Morning Bakes
            </span>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-cream-300 bg-white p-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-cream-200">
              <img
                src={heroData.image}
                alt={heroData.imageAlt || 'Hero dessert'}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="px-2 pt-2.5 pb-1 flex items-center justify-between text-[11px] text-brand-muted">
              <span>Hearth deck oven bake</span>
              <span className="font-medium text-brand-black">Ready 8:00 AM daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
