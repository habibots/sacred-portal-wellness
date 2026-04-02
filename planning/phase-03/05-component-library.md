# Component Design Library - Sacred Portal

**Document Status:** Draft  
**Last Updated:** March 12, 2026  
**Approval Status:** Pending Design Review

---

## 🎯 Component Library Goals

1. **Consistency:** Reusable components ensure visual and functional consistency
2. **Accessibility:** All components meet WCAG 2.1 AA standards
3. **Responsiveness:** Components adapt gracefully across all breakpoints
4. **Documentation:** Clear specifications for design-to-dev handoff
5. **Scalability:** Component system supports future growth

---

## 📚 Component Inventory

### Navigation Components
1. Header / Navigation
2. Mobile Menu (Hamburger)
3. Footer
4. Breadcrumbs

### Content Components
5. Hero Block
6. Section Container
7. Content Card
8. Testimonial Card
9. FAQ Accordion
10. Image Gallery

### Product Components
11. Product Card
12. Product Detail Layout
13. Product Badge
14. Product Image Viewer

### Form Components
15. Text Input
16. Textarea
17. Select Dropdown
18. Checkbox
19. Radio Button
20. Form Validation Messages

### Interactive Components
21. Primary Button
22. Secondary Button
23. Ghost Button
24. Link Styles
25. CTA Block

### Utility Components
26. Modal / Dialog
27. Alert / Notification
28. Loading Spinner
29. Divider
30. Badge

---

## 🧩 Component Specifications

---

### 1. Header / Navigation

**Purpose:** Primary site navigation and branding

**Variants:**
- Desktop (horizontal navigation)
- Mobile (hamburger menu)

**Anatomy:**
- Logo (left-aligned)
- Navigation links (center or right)
- CTA button (right)
- Shopping cart icon (if e-commerce)

**States:**
- Default
- Scrolled (may have background change)
- Menu open (mobile)

**Specifications:**

```
Desktop (≥1024px):
- Height: 80px
- Logo: Max height 48px
- Nav links: 16px, 600 weight, 16px spacing
- Sticky positioning on scroll
- Background: Cream-500 with subtle shadow when scrolled

Mobile (<1024px):
- Height: 64px
- Logo: Max height 40px
- Hamburger icon: 24x24px, min touch target 44x44px
- Full-screen overlay menu when open
```

**Accessibility:**
- Keyboard navigable
- Skip to main content link
- ARIA labels for icons
- Focus indicators on all interactive elements
- Semantic `<nav>` element

**Content Limits:**
- Maximum 6-7 main navigation items
- Link text: 1-2 words preferred

---

### 2. Footer

**Purpose:** Secondary navigation, legal links, contact information

**Variants:**
- Desktop (multi-column)
- Mobile (stacked)

**Anatomy:**
- Logo and tagline
- Navigation columns (Shop, Learn, About, Legal)
- Contact information
- Social media links
- Copyright notice

**Specifications:**

```
Desktop:
- 4-column grid layout
- Padding: 64px top/bottom, 32px sides
- Background: Forest-900 or Charcoal-900
- Text color: Cream-50

Mobile:
- Single column, stacked
- Padding: 48px top/bottom, 16px sides
- Collapsible sections (optional)
```

**Accessibility:**
- Semantic `<footer>` element
- Proper heading hierarchy
- Social icons have text labels (visible or sr-only)

---

### 3. Hero Block

**Purpose:** Primary page introduction with headline, description, and CTA

**Variants:**
- Full-width with background image
- Centered content
- Split layout (text + image)

**Anatomy:**
- Background (image or color)
- Headline (H1)
- Subheadline or description
- Primary CTA button
- Optional secondary CTA

**Specifications:**

```
Desktop:
- Min height: 500px, max height: 80vh
- Content max-width: 600px (centered)
- Headline: 48-64px
- Padding: 96px top/bottom

Mobile:
- Min height: 400px
- Headline: 32-40px
- Padding: 64px top/bottom
```

**Accessibility:**
- Background images have sufficient contrast with text
- Text overlays use semi-transparent backgrounds if needed
- CTA buttons meet color contrast requirements

**Content Limits:**
- Headline: 5-10 words
- Description: 20-30 words
- CTA text: 2-4 words

---

### 4. Product Card

**Purpose:** Display product in grid/list with key information

**Variants:**
- Grid view (default)
- List view
- Featured (larger)

**Anatomy:**
- Product image (aspect ratio 3:4)
- Product badge (in stock, out of stock, etc.)
- Product name
- Price
- Short description (optional)
- Add to cart button (optional)

**States:**
- Default
- Hover (slight elevation, image zoom)
- Out of stock (muted)

**Specifications:**

```
Grid View:
- Card width: 100% of grid column
- Image aspect ratio: 3:4 (portrait)
- Padding: 16px
- Border radius: 12px
- Border: 1px solid border-subtle
- Background: bg-secondary

Hover State:
- Slight scale (1.02)
- Shadow elevation increase
- Image subtle zoom (1.05)
- Transition: 200ms ease

Mobile:
- Smaller padding: 12px
- Simplified layout if needed
```

**Accessibility:**
- Image has descriptive alt text
- Price clearly labeled
- Badge status announced to screen readers
- Entire card clickable, not just image

**Content Limits:**
- Product name: 3-6 words
- Description: 10-15 words (if shown)

---

### 5. Product Detail Layout

**Purpose:** Full product information and purchase interface

**Anatomy:**
- Product image gallery (left, 50-60%)
- Product information (right, 40-50%)
  - Product name (H1)
  - Price
  - Stock status badge
  - Short description
  - Quantity selector
  - Add to cart button
  - Full description (below fold)
  - Ingredients/specifications
  - Usage instructions
  - Related products

**Specifications:**

```
Desktop:
- Two-column layout (60/40 split)
- Image gallery: Thumbnail navigation
- Sticky product info on scroll

Mobile:
- Stacked layout
- Image carousel with dots
- Product info follows images
```

**Accessibility:**
- Image gallery keyboard navigable
- Quantity selector has +/- buttons and input
- Clear error messages for out of stock
- Related products in semantic list

---

### 6. Button - Primary

**Purpose:** Primary call-to-action

**Variants:**
- Default size
- Large
- Small
- Full-width (mobile)

**States:**
- Default
- Hover
- Active/Pressed
- Focus
- Disabled
- Loading

**Specifications:**

```
Default:
- Height: 48px
- Padding: 12px 24px
- Font: 16px, 600 weight
- Border radius: 8px
- Background: Forest-800
- Text: Cream-50
- Border: 2px solid Forest-800
- Min width: 120px

Hover:
- Background: Forest-700
- Border: Forest-700
- Slight scale: 1.02
- Transition: 150ms ease

Focus:
- Outline: 2px solid Forest-800
- Outline offset: 2px

Disabled:
- Background: Charcoal-200
- Text: Charcoal-500
- Cursor: not-allowed
- Opacity: 0.6

Loading:
- Spinner icon
- Text: "Loading..." or hidden
- Disabled state
```

**Accessibility:**
- Minimum 44x44px touch target
- Clear focus indicator
- Disabled state announced to screen readers
- Loading state announced

**Content Limits:**
- Text: 1-4 words
- Icon + text okay

---

### 7. Button - Secondary

**Purpose:** Secondary actions, less prominent than primary

**Specifications:**

```
Default:
- Height: 48px
- Padding: 12px 24px
- Font: 16px, 600 weight
- Border radius: 8px
- Background: transparent
- Text: Forest-800
- Border: 2px solid Forest-800

Hover:
- Background: Forest-50
- Border: Forest-700
- Text: Forest-700
```

All other states same as Primary Button.

---

### 8. Form Input - Text

**Purpose:** Single-line text input

**States:**
- Default
- Focus
- Error
- Disabled
- Success (optional)

**Specifications:**

```
Default:
- Height: 48px
- Padding: 12px 16px
- Font: 16px, 400 weight
- Border radius: 8px
- Background: Cream-50
- Border: 1px solid Charcoal-300
- Text: Charcoal-800

Focus:
- Border: 2px solid Forest-800
- Outline: none (border handles focus)
- Background: Cream-50

Error:
- Border: 2px solid Error-500
- Background: Error-50

Disabled:
- Background: Charcoal-50
- Text: Charcoal-500
- Cursor: not-allowed
```

**Accessibility:**
- Label always visible (not placeholder-only)
- Error messages linked with aria-describedby
- Required fields marked with asterisk and aria-required
- Clear focus indicator

---

### 9. Testimonial Card

**Purpose:** Display customer testimonial with attribution

**Anatomy:**
- Quote text
- Customer name
- Customer age/location (optional)
- Star rating (optional)
- Customer photo (optional)

**Specifications:**

```
Default:
- Padding: 32px
- Border radius: 12px
- Background: Cream-50
- Border: 1px solid Border-subtle
- Quote icon (decorative)
- Max width: 600px

Quote text:
- Font: 18px, 400 weight
- Line height: 1.75
- Color: Charcoal-800
- Italic style

Attribution:
- Font: 14px, 600 weight
- Color: Charcoal-600
- Margin top: 16px
```

**Accessibility:**
- Semantic `<blockquote>` element
- Attribution in `<cite>` element
- Decorative quote marks aria-hidden

**Content Limits:**
- Quote: 50-150 words
- Name: Full name or initials + age

---

### 10. FAQ Accordion

**Purpose:** Expandable question/answer pairs

**States:**
- Collapsed (default)
- Expanded
- Hover
- Focus

**Anatomy:**
- Question (button)
- Expand/collapse icon
- Answer (hidden when collapsed)

**Specifications:**

```
Question Button:
- Width: 100%
- Padding: 20px 24px
- Font: 18px, 600 weight
- Background: Cream-50
- Border: 1px solid Border-subtle
- Border radius: 8px
- Text align: left
- Icon: Chevron (rotates on expand)

Answer:
- Padding: 0 24px 24px 24px
- Font: 16px, 400 weight
- Line height: 1.75
- Smooth expand/collapse animation
```

**Accessibility:**
- Button has aria-expanded attribute
- Answer has aria-hidden when collapsed
- Keyboard navigable (Enter/Space to toggle)
- Focus indicator on question button

---

### 11. Product Badge

**Purpose:** Display product status (in stock, out of stock, etc.)

**Variants:**
- In Stock (success)
- Low Stock (warning)
- Out of Stock (error)
- Coming Soon (info)

**Specifications:**

```
In Stock:
- Background: Success-100
- Text: Success-900
- Border: 1px solid Success-300
- Padding: 4px 12px
- Font: 12px, 600 weight
- Border radius: 4px
- Text transform: uppercase
- Letter spacing: 0.05em

Low Stock:
- Background: Warning-100
- Text: Warning-900
- Border: Warning-300

Out of Stock:
- Background: Error-100
- Text: Error-900
- Border: Error-300

Coming Soon:
- Background: Info-100
- Text: Info-900
- Border: Info-300
```

**Accessibility:**
- Status announced to screen readers
- Sufficient color contrast
- Not relying on color alone (text included)

---

### 12. Modal / Dialog

**Purpose:** Overlay content requiring user attention or action

**Variants:**
- Small (confirmation)
- Medium (forms)
- Large (content)

**Anatomy:**
- Overlay backdrop
- Modal container
- Close button (X)
- Header
- Content area
- Footer (optional, for actions)

**Specifications:**

```
Backdrop:
- Background: rgba(26, 26, 26, 0.6)
- Full viewport coverage
- Click to close (optional)

Modal Container:
- Max width: 600px (medium)
- Padding: 32px
- Background: Cream-50
- Border radius: 12px
- Box shadow: Large elevation
- Centered in viewport

Close Button:
- Position: Top right
- Size: 32x32px icon, 44x44px touch target
- Icon: X or Close
```

**Accessibility:**
- Focus trapped within modal when open
- Escape key closes modal
- Focus returns to trigger element on close
- aria-modal="true"
- Descriptive aria-label
- Backdrop prevents interaction with page content

---

### 13. Alert / Notification

**Purpose:** Display feedback messages to users

**Variants:**
- Success
- Error
- Warning
- Info

**Specifications:**

```
Default:
- Padding: 16px 20px
- Border radius: 8px
- Border left: 4px solid (variant color)
- Icon: Left-aligned (16x16px)
- Close button: Right-aligned (optional)

Success:
- Background: Success-50
- Border: Success-500
- Text: Success-900
- Icon: Checkmark

Error:
- Background: Error-50
- Border: Error-500
- Text: Error-900
- Icon: X or Alert

Warning:
- Background: Warning-50
- Border: Warning-500
- Text: Warning-900
- Icon: Warning triangle

Info:
- Background: Info-50
- Border: Info-500
- Text: Info-900
- Icon: Info circle
```

**Accessibility:**
- role="alert" for important messages
- aria-live="polite" or "assertive"
- Icon has aria-label
- Sufficient color contrast

---

## 📋 Component Library Checklist

- [x] Component inventory created
- [x] Core components specified
- [x] States documented for interactive components
- [x] Accessibility requirements defined
- [x] Content limits established
- [ ] Visual mockups created
- [ ] Responsive behavior documented
- [ ] Design tokens applied
- [ ] Handoff documentation prepared

---

## 🔄 Next Steps

1. **Create Visual Mockups:** Design high-fidelity component mockups
2. **Build Component Prototypes:** Create interactive prototypes
3. **Accessibility Testing:** Validate all components for WCAG 2.1 AA
4. **Documentation:** Create developer implementation guides
5. **Design Review:** Get stakeholder approval on all components

---

## 📝 Approval

**Component Library Approved:** ☐ Yes ☐ No ☐ Needs Revision

**Approved By:** _________________  
**Date:** _________________  
**Notes:** _________________

---

**Document Version:** 1.0  
**Next Review:** After visual mockups complete
