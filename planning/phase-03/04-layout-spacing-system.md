# Layout & Spacing System - Sacred Portal

**Document Status:** Draft  
**Last Updated:** March 12, 2026  
**Approval Status:** Pending Review

---

## 🎯 Layout System Goals

1. **Responsive:** Mobile-first approach with fluid scaling
2. **Consistent:** Predictable spacing and alignment across all pages
3. **Flexible:** Supports diverse content types and layouts
4. **Accessible:** Touch-friendly, keyboard navigable, screen reader compatible
5. **Performance:** Efficient rendering and minimal layout shifts

---

## 📐 Breakpoint System

### Breakpoint Definitions

```css
/* Mobile First Approach */
--breakpoint-xs: 0px;        /* Extra small devices (phones) */
--breakpoint-sm: 640px;      /* Small devices (large phones) */
--breakpoint-md: 768px;      /* Medium devices (tablets) */
--breakpoint-lg: 1024px;     /* Large devices (desktops) */
--breakpoint-xl: 1280px;     /* Extra large devices (large desktops) */
--breakpoint-2xl: 1536px;    /* 2X large devices (very large screens) */
```

### Media Query Usage

```css
/* Mobile: 0-639px (default, no media query) */

/* Tablet: 640px+ */
@media (min-width: 640px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }

/* Large Desktop: 1280px+ */
@media (min-width: 1280px) { }
```

---

## 📦 Container System

### Container Widths

```css
/* Container Max Widths */
--container-xs: 100%;        /* Full width on mobile */
--container-sm: 640px;       /* Small container */
--container-md: 768px;       /* Medium container */
--container-lg: 1024px;      /* Large container */
--container-xl: 1200px;      /* Extra large container (primary) */
--container-2xl: 1400px;     /* Maximum width */

/* Container Padding */
--container-padding-mobile: 16px;   /* Mobile horizontal padding */
--container-padding-tablet: 24px;   /* Tablet horizontal padding */
--container-padding-desktop: 32px;  /* Desktop horizontal padding */
```

### Container Types

#### Full-Width Container
```css
.container-full {
  width: 100%;
  max-width: 100%;
}
```

#### Standard Container (Most Common)
```css
.container {
  width: 100%;
  max-width: var(--container-xl); /* 1200px */
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding-mobile);
  padding-right: var(--container-padding-mobile);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--container-padding-desktop);
    padding-right: var(--container-padding-desktop);
  }
}
```

#### Narrow Container (Reading Content)
```css
.container-narrow {
  max-width: var(--container-md); /* 768px */
  /* Optimal for long-form reading */
}
```

---

## 📏 Spacing Scale

### Base Spacing System (8px Grid)

```css
/* Spacing Scale - 8px base unit */
--space-0: 0;
--space-1: 4px;      /* 0.25rem - Micro spacing */
--space-2: 8px;      /* 0.5rem - Base unit */
--space-3: 12px;     /* 0.75rem - Small spacing */
--space-4: 16px;     /* 1rem - Default spacing */
--space-5: 20px;     /* 1.25rem - Medium-small */
--space-6: 24px;     /* 1.5rem - Medium */
--space-8: 32px;     /* 2rem - Large */
--space-10: 40px;    /* 2.5rem - Extra large */
--space-12: 48px;    /* 3rem - 2X large */
--space-16: 64px;    /* 4rem - 3X large */
--space-20: 80px;    /* 5rem - 4X large */
--space-24: 96px;    /* 6rem - 5X large */
--space-32: 128px;   /* 8rem - Section spacing */
--space-40: 160px;   /* 10rem - Major sections */
--space-48: 192px;   /* 12rem - Hero spacing */
```

### Semantic Spacing Tokens

```css
/* Component Spacing */
--spacing-component-xs: var(--space-2);   /* 8px - Tight internal spacing */
--spacing-component-sm: var(--space-3);   /* 12px - Small internal spacing */
--spacing-component-md: var(--space-4);   /* 16px - Default internal spacing */
--spacing-component-lg: var(--space-6);   /* 24px - Large internal spacing */
--spacing-component-xl: var(--space-8);   /* 32px - Extra large internal */

/* Section Spacing */
--spacing-section-xs: var(--space-12);    /* 48px - Small section gap */
--spacing-section-sm: var(--space-16);    /* 64px - Medium section gap */
--spacing-section-md: var(--space-20);    /* 80px - Default section gap */
--spacing-section-lg: var(--space-24);    /* 96px - Large section gap */
--spacing-section-xl: var(--space-32);    /* 128px - Extra large section */

/* Stack Spacing (Vertical) */
--spacing-stack-xs: var(--space-2);       /* 8px - Tight stacking */
--spacing-stack-sm: var(--space-4);       /* 16px - Small stacking */
--spacing-stack-md: var(--space-6);       /* 24px - Default stacking */
--spacing-stack-lg: var(--space-8);       /* 32px - Large stacking */
--spacing-stack-xl: var(--space-12);      /* 48px - Extra large stacking */

/* Inline Spacing (Horizontal) */
--spacing-inline-xs: var(--space-2);      /* 8px - Tight inline */
--spacing-inline-sm: var(--space-3);      /* 12px - Small inline */
--spacing-inline-md: var(--space-4);      /* 16px - Default inline */
--spacing-inline-lg: var(--space-6);      /* 24px - Large inline */
--spacing-inline-xl: var(--space-8);      /* 32px - Extra large inline */
```

---

## 🎨 Grid System

### CSS Grid Layout

```css
/* 12-Column Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6); /* 24px default gap */
}

/* Responsive Grid Gaps */
@media (max-width: 767px) {
  .grid {
    gap: var(--space-4); /* 16px on mobile */
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: var(--space-8); /* 32px on desktop */
  }
}

/* Common Grid Patterns */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive Product Grid Example */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;           /* Mobile: 1 column */
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
    gap: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
    gap: var(--space-8);
  }
}
```

---

## 📱 Responsive Patterns

### Mobile-First Layout Strategy

**Mobile (0-639px):**
- Single column layouts
- Full-width components
- Stacked navigation
- Larger touch targets (min 44x44px)
- Simplified content hierarchy

**Tablet (640-1023px):**
- 2-column layouts where appropriate
- Hybrid navigation (may still be hamburger)
- Moderate spacing increases
- Product grids: 2 columns

**Desktop (1024px+):**
- Multi-column layouts (2-4 columns)
- Horizontal navigation
- Maximum spacing and breathing room
- Product grids: 3-4 columns
- Sidebar layouts where beneficial

---

## 🎯 Common Layout Patterns

### Hero Section

```css
.hero {
  padding-top: var(--space-16);      /* 64px */
  padding-bottom: var(--space-16);   /* 64px */
}

@media (min-width: 1024px) {
  .hero {
    padding-top: var(--space-24);    /* 96px */
    padding-bottom: var(--space-24); /* 96px */
  }
}
```

### Content Section

```css
.section {
  padding-top: var(--spacing-section-md);    /* 80px */
  padding-bottom: var(--spacing-section-md); /* 80px */
}

@media (max-width: 767px) {
  .section {
    padding-top: var(--spacing-section-sm);    /* 64px */
    padding-bottom: var(--spacing-section-sm); /* 64px */
  }
}
```

### Card Layout

```css
.card {
  padding: var(--spacing-component-lg);  /* 24px */
  border-radius: var(--radius-lg);       /* 12px */
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
}

@media (max-width: 767px) {
  .card {
    padding: var(--spacing-component-md); /* 16px */
  }
}
```

### Two-Column Layout (Sidebar)

```css
.layout-sidebar {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile: stacked */
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .layout-sidebar {
    grid-template-columns: 300px 1fr;  /* Desktop: sidebar + main */
    gap: var(--space-12);
  }
}
```

---

## 🔲 Border Radius System

```css
/* Border Radius Scale */
--radius-none: 0;
--radius-sm: 4px;      /* Small elements, badges */
--radius-md: 8px;      /* Buttons, inputs */
--radius-lg: 12px;     /* Cards, modals */
--radius-xl: 16px;     /* Large cards */
--radius-2xl: 24px;    /* Hero images, special elements */
--radius-full: 9999px; /* Pills, circular elements */
```

---

## 📐 Aspect Ratios

```css
/* Common Aspect Ratios */
--aspect-square: 1 / 1;        /* 1:1 - Product thumbnails */
--aspect-portrait: 3 / 4;      /* 3:4 - Product images */
--aspect-landscape: 4 / 3;     /* 4:3 - General images */
--aspect-video: 16 / 9;        /* 16:9 - Video content */
--aspect-wide: 21 / 9;         /* 21:9 - Hero banners */
--aspect-ultrawide: 32 / 9;    /* 32:9 - Ultra-wide banners */
```

### Aspect Ratio Usage

```css
.image-container {
  aspect-ratio: var(--aspect-square);
  overflow: hidden;
}

.product-image {
  aspect-ratio: var(--aspect-portrait);
  object-fit: cover;
}
```

---

## ♿ Accessibility Spacing

### Touch Target Sizing

```css
/* Minimum Touch Target: 44x44px (WCAG 2.1 AAA) */
--touch-target-min: 44px;

.button,
.link-interactive,
.form-input {
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
}

/* Comfortable Touch Target: 48x48px */
--touch-target-comfortable: 48px;
```

### Focus Indicators

```css
/* Focus Outline Spacing */
--focus-outline-width: 2px;
--focus-outline-offset: 2px;

*:focus-visible {
  outline: var(--focus-outline-width) solid var(--border-focus);
  outline-offset: var(--focus-outline-offset);
  border-radius: var(--radius-sm);
}
```

### Reading Width

```css
/* Optimal Line Length for Readability */
--reading-width-min: 45ch;  /* Minimum comfortable */
--reading-width-max: 75ch;  /* Maximum comfortable */
--reading-width-optimal: 65ch; /* Optimal */

.prose {
  max-width: var(--reading-width-optimal);
}
```

---

## 📋 Layout Checklist

- [x] Breakpoint system defined
- [x] Container widths established
- [x] Spacing scale created (8px grid)
- [x] Semantic spacing tokens mapped
- [x] Grid system documented
- [x] Responsive patterns defined
- [x] Border radius scale created
- [x] Aspect ratios defined
- [x] Touch target sizing specified
- [x] Focus indicator spacing defined
- [ ] Applied to component library
- [ ] Tested across all breakpoints

---

## 🎨 Usage Guidelines

### DO:
✅ Use spacing tokens, not arbitrary values  
✅ Maintain 8px grid alignment  
✅ Test layouts at all breakpoints  
✅ Ensure minimum 44x44px touch targets  
✅ Use semantic spacing tokens for consistency  
✅ Apply mobile-first responsive approach  

### DON'T:
❌ Use random spacing values (stick to scale)  
❌ Break the 8px grid system  
❌ Forget to test on actual devices  
❌ Create touch targets smaller than 44px  
❌ Use fixed pixel widths for content containers  
❌ Ignore keyboard navigation spacing  

---

## 🔄 Next Steps

1. **Apply to Components:** Use spacing system in component library
2. **Create Layout Templates:** Build common page layout templates
3. **Responsive Testing:** Test all layouts across breakpoints
4. **Accessibility Audit:** Validate touch targets and focus indicators
5. **Developer Documentation:** Create implementation guide

---

## 📝 Approval

**Layout & Spacing System Approved:** ☐ Yes ☐ No ☐ Needs Revision

**Approved By:** _________________  
**Date:** _________________  
**Notes:** _________________

---

**Document Version:** 1.0  
**Next Review:** After component library implementation
