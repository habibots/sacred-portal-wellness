# Design-to-Dev Handoff Package - Sacred Portal

**Document Status:** Draft  
**Last Updated:** March 12, 2026  
**Handoff Status:** Pending Completion

---

## 🎯 Handoff Package Goals

1. **Complete:** All information developers need to build the site
2. **Organized:** Easy to navigate and reference
3. **Accurate:** Specifications match approved designs exactly
4. **Accessible:** Clear documentation of accessibility requirements
5. **Actionable:** Developers can start building immediately

---

## 📦 Handoff Package Contents

### 1. Design System Documentation
- ✅ Visual direction and brand guidelines
- ✅ Typography system with font files
- ✅ Color and token system
- ✅ Layout and spacing system
- ✅ Component library specifications
- ✅ Motion and interaction guidelines

### 2. Page Designs
- ⏳ High-fidelity mockups (all pages, all breakpoints)
- ⏳ Interactive prototypes
- ⏳ User flow diagrams

### 3. Assets
- ⏳ Logo files (SVG, PNG)
- ⏳ Icons (SVG sprite or individual files)
- ⏳ Images (optimized WebP, PNG, JPG)
- ⏳ Fonts (WOFF2, WOFF)

### 4. Technical Specifications
- ✅ Design tokens (CSS variables, JSON)
- ⏳ Component code snippets
- ⏳ Accessibility requirements checklist
- ⏳ Browser support matrix

### 5. Documentation
- ✅ Implementation guidelines
- ✅ Component usage documentation
- ⏳ QA testing checklist
- ⏳ Known issues and exceptions

---

## 🎨 Design Tokens Export

### CSS Variables (design-tokens.css)

```css
/**
 * Sacred Portal Design Tokens
 * Generated: March 12, 2026
 * Version: 1.0
 */

:root {
  /* ===== COLORS ===== */
  
  /* Forest Green Scale */
  --color-forest-900: #0D3D12;
  --color-forest-800: #1B5E20;
  --color-forest-700: #2E7D32;
  --color-forest-600: #388E3C;
  --color-forest-500: #4CAF50;
  --color-forest-400: #66BB6A;
  --color-forest-300: #81C784;
  --color-forest-200: #A5D6A7;
  --color-forest-100: #C8E6C9;
  --color-forest-50: #E8F5E9;
  
  /* Moss Green Scale */
  --color-moss-900: #33691E;
  --color-moss-800: #558B2F;
  --color-moss-700: #689F38;
  --color-moss-600: #7CB342;
  --color-moss-500: #8BC34A;
  --color-moss-400: #9CCC65;
  --color-moss-300: #AED581;
  --color-moss-200: #C5E1A5;
  --color-moss-100: #DCEDC8;
  --color-moss-50: #F1F8E9;
  
  /* Charcoal Scale */
  --color-charcoal-900: #1A1A1A;
  --color-charcoal-800: #2C2C2C;
  --color-charcoal-700: #404040;
  --color-charcoal-600: #595959;
  --color-charcoal-500: #737373;
  --color-charcoal-400: #8C8C8C;
  --color-charcoal-300: #A6A6A6;
  --color-charcoal-200: #BFBFBF;
  --color-charcoal-100: #D9D9D9;
  --color-charcoal-50: #F2F2F2;
  
  /* Cream Scale */
  --color-cream-900: #E8E6E0;
  --color-cream-800: #EFEEE9;
  --color-cream-700: #F3F2ED;
  --color-cream-600: #F7F6F2;
  --color-cream-500: #FAF9F6;
  --color-cream-400: #FBFAF8;
  --color-cream-300: #FCFBFA;
  --color-cream-200: #FDFDFC;
  --color-cream-100: #FEFEFD;
  --color-cream-50: #FFFFFF;
  
  /* Utility Colors */
  --color-success-900: #1B5E20;
  --color-success-500: #4CAF50;
  --color-success-100: #C8E6C9;
  --color-warning-900: #E65100;
  --color-warning-500: #FF9800;
  --color-warning-100: #FFE0B2;
  --color-error-900: #B71C1C;
  --color-error-500: #F44336;
  --color-error-100: #FFCDD2;
  --color-info-900: #01579B;
  --color-info-500: #03A9F4;
  --color-info-100: #B3E5FC;
  
  /* ===== SEMANTIC TOKENS ===== */
  
  /* Backgrounds */
  --bg-primary: var(--color-cream-500);
  --bg-secondary: var(--color-cream-50);
  --bg-tertiary: var(--color-cream-900);
  --bg-hover: var(--color-forest-50);
  --bg-active: var(--color-forest-100);
  --bg-selected: var(--color-forest-200);
  --bg-disabled: var(--color-charcoal-50);
  --bg-overlay: rgba(26, 26, 26, 0.6);
  
  /* Text */
  --text-primary: var(--color-charcoal-800);
  --text-secondary: var(--color-charcoal-600);
  --text-tertiary: var(--color-charcoal-500);
  --text-inverse: var(--color-cream-50);
  --text-link: var(--color-forest-800);
  --text-link-hover: var(--color-forest-700);
  
  /* Brand */
  --brand-primary: var(--color-forest-800);
  --brand-primary-hover: var(--color-forest-700);
  --brand-primary-active: var(--color-forest-900);
  --brand-secondary: var(--color-moss-800);
  --brand-accent: var(--color-moss-500);
  
  /* Borders */
  --border-default: var(--color-charcoal-200);
  --border-subtle: var(--color-charcoal-100);
  --border-strong: var(--color-charcoal-300);
  --border-focus: var(--color-forest-800);
  --border-error: var(--color-error-500);
  --border-success: var(--color-success-500);
  
  /* ===== TYPOGRAPHY ===== */
  
  /* Font Families */
  --font-display: 'Cinzel Decorative', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes - Desktop */
  --font-size-display: 64px;
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --font-size-h4: 24px;
  --font-size-h5: 20px;
  --font-size-h6: 18px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
  --font-size-caption: 12px;
  --font-size-button: 16px;
  --font-size-label: 14px;
  
  /* Line Heights */
  --line-height-display: 72px;
  --line-height-h1: 56px;
  --line-height-h2: 44px;
  --line-height-h3: 36px;
  --line-height-h4: 32px;
  --line-height-h5: 28px;
  --line-height-h6: 26px;
  --line-height-body-lg: 30px;
  --line-height-body: 28px;
  --line-height-body-sm: 24px;
  --line-height-caption: 20px;
  --line-height-button: 24px;
  --line-height-label: 20px;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
  --letter-spacing-wider: 0.05em;
  
  /* ===== SPACING ===== */
  
  /* Base Scale */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;
  
  /* Semantic Spacing */
  --spacing-component-xs: var(--space-2);
  --spacing-component-sm: var(--space-3);
  --spacing-component-md: var(--space-4);
  --spacing-component-lg: var(--space-6);
  --spacing-component-xl: var(--space-8);
  --spacing-section-xs: var(--space-12);
  --spacing-section-sm: var(--space-16);
  --spacing-section-md: var(--space-20);
  --spacing-section-lg: var(--space-24);
  --spacing-section-xl: var(--space-32);
  
  /* ===== LAYOUT ===== */
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;
  --container-2xl: 1400px;
  
  /* Container Padding */
  --container-padding-mobile: 16px;
  --container-padding-tablet: 24px;
  --container-padding-desktop: 32px;
  
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  
  /* ===== ANIMATION ===== */
  
  /* Durations */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
  --duration-slowest: 1000ms;
  
  /* Easing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  
  /* ===== SHADOWS ===== */
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.12);
  --shadow-2xl: 0 24px 48px rgba(0, 0, 0, 0.15);
  
  /* ===== Z-INDEX ===== */
  
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}

/* ===== MOBILE OVERRIDES ===== */

@media (max-width: 767px) {
  :root {
    --font-size-display: 40px;
    --font-size-h1: 32px;
    --font-size-h2: 28px;
    --font-size-h3: 24px;
    --font-size-h4: 20px;
    --font-size-h5: 18px;
    --font-size-h6: 16px;
    
    --line-height-display: 48px;
    --line-height-h1: 40px;
    --line-height-h2: 36px;
    --line-height-h3: 32px;
    --line-height-h4: 28px;
    --line-height-h5: 26px;
    --line-height-h6: 24px;
  }
}
```

---

## 📁 Asset Organization

### Directory Structure

```
/assets/
├── fonts/
│   ├── cinzel-decorative/
│   │   ├── cinzel-decorative-regular.woff2
│   │   ├── cinzel-decorative-bold.woff2
│   │   └── cinzel-decorative.css
│   └── inter/
│       ├── inter-variable.woff2
│       └── inter.css
├── images/
│   ├── logo/
│   │   ├── logo.svg
│   │   ├── logo-light.svg
│   │   ├── logo-dark.svg
│   │   └── favicon.ico
│   ├── icons/
│   │   ├── icon-sprite.svg
│   │   └── individual/
│   ├── products/
│   │   └── [product-images].webp
│   ├── hero/
│   │   └── [hero-images].webp
│   └── textures/
│       └── [background-textures].webp
└── styles/
    ├── design-tokens.css
    └── reset.css
```

### Asset Specifications

**Logo Files:**
- Format: SVG (primary), PNG (fallback)
- Variants: Full color, light (white), dark (forest green)
- Sizes: Vector (SVG), 512x512px, 256x256px, 128x128px (PNG)
- Transparent background required

**Icons:**
- Format: SVG
- Size: 24x24px viewBox
- Stroke width: 2px
- Color: currentColor (inherits text color)
- Delivery: Sprite sheet + individual files

**Product Images:**
- Format: WebP (primary), JPG (fallback)
- Aspect ratio: 3:4 (portrait)
- Sizes: 800x1067px (full), 400x533px (thumbnail)
- Optimization: 80% quality, progressive
- Alt text: Required for all images

**Background Images:**
- Format: WebP (primary), JPG (fallback)
- Max file size: 200KB
- Optimization: Compressed, lazy-loaded
- Responsive: Multiple sizes for different breakpoints

---

## ♿ Accessibility Requirements

### WCAG 2.1 AA Compliance Checklist

**Color & Contrast:**
- [ ] All text meets 4.5:1 contrast ratio (normal text)
- [ ] Large text meets 3:1 contrast ratio (≥18px or ≥14px bold)
- [ ] UI components meet 3:1 contrast ratio
- [ ] Color is not the only means of conveying information
- [ ] Focus indicators are clearly visible (2px minimum)

**Keyboard Navigation:**
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical and intuitive
- [ ] Focus is visible on all interactive elements
- [ ] No keyboard traps
- [ ] Skip to main content link provided

**Screen Readers:**
- [ ] All images have descriptive alt text
- [ ] Decorative images have empty alt attributes
- [ ] Form inputs have associated labels
- [ ] ARIA labels used where appropriate
- [ ] Heading hierarchy is logical (H1 → H2 → H3, no skipping)
- [ ] Landmarks used (header, nav, main, footer)

**Forms:**
- [ ] All inputs have visible labels
- [ ] Required fields are marked and announced
- [ ] Error messages are clear and associated with inputs
- [ ] Success messages are announced
- [ ] Placeholder text is not used as labels

**Interactive Components:**
- [ ] Buttons have descriptive text or aria-labels
- [ ] Links have descriptive text (not "click here")
- [ ] Modals trap focus and return focus on close
- [ ] Accordions use proper ARIA attributes
- [ ] Carousels are keyboard navigable and pausable

**Motion & Animation:**
- [ ] `prefers-reduced-motion` is respected
- [ ] Animations can be paused or disabled
- [ ] No flashing content (seizure risk)
- [ ] Auto-playing content can be paused

**Touch Targets:**
- [ ] Minimum 44x44px touch target size
- [ ] Adequate spacing between touch targets
- [ ] Touch targets don't overlap

**Responsive Design:**
- [ ] Content is readable at 200% zoom
- [ ] No horizontal scrolling at standard zoom
- [ ] Text reflows properly on mobile
- [ ] Images scale appropriately

---

## 🔧 Technical Specifications

### Browser Support

**Supported Browsers:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

**Graceful Degradation:**
- WebP with JPG/PNG fallbacks
- CSS Grid with Flexbox fallback
- Modern CSS features with fallbacks
- Progressive enhancement approach

### Performance Requirements

**Page Load:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Asset Optimization:**
- Images: WebP format, lazy loading
- Fonts: WOFF2 format, font-display: swap
- CSS: Minified, critical CSS inlined
- JavaScript: Minified, code splitting
- Total page size: < 2MB

### SEO Requirements

**Meta Tags:**
- Title tag (50-60 characters)
- Meta description (150-160 characters)
- Open Graph tags for social sharing
- Canonical URLs
- Structured data (JSON-LD)

**Content:**
- Semantic HTML5 elements
- Proper heading hierarchy
- Descriptive alt text for images
- Internal linking structure
- Mobile-friendly design

---

## 📋 Implementation Checklist

### Phase 1: Setup
- [ ] Set up project structure
- [ ] Install and configure fonts
- [ ] Import design tokens (CSS variables)
- [ ] Set up CSS reset/normalize
- [ ] Configure build tools

### Phase 2: Core Components
- [ ] Header/Navigation
- [ ] Footer
- [ ] Buttons (all variants)
- [ ] Form inputs
- [ ] Cards
- [ ] Modals

### Phase 3: Page Templates
- [ ] Homepage
- [ ] Shop/Category page
- [ ] Product detail page
- [ ] Coaching page
- [ ] About page
- [ ] FAQ page
- [ ] Contact page

### Phase 4: Functionality
- [ ] Mobile menu
- [ ] Product filtering/sorting
- [ ] Image galleries
- [ ] Form validation
- [ ] Accordion interactions
- [ ] Loading states

### Phase 5: Polish
- [ ] Animations and transitions
- [ ] Hover states
- [ ] Focus states
- [ ] Loading spinners
- [ ] Error states

### Phase 6: Testing
- [ ] Cross-browser testing
- [ ] Responsive testing (all breakpoints)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance testing
- [ ] SEO validation

---

## 🐛 Known Issues & Exceptions

**To be documented during implementation:**
- Browser-specific quirks
- Accessibility exceptions (if any, with justification)
- Performance bottlenecks
- Design compromises
- Future enhancements

---

## 📞 Support & Communication

**Design Team Contact:**
- Email: [design-team-email]
- Slack: #sacred-portal-design
- Office Hours: [schedule]

**Questions & Clarifications:**
- Use Figma comments for design-specific questions
- Create GitHub issues for technical questions
- Schedule design review meetings as needed

**Approval Process:**
- Submit work for design review
- Address feedback and revisions
- Get final approval before deployment

---

## 🔄 Next Steps

1. **Complete Visual Mockups:** Finalize all page designs
2. **Export Assets:** Prepare all images, icons, fonts
3. **Create Prototypes:** Build interactive prototypes for testing
4. **Developer Onboarding:** Walk through handoff package
5. **Begin Implementation:** Start Phase 5 (Build & Development)

---

## 📝 Handoff Approval

**Design Handoff Package Complete:** ☐ Yes ☐ No ☐ In Progress

**Package Contents Verified:**
- [ ] Design system documentation
- [ ] Page mockups (all breakpoints)
- [ ] Design tokens exported
- [ ] Assets prepared and optimized
- [ ] Accessibility requirements documented
- [ ] Technical specifications provided
- [ ] Implementation checklist created

**Approved By:** _________________  
**Date:** _________________  
**Ready for Development:** ☐ Yes ☐ No

---

**Document Version:** 1.0  
**Next Review:** Before Phase 5 kickoff
