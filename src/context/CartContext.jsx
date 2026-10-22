import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEYS = {
  CART: 'catalyst_store_cart_v1',
  ORDERS: 'catalyst_store_orders_v1',
  LOCATION: 'catalyst_store_location_v1'
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
      return saved ? JSON.parse(saved) : [
        {
          id: "ORD-94821-2026",
          date: "Oct 20, 2026",
          status: "Delivered",
          expectedDelivery: "Delivered Yesterday",
          items: [
            {
              id: "prod-3",
              title: "Logitech MX Master 3S Wireless Performance Mouse",
              price: 99.99,
              quantity: 1,
              image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"
            }
          ],
          total: 104.99,
          shippingAddress: {
            fullName: "Ashwin Jacob",
            address: "Building 4, Silicon Oasis",
            city: "Dubai",
            country: "United Arab Emirates"
          }
        }
      ];
    } catch {
      return [];
    }
  });

  const [userLocation, setUserLocation] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.LOCATION) || "Dubai, UAE 00000";
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Departments');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartItems));
    } catch (e) {
      console.warn("Storage write failed", e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    } catch (e) {
      console.warn("Storage write failed", e);
    }
  }, [orders]);

  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.title.slice(0, 32)}..." to Cart!`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = (orderInfo) => {
    const newOrder = {
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}-2026`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: "Arriving Tomorrow",
      expectedDelivery: "Tomorrow by 9:00 PM",
      items: cartItems.map(item => ({
        id: item.product.id,
        title: item.product.title,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image
      })),
      total: orderInfo.totalAmount,
      shippingAddress: orderInfo.shippingAddress,
      paymentMethod: orderInfo.paymentMethod
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setIsCheckoutOpen(false);
    setIsOrdersOpen(true);
    showToast('🎉 Order placed successfully! Tracking details generated.', 'success');
    return newOrder;
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isOrdersOpen,
        setIsOrdersOpen,
        selectedProduct,
        setSelectedProduct,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        userLocation,
        setUserLocation,
        orders,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        placeOrder,
        toast,
        setToast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
