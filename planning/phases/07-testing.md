# Phase 7 - Testing (QA, Accessibility, Performance, Security)

## Objective
Run full pre-launch validation across functionality, UX, accessibility, SEO, performance, and security so the release is predictable and low-risk.

## Success Criteria
- Critical user flows pass on target devices/browsers.
- Checkout and payment paths are stable and error-safe.
- Accessibility and performance targets are met.
- Security hardening and vulnerability checks are completed with no unresolved critical findings.

## Test Environments
- Local dev.
- Staging (Square sandbox).
- Production-like prelaunch environment.

## Step-by-Step Tasks

### 1. Test Plan and Coverage Matrix
1. Create `test-matrix.md` listing all pages, flows, and expected outcomes.
2. Tag each case by severity (`critical`, `high`, `medium`, `low`).
3. Define release blockers (all critical/high defects must be resolved).

### 2. Functional Testing
Test each core flow end-to-end:
- Browse homepage to product listing.
- Open product page and select variants.
- Add/remove/update cart quantities.
- Enter checkout and submit payment.
- Receive success/failure states correctly.
- Navigate coaching funnel and contact pathways.

Edge cases:
- Empty cart checkout attempt.
- Out-of-stock item handling.
- Double-click submit on checkout.
- Session refresh during checkout.
- Invalid shipping ZIP.
- Boundary case at free-delivery threshold.

### 3. Payment and Commerce Validation
1. Validate Square sandbox payment success scenarios.
2. Validate failure scenarios:
- Declined card.
- Expired card.
- Network/API timeout.
- Invalid token payload.
3. Confirm idempotency prevents duplicate charges.
4. Confirm order records and amounts match cart calculations.
5. Confirm policy text appears correctly in checkout/product pages.

### 4. Accessibility Testing (WCAG 2.1 AA Target)
1. Automated checks:
- Lighthouse accessibility audit.
- Axe scan on key templates.
2. Manual checks:
- Full keyboard navigation.
- Focus visibility and order.
- Skip link behavior.
- Form label/error announcements.
- Screen-reader sanity pass (VoiceOver baseline).
3. Visual checks:
- Contrast compliance.
- 200% zoom usability.
- Mobile touch target size.

### 5. Responsive and Browser Testing
Test page templates and key flows at minimum breakpoints:
- 320, 375/390, 768, 1024, 1280+.

Browser/device coverage:
- Safari (iOS/macOS).
- Chrome (Android/macOS/Windows).
- Edge (Windows).

Confirm:
- Navigation, modals/drawers, accordions, checkout forms, and sticky CTAs work correctly.

### 6. Performance and Core Web Vitals
1. Run Lighthouse on key templates.
2. Verify targets:
- LCP <= 2.5s.
- INP <= 200ms.
- CLS <= 0.1.
3. Validate image optimization and lazy loading.
4. Re-test after performance fixes.

### 7. SEO and Structured Data Validation
1. Verify metadata presence on all indexable pages.
2. Validate schema with rich results tools.
3. Verify canonical tags and sitemap output.
4. Crawl site for broken links and redirect errors.

### 8. Security and Hardening Checks
1. Verify HTTPS and HSTS behavior.
2. Validate security headers:
- Content-Security-Policy.
- X-Content-Type-Options.
- Referrer-Policy.
- X-Frame-Options or equivalent framing policy.
3. Confirm no secrets in client bundles or repo history.
4. Validate server-side input validation on checkout/API routes.
5. Validate rate limiting on sensitive endpoints.
6. Confirm webhook signature validation for incoming Square events.
7. Run dependency vulnerability scan (`npm audit` or equivalent).
8. Confirm auth/MFA on Cloudflare, Vercel, Google, Square admin accounts.
9. Validate SPF/DKIM/DMARC for email domain security.

### 9. Defect Triage and Regression
1. Log findings in a centralized bug tracker.
2. Triage by severity and assign owners.
3. Re-test fixed defects.
4. Run focused regression on impacted areas.

### 10. Client UAT and Signoff
1. Walk through key flows with stakeholder.
2. Capture final content and UX adjustments.
3. Obtain explicit signoff for launch.

## Deliverables
- Completed test matrix.
- Defect log with resolution status.
- Performance and accessibility reports.
- Security checklist with pass/fail outcomes.
- Final UAT signoff.

## Release Gate (Must Pass)
- No open critical or high-severity defects.
- Checkout success and failure paths validated.
- Structured data validates for launch-critical pages.
- Security checks have no unresolved critical findings.
- Stakeholder launch approval recorded.

## Risks and Mitigations
- Late-breaking regressions: enforce code freeze window and regression pass.
- Third-party API instability: predefine user-facing fallback messaging.
- Accessibility regressions: rerun automated + manual checks after UI changes.
