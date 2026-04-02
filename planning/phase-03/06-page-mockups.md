# Page Mockup Specifications - Sacred Portal

**Document Status:** Draft  
**Last Updated:** March 12, 2026  
**Approval Status:** Pending Design Review

---

## 🎯 Page Mockup Goals

1. **Comprehensive:** Cover all priority pages and key user flows
2. **Responsive:** Design for mobile, tablet, and desktop breakpoints
3. **Detailed:** Include all content, components, and interactions
4. **Accessible:** Validate accessibility at design stage
5. **Implementation-Ready:** Provide clear specifications for developers

---

## 📄 Priority Pages

1. Homepage
2. Shop / Category Page
3. Product Detail Page
4. Coaching Page (The Sacred Portal Path)
5. About Page
6. FAQ Page
7. Contact Page

---

## 🏠 1. Homepage

**Purpose:** Primary entry point, brand introduction, service overview

**User Goals:**
- Understand what Sacred Portal offers
- Learn about yoni steaming
- Browse featured products
- Discover coaching program
- Build trust through credentials and testimonials

### Page Structure

#### Hero Section
```
Component: Hero Block (Full-width)
Content:
- Background: Subtle forest texture or botanical image
- Headline: "Sacred Portal" (H1, Cinzel Decorative)
- Subheadline: "Matriarchal Medicine for Modern Women"
- Tagline: "RN, BSN, HC-NC"
- CTA Primary: "Shop Yoni Steam Blends"
- CTA Secondary: "Learn About Yoni Steaming"
- Visual: Logo integration or meditating figure illustration

Mobile: 400px min height, stacked content
Desktop: 600px min height, centered content
```

#### Introduction Section
```
Component: Content Section (Narrow container)
Content:
- Headline: "Welcome to Sacred Portal" (H2)
- Body: 2-3 paragraphs introducing the practice and philosophy
  (Use content from current landing page introduction)
- Visual: Botanical line art divider

Layout: Centered text, max-width 768px
```

#### Featured Products Section
```
Component: Product Grid
Content:
- Headline: "Featured Yoni Steam Blends" (H2)
- Product cards: 3-4 featured products
- CTA: "View All Products" button

Mobile: 1 column
Tablet: 2 columns
Desktop: 3-4 columns
```

#### Coaching Program Highlight
```
Component: CTA Block (Split layout)
Content:
- Left: Image or illustration
- Right: 
  - Headline: "The Sacred Portal Path" (H2)
  - Description: Program overview (2-3 sentences)
  - Benefits list: 3-4 key benefits
  - CTA: "Learn More About Coaching"
  
Mobile: Stacked (image top, content below)
Desktop: 50/50 split
```

#### Testimonials Section
```
Component: Testimonial Cards (Carousel or Grid)
Content:
- Headline: "What Women Are Saying" (H2)
- 3-6 testimonial cards
- Rotation or grid display

Mobile: 1 card visible, swipeable carousel
Desktop: 3 cards in grid
```

#### Educational Section
```
Component: Content Cards
Content:
- Headline: "Why Yoni Steaming?" (H2)
- 3-4 benefit cards with icons
  - Hormonal Balance
  - Cycle Support
  - Postpartum Healing
  - Sacred Self-Care
  
Mobile: Stacked cards
Desktop: 4-column grid
```

#### Footer
```
Component: Footer (Standard)
Content:
- Logo
- Navigation columns (Shop, Learn, About, Legal)
- Contact information
- Social media links
- Copyright
```

### Responsive Breakpoints

**Mobile (< 768px):**
- Single column layout
- Hero: 400px height
- Stacked sections
- Simplified navigation (hamburger)

**Tablet (768-1023px):**
- 2-column product grids
- Hero: 500px height
- Some side-by-side layouts

**Desktop (≥ 1024px):**
- 3-4 column product grids
- Hero: 600px height
- Full horizontal navigation
- Side-by-side content sections

---

## 🛍️ 2. Shop / Category Page

**Purpose:** Browse and filter yoni steam products

**User Goals:**
- View all available products
- Filter by category or need
- Compare products
- Add products to cart

### Page Structure

#### Page Header
```
Component: Page Title Section
Content:
- Breadcrumbs: Home > Shop
- Headline: "Yoni Steam Blends" (H1)
- Description: Brief intro to product collection (1-2 sentences)
```

#### Filter & Sort Bar (Optional for Phase 1)
```
Component: Filter Controls
Content:
- Sort dropdown: "Sort by: Featured, Price, Name"
- Filter options: "All, Hormonal Support, Cycle Support, Postpartum"

Mobile: Collapsible drawer
Desktop: Sidebar or top bar
```

#### Product Grid
```
Component: Product Grid
Content:
- Product cards (all available products)
- Each card includes:
  - Product image (3:4 aspect ratio)
  - Product badge (in stock, out of stock, etc.)
  - Product name
  - Price
  - Quick view or Add to Cart button

Mobile: 1 column
Tablet: 2 columns
Desktop: 3 columns
Grid gap: 24px (mobile), 32px (desktop)
```

#### Empty State (if no products match filter)
```
Content:
- Icon or illustration
- Message: "No products found"
- CTA: "Clear filters" or "View all products"
```

### Responsive Behavior

**Mobile:**
- 1 column grid
- Filters in drawer/modal
- Sticky "Filter" button at top

**Desktop:**
- 3 column grid
- Filters in sidebar (if implemented)
- More breathing room

---

## 📦 3. Product Detail Page

**Purpose:** Detailed product information and purchase

**User Goals:**
- View product details and images
- Understand benefits and usage
- Read ingredients
- Add to cart
- See related products

### Page Structure

#### Breadcrumbs
```
Home > Shop > [Product Name]
```

#### Product Main Section (Two-Column Layout)

**Left Column (60%):**
```
Component: Product Image Gallery
Content:
- Main product image (large, 3:4 aspect ratio)
- Thumbnail navigation (3-5 images)
- Zoom functionality (optional)

Mobile: Single image with dot navigation carousel
Desktop: Thumbnail grid + large image
```

**Right Column (40%):**
```
Component: Product Information
Content:
- Product badge (in stock, low stock, etc.)
- Product name (H1)
- Price (large, prominent)
- Short description (2-3 sentences)
- Quantity selector
- Add to Cart button (primary, large)
- Product highlights (bullet list):
  - Key benefits (3-5 items)
  - Size/quantity
  - Usage duration

Mobile: Follows images, full width
Desktop: Sticky on scroll
```

#### Product Details Tabs/Sections

**Full Description:**
```
Headline: "About This Blend" (H2)
Content: Full product description (2-4 paragraphs)
```

**Ingredients:**
```
Headline: "Ingredients" (H2)
Content: Complete ingredient list with descriptions
```

**How to Use:**
```
Headline: "How to Use" (H2)
Content: Step-by-step usage instructions
```

**Benefits:**
```
Headline: "Benefits" (H2)
Content: Detailed benefits list
```

#### Related Products
```
Component: Product Grid (Horizontal Scroll or Grid)
Content:
- Headline: "You May Also Like" (H2)
- 3-4 related product cards

Mobile: Horizontal scroll
Desktop: 4-column grid
```

### Responsive Behavior

**Mobile:**
- Stacked layout (images → info → details)
- Image carousel with dots
- Full-width Add to Cart button (sticky at bottom optional)

**Desktop:**
- Side-by-side layout (60/40 split)
- Sticky product info
- Thumbnail navigation

---

## 🌟 4. Coaching Page (The Sacred Portal Path)

**Purpose:** Promote and explain coaching program

**User Goals:**
- Understand coaching program
- Learn about benefits
- See pricing and structure
- Contact or enroll

### Page Structure

#### Hero Section
```
Component: Hero Block
Content:
- Headline: "The Sacred Portal Path" (H1)
- Subheadline: "A 12-Week Journey to Hormonal Harmony"
- Description: 1-2 sentences
- CTA: "Schedule a Discovery Call"
- Visual: Relevant imagery or illustration
```

#### Program Overview
```
Component: Content Section
Content:
- Headline: "What You'll Experience" (H2)
- Description: 2-3 paragraphs about the program
- Visual: Sacred geometry divider
```

#### Program Structure
```
Component: Content Cards or Timeline
Content:
- Headline: "12-Week Program Structure" (H2)
- 3-4 phases or modules:
  - Phase 1: Foundation (Weeks 1-3)
  - Phase 2: Integration (Weeks 4-8)
  - Phase 3: Transformation (Weeks 9-12)
  - Each with brief description

Layout: Cards or timeline visualization
```

#### What's Included
```
Component: Feature List
Content:
- Headline: "What's Included" (H2)
- Checklist of program components:
  - Weekly 1:1 coaching sessions
  - Personalized yoni steam protocols
  - Educational resources
  - Email support
  - Community access (if applicable)
  
Visual: Checkmark icons, 2-column layout on desktop
```

#### Investment / Pricing
```
Component: Pricing Card
Content:
- Headline: "Investment" (H2)
- Price (large, clear)
- Payment options (if applicable)
- What's included (summary)
- CTA: "Schedule Discovery Call"

Layout: Centered, max-width 600px
```

#### Testimonials
```
Component: Testimonial Cards
Content:
- Headline: "Success Stories" (H2)
- 2-3 testimonials from coaching clients
```

#### FAQ Section
```
Component: FAQ Accordion
Content:
- Headline: "Frequently Asked Questions" (H2)
- 5-8 common questions about coaching program
```

#### CTA Section
```
Component: CTA Block
Content:
- Headline: "Ready to Begin Your Journey?" (H2)
- Description: Encouraging 1-2 sentences
- CTA: "Schedule Your Free Discovery Call"
```

---

## 👤 5. About Page

**Purpose:** Share creator story, credentials, and philosophy

**User Goals:**
- Learn about the creator
- Understand credentials and expertise
- Build trust
- Connect with the mission

### Page Structure

#### Hero Section
```
Component: Hero Block (Simple)
Content:
- Headline: "Meet [Creator Name]" (H1)
- Subheadline: "RN, BSN, HC-NC"
- Photo: Professional but warm headshot
```

#### Creator Story
```
Component: Content Section (Narrow)
Content:
- Headline: "My Journey to Sacred Portal" (H2)
- Body: Personal story (use content from current "about the creator" tab)
  - Background in nursing
  - Discovery of yoni steaming
  - Why this work matters
  - 3-5 paragraphs

Layout: Centered text, max-width 768px
Optional: Pull quote or highlighted text
```

#### Credentials Section
```
Component: Credential Cards
Content:
- Headline: "Credentials & Training" (H2)
- Cards for each credential:
  - RN, BSN: Registered Nurse, Bachelor of Science in Nursing
  - HC-NC: Holistic Nurse Coach
  - Other relevant certifications
  
Layout: 2-3 column grid on desktop
```

#### Philosophy / Approach
```
Component: Content Section
Content:
- Headline: "My Approach" (H2)
- Description: Philosophy on blending medical knowledge with holistic care
- Key principles (3-4 bullet points or cards)
```

#### CTA Section
```
Component: CTA Block
Content:
- Headline: "Let's Connect" (H2)
- CTA: "Schedule a Discovery Call" or "Contact Me"
```

---

## ❓ 6. FAQ Page

**Purpose:** Answer common questions about yoni steaming

**User Goals:**
- Learn about yoni steaming
- Get questions answered
- Build confidence to try
- Understand safety and contraindications

### Page Structure

#### Page Header
```
Component: Page Title Section
Content:
- Headline: "Frequently Asked Questions" (H1)
- Description: "Everything you need to know about yoni steaming"
```

#### FAQ Categories (Optional)
```
Component: Category Tabs or Sections
Categories:
- Getting Started
- Safety & Contraindications
- Products & Usage
- Results & Benefits
```

#### FAQ Accordion
```
Component: FAQ Accordion
Content:
- 15-20 common questions (use content from current FAQ)
- Questions like:
  - "What is yoni steaming?"
  - "Is yoni steaming safe?"
  - "How often should I steam?"
  - "What are the benefits?"
  - "Who should not steam?"
  - Etc.

Layout: Single column, full-width accordions
```

#### CTA Section
```
Component: CTA Block
Content:
- Headline: "Still Have Questions?" (H2)
- CTA: "Contact Me" or "Schedule a Consultation"
```

---

## 📧 7. Contact Page

**Purpose:** Provide contact information and inquiry form

**User Goals:**
- Get in touch with questions
- Schedule consultation
- Find contact information

### Page Structure

#### Page Header
```
Component: Page Title Section
Content:
- Headline: "Get in Touch" (H1)
- Description: "I'd love to hear from you"
```

#### Contact Form
```
Component: Form (Left Column, 60%)
Fields:
- Name (required)
- Email (required)
- Subject (optional dropdown)
- Message (required, textarea)
- Submit button (primary)

Validation:
- Real-time or on-submit validation
- Clear error messages
- Success message after submission
```

#### Contact Information (Right Column, 40%)
```
Component: Contact Info Card
Content:
- Email address
- Phone (if applicable)
- Business hours
- Social media links
- Response time expectation

Mobile: Below form
Desktop: Sidebar
```

#### FAQ Link
```
Component: Info Box
Content:
- "Looking for answers? Check out our FAQ page"
- Link to FAQ
```

---

## 📋 Mockup Checklist

### For Each Page:
- [ ] Mobile mockup (375px width)
- [ ] Tablet mockup (768px width)
- [ ] Desktop mockup (1440px width)
- [ ] All components specified
- [ ] Content hierarchy clear
- [ ] Accessibility validated
- [ ] Interactions documented
- [ ] Responsive behavior defined
- [ ] Content limits noted
- [ ] Design tokens applied

### Overall:
- [ ] Consistent navigation across pages
- [ ] Consistent footer across pages
- [ ] Visual hierarchy maintained
- [ ] Brand identity consistent
- [ ] User flows validated
- [ ] Accessibility review complete

---

## 🎨 Design Annotations

### For Developers:
- Component names reference component library
- Spacing values use design tokens
- Color values use semantic tokens
- Typography uses defined type scale
- Interactive states documented
- Responsive breakpoints specified
- Accessibility requirements noted

---

## 🔄 Next Steps

1. **Create High-Fidelity Mockups:** Design all pages in Figma/design tool
2. **Responsive Variations:** Create mobile, tablet, desktop versions
3. **Interactive Prototype:** Link pages for user flow testing
4. **Accessibility Review:** Validate contrast, focus states, touch targets
5. **Stakeholder Review:** Present mockups for approval
6. **Developer Handoff:** Prepare annotated designs and assets

---

## 📝 Approval

**Page Mockups Approved:** ☐ Yes ☐ No ☐ Needs Revision

**Pages Approved:**
- [ ] Homepage
- [ ] Shop / Category Page
- [ ] Product Detail Page
- [ ] Coaching Page
- [ ] About Page
- [ ] FAQ Page
- [ ] Contact Page

**Approved By:** _________________  
**Date:** _________________  
**Notes:** _________________

---

**Document Version:** 1.0  
**Next Review:** After high-fidelity mockups complete
