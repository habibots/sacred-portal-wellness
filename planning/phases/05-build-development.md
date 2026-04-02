# Phase 5 - Build & Development

## Objective
Build the production web application with secure Square integration, responsive UX, and maintainable architecture.

## Success Criteria
- Staging site fully functional across all required pages.
- Catalog sync, cart, checkout, and order creation work end-to-end.
- Shipping and local delivery rules are implemented exactly as defined.
- Performance, accessibility, and security baselines are met.

## Technology Baseline
- Framework: Next.js (App Router).
- Hosting: Vercel.
- Styling: Tailwind CSS + design tokens.
- Commerce: Square Catalog, Orders, Payments APIs + Web Payments SDK.
- Analytics: GA4 + Search Console (configured in launch phase).

## Step-by-Step Tasks

### 1. Repository and Environment Setup
1. Create/confirm git repository and branch strategy (`main`, `develop`, feature branches).
2. Bootstrap Next.js App Router project.
3. Install core dependencies:
- `next`, `react`, `react-dom`.
- `tailwindcss`, `postcss`, `autoprefixer`.
- `zod` (input validation).
- `@square/web-sdk` (client payment SDK usage pattern) or Square web payments loader strategy.
4. Add linting/formatting/testing baseline.
5. Create `.env.example` with required variables only.

Suggested env variables:

```bash
SQUARE_ACCESS_TOKEN=
SQUARE_APP_ID=
SQUARE_LOCATION_ID=
SQUARE_ENV=production
SQUARE_WEBHOOK_SIGNATURE_KEY=
NEXT_PUBLIC_SQUARE_APP_ID=
NEXT_PUBLIC_SQUARE_LOCATION_ID=
NEXT_PUBLIC_SITE_URL=
```

6. Store actual secrets only in Vercel environment settings.

### 2. Project Architecture (App Router)
Implement clear folder structure:

```text
src/
  app/
    (marketing)/
    shop/
    product/[slug]/
    coaching/
    faq/
    blog/
    contact/
    api/
      checkout/route.ts
      catalog/route.ts
      webhook/square/route.ts
  components/
  lib/
    square/
    seo/
    content/
    validation/
  styles/
```

Rules:
- Use Server Components by default for data-driven pages.
- Use Client Components only where interactivity is required (cart UI, checkout form, accordions, drawers).
- Keep Square secret usage strictly server-side.

### 3. Design System Implementation
1. Convert approved design tokens into Tailwind theme config and CSS variables.
2. Build reusable components from Phase 3 specs.
3. Implement responsive behavior at approved breakpoints.
4. Implement global accessibility patterns:
- Skip link.
- Visible focus ring.
- 44x44 minimum touch targets.
- Reduced-motion support.

### 4. Content and Page Template Build
1. Build all page templates from finalized Phase 4 content model.
2. Implement metadata generation per page (title, description, canonical, OG).
3. Add schema placeholders per page type (finalized in Phase 6).
4. Add shared trust block (credentials/disclaimer context) where required.

### 5. Square Catalog Integration
1. Build server utilities for Square API calls.
2. Implement catalog fetch layer:
- Categories.
- Products/items.
- Variants.
- Availability state.
3. Normalize Square response into app model.
4. Handle image mapping and fallback logic.
5. Implement category/shop listing pages with pagination/filtering as needed.

### 6. Product Detail and Inventory UX
1. Build product detail pages using dynamic routes (`product/[slug]`).
2. Show variant selection and stock state.
3. Disable purchase action when unavailable.
4. Surface policy snippets (shipping/returns) clearly on each product.

### 7. Cart Architecture
1. Implement client-side cart state (Context or store library).
2. Persist cart in local storage.
3. Prevent duplicate line-item race conditions.
4. Implement cart calculations:
- Subtotal.
- Shipping.
- Local delivery fee.
- Free local delivery threshold (>$100).
- Taxes placeholder/integration strategy.
5. Validate cart integrity on checkout submit.

### 8. Shipping and Local Delivery Logic
1. Define delivery eligibility dataset (approved San Diego ZIP list).
2. Build utility to classify destination:
- Local delivery eligible.
- Standard shipping eligible.
- Unsupported.
3. Apply pricing rules consistently in cart and checkout summary.
4. Add clear user-facing messaging for threshold and eligibility.

### 9. Checkout Integration (Square Web Payments SDK)
1. Render secure payment form client-side via Square Web Payments SDK.
2. Tokenize payment details in client.
3. Submit token + cart payload to secure server route (`/api/checkout`).
4. In server route:
- Validate payload with schema.
- Recalculate totals server-side.
- Create Square order.
- Create payment using idempotency key.
- Return success/failure response with user-safe messaging.
5. Implement failure handling for:
- Declined card.
- Network timeout.
- Invalid payload.
- Duplicate submission.

### 10. Webhooks and Order Reliability
1. Add optional Square webhook route for order/payment status sync.
2. Verify webhook signatures before processing.
3. Log webhook events with correlation IDs.
4. Ensure idempotent handling for repeated webhook deliveries.

### 11. Caching and Rendering Strategy
1. Static rendering for mostly static marketing pages.
2. Revalidation strategy for catalog/product pages (time-based or tag-based revalidation).
3. Dynamic rendering for checkout/cart APIs.
4. Ensure no-store behavior on sensitive transactional responses.

### 12. Performance Optimization
1. Use `next/image` with properly sized responsive images.
2. Use lazy loading for non-critical images.
3. Preload critical fonts and set safe font-display behavior.
4. Minimize client JavaScript on non-interactive pages.
5. Audit bundle size and remove unused dependencies.

### 13. Observability and Error Handling
1. Add structured error logging for API failures.
2. Add user-friendly UI error states across cart/checkout/forms.
3. Add monitoring alerts for repeated checkout failures.
4. Add fallback UI for temporary Square outage states.

### 14. Staging Deployment
1. Configure Vercel preview deployments per branch.
2. Deploy staging with sandbox Square credentials.
3. Run staging smoke test for all major flows.
4. Promote to production only after Phase 7 signoff.

## Deliverables
- Production-ready codebase.
- Staging deployment with end-to-end commerce flow.
- Documented env vars and runbook.
- Known issues list and remediation status.

## Quality Control Checklist
- No secret keys exposed client-side.
- Checkout is idempotent and server-validated.
- Shipping logic matches policy exactly.
- Critical pages pass responsive and accessibility checks.
- Error states are handled and tested.

## Risks and Mitigations
- API dependency outages: add graceful fallback messaging and retry-safe logic.
- Catalog data inconsistency: normalize and validate server-side.
- Checkout duplication risk: enforce idempotency and button locking.
