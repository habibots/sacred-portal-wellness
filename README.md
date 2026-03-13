# Sacred Portal Wellness

E-commerce website for Sacred Portal Wellness - Holistic yoni steaming products and coaching for women's health.

## 🌿 About

Sacred Portal Wellness offers holistic yoni steaming products and personalized coaching to support feminine wellness. Founded by Amber (RN, BSN, HC-NC), this platform combines professional nursing expertise with traditional healing practices.

## ✨ Features

- **E-commerce Shop** - Browse and purchase yoni steaming products
- **Shopping Cart** - Full cart management with localStorage persistence
- **Coaching Programs** - The Sacred Portal Path personalized wellness coaching
- **Educational Content** - FAQ section with comprehensive yoni steaming information
- **Shipping Logic** - San Diego local delivery with free shipping over $100
- **Square Integration** - Ready for Square Catalog, Orders, and Payments APIs
- **Responsive Design** - Mobile-first, accessible (WCAG 2.1 AA)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Square Developer account (for e-commerce features)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Square credentials to .env.local
# SQUARE_ACCESS_TOKEN=your_token_here
# SQUARE_APP_ID=your_app_id_here
# SQUARE_LOCATION_ID=your_location_id_here

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Commerce:** Square API
- **State Management:** React Context
- **Validation:** Zod
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── app/              # Pages and routes
├── components/       # React components
│   ├── ui/          # Base UI components
│   └── layout/      # Layout components
├── lib/             # Utilities and logic
│   ├── cart/        # Shopping cart
│   ├── square/      # Square API
│   ├── shipping/    # Shipping logic
│   └── utils/       # Helpers
└── types/           # TypeScript types
```

## 🎨 Design System

- **Colors:** Forest green, moss, charcoal, cream
- **Typography:** Cinzel Decorative (display), Inter (body)
- **Components:** Button, Card, Input, Header, Footer
- **Accessibility:** WCAG 2.1 AA compliant

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔐 Environment Variables

Required variables (see `.env.example`):

```bash
SQUARE_ACCESS_TOKEN=          # Square API access token
SQUARE_APP_ID=                # Square application ID
SQUARE_LOCATION_ID=           # Square location ID
SQUARE_ENV=sandbox            # sandbox or production
NEXT_PUBLIC_SQUARE_APP_ID=    # Public Square app ID
NEXT_PUBLIC_SQUARE_LOCATION_ID= # Public location ID
NEXT_PUBLIC_SITE_URL=         # Site URL
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm run start
```

## 📄 Pages

- `/` - Homepage
- `/shop` - Product catalog
- `/about` - About the creator
- `/coaching` - Coaching programs
- `/faq` - Frequently asked questions
- `/contact` - Contact information
- `/cart` - Shopping cart
- `/checkout` - Checkout flow
- `/policies/*` - Legal pages

## 🛒 Shopping Cart

- Add/remove items
- Update quantities
- localStorage persistence
- Real-time calculations
- Shipping cost calculation

## 🚚 Shipping

- **San Diego Local Delivery:** $10 (FREE over $100)
- **Standard Shipping:** $5.99 flat rate
- ZIP code validation for local delivery

## 📝 License

All rights reserved - Sacred Portal Wellness

## 👩‍⚕️ Contact

- **Email:** info@sacredportalwellness.com
- **Instagram:** @saacredportal
- **Location:** San Diego, California

---

Built with ❤️ by Sacred Portal Wellness
