# Security Incident Report — sacred-portal-wellness — 2026-05-07

## Summary
Square production credentials (`SQUARE_ACCESS_TOKEN`, `SQUARE_APPLICATION_ID`, `SQUARE_LOCATION_ID`) were stored in a developer-local `.env.local` whose containing repo was not gitignored against `.env*` until the initial setup; production rotation is being treated as Critical out of an abundance of caution.

## Timeline (UTC)
- 2026-03-20 00:37 — `.env.example` committed in `5db4b47564ae3cd6acb1b7c48ec2a20dedb21775` ("Add Square e-commerce integration and deploy readiness") establishing the variable names. NOTE: a search of the full reflog (`git log --all --diff-filter=A`) confirms that only `.env.example` was ever committed; `.env.local` itself does NOT appear in any reachable commit. The Critical severity is retained because (a) the existing `.gitignore` allowed `.env*` from project inception so any earlier accidental add would have been blocked, but the developer's local file lived on a workstation reachable by the same process that pushed code, and (b) we do not yet have evidence that the local file's contents never reached a transient surface (CI logs, stderr captures, screenshots, etc.).
- 2026-05-07 HH:MM — Detected via manual review during DevOps hardening sweep (audit of secret-storage practice, not a confirmed leak).
- 2026-05-07 HH:MM — Rotation completed (Square Developer Dashboard → application → rotate access token).
- 2026-05-07 HH:MM — History rewrite force-pushed (precautionary; no `.env.local` was found in history, so this was a no-op for that path; `git filter-repo --replace-text` was still run against the rotated literal as a belt-and-braces measure).
- 2026-05-07 HH:MM — Collaborators notified.
- 2026-05-07 HH:MM — GitHub Support ticket opened to purge PR caches (precautionary).

## Scope
- Secret type: Square **production** access token, application ID, location ID
- Exposure window: from token issuance (Square dashboard) to <rotation time> = <N hours/days>; treat as the full lifetime of the token because we cannot prove the local-file boundary held.
- Repo visibility during window: public
- Forks at time of detection: <N> (list URLs)

## Evidence of (non-)abuse
- Square Developer Dashboard → Payments → **ListPayments** API was reviewed for the entire exposure window; cross-reference each `payment.id` against the application's order ledger and the linked bank settlement report. Document anomalies (settled amount > ledger amount, geographic outliers, unfamiliar `note` fields) here.
- Square webhook delivery log reviewed for the same window; any delivery to an unfamiliar endpoint URL is suspicious.
- Square Catalog API audit log (if available on the plan tier) reviewed for `UpsertCatalogObject` / `BatchDeleteCatalogObjects` activity outside business hours.
- Bank settlement report reconciled against internal order ledger for the window; any unreconciled credits or debits are escalated.

## Remediation
- Rotated the Square access token via Square Developer Dashboard → Applications → Production → Credentials → "Replace access token". Old token revoked.
- Updated runtime: pushed new token via `wrangler secret put SQUARE_ACCESS_TOKEN` against the Cloudflare Workers production environment; verified deployment fetched the new value (test order in Square sandbox first, then live $0.01 charge on production, then refund).
- History rewrite: ran `tools/scripts/scrub-secrets.sh` with `--replace-text` against the rotated literal as a precaution; no `.env.local` path was found in history.
- Force-pushed to `origin`; all collaborators advised to delete their clones and re-clone.

## Root cause
Production-scope Square credentials were kept in a developer's `.env.local` file on a workstation that also held a clone with push access. The original `.gitignore` (`.env*` line) DID prevent any commit-level exposure, so this is a **practice** failure (locally-stored production secrets) rather than a confirmed git-level leak. The decision to rotate is driven by an inability to prove the negative across the full token lifetime.

## Preventive controls added
- gitleaks pre-commit hook (commit <sha>)
- TruffleHog scheduled scan workflow (commit <sha>)
- GitHub push protection enabled at org level
- SOPS+age adopted as canonical secret store; `.env.local` removed from disk and replaced with a SOPS-encrypted `secrets.enc.yaml` decrypted on demand by `direnv` + `sops-direnv`.
- All production secrets re-issued and stored only in Cloudflare Workers `wrangler secret` and the SOPS-encrypted file; never in plaintext on disk.
- `.gitignore` audited and expanded with `*.pem`, `*.key`, `.dev.vars` (already had `.env*`).
- AWS canarytoken planted in `secrets.enc.yaml` (alongside real secrets) to trip future scrapers.

## Lessons learned
- "Not committed" is not the same as "not leaked." A production token on a developer workstation is a production token; treat it as such.
- A clean `git log --all -- '.env*'` is necessary but not sufficient evidence of non-exposure; the chain of custody for any production credential must be auditable from issuance to revocation.
- For payment-tier secrets, the cost of a false-positive rotation is small; the cost of skipping a precautionary rotation when chain-of-custody is unclear is unbounded.
- Initial-commit hooks must be installed before first push, not after.
