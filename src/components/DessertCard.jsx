import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function DessertCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border border-cream-300 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Image / Placeholder Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200/60 flex items-center justify-center border-b border-cream-200">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-brand-light space-y-1">
            <ImageIcon className="w-7 h-7 text-brand-light/70" />
            <span className="text-[11px] font-medium tracking-wide uppercase text-brand-light/80">
              Photo
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category Tag with Light Blue accent */}
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-lightblue-hover mb-1">
            {item.category}
          </span>
          <h3 className="font-serif text-lg font-semibold text-brand-black leading-snug">
            {item.name}
          </h3>
        </div>

        {/* Price & Quick Add Button (Presentational for MVP) */}
        <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between">
          <span className="text-lg font-bold text-brand-black">
            {item.price}
          </span>
          <button
            type="button"
            className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-cream-300 bg-cream-50 text-brand-black hover:border-lightblue hover:bg-lightblue-light hover:text-brand-black transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
    </div>
  );
}
