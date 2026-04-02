# Phase 2: Domain, Email, and Account Setup

**Project:** Sacred Portal Wellness Website  
**Phase:** Phase 2 - Foundation Infrastructure  
**Status:** In Progress  
**Started:** March 12, 2026

---

## 🎯 PHASE 2 OBJECTIVES

Set up the core online foundation before development begins:

1. **Domain Registration** - `sacredportalwellness.com`
2. **Email Setup** - Professional business email addresses
3. **Google Business Profile** - Local SEO foundation
4. **Square API Access** - E-commerce integration preparation

---

## 📋 TASK CHECKLIST

### 1. Domain Registration ⏳

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
- [ ] Add domain to Vercel project (when ready)

#### Alternative Registrars:
- Namecheap (~$13/year)
- Google Domains (~$12/year)
- GoDaddy (~$20/year - not recommended due to upselling)

**Why Cloudflare:** At-cost pricing, no renewal increases, excellent DNS performance, free CDN

---

### 2. Email Setup (Google Workspace) ⏳

**Service:** Google Workspace Business Starter  
**Cost:** ~$7/user/month = $14/month for 2 accounts  
**Accounts Needed:**
1. `business@sacredportalwellness.com` - Primary business communications
2. `info@sacredportalwellness.com` - Public-facing contact email

#### Steps:
- [ ] Sign up for Google Workspace
- [ ] Verify domain ownership (via DNS TXT record)
- [ ] Create first email account: `business@sacredportalwellness.com`
- [ ] Create second email account: `info@sacredportalwellness.com`
- [ ] Configure MX records in Cloudflare DNS
- [ ] Configure SPF record (email authentication)
- [ ] Configure DKIM (email signing)
- [ ] Configure DMARC (email policy)
- [ ] Test email sending/receiving
- [ ] Set up email forwarding rules (if needed)
- [ ] Configure Gmail settings (signature, filters, etc.)

#### DNS Records Required:
```
MX Records (Google Workspace):
Priority 1: ASPMX.L.GOOGLE.COM
Priority 5: ALT1.ASPMX.L.GOOGLE.COM
Priority 5: ALT2.ASPMX.L.GOOGLE.COM
Priority 10: ALT3.ASPMX.L.GOOGLE.COM
Priority 10: ALT4.ASPMX.L.GOOGLE.COM

SPF Record:
v=spf1 include:_spf.google.com ~all

DKIM Record:
(Provided by Google Workspace during setup)

DMARC Record:
v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com
```

#### Migration Note:
Current email `aahmm9966@gmail.com` will remain active. New professional emails will be used for:
- Website contact forms → `info@sacredportalwellness.com`
- Business inquiries → `business@sacredportalwellness.com`
- Coaching inquiries → Can use either, or forward to personal email

---

### 3. Google Business Profile Setup ⏳

**Type:** Service Area Business (SAB)  
**Cost:** FREE  
**Primary Benefit:** Local SEO (Google Map Pack visibility)

#### Steps:
- [ ] Go to business.google.com
- [ ] Create new business profile
- [ ] Business name: "Sacred Portal Wellness"
- [ ] Category: "Wellness Center" or "Holistic Health Practitioner"
- [ ] Select "No" for physical location customers can visit
- [ ] Set service area: San Diego, CA + Southern California
- [ ] Add business description (use homepage intro)
- [ ] Add business hours (or "By appointment only")
- [ ] Add contact info: `info@sacredportalwellness.com`, Instagram
- [ ] Add website URL (when live): `https://sacredportalwellness.com`
- [ ] Add services:
  - Yoni Steaming
  - Holistic Wellness Coaching
  - The Sacred Portal Path (12-week program)
  - Herbal Products
- [ ] Add credentials: RN, BSN, HC-NC
- [ ] Upload logo (when available)
- [ ] Upload business photos (products, branding)
- [ ] Request verification postcard (mailed to home address)
- [ ] Verify business with code from postcard
- [ ] Remove home address from public view (keep service area only)
- [ ] Add first post/update
- [ ] Enable messaging (optional)
- [ ] Set up review monitoring

#### Service Area Recommendations:
**Primary:** San Diego, CA  
**Extended:** 
- Chula Vista
- Carlsbad
- Oceanside
- La Jolla
- Del Mar
- Encinitas
- Southern California (general)

#### Categories to Consider:
1. **Primary:** Wellness Center
2. **Secondary:** 
   - Holistic Health Practitioner
   - Women's Health Clinic
   - Alternative Medicine Practitioner
   - Health Consultant

---

### 4. Square API Integration Preparation ⏳

**Platform:** Square Developer  
**Cost:** FREE (2.9% + $0.30 per transaction)  
**Purpose:** Product catalog, payments, inventory

#### Steps:
- [ ] Create Square Developer account (or use existing)
- [ ] Create new application: "Sacred Portal Wellness Website"
- [ ] Note Application ID
- [ ] Generate Production Access Token
- [ ] Generate Sandbox Access Token (for testing)
- [ ] Store credentials securely (environment variables)
- [ ] Review API documentation:
  - Catalog API (products)
  - Orders API (cart/checkout)
  - Payments API (transactions)
  - Web Payments SDK (card entry)
  - Inventory API (stock tracking)
- [ ] Test API connection in sandbox mode
- [ ] Export current product catalog (for reference)
- [ ] Document product structure (categories, variants, pricing)

#### API Credentials Storage:
```env
# Production
SQUARE_ACCESS_TOKEN=your_production_token
SQUARE_LOCATION_ID=your_location_id
SQUARE_APPLICATION_ID=your_app_id

# Sandbox (for development)
SQUARE_SANDBOX_ACCESS_TOKEN=your_sandbox_token
SQUARE_SANDBOX_LOCATION_ID=your_sandbox_location_id
```

#### Square Dashboard Setup:
- [ ] Verify business information
- [ ] Set up tax rates (California sales tax)
- [ ] Configure shipping options:
  - Flat-rate shipping
  - Local delivery (San Diego)
  - Free delivery threshold ($100+)
- [ ] Set up fulfillment options
- [ ] Configure inventory tracking
- [ ] Set up customer directory
- [ ] Enable online payments
- [ ] Test checkout flow

---

## 🔐 SECURITY CHECKLIST

### Domain Security
- [ ] Enable DNSSEC
- [ ] Enable domain lock/transfer lock
- [ ] Use strong registrar account password
- [ ] Enable 2FA on registrar account
- [ ] Set auto-renewal to prevent expiration

### Email Security
- [ ] Enable 2FA on Google Workspace admin account
- [ ] Configure SPF, DKIM, DMARC records
- [ ] Set up email retention policies
- [ ] Enable advanced phishing protection
- [ ] Review sharing/access permissions
- [ ] Set up backup admin account

### API Security
- [ ] Never commit API keys to Git
- [ ] Use environment variables for all credentials
- [ ] Separate production and sandbox credentials
- [ ] Rotate access tokens periodically
- [ ] Use least-privilege access (only required scopes)
- [ ] Monitor API usage for anomalies
- [ ] Set up webhook signature verification

---

## 💰 COST SUMMARY

| Item | Cost | Frequency | Annual Cost |
|------|------|-----------|-------------|
| Domain (Cloudflare) | $10.44 | Yearly | $10.44 |
| Google Workspace (2 users) | $14.00 | Monthly | $168.00 |
| Google Business Profile | $0.00 | - | $0.00 |
| Square Developer Account | $0.00 | - | $0.00 |
| Square Transaction Fees | 2.9% + $0.30 | Per sale | Variable |
| **Total Fixed Costs** | **$24.44** | **First month** | **$178.44/year** |

**Monthly Recurring:** $14/month (email only)  
**One-time Setup:** $10.44 (domain)

---

## 📞 ACCOUNT CREDENTIALS TO TRACK

Create a secure password manager entry for:

### Cloudflare Registrar
- Email: [to be set]
- Password: [secure password]
- 2FA: [enabled]
- Domain: sacredportalwellness.com

### Google Workspace Admin
- Admin email: business@sacredportalwellness.com
- Password: [secure password]
- 2FA: [enabled]
- Recovery email: aahmm9966@gmail.com

### Google Business Profile
- Email: business@sacredportalwellness.com
- Password: [same as Google Workspace]

### Square Developer
- Email: [to be set]
- Password: [secure password]
- 2FA: [enabled]
- Application ID: [from Square]
- Access Tokens: [stored in .env]

---

## 🚀 DEPENDENCIES & BLOCKERS

### Required Before Starting:
- ✅ Domain name confirmed: `sacredportalwellness.com`
- ✅ Email addresses confirmed: `business@` and `info@`
- ⚠️ Payment method for domain + Google Workspace
- ⚠️ Access to Square account (or create new)

### Can Proceed Independently:
- Domain registration (no dependencies)
- Google Business Profile (can start, verify later)
- Square API setup (can use sandbox mode)

### Requires Domain First:
- Email setup (needs domain ownership verification)
- SSL certificate (automatic via Vercel once domain connected)

---

## 📝 NOTES & RECOMMENDATIONS

### Domain Registration
- **Cloudflare Registrar is strongly recommended** due to at-cost pricing and no renewal price increases
- Register for 1 year initially, set auto-renewal
- Privacy protection is included free (WHOIS privacy)

### Email Setup
- Use `business@` as the primary admin account
- Use `info@` for website contact forms and public inquiries
- Consider setting up email aliases later (e.g., `support@`, `hello@`)
- Gmail interface is familiar and user-friendly for client

### Google Business Profile
- **This is the highest-ROI SEO action** for a local business
- Aim for 20+ reviews as quickly as possible
- Post updates regularly (1-2x per month minimum)
- Respond to all reviews within 24-48 hours
- Use high-quality photos (products, branding, behind-the-scenes)

### Square Integration
- Start with sandbox mode for development
- Don't switch to production until site is ready to launch
- Keep product catalog updated in Square (single source of truth)
- Test full checkout flow thoroughly before going live

---

## ✅ COMPLETION CRITERIA

Phase 2 is complete when:

- [x] Domain registered and DNS configured
- [x] Both email accounts created and tested
- [x] Google Business Profile created and verification requested
- [x] Square API credentials generated and tested
- [x] All credentials documented securely
- [x] Security measures implemented (2FA, SPF/DKIM/DMARC)

**Estimated Time:** 2-4 hours (excluding verification wait times)  
**Verification Wait:** 5-14 days for Google Business Profile postcard

---

## 🔄 NEXT PHASE

**Phase 3: Brand and Design Direction**
- Design mockups for key pages
- Visual direction approval
- Component library setup

**Note:** Phase 2 and Phase 3 can overlap. Design work can begin while waiting for Google Business Profile verification.

---

**Last Updated:** March 12, 2026  
**Status:** Ready to begin implementation
