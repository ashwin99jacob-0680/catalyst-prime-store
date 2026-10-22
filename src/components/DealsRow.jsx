import React, { useState, useEffect } from 'react';
import { Zap, Clock, Star, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../data/mockProducts';
import { useCart } from '../context/CartContext';

export default function DealsRow() {
  const { addToCart, setSelectedProduct } = useCart();
  const dealProducts = PRODUCTS.filter(p => p.badge && (p.badge.includes('Deal') || p.badge.includes('Save') || p.badge.includes('Best Seller')));

  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[1536px] mx-auto px-4 mb-8">
      <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-md">
              <Zap className="w-5 h-5 fill-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Today's Lightning Deals</h3>
              <p className="text-xs text-gray-500">Exciting discounts on top-rated electronics and lifestyle essentials</p>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="flex items-center gap-2 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full w-max">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>Ends in: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Horizontal Deals Carousel */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-4">
          {dealProducts.slice(0, 6).map(product => {
            const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

            return (
              <div 
                key={product.id}
                className="flex flex-col justify-between group cursor-pointer border border-gray-100 rounded-lg p-2.5 hover:shadow-md transition-all hover:border-amber-300"
                onClick={() => setSelectedProduct(product)}
              >
                <div>
                  <div className="relative aspect-square bg-gray-50 rounded-md overflow-hidden mb-2">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow">
                      -{discountPercent}%
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-bold text-red-700 uppercase bg-red-50 px-1 rounded mb-1">
                    {product.badge}
                  </span>

                  <h4 className="text-xs font-semibold text-gray-800 line-clamp-2 group-hover:text-[#007185] transition-colors leading-snug">
                    {product.title}
                  </h4>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-extrabold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, 1);
                    }}
                    className="w-full mt-2 bg-[#febd69] hover:bg-[#f3a847] text-gray-950 text-xs font-bold py-1.5 rounded flex items-center justify-center gap-1 shadow-xs transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
