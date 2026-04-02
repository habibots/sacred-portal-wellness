# Phase 5: Build & Development

**Project:** Sacred Portal Wellness Website  
**Phase:** 5 of 9  
**Status:** Ready to Begin  
**Created:** March 12, 2026

---

## 📖 Quick Navigation

**Start Here:**
- [README.md](./README.md) - Phase overview (you are here)
- [00-START-HERE.md](./00-START-HERE.md) - Detailed getting started guide
- [01-repository-setup.md](./01-repository-setup.md) - Git, Next.js, and environment configuration
- [02-architecture.md](./02-architecture.md) - Project structure and technical architecture
- [03-design-system-implementation.md](./03-design-system-implementation.md) - Converting design tokens to code
- [04-square-integration.md](./04-square-integration.md) - Square Catalog, Orders, and Payments APIs
- [05-cart-checkout.md](./05-cart-checkout.md) - Shopping cart and checkout flow
- [06-shipping-delivery.md](./06-shipping-delivery.md) - Shipping rules and local delivery logic
- [07-performance-optimization.md](./07-performance-optimization.md) - Performance and caching strategies
- [08-deployment.md](./08-deployment.md) - Vercel deployment and staging setup

**Supporting Documents:**
- [PHASE-05-STATUS.md](./PHASE-05-STATUS.md) - Current status and progress tracking
- [implementation-checklist.md](./implementation-checklist.md) - Development checklist

**Folders:**
- `code-samples/` - Reference code examples and templates
- `specifications/` - Technical specifications and API documentation
- `assets/` - Architecture diagrams and reference materials

---

## 🎯 Phase 5 Overview

### What This Phase Accomplishes

Phase 5 builds the production-ready Next.js web application with:

- Secure Square e-commerce integration
- Responsive, accessible user interface
- Server-side rendering and optimal performance
- Complete shopping cart and checkout flow
- Shipping and local delivery logic
- Production deployment on Vercel

### Building on Previous Phases

**From Phase 1 (Discovery & Asset Collection):**
- ✅ Brand identity and visual direction
- ✅ Target audience and business requirements
- ✅ SEO strategy and keywords
- ✅ Product categories and structure

**From Phase 2 (Domain & Email Setup):**
- ✅ Domain: sacredportalwellness.com
- ✅ Email infrastructure
- ✅ Google Business Profile
- ✅ Square API credentials

**From Phase 3 (Brand & Design):**
- ✅ Complete design system with tokens
- ✅ Typography, colors, spacing specifications
- ✅ Component library designs
- ✅ Page mockups and layouts
- ✅ Accessibility requirements (WCAG 2.1 AA)

**From Phase 4 (Site Pages & Content):**
- ✅ Final sitemap and URL structure
- ✅ Production-ready content for all pages
- ✅ SEO metadata
- ✅ Internal linking strategy
- ✅ Policy and compliance content

### Why This Phase Matters

Phase 5 transforms all planning, design, and content into a working application. This is where:
- Design becomes interactive UI
- Content becomes dynamic pages
- Square integration enables commerce
- Performance optimization ensures fast load times
- Security measures protect customer data

---

## 📋 Phase 5 Deliverables

### 1. Repository & Environment
- ✅ Git repository with branch strategy
- ✅ Next.js App Router project bootstrapped
- ✅ All dependencies installed and configured
- ✅ Environment variables documented
- ✅ Linting, formatting, and testing baseline

### 2. Project Architecture
- ✅ App Router folder structure
- ✅ Server/Client component separation
- ✅ API routes for Square integration
- ✅ Utility libraries and helpers
- ✅ Type definitions (if using TypeScript)

### 3. Design System Implementation
- ✅ Tailwind configuration with design tokens
- ✅ CSS variables for theming
- ✅ Reusable component library
- ✅ Responsive breakpoints
- ✅ Accessibility patterns (focus, skip links, touch targets)

### 4. Page Templates & Content
- ✅ All page templates from Phase 4 content
- ✅ Dynamic metadata generation
- ✅ Schema markup placeholders
- ✅ Trust signals and credentials display

### 5. Square Integration
- ✅ Catalog API integration (products, categories, variants)
- ✅ Orders API integration (cart, checkout)
- ✅ Payments API integration (Web Payments SDK)
- ✅ Webhook handling for order updates
- ✅ Inventory and availability display

### 6. Shopping Experience
- ✅ Product listing pages with filtering
- ✅ Product detail pages with variant selection
- ✅ Shopping cart with persistence
- ✅ Checkout flow with payment form
- ✅ Order confirmation and error handling

### 7. Shipping & Delivery
- ✅ San Diego ZIP code validation for local delivery
- ✅ Shipping cost calculation
- ✅ Free local delivery threshold ($100+)
- ✅ Delivery method selection UI

### 8. Performance & Optimization
- ✅ Image optimization with next/image
- ✅ Font optimization and preloading
- ✅ Static and dynamic rendering strategy
- ✅ Caching and revalidation
- ✅ Bundle size optimization

### 9. Deployment
- ✅ Vercel project configuration
- ✅ Staging deployment with sandbox Square
- ✅ Production deployment ready
- ✅ Environment variables in Vercel
- ✅ Preview deployments per branch

---

## ⏱️ Timeline & Effort

**Estimated Duration:** 3-4 weeks

**Week 1: Foundation**
- Repository and environment setup
- Project architecture implementation
- Design system conversion to code
- Basic page templates

**Week 2: Square Integration**
- Catalog API integration
- Product listing and detail pages
- Shopping cart implementation
- Initial checkout flow

**Week 3: Commerce & Logic**
- Complete checkout with Payments SDK
- Shipping and delivery logic
- Order creation and validation
- Webhook handling

**Week 4: Optimization & Deployment**
- Performance optimization
- Accessibility validation
- Error handling and edge cases
- Staging deployment and testing

---

## 👥 Roles & Responsibilities

**Frontend Developer:**
- Component library implementation
- Page templates and layouts
- Responsive design implementation
- Client-side interactivity

**Backend Developer:**
- Square API integration
- Server-side validation
- Webhook handling
- Security implementation

**Full-Stack Developer:**
- End-to-end feature implementation
- API route development
- State management
- Testing and debugging

**DevOps/Deployment:**
- Vercel configuration
- Environment management
- CI/CD setup
- Monitoring and logging

**QA/Tester:**
- Functional testing
- Accessibility testing
- Cross-browser testing
- Performance validation

---

## 🔗 Dependencies

**Required Before Starting:**
- ✅ Phase 3 complete (design system finalized)
- ✅ Phase 4 complete (content production done)
- ✅ Square API credentials available
- ✅ Design tokens exported (design-tokens.json)
- ⚠️ Square product catalog populated
- ⚠️ Logo files ready for implementation

**Blocks Next Phases:**
- Phase 6 (SEO) requires working site for technical SEO
- Phase 7 (Testing) requires functional application
- Phase 8 (Launch) requires Phase 5 complete

---

## 📊 Success Criteria

Phase 5 is complete when:

- [ ] Staging site deployed and accessible
- [ ] All pages from Phase 4 implemented
- [ ] Square catalog syncs and displays correctly
- [ ] Shopping cart works across all scenarios
- [ ] Checkout completes successfully with test card
- [ ] Shipping/delivery logic matches specifications
- [ ] Performance baselines met (Lighthouse 90+)
- [ ] Accessibility checks pass (WCAG 2.1 AA)
- [ ] No secrets exposed client-side
- [ ] Error states handled gracefully
- [ ] Code reviewed and approved
- [ ] Documentation complete

---

## 🚀 Getting Started

1. **Read [00-START-HERE.md](./00-START-HERE.md)** for detailed phase overview
2. **Review [01-repository-setup.md](./01-repository-setup.md)** for environment setup
3. **Study [02-architecture.md](./02-architecture.md)** for project structure
4. **Follow implementation guides** in sequence (03-08)
5. **Track progress in [PHASE-05-STATUS.md](./PHASE-05-STATUS.md)**

---

## 📁 Folder Structure

```
phase-05/
├── README.md                              ← You are here
├── 00-START-HERE.md                       ← Detailed phase guide
├── 01-repository-setup.md                 ← Git and environment setup
├── 02-architecture.md                     ← Project structure
├── 03-design-system-implementation.md     ← Design tokens to code
├── 04-square-integration.md               ← Square APIs
├── 05-cart-checkout.md                    ← Shopping cart and checkout
├── 06-shipping-delivery.md                ← Shipping logic
├── 07-performance-optimization.md         ← Performance and caching
├── 08-deployment.md                       ← Vercel deployment
├── PHASE-05-STATUS.md                     ← Progress tracking
├── implementation-checklist.md            ← Development checklist
│
├── code-samples/                          ← Reference code
│   ├── tailwind.config.example.js         ← Tailwind config
│   ├── square-client.example.ts           ← Square API client
│   ├── cart-context.example.tsx           ← Cart state management
│   └── checkout-route.example.ts          ← Checkout API route
│
├── specifications/                        ← Technical specs
│   ├── api-endpoints.md                   ← API route specifications
│   ├── data-models.md                     ← Data structure definitions
│   ├── shipping-rules.md                  ← Shipping logic rules
│   └── security-requirements.md           ← Security checklist
│
└── assets/                                ← Supporting materials
    ├── architecture-diagram.md            ← System architecture
    ├── data-flow.md                       ← Data flow diagrams
    └── deployment-workflow.md             ← Deployment process
```

---

## 🔗 Related Phases

**Previous Phases:**
- [Phase 1: Discovery & Asset Collection](../phase-01/) - Brand and content assets
- [Phase 2: Domain & Email Setup](../phase-02/) - Infrastructure
- [Phase 3: Brand & Design](../phase-03/) - Design system
- [Phase 4: Site Pages & Content](../phase-04/) - Content production

**Current Phase:**
- Phase 5: Build & Development (you are here)

**Next Phases:**
- Phase 6: SEO & Search Optimization - Technical SEO implementation
- Phase 7: Testing - QA and validation
- Phase 8: Launch & Handoff - Go live
- Phase 9: Security & Final QC - Post-launch security

---

## 🛠️ Technology Stack

**Framework & Core:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript (recommended)

**Styling:**
- Tailwind CSS 3+
- CSS Variables for theming
- PostCSS

**Commerce:**
- Square Catalog API
- Square Orders API
- Square Payments API
- Square Web Payments SDK

**Validation & Security:**
- Zod (schema validation)
- Server-side validation
- Environment variable protection

**Hosting & Deployment:**
- Vercel (hosting)
- Git (version control)
- Preview deployments

**Development Tools:**
- ESLint (linting)
- Prettier (formatting)
- Testing framework (TBD)

---

## ⚠️ Critical Requirements

**Security:**
- Never expose Square access tokens client-side
- Always validate and sanitize user input
- Use idempotency keys for payment operations
- Verify webhook signatures
- Use HTTPS only

**Performance:**
- Lighthouse score 90+ (all categories)
- First Contentful Paint < 1.8s
- Time to Interactive < 3.8s
- Cumulative Layout Shift < 0.1

**Accessibility:**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus visibility
- Touch target sizing (44x44px minimum)

**Commerce:**
- Server-side price validation
- Idempotent checkout
- Graceful error handling
- Order confirmation emails (via Square)

---

**Phase 5 Status:** Ready to Begin  
**Next Step:** Read 00-START-HERE.md  
**Questions:** Contact development team

**Last Updated:** March 12, 2026
