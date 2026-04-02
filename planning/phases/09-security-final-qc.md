# Phase 9 - Security Final QC (Hardening & Compliance Gate)

## Objective
Run a dedicated final security and compliance gate after functional QA and before long-term maintenance handoff.

## Success Criteria
- No unresolved critical/high security issues.
- Payment and API flows are hardened against common abuse patterns.
- Privacy and legal baseline documents are present and aligned to actual data practices.
- Security operations checklist is documented for ongoing maintenance.

## Scope
- Application security.
- API and payment security.
- Infrastructure and account security.
- Dependency and supply-chain checks.
- Privacy baseline checks.

## Step-by-Step Tasks

### 1. Threat Surface Review
1. Enumerate public attack surface:
- Public pages/routes.
- API endpoints.
- Webhook endpoints.
- Third-party integrations.
2. Identify sensitive operations:
- Checkout.
- Order creation.
- Payment processing.
- Admin/provider account access.
3. Confirm least-privilege access for all integrations.

### 2. OWASP-Oriented Application Checks
Validate controls for common web risks:
1. Broken access control (no privileged actions exposed publicly).
2. Cryptographic failures (HTTPS everywhere, secure secrets handling).
3. Injection protection (strict validation/sanitization for all API input).
4. Insecure design checks (idempotency, abuse limits, error safety).
5. Security misconfiguration (headers, CORS, disabled debug data).
6. Vulnerable components (dependency scanning and patching).
7. Identification/auth failures (MFA on admin systems).
8. Software integrity checks (trusted deployment workflow).
9. Logging/monitoring sufficiency (alerts for repeated failures/anomalies).

### 3. API and Payment Hardening
1. Ensure Square secrets are server-side only.
2. Confirm checkout route re-computes totals server-side.
3. Confirm idempotency keys on order/payment creation.
4. Confirm rate limiting on checkout and webhook endpoints.
5. Confirm webhook signature verification is enforced.
6. Confirm error responses do not leak internals/secrets.

### 4. Security Headers and Browser Controls
1. Verify CSP policy and third-party script allowlist.
2. Verify `X-Content-Type-Options: nosniff`.
3. Verify frame embedding controls.
4. Verify strict referrer policy.
5. Verify HSTS behavior on production domain.

### 5. Account and Infrastructure Security
1. Confirm MFA on Cloudflare, Vercel, Google, Square.
2. Confirm least-privilege role assignments.
3. Confirm emergency recovery owners and recovery methods.
4. Confirm domain lock and DNSSEC remain enabled.
5. Confirm email auth records remain valid (SPF, DKIM, DMARC).

### 6. Dependency and Build Security
1. Run dependency vulnerability scans.
2. Patch critical/high issues.
3. Verify lockfile integrity and reproducible build behavior.
4. Verify no sensitive files are included in build output.

### 7. Privacy and Compliance Baseline
1. Confirm published policy pages reflect real behavior:
- Privacy policy.
- Disclaimer.
- Return/exchange policy.
2. Confirm data minimization (store only needed customer data).
3. Confirm process for customer data requests/deletion inquiries.
4. Confirm cookie/tracking disclosures align with actual analytics usage.

### 8. Incident Readiness and Backup Plan
1. Create incident response checklist:
- Detection.
- Triage.
- Containment.
- Recovery.
- Communication.
2. Define rollback trigger criteria and owner.
3. Document contact list for critical systems/vendors.

### 9. Final Security Signoff
1. Compile `security-final-report.md` with findings and resolutions.
2. Record residual risks and owners.
3. Get explicit signoff from project owner before close.

## Deliverables
- Security final report.
- Resolved vulnerability log.
- Security operations checklist (monthly/quarterly tasks).
- Incident response and rollback runbook.

## Monthly Ongoing Checklist
- Review failed login and suspicious activity alerts.
- Re-run dependency scans and patch.
- Verify backups/recovery details are current.
- Review DMARC reports and email abuse signals.
- Re-test checkout critical path after major updates.

## Risks and Mitigations
- New third-party vulnerabilities: schedule recurring patch windows.
- Credential exposure risk: enforce key rotation and secret hygiene.
- Policy drift risk: revalidate published legal/policy pages quarterly.
