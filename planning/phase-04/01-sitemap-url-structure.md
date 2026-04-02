# Phase 4: Sitemap & URL Structure

**Project:** Sacred Portal Wellness Website  
**Document:** 01 - Information Architecture  
**Status:** Ready for Review  
**Created:** March 12, 2026

---

## 📖 TABLE OF CONTENTS

1. [Overview](#overview)
2. [Final Sitemap](#final-sitemap)
3. [URL Structure & Conventions](#url-structure--conventions)
4. [Page Hierarchy](#page-hierarchy)
5. [Navigation Structure](#navigation-structure)
6. [Redirect Mapping](#redirect-mapping)
7. [Future Growth Planning](#future-growth-planning)

---

## 🎯 OVERVIEW

### Purpose

This document defines the complete information architecture for Sacred Portal Wellness, including:
- Every page that will exist on the site
- URL structure and naming conventions
- Page relationships and hierarchy
- Navigation organization
- Redirects from the old Square site

### Principles

**URL Design Principles:**
1. **Short & Readable** - Easy to remember and type
2. **Keyword-Aligned** - Include target keywords where natural
3. **Consistent** - Follow predictable patterns
4. **Future-Proof** - Allow for growth without restructuring
5. **SEO-Friendly** - Descriptive, lowercase, hyphen-separated

---

## 🗺️ FINAL SITEMAP

### Core Pages (13 pages)

#### 1. Homepage
- **URL:** `/`
- **Title:** Sacred Portal Wellness - Holistic Women's Health & Yoni Steaming
- **Purpose:** Brand introduction, featured content, primary CTAs
- **Priority:** Critical
- **Status:** Content exists (Phase 1)

#### 2. Shop / All Products
- **URL:** `/shop`
- **Title:** Shop All - Yoni Steam Blends & Wellness Products
- **Purpose:** Product catalog browsing, category filtering
- **Priority:** Critical
- **Status:** Structure defined, needs product data

#### 3. Product Category: Yoni Steam Blends
- **URL:** `/shop/yoni-steam-blends`
- **Title:** Yoni Steam Blends - Herbal Vaginal Steaming Products
- **Purpose:** Category page for steam blend products
- **Priority:** High
- **Status:** Needs product data

#### 4. Product Category: Yoni Seats
- **URL:** `/shop/yoni-seats`
- **Title:** Yoni Seats - Vaginal Steaming Chairs & Stools
- **Purpose:** Category page for seat products
- **Priority:** High
- **Status:** Needs product data

#### 5. Product Detail Pages (Dynamic)
- **URL:** `/product/[slug]`
- **Example:** `/product/moon-cycle-steam-blend`
- **Title:** [Product Name] - Sacred Portal Wellness
- **Purpose:** Individual product showcase and purchase
- **Priority:** Critical
- **Status:** Template needed, examples from product data

#### 6. The Sacred Portal Path (Coaching)
- **URL:** `/coaching`
- **Title:** The Sacred Portal Path - 12-Week Holistic Wellness Coaching
- **Purpose:** Coaching program details and booking
- **Priority:** Critical
- **Status:** Content exists (Phase 1), needs pricing

#### 7. About / Meet the Creator
- **URL:** `/about`
- **Title:** Meet the Creator - Amber, RN, BSN, HC-NC
- **Purpose:** Creator bio, credentials, story
- **Priority:** High
- **Status:** Content exists (Phase 1)

#### 8. What is Yoni Steaming?
- **URL:** `/yoni-steaming`
- **Title:** What is Yoni Steaming? - Benefits, Safety & How-To Guide
- **Purpose:** Educational content, SEO pillar page
- **Priority:** High
- **Status:** Content exists (Phase 1)

#### 9. FAQ
- **URL:** `/faq`
- **Title:** Frequently Asked Questions - Sacred Portal Wellness
- **Purpose:** Common questions, trust building
- **Priority:** Medium
- **Status:** Needs expansion from Phase 1 content

#### 10. Testimonials
- **URL:** `/testimonials`
- **Title:** Client Testimonials - Sacred Portal Wellness
- **Purpose:** Social proof, trust building
- **Priority:** Medium
- **Status:** 1 testimonial exists, page structure needed

#### 11. Contact
- **URL:** `/contact`
- **Title:** Contact Us - Sacred Portal Wellness
- **Purpose:** Contact form, business information
- **Priority:** High
- **Status:** Needs content

#### 12. Workshops & Retreats (Coming Soon)
- **URL:** `/workshops`
- **Title:** Workshops & Retreats - Coming Soon
- **Purpose:** Future offering placeholder
- **Priority:** Low
- **Status:** Placeholder page

#### 13. Blog Index (Future)
- **URL:** `/blog`
- **Title:** Blog - Sacred Portal Wellness
- **Purpose:** Blog post listing (future content)
- **Priority:** Low
- **Status:** Placeholder structure

---

### Policy & Legal Pages (4 pages)

#### 14. Disclaimer
- **URL:** `/disclaimer`
- **Title:** Health Disclaimer - Sacred Portal Wellness
- **Purpose:** Legal protection, health claim disclaimers
- **Priority:** Critical
- **Status:** Needs content

#### 15. Return & Exchange Policy
- **URL:** `/returns`
- **Title:** Return & Exchange Policy - Sacred Portal Wellness
- **Purpose:** E-commerce policy, customer trust
- **Priority:** Critical
- **Status:** Needs content

#### 16. Shipping Policy
- **URL:** `/shipping`
- **Title:** Shipping Policy - Sacred Portal Wellness
- **Purpose:** Shipping details, local delivery info
- **Priority:** High
- **Status:** Needs content (San Diego local delivery rules)

#### 17. Privacy Policy
- **URL:** `/privacy`
- **Title:** Privacy Policy - Sacred Portal Wellness
- **Purpose:** Data privacy compliance
- **Priority:** Medium
- **Status:** Standard template can be used

---

### Utility Pages (3 pages)

#### 18. 404 Not Found
- **URL:** `/404`
- **Title:** Page Not Found - Sacred Portal Wellness
- **Purpose:** Error handling
- **Priority:** Medium
- **Status:** Needs custom design

#### 19. Thank You (Order Confirmation)
- **URL:** `/thank-you`
- **Title:** Thank You for Your Order - Sacred Portal Wellness
- **Purpose:** Post-purchase confirmation
- **Priority:** High
- **Status:** Needs content

#### 20. Thank You (Contact Form)
- **URL:** `/thank-you/contact`
- **Title:** Thank You - We'll Be In Touch Soon
- **Purpose:** Contact form submission confirmation
- **Priority:** Medium
- **Status:** Needs content

---

### Total Pages: 20 pages
- **Critical:** 7 pages
- **High:** 6 pages
- **Medium:** 5 pages
- **Low:** 2 pages

---

## 🔗 URL STRUCTURE & CONVENTIONS

### URL Formatting Rules

**1. Lowercase Only**
- ✅ `/yoni-steaming`
- ❌ `/Yoni-Steaming`

**2. Hyphens for Spaces**
- ✅ `/yoni-steam-blends`
- ❌ `/yoni_steam_blends`
- ❌ `/yonisteamblends`

**3. No File Extensions**
- ✅ `/about`
- ❌ `/about.html`

**4. No Trailing Slashes**
- ✅ `/shop`
- ❌ `/shop/`

**5. Descriptive & Concise**
- ✅ `/coaching` (clear, short)
- ❌ `/the-sacred-portal-path-12-week-coaching-program` (too long)

**6. Keyword Integration**
- ✅ `/yoni-steaming` (target keyword)
- ✅ `/shop/yoni-steam-blends` (category + keyword)

### URL Patterns

**Product URLs:**
```
/product/[product-slug]

Examples:
/product/moon-cycle-steam-blend
/product/postpartum-healing-blend
/product/bamboo-yoni-seat
```

**Category URLs:**
```
/shop/[category-slug]

Examples:
/shop/yoni-steam-blends
/shop/yoni-seats
```

**Blog URLs (Future):**
```
/blog/[post-slug]

Examples:
/blog/benefits-of-yoni-steaming
/blog/how-to-prepare-for-your-first-steam
```

**Policy URLs:**
```
/[policy-name]

Examples:
/disclaimer
/returns
/shipping
/privacy
```

---

## 📊 PAGE HIERARCHY

### Site Structure Tree

```
Sacred Portal Wellness (/)
│
├── Shop (/shop)
│   ├── Yoni Steam Blends (/shop/yoni-steam-blends)
│   │   └── [Individual Products] (/product/[slug])
│   │
│   └── Yoni Seats (/shop/yoni-seats)
│       └── [Individual Products] (/product/[slug])
│
├── Coaching (/coaching)
│   └── The Sacred Portal Path
│
├── Learn
│   ├── What is Yoni Steaming? (/yoni-steaming)
│   ├── FAQ (/faq)
│   └── Blog (/blog) [Future]
│       └── [Blog Posts] (/blog/[slug])
│
├── About
│   ├── Meet the Creator (/about)
│   └── Testimonials (/testimonials)
│
├── Workshops & Retreats (/workshops) [Coming Soon]
│
├── Contact (/contact)
│
└── Policies
    ├── Disclaimer (/disclaimer)
    ├── Returns (/returns)
    ├── Shipping (/shipping)
    └── Privacy (/privacy)
```

### Parent-Child Relationships

**Shop (Parent)**
- Children: Yoni Steam Blends, Yoni Seats
- Grandchildren: Individual product pages

**Learn (Conceptual Parent)**
- Children: Yoni Steaming, FAQ, Blog

**About (Conceptual Parent)**
- Children: Meet the Creator, Testimonials

**Policies (Conceptual Parent)**
- Children: Disclaimer, Returns, Shipping, Privacy

---

## 🧭 NAVIGATION STRUCTURE

### Primary Navigation (Header)

**Desktop Navigation:**
```
[Logo] | Shop | Coaching | Learn | About | Contact
```

**Shop Dropdown:**
- All Products
- Yoni Steam Blends
- Yoni Seats

**Learn Dropdown:**
- What is Yoni Steaming?
- FAQ
- Blog (when available)

**About Dropdown:**
- Meet the Creator
- Testimonials

### Mobile Navigation

**Hamburger Menu:**
1. Home
2. Shop
   - All Products
   - Yoni Steam Blends
   - Yoni Seats
3. Coaching
4. What is Yoni Steaming?
5. FAQ
6. About
7. Testimonials
8. Contact

### Footer Navigation

**Column 1: Shop**
- All Products
- Yoni Steam Blends
- Yoni Seats

**Column 2: Learn**
- What is Yoni Steaming?
- FAQ
- Blog

**Column 3: About**
- Meet the Creator
- Testimonials
- Contact

**Column 4: Policies**
- Disclaimer
- Returns & Exchanges
- Shipping
- Privacy

**Column 5: Connect**
- Instagram: @saacredportal
- Email: info@sacredportalwellness.com
- Newsletter signup

### Breadcrumbs

**Pattern:**
```
Home > [Parent] > [Current Page]
```

**Examples:**
```
Home > Shop > Yoni Steam Blends
Home > Shop > Yoni Steam Blends > Moon Cycle Blend
Home > Learn > What is Yoni Steaming?
Home > About > Meet the Creator
```

---

## 🔄 REDIRECT MAPPING

### Old Square Site to New Site

**Current Square Site:** `https://sacredportalwellness.square.site/`

**Redirect Strategy:**
- 301 Permanent Redirects (SEO-friendly)
- Preserve any existing search engine rankings
- Ensure no broken links

### Known Square URLs to Redirect

**Homepage:**
```
OLD: sacredportalwellness.square.site/
NEW: sacredportalwellness.com/
```

**Shop:**
```
OLD: sacredportalwellness.square.site/shop
NEW: sacredportalwellness.com/shop
```

**About:**
```
OLD: sacredportalwellness.square.site/about
NEW: sacredportalwellness.com/about
```

**Disclaimer:**
```
OLD: sacredportalwellness.square.site/disclaimer
NEW: sacredportalwellness.com/disclaimer
```

**Product Pages:**
```
OLD: sacredportalwellness.square.site/product/[square-id]/[name]
NEW: sacredportalwellness.com/product/[slug]

Note: Requires mapping Square product IDs to new slugs
```

### Redirect Implementation

**Method:** Vercel redirects configuration in `vercel.json`

**Example Configuration:**
```json
{
  "redirects": [
    {
      "source": "/s/:path*",
      "destination": "/:path*",
      "permanent": true
    }
  ]
}
```

**Redirect Mapping File:** `assets/redirect-map.csv`

---

## 🌱 FUTURE GROWTH PLANNING

### Reserved URL Namespaces

**Blog:**
```
/blog/
/blog/category/[category-slug]
/blog/tag/[tag-slug]
```

**Workshops & Retreats:**
```
/workshops/
/workshops/[event-slug]
/retreats/
/retreats/[retreat-slug]
```

**Resources:**
```
/resources/
/resources/guides/
/resources/downloads/
```

**Account/Customer Portal (Future):**
```
/account/
/account/orders
/account/profile
```

### Scalability Considerations

**Product Categories:**
- Current: 2 categories (Yoni Steam Blends, Yoni Seats)
- Future: Can add `/shop/[new-category]` as needed
- Pattern supports unlimited categories

**Blog Growth:**
- Structure supports unlimited blog posts
- Can add category/tag filtering
- Can add pagination

**Service Expansion:**
- Current: 1 service (Coaching)
- Future: Can add `/services/[service-slug]` if needed
- Or individual pages like `/workshops`, `/retreats`

---

## 📋 SITEMAP FILES

### XML Sitemap

**File:** `assets/sitemap.xml`

**Purpose:** Submit to Google Search Console for indexing

**Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sacredportalwellness.com/</loc>
    <lastmod>2026-03-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Additional URLs... -->
</urlset>
```

**Priority Levels:**
- 1.0: Homepage
- 0.9: Shop, Coaching (revenue pages)
- 0.8: Product pages, About, Yoni Steaming
- 0.7: FAQ, Testimonials, Contact
- 0.6: Blog posts
- 0.5: Policy pages

### URL Mapping Spreadsheet

**File:** `assets/url-map.csv`

**Columns:**
- Page Name
- URL
- Parent Page
- Priority (Critical/High/Medium/Low)
- Status (Complete/In Progress/Needs Content)
- Content Source (Phase 1/New/Template)
- Notes

---

## ✅ APPROVAL CHECKLIST

Before finalizing sitemap:

- [ ] All core pages identified
- [ ] URL structure follows conventions
- [ ] No duplicate URLs
- [ ] All URLs are SEO-friendly
- [ ] Navigation structure is logical
- [ ] Redirect map is complete
- [ ] Future growth is planned for
- [ ] Stakeholder approval received

---

## 🎯 NEXT STEPS

1. **Review this sitemap** with stakeholder
2. **Confirm all pages** are needed
3. **Approve URL structure** and naming
4. **Create redirect map** from Square site
5. **Move to content model** (02-content-model.md)

---

**Document Status:** Ready for Review  
**Approval Required:** Yes  
**Next Document:** 02-content-model.md

**Last Updated:** March 12, 2026
