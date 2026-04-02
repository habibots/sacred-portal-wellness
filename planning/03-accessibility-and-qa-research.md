# Accessibility (WCAG 2.1 AA) & QA Research
## Sacred Portal Wellness -- E-Commerce Site

---

## Table of Contents

1. [WCAG 2.1 AA Compliance for E-Commerce](#1-wcag-21-aa-compliance-for-e-commerce)
2. [Accessible Design Patterns](#2-accessible-design-patterns)
3. [Testing Tools and Methods](#3-testing-tools-and-methods)
4. [QA Checklist for E-Commerce](#4-qa-checklist-for-e-commerce)
5. [E-Commerce-Specific QA](#5-e-commerce-specific-qa)

---

## 1. WCAG 2.1 AA Compliance for E-Commerce

### 1.1 Color Contrast Requirements

WCAG 2.1 AA requires:
- **Normal text** (under 18pt / 24px, or under 14pt / 18.66px bold): minimum **4.5:1** contrast ratio
- **Large text** (18pt+ / 24px+, or 14pt+ / 18.66px+ bold): minimum **3:1** contrast ratio
- **UI components and graphical objects**: minimum **3:1** contrast ratio against adjacent colors

#### Sacred Portal Brand Color Analysis

The brand primary is dark midnight green `#132A1F`. Here are the contrast ratios:

| Combination | Ratio | AA Normal | AA Large | Notes |
|---|---|---|---|---|
| `#132A1F` on `#FFFFFF` (white) | **~14.8:1** | PASS | PASS | Excellent -- use freely for all text |
| `#FFFFFF` on `#132A1F` | **~14.8:1** | PASS | PASS | Excellent -- white text on dark green |
| `#132A1F` on `#000000` (black) | **~1.4:1** | FAIL | FAIL | Nearly invisible -- never use |
| `#000000` on `#132A1F` | **~1.4:1** | FAIL | FAIL | Do not place black text on this green |
| `#132A1F` on `#F5F0EB` (off-white/cream) | **~12.5:1** | PASS | PASS | Safe for earthy background tones |

**Recommendations:**
- `#132A1F` on white or off-white backgrounds is the primary accessible combination
- For dark sections with the green background, use white (`#FFFFFF`) text only
- Never combine `#132A1F` with black -- insufficient contrast
- For interactive states (hover, focus), ensure the state change itself has 3:1 contrast against the default state
- Placeholder text in form fields must also meet 4.5:1 -- avoid light gray placeholders; use at minimum `#767676` on white
- Test all combinations with the WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

#### Disabled States & Non-Text Elements

- Disabled buttons/inputs are exempt from contrast requirements, but should still be visually distinguishable
- Icons that convey meaning (cart icon with count, warning icons) need 3:1 contrast against their background
- Focus indicators need 3:1 contrast (see Section 1.5)

---

### 1.2 Product Pages -- Key Requirements

| Requirement | WCAG Criterion | Implementation |
|---|---|---|
| Product images have alt text | 1.1.1 Non-text Content (A) | Descriptive alt text for every product image |
| Decorative images marked as decorative | 1.1.1 | `alt=""` and `role="presentation"` for lifestyle/texture images |
| Price is readable by screen readers | 1.3.1 Info and Relationships (A) | Use semantic markup, not just visual styling |
| Variant selectors are labeled | 1.3.1, 4.1.2 | Each variant option (size, scent) has a visible `<label>` |
| Quantity input is labeled | 1.3.1, 4.1.2 | `<label for="quantity">Quantity</label>` |
| Add to Cart button is descriptive | 2.4.6 Headings and Labels (AA) | "Add Yoni Steam Blend to Cart" (not just "Add") |
| Status changes announced | 4.1.3 Status Messages (AA) | "Added to cart" confirmation uses `aria-live="polite"` |
| Content reflows at 320px | 1.4.10 Reflow (AA) | No horizontal scrolling at 320px CSS width (400% zoom) |
| Text resizable to 200% | 1.4.4 Resize Text (AA) | Layout doesn't break at 200% browser zoom |

#### Product Image Alt Text Strategy

For Sacred Portal Wellness products:

```
Good:  "Yoni Steam Blend - Lavender and Rose herbal mix in a kraft paper pouch, 2oz"
Bad:   "product-image-01.jpg"
Bad:   "Yoni Steam Blend" (too vague for someone who can't see the image)

Good:  "Sacred Portal Yoni Seat - handcrafted wooden stool with steam opening, natural finish"
Bad:   "Yoni Seat"

Good:  "C.C.R Wound Healing Salve - 1oz amber glass jar with black label"
Bad:   "salve.png"
```

**Rules for product image alt text:**
1. Product name first
2. Key visual details (color, material, packaging)
3. Size/quantity if visible
4. For gallery images: describe what's unique about each angle ("side view showing", "close-up of ingredients")
5. Skip decorative lifestyle images (`alt=""`)
6. Never start with "Image of" or "Photo of" -- screen readers already announce it as an image

---

### 1.3 Screen Reader Compatibility

#### Product Listings (Shop Page)

```html
<!-- Each product card -->
<article aria-label="Yoni Steam Blend - Lavender and Rose">
  <a href="/shop/yoni-steam-blend-lavender-rose" aria-label="View Yoni Steam Blend - Lavender and Rose, $28.00">
    <img src="..." alt="Yoni Steam Blend - Lavender and Rose herbal mix in kraft paper pouch" />
    <h3>Yoni Steam Blend - Lavender and Rose</h3>
    <p aria-label="Price: $28.00">$28.00</p>
  </a>
</article>
```

Key patterns:
- Use `<article>` for each product card (creates a navigable landmark)
- Price should be announced clearly -- `aria-label="Price: $28.00"` prevents "$28" being read as "28 dollars" in some readers
- "Out of Stock" status needs `aria-live="polite"` if it can change dynamically
- Product grid should use a heading hierarchy: page `<h1>`, category `<h2>`, individual products `<h3>`

#### Cart / Cart Drawer

```html
<div role="dialog" aria-label="Shopping Cart" aria-modal="true">
  <h2>Your Cart</h2>
  <div role="status" aria-live="polite" aria-atomic="true">
    3 items in your cart. Subtotal: $84.00
  </div>

  <ul aria-label="Cart items">
    <li>
      <h3>Yoni Steam Blend</h3>
      <p>Lavender and Rose</p>
      <label for="qty-blend">Quantity</label>
      <input id="qty-blend" type="number" min="1" max="10" value="1"
             aria-describedby="qty-blend-stock" />
      <span id="qty-blend-stock" class="sr-only">10 in stock</span>
      <p>$28.00</p>
      <button aria-label="Remove Yoni Steam Blend from cart">Remove</button>
    </li>
  </ul>

  <button>Proceed to Checkout</button>
  <button aria-label="Close cart">Close</button>
</div>
```

Key patterns:
- Cart item count changes announced via `aria-live="polite"` region
- Each "Remove" button specifies which product (`aria-label="Remove Yoni Steam Blend from cart"`)
- Quantity changes trigger a live region update for the subtotal
- Empty cart state should be announced: "Your cart is empty"

---

### 1.4 Keyboard Navigation Requirements

WCAG 2.1 AA requires all functionality to be operable via keyboard alone (2.1.1 Keyboard).

#### Required Keyboard Interactions

| Element | Key | Action |
|---|---|---|
| All links and buttons | `Tab` / `Shift+Tab` | Navigate forward/backward |
| All links and buttons | `Enter` | Activate |
| Buttons | `Space` | Activate |
| Product variant radio buttons | `Arrow keys` | Select between options |
| Quantity input | `Arrow Up/Down` | Increment/decrement |
| Dropdown menus | `Arrow Down` to open, `Arrow keys` to navigate, `Enter` to select, `Escape` to close |
| Cart drawer / Modal | `Escape` | Close |
| Cart drawer / Modal | `Tab` | Trapped within modal (focus trap) |
| Image gallery | `Arrow Left/Right` | Navigate between images |

#### Tab Order Rules

1. Tab order must follow visual reading order (left-to-right, top-to-bottom)
2. Never use `tabindex` values greater than 0 -- they break natural tab order
3. Use `tabindex="0"` to make custom interactive elements focusable
4. Use `tabindex="-1"` for elements that should be programmatically focusable but not in tab order
5. Skip links (see Section 2.1) let keyboard users bypass navigation

#### No Keyboard Traps (2.1.2)

- Users must be able to navigate away from every component using keyboard alone
- Exception: modals should trap focus while open, but `Escape` must close them
- Autoplaying carousels or animations must be pausable via keyboard

---

### 1.5 Focus Management for Modals

This is critical for the cart drawer and any product quick-view overlays.

#### Cart Drawer Focus Management

```javascript
// When cart drawer opens:
// 1. Store the element that triggered the open
const triggerElement = document.activeElement;

// 2. Move focus to the first focusable element in the drawer
// (usually the close button or the heading)
cartDrawer.querySelector('[data-focus-first]').focus();

// 3. Trap focus within the drawer
// All Tab presses cycle through focusable elements inside the drawer only

// 4. When drawer closes:
// Return focus to the trigger element
triggerElement.focus();
```

**Focus trap implementation checklist:**
- [ ] Focus moves into modal on open
- [ ] `Tab` cycles through only modal content (wrap from last to first element)
- [ ] `Shift+Tab` wraps from first to last element
- [ ] `Escape` closes the modal
- [ ] Focus returns to the trigger element on close
- [ ] Background content gets `aria-hidden="true"` and `inert` attribute while modal is open
- [ ] Body scroll is locked while modal is open (CSS `overflow: hidden`)

**Focus indicator styling:**

```css
/* Visible focus indicator -- WCAG 2.4.7 (AA) requires visible focus */
/* WCAG 2.4.11 (AA in 2.2) recommends minimum 2px outline */
:focus-visible {
  outline: 3px solid #132A1F; /* brand green -- 14.8:1 on white */
  outline-offset: 2px;
  border-radius: 2px;
}

/* On dark backgrounds where green won't be visible */
.dark-section :focus-visible {
  outline: 3px solid #FFFFFF;
  outline-offset: 2px;
}

/* Never do this: */
/* :focus { outline: none; }  -- removes focus indicator entirely */
```

---

### 1.6 Accessible Forms -- Checkout Flow

The Square Web Payments SDK handles the payment card fields (they're in an iframe and are PCI-compliant and accessible by default). Everything else we build:

#### Form Labels (1.3.1, 3.3.2)

Every form input must have a visible, associated label:

```html
<!-- Correct: visible label linked to input -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" required
       autocomplete="email"
       aria-describedby="email-help" />
<span id="email-help">We'll send your order confirmation here</span>

<!-- Incorrect: placeholder as label -->
<input type="email" placeholder="Email address" />
<!-- Placeholders disappear on focus -- not accessible -->
```

#### Error Messages (3.3.1, 3.3.3)

```html
<!-- Input with error state -->
<label for="zip">ZIP Code</label>
<input type="text" id="zip" name="zip" required
       autocomplete="postal-code"
       aria-invalid="true"
       aria-describedby="zip-error" />
<span id="zip-error" role="alert">
  Please enter a valid 5-digit ZIP code
</span>
```

**Error handling requirements:**
1. Errors must be identified in text (not just color -- 1.4.1 Use of Color)
2. Use `aria-invalid="true"` on the invalid field
3. Use `aria-describedby` to associate the error message with the field
4. Use `role="alert"` or `aria-live="assertive"` so screen readers announce errors immediately
5. On form submission failure, either:
   - Move focus to the first invalid field, OR
   - Move focus to an error summary at the top of the form
6. Error messages must suggest how to fix the problem (3.3.3 Error Suggestion)

#### Checkout Form Fields with Autocomplete (1.3.5 Identify Input Purpose)

```html
<input type="text"   autocomplete="given-name"      /> <!-- First name -->
<input type="text"   autocomplete="family-name"      /> <!-- Last name -->
<input type="email"  autocomplete="email"            /> <!-- Email -->
<input type="tel"    autocomplete="tel"              /> <!-- Phone -->
<input type="text"   autocomplete="street-address"   /> <!-- Address line 1 -->
<input type="text"   autocomplete="address-line2"    /> <!-- Address line 2 -->
<input type="text"   autocomplete="address-level2"   /> <!-- City -->
<input type="text"   autocomplete="address-level1"   /> <!-- State -->
<input type="text"   autocomplete="postal-code"      /> <!-- ZIP -->
<input type="text"   autocomplete="country-name"     /> <!-- Country -->
```

Autocomplete attributes:
- Required by WCAG 2.1 AA (1.3.5) for common user data fields
- Helps users with cognitive disabilities auto-fill forms
- Improves UX for all users -- reduces checkout friction

#### Form Progress Indication

For multi-step checkout:

```html
<nav aria-label="Checkout progress">
  <ol>
    <li aria-current="step">
      <span>1. Shipping</span>
    </li>
    <li>
      <span>2. Payment</span>
    </li>
    <li>
      <span>3. Review</span>
    </li>
  </ol>
</nav>
```

---

### 1.7 ARIA Roles and Landmarks

#### Page Structure for E-Commerce

```html
<body>
  <!-- Skip navigation (see Section 2.1) -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header role="banner">
    <nav aria-label="Main navigation">
      <!-- Logo, Shop, Coaching, About, Contact links -->
    </nav>
    <button aria-label="Shopping cart, 3 items" aria-haspopup="dialog">
      Cart (3)
    </button>
  </header>

  <main id="main-content" role="main">
    <!-- Page-specific content -->

    <!-- Shop page example -->
    <h1>Shop</h1>

    <nav aria-label="Product categories">
      <!-- Category filters -->
    </nav>

    <section aria-label="Products">
      <h2>Yoni Steam Blends</h2>
      <!-- Product grid -->
    </section>

    <section aria-label="Products continued">
      <h2>Yoni Seats</h2>
      <!-- Product grid -->
    </section>
  </main>

  <footer role="contentinfo">
    <nav aria-label="Footer navigation">
      <!-- Footer links -->
    </nav>
    <section aria-label="Business information">
      <!-- Address, credentials, disclaimers -->
    </section>
  </footer>
</body>
```

**Landmark rules:**
- One `<header>` (banner), one `<main>`, one `<footer>` (contentinfo) per page
- Multiple `<nav>` elements are fine, but each needs a unique `aria-label`
- `<section>` elements need an accessible name (heading or `aria-label`)
- `<aside>` for supplementary content (e.g., "Customers also bought")
- Avoid `role="application"` -- it disables most screen reader shortcuts

---

## 2. Accessible Design Patterns

### 2.1 Skip Navigation Links

Required by WCAG 2.4.1 (Bypass Blocks) -- lets keyboard users jump past repeated navigation.

```html
<!-- First element in <body> -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

```css
.skip-link {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 9999;
}

.skip-link:focus {
  position: fixed;
  top: 10px;
  left: 10px;
  width: auto;
  height: auto;
  padding: 1rem 1.5rem;
  background: #132A1F;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;
  z-index: 9999;
}
```

For e-commerce, consider additional skip links:
- "Skip to products" (on shop page)
- "Skip to checkout form" (on checkout page)

---

### 2.2 Responsive Typography (rem/em vs px)

**Use `rem` for font sizes. Use `px` only for borders and shadows.**

```css
/* Root font size (typically browser default is 16px) */
html {
  font-size: 100%; /* Respects user's browser font size setting */
  /* NEVER set html { font-size: 16px } -- overrides user preferences */
}

/* Typography scale using rem */
body         { font-size: 1rem; }      /* 16px default */
h1           { font-size: 2.25rem; }   /* 36px */
h2           { font-size: 1.75rem; }   /* 28px */
h3           { font-size: 1.375rem; }  /* 22px */
.product-price { font-size: 1.25rem; } /* 20px */
.small-text  { font-size: 0.875rem; }  /* 14px -- don't go smaller */
```

**Why this matters for accessibility:**
- Users with low vision set larger default font sizes in their browser
- `rem` units scale with that setting; `px` units do not
- WCAG 1.4.4 (Resize Text) requires text to be resizable to 200% without loss of content
- `rem`-based layouts handle this automatically

**Tailwind CSS note:**
- Tailwind's default type scale (`text-sm`, `text-base`, `text-lg`, etc.) already uses `rem`
- Tailwind's `text-base` = `1rem` (16px) -- this is correct
- Tailwind spacing (`p-4`, `m-6`) uses `rem` -- also correct
- Just avoid overriding with `px` values in custom CSS

---

### 2.3 Touch Targets (Minimum 44x44px)

WCAG 2.5.5 (Target Size) at AA level in WCAG 2.2 requires a minimum of **24x24 CSS pixels**. The established best practice (and AAA requirement) is **44x44px**. Apple and Google both recommend **44pt / 48dp** (roughly 44-48px).

**For Sacred Portal Wellness, target 44x44px minimum for all interactive elements.**

```css
/* Buttons */
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem; /* 12px 24px -- exceeds 44px height with text */
}

/* Icon buttons (cart, close, menu toggle) */
.icon-btn {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Links in navigation */
nav a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.5rem 1rem;
}

/* Form inputs */
input, select, textarea {
  min-height: 44px;
  padding: 0.5rem 0.75rem;
}

/* Product variant selectors (e.g., size buttons) */
.variant-option {
  min-width: 44px;
  min-height: 44px;
}

/* Quantity stepper buttons (+/-) */
.qty-btn {
  min-width: 44px;
  min-height: 44px;
}
```

**Spacing between targets:**
- Minimum **8px** gap between adjacent touch targets
- Prevents accidental activation of the wrong target
- Tailwind: use `gap-2` (8px) minimum between interactive elements

---

### 2.4 Reduced Motion Preferences

WCAG 2.3.3 (Animation from Interactions) at AAA, but strongly recommended at AA.

```css
/* Default: animations enabled */
.cart-drawer {
  transition: transform 300ms ease-out;
}

.fade-in {
  animation: fadeIn 400ms ease-in;
}

/* User prefers reduced motion: disable or simplify animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**More nuanced approach (preferred):**

```css
@media (prefers-reduced-motion: reduce) {
  /* Remove sliding/bouncing -- replace with instant or simple fade */
  .cart-drawer {
    transition: opacity 100ms ease;
    /* No transform animation */
  }

  /* Disable parallax effects */
  .parallax-section {
    background-attachment: scroll;
  }

  /* Disable auto-advancing carousels */
  .carousel {
    animation: none;
  }

  /* Keep subtle opacity transitions -- they're less triggering */
  .product-card:hover img {
    transform: none; /* Remove zoom effect */
    /* Opacity change is OK */
  }
}
```

**In Next.js/React, detect the preference:**

```javascript
// Hook for reduced motion preference
function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);

    const handler = (event) => setPrefersReduced(event.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}
```

---

### 2.5 High Contrast Mode Support

Windows High Contrast Mode (now called "Contrast Themes") overrides site colors. Ensure the site remains usable:

```css
/* Detect Windows High Contrast Mode */
@media (forced-colors: active) {
  /* Borders become important for indicating interactive elements */
  button, a, input, select {
    border: 2px solid ButtonText;
  }

  /* Ensure focus indicators work */
  :focus-visible {
    outline: 3px solid Highlight;
  }

  /* Product images maintain visibility */
  img {
    border: 1px solid CanvasText;
  }

  /* Icons that use currentColor will adapt automatically */
  /* For SVG icons using fill, ensure they use currentColor */
  .icon svg {
    fill: currentColor;
  }
}
```

**Key rules:**
- Never rely solely on color to convey information (out-of-stock, errors, active states)
- Use borders, underlines, icons, or text labels as secondary indicators
- SVG icons should use `currentColor` so they adapt to forced-color modes
- Test with Windows High Contrast (or use Firefox's "Simulate" devtools)

---

## 3. Testing Tools and Methods

### 3.1 Automated Accessibility Testing

#### axe-core (Primary Automated Tool)

**What it catches:** ~30-40% of WCAG issues automatically (missing alt text, contrast failures, missing labels, invalid ARIA, landmark issues, heading hierarchy).

**Integration options for Next.js:**

```bash
# Install for development testing
npm install --save-dev @axe-core/react

# For CI pipeline
npm install --save-dev axe-core @axe-core/playwright
```

**Development integration (shows issues in browser console):**

```javascript
// In _app.js or layout.js -- development only
if (process.env.NODE_ENV === 'development') {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000);
  });
}
```

**CI integration with Playwright:**

```javascript
// tests/accessibility.spec.js
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});

test('shop page has no accessibility violations', async ({ page }) => {
  await page.goto('/shop');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});

test('checkout page has no accessibility violations', async ({ page }) => {
  // Add items to cart first
  await page.goto('/shop/yoni-steam-blend');
  await page.click('button:has-text("Add to Cart")');
  await page.goto('/checkout');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});
```

#### Lighthouse Accessibility Audit

Run via Chrome DevTools > Lighthouse tab, or programmatically:

```bash
# CLI usage
npx lighthouse https://sacredportalwellness.com --only-categories=accessibility --output=html
```

**Target score: 95+ out of 100** (100 is achievable for a well-built site).

Lighthouse accessibility checks overlap with axe-core (it uses axe internally) but also covers:
- Document language (`<html lang="en">`)
- Viewport meta tag
- Link text quality
- Heading order
- ARIA attribute validity

#### eslint-plugin-jsx-a11y (Catch Issues During Development)

```bash
npm install --save-dev eslint-plugin-jsx-a11y
```

```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "plugin:jsx-a11y/recommended"]
}
```

Catches at code-write time:
- Missing alt text on `<img>`
- Missing label associations
- Invalid ARIA attributes
- Click handlers on non-interactive elements
- Missing keyboard event handlers

---

### 3.2 Manual Testing Checklist

Automated tools catch ~30-40% of issues. Manual testing is essential for the rest.

#### Keyboard-Only Testing (Do This on Every Page)

- [ ] Can you reach every interactive element with `Tab`?
- [ ] Is the focus indicator visible on every focused element?
- [ ] Does the tab order follow the visual layout?
- [ ] Can you activate every button/link with `Enter` or `Space`?
- [ ] Can you close the cart drawer with `Escape`?
- [ ] Does focus return to the trigger when a modal closes?
- [ ] Can you complete the entire checkout with keyboard only?
- [ ] Can you navigate product variant options with arrow keys?
- [ ] Are there any keyboard traps (places you get stuck)?
- [ ] Does the skip link work and go to the right place?

#### Visual Testing

- [ ] Does the site work at 200% browser zoom?
- [ ] Does the site reflow at 320px width (no horizontal scroll)?
- [ ] Is color never the only way to communicate information?
- [ ] Are error messages visible and associated with their fields?
- [ ] Is text readable on all background colors?
- [ ] Do focus indicators have sufficient contrast?
- [ ] Are form labels visible (not just placeholders)?

#### Content and Structure Testing

- [ ] Does every page have exactly one `<h1>`?
- [ ] Are headings in hierarchical order (no skipping from h2 to h4)?
- [ ] Does every image have appropriate alt text?
- [ ] Are link texts descriptive (no "click here" or "read more")?
- [ ] Do all form fields have visible labels?
- [ ] Is the page language set (`<html lang="en">`)?
- [ ] Are page titles unique and descriptive?

---

### 3.3 Screen Reader Testing

#### VoiceOver on Mac (Primary -- You Have This)

**Quick start:**
1. `Cmd + F5` to enable/disable VoiceOver
2. `VO` (VoiceOver modifier) = `Ctrl + Option` by default
3. `VO + Right/Left Arrow` = navigate through elements
4. `VO + Space` = activate (click) the current element
5. `VO + U` = open the rotor (navigate by headings, links, landmarks, forms)

**What to test with VoiceOver:**
- [ ] Navigate the homepage -- is the reading order logical?
- [ ] Use the rotor to navigate by headings -- does the page structure make sense?
- [ ] Navigate by landmarks -- are all regions labeled?
- [ ] Go through a product page -- can you understand the product (name, description, price, options)?
- [ ] Add a product to the cart -- is the confirmation announced?
- [ ] Open the cart drawer -- does focus move into it? Can you navigate it?
- [ ] Complete checkout -- are all form fields, labels, and errors announced?
- [ ] Test error states -- are they announced immediately?

**Test with Safari** (VoiceOver is optimized for Safari on Mac).

#### NVDA on Windows (Secondary -- For Broader Testing)

Free download from https://www.nvaccess.org/. Test primarily with Firefox or Chrome on Windows.

Key NVDA commands:
- `Insert` = NVDA modifier key
- `Tab` = navigate form controls
- `H` = jump to next heading
- `D` = jump to next landmark
- `F` = jump to next form field
- `NVDA + Space` = toggle focus mode / browse mode

**Minimum screen reader testing matrix:**
1. VoiceOver + Safari (Mac) -- primary
2. NVDA + Chrome or Firefox (Windows) -- secondary
3. VoiceOver + Safari (iOS) -- mobile

---

### 3.4 Browser Testing Matrix

For a small e-commerce site targeting women 20-40s in San Diego, prioritize by market share:

#### Tier 1 -- Must Test (Covers ~85% of Users)

| Browser | Device | Priority | Notes |
|---|---|---|---|
| **Safari** | iPhone (latest iOS) | Highest | Likely 40-50%+ of traffic for this demographic |
| **Chrome** | Android phone | High | ~25-30% of traffic |
| **Chrome** | Mac desktop | High | ~15-20% |
| **Safari** | Mac desktop | High | ~10-15% |

#### Tier 2 -- Should Test (Covers Next ~10%)

| Browser | Device | Priority |
|---|---|---|
| **Safari** | iPad | Medium |
| **Chrome** | Windows desktop | Medium |
| **Edge** | Windows desktop | Medium |
| **Samsung Internet** | Samsung phones | Medium |

#### Tier 3 -- Spot Check

| Browser | Device | Notes |
|---|---|---|
| **Firefox** | Desktop | Small share, but important for accessibility community |
| **Chrome** | iPad | Small but growing |

**Recommended test devices:**
- iPhone 14/15 (Safari) -- most common for target demographic
- Budget Android (Chrome) -- test performance on slower devices
- MacBook (Chrome + Safari)
- iPad (Safari) -- test intermediate layout

**Important breakpoints to verify:**
- 320px (iPhone SE / minimum reflow width per WCAG)
- 375px (iPhone standard)
- 390px (iPhone 14/15)
- 768px (iPad portrait)
- 1024px (iPad landscape / small laptop)
- 1280px (laptop)
- 1440px (desktop)

---

### 3.5 Cross-Device Testing Approaches

**Local development:**
- Chrome DevTools device emulation (quick visual checks -- NOT a replacement for real devices)
- Responsive Design Mode in Safari (Develop > Enter Responsive Design Mode)
- Test on at least one real iPhone and one real Android device

**Cloud testing (if budget allows):**
- BrowserStack (real device cloud, free tier for open source)
- LambdaTest (alternative with similar features)

**Low-budget approach:**
1. Develop primarily in Chrome DevTools responsive mode
2. Test on your own iPhone (Safari) for primary mobile validation
3. Test on any Android phone for Chrome mobile
4. Ask client (Amber) to test on her devices
5. Use Vercel preview deployments to share test URLs easily

---

## 4. QA Checklist for E-Commerce

### 4.1 Checkout Flow Testing Scenarios

#### Happy Path (Must All Pass)

- [ ] Add single product to cart > checkout > pay > confirmation
- [ ] Add multiple products to cart > checkout > pay > confirmation
- [ ] Apply free shipping threshold ($100+ for San Diego local delivery)
- [ ] Standard flat-rate shipping applies correctly under threshold
- [ ] San Diego zip code detected correctly for local delivery eligibility
- [ ] Order confirmation page shows correct order details
- [ ] Order confirmation email received
- [ ] Order appears in Square Dashboard

#### Edge Cases

- [ ] Checkout with minimum order (single cheapest item)
- [ ] Checkout with maximum reasonable order (10+ items)
- [ ] Change quantity in cart (up and down)
- [ ] Remove last item from cart (cart should show empty state)
- [ ] Navigate back to shop from checkout, then return to checkout
- [ ] Browser refresh during checkout (form data preserved or gracefully handled)
- [ ] Checkout on slow 3G connection (loading states shown)
- [ ] Double-click on "Place Order" button (prevent duplicate orders)

#### Error States

- [ ] Invalid email format
- [ ] Missing required shipping fields
- [ ] Invalid ZIP code
- [ ] Payment card declined
- [ ] Network error during payment (timeout)
- [ ] Product goes out of stock during checkout
- [ ] Square API temporarily unavailable (graceful error message)

---

### 4.2 Mobile Responsiveness Testing

**Test at these breakpoints (matching Tailwind defaults):**

| Breakpoint | Width | What to Verify |
|---|---|---|
| Mobile S | 320px | No horizontal overflow, all text readable, buttons reachable |
| Mobile M | 375px | Same as above, standard iPhone layout |
| Mobile L | 425px | Larger phones |
| Tablet | 768px | Layout shifts to 2-column where appropriate |
| Laptop | 1024px | Full navigation visible, 3-column product grid |
| Desktop | 1280px | Maximum content width, centered layout |
| Desktop L | 1440px+ | No layout breakage, content doesn't stretch too wide |

**Specific responsive checks:**
- [ ] Navigation collapses to hamburger menu on mobile
- [ ] Product images scale appropriately (no overflow, no tiny images)
- [ ] Product grid: 1 column on mobile, 2 on tablet, 3-4 on desktop
- [ ] Cart drawer: full-width on mobile, side panel on desktop
- [ ] Checkout form: single column on mobile, two-column on desktop
- [ ] Footer stacks vertically on mobile
- [ ] All text remains readable (minimum 16px body text on mobile)
- [ ] Touch targets maintain 44px minimum at all sizes
- [ ] Horizontal scrolling never appears (except for intentional carousels)
- [ ] Images don't cause layout shifts on load (aspect ratio preserved)

---

### 4.3 Performance Testing

**Lighthouse Scores to Target:**

| Category | Target | Acceptable Minimum |
|---|---|---|
| **Performance** | 90+ | 80 |
| **Accessibility** | 95+ | 90 |
| **Best Practices** | 95+ | 90 |
| **SEO** | 95+ | 90 |

**Core Web Vitals Targets (Google's ranking signals):**

| Metric | Good | Needs Improvement | Poor |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5-4.0s | > 4.0s |
| **FID/INP** (Interaction to Next Paint) | < 200ms | 200-500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1-0.25 | > 0.25 |

**How to test:**
1. Chrome DevTools > Lighthouse (simulates mobile on throttled 4G)
2. https://pagespeed.web.dev/ (real-world field data after launch)
3. Google Search Console > Core Web Vitals (after indexing)

**Performance optimizations to verify:**
- [ ] Images use Next.js `<Image>` component (automatic WebP/AVIF, lazy loading, responsive sizes)
- [ ] Product images are appropriately sized (not serving 4000px images for 400px cards)
- [ ] Fonts loaded with `next/font` (no layout shift from font loading)
- [ ] No render-blocking resources
- [ ] JavaScript bundle size reasonable (check with `next build` output)
- [ ] API calls to Square are server-side (no client-side credential exposure)
- [ ] Static pages use ISR (Incremental Static Regeneration) where possible

---

### 4.4 SEO Validation

#### Tools to Use

| Tool | What It Tests | URL |
|---|---|---|
| **Google Rich Results Test** | Validates structured data (Product, FAQ, LocalBusiness schema) | https://search.google.com/test/rich-results |
| **Schema.org Validator** | Validates JSON-LD against schema.org specs | https://validator.schema.org/ |
| **Google Search Console** | Indexing status, crawl errors, Core Web Vitals | https://search.google.com/search-console |
| **Lighthouse SEO audit** | Meta tags, structured data, crawlability | Built into Chrome DevTools |
| **Screaming Frog** (free up to 500 URLs) | Full site crawl: broken links, missing meta, duplicate content | https://www.screamingfrog.co.uk/seo-spider/ |

#### SEO Checklist

- [ ] Every page has a unique `<title>` (50-60 characters)
- [ ] Every page has a unique `<meta name="description">` (120-158 characters)
- [ ] Every page has exactly one `<h1>`
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Twitter Card tags present (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- [ ] Canonical URLs set on all pages (`<link rel="canonical">`)
- [ ] Sitemap.xml generated and submitted to Search Console
- [ ] robots.txt allows indexing of public pages, blocks admin/API routes
- [ ] JSON-LD structured data validates without errors for: Product, LocalBusiness, FAQPage, BreadcrumbList
- [ ] All images have descriptive alt text
- [ ] Internal links use descriptive anchor text
- [ ] No broken internal links (404s)
- [ ] HTTPS enforced on all pages
- [ ] Mobile-friendly test passes (Google's Mobile-Friendly Test)

---

### 4.5 Link Validation

```bash
# Use a link checker tool -- run against staging/preview URL
npx broken-link-checker https://staging-url.vercel.app --recursive --ordered

# Or use Screaming Frog for a more comprehensive crawl
```

**Check for:**
- [ ] No broken internal links (404s)
- [ ] No broken external links
- [ ] Social media links open in new tab (`target="_blank"` with `rel="noopener noreferrer"`)
- [ ] Email links use `mailto:` correctly
- [ ] Phone links use `tel:` correctly
- [ ] All CTA buttons go to the correct destination
- [ ] Product links from homepage/featured sections go to correct product pages

---

### 4.6 Image Optimization Verification

- [ ] All images use Next.js `<Image>` component (or equivalent optimization)
- [ ] Images serve WebP or AVIF format (check Network tab in DevTools)
- [ ] Images have explicit `width` and `height` (prevents CLS)
- [ ] Images use `loading="lazy"` for below-the-fold content
- [ ] Hero/above-fold images use `priority` prop (eager loading)
- [ ] Product images have reasonable file sizes (< 200KB for thumbnails, < 500KB for full size)
- [ ] No oversized images served (e.g., 3000px image in a 300px container)
- [ ] Images have appropriate alt text (see Section 1.2)
- [ ] Placeholder/blur-up effect for product images while loading

---

### 4.7 Form Validation Testing

Test every form on the site (checkout, contact, newsletter signup):

- [ ] Required fields show error when submitted empty
- [ ] Email field rejects invalid email formats
- [ ] Phone field accepts common formats (with/without dashes, parentheses, country code)
- [ ] ZIP code validates format (5 digits or ZIP+4)
- [ ] Error messages are specific and helpful (not just "Invalid input")
- [ ] Error messages appear near the relevant field (not just at top of form)
- [ ] Successful submission shows clear confirmation
- [ ] Form cannot be submitted multiple times rapidly (debounce/disable button)
- [ ] Form works with browser autofill
- [ ] Form works with password managers (for email/personal info fields)
- [ ] Pasting text into fields works correctly
- [ ] Long input values are handled gracefully (truncation or scrolling)

---

## 5. E-Commerce-Specific QA

### 5.1 Cart Edge Cases

| Scenario | Expected Behavior | Test Method |
|---|---|---|
| **Empty cart** | Show "Your cart is empty" message with CTA to shop | Navigate to cart with no items |
| **Add item already in cart** | Increment quantity (don't add duplicate line) | Add same product twice |
| **Max quantity** | Cap at stock level or reasonable max (e.g., 10); show message | Try to add 999 of an item |
| **Quantity = 0** | Remove item from cart | Set quantity to 0 |
| **Out of stock during browse** | Show "Out of Stock" badge, disable Add to Cart | Set stock to 0 in Square |
| **Out of stock during checkout** | Show error before payment: "X is no longer available" | Reduce stock after cart add, before pay |
| **Price change after cart add** | Update to current price; optionally notify user | Change price in Square while item is in cart |
| **Cart persistence** | Cart survives page refresh and browser close | Refresh, close tab, reopen |
| **Cart across devices** | Cart is device-specific (no account system) | Expected: independent carts per device |
| **Rapid add/remove** | No race conditions, correct final state | Click add/remove quickly |

---

### 5.2 Payment Failure Handling

| Failure Type | User Message | Behavior |
|---|---|---|
| **Card declined** | "Your card was declined. Please try a different payment method or contact your bank." | Stay on payment step, form retains data |
| **Insufficient funds** | "Your card was declined. Please try a different payment method." | Stay on payment step |
| **Invalid card number** | "Please check your card number and try again." | Inline validation before submission |
| **Expired card** | "Your card has expired. Please use a different card." | Inline validation (Square SDK handles this) |
| **Network timeout** | "We couldn't process your payment. Please check your connection and try again." | Offer retry, don't duplicate charge |
| **Square API error** | "Something went wrong. Please try again in a moment. If this continues, contact us at business@sacredportalwellness.com" | Log error server-side, show friendly message |
| **3D Secure challenge** | Square SDK handles this flow automatically | Verify the challenge popup works on mobile |
| **Duplicate submission** | Prevent it: disable button after first click | Button shows "Processing..." and is disabled |

**Critical: Idempotency**
- Use Square's idempotency keys for payment creation
- If user retries after a timeout, don't create a duplicate charge
- Store `idempotency_key` per checkout attempt

---

### 5.3 Email Delivery Testing

#### Order Confirmation Emails

- [ ] Email sent immediately after successful payment
- [ ] Email contains: order number, items, quantities, prices, shipping address, total
- [ ] Email renders correctly in Gmail (Amber's primary)
- [ ] Email renders correctly in Apple Mail (common for target demographic)
- [ ] Email renders correctly on mobile
- [ ] "From" address is `business@sacredportalwellness.com` or `info@sacredportalwellness.com`
- [ ] SPF, DKIM, and DMARC records set up (prevent emails going to spam)
- [ ] Reply-to address is monitored
- [ ] Email doesn't end up in spam folder (test with mail-tester.com)

**Email delivery options:**
- Square handles order confirmation emails automatically if using their checkout
- For custom checkout: use a transactional email service (Resend, SendGrid, or Postmark)
- Resend is recommended for Next.js projects (simple API, good deliverability, free tier: 100 emails/day)

#### Test Scenarios

- [ ] Successful order > email within 2 minutes
- [ ] Order with local delivery > email mentions delivery (not shipping)
- [ ] Order with standard shipping > email mentions estimated delivery
- [ ] Check all product names, prices, quantities are correct in email
- [ ] Test with long product names (no truncation or layout break)

---

### 5.4 Shipping Calculator Edge Cases

Based on the defined rules: flat-rate shipping + free local delivery in San Diego over $100.

| Scenario | Expected Result |
|---|---|
| San Diego ZIP, order $99.99 | Flat rate shipping charged |
| San Diego ZIP, order $100.00 | Free local delivery offered |
| San Diego ZIP, order $100.01 | Free local delivery offered |
| Non-San Diego ZIP, order $200 | Flat rate shipping charged (not eligible for local delivery) |
| Invalid ZIP code | Error message: "Please enter a valid ZIP code" |
| Empty ZIP code | Shipping cost not calculated yet; prompt to enter ZIP |
| Alaska/Hawaii ZIP | Flat rate or special messaging (confirm policy with Amber) |
| PO Box address | Flat rate shipping (delivery services often can't deliver to PO boxes) |
| International address | Not supported initially; show message "We currently ship within the US only" |

**San Diego ZIP codes for local delivery (to validate):**
- Confirm the exact list of eligible ZIP codes with Amber
- Common San Diego ZIPs: 92101-92199 range (but not all are San Diego proper)
- Build a validated list, not a range check

---

### 5.5 Product Variant Selection Testing

For products with variants (e.g., different steam blend scents or sizes):

- [ ] Variant options display clearly (selected state visible, not just color-coded)
- [ ] Selecting a variant updates the product image (if different images per variant)
- [ ] Selecting a variant updates the price (if price differs)
- [ ] Selecting a variant updates stock availability
- [ ] Out-of-stock variants are visually distinguished and not selectable
- [ ] Cannot add to cart without selecting required variant
- [ ] Error message if user tries to add without variant: "Please select a [scent/size]"
- [ ] Cart shows which variant was selected (not just the product name)
- [ ] Changing variant resets quantity to 1
- [ ] URL updates with variant selection (for sharing/bookmarking specific variants)
- [ ] Back button after variant change works correctly

---

## Quick Reference: Priority Implementation Order

For launch, prioritize these accessibility and QA items:

### Must-Have Before Launch

1. Color contrast passes 4.5:1 on all text
2. All images have alt text
3. All forms have visible labels
4. Keyboard navigation works through entire checkout flow
5. Focus management on cart drawer (trap + return)
6. Error messages are accessible (associated with fields, announced by screen readers)
7. Skip navigation link
8. `<html lang="en">`
9. Unique page titles
10. Touch targets 44px minimum
11. Checkout happy path works on mobile Safari
12. Payment failure handling covers all Square error types
13. Cart edge cases handled (empty, out of stock, max quantity)
14. Basic Lighthouse audit passes 90+ on all categories

### Should-Have Within First Month

1. Screen reader testing with VoiceOver (full checkout flow)
2. `@prefers-reduced-motion` support
3. Comprehensive form validation testing
4. Email delivery verification (SPF/DKIM/DMARC)
5. Full structured data validation
6. Cross-browser testing on Tier 2 devices
7. Automated axe-core tests in CI pipeline
8. Performance optimization (Core Web Vitals green)

### Nice-to-Have (Ongoing)

1. NVDA testing on Windows
2. High contrast mode support
3. Full WCAG 2.2 AA compliance (latest spec updates)
4. Regular accessibility audits (quarterly)
5. User testing with people who use assistive technology

---

## Reference Links

- WCAG 2.1 Quick Reference: https://www.w3.org/WAI/WCAG21/quickref/
- WCAG 2.2 (latest): https://www.w3.org/TR/WCAG22/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- The A11y Project Checklist: https://www.a11yproject.com/checklist/
- axe-core Rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
- ARIA Authoring Practices (modal dialog): https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- ARIA Authoring Practices (carousel): https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
- Square Web Payments SDK: https://developer.squareup.com/docs/web-payments/overview
- Next.js Accessibility: https://nextjs.org/docs/architecture/accessibility
- Lighthouse CI: https://github.com/GoogleChrome/lighthouse-ci
