# Design System Implementation

**Phase 5 - Step 3**  
**Estimated Time:** 4-6 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Objectives

By the end of this guide, you will have:

- ✅ Design tokens converted to Tailwind configuration
- ✅ CSS variables set up for theming
- ✅ Typography system implemented
- ✅ Color system with semantic tokens
- ✅ Spacing and layout utilities
- ✅ Base UI component library
- ✅ Accessibility patterns implemented

---

## 📋 Step 1: Convert Design Tokens to Tailwind Config

### Reference Design Tokens

Use the design tokens from Phase 3:
`/planning/phase-03/design-tokens.json`

### Update `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#388E3C',
          700: '#2E7D32',
          800: '#1B5E20',
          900: '#0D3D12',
        },
        moss: {
          50: '#F1F8E9',
          100: '#DCEDC8',
          200: '#C5E1A5',
          300: '#AED581',
          400: '#9CCC65',
          500: '#8BC34A',
          600: '#7CB342',
          700: '#689F38',
          800: '#558B2F',
          900: '#33691E',
        },
        charcoal: {
          50: '#F2F2F2',
          100: '#D9D9D9',
          200: '#BFBFBF',
          300: '#A6A6A6',
          400: '#8C8C8C',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#2C2C2C',
          900: '#1A1A1A',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FEFEFD',
          200: '#FDFDFC',
          300: '#FCFBFA',
          400: '#FBFAF8',
          500: '#FAF9F6',
          600: '#F7F6F2',
          700: '#F3F2ED',
          800: '#EFEEE9',
          900: '#E8E6E0',
        },
      },
      fontFamily: {
        display: ['Cinzel Decorative', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '72px' }],
        h1: ['48px', { lineHeight: '56px' }],
        h2: ['36px', { lineHeight: '44px' }],
        h3: ['28px', { lineHeight: '36px' }],
        h4: ['24px', { lineHeight: '32px' }],
        h5: ['20px', { lineHeight: '28px' }],
        h6: ['18px', { lineHeight: '26px' }],
        'body-lg': ['18px', { lineHeight: '30px' }],
        body: ['16px', { lineHeight: '28px' }],
        'body-sm': ['14px', { lineHeight: '24px' }],
        caption: ['12px', { lineHeight: '20px' }],
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
        '48': '192px',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.07)',
        md: '0 4px 6px rgba(0, 0, 0, 0.07)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
        xl: '0 12px 24px rgba(0, 0, 0, 0.12)',
        '2xl': '0 24px 48px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 250ms ease-out',
        'slide-up': 'slideUp 250ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 📋 Step 2: Set Up CSS Variables

### Create `src/styles/design-tokens.css`

```css
@layer base {
  :root {
    /* Colors - Brand */
    --color-brand-primary: #1B5E20;
    --color-brand-primary-hover: #2E7D32;
    --color-brand-primary-active: #0D3D12;
    --color-brand-secondary: #558B2F;
    --color-brand-accent: #8BC34A;

    /* Colors - Background */
    --color-bg-primary: #FAF9F6;
    --color-bg-secondary: #FFFFFF;
    --color-bg-tertiary: #E8E6E0;
    --color-bg-hover: #E8F5E9;
    --color-bg-active: #C8E6C9;
    --color-bg-disabled: #F2F2F2;
    --color-bg-overlay: rgba(26, 26, 26, 0.6);

    /* Colors - Text */
    --color-text-primary: #2C2C2C;
    --color-text-secondary: #595959;
    --color-text-tertiary: #737373;
    --color-text-inverse: #FFFFFF;
    --color-text-link: #1B5E20;
    --color-text-link-hover: #2E7D32;

    /* Colors - Border */
    --color-border-default: #BFBFBF;
    --color-border-subtle: #D9D9D9;
    --color-border-strong: #A6A6A6;
    --color-border-focus: #1B5E20;
    --color-border-error: #F44336;
    --color-border-success: #4CAF50;

    /* Typography */
    --font-display: 'Cinzel Decorative', Georgia, serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 48px;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;

    /* Animation */
    --duration-fast: 150ms;
    --duration-normal: 250ms;
    --duration-slow: 400ms;
    --easing-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}
```

### Import in `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './design-tokens.css';

@layer base {
  body {
    @apply bg-cream-500 text-charcoal-800 font-body;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display text-charcoal-900;
  }
}
```

---

## 📋 Step 3: Load Custom Fonts

### Option A: Google Fonts (Recommended for Inter)

Update `src/app/layout.tsx`:

```tsx
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Option B: Custom Font (Cinzel Decorative)

1. Download font files and place in `public/fonts/`
2. Create `src/styles/fonts.css`:

```css
@font-face {
  font-family: 'Cinzel Decorative';
  src: url('/fonts/CinzelDecorative-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Cinzel Decorative';
  src: url('/fonts/CinzelDecorative-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

3. Import in `globals.css`:

```css
@import './fonts.css';
```

---

## 📋 Step 4: Create Base UI Components

### Button Component

```tsx
// src/components/ui/button.tsx
import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-forest-800 text-white hover:bg-forest-700 active:bg-forest-900':
              variant === 'primary',
            'bg-moss-600 text-white hover:bg-moss-700 active:bg-moss-800':
              variant === 'secondary',
            'border-2 border-forest-800 text-forest-800 hover:bg-forest-50':
              variant === 'outline',
            'text-forest-800 hover:bg-forest-50': variant === 'ghost',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
```

### Card Component

```tsx
// src/components/ui/card.tsx
import { cn } from '@/lib/utils/cn';
import { HTMLAttributes, forwardRef } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg bg-white shadow-md border border-charcoal-100',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pb-4', className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      />
    );
  }
);

CardContent.displayName = 'CardContent';
```

### Input Component

```tsx
// src/components/ui/input.tsx
import { cn } from '@/lib/utils/cn';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md border bg-white px-4 py-2 text-base',
          'focus-visible:outline-none focus-visible:ring-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error
            ? 'border-error-500 focus-visible:ring-error-500'
            : 'border-charcoal-200 focus-visible:ring-forest-800',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
```

---

## 📋 Step 5: Implement Accessibility Patterns

### Skip Link Component

```tsx
// src/components/layout/skip-link.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest-800 focus:text-white focus:rounded-md"
    >
      Skip to main content
    </a>
  );
}
```

### Focus Visible Styles

Add to `globals.css`:

```css
@layer base {
  /* Ensure focus is always visible */
  *:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  /* Remove default focus for mouse users */
  *:focus:not(:focus-visible) {
    outline: none;
  }
}
```

### Reduced Motion Support

Add to `globals.css`:

```css
@layer base {
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

---

## 📋 Step 6: Create Layout Components

### Header Component

```tsx
// src/components/layout/header.tsx
import Link from 'next/link';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-charcoal-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-h4 font-display text-forest-800">
            Sacred Portal
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
```

### Footer Component

```tsx
// src/components/layout/footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-h6 font-display mb-4">Sacred Portal</h3>
            <p className="text-body-sm text-charcoal-300">
              Holistic wellness and yoni steaming products
            </p>
          </div>
          <div>
            <h4 className="text-h6 mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/shop" className="text-body-sm hover:text-moss-400">
                Shop
              </Link>
              <Link href="/about" className="text-body-sm hover:text-moss-400">
                About
              </Link>
              <Link href="/faq" className="text-body-sm hover:text-moss-400">
                FAQ
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-h6 mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/policies/privacy" className="text-body-sm hover:text-moss-400">
                Privacy Policy
              </Link>
              <Link href="/policies/returns" className="text-body-sm hover:text-moss-400">
                Return Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-charcoal-700 text-center text-body-sm text-charcoal-400">
          © {new Date().getFullYear()} Sacred Portal Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

---

## ✅ Implementation Checklist

- [ ] Tailwind config updated with design tokens
- [ ] CSS variables created
- [ ] Custom fonts loaded
- [ ] Button component created
- [ ] Card component created
- [ ] Input component created
- [ ] Skip link implemented
- [ ] Focus styles configured
- [ ] Reduced motion support added
- [ ] Header component created
- [ ] Footer component created
- [ ] Components tested in browser

---

## 🎯 Next Steps

Once design system is implemented:

1. ✅ Test all components in browser
2. ✅ Verify accessibility with keyboard navigation
3. ✅ Commit changes to Git
4. ✅ Update PHASE-05-STATUS.md
5. ✅ Move to **[04-square-integration.md](./04-square-integration.md)**

---

**Design System Complete!** Ready to integrate Square APIs. 🎨

**Last Updated:** March 12, 2026
