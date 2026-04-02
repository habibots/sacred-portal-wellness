# Phase 8 - Launch & Handoff

## Objective
Execute controlled production launch, validate live behavior, and hand operational ownership to the client with clear runbooks.

## Success Criteria
- Domain points to live site without major downtime.
- Production checkout and critical flows work in live environment.
- Monitoring and analytics are active.
- Client receives complete handoff documentation and access map.

## Inputs Required
- Phase 7 signoff.
- Approved release candidate build.
- DNS/admin access (Cloudflare, Vercel, Google, Square).

## Step-by-Step Tasks

### 1. Launch Readiness Review
1. Confirm all release gate criteria are passed.
2. Confirm rollback plan exists and owners are assigned.
3. Confirm support window schedule for first 72 hours.
4. Freeze non-launch feature changes.

### 2. Production Environment Verification
1. Verify production env vars in Vercel.
2. Verify production Square credentials and location IDs.
3. Confirm analytics IDs, site URL env vars, and webhook endpoints.
4. Run a final smoke test in prelaunch environment.

### 3. DNS Cutover
1. Lower DNS TTL in advance (if needed) for smoother cutover.
2. Update production DNS records to Vercel targets.
3. Verify SSL certificate issuance and HTTPS response.
4. Confirm apex and `www` behavior (redirect policy as defined).
5. Monitor propagation and re-check from multiple networks.

### 4. Live Smoke Testing (Immediately Post-Cutover)
Run these tests in production:
1. Homepage and key navigation links.
2. Shop and product detail pages.
3. Cart and checkout with live-safe test procedure.
4. Contact pathways (email links/forms).
5. Coaching CTA and conversion route.
6. Metadata/schema spot checks.

### 5. Tracking and Search Setup
1. Confirm GA4 data collection in real time.
2. Verify Search Console property and submit sitemap.
3. Confirm robots/canonical behavior is correct in production.
4. Create baseline KPI snapshot for week 1.

### 6. Post-Launch Monitoring Window (First Week)
Monitor daily for:
- Checkout failures.
- 404/500 errors.
- Unexpected layout regressions.
- Performance drops.
- Email delivery issues.
- GBP listing/website link accuracy.

Track issues in `post-launch-log.md` with severity and owner.

### 7. Client Handoff Package
Provide documentation for:
- Product updates in Square.
- Blog publishing workflow.
- Review response workflow.
- Basic SEO hygiene checklist.
- Account access matrix and credential ownership.
- Incident and rollback process.

Deliver short operational SOPs for weekly/monthly maintenance.

### 8. Knowledge Transfer Session
1. Run live walkthrough with client.
2. Demonstrate top workflows:
- Update product details.
- Publish a blog post.
- Check analytics dashboard.
- Respond to reviews.
3. Record session notes and FAQs.

### 9. Hypercare Completion and Closeout
1. Resolve week-1 launch issues.
2. Confirm stable operation.
3. Close out launch report with lessons learned and next-phase recommendations.

## Deliverables
- Live production website.
- Launch validation report.
- Post-launch issue log.
- Handoff documentation bundle.
- Signed project transition note.

## Quality Control Checklist
- All critical conversion flows pass in production.
- Analytics and search tooling verified.
- Client has access to all required platforms.
- Documentation is complete and understandable.

## Risks and Mitigations
- DNS propagation delays: keep old site fallback and monitor closely.
- Production-only bugs: maintain rapid fix branch and hotfix protocol.
- Ownership confusion: include explicit access and responsibility matrix.
