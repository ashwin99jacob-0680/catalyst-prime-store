import React, { useState } from 'react';
import { Menu, Zap, Sparkles, X, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/mockProducts';

export default function SubNav() {
  const { activeCategory, setActiveCategory, setSearchQuery } = useCart();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const navLinks = [
    { label: "Today's Deals", category: "All Departments" },
    { label: "Electronics", category: "Electronics" },
    { label: "Computers", category: "Computers" },
    { label: "Home & Kitchen", category: "Home & Kitchen" },
    { label: "Fashion", category: "Fashion" },
    { label: "Gaming", category: "Gaming" },
    { label: "Smart Home", category: "Smart Home" }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  return (
    <>
      <nav className="bg-[#232f3e] text-white text-xs sm:text-sm font-medium border-t border-slate-700 select-none">
        <div className="max-w-[1536px] mx-auto px-2 sm:px-4 flex items-center justify-between overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center space-x-1 sm:space-x-3 whitespace-nowrap">
            {/* All Drawer Button */}
            <button
              onClick={() => setIsSideMenuOpen(true)}
              className="flex items-center gap-1.5 py-1 px-2.5 rounded border border-transparent hover:border-white transition-colors font-bold"
            >
              <Menu className="w-4 h-4" />
              <span>All</span>
            </button>

            {/* Links */}
            {navLinks.map((item) => {
              const isActive = activeCategory === item.category && item.category !== 'All Departments';
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryClick(item.category)}
                  className={`py-1 px-2 rounded border transition-colors ${
                    isActive
                      ? 'border-[#febd69] text-[#febd69] bg-slate-800'
                      : 'border-transparent text-gray-200 hover:border-white hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right badge */}
          <div className="hidden md:flex items-center gap-2 pl-4 text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Global Delivery with Prime</span>
          </div>
        </div>
      </nav>

      {/* Side Menu Drawer (Amazon Style) */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            onClick={() => setIsSideMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer content */}
          <div className="relative w-80 max-w-[85%] bg-white text-gray-900 h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {/* Header */}
            <div className="bg-[#232f3e] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-gray-950 font-black">
                  A
                </div>
                <div>
                  <div className="font-bold text-sm">Hello, Ashwin</div>
                  <div className="text-[11px] text-gray-300">Prime Member</div>
                </div>
              </div>
              <button 
                onClick={() => setIsSideMenuOpen(false)}
                className="text-gray-300 hover:text-white p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu List */}
            <div className="flex-1 overflow-y-auto py-3">
              <div className="px-4 py-2 text-xs font-black tracking-wider uppercase text-gray-500">
                Shop By Department
              </div>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    handleCategoryClick(cat);
                    setIsSideMenuOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 hover:bg-gray-100 flex items-center justify-between text-sm text-gray-800 font-medium"
                >
                  <span>{cat}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}

              <div className="my-2 border-t border-gray-200" />

              <div className="px-4 py-2 text-xs font-black tracking-wider uppercase text-gray-500">
                Programs & Features
              </div>
              <div className="px-5 py-2.5 text-sm hover:bg-gray-100 cursor-pointer text-gray-700 flex items-center justify-between">
                <span>Today's Lightning Deals</span>
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <div className="px-5 py-2.5 text-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                Customer Service 24/7
              </div>
              <div className="px-5 py-2.5 text-sm hover:bg-gray-100 cursor-pointer text-gray-700">
                Gift Cards & Registry
              </div>

              <div className="my-2 border-t border-gray-200" />

              <div className="px-4 py-2 text-xs font-black tracking-wider uppercase text-gray-500">
                Catalyst Slate Architecture
              </div>
              <div className="p-4 mx-4 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-600 leading-relaxed">
                Deploy this store to <strong>Zoho Catalyst Slate</strong> directly by connecting your GitHub repo. Fully automated CI/CD pipeline.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
