# Phase 5: Build & Development - START HERE

**Last Updated:** March 12, 2026  
**Phase Status:** Ready to Begin  
**Estimated Duration:** 3-4 weeks

---

## 🎯 What You'll Build in Phase 5

Phase 5 transforms all previous planning, design, and content work into a production-ready Next.js web application for Sacred Portal Wellness.

**End Result:** A fully functional e-commerce website with:
- Beautiful, accessible UI matching the approved design system
- Complete Square integration for product catalog and checkout
- Shopping cart with local delivery and shipping logic
- All content from Phase 4 implemented
- Deployed to Vercel staging environment
- Ready for testing (Phase 7) and launch (Phase 8)

---

## 📋 Prerequisites Checklist

Before starting Phase 5, confirm you have:

### From Previous Phases
- ✅ **Phase 3 Complete:** Design system finalized with design tokens
- ✅ **Phase 4 Complete:** All page content written and approved
- ✅ **Design Tokens:** `/planning/phase-03/design-tokens.json` available
- ✅ **Content Files:** All content in `/planning/phase-04/content/`

### Technical Requirements
- ✅ **Square API Credentials:**
  - Application ID
  - Access Token
  - Location ID
  - Webhook Signature Key (optional)
- ✅ **Development Environment:**
  - Node.js 18+ installed
  - Git installed
  - Code editor (VS Code recommended)
  - Terminal access
- ✅ **Accounts:**
  - GitHub account (for repository)
  - Vercel account (for deployment)
  - Square sandbox account (for testing)

### Assets Ready
- ⚠️ **Logo Files:** SVG/PNG (can add later if needed)
- ⚠️ **Product Data:** Square catalog populated
- ⚠️ **Product Images:** High-quality images in Square

---

## 🗺️ Phase 5 Roadmap

### Week 1: Foundation (Days 1-5)
**Goal:** Set up project infrastructure and basic structure

**Tasks:**
1. Create Git repository and clone locally
2. Bootstrap Next.js App Router project
3. Install and configure dependencies
4. Set up Tailwind CSS with design tokens
5. Create folder structure and architecture
6. Implement basic layout and navigation
7. Create reusable component library

**Deliverables:**
- Working Next.js app running locally
- Design system implemented in code
- Basic page templates rendering

---

### Week 2: Square Integration (Days 6-10)
**Goal:** Connect to Square APIs and display products

**Tasks:**
1. Set up Square API client utilities
2. Implement Catalog API integration
3. Create product listing pages
4. Create product detail pages
5. Handle variants and inventory
6. Implement image optimization
7. Add error handling for API failures

**Deliverables:**
- Products displaying from Square catalog
- Category/shop pages functional
- Product detail pages with variants
- Inventory status showing correctly

---

### Week 3: Cart & Checkout (Days 11-15)
**Goal:** Build complete shopping and checkout flow

**Tasks:**
1. Implement shopping cart state management
2. Add cart persistence (localStorage)
3. Build cart UI and calculations
4. Implement shipping/delivery logic
5. Integrate Square Web Payments SDK
6. Create checkout API route
7. Handle order creation and payment
8. Add confirmation and error states

**Deliverables:**
- Functional shopping cart
- Shipping cost calculation working
- Checkout flow complete
- Test orders processing successfully

---

### Week 4: Polish & Deploy (Days 16-20)
**Goal:** Optimize, test, and deploy to staging

**Tasks:**
1. Performance optimization (images, fonts, bundle)
2. Accessibility audit and fixes
3. Error handling and edge cases
4. Add loading states and skeletons
5. Implement SEO metadata
6. Set up Vercel project
7. Deploy to staging
8. Smoke test all major flows

**Deliverables:**
- Staging site live and accessible
- Performance benchmarks met
- Accessibility compliance verified
- All major flows tested and working

---

## 📚 Documentation Structure

Read these documents **in order** as you build:

### 1. **[01-repository-setup.md](./01-repository-setup.md)**
- Git repository creation
- Next.js project initialization
- Dependency installation
- Environment variable configuration
- Development server setup

### 2. **[02-architecture.md](./02-architecture.md)**
- App Router folder structure
- Server vs Client components
- API routes organization
- Utility libraries structure
- Type definitions (if using TypeScript)

### 3. **[03-design-system-implementation.md](./03-design-system-implementation.md)**
- Converting design tokens to Tailwind config
- Setting up CSS variables
- Building component library
- Implementing responsive breakpoints
- Accessibility patterns

### 4. **[04-square-integration.md](./04-square-integration.md)**
- Square API client setup
- Catalog API integration
- Product data normalization
- Image handling
- Error handling and retries

### 5. **[05-cart-checkout.md](./05-cart-checkout.md)**
- Cart state management
- Cart calculations (subtotal, shipping, tax)
- Checkout flow implementation
- Square Web Payments SDK integration
- Order creation and validation

### 6. **[06-shipping-delivery.md](./06-shipping-delivery.md)**
- San Diego ZIP code validation
- Shipping cost calculation
- Local delivery eligibility
- Free delivery threshold ($100+)
- User messaging and UI

### 7. **[07-performance-optimization.md](./07-performance-optimization.md)**
- Image optimization with next/image
- Font optimization and preloading
- Code splitting and lazy loading
- Caching strategies
- Bundle size optimization

### 8. **[08-deployment.md](./08-deployment.md)**
- Vercel project setup
- Environment variables in Vercel
- Staging deployment
- Preview deployments
- Production deployment preparation

---

## 🛠️ Development Workflow

### Daily Development Process

1. **Start of Day:**
   - Pull latest changes from Git
   - Review current task in checklist
   - Check PHASE-05-STATUS.md for progress

2. **During Development:**
   - Follow one implementation guide at a time
   - Test changes locally before committing
   - Write clear commit messages
   - Update status document as you complete tasks

3. **End of Day:**
   - Commit and push changes
   - Update PHASE-05-STATUS.md
   - Note any blockers or questions
   - Plan next day's tasks

### Testing Checklist (Run Frequently)

```bash
# Start development server
npm run dev

# Check for TypeScript errors (if using TS)
npm run type-check

# Run linter
npm run lint

# Build for production (test for build errors)
npm run build
```

### Key Testing Scenarios

Test these flows regularly during development:

1. **Product Browsing:**
   - Navigate to shop page
   - Filter/search products
   - View product details
   - Select variants

2. **Shopping Cart:**
   - Add items to cart
   - Update quantities
   - Remove items
   - Cart persists on page reload

3. **Checkout:**
   - Enter shipping address
   - Validate ZIP code for local delivery
   - See correct shipping cost
   - Enter test card details
   - Complete order successfully

4. **Error Handling:**
   - Test with invalid card
   - Test with network offline
   - Test with empty cart
   - Test with out-of-stock items

---

## 🔑 Environment Variables Reference

Create a `.env.local` file in your project root:

```bash
# Square API Configuration
SQUARE_ACCESS_TOKEN=your_sandbox_access_token
SQUARE_APP_ID=your_app_id
SQUARE_LOCATION_ID=your_location_id
SQUARE_ENV=sandbox
SQUARE_WEBHOOK_SIGNATURE_KEY=your_webhook_key

# Public Variables (exposed to browser)
NEXT_PUBLIC_SQUARE_APP_ID=your_app_id
NEXT_PUBLIC_SQUARE_LOCATION_ID=your_location_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: For development
NODE_ENV=development
```

**Security Notes:**
- Never commit `.env.local` to Git
- Add `.env.local` to `.gitignore`
- Only `NEXT_PUBLIC_*` variables are exposed to browser
- Keep access tokens server-side only

---

## 📊 Success Metrics

Track these metrics throughout Phase 5:

### Functionality
- [ ] All pages from Phase 4 implemented
- [ ] Products load from Square catalog
- [ ] Cart operations work correctly
- [ ] Checkout completes successfully
- [ ] Orders appear in Square dashboard

### Performance (Lighthouse Scores)
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Accessibility (WCAG 2.1 AA)
- [ ] Color contrast ratios pass
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Touch targets 44x44px minimum

### Security
- [ ] No secrets in client-side code
- [ ] Server-side validation on all inputs
- [ ] HTTPS only (in production)
- [ ] Webhook signatures verified
- [ ] Idempotency keys used for payments

---

## 🚨 Common Pitfalls to Avoid

### 1. **Exposing Secrets Client-Side**
❌ **Wrong:**
```javascript
// In a Client Component
const accessToken = process.env.SQUARE_ACCESS_TOKEN; // Exposed!
```

✅ **Right:**
```javascript
// In a Server Component or API Route
const accessToken = process.env.SQUARE_ACCESS_TOKEN; // Safe
```

### 2. **Not Validating Server-Side**
❌ **Wrong:**
```javascript
// Only client-side validation
const handleCheckout = (cart) => {
  // Send directly to API
};
```

✅ **Right:**
```javascript
// Server-side validation in API route
export async function POST(request) {
  const body = await request.json();
  const validated = checkoutSchema.parse(body); // Validate!
  // Then process...
}
```

### 3. **Forgetting Idempotency**
❌ **Wrong:**
```javascript
// No idempotency key - duplicate charges possible
await paymentsApi.createPayment({ ... });
```

✅ **Right:**
```javascript
// With idempotency key - safe retries
await paymentsApi.createPayment({
  idempotencyKey: uuidv4(),
  ...
});
```

### 4. **Hard-Coding Values**
❌ **Wrong:**
```javascript
const shippingCost = 5.99; // Hard-coded
```

✅ **Right:**
```javascript
const shippingCost = calculateShipping(address, cart); // Dynamic
```

---

## 🆘 Getting Help

### When You're Stuck

1. **Check Documentation:**
   - Review relevant implementation guide
   - Check code samples in `/code-samples/`
   - Review specifications in `/specifications/`

2. **Review Examples:**
   - Next.js documentation: https://nextjs.org/docs
   - Square API docs: https://developer.squareup.com
   - Tailwind CSS docs: https://tailwindcss.com

3. **Debug Systematically:**
   - Check browser console for errors
   - Check terminal for server errors
   - Use `console.log()` to trace data flow
   - Test API calls in isolation

4. **Common Issues:**
   - **Build errors:** Check for TypeScript/syntax errors
   - **API errors:** Verify environment variables
   - **Styling issues:** Check Tailwind config
   - **Routing issues:** Verify App Router folder structure

---

## 📈 Progress Tracking

Update **[PHASE-05-STATUS.md](./PHASE-05-STATUS.md)** daily with:

- Tasks completed
- Current blockers
- Questions or decisions needed
- Estimated completion date
- Next steps

Use **[implementation-checklist.md](./implementation-checklist.md)** to track:

- Detailed task completion
- Feature implementation status
- Testing status
- Code review status

---

## 🎯 Ready to Start?

### Your First Steps:

1. ✅ **Read this document completely** (you're almost done!)
2. ✅ **Verify prerequisites** are met
3. ✅ **Read [01-repository-setup.md](./01-repository-setup.md)**
4. ✅ **Create your Git repository**
5. ✅ **Bootstrap Next.js project**
6. ✅ **Update PHASE-05-STATUS.md** with start date

### Quick Start Commands:

```bash
# Create Next.js app
npx create-next-app@latest sacred-portal-website

# Navigate to project
cd sacred-portal-website

# Install additional dependencies
npm install @square/web-sdk zod

# Start development server
npm run dev
```

---

## 📞 Questions?

- **Technical Issues:** Review implementation guides
- **Design Questions:** Reference Phase 3 design system
- **Content Questions:** Reference Phase 4 content files
- **Square API Issues:** Check Square developer documentation
- **Deployment Issues:** Review Vercel documentation

---

**You're ready to build! Start with [01-repository-setup.md](./01-repository-setup.md)** 🚀

**Last Updated:** March 12, 2026
