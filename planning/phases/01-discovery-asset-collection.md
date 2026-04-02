# Phase 1 - Discovery & Asset Collection

## Objective
Create a complete, validated source package (content, media, product data, legal/trust copy, and brand references) so design and development can proceed without blockers.

## Success Criteria
- Every required page has source content or a documented gap.
- Every sellable product has complete data (name, price, images, policy text, inventory status).
- Testimonial and credential usage is approved in writing.
- Asset folders are organized, versioned, and ready for implementation.

## Inputs Required
- Current Square site URL and Square dashboard access (or collaborator access).
- Current logo files and brand assets.
- Coaching offer source document(s).
- Testimonial source files (including PDF from R.S.).
- Current social handles and business profile links.

## Folder Structure To Create
Use this structure under `/planning/assets`:

```text
assets/
  brand/
    logo/
    colors/
    fonts/
  copy/
    homepage/
    coaching/
    about/
    legal/
    faq/
  products/
    exports/
    images/
    descriptions/
  testimonials/
  social/
  approvals/
```

## Step-by-Step Tasks

### 1. Kickoff Inventory
1. Create a discovery checklist file (`phase-01-checklist.md`) and assign an owner/date for each line item.
2. Define the canonical source of truth for each data type:
- Product data: Square Catalog.
- Brand direction: approved logo/colors/typography references.
- Coaching offer: latest approved coaching doc.
- Testimonials: approved client-provided text/PDF.
3. Define file naming convention (`YYYY-MM-DD_asset-name_version.ext`).

### 2. Current Site Content Capture
1. Crawl the current site navigation and list all pages/sections.
2. Copy all current text into raw markdown files in `/assets/copy`.
3. Capture screenshots of each current page for content/context reference.
4. Mark each section as `reuse`, `rewrite`, or `new`.

### 3. Product Data Extraction (Square)
1. Export product catalog from Square (or retrieve via API export).
2. For each product, capture:
- Product name.
- Category.
- Price.
- Variants/options.
- SKU (if present).
- Inventory state.
- Current description.
- Current image set.
3. Flag missing fields (missing descriptions, low-quality images, missing ingredients or usage details).
4. Confirm policy mapping per product category:
- Yoni seats: no returns/exchanges.
- Steam blends/salves/creams: returns/exchanges allowed.
- Coaching: case-by-case.

### 4. Media Collection and Quality Gate
1. Collect all brand/product/coaching images into `/assets/.../images`.
2. For each image, record:
- Source file name.
- Intended page/component.
- Rights/ownership (owned/licensed/client-provided).
- Alt text draft.
3. Run quality check:
- Sharp and readable at mobile and desktop breakpoints.
- No visible compression artifacts.
- No white-box logo background.
4. Create a `replace-needed` list for weak images.

### 5. Brand Signal Capture
1. Document approved brand signals:
- Color palette (hex values).
- Typography preferences.
- Visual motifs (moss/forest/vines/sacred geometry).
- Tone keywords (earthy, grounded, feminine, trustworthy).
2. Capture competitor/inspiration references and annotate what to emulate vs avoid.
3. Save a one-page brand summary for design and copy teams.

### 6. Testimonial and Trust Asset Preparation
1. Convert testimonial source files into clean, web-ready text.
2. Standardize testimonial format:
- Client initial/name style.
- Age display convention.
- Quote length variants (short/medium/long).
3. Create compliance notes (no unverifiable medical claims).
4. Confirm testimonial usage approval in writing.

### 7. Credentials, Legal, and Compliance Inputs
1. Confirm credential formatting: `RN, BSN, HC-NC`.
2. Capture disclaimers from current site and mark updates needed.
3. Draft/collect required legal/trust pages source text:
- Disclaimer.
- Return & Exchange policy.
- Contact method policy.
4. Create a health-content claim review list (claims requiring citation/support).

### 8. Content Gap Analysis
1. Compare required future sitemap to captured content.
2. Create `missing-content.md` with owner and deadline per gap.
3. Prioritize missing items by criticality:
- Blocker (cannot build page).
- Important (build possible, copy pending).
- Optional (can launch without).

### 9. Approval Packet
1. Produce a single `Phase-1-Approval.md` containing:
- Asset inventory summary.
- Missing content list.
- Open decisions.
- Proposed next-phase start criteria.
2. Get explicit signoff before moving to Phase 2.

## Quality Control Checklist
- No broken/missing source files.
- Every page has draft source copy.
- Every product has usable core metadata.
- Testimonial text is proofread and approved.
- All files stored in agreed structure.

## Exit Deliverables
- Organized asset repository under `/planning/assets`.
- Content inventory matrix (`reuse/rewrite/new`).
- Product completeness report.
- Approved testimonial package.
- Signed Phase 1 approval note.

## Risks and Mitigations
- Missing product media: launch with priority products first and schedule replacements.
- Inconsistent social handles: confirm canonical handle before Phase 4 content lock.
- Unapproved claims: hold related copy until validated/reworded.
