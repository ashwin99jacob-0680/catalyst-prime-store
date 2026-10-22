import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  Truck, 
  MapPin, 
  ShieldCheck, 
  Loader2 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutModal() {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cartItems, 
    cartSubtotal, 
    placeOrder,
    userLocation
  } = useCart();

  const [fullName, setFullName] = useState('Ashwin Jacob');
  const [address, setAddress] = useState('Flat 402, Al Nahda Street');
  const [city, setCity] = useState(userLocation.split(',')[0] || 'Dubai');
  const [country, setCountry] = useState('United Arab Emirates');
  const [phone, setPhone] = useState('+971 50 123 4567');

  const [deliverySpeed, setDeliverySpeed] = useState('prime'); // 'standard', 'prime', 'priority'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'apple_pay', 'cod'
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const shippingCost = deliverySpeed === 'priority' ? 9.99 : 0;
  const tax = Number((cartSubtotal * 0.05).toFixed(2));
  const finalTotal = Number((cartSubtotal + shippingCost + tax).toFixed(2));

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      placeOrder({
        totalAmount: finalTotal,
        shippingAddress: {
          fullName,
          address,
          city,
          country,
          phone
        },
        paymentMethod: paymentMethod === 'card' ? 'Visa ending in 4242' : paymentMethod === 'apple_pay' ? 'Apple Pay' : 'Cash on Delivery'
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto relative text-gray-900 border border-gray-200">
        
        {/* Header */}
        <div className="bg-[#131921] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-base sm:text-lg">Catalyst Prime Secure Checkout</h3>
          </div>
          <button 
            onClick={() => setIsCheckoutOpen(false)}
            disabled={isProcessing}
            className="text-gray-400 hover:text-white p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
          
          {/* Step 1: Shipping Address */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              <span className="w-6 h-6 rounded-full bg-[#131921] text-white text-xs font-black flex items-center justify-center">1</span>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">Delivery Address</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-amber-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-amber-500 outline-none"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-amber-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">City / Region</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-amber-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-amber-500 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Step 2: Shipping Options */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              <span className="w-6 h-6 rounded-full bg-[#131921] text-white text-xs font-black flex items-center justify-center">2</span>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">Choose Delivery Speed</h4>
            </div>

            <div className="space-y-2 text-xs">
              <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                deliverySpeed === 'prime' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="deliverySpeed"
                    checked={deliverySpeed === 'prime'}
                    onChange={() => setDeliverySpeed('prime')}
                    className="accent-amber-500"
                  />
                  <div>
                    <span className="font-bold text-gray-900 flex items-center gap-1.5">
                      <span className="bg-[#00a8e1] text-white text-[10px] font-black italic px-1 rounded">prime</span>
                      FREE One-Day Delivery (Tomorrow by 9 PM)
                    </span>
                    <span className="text-gray-500 block text-[11px]">Guaranteed fast dispatch via Catalyst Logistics</span>
                  </div>
                </div>
                <span className="font-bold text-emerald-700">FREE</span>
              </label>

              <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                deliverySpeed === 'priority' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="deliverySpeed"
                    checked={deliverySpeed === 'priority'}
                    onChange={() => setDeliverySpeed('priority')}
                    className="accent-amber-500"
                  />
                  <div>
                    <span className="font-bold text-gray-900">Priority Express Morning Delivery</span>
                    <span className="text-gray-500 block text-[11px]">Delivered tomorrow before 12:00 PM</span>
                  </div>
                </div>
                <span className="font-bold text-gray-900">$9.99</span>
              </label>
            </div>
          </div>

          {/* Step 3: Payment Method */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              <span className="w-6 h-6 rounded-full bg-[#131921] text-white text-xs font-black flex items-center justify-center">3</span>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">Payment Method</h4>
            </div>

            <div className="space-y-2 text-xs">
              <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                paymentMethod === 'card' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="accent-amber-500"
                  />
                  <CreditCard className="w-4 h-4 text-gray-700" />
                  <span className="font-semibold text-gray-900">Credit / Debit Card (Visa ending in 4242)</span>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Default</span>
              </label>

              <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                paymentMethod === 'apple_pay' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'apple_pay'}
                    onChange={() => setPaymentMethod('apple_pay')}
                    className="accent-amber-500"
                  />
                  <span className="font-semibold text-gray-900">Apple Pay / Google Pay Instant</span>
                </div>
              </label>

              <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-amber-500"
                  />
                  <span className="font-semibold text-gray-900">Cash on Delivery (COD)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs space-y-1.5">
            <div className="flex justify-between text-gray-600">
              <span>Items Subtotal:</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping & Handling:</span>
              <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estimated VAT (5%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-black text-gray-900 border-t border-gray-200 pt-2">
              <span>Order Total:</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-950 py-3 rounded-full text-sm font-black shadow-md flex items-center justify-center gap-2 border border-[#fcd200] disabled:opacity-50 transition-all cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Securing Order & Payment...</span>
                </>
              ) : (
                <>
                  <span>Place Your Order (${finalTotal.toFixed(2)})</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-gray-500 text-center mt-2">
              By placing your order, you agree to the Catalyst Store Terms of Use and Privacy Notice.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
