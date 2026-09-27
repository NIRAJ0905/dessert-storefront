import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';

export default function DessertCard({ item }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="bg-white rounded-xl border border-cream-300 overflow-hidden flex flex-col h-full transition-all duration-200 hover:border-caramel/60 hover:shadow-sm">
      {/* Image / Photo Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div className="space-y-2">
          <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-caramel">
            {item.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-black leading-snug">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}
        </div>

        {/* Price & Add to Tray Button */}
        <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between">
          <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-black">
            {item.price}
          </span>
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
                <span>In Tray</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Tray</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
