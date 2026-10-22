export const CATEGORIES = [
  "All Departments",
  "Electronics",
  "Computers",
  "Home & Kitchen",
  "Fashion",
  "Gaming",
  "Smart Home"
];

export const PRODUCTS = [
  {
    id: "prod-1",
    title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    category: "Electronics",
    price: 348.00,
    originalPrice: 399.99,
    rating: 4.7,
    reviewsCount: 12450,
    prime: true,
    inStock: true,
    badge: "Best Seller",
    dealEndTime: "2026-12-31T23:59:59Z",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise canceling is automatically optimized based on your wearing conditions and environment.",
    features: [
      "Industry-leading noise cancellation with 8 microphones",
      "Magnificent Sound, engineered to perfection with integrated Processor V1",
      "Crystal clear hands-free calling with 4 beamforming microphones",
      "Up to 30-hour battery life with quick charging (3 min for 3 hours of playback)",
      "Ultra-comfortable, lightweight design with soft fit leather"
    ],
    specs: {
      "Brand": "Sony",
      "Model Name": "WH-1000XM5",
      "Color": "Silver / Platinum",
      "Connectivity": "Bluetooth 5.2, 3.5mm Aux",
      "Battery Life": "30 Hours"
    }
  },
  {
    id: "prod-2",
    title: "Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch with Rugged Titanium Case",
    category: "Electronics",
    price: 749.00,
    originalPrice: 799.00,
    rating: 4.9,
    reviewsCount: 8420,
    prime: true,
    inStock: true,
    badge: "Amazon's Choice",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    ],
    description: "The most rugged and capable Apple Watch. Designed for outdoor adventure and endurance workouts with a lightweight titanium case, extra-long battery life, and the brightest display ever.",
    features: [
      "49mm aerospace-grade titanium case for balance of weight and corrosion resistance",
      "Up to 36 hours of normal battery life and 72 hours in Low Power Mode",
      "Precision dual-frequency GPS provides exceptional accuracy for calculating distance",
      "100m water resistance and high-speed water sports certified (EN13319)",
      "Customizable Action button gives you instant, physical control over various functions"
    ],
    specs: {
      "Brand": "Apple",
      "Case Size": "49mm",
      "Case Material": "Titanium",
      "Water Resistance": "100m",
      "Battery Life": "Up to 36-72 Hours"
    }
  },
  {
    id: "prod-3",
    title: "Logitech MX Master 3S Wireless Performance Mouse with Quiet Clicks",
    category: "Computers",
    price: 99.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviewsCount: 23110,
    prime: true,
    inStock: true,
    badge: "Save 17%",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80"
    ],
    description: "An icon remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.",
    features: [
      "Quiet Clicks deliver satisfying, soft tactile feel with 90% less click noise",
      "8K DPI any-surface tracking – track on any surface, even glass",
      "MagSpeed electromagnetic scrolling is 90% faster and 87% more precise",
      "Ergonomic silhouette crafted for the palm of your hand",
      "Connect up to 3 devices via Bluetooth or Logi Bolt receiver"
    ],
    specs: {
      "Brand": "Logitech",
      "DPI": "8,000 DPI",
      "Connectivity": "Bluetooth / 2.4GHz Bolt",
      "Battery": "Up to 70 days rechargeable",
      "Weight": "141g"
    }
  },
  {
    id: "prod-4",
    title: "Dell UltraSharp 32 4K UHD USB-C Hub Monitor (U3223QE) with IPS Black Technology",
    category: "Computers",
    price: 689.99,
    originalPrice: 879.99,
    rating: 4.6,
    reviewsCount: 3890,
    prime: true,
    inStock: true,
    badge: "Limited Deal",
    dealEndTime: "2026-12-31T23:59:59Z",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Experience incredible color and superior black performance with a contrast ratio of 2000:1 on the world's first 31.5\" 4K monitor with IPS Black technology.",
    features: [
      "31.5-inch 4K UHD 3840 x 2160 IPS Black display",
      "Contrast ratio of 2,000:1 with 98% DCI-P3 color gamut",
      "Built-in 90W USB-C hub with RJ45 Ethernet and daisy-chaining",
      "ComfortView Plus reduces low blue light without sacrificing color accuracy",
      "Fully adjustable height, pivot, swivel, and tilt stand"
    ],
    specs: {
      "Screen Size": "31.5 Inches",
      "Resolution": "3840 x 2160 4K UHD",
      "Refresh Rate": "60 Hz",
      "Port Types": "USB-C (90W), HDMI 2.0, DisplayPort 1.4, RJ45",
      "Panel": "IPS Black"
    }
  },
  {
    id: "prod-5",
    title: "Breville Barista Touch Impress Espresso Machine with Touchscreen & Auto Steam",
    category: "Home & Kitchen",
    price: 1499.95,
    originalPrice: 1699.95,
    rating: 4.9,
    reviewsCount: 1840,
    prime: true,
    inStock: true,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Create third wave specialty coffee at home with real-time feedback and the Impress Puck System for precise dosing and assisted 22lb tamping.",
    features: [
      "Intuitive touchscreen guide with pre-programmed cafe drinks",
      "Impress Puck System: intelligent dosing and assisted 10kg tamping",
      "Auto MilQ delivers silky microfoam for dairy and plant-based milks",
      "ThermoJet heating system reaches optimal extraction temp in 3 seconds",
      "Integrated European precision conical burr grinder with 30 grind settings"
    ],
    specs: {
      "Brand": "Breville",
      "Color": "Brushed Stainless Steel",
      "Water Tank": "67 fl oz (2L)",
      "Heating System": "ThermoJet 3-Second Fast Warmup",
      "Interface": "Full Color Touchscreen"
    }
  },
  {
    id: "prod-6",
    title: "Cosori 5.0 Qt Pro II Air Fryer with 12 One-Touch Cooking Functions & Recipe Book",
    category: "Home & Kitchen",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviewsCount: 31200,
    prime: true,
    inStock: true,
    badge: "Save 20%",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Enjoy crispy textures with up to 85% less oil than traditional deep frying. 12 customizable presets deliver perfectly cooked chicken, veggies, fries, and desserts.",
    features: [
      "AdaptIQ technology provides rapid 360° air circulation",
      "5.0 Quart capacity feeds 3-5 people in one cook",
      "Dishwasher safe non-stick basket and crisper plate",
      "12 customizable presets: Steak, Seafood, Fries, Frozen, Bacon, Bake, Roast",
      "Overheat protection and auto-shutoff safety"
    ],
    specs: {
      "Capacity": "5.0 Quarts",
      "Output Wattage": "1500 Watts",
      "Dishwasher Safe": "Yes",
      "Temperature Range": "170°F - 400°F"
    }
  },
  {
    id: "prod-7",
    title: "Keychron Q1 Pro Wireless QMK/VIA Custom Mechanical Keyboard (Red Switches)",
    category: "Gaming",
    price: 199.99,
    originalPrice: 219.99,
    rating: 4.8,
    reviewsCount: 4290,
    prime: true,
    inStock: true,
    badge: "Amazon's Choice",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A fully customizable 75% mechanical keyboard engineered with full aluminum CNC machined body, double-gasket design, Bluetooth 5.1 and south-facing RGB.",
    features: [
      "CNC 6063 full aluminum machined body for premium weight & acoustics",
      "Double-gasket design significantly dampens noise and boosts typing resonance",
      "Fully customizable keymaps and macros using open-source QMK/VIA",
      "Hot-swappable sockets support both 3-pin and 5-pin mechanical switches",
      "Connect wirelessly via Bluetooth 5.1 to up to 3 devices or via USB-C"
    ],
    specs: {
      "Layout": "75% ANSI",
      "Switches": "K Pro Red (Linear)",
      "Backlight": "South-facing RGB",
      "Connectivity": "Bluetooth 5.1 & Type-C Wired"
    }
  },
  {
    id: "prod-8",
    title: "Men's Classic Leather Bomber Jacket, Vintage Distressed Handcrafted Grain",
    category: "Fashion",
    price: 189.50,
    originalPrice: 260.00,
    rating: 4.6,
    reviewsCount: 3100,
    prime: true,
    inStock: true,
    badge: "Deal of the Day",
    dealEndTime: "2026-12-31T23:59:59Z",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Handcrafted from 100% genuine full-grain lambskin leather. Timeless aviator silhouette with ribbed collar, cuffs, and silky quilted lining for all-season warmth.",
    features: [
      "100% genuine full grain lambskin leather with vintage patina finish",
      "Quilted breathable thermal inner lining",
      "Heavy duty YKK front metal zipper and secure interior passport pocket",
      "Dual deep hand warmer slash pockets and snap chest pocket",
      "Regular comfortable fit with room for mid-layer sweaters"
    ],
    specs: {
      "Outer Material": "100% Genuine Lambskin",
      "Lining": "Satin Quilted Polyester",
      "Closure": "YKK Heavy Duty Zipper",
      "Care": "Professional Leather Clean Only"
    }
  },
  {
    id: "prod-9",
    title: "Minimalist Polarized UV400 Sunglasses with Ultra-Light Alloy Frame",
    category: "Fashion",
    price: 24.99,
    originalPrice: 45.00,
    rating: 4.5,
    reviewsCount: 15400,
    prime: true,
    inStock: true,
    badge: "Save 44%",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80"
    ],
    description: "HD polarized TAC lenses filter 99% of reflected glare without haze or optical distortion. Lightweight magnesium-aluminum temples promise all-day comfort.",
    features: [
      "100% UV400 protective polarized lenses blocking UVA & UVB rays",
      "Aerospace magnesium aluminum alloy frame weighing only 24g",
      "Spring hinge temples automatically flex to fit all face sizes",
      "Soft anti-allergy silicone nose pads",
      "Includes hard protective travel case and microfiber cleaning pouch"
    ],
    specs: {
      "Lens Material": "TAC HD Polarized",
      "Frame Material": "Aluminum-Magnesium Alloy",
      "Lens Width": "58 mm",
      "Weight": "24 grams"
    }
  },
  {
    id: "prod-10",
    title: "Amazon Echo Studio - High-Fidelity Smart Speaker with 3D Audio & Alexa",
    category: "Smart Home",
    price: 199.99,
    originalPrice: 229.99,
    rating: 4.7,
    reviewsCount: 42100,
    prime: true,
    inStock: true,
    badge: "Amazon Device",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Immersive sound - 5 speakers produce powerful bass, dynamic midrange, and crisp highs. Dolby Atmos technology adds space, clarity, and depth to your favorite audio.",
    features: [
      "5 directional speakers with Dolby Atmos spatial sound",
      "Automatically senses acoustic environment and adapts playback",
      "Built-in smart home Zigbee hub for easy device pairing",
      "Stream songs from Amazon Music, Apple Music, Spotify, Pandora and more",
      "Privacy guaranteed with microphone disconnect button"
    ],
    specs: {
      "Speakers": "1\" tweeter, three 2\" midrange, 5.25\" woofer",
      "Audio": "Dolby Atmos, Sony 360 Reality Audio",
      "Connectivity": "Wi-Fi 6, Bluetooth, 3.5mm mini-optical",
      "Dimensions": "8.1\" x 6.9\""
    }
  },
  {
    id: "prod-11",
    title: "Fujifilm X-T5 Mirrorless Digital Camera Body (Black) 40.2MP X-Trans CMOS 5 HR",
    category: "Electronics",
    price: 1699.00,
    originalPrice: 1799.00,
    rating: 4.9,
    reviewsCount: 1650,
    prime: true,
    inStock: true,
    badge: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A compact, lightweight powerhouse featuring 40.2-megapixel X-Trans CMOS 5 HR sensor, 5-axis in-body image stabilization with up to 7.0 stops, and 6.2K/30p video.",
    features: [
      "40.2 Megapixel back-illuminated X-Trans CMOS 5 HR sensor",
      "In-Body Image Stabilization (IBIS) system offering up to 7 stops",
      "3-way tilting LCD monitor with 1.84 million dots",
      "19 Film Simulation modes replicating historic analog film stocks",
      "Dual SD UHS-II card slots in a weather-resistant magnesium body"
    ],
    specs: {
      "Megapixels": "40.2 MP",
      "Sensor": "APS-C X-Trans CMOS 5 HR",
      "Video": "6.2K 30p / 4K 60p",
      "Stabilization": "7.0-stop 5-axis IBIS"
    }
  },
  {
    id: "prod-12",
    title: "ASUS ROG Zephyrus G16 (2025) Gaming Laptop 16\" OLED 240Hz, RTX 4080, Intel Core Ultra 9",
    category: "Gaming",
    price: 2499.99,
    originalPrice: 2899.99,
    rating: 4.8,
    reviewsCount: 970,
    prime: true,
    inStock: true,
    badge: "Save $400",
    dealEndTime: "2026-12-31T23:59:59Z",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultra-thin CNC aluminum gaming laptop boasting ROG Nebula 2.5K OLED 240Hz display, Intel Core Ultra 9 processor, and NVIDIA GeForce RTX 4080 GPU.",
    features: [
      "16-inch 2.5K 240Hz 0.2ms ROG Nebula OLED display with G-SYNC",
      "NVIDIA GeForce RTX 4080 12GB GDDR6 Laptop GPU (115W TGP)",
      "Intel Core Ultra 9 185H Processor with built-in AI Boost NPU",
      "32GB LPDDR5X-7467 MHz RAM & 2TB PCIe 4.0 NVMe SSD",
      "ROG Intelligent Cooling with vapor chamber and 2nd Gen Arc Flow Fans"
    ],
    specs: {
      "Processor": "Intel Core Ultra 9 185H",
      "Graphics": "NVIDIA GeForce RTX 4080 12GB",
      "Display": "16\" 2.5K OLED 240Hz",
      "Storage": "2TB NVMe SSD",
      "RAM": "32GB LPDDR5X"
    }
  }
];

export const HERO_SLIDES = [
  {
    id: "slide-1",
    headline: "Mega Prime Days: Up to 50% Off Electronics",
    subheadline: "Shop headphones, 4K monitors, laptops & gaming gear with Free 1-Day Delivery",
    cta: "Explore Tech Deals",
    category: "Electronics",
    bgGradient: "from-slate-900 via-indigo-950 to-blue-900",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&auto=format&fit=crop&q=80"
  },
  {
    id: "slide-2",
    headline: "Modern Living & Kitchen Essentials",
    subheadline: "Upgrade your morning brew and smart home with hand-picked appliances",
    cta: "Shop Home Deals",
    category: "Home & Kitchen",
    bgGradient: "from-stone-900 via-amber-950 to-orange-950",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop&q=80"
  },
  {
    id: "slide-3",
    headline: "Autumn & Winter Fashion Trends",
    subheadline: "Discover timeless leather, footwear & accessories crafted to last",
    cta: "Browse Apparel",
    category: "Fashion",
    bgGradient: "from-zinc-950 via-neutral-900 to-stone-900",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=80"
  }
];

export const CATEGORY_CARDS = [
  {
    title: "Gaming & Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    linkText: "See more in Gaming",
    category: "Gaming"
  },
  {
    title: "Computers & Laptops",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=80",
    linkText: "Explore Computers",
    category: "Computers"
  },
  {
    title: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=80",
    linkText: "Shop Kitchen",
    category: "Home & Kitchen"
  },
  {
    title: "Fashion & Style",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80",
    linkText: "Refresh Wardrobe",
    category: "Fashion"
  }
];
