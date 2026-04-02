# Phase 3 - Brand & Design

## Objective
Create an approved visual system and page-level design spec that is brand-accurate, accessible, and implementation-ready.

## Success Criteria
- Design direction clearly reflects brand goals (earthy, grounded, feminine, mystical + nursing authority).
- Typography, color, spacing, and component behavior are documented.
- Mockups exist for key breakpoints and key pages.
- Accessibility checks are passed at design stage (contrast, focus visibility, touch target sizing).

## Inputs Required
- Approved brand summary from Phase 1.
- Logo assets (transparent background).
- Inspiration references.
- Priority page list.

## Step-by-Step Tasks

### 1. Visual Direction Lock
1. Create moodboards with 2-3 visual directions.
2. Score each direction against brand adjectives and clarity of service communication.
3. Select final direction and document why it was chosen.

### 2. Typography System
1. Confirm primary and secondary font families (including license terms).
2. Define type scale for mobile and desktop:
- H1-H6.
- Body, small text, captions.
- Button/label styles.
3. Define line-height, letter-spacing, and max line length rules for readability.
4. Define fallback font stack in case custom font fails.

### 3. Color and Token System
1. Define primary/secondary/neutral palette with hex values.
2. Create semantic tokens:
- `--color-bg` / `--color-surface`.
- `--color-text-primary` / `--color-text-muted`.
- `--color-brand-primary` / `--color-accent`.
- `--color-success` / `--color-warning` / `--color-error`.
3. Validate color contrast combinations for AA compliance.
4. Document prohibited combinations (for example, low-contrast combinations).

### 4. Layout and Spacing System
1. Define responsive grid rules for mobile/tablet/desktop.
2. Set spacing scale and section rhythm.
3. Define container widths and maximum content widths.
4. Establish card/list/product grid behavior at each breakpoint.

### 5. Component Design Library
Design and document core components before page assembly:
- Header/navigation (desktop + mobile).
- Footer.
- Hero block.
- Product card.
- Product detail layout.
- CTA blocks.
- Testimonial cards.
- FAQ accordion.
- Form fields, errors, and success states.
- Buttons (default/hover/focus/disabled/loading).
- Badges (in stock, out of stock, coming soon).

For each component, include:
- Purpose.
- Variants.
- States.
- Accessibility notes.
- Content limits (max title length, etc.).

### 6. Page Mockups (High Fidelity)
Create high-fidelity mockups for:
- Homepage.
- Shop/category page.
- Product detail page.
- Coaching page.
- About page.
- FAQ page.
- Contact page.

Include mobile-first and desktop variants.

### 7. Motion and Interaction Design
1. Define motion primitives (fade, reveal, hover transitions).
2. Keep interaction timing consistent and subtle.
3. Define reduced-motion behavior (`prefers-reduced-motion`) for all animated patterns.
4. Specify keyboard and focus behavior for interactive components (menus, accordions, drawers).

### 8. Design-to-Dev Handoff Package
Produce a handoff file containing:
- Design tokens.
- Exported assets (SVG/PNG/WebP).
- Component behavior notes.
- Per-page annotations.
- Responsive and accessibility requirements.
- Open issues and approved exceptions.

## Deliverables
- Approved design system and component library.
- High-fidelity page designs for required templates.
- Developer-ready handoff documentation.

## Quality Control Checklist
- All key pages designed at mobile and desktop widths.
- Contrast and readability checks completed.
- Component states documented (including error/loading/empty).
- Design scope aligned to phase plan and implementation capacity.

## Risks and Mitigations
- Scope creep in visual experimentation: enforce design freeze before dev build.
- Unlicensed font use: verify licensing before adoption.
- Style inconsistency: enforce token usage instead of ad-hoc values.
