# Typography System - Sacred Portal

**Document Status:** Draft  
**Last Updated:** March 12, 2026  
**Approval Status:** Pending Font Selection

---

## 🎯 Typography Goals

1. **Hierarchy:** Clear visual hierarchy that guides users through content
2. **Readability:** Excellent readability across all devices and contexts
3. **Brand Expression:** Typography reflects earthy, mystical, professional brand
4. **Accessibility:** WCAG 2.1 AA compliant, screen reader friendly
5. **Performance:** Fast loading with proper fallbacks

---

## 📝 Font Family Selection

### Primary Font (Headlines & Display)

**Recommended Options:**

#### Option 1: Cinzel Decorative (Google Fonts - FREE)
- **Style:** Elegant serif with classical proportions
- **License:** Open Font License (free for commercial use)
- **Weights:** Regular (400), Bold (700), Black (900)
- **Usage:** H1, H2, logo lockups, special callouts
- **Pros:** Free, good web performance, elegant without being overly ornate
- **Cons:** Less "apothecary" feel than custom options
- **URL:** https://fonts.google.com/specimen/Cinzel+Decorative

#### Option 2: Cormorant Garamond (Google Fonts - FREE)
- **Style:** Display serif with elegant, flowing characteristics
- **License:** Open Font License (free for commercial use)
- **Weights:** Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Usage:** H1, H2, H3, special text
- **Pros:** Free, versatile weights, sophisticated
- **Cons:** May need careful sizing for readability
- **URL:** https://fonts.google.com/specimen/Cormorant+Garamond

#### Option 3: Custom Apothecary Font (PAID - TBD)
- **Style:** Authentic apothecary/vintage serif
- **License:** Commercial license required
- **Usage:** H1, H2 only (very limited use)
- **Pros:** Perfect brand match, highly distinctive
- **Cons:** Cost, potential readability issues, licensing complexity
- **Action Required:** Research and license specific font

**RECOMMENDED:** Start with Cinzel Decorative (free) for initial development, evaluate custom apothecary font for final production.

---

### Secondary Font (Body & UI)

**Recommended Options:**

#### Option 1: Inter (Google Fonts - FREE) ⭐ RECOMMENDED
- **Style:** Modern, highly readable sans-serif
- **License:** Open Font License (free for commercial use)
- **Weights:** 300, 400, 500, 600, 700
- **Usage:** Body text, navigation, buttons, forms, all UI elements
- **Pros:** Excellent readability, variable font support, optimized for screens
- **Cons:** Very common (but that's okay for body text)
- **URL:** https://fonts.google.com/specimen/Inter

#### Option 2: Source Sans 3 (Google Fonts - FREE)
- **Style:** Clean, professional sans-serif
- **License:** Open Font License (free for commercial use)
- **Weights:** 200-900 (variable)
- **Usage:** Body text, UI elements
- **Pros:** Adobe quality, excellent hinting, highly readable
- **Cons:** Slightly more corporate feeling
- **URL:** https://fonts.google.com/specimen/Source+Sans+3

#### Option 3: DM Sans (Google Fonts - FREE)
- **Style:** Geometric sans-serif with warmth
- **License:** Open Font License (free for commercial use)
- **Weights:** 400, 500, 700
- **Usage:** Body text, UI elements
- **Pros:** Friendly, modern, good readability
- **Cons:** Limited weights compared to Inter
- **URL:** https://fonts.google.com/specimen/DM+Sans

**RECOMMENDED:** Inter for maximum readability and versatility

---

## 📐 Type Scale & Hierarchy

### Desktop Type Scale (≥1024px)

```css
/* Display / Hero */
--font-size-display: 64px;
--line-height-display: 72px;
--font-weight-display: 700;
--font-family-display: 'Cinzel Decorative', serif;

/* H1 - Page Titles */
--font-size-h1: 48px;
--line-height-h1: 56px;
--font-weight-h1: 700;
--font-family-h1: 'Cinzel Decorative', serif;

/* H2 - Section Titles */
--font-size-h2: 36px;
--line-height-h2: 44px;
--font-weight-h2: 700;
--font-family-h2: 'Cinzel Decorative', serif;

/* H3 - Subsection Titles */
--font-size-h3: 28px;
--line-height-h3: 36px;
--font-weight-h3: 600;
--font-family-h3: 'Inter', sans-serif;

/* H4 - Component Titles */
--font-size-h4: 24px;
--line-height-h4: 32px;
--font-weight-h4: 600;
--font-family-h4: 'Inter', sans-serif;

/* H5 - Small Headings */
--font-size-h5: 20px;
--line-height-h5: 28px;
--font-weight-h5: 600;
--font-family-h5: 'Inter', sans-serif;

/* H6 - Micro Headings */
--font-size-h6: 18px;
--line-height-h6: 26px;
--font-weight-h6: 600;
--font-family-h6: 'Inter', sans-serif;

/* Body Large */
--font-size-body-lg: 18px;
--line-height-body-lg: 30px;
--font-weight-body-lg: 400;
--font-family-body-lg: 'Inter', sans-serif;

/* Body Regular (Default) */
--font-size-body: 16px;
--line-height-body: 28px;
--font-weight-body: 400;
--font-family-body: 'Inter', sans-serif;

/* Body Small */
--font-size-body-sm: 14px;
--line-height-body-sm: 24px;
--font-weight-body-sm: 400;
--font-family-body-sm: 'Inter', sans-serif;

/* Caption / Meta */
--font-size-caption: 12px;
--line-height-caption: 20px;
--font-weight-caption: 400;
--font-family-caption: 'Inter', sans-serif;

/* Button Text */
--font-size-button: 16px;
--line-height-button: 24px;
--font-weight-button: 600;
--font-family-button: 'Inter', sans-serif;

/* Label Text */
--font-size-label: 14px;
--line-height-label: 20px;
--font-weight-label: 500;
--font-family-label: 'Inter', sans-serif;
```

### Mobile Type Scale (≤768px)

```css
/* Display / Hero */
--font-size-display-mobile: 40px;
--line-height-display-mobile: 48px;

/* H1 - Page Titles */
--font-size-h1-mobile: 32px;
--line-height-h1-mobile: 40px;

/* H2 - Section Titles */
--font-size-h2-mobile: 28px;
--line-height-h2-mobile: 36px;

/* H3 - Subsection Titles */
--font-size-h3-mobile: 24px;
--line-height-h3-mobile: 32px;

/* H4 - Component Titles */
--font-size-h4-mobile: 20px;
--line-height-h4-mobile: 28px;

/* H5 - Small Headings */
--font-size-h5-mobile: 18px;
--line-height-h5-mobile: 26px;

/* H6 - Micro Headings */
--font-size-h6-mobile: 16px;
--line-height-h6-mobile: 24px;

/* Body sizes remain the same on mobile */
```

---

## 📏 Typography Rules

### Line Height
- **Headlines (H1-H2):** 1.15-1.2x font size
- **Subheadings (H3-H6):** 1.3-1.4x font size
- **Body Text:** 1.75x font size (optimal for readability)
- **Captions:** 1.5-1.6x font size

### Letter Spacing
```css
--letter-spacing-tight: -0.02em;    /* Display, large headlines */
--letter-spacing-normal: 0;         /* Body text, most headings */
--letter-spacing-wide: 0.02em;      /* Buttons, labels, all-caps */
--letter-spacing-wider: 0.05em;     /* Small all-caps text */
```

### Max Line Length
```css
--max-line-length-body: 65ch;       /* Optimal readability */
--max-line-length-heading: 40ch;    /* Prevent awkward breaks */
--max-line-length-caption: 50ch;    /* Shorter for small text */
```

### Font Smoothing
```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

---

## 🌐 Font Loading Strategy

### Implementation

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load fonts with display=swap for performance -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Fallback Stack

```css
/* Primary (Display) Font Stack */
font-family: 'Cinzel Decorative', 'Georgia', 'Times New Roman', serif;

/* Secondary (Body) Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### Loading Performance
- Use `font-display: swap` to prevent invisible text
- Subset fonts to include only necessary characters
- Consider variable fonts for better performance
- Implement font loading detection for critical text

---

## ♿ Accessibility Guidelines

### Minimum Sizes
- **Body text:** Never smaller than 16px (14px acceptable for captions)
- **Touch targets:** Text links minimum 44x44px tap area
- **Line length:** Maximum 80 characters for optimal readability

### Contrast Requirements
- **Normal text (< 18px):** 4.5:1 contrast ratio minimum
- **Large text (≥ 18px or ≥ 14px bold):** 3:1 contrast ratio minimum
- **UI components:** 3:1 contrast ratio minimum

### Readability Best Practices
- Avoid all-caps for body text (okay for short labels/buttons)
- Avoid justified text (creates uneven spacing)
- Use adequate line spacing (1.5x minimum for body)
- Ensure sufficient paragraph spacing
- Use proper heading hierarchy (don't skip levels)

---

## 🎨 Usage Guidelines

### When to Use Display Font (Cinzel Decorative)
✅ **DO USE:**
- H1 page titles
- H2 section titles
- Hero headlines
- Logo lockups
- Special callouts or quotes

❌ **DON'T USE:**
- Body text (readability issues)
- Navigation menus (too ornate)
- Form labels (clarity needed)
- Long paragraphs
- Small text (< 18px)

### When to Use Body Font (Inter)
✅ **USE FOR:**
- All body text
- Navigation
- Buttons and CTAs
- Form fields and labels
- H3-H6 headings
- Product descriptions
- Captions and meta information

---

## 📋 Typography Checklist

- [ ] Primary font selected and licensed
- [ ] Secondary font selected and licensed
- [ ] Type scale defined for desktop and mobile
- [ ] Line height rules established
- [ ] Letter spacing rules established
- [ ] Max line length rules established
- [ ] Font loading strategy implemented
- [ ] Fallback fonts defined
- [ ] Accessibility contrast validated
- [ ] Usage guidelines documented
- [ ] Design tokens created

---

## 🔄 Next Steps

1. **Font Selection Approval:** Finalize primary and secondary fonts
2. **License Acquisition:** Obtain necessary font licenses
3. **Design Token Export:** Create CSS/JSON tokens for development
4. **Component Application:** Apply typography to component library
5. **Accessibility Testing:** Validate all type combinations for contrast

---

## 📝 Approval

**Typography System Approved:** ☐ Yes ☐ No ☐ Needs Revision

**Primary Font Selected:** _________________  
**Secondary Font Selected:** _________________  
**Approved By:** _________________  
**Date:** _________________

---

**Document Version:** 1.0  
**Next Review:** After font licensing complete
