import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Lock, 
  Check, 
  ShoppingCart,
  Zap
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetailModal() {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    addToCart, 
    setIsCheckoutOpen,
    userLocation
  } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!selectedProduct) return null;

  const images = selectedProduct.images && selectedProduct.images.length > 0 
    ? selectedProduct.images 
    : [selectedProduct.image];

  const currentImage = images[activeImageIndex] || selectedProduct.image;
  const discountPercent = Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100);

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto relative text-gray-900 border border-gray-200">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Images */}
            <div className="md:col-span-5 flex flex-col-reverse sm:flex-row gap-4">
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex sm:flex-col gap-2 shrink-0">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-14 h-14 rounded-md overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-[#e47911] shadow-md scale-105' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Image */}
              <div className="flex-1 aspect-square rounded-lg bg-gray-50 overflow-hidden border border-gray-200 relative">
                <img 
                  src={currentImage} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-contain p-4" 
                />
                {selectedProduct.badge && (
                  <span className="absolute top-3 left-3 bg-[#e47911] text-white text-xs font-black px-2.5 py-1 rounded shadow">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Middle Column: Details */}
            <div className="md:col-span-4 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#007185] hover:underline cursor-pointer mb-1">
                Visit the {selectedProduct.category} Store
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-2">
                {selectedProduct.title}
              </h2>

              {/* Ratings */}
              <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(selectedProduct.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-800">
                  {selectedProduct.rating} out of 5
                </span>
                <span className="text-xs text-[#007185] hover:underline cursor-pointer">
                  {selectedProduct.reviewsCount.toLocaleString()} ratings
                </span>
              </div>

              {/* Price section */}
              <div className="py-3 border-b border-gray-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-red-600 font-bold">-{discountPercent}%</span>
                  <span className="text-3xl font-extrabold text-gray-950">
                    ${selectedProduct.price.toFixed(2)}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Typical price: <span className="line-through">${selectedProduct.originalPrice.toFixed(2)}</span>
                </div>
                {selectedProduct.prime && (
                  <div className="mt-2 flex items-center gap-1.5 text-xs">
                    <span className="bg-[#00a8e1] text-white font-black italic px-1 rounded text-[10px]">
                      prime
                    </span>
                    <span className="font-semibold text-gray-800">FREE One-Day Delivery</span>
                  </div>
                )}
              </div>

              {/* Bullet Features */}
              <div className="pt-3 flex-1">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                  About this item
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-700 list-disc pl-4 leading-relaxed">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Buy Box */}
            <div className="md:col-span-3 bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="text-2xl font-black text-gray-950 mb-2">
                  ${(selectedProduct.price * quantity).toFixed(2)}
                </div>

                <div className="text-xs text-gray-600 mb-3 space-y-1.5">
                  <div className="flex items-start gap-1.5 text-emerald-700 font-semibold">
                    <Truck className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>FREE delivery <strong>Tomorrow</strong> to {userLocation.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <RotateCcw className="w-4 h-4 shrink-0 text-gray-500" />
                    <span>30-day refund/replacement</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Lock className="w-4 h-4 shrink-0 text-gray-500" />
                    <span>Secure transaction</span>
                  </div>
                </div>

                <div className="text-sm font-bold text-emerald-600 mb-4">
                  In Stock
                </div>

                {/* Quantity */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Quantity:
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full bg-white border border-gray-300 rounded-md py-1.5 px-3 text-xs font-bold text-gray-900 shadow-xs cursor-pointer outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Buttons */}
                <div className="space-y-2.5">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-950 py-2.5 px-4 rounded-full text-xs font-bold shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 border border-[#fcd200]"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-[#ffa41c] hover:bg-[#fa8900] text-gray-950 py-2.5 px-4 rounded-full text-xs font-bold shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 border border-[#ff8f00]"
                  >
                    <Zap className="w-4 h-4 fill-gray-950" />
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Catalyst Slate Banner note */}
              <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] text-gray-500">
                Ships from & Sold by <span className="font-semibold text-gray-700">Catalyst Prime Store</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
