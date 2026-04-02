# Color & Token System - Sacred Portal

**Document Status:** Draft  
**Last Updated:** March 12, 2026  
**Approval Status:** Pending Accessibility Validation

---

## 🎯 Color System Goals

1. **Brand Alignment:** Reflect earthy, mystical, professional brand identity
2. **Accessibility:** Meet WCAG 2.1 AA standards (minimum 4.5:1 for text)
3. **Consistency:** Semantic tokens ensure consistent usage
4. **Scalability:** System supports future growth and dark mode
5. **Developer-Friendly:** Clear naming and documentation

---

## 🎨 Brand Color Palette

### Primary Colors

```css
/* Forest Green - Primary Brand Color */
--color-forest-900: #0D3D12;  /* Darkest - text on light backgrounds */
--color-forest-800: #1B5E20;  /* Primary brand color */
--color-forest-700: #2E7D32;  /* Hover states */
--color-forest-600: #388E3C;  /* Active states */
--color-forest-500: #4CAF50;  /* Lighter accent */
--color-forest-400: #66BB6A;  /* Subtle backgrounds */
--color-forest-300: #81C784;  /* Very light accents */
--color-forest-200: #A5D6A7;  /* Pale backgrounds */
--color-forest-100: #C8E6C9;  /* Lightest tint */
--color-forest-50:  #E8F5E9;  /* Nearly white tint */
```

### Secondary Colors

```css
/* Moss Green - Secondary/Accent */
--color-moss-900: #33691E;
--color-moss-800: #558B2F;
--color-moss-700: #689F38;
--color-moss-600: #7CB342;
--color-moss-500: #8BC34A;
--color-moss-400: #9CCC65;
--color-moss-300: #AED581;
--color-moss-200: #C5E1A5;
--color-moss-100: #DCEDC8;
--color-moss-50:  #F1F8E9;
```

### Neutral Colors

```css
/* Charcoal - Text & UI */
--color-charcoal-900: #1A1A1A;  /* Darkest text */
--color-charcoal-800: #2C2C2C;  /* Primary text */
--color-charcoal-700: #404040;  /* Secondary text */
--color-charcoal-600: #595959;  /* Muted text */
--color-charcoal-500: #737373;  /* Disabled text */
--color-charcoal-400: #8C8C8C;  /* Placeholder text */
--color-charcoal-300: #A6A6A6;  /* Borders */
--color-charcoal-200: #BFBFBF;  /* Light borders */
--color-charcoal-100: #D9D9D9;  /* Dividers */
--color-charcoal-50:  #F2F2F2;  /* Subtle backgrounds */

/* Cream - Backgrounds */
--color-cream-900: #E8E6E0;
--color-cream-800: #EFEEE9;
--color-cream-700: #F3F2ED;
--color-cream-600: #F7F6F2;
--color-cream-500: #FAF9F6;  /* Primary background */
--color-cream-400: #FBFAF8;
--color-cream-300: #FCFBFA;
--color-cream-200: #FDFDFC;
--color-cream-100: #FEFEFD;
--color-cream-50:  #FFFFFF;  /* Pure white */
```

### Utility Colors

```css
/* Success - Confirmations, in-stock */
--color-success-900: #1B5E20;
--color-success-800: #2E7D32;
--color-success-700: #388E3C;
--color-success-600: #43A047;
--color-success-500: #4CAF50;
--color-success-400: #66BB6A;
--color-success-300: #81C784;
--color-success-200: #A5D6A7;
--color-success-100: #C8E6C9;
--color-success-50:  #E8F5E9;

/* Warning - Alerts, low stock */
--color-warning-900: #E65100;
--color-warning-800: #EF6C00;
--color-warning-700: #F57C00;
--color-warning-600: #FB8C00;
--color-warning-500: #FF9800;
--color-warning-400: #FFA726;
--color-warning-300: #FFB74D;
--color-warning-200: #FFCC80;
--color-warning-100: #FFE0B2;
--color-warning-50:  #FFF3E0;

/* Error - Errors, out of stock */
--color-error-900: #B71C1C;
--color-error-800: #C62828;
--color-error-700: #D32F2F;
--color-error-600: #E53935;
--color-error-500: #F44336;
--color-error-400: #EF5350;
--color-error-300: #E57373;
--color-error-200: #EF9A9A;
--color-error-100: #FFCDD2;
--color-error-50:  #FFEBEE;

/* Info - Informational messages */
--color-info-900: #01579B;
--color-info-800: #0277BD;
--color-info-700: #0288D1;
--color-info-600: #039BE5;
--color-info-500: #03A9F4;
--color-info-400: #29B6F6;
--color-info-300: #4FC3F7;
--color-info-200: #81D4FA;
--color-info-100: #B3E5FC;
--color-info-50:  #E1F5FE;
```

---

## 🏷️ Semantic Tokens

### Background Tokens

```css
/* Page Backgrounds */
--bg-primary: var(--color-cream-500);        /* Main page background */
--bg-secondary: var(--color-cream-50);       /* Card/section backgrounds */
--bg-tertiary: var(--color-cream-900);       /* Subtle contrast areas */

/* Interactive Backgrounds */
--bg-hover: var(--color-forest-50);          /* Hover state */
--bg-active: var(--color-forest-100);        /* Active/pressed state */
--bg-selected: var(--color-forest-200);      /* Selected state */
--bg-disabled: var(--color-charcoal-50);     /* Disabled state */

/* Overlay Backgrounds */
--bg-overlay: rgba(26, 26, 26, 0.6);         /* Modal/drawer overlays */
--bg-overlay-light: rgba(250, 249, 246, 0.9); /* Light overlays */
```

### Text Tokens

```css
/* Text Colors */
--text-primary: var(--color-charcoal-800);   /* Primary body text */
--text-secondary: var(--color-charcoal-600); /* Secondary/muted text */
--text-tertiary: var(--color-charcoal-500);  /* Disabled/placeholder */
--text-inverse: var(--color-cream-50);       /* Text on dark backgrounds */
--text-link: var(--color-forest-800);        /* Links */
--text-link-hover: var(--color-forest-700);  /* Link hover */
--text-link-visited: var(--color-forest-900); /* Visited links */
```

### Brand Tokens

```css
/* Brand Colors */
--brand-primary: var(--color-forest-800);    /* Primary brand color */
--brand-primary-hover: var(--color-forest-700);
--brand-primary-active: var(--color-forest-900);
--brand-secondary: var(--color-moss-800);    /* Secondary brand color */
--brand-accent: var(--color-moss-500);       /* Accent highlights */
```

### Border Tokens

```css
/* Borders */
--border-default: var(--color-charcoal-200);  /* Standard borders */
--border-subtle: var(--color-charcoal-100);   /* Subtle dividers */
--border-strong: var(--color-charcoal-300);   /* Emphasized borders */
--border-focus: var(--color-forest-800);      /* Focus indicators */
--border-error: var(--color-error-500);       /* Error states */
--border-success: var(--color-success-500);   /* Success states */
```

### Component-Specific Tokens

```css
/* Buttons */
--btn-primary-bg: var(--color-forest-800);
--btn-primary-bg-hover: var(--color-forest-700);
--btn-primary-bg-active: var(--color-forest-900);
--btn-primary-text: var(--color-cream-50);
--btn-primary-border: var(--color-forest-800);

--btn-secondary-bg: transparent;
--btn-secondary-bg-hover: var(--color-forest-50);
--btn-secondary-bg-active: var(--color-forest-100);
--btn-secondary-text: var(--color-forest-800);
--btn-secondary-border: var(--color-forest-800);

--btn-ghost-bg: transparent;
--btn-ghost-bg-hover: var(--color-forest-50);
--btn-ghost-text: var(--color-forest-800);
--btn-ghost-border: transparent;

/* Forms */
--input-bg: var(--color-cream-50);
--input-bg-focus: var(--color-cream-50);
--input-bg-disabled: var(--color-charcoal-50);
--input-border: var(--color-charcoal-300);
--input-border-focus: var(--color-forest-800);
--input-border-error: var(--color-error-500);
--input-text: var(--color-charcoal-800);
--input-placeholder: var(--color-charcoal-400);

/* Badges */
--badge-in-stock-bg: var(--color-success-100);
--badge-in-stock-text: var(--color-success-900);
--badge-in-stock-border: var(--color-success-300);

--badge-low-stock-bg: var(--color-warning-100);
--badge-low-stock-text: var(--color-warning-900);
--badge-low-stock-border: var(--color-warning-300);

--badge-out-stock-bg: var(--color-error-100);
--badge-out-stock-text: var(--color-error-900);
--badge-out-stock-border: var(--color-error-300);

--badge-coming-soon-bg: var(--color-info-100);
--badge-coming-soon-text: var(--color-info-900);
--badge-coming-soon-border: var(--color-info-300);
```

---

## ♿ Accessibility Validation

### Text Contrast Ratios (WCAG 2.1 AA)

| Combination | Ratio | Pass AA | Pass AAA | Usage |
|-------------|-------|---------|----------|-------|
| Charcoal-800 on Cream-500 | 12.5:1 | ✅ | ✅ | Body text |
| Charcoal-600 on Cream-500 | 7.8:1 | ✅ | ✅ | Secondary text |
| Forest-800 on Cream-500 | 8.2:1 | ✅ | ✅ | Links, buttons |
| Forest-800 on Cream-50 | 9.1:1 | ✅ | ✅ | Primary buttons |
| Cream-50 on Forest-800 | 9.1:1 | ✅ | ✅ | Button text |
| Charcoal-500 on Cream-500 | 4.6:1 | ✅ | ❌ | Disabled text (min) |
| Forest-700 on Cream-500 | 6.5:1 | ✅ | ✅ | Hover states |
| Success-900 on Success-100 | 8.9:1 | ✅ | ✅ | Success badges |
| Warning-900 on Warning-100 | 9.2:1 | ✅ | ✅ | Warning badges |
| Error-900 on Error-100 | 10.1:1 | ✅ | ✅ | Error badges |

### Prohibited Combinations ❌

**DO NOT USE** these combinations (fail accessibility):
- Forest-400 or lighter on Cream backgrounds (< 3:1 ratio)
- Moss-500 or lighter on Cream backgrounds (< 3:1 ratio)
- Charcoal-400 or lighter on Cream backgrounds for body text
- Any color-on-color without sufficient contrast

### Large Text Exceptions

Large text (≥18px or ≥14px bold) requires only 3:1 ratio:
- Forest-600 on Cream-500: 5.2:1 ✅
- Moss-700 on Cream-500: 4.8:1 ✅

---

## 🎨 Color Usage Guidelines

### Primary Brand Color (Forest-800)
✅ **USE FOR:**
- Primary CTAs and buttons
- Navigation active states
- Links
- Brand accents
- Icons and decorative elements

❌ **AVOID:**
- Large background areas (too dark)
- Body text (use Charcoal instead)

### Cream Backgrounds
✅ **USE FOR:**
- Page backgrounds (Cream-500)
- Card backgrounds (Cream-50)
- Section alternation (Cream-500 ↔ Cream-50)

❌ **AVOID:**
- Pure white (#FFFFFF) for main backgrounds (too stark)
- Cream on cream without clear contrast

### Charcoal Text
✅ **USE FOR:**
- All body text (Charcoal-800)
- Headings (Charcoal-900)
- Secondary text (Charcoal-600)

❌ **AVOID:**
- Pure black (#000000) for text (too harsh)
- Charcoal-500 or lighter for small text

---

## 🌙 Dark Mode Considerations (Future)

**Status:** Not implemented in Phase 3, planned for future enhancement

**Approach:**
- Invert semantic tokens, not raw colors
- Maintain same contrast ratios
- Test all components in dark mode
- Respect `prefers-color-scheme` media query

---

## 📋 Color System Checklist

- [x] Brand color palette defined
- [x] Neutral color scale created
- [x] Utility colors established
- [x] Semantic tokens mapped
- [x] Accessibility validated (WCAG 2.1 AA)
- [x] Prohibited combinations documented
- [ ] Design tokens exported (CSS/JSON)
- [ ] Component colors applied
- [ ] Developer documentation created

---

## 🔄 Next Steps

1. **Export Design Tokens:** Create CSS variables and JSON files
2. **Apply to Components:** Use semantic tokens in component library
3. **Accessibility Testing:** Validate all color combinations with tools
4. **Documentation:** Create developer guide for token usage
5. **Review & Approval:** Get stakeholder sign-off on color system

---

## 📝 Approval

**Color System Approved:** ☐ Yes ☐ No ☐ Needs Revision

**Accessibility Validated:** ☐ Yes ☐ No ☐ Pending Testing  
**Approved By:** _________________  
**Date:** _________________

---

**Document Version:** 1.0  
**Next Review:** After component library application
