# Sacred Portal Wellness - Project Status

**Last Updated:** April 8, 2026
**Overall Progress:** ~88% Complete (build + security hardening complete; awaiting Google account work and contact form wiring)

---

## 🎯 PROJECT OVERVIEW

**Goal:** Build a professional Next.js website for Sacred Portal Wellness
**Domain:** sacredportalwellness.com
**Tech Stack:** Next.js (App Router) + TypeScript + TailwindCSS, Square e-commerce, Cloudflare Workers hosting
**Owner:** Amber Rodriguez (RN, BSN, HC-NC)

---

## 📊 PHASE STATUS

| Phase | Status | Progress | Notes |
|-------|--------|----------|-------|
| **Phase 1: Discovery** | ✅ Complete | 100% | Brand, content, SEO strategy locked |
| **Phase 2: Domain/Email** | 🔄 In Progress | ~50% | Domain/Workers deploy in place; Google Workspace TBD |
| **Phase 3: Design** | ✅ Complete | 100% | Homepage redesigned per client feedback |
| **Phase 4: Content** | ✅ Complete | 95% | All core pages live; awaiting more testimonials |
| **Phase 5: Build** | ✅ Complete | 100% | Site built, live on Cloudflare Workers, product detail pages added |
| **Phase 6: SEO** | 🔄 In Progress | 85% | Metadata, sitemap (with products), product JSON-LD done; GSC/GA verification pending |
| **Phase 7: Testing** | 🔄 In Progress | 50% | A11y baseline, security pass done; full QA + Lighthouse audit pending |
| **Phase 8: Launch** | ⏳ Pending | 10% | Site is technically live; pending real Square checkout test + announcement |
| **Phase 9: Security** | ✅ Complete | 95% | All identified blockers fixed; rate limiting moved to Cloudflare WAF |

---

## ✅ COMPLETED WORK

### Phase 1: Discovery & Asset Collection
- Brand identity: Forest Green #1B5E20, white, black; apothecary serif + clean sans
- Visual motifs: moss, forest, sacred geometry
- Brand voice: earthy, professional, empowering
- Homepage copy, About/creator bio, coaching program, "What is Yoni Steaming"
- 1 approved testimonial (R.S.) with 3 variants
- SEO: 11 target keywords, audience (women 20–40), San Diego focus
- 15+ planning documents, brand guidelines, asset inventory

### Phase 2: Domain, Email & Accounts (partial)
- Cloudflare Workers deployment configured
- Package renamed to `sacred-portal-wellness` for Worker binding
- Square API credentials configured and integrated
- ⏳ Still pending: Google Workspace (business@/info@), Google Business Profile verification

### Phase 3: Design
- Homepage fully redesigned per client feedback
- Navigation restructured
- Coaching page redesigned
- FAQ section added
- Testimonials section integrated

### Phase 4: Content
- Homepage, About (with Amber Rodriguez), Coaching, Shop, Contact, FAQ all live
- Approved testimonial integrated on homepage and coaching page
- Educational content on yoni steaming published

### Phase 5: Build (Implementation)
**Core build (commits `a59dcdb` → `445f476`, March 12 – April 6, 2026):**

- ✅ Next.js App Router scaffold with TypeScript + Tailwind
- ✅ **Square e-commerce integration** — Catalog, Orders, Payments, Web Payments SDK
- ✅ Server-side product fetching on shop page (fresh data per request)
- ✅ Mobile-responsive header
- ✅ Contact form
- ✅ Approved testimonial component
- ✅ Major client-feedback revision: homepage redesign, nav update, coaching page, FAQ, testimonials
- ✅ **Security hardening** — headers, input validation
- ✅ **Accessibility baseline** — WCAG-aware markup, focus states
- ✅ **Dark mode** support
- ✅ **Performance optimizations**
- ✅ **Error handling** + error boundaries
- ✅ **CI configuration** added
- ✅ Cleanup of stale root `src/public` dirs
- ✅ Square client refactored for build compatibility
- ✅ **Cloudflare Workers compatibility:** package rename for Worker binding, Next.js image optimization disabled globally, Square product images served unoptimized
- ✅ About page updated with Amber's last name (Rodriguez) — heading + metadata
- ✅ **SEO essentials** — metadata improvements, cleanup pass

### Phase 6: SEO (in progress)
- ✅ Metadata across pages
- ✅ Page titles and descriptions
- ⏳ Google Search Console verification
- ⏳ Google Analytics installation
- ⏳ Sitemap submission
- ⏳ Google Business Profile

### Phase 9: Security (in progress)
- ✅ Security headers
- ✅ Input validation
- ⚠️ **`6e081dc` temporarily exposed Square API errors for debugging — must be reverted before launch**

---

## 🚧 IN PROGRESS / IMMEDIATE NEXT STEPS

**Owner-side (require human/account access):**
1. **Google Workspace setup** — business@ and info@ email accounts
2. **Google Business Profile** — create + verify (5–14 day verification window)
3. **Google Analytics + Search Console** — install, verify, submit sitemap
4. **Contact form email delivery** — wire `/api/contact` to Resend, Google Apps Script, or similar (currently logs to console only)
5. **Real end-to-end Square checkout test** — buy a test product with a real card to confirm full flow
6. **Gather more testimonials** for ongoing content

---

## ⚠️ KNOWN ISSUES / TECH DEBT

- Contact form `/api/contact` logs submissions to console but does not deliver them anywhere (intentional placeholder until Google Workspace email is set up)
- Lighthouse score not yet verified at 90+ across all categories
- Some coaching pages still use generic alt text on imagery (most fixed in 2026-04-08 pass)

---

## 💰 BUDGET SUMMARY

### One-Time
| Item | Cost | Status |
|------|------|--------|
| Domain registration | $10.44 | ✅ Acquired |

### Monthly Recurring
| Item | Cost | Status |
|------|------|--------|
| Google Workspace (2 users) | $14.00 | Not set up |
| Cloudflare Workers | $0–5 | ✅ Active |

### Transaction-Based
| Item | Cost |
|------|------|
| Square payments | 2.9% + $0.30 per sale |

---

## 📅 TIMELINE

### Completed
- **2026-03-12** — Phase 1 complete; initial Next.js scaffold + Sacred Portal site
- **2026-03-19** — Square e-commerce integration, server-side shop fetch, mobile header, contact form, R.S. testimonial
- **2026-04-01** — Major client feedback round: homepage redesign, nav, coaching, FAQ, testimonials
- **2026-04-03** — Security/a11y/dark mode/perf/error handling/CI; Square build fix
- **2026-04-06** — Cloudflare Workers compatibility, About page update, debug exposure (temporary), SEO + metadata pass

### Upcoming
- Revert debug commit, commit `.github/` workflows
- Google Workspace + Business Profile
- Final QA and Lighthouse audit
- Launch

---

## 🎨 TECH STACK (Confirmed in Build)

**Frontend:** Next.js (App Router), React, TypeScript, TailwindCSS
**Hosting:** Cloudflare Workers (changed from originally planned Vercel)
**DNS/CDN:** Cloudflare
**E-Commerce:** Square Catalog / Orders / Payments / Web Payments SDK
**Email:** Google Workspace (planned)
**SEO/Analytics:** Google Business Profile, Analytics, Search Console (pending)
**Accessibility:** WCAG 2.1 AA target — axe-core, Lighthouse, VoiceOver, keyboard

> ⚠️ **Stack change from original plan:** Hosting moved from Vercel → Cloudflare Workers. This drove several build/image-handling adjustments (image optimization disabled, Square images unoptimized, package renamed for Worker binding).

---

## 📈 SUCCESS METRICS

### Launch Goals
- [x] Site built with full product catalog from Square
- [x] Working checkout flow (Square)
- [x] Mobile-responsive
- [x] Accessibility baseline
- [ ] Live at sacredportalwellness.com (DNS cutover confirmed)
- [ ] Google Business Profile verified
- [ ] Professional email operational
- [ ] Lighthouse score 90+ (all categories) verified
- [ ] Debug exposure reverted

### Post-Launch (3 Months)
- [ ] 20+ Google reviews
- [ ] Ranking for "yoni steaming San Diego"
- [ ] Regular blog posts (2/month)
- [ ] Email list growth
- [ ] Conversion tracking

---

## 🔄 CHANGE LOG

**2026-04-08:**
- Added product detail pages at `/shop/[slug]` with image gallery, description, add-to-cart, and Product JSON-LD
- Sitemap now dynamically includes all Square products
- Improved alt text on transformation imagery for accessibility
- Extracted Square product fetching to a shared lib for reuse across shop list, detail pages, and sitemap

**2026-04-07 (later):**
- Pre-launch security pass:
  - `/checkout/success` now verifies the Square order before showing success (previously could be spoofed by direct visit)
  - CSRF defense added to `/api/checkout` and `/api/contact` via Origin header check
  - Removed broken in-memory rate limiter (didn't work across Worker isolates); rate limiting moved to Cloudflare WAF rule (30 req/min per IP on `/api/*`)
  - Removed `localhost:3000` fallback in checkout route
- Fixed long-broken shop deployment:
  - Diagnosed why shop showed "Products are loading soon" — `try/catch` swallowed Square errors and prerendered the empty state, which then got cached for a year
  - Added `wrangler.jsonc`, `open-next.config.ts`, and `@opennextjs/cloudflare`/`wrangler` dev deps so deploys are reproducible from this repo
  - Replaced silent error swallowing with `force-dynamic` + `revalidate = 0` and let errors propagate to the Next.js error boundary

**2026-04-07 (earlier):**
- Major status update — reconciled doc with actual git history
- Documented stack change (Vercel → Cloudflare Workers) and all build work

**2026-04-06:**
- Cloudflare Workers compat fixes, SEO + metadata pass, About page update

**2026-04-03:**
- Security, accessibility, dark mode, performance, error handling, CI added

**2026-04-01:**
- Client feedback round: homepage, nav, coaching, FAQ, testimonials

**2026-03-19:**
- Square e-commerce live, mobile header, contact form, first testimonial

**2026-03-12:**
- Phase 1 complete, initial site scaffold

---

## 📞 CONTACT

**Business Owner:** Amber Rodriguez
**Email:** aahmm9966@gmail.com
**Instagram:** @saacredportal
**Legacy Site:** https://sacredportalwellness.square.site/

---

## 🎯 CURRENT PRIORITY

**Focus:** Account setup (Google Workspace, GBP, GA), contact form delivery, final QA

**Critical path to public launch:**
1. Wire contact form to email delivery (Resend or Google Apps Script)
2. Google Workspace email accounts created
3. Google Business Profile submitted (long verification window — start now)
4. Real end-to-end Square checkout test with a real card
5. Lighthouse 90+ across all categories
6. Public announcement / soft launch

---

**Project Status:** ON TRACK ✅
**Next Milestone:** Contact form delivery + Google accounts in place
**Overall Progress:** ~88% Complete
