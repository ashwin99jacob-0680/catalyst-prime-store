import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  MapPin, 
  ChevronDown, 
  Menu, 
  Package, 
  ShieldCheck,
  X
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/mockProducts';

export default function Header() {
  const { 
    cartCount, 
    setIsCartOpen, 
    setIsOrdersOpen, 
    orders, 
    searchQuery, 
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    userLocation,
    setUserLocation
  } = useCart();

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [newLocationInput, setNewLocationInput] = useState(userLocation);

  const handleLocationSave = (e) => {
    e.preventDefault();
    if (newLocationInput.trim()) {
      setUserLocation(newLocationInput.trim());
      setIsLocationModalOpen(false);
    }
  };

  return (
    <>
      <header className="bg-[#131921] text-white sticky top-0 z-40 select-none shadow-md">
        <div className="max-w-[1536px] mx-auto px-2 sm:px-4 py-2.5 flex items-center gap-2 md:gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => {
              setActiveCategory('All Departments');
              setSearchQuery('');
            }}
            className="flex items-center cursor-pointer p-1.5 border border-transparent hover:border-white rounded transition-colors group"
          >
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">catalyst</span>
                <span className="text-sm font-bold text-[#febd69] ml-0.5">prime</span>
              </div>
              <div className="h-1 bg-[#febd69] rounded-full w-full -mt-0.5 group-hover:bg-amber-400"></div>
            </div>
          </div>

          {/* Deliver to Location */}
          <button 
            onClick={() => setIsLocationModalOpen(true)}
            className="hidden lg:flex items-center gap-1.5 p-1.5 border border-transparent hover:border-white rounded text-left transition-colors"
            title="Change delivery location"
          >
            <MapPin className="w-5 h-5 text-gray-300" />
            <div className="text-xs leading-tight">
              <span className="text-gray-400 block font-normal">Deliver to Ashwin</span>
              <span className="font-bold text-white tracking-wide truncate max-w-[130px] block">
                {userLocation}
              </span>
            </div>
          </button>

          {/* Search Bar */}
          <div className="flex-1 flex items-center min-w-[200px] max-w-4xl">
            <div className="flex w-full rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#febd69] shadow-inner bg-white">
              
              {/* Category selector */}
              <div className="relative hidden md:flex items-center bg-gray-100 hover:bg-gray-200 border-r border-gray-300 transition-colors">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="appearance-none bg-transparent pl-3 pr-7 py-2.5 text-xs text-gray-700 font-medium cursor-pointer outline-none focus:outline-none"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2 pointer-events-none" />
              </div>

              {/* Search input */}
              <div className="flex-1 relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Catalyst Prime, electronics, fashion, home..."
                  className="w-full py-2 px-3 text-sm text-gray-900 placeholder-gray-500 outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="p-1 mr-1 text-gray-400 hover:text-gray-600 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Search Button */}
              <button 
                type="button" 
                className="bg-[#febd69] hover:bg-[#f3a847] text-gray-900 px-4 sm:px-5 flex items-center justify-center transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-1 sm:gap-2">
            
            {/* Catalyst Slate Badge */}
            <div className="hidden xl:flex items-center gap-1 px-2 py-1 bg-slate-800/80 border border-slate-700 rounded text-xs text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zoho Slate Host</span>
            </div>

            {/* Returns & Orders */}
            <button 
              onClick={() => setIsOrdersOpen(true)}
              className="flex items-center p-1.5 border border-transparent hover:border-white rounded transition-colors text-left"
            >
              <div className="text-xs leading-tight">
                <span className="text-gray-400 block font-normal">Returns</span>
                <span className="font-bold text-white flex items-center gap-1">
                  & Orders
                  {orders.length > 0 && (
                    <span className="bg-[#febd69] text-gray-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                      {orders.length}
                    </span>
                  )}
                </span>
              </div>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1 p-1.5 border border-transparent hover:border-white rounded transition-colors relative group"
            >
              <div className="relative">
                <ShoppingCart className="w-8 h-8 text-white group-hover:text-[#febd69] transition-colors" />
                <span className="absolute -top-1 left-3.5 bg-[#febd69] text-gray-950 font-black text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center shadow">
                  {cartCount}
                </span>
              </div>
              <span className="hidden sm:inline font-bold text-sm text-white pt-2">
                Cart
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden text-gray-900 border border-gray-200">
            <div className="bg-gray-100 px-5 py-3.5 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                Choose your delivery location
              </h3>
              <button 
                onClick={() => setIsLocationModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleLocationSave} className="p-5 space-y-4">
              <p className="text-xs text-gray-600">
                Delivery options and delivery speeds may vary for different locations. Enter your city or zip code:
              </p>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  City, Region or Postal Code
                </label>
                <input
                  type="text"
                  value={newLocationInput}
                  onChange={(e) => setNewLocationInput(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#e47911] focus:ring-1 focus:ring-[#e47911] outline-none text-sm"
                  placeholder="e.g. Dubai, UAE or New York, NY 10001"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsLocationModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-xs font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#febd69] hover:bg-[#f3a847] text-gray-950 rounded text-xs font-bold shadow-sm"
                >
                  Apply Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
