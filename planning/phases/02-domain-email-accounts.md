# Phase 2 - Domain, Email & Accounts

## Objective
Establish production-ready identity and account infrastructure: domain, DNS, email, Google Business Profile, and Square developer credentials.

## Success Criteria
- Domain resolves correctly and is controlled by project owners.
- Google Workspace mailboxes send/receive reliably with SPF, DKIM, and DMARC configured.
- Google Business Profile is verified as a Service Area Business with no public home address.
- Square developer app is created with secure production credentials stored server-side only.

## Inputs Required
- Final domain decision: `sacredportalwellness.com`.
- Cloudflare account access.
- Google Workspace admin setup access.
- Google account for GBP ownership.
- Square business + developer account access.

## Step-by-Step Tasks

### 1. Domain Registration and Registrar Lockdown
1. Register `sacredportalwellness.com` at Cloudflare Registrar.
2. Enable domain auto-renew.
3. Verify registrar contact email is current.
4. Enable registrar lock/transfer protection.
5. Record purchase date, renewal date, registrar account owner, and recovery methods in `domain-ops.md`.

### 2. DNS Baseline Setup (Cloudflare)
1. Add domain to Cloudflare DNS zone.
2. Set nameservers if required and confirm propagation.
3. Create baseline records:
- `A`/`AAAA` or `CNAME` for production website target.
- `www` CNAME pointing to apex or hosting target.
- TXT verification records needed by Vercel/Google.
4. Enable DNSSEC and confirm status is active.
5. Document TTL strategy (shorter TTL during launch week, standard TTL after stabilization).

### 3. Google Workspace Setup (2 Primary Mailboxes)
1. Start Google Workspace Business Starter for the domain.
2. Verify domain ownership in Google Admin.
3. Create users:
- `business@sacredportalwellness.com`
- `info@sacredportalwellness.com`
4. Configure required MX records in Cloudflare.
5. Configure SPF TXT record.
6. Enable DKIM in Google Admin and publish DKIM TXT record.
7. Configure DMARC policy record (`p=none` for warm-up, then tighten to `quarantine`/`reject` after validation).
8. Test inbound and outbound mail to/from both accounts.
9. Enable 2-step verification for all mailbox users.

### 4. Email Operations Hardening
1. Configure recovery email/phone for each mailbox.
2. Create role-based forwarding rules if needed (for example, route website contact form alerts to `business@`).
3. Turn on suspicious login alerts.
4. Document mailbox ownership and offboarding process.
5. Create a monthly mailbox health checklist (delivery issues, spam rate, DMARC reports).

### 5. Google Business Profile (Service Area Business)
1. Create or claim the GBP listing.
2. During setup, select service-area business flow (no public storefront).
3. Enter service regions (San Diego + relevant Southern California areas).
4. Complete verification method provided by Google.
5. After verification, confirm public profile does not expose home address.
6. Add business details:
- Business name.
- Primary category + supporting categories.
- Services/offers.
- Business description.
- Hours/contact options.
- Website URL (once live).
7. Upload logo and initial photo set.
8. Create first GBP update post and build cadence (weekly/biweekly).

### 6. Square Developer Setup
1. Confirm Square Developer account access.
2. Create a new Square application for this website.
3. Configure environments:
- Sandbox for development testing.
- Production for live payments/orders.
4. Capture and store securely:
- Application ID.
- Access token(s).
- Location ID.
- Webhook signature key (if webhooks are used).
5. Configure permissions/scopes to least privilege needed.
6. Document rotation process for secrets.

### 7. Secret Management and Access Control
1. Create `.env.example` with variable names only (no secrets).
2. Store actual secrets in Vercel project environment variables.
3. Confirm no production secrets exist in git history.
4. Restrict account/admin access to named owners only.
5. Enable MFA on Cloudflare, Google, Vercel, and Square accounts.

### 8. Verification Tests
Run these checks before closing the phase:
1. `dig`/DNS lookup checks for A/CNAME/MX/TXT correctness.
2. Email tests for both new mailboxes (send, receive, SPF/DKIM pass).
3. GBP public profile check (service area visible, street address hidden).
4. Square API smoke test from a secure server route (catalog fetch in sandbox).

## Deliverables
- Domain + DNS configured and documented.
- Two working Google Workspace mailboxes.
- Verified GBP SAB profile with initial content.
- Square developer app + secure credential vault setup.
- `accounts-access-matrix.md` with owner/admin responsibilities.

## Quality Control Checklist
- DNSSEC enabled.
- SPF, DKIM, DMARC present and validated.
- 2FA enforced on all critical accounts.
- No secrets in repo.
- Production and sandbox credentials separated.

## Risks and Mitigations
- DNS misconfiguration risk: change one record at a time and validate after each change.
- Email deliverability issues: start DMARC in monitor mode, then harden gradually.
- Account lockout: maintain two trusted admin owners with recovery methods.
