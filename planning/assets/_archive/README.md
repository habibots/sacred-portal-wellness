# Asset Organization Guide

This directory contains all source materials collected during Phase 1 (Discovery & Asset Collection) for the Sacred Portal website project.

## File Naming Convention

**Standard Format:** `YYYY-MM-DD_asset-name_version.ext`

**Examples:**
- `2026-03-12_logo-primary_v1.svg`
- `2026-03-12_homepage-hero_draft.md`
- `2026-03-12_product-yoni-seat_final.jpg`

## Directory Structure

```
assets/
├── brand/                    # Brand identity assets
│   ├── logo/                # Logo files (SVG, PNG, etc.)
│   ├── colors/              # Color palette references
│   └── fonts/               # Typography files and references
├── copy/                    # Written content
│   ├── homepage/            # Homepage text and messaging
│   ├── coaching/            # Coaching service descriptions
│   ├── about/               # About page content
│   ├── legal/               # Legal pages (disclaimer, policies)
│   └── faq/                 # FAQ content
├── products/                # Product-related assets
│   ├── exports/             # Square catalog exports (CSV, JSON)
│   ├── images/              # Product photography
│   └── descriptions/        # Product copy and details
├── testimonials/            # Client testimonials and reviews
├── social/                  # Social media assets and handles
└── approvals/               # Signed approval documents

```

## Asset Types and Requirements

### Brand Assets
- **Logo:** Vector format (SVG) preferred, high-res PNG backup
- **Colors:** Hex values documented, accessibility contrast ratios checked
- **Fonts:** Web-safe formats (WOFF2, WOFF) with licensing confirmed

### Copy Assets
- **Format:** Markdown (.md) for easy editing and version control
- **Status Tags:** Mark each file as `reuse`, `rewrite`, or `new`
- **Metadata:** Include author, date, approval status in frontmatter

### Product Data
- **Source of Truth:** Square Catalog
- **Required Fields:** Name, category, price, variants, SKU, inventory, description, images
- **Policy Mapping:** Document return/exchange rules per category

### Media Assets
- **Images:** Minimum 1200px width for product photos
- **Quality:** Sharp, no compression artifacts, proper lighting
- **Rights:** Document ownership/licensing for each image
- **Alt Text:** Draft accessibility descriptions for all images

### Testimonials
- **Format:** Clean text, standardized structure
- **Approval:** Written consent required before use
- **Compliance:** No unverifiable medical claims
- **Variants:** Short (1-2 sentences), medium (paragraph), long (full story)

## Quality Gates

### Before Adding Assets
1. File follows naming convention
2. Placed in correct directory
3. Rights/ownership documented
4. Quality standards met (resolution, clarity, format)

### Before Phase Completion
1. All checklist items completed
2. Content gaps documented in `missing-content.md`
3. Approval packet (`Phase-1-Approval.md`) filled out
4. No broken or missing source files
5. Explicit signoff obtained

## Working Files

- **`phase-01-checklist.md`** - Master task list for Phase 1
- **`missing-content.md`** - Content gap analysis and tracking
- **`Phase-1-Approval.md`** - Approval packet for phase completion

## Content Status Definitions

- **REUSE:** Existing content that can be used as-is
- **REWRITE:** Existing content that needs editing/improvement
- **NEW:** Content that needs to be created from scratch

## Priority Levels

- **BLOCKER:** Cannot build page without this content
- **IMPORTANT:** Build possible, copy pending
- **OPTIONAL:** Can launch without

## Version Control

- Keep previous versions when making significant changes
- Increment version number in filename (v1, v2, v3)
- Document changes in commit messages or change log

## Handoff to Next Phase

Phase 1 is complete when:
1. All blocker content gaps are resolved
2. Product data export is complete and validated
3. Testimonial approvals are documented
4. Brand assets are organized and accessible
5. `Phase-1-Approval.md` is signed

**Next Phase:** Phase 2 - Domain & Email Accounts

---

**Archived Phase 1 Files**

These files have been superseded by the new organized structure and are kept for historical reference only.

**Do not use these files for building the website.**

---

## Archived Files

The following files are outdated and replaced by the new structure:

### Replaced by `02-WHAT-WE-HAVE.md`:
- `PHASE-1-SUMMARY.md`
- `PHASE-1-FINAL-STATUS.md`
- `CONTENT-EXTRACTION-COMPLETE.md`

### Replaced by `03-WHAT-WE-NEED.md`:
- `WHAT-WE-HAVE-VS-WHAT-WE-NEED.md`
- `missing-content.md`

### Replaced by `00-START-HERE.md`:
- `README.md` (old version)

### Templates (not needed for reference):
- `Phase-1-Approval.md`
- `phase-01-checklist.md`

---

## Use the New Structure Instead

**For navigation:** `00-START-HERE.md`  
**For quick facts:** `01-QUICK-REFERENCE.md`  
**For asset inventory:** `02-WHAT-WE-HAVE.md`  
**For missing items:** `03-WHAT-WE-NEED.md`

---

**Last Updated:** March 12, 2026 - Domain & Email Accounts

---

**Questions?** Refer to `/planning/phases/01-discovery-asset-collection.md` for detailed phase documentation.
