# Motion & Interaction Design - Sacred Portal

**Document Status:** Draft  
**Last Updated:** March 12, 2026  
**Approval Status:** Pending Review

---

## 🎯 Motion Design Goals

1. **Purpose:** Every animation serves a functional purpose
2. **Subtlety:** Enhance UX without being distracting
3. **Performance:** Smooth 60fps animations, no jank
4. **Accessibility:** Respect `prefers-reduced-motion` preference
5. **Consistency:** Unified timing and easing across site

---

## ⏱️ Timing & Easing

### Duration Scale

```css
/* Animation Durations */
--duration-instant: 0ms;        /* No animation */
--duration-fast: 150ms;         /* Quick interactions (hover, focus) */
--duration-normal: 250ms;       /* Standard transitions */
--duration-slow: 400ms;         /* Complex animations */
--duration-slower: 600ms;       /* Page transitions, modals */
--duration-slowest: 1000ms;     /* Hero animations, special effects */
```

### Easing Functions

```css
/* Easing Curves */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);           /* Accelerate */
--ease-out: cubic-bezier(0, 0, 0.2, 1);          /* Decelerate */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);     /* Smooth both ends */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1); /* Natural movement */
```

### Usage Guidelines

**Fast (150ms):**
- Button hover states
- Link underlines
- Focus indicators
- Small UI changes

**Normal (250ms):**
- Button clicks
- Dropdown menus
- Tooltips
- Card hover effects

**Slow (400ms):**
- Modal open/close
- Accordion expand/collapse
- Image zoom
- Navigation transitions

**Slower (600ms+):**
- Page transitions
- Hero animations
- Scroll-triggered reveals
- Complex multi-step animations

---

## 🎬 Animation Primitives

### 1. Fade

**Purpose:** Gentle appearance/disappearance

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

/* Fade Out */
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

**Use Cases:**
- Modal overlays
- Tooltips
- Alert messages
- Loading states

---

### 2. Slide

**Purpose:** Directional movement

```css
/* Slide In from Bottom */
@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide In from Right */
@keyframes slideInRight {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

**Use Cases:**
- Mobile menu drawer
- Notification toasts
- Scroll-triggered content reveals
- Carousel transitions

---

### 3. Scale

**Purpose:** Size changes, emphasis

```css
/* Scale Up */
@keyframes scaleUp {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Pulse (attention) */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

**Use Cases:**
- Modal appearance
- Button press feedback
- Product card hover
- Badge notifications

---

### 4. Rotate

**Purpose:** Directional indicators, loading

```css
/* Rotate 180 (chevron flip) */
@keyframes rotate180 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

/* Spin (loading) */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

**Use Cases:**
- Accordion chevrons
- Dropdown arrows
- Loading spinners
- Menu hamburger → X

---

## 🎨 Component-Specific Interactions

### Button Interactions

```css
.button {
  transition: all var(--duration-fast) var(--ease-out);
}

/* Hover */
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(27, 94, 32, 0.2);
}

/* Active/Press */
.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(27, 94, 32, 0.1);
}

/* Focus */
.button:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
  transition: outline-offset var(--duration-fast) var(--ease-out);
}
```

**Timing:**
- Hover: 150ms
- Active: 100ms
- Focus: 150ms

---

### Link Interactions

```css
.link {
  position: relative;
  color: var(--text-link);
  transition: color var(--duration-fast) var(--ease-out);
}

/* Underline animation */
.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--text-link);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--duration-normal) var(--ease-out);
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

**Timing:**
- Color change: 150ms
- Underline: 250ms

---

### Card Hover Effects

```css
.card {
  transition: all var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* Image zoom on card hover */
.card:hover .card-image {
  transform: scale(1.05);
}

.card-image {
  transition: transform var(--duration-slow) var(--ease-out);
}
```

**Timing:**
- Card lift: 250ms
- Image zoom: 400ms

---

### Accordion Expand/Collapse

```css
/* Chevron rotation */
.accordion-trigger[aria-expanded="true"] .chevron {
  transform: rotate(180deg);
}

.chevron {
  transition: transform var(--duration-normal) var(--ease-out);
}

/* Content reveal */
.accordion-content {
  overflow: hidden;
  transition: height var(--duration-slow) var(--ease-in-out);
}

.accordion-content[aria-hidden="true"] {
  height: 0;
}
```

**Timing:**
- Chevron: 250ms
- Content: 400ms

---

### Modal Open/Close

```css
/* Backdrop fade */
.modal-backdrop {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

/* Modal scale + fade */
.modal-container {
  animation: modalEnter var(--duration-slow) var(--ease-out);
}

@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

**Timing:**
- Backdrop: 250ms
- Modal: 400ms

---

### Mobile Menu Drawer

```css
/* Slide in from right */
.mobile-menu {
  transform: translateX(100%);
  transition: transform var(--duration-slow) var(--ease-out);
}

.mobile-menu[aria-hidden="false"] {
  transform: translateX(0);
}

/* Hamburger → X animation */
.hamburger-line {
  transition: all var(--duration-normal) var(--ease-out);
}

.hamburger[aria-expanded="true"] .line-1 {
  transform: rotate(45deg) translateY(8px);
}

.hamburger[aria-expanded="true"] .line-2 {
  opacity: 0;
}

.hamburger[aria-expanded="true"] .line-3 {
  transform: rotate(-45deg) translateY(-8px);
}
```

**Timing:**
- Drawer: 400ms
- Hamburger: 250ms

---

### Image Gallery / Carousel

```css
/* Slide transition */
.carousel-item {
  transition: transform var(--duration-slow) var(--ease-in-out);
}

/* Fade transition (alternative) */
.carousel-item {
  transition: opacity var(--duration-normal) var(--ease-in-out);
}

/* Dot indicators */
.carousel-dot {
  transition: all var(--duration-fast) var(--ease-out);
}

.carousel-dot[aria-current="true"] {
  transform: scale(1.2);
  background: var(--brand-primary);
}
```

**Timing:**
- Slide: 400ms
- Fade: 250ms
- Dots: 150ms

---

### Form Input Focus

```css
.input {
  border: 1px solid var(--input-border);
  transition: all var(--duration-fast) var(--ease-out);
}

.input:focus {
  border-color: var(--input-border-focus);
  border-width: 2px;
  box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.1);
}

/* Label float animation */
.input-label {
  transition: all var(--duration-normal) var(--ease-out);
}

.input:focus + .input-label,
.input:not(:placeholder-shown) + .input-label {
  transform: translateY(-24px) scale(0.875);
  color: var(--brand-primary);
}
```

**Timing:**
- Border/shadow: 150ms
- Label: 250ms

---

### Loading States

```css
/* Spinner */
.spinner {
  animation: spin 1s linear infinite;
}

/* Skeleton loading */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-secondary) 0%,
    var(--bg-tertiary) 50%,
    var(--bg-secondary) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}

/* Progress bar */
@keyframes progress {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
```

**Timing:**
- Spinner: 1000ms (continuous)
- Shimmer: 2000ms (continuous)
- Progress: Variable based on actual progress

---

### Scroll-Triggered Animations

```css
/* Fade in on scroll */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all var(--duration-slow) var(--ease-out);
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger-children > * {
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--duration-normal) var(--ease-out);
}

.stagger-children.is-visible > *:nth-child(1) { transition-delay: 0ms; }
.stagger-children.is-visible > *:nth-child(2) { transition-delay: 100ms; }
.stagger-children.is-visible > *:nth-child(3) { transition-delay: 200ms; }
.stagger-children.is-visible > *:nth-child(4) { transition-delay: 300ms; }
```

**Timing:**
- Individual: 400ms
- Stagger delay: 100ms between items

---

## ♿ Reduced Motion Support

### Respecting User Preferences

```css
/* Disable animations for users who prefer reduced motion */
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

/* Alternative: Simplify instead of remove */
@media (prefers-reduced-motion: reduce) {
  .card:hover {
    transform: none; /* Remove lift */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); /* Keep shadow */
  }
  
  .modal-container {
    animation: fadeIn var(--duration-fast) var(--ease-out); /* Fade only, no scale */
  }
}
```

**Guidelines:**
- Always provide reduced-motion alternatives
- Maintain functionality without animation
- Keep essential feedback (focus states, etc.)
- Test with `prefers-reduced-motion: reduce` enabled

---

## 🎯 Interaction States

### Standard Interactive States

All interactive elements should have these states:

1. **Default** - Resting state
2. **Hover** - Mouse over (desktop only)
3. **Focus** - Keyboard focus
4. **Active/Pressed** - Click/tap
5. **Disabled** - Not interactive
6. **Loading** - Processing (if applicable)

### State Transition Matrix

| From State | To State | Duration | Easing |
|------------|----------|----------|--------|
| Default | Hover | 150ms | ease-out |
| Hover | Active | 100ms | ease-in |
| Active | Default | 150ms | ease-out |
| Any | Focus | 150ms | ease-out |
| Any | Disabled | 150ms | ease-out |
| Any | Loading | 250ms | ease-in-out |

---

## 📋 Motion Design Checklist

- [x] Timing scale defined
- [x] Easing functions established
- [x] Animation primitives documented
- [x] Component interactions specified
- [x] Reduced motion support included
- [x] Performance considerations noted
- [ ] Animations implemented
- [ ] Cross-browser testing complete
- [ ] Accessibility testing complete
- [ ] Performance testing complete

---

## 🎨 Best Practices

### DO:
✅ Use animations to provide feedback  
✅ Keep animations subtle and purposeful  
✅ Respect `prefers-reduced-motion`  
✅ Test on actual devices for performance  
✅ Use CSS transforms for better performance  
✅ Maintain 60fps for smooth animations  

### DON'T:
❌ Animate for decoration only  
❌ Use animations longer than 600ms (except special cases)  
❌ Animate layout properties (width, height, top, left)  
❌ Ignore reduced motion preferences  
❌ Create janky, slow animations  
❌ Overuse bounce or complex easing  

---

## 🚀 Performance Optimization

### GPU-Accelerated Properties

**Prefer animating these (performant):**
- `transform` (translate, scale, rotate)
- `opacity`
- `filter`

**Avoid animating these (causes reflow/repaint):**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `border-width`

### Will-Change Hint

```css
/* Use sparingly, only for known animations */
.modal-container {
  will-change: transform, opacity;
}

/* Remove after animation completes */
.modal-container.is-open {
  will-change: auto;
}
```

---

## 🔄 Next Steps

1. **Prototype Animations:** Create interactive prototypes with animations
2. **Performance Testing:** Test animations on low-end devices
3. **Accessibility Testing:** Validate reduced motion support
4. **Developer Documentation:** Create implementation guide
5. **Review & Approval:** Get stakeholder sign-off

---

## 📝 Approval

**Motion & Interaction Design Approved:** ☐ Yes ☐ No ☐ Needs Revision

**Approved By:** _________________  
**Date:** _________________  
**Notes:** _________________

---

**Document Version:** 1.0  
**Next Review:** After prototype testing
