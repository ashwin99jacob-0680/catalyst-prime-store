import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import SubNav from './components/SubNav';
import HeroCarousel from './components/HeroCarousel';
import FeaturedCards from './components/FeaturedCards';
import DealsRow from './components/DealsRow';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrdersModal from './components/OrdersModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#eaeded] text-[#0f1111]">
        {/* Top Navigation */}
        <Header />
        <SubNav />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Banner Carousel */}
          <HeroCarousel />

          {/* Overlay Featured Category Cards */}
          <FeaturedCards />

          {/* Today's Lightning Deals with Countdown */}
          <DealsRow />

          {/* Filterable Product Grid */}
          <ProductGrid />
        </main>

        {/* Modals & Overlays */}
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <OrdersModal />
        <Toast />

        {/* Multi-Tier Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}
