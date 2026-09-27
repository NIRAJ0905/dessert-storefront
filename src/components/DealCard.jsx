import React, { useState } from 'react';
import { Check, ShoppingBag } from 'lucide-react';

export default function DealCard({ deal, className = '' }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className={`bg-white rounded-xl border border-cream-300 overflow-hidden flex flex-col h-full transition-all duration-200 hover:border-caramel/60 hover:shadow-sm ${className}`}>
      {/* Image container with Deal Tag */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Special Deal Tag */}
        {deal.tag && (
          <div className="absolute top-3 left-3">
            <span className="bg-brand-black text-white text-[11px] font-semibold px-2.5 py-1 rounded tracking-wide shadow-sm">
              {deal.tag}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-black leading-snug">
            {deal.name}
          </h3>
          {deal.description && (
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-2">
              {deal.description}
            </p>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-black">
              {deal.price}
            </span>
            {deal.originalPrice && (
              <span className="text-xs sm:text-sm font-normal text-brand-light line-through">
                {deal.originalPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded border transition-colors ${
              added
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'border-cream-300 bg-cream-100 text-brand-black hover:border-caramel hover:text-caramel'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-caramel" />
                <span>Add Special</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
