# Plan Review: Research Findings & Confirmed Decisions

After deep research across Square API, hosting, SEO, and the current site, here are the validated findings and confirmed decisions.

---

## CONFIRMED DECISIONS

| Decision | Confirmed |
|---|---|
| **Domain** | `sacredportalwellness.com` (~$10/yr via Cloudflare Registrar) |
| **Hosting** | Vercel (Next.js, zero DevOps, global CDN, auto SSL) |
| **Payments** | Square API integration (Catalog, Orders, Payments, Web Payments SDK) |
| **Email** | Google Workspace -- 2 accounts: `business@sacredportalwellness.com` + `info@sacredportalwellness.com` |
| **Local SEO** | Google Business Profile as primary (Service Area Business, no home address shown) |
| **Keywords** | Tiered strategy based on competition research |
| **Schema** | Full structured data matched to business needs |
| **Site pages** | All essential pages including FAQ, blog, service area, educational content |

---

## 1. DOMAIN: sacredportalwellness.com

- `sacredportal.com` is **taken** (registered since 1999, owned via NameBright)
- `sacredportalwellness.com` is **available** -- matches existing Square site name and brand identity
- `sacredportal.co` also available as a backup
- Cost: ~$10.44/yr from Cloudflare Registrar (at-cost pricing, no markup, no renewal increases)

---

## 2. HOSTING: Vercel + Next.js

**Why Vercel over DigitalOcean:**

| Factor | Vercel | DigitalOcean Droplet | DO App Platform |
|---|---|---|---|
| DevOps required | None | Full (Nginx, SSL, firewall, updates) | Minimal |
| Next.js optimization | Built by the same team | Generic | Generic |
| Auto deployments | Yes (from Git) | Manual or custom CI/CD | Yes |
| Global CDN | Included | Not included | Limited |
| SSL | Automatic | Manual (Let's Encrypt) | Automatic |
| Cost | $0 hobby / $20 pro | $6/mo minimum | $5/mo |
| Scaling | Automatic | Manual | Semi-automatic |

**Vercel is the clear winner** for a Next.js + Square API site. Zero infrastructure management, best-in-class performance, and the free tier covers development and launch.

**Tech stack confirmed:**
```
Framework:    Next.js (App Router)
Hosting:      Vercel
Payments:     Square Web Payments SDK + Catalog/Orders/Payments APIs
Database:     None (Square is source of truth for products)
Styling:      Tailwind CSS
Domain:       sacredportalwellness.com via Cloudflare Registrar (~$10/yr)
DNS/CDN:      Cloudflare (free tier)
Email:        Google Workspace (2 accounts)
SSL:          Automatic via Vercel
Analytics:    Google Analytics + Search Console (free)
```

---

## 3. EMAIL: Google Workspace (2 Gmail Accounts)

Client already uses Gmail and wants to add two custom domain email addresses:

- `business@sacredportalwellness.com` -- primary business communications
- `info@sacredportalwellness.com` -- public-facing contact email for the website

**Google Workspace Business Starter:** ~$7/user/mo
- 2 accounts = ~$14/mo
- Full Gmail interface (client is already familiar)
- Google Drive, Calendar, Meet included
- Professional email on her own domain
- Replaces the `aahmm9966` email she wants to stop using

---

## 4. SQUARE API INTEGRATION

### What Square API handles (confirmed):
- **Catalog API** -- Pull existing products (already maintained in Square Dashboard)
- **Orders API** -- Create orders from cart (line items, fulfillments, taxes)
- **Payments API** -- Charge customers via payment token from Web Payments SDK
- **Web Payments SDK** -- Secure card entry (PCI compliant, card data never touches our server)
- **Inventory API** -- Real-time stock sync across all channels
- **Customers API** -- Track repeat buyers, coaching clients
- **Refunds API** -- Process returns when approved

### What Square API does NOT handle (we build custom):
- **Shipping rate calculation** -- We build flat-rate + free-over-$100 logic in cart code
- **Local delivery zones** -- We build zip code eligibility check for San Diego delivery
- **Per-product return policies** -- Custom site content (no returns on yoni seats, case-by-case for coaching, exchanges OK for blends/salves)
- **Address hiding** -- We simply don't display it (we control the site)

### Square costs:
- Developer account: Free
- API usage: Free (no per-call fees)
- Transaction fees: **2.9% + $0.30** per online sale
- No monthly platform fees

---

## 5. GOOGLE BUSINESS PROFILE (PRIMARY LOCAL SEO)

Setup as **Service Area Business (SAB)** -- home address never shown publicly.

**How it works:**
1. Create profile at business.google.com
2. Select "No" when asked if customers can visit the location
3. Set service area: "San Diego, CA" / "Southern California"
4. Google mails verification postcard to home address (used only for verification)
5. Clear physical address from profile after verification

**What she gets:**
- Appears in Google Map Pack (top 3 local results) for wellness searches in San Diego
- Can receive Google reviews (aim for 20+ as quickly as possible)
- Post updates, photos, offers directly to Google
- List all services and products
- Shows "Serves San Diego and surrounding areas" instead of a street address
- **100% free**

**This is the single highest-ROI SEO action for a local business.**

---

## 6. KEYWORD STRATEGY (Tiered by Research)

### Tier 1 -- Quick Wins (target at launch, rank in 1-4 months)

| Keyword | Monthly Volume (US) | Difficulty | Why Priority |
|---|---|---|---|
| Yoni steaming San Diego | Niche subset of 8-15K | Very Low | Almost no optimized local competitors |
| Yoni seats / yoni steam seat | 1,000-3,000 | Low (15-30) | Product-intent, direct sales keyword |
| Female wellness coach San Diego | Niche subset of 2-5K | Low | Underserved local market |
| Period relief herbal remedies | Long-tail subset | Low-Medium | High purchase intent |

### Tier 2 -- Medium-Term (3-8 months with content)

| Keyword | Monthly Volume (US) | Difficulty | Strategy |
|---|---|---|---|
| Hormone health | 8,000-15,000 | Medium-High (55-70) | Blog pillar content + long-tail variations |
| Female wellness | 2,000-5,000 | Medium (40-55) | Pair with "coach" and "San Diego" |
| Period relief | 3,000-8,000 | Medium (40-55) | Product pages + blog content |
| Sleep support + herbal/natural | 5,000-10,000 | Medium-High (50-65) | Blog + Sweet Dream Cream product page |

### Tier 3 -- Long-Term Blog Strategy (12+ months)

| Keyword | Monthly Volume (US) | Difficulty | Strategy |
|---|---|---|---|
| Herbal medicine | 18,000-27,000 | High (70-80) | Localize to "herbal medicine San Diego" |
| Gut health | 30,000-50,000 | High (75-85) | Long-tail blog only ("gut health herbal supplements") |
| Natural remedies | 20,000-40,000 | High (70-80) | Long-tail only ("natural remedies for period pain") |
| Natural medicine | 5,000-12,000 | High (65-75) | Supporting content only |

### High-Value Long-Tail Keywords to Target:
- "yoni steaming benefits"
- "yoni steam herbs near me"
- "herbal remedies for hormone balance"
- "natural period pain relief San Diego"
- "female hormone health coach"
- "gut health herbal supplements"
- "herbal sleep tea San Diego"
- "holistic wellness for women San Diego"
- "womb wellness San Diego"

---

## 7. SCHEMA MARKUP (Matched to Business Needs)

### Must-Have (implement at launch):

**1. HealthAndBeautyBusiness** (LocalBusiness subtype)
- Business name, description, service area (San Diego), social links
- Credentials: Amber's RN, BSN, HC-NC qualifications
- Price range, contact info

**2. Product** (for each physical product)
- Name, description, price, availability, images
- Enables rich product snippets in Google (price + star ratings)
- Applied to: Yoni seats, steam blends, C.C.R salve, Sweet Dream Cream

**3. Service** (for coaching offering)
- The Sacred Portal Path coaching package
- Provider credentials, service area, pricing
- Links to booking/purchase flow

**4. Review** (embedded in Product and LocalBusiness)
- 3 testimonials provided by client
- Star ratings display in search results (dramatically improves click-through)

### Should-Have (add post-launch):

**5. FAQPage** -- FAQ content with expandable Q&A in Google results
**6. Article / BlogPosting** -- For blog content indexing
**7. BreadcrumbList** -- Site navigation in search results
**8. Organization** -- Top-level business identity across all pages

**Format:** JSON-LD (Google's preferred format), placed in `<head>` of each page.

---

## 8. ESSENTIAL PAGES (Complete Site Map)

### Core Pages:
| Page | Purpose | Primary Keyword Target |
|---|---|---|
| **Homepage** | Logo, intro, service overview, featured products, CTA to coaching | Brand + "female wellness San Diego" |
| **Shop** | All physical products with categories | Product keywords |
| **The Sacred Portal Path** | Coaching package (content on-site, not external doc link) | "female wellness coach San Diego" |
| **About the Creator** | Amber's story + credentials (RN, BSN, HC-NC) | E-E-A-T trust signal |
| **Testimonials** | 3 client success stories (chopped for impact) | Trust + conversion |
| **Workshops/Retreats** | "Launching Soon" placeholder | Future expansion |
| **Contact** | Instagram (@saacredportal), business + info email | Conversion |

### SEO-Essential Pages (added from research):
| Page | Purpose | Primary Keyword Target |
|---|---|---|
| **What is Yoni Steaming?** | Educational content (exists on current site -- migrate & optimize) | "yoni steaming" + "yoni steaming benefits" |
| **FAQ** | Common questions with FAQPage schema | Rich snippets in Google |
| **San Diego Wellness Services** | Service area page mentioning neighborhoods | Local SEO + "herbal wellness San Diego" |
| **Blog** | 2 posts/month, long-tail keyword targeting | Organic traffic engine |
| **Disclaimer** | Medical disclaimer (exists on current site -- migrate) | YMYL compliance |
| **Return/Exchange Policy** | Per-product policies (custom content) | Trust + legal compliance |

---

## 9. YMYL & E-E-A-T COMPLIANCE

Google classifies health/wellness as **YMYL (Your Money or Your Life)** -- higher scrutiny on authority and trust.

**Amber's competitive advantage:** RN, BSN, HC-NC credentials. Most competitors in this niche don't have nursing qualifications. This is a massive trust signal.

**Required implementation:**
- Credentials displayed on every page (footer or author component)
- Author bio on all blog posts with qualifications
- Citations in health-related content (link to PubMed, reputable herbalism sources)
- Medical disclaimers on relevant pages ("This is not medical advice")
- `HealthAndBeautyBusiness` schema with credentials
- Testimonials with real names/initials and ages (already provided)

---

## 10. CURRENT SITE AUDIT

**What exists on sacredportalwellness.square.site (to migrate/reuse):**
- Homepage intro text about Amber's mission
- Product catalog: Yoni, Yoni steam blends, Yoni seats (in Square)
- "What is Yoni Steaming?" educational page
- "About the Creator" / "Meet the Creator" page
- Disclaimer page
- The Sacred Portal Path coaching offer (links to external doc)
- Logo and brand colors (off-white, dark midnight green #132A1F, black)

**Missing from current site (we build):**
- Custom domain
- Testimonials page
- FAQ page
- Blog
- Service area page
- Workshops/Retreats placeholder
- Schema markup
- SEO optimization
- C.C.R salve and Sweet Dream Cream visibility in categories
- Professional email

**Instagram note:** Current site links to @ssacredportalapothecary but client specified @saacredportal -- need to confirm which is current.

---

## UPDATED COST BREAKDOWN

### Monthly Fixed Costs:

| Item | Cost |
|---|---|
| Hosting (Vercel -- free tier to start, $20/mo Pro for commercial) | $0 - $20/mo |
| Domain (Cloudflare Registrar) | ~$0.87/mo ($10.44/yr) |
| Email (Google Workspace x2 users) | ~$14/mo |
| SSL | $0 (included via Vercel) |
| Google Business Profile | $0 |
| Google Analytics + Search Console | $0 |
| **Total fixed** | **~$14.87 - $34.87/mo** |

### Per-Transaction:
- Square processing: **2.9% + $0.30** per online sale
- Example: $45 product sale = ~$1.61 in fees

### Compared to Square Online:
- Square Online Plus (for custom domain + remove branding): ~$29/mo + same transaction fees
- Our custom build: More control, better SEO, roughly same or lower cost

---

## SUMMARY OF ALL CORRECTIONS APPLIED

| # | Original Plan Issue | Corrected To |
|---|---|---|
| 1 | Evaluate sacredportal.com | `sacredportalwellness.com` confirmed (available, ~$10/yr) |
| 2 | 3 vague tech options | Vercel + Next.js confirmed |
| 3 | Email "if custom domain" | Google Workspace x2: business@ + info@ |
| 4 | Return policies via Square | Custom site content (per-product policies built into pages) |
| 5 | Shipping via Square | Custom code: flat-rate + free-over-$100 + SD zip code delivery check |
| 6 | Google Business Profile "if client agrees" | Google Business Profile is primary local SEO strategy |
| 7 | "Optimize for all 11 keywords" | 3-tier keyword strategy based on difficulty research |
| 8 | No YMYL/E-E-A-T mention | YMYL compliance added (credentials, citations, disclaimers) |
| 9 | No blog mentioned | Blog added as essential (2 posts/month for organic traffic) |
| 10 | Missing pages | FAQ, service area, educational, return policy pages added |
| 11 | info@sacredportal.com | info@sacredportalwellness.com + business@sacredportalwellness.com |
| 12 | Schema was generic | Schema matched to specific business needs (HealthAndBeautyBusiness, Product, Service, Review, FAQ) |
