# 🛒 Catalyst Prime Store — E-Commerce Application

An Amazon-inspired, modern e-commerce web application built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for easy hosting on **Zoho Catalyst Slate** via direct **GitHub Repository** integration.

![Catalyst Prime Banner](https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&auto=format&fit=crop&q=80)

---

## ✨ Features

- **Amazon-Grade Visual Aesthetic**:
  - Classic `#131921` dark navigation bar & `#232f3e` secondary category bar.
  - Interactive search bar with category filtering (Electronics, Computers, Fashion, Gaming, Home & Kitchen, Smart Home).
  - Dynamic delivery location selector with persistent local storage.
  - Prime delivery badges and lightning deal countdown timer.
- **Hero & Promotions**:
  - Auto-rotating promotional hero carousel with manual controls.
  - Multi-card category showcase overlaying the hero section.
  - "Today's Lightning Deals" horizontal scrolling strip with live countdown clock and percentage discount badges.
- **Product Catalog & Filtering**:
  - Multi-criteria sidebar filters: Department, 4★+ Customer Reviews, Price Brackets, Prime-Only, and In-Stock Only.
  - Sorting options: Featured, Price (Low to High), Price (High to Low), and Avg. Customer Rating.
- **Interactive Product Modal**:
  - High-res image gallery with thumbnail switcher.
  - Feature bullet points, detailed specifications table, and return policy info.
  - Quantity picker (1–10), "Add to Cart", and "Buy Now" triggers.
- **Full E-Commerce Cart & Checkout**:
  - Slide-over shopping cart drawer with free shipping progress bar.
  - Quantity adjustments, item removal, and subtotal calculations.
  - Complete multi-step simulated checkout (Shipping address form, delivery speed selection, and payment methods).
  - Order confirmation and automatic generation of tracking IDs.
- **Returns & Orders Tracker**:
  - "Returns & Orders" modal showing order history, tracking progress, and item lists.
- **Optimized for Zoho Catalyst Slate**:
  - Zero-configuration Vite build (`npm run build` &rarr; `dist/`).
  - Lightning fast asset loading and responsive mobile/tablet/desktop layouts.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Zoho Catalyst Slate](https://www.zoho.com/catalyst/)

---

## 🚀 Local Development

To run this application locally on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To test the production build locally:

```bash
npm run build
npm run preview
```

---

## 📦 How to Post to GitHub

Follow these steps to push this project into a new GitHub repository:

### Step 1: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Repository name: `catalyst-prime-store` (or any name you prefer).
3. Set visibility to **Public** or **Private**.
4. Leave "Initialize this repository with a README" **unchecked** (we already have one).
5. Click **Create repository**.

### Step 2: Initialize Git and Push from Your Terminal
Run the following commands in the project folder:

```bash
# Initialize git
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Amazon-style Catalyst Prime Store for Zoho Slate"

# Rename branch to main
git branch -M main

# Link your GitHub repository (replace USERNAME and REPO with your details)
git remote add origin https://github.com/USERNAME/catalyst-prime-store.git

# Push code to GitHub
git push -u origin main
```

---

## ☁️ How to Host on Zoho Catalyst Slate

**Zoho Catalyst Slate** connects directly to your GitHub repository and automatically handles building and deploying your front-end web app.

### Step 1: Open Zoho Catalyst Console
1. Log in to [Zoho Catalyst Console](https://catalyst.zoho.com/).
2. Select your project (or click **Create New Project**).

### Step 2: Navigate to Slate
1. In the left-hand navigation menu under **Develop**, click on **Slate**.
2. Click **Create New App** / **Deploy App**.

### Step 3: Connect Your GitHub Repository
1. Select **GitHub** as the Git provider.
2. If prompted, authorize Zoho Catalyst to access your GitHub repositories.
3. Select your repository: `catalyst-prime-store`.
4. Choose the branch: `main`.

### Step 4: Configure Build Settings
Zoho Catalyst Slate will automatically detect the **Vite / React** framework. Verify the default settings:

| Setting | Value |
| :--- | :--- |
| **Framework** | `Vite` (or `React`) |
| **Root Directory** | `/` (root) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Node.js Version** | `18.x` or `20.x` |

### Step 5: Deploy
1. Click **Deploy**.
2. Slate will trigger the build pipeline:
   - Installing dependencies (`npm install`)
   - Running Vite build (`npm run build`)
   - Distributing output (`dist`) across Zoho's global CDN with free SSL.
3. Once finished, you will receive a live URL (e.g. `https://catalyst-prime-store.catalystslate.com`).

### Step 6: Enable Auto-Deploy (Continuous Deployment)
- In your Slate app settings, ensure **Auto Deploy** is enabled.
- Whenever you push new commits to your GitHub `main` branch, Zoho Catalyst Slate will automatically rebuild and deploy your updates within seconds!

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── build-check.yml       # GitHub Actions CI verification
├── src/
│   ├── components/
│   │   ├── CartDrawer.jsx         # Slide-over cart with free shipping bar
│   │   ├── CheckoutModal.jsx      # Multi-step checkout & payment
│   │   ├── DealsRow.jsx           # Lightning deals with live countdown
│   │   ├── FeaturedCards.jsx      # Hero multi-category card grid
│   │   ├── Footer.jsx             # Multi-tier Amazon style footer
│   │   ├── Header.jsx             # Top search, location & navigation bar
│   │   ├── HeroCarousel.jsx       # Rotating promotional banner
│   │   ├── OrdersModal.jsx        # Order history & package tracking
│   │   ├── ProductCard.jsx        # Product item card with badges
│   │   ├── ProductDetailModal.jsx # Detailed modal view with buy box
│   │   ├── ProductGrid.jsx        # Sidebar filters & product catalog
│   │   ├── SubNav.jsx             # Category strip & side drawer
│   │   └── Toast.jsx              # Action notification pills
│   ├── context/
│   │   └── CartContext.jsx        # Cart state, orders & location store
│   ├── data/
│   │   └── mockProducts.js        # Catalog products, slides & categories
│   ├── App.jsx                    # Root view orchestrator
│   ├── index.css                  # Tailwind directives & styles
│   └── main.jsx                   # React DOM entrypoint
├── index.html                     # HTML root template
├── package.json                   # Project dependencies and build scripts
├── postcss.config.js              # PostCSS Tailwind plugins
├── tailwind.config.js             # Amazon color palettes & configuration
├── vite.config.js                 # Vite bundling configuration
├── catalyst.json                  # Optional Catalyst CLI configuration
└── .gitignore                     # Git ignore rules
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
