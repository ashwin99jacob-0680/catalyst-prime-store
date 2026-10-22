import React, { useState, useMemo } from 'react';
import { Filter, Star, Check, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const { searchQuery, setSearchQuery, activeCategory, setActiveCategory } = useCart();
  
  // Filter States
  const [minRating, setMinRating] = useState(0);
  const [primeOnly, setPrimeOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState('all'); // 'all', 'under50', '50to200', 'over200'
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'rating'

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategory !== 'All Departments' && product.category !== activeCategory) {
        return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      // Min Rating
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }

      // Prime only
      if (primeOnly && !product.prime) {
        return false;
      }

      // In stock
      if (inStockOnly && !product.inStock) {
        return false;
      }

      // Price range
      if (priceRange === 'under50' && product.price >= 50) return false;
      if (priceRange === '50to200' && (product.price < 50 || product.price > 200)) return false;
      if (priceRange === 'over200' && product.price <= 200) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [activeCategory, searchQuery, minRating, primeOnly, inStockOnly, priceRange, sortBy]);

  const resetFilters = () => {
    setActiveCategory('All Departments');
    setSearchQuery('');
    setMinRating(0);
    setPrimeOnly(false);
    setInStockOnly(false);
    setPriceRange('all');
    setSortBy('featured');
  };

  const hasActiveFilters = activeCategory !== 'All Departments' || searchQuery || minRating > 0 || primeOnly || inStockOnly || priceRange !== 'all';

  return (
    <div className="max-w-[1536px] mx-auto px-4 mb-16">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 bg-white p-5 rounded-lg border border-gray-200/90 shadow-sm h-fit">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 text-base">
              <Filter className="w-4 h-4 text-amber-500" />
              Filter Products
            </h3>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#007185] hover:underline flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Department */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">
              Department
            </h4>
            <div className="space-y-1.5 text-sm">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`block w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                    activeCategory === cat
                      ? 'bg-amber-100 text-amber-900 font-bold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">
              Customer Reviews
            </h4>
            <div className="space-y-2">
              {[4, 3, 0].map(stars => (
                <button
                  key={stars}
                  onClick={() => setMinRating(stars)}
                  className={`flex items-center gap-1.5 text-xs w-full p-1 rounded transition-colors ${
                    minRating === stars ? 'bg-amber-50 text-amber-900 font-bold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {stars === 0 ? (
                    <span>All Ratings</span>
                  ) : (
                    <>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < stars ? 'fill-amber-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium text-gray-700">& Up</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">
              Price
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer hover:text-black">
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange === 'all'}
                  onChange={() => setPriceRange('all')}
                  className="accent-[#e47911]"
                />
                <span>Any Price</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-black">
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange === 'under50'}
                  onChange={() => setPriceRange('under50')}
                  className="accent-[#e47911]"
                />
                <span>Under $50</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-black">
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange === '50to200'}
                  onChange={() => setPriceRange('50to200')}
                  className="accent-[#e47911]"
                />
                <span>$50 to $200</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-black">
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange === 'over200'}
                  onChange={() => setPriceRange('over200')}
                  className="accent-[#e47911]"
                />
                <span>$200 & Above</span>
              </label>
            </div>
          </div>

          {/* Special Options */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">
              Delivery & Availability
            </h4>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={primeOnly}
                  onChange={(e) => setPrimeOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-[#00a8e1] focus:ring-0 accent-[#00a8e1]"
                />
                <span className="flex items-center gap-1 font-semibold text-gray-800">
                  <span className="bg-[#00a8e1] text-white text-[9px] font-black italic px-1 rounded">prime</span>
                  One-Day Eligible
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-0 accent-amber-500"
                />
                <span className="text-gray-700 font-medium">In Stock Only</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Main Products Grid */}
        <div className="flex-1">
          {/* Header Bar */}
          <div className="bg-white p-4 rounded-lg border border-gray-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <span className="text-sm font-semibold text-gray-900">
                {filteredProducts.length} results
              </span>
              {(searchQuery || activeCategory !== 'All Departments') && (
                <span className="text-xs text-gray-500 ml-1">
                  for {searchQuery ? `"${searchQuery}"` : ''} {activeCategory !== 'All Departments' ? `in "${activeCategory}"` : ''}
                </span>
              )}
            </div>

            {/* Sort by */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded px-2.5 py-1.5 text-xs text-gray-800 font-semibold outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Avg. Customer Review</option>
              </select>
            </div>
          </div>

          {/* Grid or Empty */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">No matching products found</h3>
              <p className="text-sm text-gray-500 mb-4">Try checking your spelling or adjusting your active filters.</p>
              <button
                onClick={resetFilters}
                className="bg-[#febd69] hover:bg-[#f3a847] text-gray-950 px-5 py-2 rounded-md text-xs font-bold shadow-xs"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
