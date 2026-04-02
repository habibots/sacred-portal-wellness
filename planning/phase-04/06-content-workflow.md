# Phase 4: Content Workflow & Approval Process

**Project:** Sacred Portal Wellness Website  
**Document:** 06 - Editorial Workflow  
**Status:** Ready for Implementation  
**Created:** March 12, 2026

---

## 📖 TABLE OF CONTENTS

1. [Overview](#overview)
2. [Content Production Workflow](#content-production-workflow)
3. [Review & Approval Process](#review--approval-process)
4. [Status Definitions](#status-definitions)
5. [Roles & Responsibilities](#roles--responsibilities)
6. [Quality Control](#quality-control)
7. [Revision Tracking](#revision-tracking)

---

## 🎯 OVERVIEW

### Purpose

This document defines the editorial workflow for Phase 4 content production, ensuring all content is reviewed, approved, and ready for development before Phase 5 begins.

### Workflow Goals

1. **Quality Assurance** - All content meets brand and technical standards
2. **Compliance** - Health claims and disclaimers are reviewed
3. **Consistency** - Brand voice is uniform across all pages
4. **Efficiency** - Clear process prevents bottlenecks
5. **Accountability** - Roles and responsibilities are defined

---

## 📝 CONTENT PRODUCTION WORKFLOW

### 8-Step Process

```
1. Content Brief → 2. First Draft → 3. Self-Review → 4. Peer Review → 
5. Compliance Review → 6. Stakeholder Review → 7. Revisions → 8. Final Approval
```

---

### Step 1: Content Brief

**Owner:** Content Strategist

**Deliverable:** Content brief document

**Activities:**
- Define page purpose and goals
- Identify target audience
- Select primary and secondary keywords
- List required sections
- Note character limits from design system
- Specify CTAs needed
- Identify trust signals required

**Template:**
```markdown
# Content Brief: [Page Name]

**Page URL:** /[slug]
**Priority:** Critical/High/Medium/Low
**Target Audience:** [Description]
**Primary Keyword:** [Keyword]
**Secondary Keywords:** [List]

## Purpose
[What this page accomplishes]

## Required Sections
1. [Section 1]
2. [Section 2]
3. [Section 3]

## Character Limits
- H1: 60 char max
- Hero: 200 char max
- [Other limits]

## CTAs
- Primary: [CTA text and destination]
- Secondary: [CTA text and destination]

## Trust Signals
- [Credentials, testimonials, etc.]

## Internal Links
- [Link to page 1]
- [Link to page 2]
- [Link to page 3]

## Notes
[Any special considerations]
```

**Status After:** Draft (Brief)

---

### Step 2: First Draft

**Owner:** Copywriter

**Deliverable:** Complete page content in Markdown format

**Activities:**
- Write all required sections
- Integrate keywords naturally
- Stay within character limits
- Include all CTAs
- Add internal links
- Embed trust signals
- Follow brand voice guidelines

**Quality Checks:**
- [ ] All sections from brief included
- [ ] Character limits respected
- [ ] Keywords integrated naturally
- [ ] CTAs clear and compelling
- [ ] Internal links added (3-5 minimum)
- [ ] Brand voice consistent
- [ ] Grammar and spelling checked

**File Location:** `content/pages/[page-slug]-draft.md`

**Status After:** Draft (Content)

---

### Step 3: Self-Review

**Owner:** Copywriter

**Deliverable:** Self-reviewed draft

**Activities:**
- Read content aloud
- Check against content brief
- Verify character limits
- Test internal links
- Review for clarity and flow
- Check grammar and spelling
- Ensure brand voice consistency

**Self-Review Checklist:**
- [ ] Content matches brief requirements
- [ ] All sections present and complete
- [ ] Character limits respected
- [ ] Keywords integrated naturally (not stuffed)
- [ ] CTAs are clear and actionable
- [ ] Internal links work and are relevant
- [ ] Brand voice is consistent
- [ ] No typos or grammatical errors
- [ ] Content flows logically
- [ ] Headings follow hierarchy (H1 → H2 → H3)

**Status After:** In Review (Self)

---

### Step 4: Peer Review

**Owner:** Content Strategist or SEO Specialist

**Deliverable:** Peer-reviewed draft with feedback

**Activities:**
- Review content for accuracy
- Check SEO optimization
- Verify internal linking strategy
- Assess brand voice alignment
- Provide constructive feedback
- Suggest improvements

**Peer Review Checklist:**
- [ ] Content is accurate and factual
- [ ] SEO best practices followed
- [ ] Keywords integrated effectively
- [ ] Internal links are strategic
- [ ] Brand voice is on-target
- [ ] Content structure is logical
- [ ] CTAs are optimized for conversion
- [ ] No content gaps or redundancies

**Feedback Format:**
```markdown
## Peer Review: [Page Name]

**Reviewer:** [Name]
**Date:** [Date]

### Strengths
- [What works well]

### Suggestions
- [Specific improvements]

### Required Changes
- [Must-fix items]

### Approval Status
[ ] Approved
[ ] Approved with minor changes
[ ] Needs revision
```

**Status After:** In Review (Peer)

---

### Step 5: Compliance Review

**Owner:** Compliance Reviewer (or designated team member)

**Deliverable:** Compliance-approved content

**Activities:**
- Review all health claims
- Verify evidence-based language
- Check disclaimer placement
- Ensure credential accuracy
- Validate policy content
- Flag any compliance issues

**Compliance Checklist:**
- [ ] No absolute medical claims ("cures," "treats," "prevents")
- [ ] Evidence-based language used ("may help," "supports")
- [ ] Disclaimers present where required
- [ ] Credentials displayed accurately (RN, BSN, HC-NC)
- [ ] Product claims are reasonable
- [ ] Coaching disclaimers included
- [ ] Policy language is clear and accurate
- [ ] No misleading statements

**Red Flags:**
- ❌ "Cures hormone imbalances"
- ❌ "Guaranteed results"
- ❌ "FDA-approved" (unless true)
- ❌ "Medical treatment"
- ❌ Unsupported health claims

**Green Light:**
- ✅ "May help support hormone balance"
- ✅ "Results vary by individual"
- ✅ "Not evaluated by FDA" (for products)
- ✅ "Coaching is not medical treatment"
- ✅ Evidence-based claims with disclaimers

**Status After:** In Review (Compliance)

---

### Step 6: Stakeholder Review

**Owner:** Stakeholder (Amber)

**Deliverable:** Stakeholder-approved content

**Activities:**
- Review content for brand alignment
- Validate personal story accuracy
- Approve tone and messaging
- Provide feedback on any concerns
- Give final approval or request revisions

**Stakeholder Review Questions:**
- Does this sound like me?
- Is the information accurate?
- Does this represent my approach?
- Am I comfortable with these claims?
- Are the CTAs appropriate?
- Does this feel authentic?

**Feedback Format:**
```markdown
## Stakeholder Review: [Page Name]

**Date:** [Date]

### What I Love
- [Positive feedback]

### Concerns/Questions
- [Items to discuss]

### Requested Changes
- [Specific edits]

### Approval
[ ] Approved - ready for development
[ ] Approved with minor changes (list below)
[ ] Needs revision (schedule follow-up review)

### Notes
[Additional comments]
```

**Status After:** In Review (Stakeholder)

---

### Step 7: Revisions

**Owner:** Copywriter

**Deliverable:** Revised content incorporating all feedback

**Activities:**
- Incorporate peer review feedback
- Address compliance issues
- Make stakeholder-requested changes
- Re-check all quality standards
- Update status

**Revision Tracking:**
- Document all changes made
- Note which feedback was incorporated
- Flag any feedback not incorporated (with reason)
- Version control (v1, v2, v3, etc.)

**Status After:** Draft (Revised)

**Note:** May loop back to Step 4, 5, or 6 if significant changes made

---

### Step 8: Final Approval

**Owner:** Content Strategist + Stakeholder

**Deliverable:** Production-ready content

**Activities:**
- Final quality check
- Confirm all feedback incorporated
- Verify file formatting
- Package for development
- Update status to "Approved"

**Final Approval Checklist:**
- [ ] All review feedback incorporated
- [ ] Compliance approved
- [ ] Stakeholder approved
- [ ] File properly formatted (Markdown)
- [ ] Saved to final content folder
- [ ] Metadata complete
- [ ] Internal links verified
- [ ] Status updated to "Approved"

**File Location:** `content/pages/[page-slug].md` (final version)

**Status After:** Approved - Ready for Development

---

## 📊 STATUS DEFINITIONS

### Draft (Brief)
- **Meaning:** Content brief created, not yet written
- **Owner:** Content Strategist
- **Next Step:** Write first draft

### Draft (Content)
- **Meaning:** First draft written, not yet reviewed
- **Owner:** Copywriter
- **Next Step:** Self-review

### In Review (Self)
- **Meaning:** Self-review in progress
- **Owner:** Copywriter
- **Next Step:** Peer review

### In Review (Peer)
- **Meaning:** Peer review in progress
- **Owner:** Content Strategist or SEO Specialist
- **Next Step:** Compliance review

### In Review (Compliance)
- **Meaning:** Compliance review in progress
- **Owner:** Compliance Reviewer
- **Next Step:** Stakeholder review

### In Review (Stakeholder)
- **Meaning:** Stakeholder review in progress
- **Owner:** Stakeholder (Amber)
- **Next Step:** Revisions or approval

### Draft (Revised)
- **Meaning:** Revisions made, awaiting re-review
- **Owner:** Copywriter
- **Next Step:** Re-review (peer, compliance, or stakeholder)

### Approved
- **Meaning:** Final approval received, ready for development
- **Owner:** Content Strategist
- **Next Step:** Package for Phase 5

### On Hold
- **Meaning:** Blocked by missing information (e.g., pricing, product data)
- **Owner:** Content Strategist
- **Next Step:** Wait for blocker to be resolved

---

## 👥 ROLES & RESPONSIBILITIES

### Content Strategist

**Responsibilities:**
- Create content briefs
- Manage workflow and timeline
- Conduct peer reviews
- Track status of all pages
- Coordinate with team
- Package final content for development

**Deliverables:**
- Content briefs for all pages
- Peer review feedback
- Status tracking updates
- Final content package

---

### Copywriter

**Responsibilities:**
- Write first drafts
- Conduct self-reviews
- Incorporate feedback
- Make revisions
- Ensure brand voice consistency
- Meet deadlines

**Deliverables:**
- First drafts for all pages
- Revised drafts
- Final approved content

---

### SEO Specialist

**Responsibilities:**
- Review keyword integration
- Optimize metadata
- Verify internal linking
- Provide SEO feedback
- Create metadata matrix

**Deliverables:**
- SEO review feedback
- Metadata for all pages
- Internal linking recommendations

---

### Compliance Reviewer

**Responsibilities:**
- Review health claims
- Verify disclaimers
- Check credential accuracy
- Ensure policy compliance
- Flag compliance issues

**Deliverables:**
- Compliance review feedback
- Approved disclaimer language
- Policy page content

---

### Stakeholder (Amber)

**Responsibilities:**
- Review and approve all content
- Provide feedback on brand voice
- Validate personal story accuracy
- Make final approval decisions
- Provide missing information (pricing, etc.)

**Deliverables:**
- Stakeholder review feedback
- Final approvals
- Missing content (when available)

---

## ✅ QUALITY CONTROL

### Content Quality Standards

**Brand Voice:**
- Warm but professional
- Educational without being preachy
- Empowering
- Authentic
- Earthy, grounded, feminine

**Readability:**
- 8th grade reading level
- Short paragraphs (2-4 sentences)
- Bullet points for scannability
- Clear headings
- Active voice

**SEO:**
- Keywords integrated naturally
- Descriptive headings
- Internal links (3-5 minimum)
- Unique meta descriptions
- Optimized for target keywords

**Compliance:**
- Evidence-based health claims
- Required disclaimers present
- Accurate credentials
- Clear policy language
- No misleading statements

**Technical:**
- Proper Markdown formatting
- Character limits respected
- All required sections present
- CTAs clearly defined
- Internal links functional

---

### Quality Assurance Checklist

**Before marking content "Approved":**

- [ ] Brand voice is consistent
- [ ] Readability is appropriate
- [ ] SEO best practices followed
- [ ] Compliance requirements met
- [ ] Technical specifications met
- [ ] All reviews completed
- [ ] All feedback incorporated
- [ ] Stakeholder approval received
- [ ] File properly formatted
- [ ] Saved to correct location

---

## 📈 REVISION TRACKING

### Version Control

**File Naming:**
```
[page-slug]-v1.md (first draft)
[page-slug]-v2.md (after peer review)
[page-slug]-v3.md (after compliance review)
[page-slug].md (final approved version)
```

**Version Log:**
```markdown
# Version History: [Page Name]

## v1 - [Date]
- First draft completed
- Reviewer: [Name]

## v2 - [Date]
- Incorporated peer review feedback
- Changes: [Summary of changes]
- Reviewer: [Name]

## v3 - [Date]
- Incorporated compliance feedback
- Changes: [Summary of changes]
- Reviewer: [Name]

## Final - [Date]
- Stakeholder approved
- Status: Ready for development
```

---

### Feedback Tracking

**Feedback Log:**
```markdown
# Feedback Log: [Page Name]

## Peer Review - [Date]
**Reviewer:** [Name]
**Feedback:**
1. [Feedback item 1]
2. [Feedback item 2]

**Status:** Incorporated / Not Incorporated (reason)

## Compliance Review - [Date]
**Reviewer:** [Name]
**Feedback:**
1. [Feedback item 1]
2. [Feedback item 2]

**Status:** Incorporated / Not Incorporated (reason)

## Stakeholder Review - [Date]
**Reviewer:** [Name]
**Feedback:**
1. [Feedback item 1]
2. [Feedback item 2]

**Status:** Incorporated / Not Incorporated (reason)
```

---

## 📅 TIMELINE & MILESTONES

### Week 1: Foundation
- Days 1-2: Create content briefs for all pages
- Days 3-5: Write first drafts for core pages (Homepage, Coaching, About)

**Milestone:** 3 core pages drafted

---

### Week 2: Production
- Days 6-7: Complete remaining page drafts
- Days 8-9: Self-review and peer review
- Day 10: Compliance review

**Milestone:** All pages drafted and reviewed

---

### Week 3: Approval
- Days 11-12: Stakeholder review
- Days 13-14: Revisions and re-reviews
- Day 15: Final approvals and packaging

**Milestone:** Phase 4 complete, ready for Phase 5

---

## 🎯 SUCCESS METRICS

**Phase 4 is successful when:**

- [ ] 100% of core pages have approved content
- [ ] 100% of pages have complete metadata
- [ ] 0 orphan pages (all pages linked)
- [ ] 0 compliance issues flagged
- [ ] 100% stakeholder approval rate
- [ ] All content packaged for development
- [ ] Phase 4 completed on schedule

---

## 📦 FINAL DELIVERABLE PACKAGE

### Content Package for Phase 5

**Folder Structure:**
```
content/
├── pages/
│   ├── homepage.md
│   ├── shop.md
│   ├── coaching.md
│   ├── about.md
│   ├── yoni-steaming.md
│   ├── faq.md
│   ├── contact.md
│   ├── testimonials.md
│   ├── disclaimer.md
│   ├── returns.md
│   ├── shipping.md
│   └── privacy.md
│
├── metadata/
│   └── metadata-matrix.csv
│
└── assets/
    ├── sitemap.xml
    ├── url-map.csv
    ├── redirect-map.csv
    └── internal-links.csv
```

**Handoff Checklist:**
- [ ] All page content files present
- [ ] Metadata matrix complete
- [ ] Sitemap files created
- [ ] URL mapping documented
- [ ] Redirect mapping documented
- [ ] Internal linking mapped
- [ ] README with instructions
- [ ] Status report updated

---

## ✅ WORKFLOW CHECKLIST

**Setup:**
- [ ] Content briefs created for all pages
- [ ] Team roles assigned
- [ ] Timeline established
- [ ] Status tracking system set up

**Production:**
- [ ] All pages drafted
- [ ] Self-reviews completed
- [ ] Peer reviews completed
- [ ] Compliance reviews completed
- [ ] Stakeholder reviews completed

**Finalization:**
- [ ] All revisions incorporated
- [ ] All pages approved
- [ ] Metadata complete
- [ ] Files properly formatted
- [ ] Content packaged for development

**Handoff:**
- [ ] Phase 5 team notified
- [ ] Handoff meeting scheduled
- [ ] Questions addressed
- [ ] Phase 4 marked complete

---

**Document Status:** Ready for Implementation  
**Next Steps:** Begin content production workflow

**Last Updated:** March 12, 2026
