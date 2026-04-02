# Phase 1 - Discovery & Asset Collection Checklist

**File Naming Convention:** `YYYY-MM-DD_asset-name_version.ext`

## 1. Kickoff Inventory

- [ ] Define canonical source of truth for product data (Square Catalog)
- [ ] Define canonical source of truth for brand direction (logo/colors/typography)
- [ ] Define canonical source of truth for coaching offers
- [ ] Define canonical source of truth for testimonials
- [ ] Assign owner and date for each checklist item

## 2. Current Site Content Capture

- [ ] Crawl current site navigation and list all pages/sections
- [ ] Copy all current text into raw markdown files in `/assets/copy`
- [ ] Capture screenshots of each current page
- [ ] Mark each section as `reuse`, `rewrite`, or `new`

## 3. Product Data Extraction (Square)

- [ ] Export product catalog from Square
- [ ] For each product, capture:
  - [ ] Product name
  - [ ] Category
  - [ ] Price
  - [ ] Variants/options
  - [ ] SKU (if present)
  - [ ] Inventory state
  - [ ] Current description
  - [ ] Current image set
- [ ] Flag missing fields (descriptions, images, ingredients, usage details)
- [ ] Confirm policy mapping per product category:
  - [ ] Yoni seats: no returns/exchanges
  - [ ] Steam blends/salves/creams: returns/exchanges allowed
  - [ ] Coaching: case-by-case

## 4. Media Collection and Quality Gate

- [ ] Collect all brand/product/coaching images into `/assets/.../images`
- [ ] For each image, record:
  - [ ] Source file name
  - [ ] Intended page/component
  - [ ] Rights/ownership (owned/licensed/client-provided)
  - [ ] Alt text draft
- [ ] Run quality check:
  - [ ] Sharp and readable at mobile and desktop breakpoints
  - [ ] No visible compression artifacts
  - [ ] No white-box logo background
- [ ] Create `replace-needed` list for weak images

## 5. Brand Signal Capture

- [ ] Document approved brand signals:
  - [ ] Color palette (hex values)
  - [ ] Typography preferences
  - [ ] Visual motifs (moss/forest/vines/sacred geometry)
  - [ ] Tone keywords (earthy, grounded, feminine, trustworthy)
- [ ] Capture competitor/inspiration references
- [ ] Annotate what to emulate vs avoid
- [ ] Save one-page brand summary for design and copy teams

## 6. Testimonial and Trust Asset Preparation

- [ ] Convert testimonial source files into clean, web-ready text
- [ ] Standardize testimonial format:
  - [ ] Client initial/name style
  - [ ] Age display convention
  - [ ] Quote length variants (short/medium/long)
- [ ] Create compliance notes (no unverifiable medical claims)
- [ ] Confirm testimonial usage approval in writing

## 7. Credentials, Legal, and Compliance Inputs

- [ ] Confirm credential formatting: `RN, BSN, HC-NC`
- [ ] Capture disclaimers from current site and mark updates needed
- [ ] Draft/collect required legal/trust pages source text:
  - [ ] Disclaimer
  - [ ] Return & Exchange policy
  - [ ] Contact method policy
- [ ] Create health-content claim review list (claims requiring citation/support)

## 8. Content Gap Analysis

- [ ] Compare required future sitemap to captured content
- [ ] Create `missing-content.md` with owner and deadline per gap
- [ ] Prioritize missing items by criticality (blocker/important/optional)

## 9. Approval Packet

- [ ] Produce `Phase-1-Approval.md` containing:
  - [ ] Asset inventory summary
  - [ ] Missing content list
  - [ ] Open decisions
  - [ ] Proposed next-phase start criteria
- [ ] Get explicit signoff before moving to Phase 2

## Quality Control Checklist

- [ ] No broken/missing source files
- [ ] Every page has draft source copy
- [ ] Every product has usable core metadata
- [ ] Testimonial text is proofread and approved
- [ ] All files stored in agreed structure

## Exit Deliverables

- [ ] Organized asset repository under `/planning/assets`
- [ ] Content inventory matrix (`reuse/rewrite/new`)
- [ ] Product completeness report
- [ ] Approved testimonial package
- [ ] Signed Phase 1 approval note

---

**Owner:** _________________  
**Start Date:** _________________  
**Target Completion:** _________________  
**Actual Completion:** _________________
