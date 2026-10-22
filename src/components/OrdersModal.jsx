import React from 'react';
import { 
  X, 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  ExternalLink, 
  RotateCcw 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OrdersModal() {
  const { isOrdersOpen, setIsOrdersOpen, orders, showToast } = useCart();

  if (!isOrdersOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative text-gray-900 border border-gray-200">
        
        {/* Header */}
        <div className="bg-[#131921] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base sm:text-lg">Your Orders & Return Tracker</h3>
          </div>
          <button 
            onClick={() => setIsOrdersOpen(false)}
            className="text-gray-400 hover:text-white p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Your Orders</h2>
              <p className="text-xs text-gray-500">Track shipments, manage returns and view invoices</p>
            </div>
            <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {orders.length} {orders.length === 1 ? 'order' : 'orders'} placed
            </span>
          </div>

          {orders.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="font-bold text-gray-800">You have not placed any orders yet.</p>
              <p className="text-xs text-gray-500 mt-1">Browse our store and complete checkout to see orders here.</p>
            </div>
          ) : (
            orders.map(order => (
              <div 
                key={order.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-xs hover:border-gray-300 transition-colors"
              >
                {/* Order Top Meta Strip */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="block text-gray-500 uppercase text-[10px] font-bold">Order Placed</span>
                      <span className="font-medium text-gray-900">{order.date}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 uppercase text-[10px] font-bold">Total</span>
                      <span className="font-bold text-gray-950">${order.total.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 uppercase text-[10px] font-bold">Ship To</span>
                      <span className="font-medium text-gray-900">{order.shippingAddress?.fullName || 'Ashwin Jacob'}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="block text-gray-500 uppercase text-[10px] font-bold">Order #</span>
                    <span className="font-mono text-gray-800 font-semibold">{order.id}</span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {order.status === 'Delivered' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Truck className="w-5 h-5 text-amber-600" />
                      )}
                      <div>
                        <span className="font-bold text-sm text-gray-900">{order.status}</span>
                        <span className="text-xs text-gray-500 block">{order.expectedDelivery}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => showToast(`Tracking updated for ${order.id}: Dispatched via Catalyst Logistics`, 'info')}
                      className="text-xs bg-[#ffd814] hover:bg-[#f7ca00] text-gray-950 font-bold px-3 py-1.5 rounded-full shadow-xs border border-[#fcd200]"
                    >
                      Track Package
                    </button>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-3 pt-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex gap-4 items-center border-t border-gray-100 pt-3">
                        <div className="w-16 h-16 bg-gray-50 rounded border border-gray-200 overflow-hidden shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 text-xs">
                          <h5 className="font-bold text-gray-900 line-clamp-1">{item.title}</h5>
                          <div className="text-gray-500 mt-0.5">
                            Qty: <span className="font-semibold text-gray-800">{item.quantity}</span> &bull; Price: <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5 shrink-0">
                          <button 
                            onClick={() => showToast(`Simulated re-order initiated for item`, 'success')}
                            className="text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
                          >
                            Buy it again
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
