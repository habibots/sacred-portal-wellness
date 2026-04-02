# Phase 6 - SEO & Search Optimization

## Objective
Implement technical, on-page, local, and structured-data SEO so the site can rank for target local and niche terms while maintaining health-content trust standards.

## Success Criteria
- Indexable pages have complete metadata and schema.
- Keyword strategy is mapped page-by-page with no cannibalization.
- Google Business Profile is active and optimized.
- Local SEO foundation is in place (citations, service area pages, reviews workflow).

## Inputs Required
- Approved content from Phase 4.
- Implemented templates/pages from Phase 5.
- Keyword tiers and business priorities from research review.

## Step-by-Step Tasks

### 1. Keyword-to-Page Mapping
1. Build a keyword map spreadsheet with columns:
- Primary keyword.
- Secondary keywords.
- Search intent.
- Target URL.
- Content type.
- Priority tier.
2. Assign one primary keyword per page to reduce cannibalization.
3. Lock the final mapping before metadata writing.

### 2. On-Page Optimization
For each indexable page:
1. Write SEO title within practical display limits.
2. Write compelling meta description aligned to intent.
3. Ensure one clear H1 and logical H2/H3 hierarchy.
4. Optimize intro paragraph for primary keyword relevance.
5. Add internal links to related products/services/educational pages.
6. Add descriptive image alt text and filenames.

### 3. Technical SEO Baseline
1. Generate XML sitemap (include canonical indexable URLs only).
2. Configure `robots.txt` with sitemap location.
3. Set canonical URLs for all pages.
4. Ensure noindex on non-public or duplicate pages.
5. Ensure clean URL strategy and redirect legacy pages.
6. Validate crawlability with a site crawler.

### 4. Structured Data (Schema) Implementation
Implement JSON-LD for relevant page types.

Required at launch:
- `HealthAndBeautyBusiness` (or appropriate LocalBusiness subtype).
- `Product` for each ecommerce product.
- `Service` for coaching offer.
- `Review` where valid testimonial/review data exists.
- `FAQPage` for FAQ content.
- `BreadcrumbList` for navigational clarity.

For each schema type, validate:
- Required properties are present.
- URLs are absolute.
- Values match visible page content.
- No misleading ratings or unsupported review claims.

Run validation in:
- Google Rich Results Test.
- Schema validator.

### 5. Local SEO Execution
1. Finalize Google Business Profile fields:
- Primary category.
- Service list.
- Service areas.
- Business description.
- Contact and website.
2. Build review acquisition workflow:
- Ask timing.
- Ask template.
- Response SOP for positive/negative reviews.
3. Publish initial GBP posts and establish recurring cadence.
4. Build and submit local citations consistently:
- Yelp.
- Apple Business Connect.
- Bing Places.
- Relevant wellness/local directories.
5. Ensure NAP consistency where NAP is used.

### 6. YMYL and Trust Optimization
1. Ensure credentials (`RN, BSN, HC-NC`) are visible in key trust zones.
2. Include author attribution on health-related blog content.
3. Add disclaimers where content could be interpreted as medical advice.
4. Add citations or references when making health-support claims.

### 7. Content Engine Setup (Blog + Educational)
1. Build 90-day editorial calendar tied to keyword tiers.
2. Prioritize quick-win topics first (local + niche intent).
3. Define blog template requirements:
- Title strategy.
- Summary/excerpt.
- Heading structure.
- FAQ section where relevant.
- Internal links.
- CTA placement.
4. Establish publish cadence and owner responsibilities.

### 8. Performance SEO Alignment
1. Verify Core Web Vitals targets:
- LCP <= 2.5s.
- INP <= 200ms.
- CLS <= 0.1.
2. Optimize heavy media and JS that affect search performance.
3. Re-test after each major template update.

### 9. Search Console and Analytics Readiness
1. Verify domain property in Google Search Console.
2. Submit sitemap.
3. Configure GA4 events for key conversions:
- Coaching CTA click.
- Add to cart.
- Begin checkout.
- Purchase success.
4. Build weekly SEO reporting dashboard.

## Deliverables
- Keyword map and page targeting matrix.
- Full metadata set.
- Valid structured data across required page types.
- Live GBP optimization + citation list.
- 90-day content calendar.

## Quality Control Checklist
- No page missing title/meta/canonical.
- No schema errors on launch-critical pages.
- No conflicting keyword targets between core pages.
- GBP listing complete and verified.
- Search Console sitemap accepted.

## Risks and Mitigations
- Over-optimization risk: maintain natural copy and user-first structure.
- Citation inconsistency: use one canonical business format across listings.
- Health claim risk: enforce claim review before publication.
