# Phase 2: Domain, Email, and Account Setup - COMPLETE GUIDE

**Project:** Sacred Portal Wellness Website  
**Phase:** 2 of 9  
**Status:** Ready for Implementation  
**Created:** March 12, 2026

---

## 📖 TABLE OF CONTENTS

1. [Phase Overview](#phase-overview)
2. [Quick Start Guide](#quick-start-guide)
3. [Task Checklist](#task-checklist)
4. [Step-by-Step Implementation](#step-by-step-implementation)
5. [DNS Configuration Reference](#dns-configuration-reference)
6. [Security Checklist](#security-checklist)
7. [Cost Summary](#cost-summary)
8. [Troubleshooting](#troubleshooting)
9. [Completion Criteria](#completion-criteria)

---

## 🎯 PHASE OVERVIEW

### Objectives

Set up the core online foundation before development begins:

1. **Domain Registration** - `sacredportalwellness.com`
2. **Email Setup** - Professional business email addresses
3. **Google Business Profile** - Local SEO foundation
4. **Square API Access** - E-commerce integration preparation

### Why This Phase Matters

Phase 2 creates the technical foundation everything else builds on:
- Professional domain establishes credibility
- Business email builds trust with customers
- Google Business Profile drives local SEO
- Square API enables e-commerce functionality

### Time & Cost

**Time Required:** 2-4 hours active work + 5-14 days for Google verification  
**Cost:** $10.44 one-time (domain) + $14/month (email)  
**Dependencies:** None - can start immediately

---

## 🚀 QUICK START GUIDE

### Prerequisites

Before starting, you need:
- [ ] Payment method (credit/debit card)
- [ ] Square account access (or create new)
- [ ] Home mailing address (for Google verification - kept private)

### 3-Step Process

**Step 1: Domain (15-20 min)**
- Register `sacredportalwellness.com` via Cloudflare
- Configure DNS and security settings

**Step 2: Email (30-45 min)**
- Set up Google Workspace
- Create 2 email accounts
- Configure email authentication

**Step 3: Profiles (40-60 min)**
- Create Google Business Profile
- Set up Square API credentials
- Verify all security measures

---

## 📋 TASK CHECKLIST

### 1. Domain Registration

**Domain:** `sacredportalwellness.com`  
**Registrar:** Cloudflare Registrar (recommended)  
**Cost:** ~$10.44/year

#### Steps:
- [ ] Create Cloudflare account (if needed)
- [ ] Search and verify domain availability
- [ ] Purchase domain registration
- [ ] Configure DNS nameservers
- [ ] Set up DNSSEC (security)
- [ ] Configure SSL/TLS settings
- [ ] Enable domain lock and auto-renewal
- [ ] Enable 2FA on Cloudflare account

#### Alternative Registrars:
- Namecheap (~$13/year)
- Google Domains (~$12/year)
- GoDaddy (~$20/year - not recommended)

**Why Cloudflare:** At-cost pricing, no renewal increases, excellent DNS performance, free CDN

---

### 2. Email Setup (Google Workspace)

**Service:** Google Workspace Business Starter  
**Cost:** ~$7/user/month = $14/month for 2 accounts  

**Accounts:**
1. `business@sacredportalwellness.com` - Primary business communications
2. `info@sacredportalwellness.com` - Public-facing contact email

#### Steps:
- [ ] Sign up for Google Workspace
- [ ] Verify domain ownership (DNS TXT record)
- [ ] Create first email: `business@sacredportalwellness.com`
- [ ] Create second email: `info@sacredportalwellness.com`
- [ ] Configure MX records in Cloudflare DNS
- [ ] Configure SPF record (email authentication)
- [ ] Configure DKIM (email signing)
- [ ] Configure DMARC (email policy)
- [ ] Test email sending/receiving
- [ ] Set up email signatures with credentials
- [ ] Enable 2FA on Google Workspace

---

### 3. Google Business Profile Setup

**Type:** Service Area Business (SAB)  
**Cost:** FREE  
**Primary Benefit:** Local SEO (Google Map Pack visibility)

#### Steps:
- [ ] Go to business.google.com
- [ ] Create new business profile
- [ ] Business name: "Sacred Portal Wellness"
- [ ] Category: "Wellness center"
- [ ] Select "No" for physical location
- [ ] Set service area: San Diego, CA + surrounding areas
- [ ] Add business description
- [ ] Add services (Yoni Steaming, Coaching, etc.)
- [ ] Add credentials: RN, BSN, HC-NC
- [ ] Upload logo (when available)
- [ ] Request verification postcard
- [ ] Wait 5-14 days for postcard
- [ ] Verify with code from postcard
- [ ] Remove home address from public view

---

### 4. Square API Integration

**Platform:** Square Developer  
**Cost:** FREE (2.9% + $0.30 per transaction)  
**Purpose:** Product catalog, payments, inventory

#### Steps:
- [ ] Create Square Developer account
- [ ] Create new application: "Sacred Portal Wellness Website"
- [ ] Note Application ID
- [ ] Generate Production Access Token
- [ ] Generate Sandbox Access Token
- [ ] Store credentials securely (password manager)
- [ ] Test API connection in sandbox mode
- [ ] Export current product catalog
- [ ] Configure Square Dashboard settings (tax, shipping)
- [ ] Enable 2FA on Square account

---

## 🔧 STEP-BY-STEP IMPLEMENTATION

### STEP 1: DOMAIN REGISTRATION (15-20 minutes)

#### 1.1 Create Cloudflare Account

1. Go to https://www.cloudflare.com/
2. Click "Sign Up"
3. Use email: `aahmm9966@gmail.com` (or preferred)
4. Create strong password (16+ characters)
5. Verify email address

#### 1.2 Register Domain

1. Log in to Cloudflare dashboard
2. Click "Domain Registration" in left sidebar
3. Click "Register Domain"
4. Enter: `sacredportalwellness.com`
5. Click "Search" and verify availability
6. Click "Purchase"

#### 1.3 Complete Registration

1. **Auto-renew:** Enable (recommended)
2. **WHOIS privacy:** Enable (free, included)
3. **Years:** 1 year (can extend later)
4. Review total: Should be ~$10.44
5. Enter payment information
6. Complete purchase

#### 1.4 Configure DNS Settings

1. Go to domain dashboard
2. Click "DNS" tab
3. Enable DNSSEC: Click "Enable DNSSEC"
4. Note: Email records will be added in Step 2

#### 1.5 Security Settings

1. Go to "SSL/TLS" tab
2. Set encryption mode: **Full (strict)** (when Vercel connected)
3. Enable "Always Use HTTPS"
4. Enable "Automatic HTTPS Rewrites"
5. Go to domain settings
6. Enable domain lock/transfer lock

#### 1.6 Enable 2FA

1. Click profile icon → "My Profile"
2. Click "Authentication"
3. Click "Manage" under Two-Factor Authentication
4. Follow setup (use authenticator app)

**✅ Checkpoint:** Domain registered, DNSSEC enabled, 2FA enabled

---

### STEP 2: EMAIL SETUP (30-45 minutes)

#### 2.1 Sign Up for Google Workspace

1. Go to https://workspace.google.com/
2. Click "Get Started"
3. Select "Business Starter" plan
4. Enter business name: "Sacred Portal Wellness"
5. Number of employees: "Just you" (or "2-9")
6. Country: United States
7. Click "Next"

#### 2.2 Enter Contact Information

1. First name: Amber
2. Last name: [Client's last name]
3. Current email: `aahmm9966@gmail.com`
4. Click "Next"

#### 2.3 Domain Setup

1. Select "Yes, I have one I can use"
2. Enter domain: `sacredportalwellness.com`
3. Click "Next"

#### 2.4 Create First Admin Account

1. Username: `business`
2. Full email: `business@sacredportalwellness.com`
3. Create strong password (save in password manager)
4. Click "Next"

#### 2.5 Verify Domain Ownership

1. Google will provide a TXT record
2. Copy the TXT record value
3. Go to Cloudflare DNS dashboard
4. Click "Add record"
5. Type: **TXT**
6. Name: **@** (or leave blank)
7. Content: [paste Google's verification code]
8. TTL: Auto
9. Click "Save"
10. Return to Google Workspace setup
11. Click "Verify" (may take a few minutes)

#### 2.6 Configure MX Records

Add each MX record in Cloudflare DNS:

```
Record 1:
Type: MX
Name: @
Mail server: ASPMX.L.GOOGLE.COM
Priority: 1

Record 2:
Type: MX
Name: @
Mail server: ALT1.ASPMX.L.GOOGLE.COM
Priority: 5

Record 3:
Type: MX
Name: @
Mail server: ALT2.ASPMX.L.GOOGLE.COM
Priority: 5

Record 4:
Type: MX
Name: @
Mail server: ALT3.ASPMX.L.GOOGLE.COM
Priority: 10

Record 5:
Type: MX
Name: @
Mail server: ALT4.ASPMX.L.GOOGLE.COM
Priority: 10
```

**Important:** MX records must be DNS only (gray cloud), NOT proxied

#### 2.7 Configure SPF Record

In Cloudflare DNS:
- Type: **TXT**
- Name: **@**
- Content: `v=spf1 include:_spf.google.com ~all`
- Click "Save"

#### 2.8 Configure DKIM

1. In Google Workspace Admin Console:
   - Apps → Google Workspace → Gmail → Authenticate email
   - Click "Generate new record"
   - Copy the DKIM record details
2. In Cloudflare DNS:
   - Type: **TXT**
   - Name: [from Google, usually `google._domainkey`]
   - Content: [paste DKIM value]
   - Click "Save"
3. Return to Google Admin, click "Start authentication"

#### 2.9 Configure DMARC

In Cloudflare DNS:
- Type: **TXT**
- Name: `_dmarc`
- Content: `v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com`
- Click "Save"

#### 2.10 Create Second Email Account

1. In Google Workspace Admin Console
2. Go to Users
3. Click "Add new user"
4. First name: Info
5. Last name: Sacred Portal
6. Primary email: `info`
7. Full email: `info@sacredportalwellness.com`
8. Create password (or auto-generate)
9. Click "Add new user"

#### 2.11 Test Email

1. Log in to Gmail as `business@sacredportalwellness.com`
2. Send test email to `aahmm9966@gmail.com`
3. Send test from `aahmm9966@gmail.com` to `business@`
4. Verify both directions work
5. Repeat for `info@sacredportalwellness.com`

#### 2.12 Configure Email Settings

1. Set up email signature:
   ```
   Amber
   RN, BSN, HC-NC
   Sacred Portal Wellness
   
   Instagram: @saacredportal
   Website: sacredportalwellness.com (after launch)
   ```
2. Configure filters/labels as needed
3. Set up forwarding rules (optional)

**✅ Checkpoint:** Both emails created, tested, DNS configured

---

### STEP 3: GOOGLE BUSINESS PROFILE (20-30 minutes)

#### 3.1 Create Business Profile

1. Go to https://business.google.com/
2. Sign in with: `business@sacredportalwellness.com`
3. Click "Manage now" or "Add your business"

#### 3.2 Enter Business Information

1. **Business name:** "Sacred Portal Wellness"
2. **Primary category:** "Wellness center"
3. **Additional categories:**
   - "Holistic health practitioner"
   - "Women's health clinic"
4. Click "Next"

#### 3.3 Set Location Type

1. Question: "Do you want to add a location customers can visit?"
2. Select: **"No, I don't want to add a location"**
3. This sets up as Service Area Business (SAB)
4. Click "Next"

#### 3.4 Set Service Area

Enter service areas:
- San Diego, CA
- Chula Vista, CA
- Carlsbad, CA
- Oceanside, CA
- La Jolla, CA

Or select: "San Diego County"

Click "Next"

#### 3.5 Add Contact Information

1. Phone: [Leave blank or add if desired]
2. Website: [Leave blank for now, add after launch]
3. Click "Next"

#### 3.6 Verify Your Business

1. Verification method: **Postcard**
2. Enter mailing address (home address - kept private)
3. Google will mail verification code in 5-14 days
4. Click "Mail"

**Note:** Address is only for verification, won't be shown publicly

#### 3.7 Complete Profile

While waiting for verification:

1. Click "Continue to dashboard"
2. Add business description:
   ```
   Sacred Portal Wellness offers holistic wellness coaching and yoni steaming 
   products for women. Led by Amber, RN, BSN, HC-NC, with 10 years of 
   healthcare experience. Specializing in hormone balance, cycle support, 
   and natural healing through The Sacred Portal Path 12-week coaching program.
   ```
3. Add services:
   - Yoni Steaming
   - Holistic Wellness Coaching
   - The Sacred Portal Path (12-week program)
   - Herbal Products & Remedies
4. Add hours: "By appointment only"
5. Add attributes:
   - Women-owned
   - Online appointments
   - Online care
6. Add photos (when available):
   - Logo
   - Product photos
   - Brand imagery

#### 3.8 After Receiving Postcard (5-14 days later)

1. Return to Google Business Profile
2. Click "Verify now"
3. Enter 5-digit code from postcard
4. Click "Verify"
5. Verify home address is NOT showing publicly
6. Confirm only service area is visible
7. Add website URL (after launch)
8. Add email: `info@sacredportalwellness.com`
9. Add Instagram: @saacredportal
10. Create first post/update

**✅ Checkpoint:** Profile created, verification requested

---

### STEP 4: SQUARE API SETUP (20-30 minutes)

#### 4.1 Access Square Developer Portal

1. Go to https://developer.squareup.com/
2. Sign in with existing Square account
3. Or create new account with `business@sacredportalwellness.com`

#### 4.2 Create New Application

1. Click "Applications" in left sidebar
2. Click "+ Create Application"
3. Application name: "Sacred Portal Wellness Website"
4. Click "Create Application"

#### 4.3 Note Application Credentials

1. Copy **Application ID**
2. Save in password manager

#### 4.4 Generate Production Access Token

1. Click "Production" tab
2. Click "Access Token" section
3. Click "+ New Token"
4. Token name: "Website Production"
5. Permissions: Select all needed:
   - `MERCHANT_PROFILE_READ`
   - `ITEMS_READ`
   - `ORDERS_READ`
   - `ORDERS_WRITE`
   - `PAYMENTS_READ`
   - `PAYMENTS_WRITE`
   - `CUSTOMERS_READ`
   - `CUSTOMERS_WRITE`
   - `INVENTORY_READ`
6. Click "Generate Token"
7. **IMPORTANT:** Copy token immediately (shown only once)
8. Save in password manager

#### 4.5 Generate Sandbox Access Token

1. Click "Sandbox" tab
2. Repeat token generation process
3. Token name: "Website Sandbox"
4. Same permissions as production
5. Save token in password manager

#### 4.6 Get Location ID

1. In Square Dashboard (not developer portal)
2. Go to Account & Settings → Business → Locations
3. Copy Location ID
4. Save in password manager

#### 4.7 Document Credentials

Create entry in password manager:

```
SQUARE API CREDENTIALS

Application ID: [from Square]
Production Access Token: [from Square]
Sandbox Access Token: [from Square]
Location ID: [from Square]

Environment Variables (for .env.local):
SQUARE_ACCESS_TOKEN=[production token]
SQUARE_LOCATION_ID=[location id]
SQUARE_APPLICATION_ID=[app id]
SQUARE_SANDBOX_ACCESS_TOKEN=[sandbox token]
```

#### 4.8 Test API Connection

1. Use Square API Explorer: https://developer.squareup.com/explorer/square
2. Select "Catalog API" → "List Catalog"
3. Click "Run Request"
4. Verify products are returned

#### 4.9 Export Product Catalog

1. In Square Dashboard
2. Go to Items → Items Library
3. Click "Export" or "Download"
4. Save CSV to: `/planning/assets/products/exports/`
5. Review product data for completeness

#### 4.10 Configure Square Dashboard

1. Go to Account & Settings → Business
2. Verify business information is complete
3. Go to Checkout → Checkout Settings
4. Enable online payments
5. Configure tax rates (California sales tax)
6. Set up shipping options:
   - Flat rate shipping
   - Local delivery (San Diego zip codes)
   - Free delivery over $100

**✅ Checkpoint:** API credentials generated, stored, tested

---

## 🌐 DNS CONFIGURATION REFERENCE

### Complete DNS Record Table

| Type | Name | Content/Value | Priority | TTL | Proxy |
|------|------|---------------|----------|-----|-------|
| **TXT** | @ | [Google Workspace verification] | - | Auto | DNS only |
| **MX** | @ | ASPMX.L.GOOGLE.COM | 1 | Auto | DNS only |
| **MX** | @ | ALT1.ASPMX.L.GOOGLE.COM | 5 | Auto | DNS only |
| **MX** | @ | ALT2.ASPMX.L.GOOGLE.COM | 5 | Auto | DNS only |
| **MX** | @ | ALT3.ASPMX.L.GOOGLE.COM | 10 | Auto | DNS only |
| **MX** | @ | ALT4.ASPMX.L.GOOGLE.COM | 10 | Auto | DNS only |
| **TXT** | @ | v=spf1 include:_spf.google.com ~all | - | Auto | DNS only |
| **TXT** | google._domainkey | [DKIM value from Google] | - | Auto | DNS only |
| **TXT** | _dmarc | v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com | - | Auto | DNS only |

**Website records (added during deployment):**
| Type | Name | Content/Value | TTL | Proxy |
|------|------|---------------|-----|-------|
| **A** | @ | [Vercel IP] | Auto | Proxied ☁️ |
| **CNAME** | www | sacredportalwellness.com | Auto | Proxied ☁️ |

### DNS Propagation Times

| Record Type | Typical | Maximum |
|-------------|---------|---------|
| A / CNAME | 5-30 min | 48 hours |
| MX | 15-60 min | 48 hours |
| TXT | 15-60 min | 48 hours |

### Verification Commands

**Test SPF:**
```bash
nslookup -type=TXT sacredportalwellness.com
```

**Test MX:**
```bash
nslookup -type=MX sacredportalwellness.com
```

**Test DKIM:**
```bash
nslookup -type=TXT google._domainkey.sacredportalwellness.com
```

**Online Tools:**
- MXToolbox: https://mxtoolbox.com/SuperTool.aspx
- Google Admin Toolbox: https://toolbox.googleapps.com/apps/checkmx/
- DNS Checker: https://dnschecker.org/

---

## 🔐 SECURITY CHECKLIST

### Account Security

#### Cloudflare Account
- [ ] 2FA enabled (authenticator app)
- [ ] Strong password (16+ characters, unique)
- [ ] Recovery email set and verified
- [ ] Login notifications enabled

#### Google Workspace Admin
- [ ] 2FA enabled (required for admin)
- [ ] Strong password (16+ characters, unique)
- [ ] Recovery email: aahmm9966@gmail.com
- [ ] Recovery phone set and verified
- [ ] Security checkup run
- [ ] Less secure app access disabled

#### Square Account
- [ ] 2FA enabled
- [ ] Strong password (16+ characters, unique)
- [ ] Recovery email set
- [ ] API permissions: least privilege only

### Domain Security

- [ ] Auto-renewal enabled
- [ ] Domain lock enabled
- [ ] WHOIS privacy enabled
- [ ] DNSSEC enabled
- [ ] Expiration alerts enabled

### Email Security

- [ ] SPF record configured and tested
- [ ] DKIM signing enabled and verified
- [ ] DMARC policy set to quarantine
- [ ] MX records correct
- [ ] TLS encryption enforced

### API Security

- [ ] Production tokens stored in password manager only
- [ ] Sandbox tokens separate from production
- [ ] Never commit API keys to Git
- [ ] Use environment variables for all credentials
- [ ] Webhook signatures verified (when implemented)

### Security Maintenance Schedule

**Monthly:**
- Review account activity logs
- Check DMARC reports
- Verify all 2FA is active
- Review API usage

**Quarterly:**
- Rotate API tokens
- Review security settings
- Update passwords

**Annually:**
- Comprehensive security audit
- Review PCI compliance (Square)
- Update privacy policy

---

## 💰 COST SUMMARY

### One-Time Costs
| Item | Cost |
|------|------|
| Domain registration (Cloudflare) | $10.44/year |

### Monthly Recurring
| Item | Cost |
|------|------|
| Google Workspace (2 users) | $14.00/month |
| Vercel hosting | $0-20/month* |

*Free tier to start, $20/month Pro for commercial use

### Transaction-Based
| Item | Cost |
|------|------|
| Square payment processing | 2.9% + $0.30 per sale |

**Example:** $45 product sale = ~$1.61 in fees

### Total Costs

**First Month:** $24.44 (domain + email)  
**Monthly After:** $14.00 (email only)  
**Annual:** ~$178.44 ($10.44 domain + $168 email)

---

## 🚨 TROUBLESHOOTING

### Email Not Working

**Check:**
1. All 5 MX records added correctly
2. MX records are NOT proxied (must be gray cloud)
3. SPF record exists
4. Wait 1 hour for DNS propagation
5. Use MXToolbox to verify

**Common Issues:**
- MX records proxied (must be DNS only)
- Missing @ in Name field
- Typo in mail server addresses
- Old MX records not deleted

### Website Not Loading (After Deployment)

**Check:**
1. A record points to correct IP
2. CNAME for www exists
3. SSL/TLS mode is "Full (strict)"
4. "Always Use HTTPS" enabled
5. Wait 30 minutes for propagation
6. Clear browser cache

### SPF/DKIM/DMARC Failing

**Check:**
1. Records exist (use nslookup)
2. No typos in record content
3. DKIM record copied completely (very long)
4. Wait 1 hour for propagation
5. Use Google Admin Toolbox

**Common Issues:**
- DKIM value truncated
- Quotes added around TXT values
- Wrong subdomain for DKIM

### Square API Connection Issues

**Check:**
1. Correct access token used
2. Token has required permissions
3. Using correct environment (prod vs sandbox)
4. Location ID is correct
5. API endpoint URL is correct

---

## ✅ COMPLETION CRITERIA

Phase 2 is complete when:

- [x] Domain registered: `sacredportalwellness.com`
- [x] DNS configured with security (DNSSEC)
- [x] Both email accounts created and tested
- [x] Email authentication configured (SPF, DKIM, DMARC)
- [x] Google Business Profile created (verification can be pending)
- [x] Square API credentials generated and stored
- [x] All security measures implemented (2FA, domain lock, etc.)
- [x] All credentials documented in password manager

**Note:** Google Business Profile verification takes 5-14 days, but Phase 2 is considered complete once verification is requested.

---

## 🎯 NEXT STEPS

### Immediate (After Phase 2)
1. Wait for Google Business Profile postcard (5-14 days)
2. Begin Phase 3: Brand and Design Direction
3. Continue gathering Phase 1 missing items (logo, products, pricing)

### When Postcard Arrives
1. Verify Google Business Profile with code
2. Complete profile with photos and posts
3. Add website URL (after launch)

### Phase 3 Preview
- Create design mockups for key pages
- Establish visual design system
- Build component library
- Get design approval

---

## 📞 SUPPORT RESOURCES

**Cloudflare Support:** https://support.cloudflare.com/  
**Google Workspace Support:** https://support.google.com/a/  
**Square Developer Support:** https://developer.squareup.com/support

**Project Contact:** aahmm9966@gmail.com  
**Instagram:** @saacredportal

---

**Phase 2 Status:** Ready for Implementation  
**Estimated Time:** 2-4 hours + 5-14 days verification  
**Next Phase:** Phase 3 - Brand and Design Direction

**Last Updated:** March 12, 2026
