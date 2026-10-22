import React, { useEffect } from 'react';
import { CheckCircle, Info, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast, setToast } = useCart();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast, setToast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-in slide-in-from-bottom-5 duration-200">
      <div className="bg-[#131921] text-white px-4 py-3 rounded-lg shadow-2xl border border-gray-700 flex items-center gap-3 max-w-md">
        {toast.type === 'info' ? (
          <Info className="w-5 h-5 text-sky-400 shrink-0" />
        ) : (
          <CheckCircle className="w-5 h-5 text-[#febd69] shrink-0" />
        )}
        <span className="text-xs font-semibold text-gray-100 flex-1">
          {toast.message}
        </span>
        <button
          onClick={() => setToast(null)}
          className="text-gray-400 hover:text-white p-1 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
