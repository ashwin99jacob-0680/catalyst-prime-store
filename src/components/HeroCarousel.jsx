import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockProducts';
import { useCart } from '../context/CartContext';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setActiveCategory } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentIndex];

  return (
    <div className="relative w-full max-w-[1536px] mx-auto overflow-hidden">
      {/* Banner Container */}
      <div className="relative h-[240px] sm:h-[340px] md:h-[420px] lg:h-[480px] w-full transition-all duration-700">
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-100"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          {/* Bottom fade into Amazon background #eaeded */}
          <div className="absolute bottom-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-t from-[#eaeded] via-[#eaeded]/80 to-transparent"></div>
        </div>

        {/* Banner Text / CTA */}
        <div className="relative z-10 h-full max-w-2xl flex flex-col justify-center px-6 sm:px-12 text-white pb-16">
          <span className="inline-block bg-[#febd69] text-gray-950 text-xs font-black px-2.5 py-1 rounded w-max mb-3 uppercase tracking-wider shadow">
            Catalyst Prime Exclusive
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            {slide.headline}
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-200 line-clamp-2 max-w-lg drop-shadow">
            {slide.subheadline}
          </p>
          <div className="mt-4 sm:mt-6 flex items-center gap-3">
            <button
              onClick={() => setActiveCategory(slide.category)}
              className="bg-[#febd69] hover:bg-[#f3a847] text-gray-950 font-bold px-5 py-2.5 rounded-md text-sm sm:text-base shadow-lg transition-transform active:scale-95"
            >
              {slide.cta}
            </button>
            <span className="text-xs text-gray-300 hidden sm:inline-block">
              Free 1-Day Delivery with Prime
            </span>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 top-1/3 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-md bg-black/30 hover:bg-black/60 text-white backdrop-blur-xs transition-colors focus:ring-2 focus:ring-[#febd69] outline-none"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 top-1/3 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-md bg-black/30 hover:bg-black/60 text-white backdrop-blur-xs transition-colors focus:ring-2 focus:ring-[#febd69] outline-none"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-8 bg-[#febd69]' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
