import React from 'react';
import { Star, Check, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, setSelectedProduct } = useCart();
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div 
      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200/90 flex flex-col justify-between hover:shadow-xl transition-all duration-200 group relative"
      onClick={() => setSelectedProduct(product)}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between min-h-[24px] mb-2">
          {product.badge ? (
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded shadow-xs ${
              product.badge === "Best Seller" 
                ? "bg-[#e47911] text-white" 
                : product.badge === "Amazon's Choice" 
                ? "bg-slate-900 text-white" 
                : "bg-red-600 text-white"
            }`}>
              {product.badge}
            </span>
          ) : <span />}

          <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative aspect-square w-full rounded-md overflow-hidden bg-gray-50 mb-3 cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Quick View Button overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(product);
              }}
              className="bg-white/95 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-md hover:bg-white flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-[#007185] transition-colors leading-snug cursor-pointer mb-1.5">
          {product.title}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-700 ml-1">
            {product.rating}
          </span>
          <span className="text-xs text-[#007185] hover:underline cursor-pointer">
            ({product.reviewsCount.toLocaleString()})
          </span>
        </div>

        {/* Price display */}
        <div className="mb-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-medium text-gray-900 self-start mt-0.5">$</span>
            <span className="text-2xl font-black text-gray-900 leading-none">
              {Math.floor(product.price)}
            </span>
            <span className="text-xs font-black text-gray-900 self-start">
              {(product.price % 1).toFixed(2).substring(2)}
            </span>

            {discountPercent > 0 && (
              <div className="flex items-center gap-1 ml-1.5">
                <span className="text-xs text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1 rounded">
                  -{discountPercent}%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Prime & Delivery */}
        {product.prime && (
          <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2">
            <span className="bg-[#00a8e1] text-white text-[10px] font-black italic px-1 rounded">
              prime
            </span>
            <span className="font-semibold text-gray-800">One-Day</span>
            <span>FREE delivery Tomorrow</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, 1);
          }}
          className="w-full bg-[#ffd814] hover:bg-[#f7ca00] active:bg-[#f0b800] text-gray-900 py-2 px-3 rounded-full text-xs font-bold shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 border border-[#fcd200]"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
