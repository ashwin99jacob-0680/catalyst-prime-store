import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  ArrowRight, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    cartCount, 
    cartSubtotal, 
    updateQuantity, 
    removeFromCart, 
    setIsCheckoutOpen 
  } = useCart();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 50.00;
  const isFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-gray-800" />
            <h2 className="text-base font-bold text-gray-900">
              Shopping Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-4 py-3 bg-amber-50/70 border-b border-amber-200/60 text-xs">
          <div className="flex items-center gap-2 mb-1.5 font-semibold text-gray-800">
            <Truck className="w-4 h-4 text-emerald-600" />
            {isFreeShipping ? (
              <span className="text-emerald-700">You qualify for <strong>FREE Prime Delivery!</strong></span>
            ) : (
              <span>Add <strong>${(FREE_SHIPPING_THRESHOLD - cartSubtotal).toFixed(2)}</strong> more for FREE Shipping</span>
            )}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${isFreeShipping ? 'bg-emerald-500' : 'bg-amber-500'}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center text-gray-500 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-3">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <p className="font-bold text-gray-800 text-base mb-1">Your Cart is empty</p>
              <p className="text-xs text-gray-500 max-w-xs mb-4">
                Explore our catalog of electronics, computers, fashion and home deals to add items.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-[#febd69] hover:bg-[#f3a847] text-gray-950 font-bold px-5 py-2 rounded-md text-xs shadow-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(({ product, quantity }) => (
              <div 
                key={product.id}
                className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 bg-gray-50 rounded-md overflow-hidden shrink-0 border border-gray-200">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 line-clamp-2 leading-snug">
                      {product.title}
                    </h4>
                    <span className="text-xs text-emerald-600 font-semibold mt-0.5 block">
                      In Stock
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 rounded-md bg-gray-50">
                      <button 
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-1 hover:bg-gray-200 text-gray-600 rounded-l transition-colors"
                        title="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-bold text-gray-900 min-w-[20px] text-center">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-1 hover:bg-gray-200 text-gray-600 rounded-r transition-colors"
                        title="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-950">
                        ${(product.price * quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-[11px] text-red-600 hover:text-red-800 flex items-center gap-0.5 mt-0.5"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal ({cartCount} items):</span>
                <span className="font-bold text-gray-950">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping:</span>
                <span className="font-semibold text-emerald-700">
                  {isFreeShipping ? 'FREE' : '$4.99'}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-1.5 text-sm font-black text-gray-950">
                <span>Order Total:</span>
                <span>
                  ${(cartSubtotal + (isFreeShipping ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-950 py-3 rounded-full text-xs font-black shadow-md flex items-center justify-center gap-2 border border-[#fcd200] transition-transform active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe 256-bit SSL encrypted checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
