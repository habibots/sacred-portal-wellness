# Phase 4: Content Model & Type Definitions

**Project:** Sacred Portal Wellness Website  
**Document:** 02 - Content Models  
**Status:** Ready for Implementation  
**Created:** March 12, 2026

---

## 📖 TABLE OF CONTENTS

1. [Overview](#overview)
2. [Content Type Definitions](#content-type-definitions)
3. [Field Specifications](#field-specifications)
4. [Content Limits & Guidelines](#content-limits--guidelines)
5. [Templates](#templates)

---

## 🎯 OVERVIEW

### Purpose

This document defines the structure and requirements for every type of content on the Sacred Portal Wellness website. Each content type has specific fields, character limits, and formatting requirements based on the Phase 3 design system.

### Content Types

1. **Standard Page** - General informational pages
2. **Product Page** - E-commerce product details
3. **Service/Coaching Page** - Service offering details
4. **FAQ Item** - Question and answer pairs
5. **Blog Post** - Educational blog content (future)
6. **Testimonial** - Client testimonial
7. **Policy Page** - Legal and policy content

---

## 📋 CONTENT TYPE DEFINITIONS

### 1. Standard Page

**Used For:** About, Contact, What is Yoni Steaming, etc.

#### Required Fields

| Field | Type | Required | Character Limit | Notes |
|-------|------|----------|-----------------|-------|
| **Page Title (H1)** | Text | Yes | 60 max | Primary heading, includes keyword |
| **Meta Title** | Text | Yes | 60 max | SEO title tag |
| **Meta Description** | Text | Yes | 155 max | SEO meta description |
| **Hero Section** | Rich Text | No | 200 max | Optional intro above fold |
| **Body Content** | Rich Text | Yes | No limit | Main page content with H2/H3 structure |
| **Primary CTA** | Component | Yes | - | Main call-to-action |
| **Secondary CTA** | Component | No | - | Optional secondary action |
| **Trust Block** | Component | No | - | Credentials, social proof, etc. |
| **Featured Image** | Image | No | - | Hero or header image |
| **OG Image** | Image | Yes | - | Social sharing image (1200x630px) |
| **Canonical URL** | Text | Yes | - | Canonical URL for SEO |
| **Internal Links** | Links | Yes | 3-5 min | Links to related pages |

#### Content Structure

```markdown
# [Page Title - H1]

[Optional Hero Section - 1-2 sentences, 200 char max]

## [First Section - H2]

[Body content with paragraphs, lists, etc.]

### [Subsection - H3]

[More detailed content]

## [Second Section - H2]

[Body content]

[Primary CTA Component]

## [Trust Block Section]

[Credentials, testimonials, social proof]

[Secondary CTA Component]
```

---

### 2. Product Page

**Used For:** Individual product detail pages

#### Required Fields

| Field | Type | Required | Character Limit | Notes |
|-------|------|----------|-----------------|-------|
| **Product Name** | Text | Yes | 60 max | H1, includes product name |
| **Meta Title** | Text | Yes | 60 max | Format: "[Product Name] - Sacred Portal" |
| **Meta Description** | Text | Yes | 155 max | Includes benefits and keywords |
| **Product Summary** | Text | Yes | 150 max | Short description, appears in listings |
| **Product Description** | Rich Text | Yes | 500 max | Full product details |
| **Benefits** | List | Yes | 5-7 items | Bullet list of benefits |
| **Ingredients/Materials** | List | Yes | - | Complete ingredient or material list |
| **Usage Instructions** | Rich Text | Yes | 300 max | How to use the product |
| **Safety/Disclaimer** | Text | Yes | 200 max | Safety notes and disclaimers |
| **Price** | Number | Yes | - | From Square API |
| **Variants** | Array | No | - | Size, scent, etc. from Square |
| **Images** | Image Array | Yes | 4-6 images | Product photos (Square) |
| **Category** | Text | Yes | - | Product category |
| **SKU** | Text | Yes | - | From Square |
| **Stock Status** | Text | Yes | - | From Square API |
| **Shipping Note** | Text | Yes | 100 max | Shipping/delivery info |
| **Return Policy Note** | Text | Yes | 100 max | Return policy summary |
| **Related Products** | Array | No | 3-4 items | Cross-sell products |
| **OG Image** | Image | Yes | - | Product image (1200x630px) |

#### Content Structure

```markdown
# [Product Name]

[Product Summary - 150 char max, appears in search results]

## Product Images
[4-6 product photos from Square]

## Price & Variants
[Price from Square]
[Variant selector if applicable]
[Add to Cart button]

## Description
[Product Description - 500 char max]

## Benefits
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]
- [Benefit 4]
- [Benefit 5]

## Ingredients/Materials
[Complete list]

## How to Use
[Usage Instructions - 300 char max]

## Safety & Disclaimer
[Safety notes and disclaimers - 200 char max]

## Shipping & Returns
[Shipping note - 100 char max]
[Return policy note - 100 char max]

## Related Products
[3-4 related product cards]
```

---

### 3. Service/Coaching Page

**Used For:** The Sacred Portal Path coaching program

#### Required Fields

| Field | Type | Required | Character Limit | Notes |
|-------|------|----------|-----------------|-------|
| **Service Name (H1)** | Text | Yes | 60 max | Program name |
| **Meta Title** | Text | Yes | 60 max | SEO title |
| **Meta Description** | Text | Yes | 155 max | SEO description |
| **Hero Statement** | Text | Yes | 200 max | Compelling intro statement |
| **Who It's For** | Rich Text | Yes | 300 max | Target audience description |
| **Problems Addressed** | List | Yes | 4-6 items | Pain points this solves |
| **Program Structure** | Rich Text | Yes | 500 max | How the program works |
| **What's Included** | List | Yes | 6-10 items | Program components |
| **Outcomes/Benefits** | List | Yes | 5-7 items | Expected results |
| **Duration** | Text | Yes | - | Program length (e.g., "12 weeks") |
| **Format** | Text | Yes | - | Delivery method (e.g., "1:1 virtual") |
| **Investment/Price** | Text | Yes | - | Pricing information |
| **Payment Options** | List | No | - | Payment plan options |
| **Enrollment CTA** | Component | Yes | - | Primary booking CTA |
| **Discovery Call CTA** | Component | Yes | - | Free consultation CTA |
| **Testimonials** | Component | No | 2-3 items | Client success stories |
| **Credentials Block** | Component | Yes | - | RN, BSN, HC-NC display |
| **FAQ Section** | Component | No | 5-8 items | Common questions |
| **Disclaimer** | Text | Yes | 200 max | Service disclaimer |
| **OG Image** | Image | Yes | - | Social sharing image |

#### Content Structure

```markdown
# [Service Name - H1]

[Hero Statement - 200 char max, compelling intro]

## Who This Is For

[Target audience description - 300 char max]

## What You're Struggling With

[Problems Addressed - 4-6 bullet points]

## How It Works

[Program Structure - 500 char max]

## What's Included

- [Component 1]
- [Component 2]
- [Component 3]
- [Component 4]
- [Component 5]
- [Component 6]

## What You'll Achieve

[Outcomes/Benefits - 5-7 bullet points]

## Program Details

- **Duration:** [12 weeks]
- **Format:** [1:1 virtual sessions]
- **Investment:** [Price]
- **Payment Options:** [Payment plans if available]

## Your Guide

[Credentials Block - RN, BSN, HC-NC]
[Brief bio or link to About page]

## Client Success Stories

[2-3 Testimonial Components]

## Frequently Asked Questions

[5-8 FAQ items]

## Ready to Begin?

[Discovery Call CTA - Free 30-min consultation]
[Enrollment CTA - Book your spot]

## Disclaimer

[Service disclaimer - 200 char max]
```

---

### 4. FAQ Item

**Used For:** FAQ page, coaching page FAQ sections

#### Required Fields

| Field | Type | Required | Character Limit | Notes |
|-------|------|----------|-----------------|-------|
| **Question** | Text | Yes | 100 max | Clear, specific question |
| **Answer** | Rich Text | Yes | 500 max | Complete answer |
| **Category** | Text | No | - | FAQ category (e.g., "Yoni Steaming") |
| **Related Links** | Links | No | 1-2 max | Links to related content |
| **Order** | Number | No | - | Display order on page |

#### Content Structure

```markdown
### [Question]

[Answer - 500 char max, can include lists or links]

[Optional: Related link to full article/page]
```

---

### 5. Blog Post (Future)

**Used For:** Educational blog content

#### Required Fields

| Field | Type | Required | Character Limit | Notes |
|-------|------|----------|-----------------|-------|
| **Post Title (H1)** | Text | Yes | 60 max | Engaging, keyword-rich |
| **Meta Title** | Text | Yes | 60 max | SEO title |
| **Meta Description** | Text | Yes | 155 max | SEO description |
| **Excerpt** | Text | Yes | 200 max | Summary for listings |
| **Featured Image** | Image | Yes | - | Header image (1200x630px) |
| **Author** | Text | Yes | - | "Amber, RN, BSN, HC-NC" |
| **Publish Date** | Date | Yes | - | Publication date |
| **Category** | Text | Yes | - | Blog category |
| **Tags** | Array | No | 3-5 max | Topic tags |
| **Body Content** | Rich Text | Yes | No limit | Main article content |
| **CTA** | Component | Yes | - | Call-to-action at end |
| **Related Posts** | Array | No | 3 items | Related blog posts |
| **OG Image** | Image | Yes | - | Featured image |

#### Content Structure

```markdown
# [Post Title - H1]

**By [Author] | [Publish Date] | [Category]**

[Featured Image]

[Excerpt - 200 char max]

## [First Section - H2]

[Body content with paragraphs, lists, images]

### [Subsection - H3]

[Detailed content]

## [Second Section - H2]

[More content]

## [Conclusion Section - H2]

[Wrap-up and key takeaways]

[CTA Component - e.g., "Book a Discovery Call" or "Shop Yoni Steams"]

## Related Articles

[3 Related Post Cards]
```

---

### 6. Testimonial

**Used For:** Testimonials page, homepage, coaching page

#### Required Fields

| Field | Type | Required | Character Limit | Notes |
|-------|------|----------|----------|-------|
| **Client Name** | Text | Yes | 50 max | First name + last initial (e.g., "R.S.") |
| **Client Age** | Number | No | - | Optional demographic |
| **Client Location** | Text | No | 50 max | City/state (optional) |
| **Short Version** | Text | Yes | 150 max | For cards and previews |
| **Medium Version** | Text | Yes | 300 max | For testimonials page |
| **Full Version** | Rich Text | No | 600 max | Complete testimonial |
| **Service Used** | Text | Yes | - | What they purchased/used |
| **Date** | Date | Yes | - | Testimonial date |
| **Photo** | Image | No | - | Client photo (optional) |
| **Rating** | Number | No | - | 1-5 stars (optional) |
| **Approved** | Boolean | Yes | - | Compliance approval status |

#### Content Structure

**Short Version (Card Display):**
```
"[150 char testimonial excerpt]"
— [Client Name], age [Age]
```

**Medium Version (Testimonials Page):**
```
"[300 char testimonial]"

— [Client Name], age [Age]
[Service Used]
```

**Full Version (Detailed Display):**
```
"[Full testimonial - up to 600 char]"

— [Client Name], age [Age]
[Location]
[Service Used] | [Date]
```

---

### 7. Policy Page

**Used For:** Disclaimer, Returns, Shipping, Privacy

#### Required Fields

| Field | Type | Required | Character Limit | Notes |
|-------|------|----------|-----------------|-------|
| **Page Title (H1)** | Text | Yes | 60 max | Policy name |
| **Meta Title** | Text | Yes | 60 max | SEO title |
| **Meta Description** | Text | Yes | 155 max | SEO description |
| **Last Updated** | Date | Yes | - | Policy update date |
| **Effective Date** | Date | Yes | - | When policy takes effect |
| **Body Content** | Rich Text | Yes | No limit | Policy details with H2/H3 structure |
| **Contact Info** | Component | Yes | - | How to contact with questions |
| **Canonical URL** | Text | Yes | - | Canonical URL |

#### Content Structure

```markdown
# [Policy Name - H1]

**Last Updated:** [Date]  
**Effective Date:** [Date]

## [Section 1 - H2]

[Policy details]

### [Subsection - H3]

[Specific policy points]

## [Section 2 - H2]

[More policy details]

## Questions?

[Contact information]
Email: info@sacredportalwellness.com
```

---

## 📏 CONTENT LIMITS & GUIDELINES

### Character Limits (From Phase 3 Design System)

| Element | Limit | Reason |
|---------|-------|--------|
| **H1 (Page Title)** | 60 char | SEO + visual design |
| **Meta Title** | 60 char | Google search result display |
| **Meta Description** | 155 char | Google search result display |
| **Hero Statement** | 200 char | Above-fold readability |
| **Product Summary** | 150 char | Card display limit |
| **Button Text** | 25 char | Button component design |
| **Card Title** | 50 char | Card component design |
| **Card Description** | 120 char | Card component design |

### Content Formatting Rules

**Headings:**
- H1: One per page, includes primary keyword
- H2: Section headings, 3-6 per page
- H3: Subsections, use as needed
- Never skip heading levels (H1 → H3)

**Paragraphs:**
- 2-4 sentences max per paragraph
- Short paragraphs for scannability
- Use white space generously

**Lists:**
- Bullet lists for unordered items
- Numbered lists for sequential steps
- 5-7 items max per list (break into multiple lists if needed)

**Links:**
- Descriptive link text (no "click here")
- 3-5 internal links per page minimum
- External links open in new tab

**Images:**
- Alt text required for all images
- Max file size: 500KB (optimized)
- Format: WebP with JPG fallback
- Dimensions: Responsive, defined in design system

---

## 📝 TEMPLATES

### Standard Page Template

**File:** `templates/page-template.md`

```markdown
---
title: "[Page Title]"
meta_title: "[SEO Title - 60 char max]"
meta_description: "[SEO Description - 155 char max]"
canonical_url: "https://sacredportalwellness.com/[slug]"
og_image: "/images/og/[page-name].jpg"
---

# [Page Title - H1]

[Optional Hero Section - 200 char max]

## [First Section - H2]

[Body content with paragraphs, lists, etc.]

### [Subsection - H3]

[More detailed content]

## [Second Section - H2]

[Body content]

**[Primary CTA]**

## [Trust Block Section]

[Credentials, testimonials, social proof]

**[Secondary CTA]**

---

**Internal Links:**
- [Related Page 1](/link-1)
- [Related Page 2](/link-2)
- [Related Page 3](/link-3)
```

### Product Page Template

**File:** `templates/product-template.md`

```markdown
---
product_name: "[Product Name]"
meta_title: "[Product Name] - Sacred Portal Wellness"
meta_description: "[Benefits and keywords - 155 char max]"
category: "[Category Name]"
sku: "[SKU from Square]"
canonical_url: "https://sacredportalwellness.com/product/[slug]"
og_image: "/images/products/[product-slug]-og.jpg"
---

# [Product Name]

**Summary:** [150 char product summary]

## Images
[4-6 product images from Square]

## Price & Purchase
**Price:** $[XX.XX]
[Variant selector if applicable]
[Add to Cart button]

## Description
[Product description - 500 char max]

## Benefits
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]
- [Benefit 4]
- [Benefit 5]

## Ingredients/Materials
[Complete list]

## How to Use
[Usage instructions - 300 char max]

## Safety & Disclaimer
[Safety notes - 200 char max]

## Shipping & Returns
**Shipping:** [Shipping note - 100 char max]
**Returns:** [Return policy note - 100 char max]

## You May Also Like
[3-4 related product cards]
```

---

## ✅ CONTENT MODEL CHECKLIST

Before creating content:

- [ ] Content type identified
- [ ] All required fields documented
- [ ] Character limits understood
- [ ] Template available
- [ ] Examples reviewed
- [ ] Design system constraints noted

---

## 🎯 NEXT STEPS

1. **Review content models** with team
2. **Create content templates** in `templates/` folder
3. **Begin page content production** using templates
4. **Move to page-by-page content** (03-page-content-production.md)

---

**Document Status:** Ready for Implementation  
**Next Document:** 03-page-content-production.md

**Last Updated:** March 12, 2026
