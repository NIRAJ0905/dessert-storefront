import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function DealCard({ deal }) {
  return (
    <div className="flex-none w-72 sm:w-80 bg-white rounded-2xl border border-cream-300 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Image container with Deal Tag */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200/60 flex items-center justify-center border-b border-cream-200">
        {deal.image ? (
          <img
            src={deal.image}
            alt={deal.name}
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

        {/* Deal Tag */}
        <span className="absolute top-3 left-3 bg-caramel text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {deal.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <h3 className="font-serif text-lg font-semibold text-brand-black leading-snug">
          {deal.name}
        </h3>

        <div className="mt-3 flex items-baseline space-x-2">
          <span className="text-xl font-bold text-brand-black">
            {deal.price}
          </span>
          {deal.originalPrice && (
            <span className="text-sm font-medium text-brand-light line-through">
              {deal.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
