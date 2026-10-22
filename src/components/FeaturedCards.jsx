import React from 'react';
import { CATEGORY_CARDS } from '../data/mockProducts';
import { useCart } from '../context/CartContext';

export default function FeaturedCards() {
  const { setActiveCategory } = useCart();

  return (
    <div className="relative z-20 max-w-[1536px] mx-auto px-4 -mt-14 sm:-mt-24 md:-mt-32 lg:-mt-44 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {CATEGORY_CARDS.map((card) => (
          <div
            key={card.title}
            onClick={() => setActiveCategory(card.category)}
            className="bg-white p-5 rounded-md shadow-md border border-gray-200/80 flex flex-col justify-between hover:shadow-xl transition-all cursor-pointer group"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#007185] transition-colors mb-3">
                {card.title}
              </h2>
              <div className="overflow-hidden rounded-md aspect-[4/3] bg-gray-100 mb-3">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#007185] group-hover:text-[#c45500] group-hover:underline flex items-center">
              {card.linkText} &rarr;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
