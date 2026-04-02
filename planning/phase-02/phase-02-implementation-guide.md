# Phase 2 Implementation Guide

**Project:** Sacred Portal Wellness Website  
**Document:** Step-by-Step Implementation Instructions  
**Last Updated:** March 12, 2026

---

## 🎯 PURPOSE

This guide provides detailed, actionable steps to complete Phase 2. Follow these instructions in order.

---

## STEP 1: DOMAIN REGISTRATION

### Option A: Cloudflare Registrar (Recommended)

**Time Required:** 15-20 minutes  
**Cost:** $10.44/year

#### Instructions:

1. **Create Cloudflare Account**
   - Go to https://www.cloudflare.com/
   - Click "Sign Up"
   - Use email: `aahmm9966@gmail.com` (or preferred email)
   - Create strong password
   - Verify email address

2. **Navigate to Domain Registration**
   - Log in to Cloudflare dashboard
   - Click "Domain Registration" in left sidebar
   - Click "Register Domain"

3. **Search for Domain**
   - Enter: `sacredportalwellness.com`
   - Click "Search"
   - Verify it shows as available
   - Click "Purchase"

4. **Complete Registration**
   - Auto-renew: **Enable** (recommended)
   - WHOIS privacy: **Enable** (free, included)
   - Years: **1 year** (can extend later)
   - Review total: Should be ~$10.44
   - Enter payment information
   - Complete purchase

5. **Configure DNS Settings**
   - Go to domain dashboard
   - Click "DNS" tab
   - Enable DNSSEC: Click "Enable DNSSEC"
   - Note: We'll add email records in Step 2

6. **Security Settings**
   - Go to "SSL/TLS" tab
   - Set encryption mode: **Full (strict)** (when Vercel is connected)
   - Enable "Always Use HTTPS"
   - Enable "Automatic HTTPS Rewrites"

7. **Enable 2FA on Cloudflare Account**
   - Click profile icon → "My Profile"
   - Click "Authentication"
   - Click "Manage" under Two-Factor Authentication
   - Follow setup instructions (use authenticator app)

**✅ Checkpoint:** Domain registered, DNSSEC enabled, 2FA enabled

---

## STEP 2: EMAIL SETUP (GOOGLE WORKSPACE)

**Time Required:** 30-45 minutes  
**Cost:** $14/month (2 users × $7/month)

#### Instructions:

1. **Sign Up for Google Workspace**
   - Go to https://workspace.google.com/
   - Click "Get Started"
   - Select "Business Starter" plan
   - Enter business name: "Sacred Portal Wellness"
   - Number of employees: "Just you" (or "2-9")
   - Country: United States
   - Click "Next"

2. **Enter Contact Information**
   - First name: Amber
   - Last name: [Client's last name]
   - Current email: `aahmm9966@gmail.com`
   - Click "Next"

3. **Domain Setup**
   - Select "Yes, I have one I can use"
   - Enter domain: `sacredportalwellness.com`
   - Click "Next"

4. **Create First Admin Account**
   - Username: `business`
   - Full email will be: `business@sacredportalwellness.com`
   - Create strong password (save in password manager)
   - Click "Next"

5. **Verify Domain Ownership**
   - Google will provide a TXT record
   - Copy the TXT record value
   - Go to Cloudflare DNS dashboard
   - Click "Add record"
   - Type: **TXT**
   - Name: **@** (or leave blank)
   - Content: [paste Google's verification code]
   - TTL: Auto
   - Click "Save"
   - Return to Google Workspace setup
   - Click "Verify" (may take a few minutes)

6. **Configure MX Records**
   - Google will provide MX records
   - Go to Cloudflare DNS dashboard
   - Add each MX record:

   ```
   Type: MX
   Name: @ (or sacredportalwellness.com)
   Mail server: ASPMX.L.GOOGLE.COM
   Priority: 1
   
   Type: MX
   Name: @
   Mail server: ALT1.ASPMX.L.GOOGLE.COM
   Priority: 5
   
   Type: MX
   Name: @
   Mail server: ALT2.ASPMX.L.GOOGLE.COM
   Priority: 5
   
   Type: MX
   Name: @
   Mail server: ALT3.ASPMX.L.GOOGLE.COM
   Priority: 10
   
   Type: MX
   Name: @
   Mail server: ALT4.ASPMX.L.GOOGLE.COM
   Priority: 10
   ```

7. **Configure SPF Record**
   - In Cloudflare DNS, add:
   - Type: **TXT**
   - Name: **@**
   - Content: `v=spf1 include:_spf.google.com ~all`
   - Click "Save"

8. **Configure DKIM**
   - In Google Workspace Admin Console:
   - Go to Apps → Google Workspace → Gmail → Authenticate email
   - Click "Generate new record"
   - Copy the DKIM record details
   - In Cloudflare DNS, add:
   - Type: **TXT**
   - Name: [provided by Google, usually `google._domainkey`]
   - Content: [paste DKIM value from Google]
   - Click "Save"
   - Return to Google Admin, click "Start authentication"

9. **Configure DMARC**
   - In Cloudflare DNS, add:
   - Type: **TXT**
   - Name: `_dmarc`
   - Content: `v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com`
   - Click "Save"

10. **Create Second Email Account**
    - In Google Workspace Admin Console
    - Go to Users
    - Click "Add new user"
    - First name: Info
    - Last name: Sacred Portal
    - Primary email: `info`
    - Full email: `info@sacredportalwellness.com`
    - Create password (or auto-generate)
    - Click "Add new user"

11. **Test Email**
    - Log in to Gmail as `business@sacredportalwellness.com`
    - Send test email to `aahmm9966@gmail.com`
    - Send test email from `aahmm9966@gmail.com` to `business@sacredportalwellness.com`
    - Verify both directions work
    - Repeat for `info@sacredportalwellness.com`

12. **Configure Email Settings**
    - Set up email signature with credentials (RN, BSN, HC-NC)
    - Set up vacation responder (if needed)
    - Configure filters/labels
    - Set up forwarding rules (optional)

**✅ Checkpoint:** Both email accounts created and tested, DNS records configured

---

## STEP 3: GOOGLE BUSINESS PROFILE

**Time Required:** 20-30 minutes (+ 5-14 days for verification)  
**Cost:** FREE

#### Instructions:

1. **Create Business Profile**
   - Go to https://business.google.com/
   - Sign in with: `business@sacredportalwellness.com`
   - Click "Manage now" or "Add your business"

2. **Enter Business Name**
   - Business name: "Sacred Portal Wellness"
   - Click "Next"

3. **Select Business Category**
   - Primary category: "Wellness center"
   - Add additional categories:
     - "Holistic health practitioner"
     - "Women's health clinic"
   - Click "Next"

4. **Add Location Type**
   - Question: "Do you want to add a location customers can visit?"
   - Select: **"No, I don't want to add a location"**
   - This sets up as Service Area Business (SAB)
   - Click "Next"

5. **Set Service Area**
   - Enter service areas:
     - San Diego, CA
     - Chula Vista, CA
     - Carlsbad, CA
     - Oceanside, CA
     - La Jolla, CA
   - Or select: "San Diego County"
   - Click "Next"

6. **Add Contact Information**
   - Phone: [Leave blank or add if desired]
   - Website: [Leave blank for now, add after launch]
   - Click "Next"

7. **Choose Communication Options**
   - Select: "Get updates and tips by email"
   - Click "Next"

8. **Verify Your Business**
   - Verification method: **Postcard**
   - Enter mailing address (home address - kept private)
   - Google will mail verification code in 5-14 days
   - Click "Mail"
   - **Note:** Address is only for verification, won't be shown publicly

9. **Complete Profile (While Waiting for Verification)**
   - Click "Continue to dashboard"
   - Add business description:
     ```
     Sacred Portal Wellness offers holistic wellness coaching and yoni steaming products for women. Led by Amber, RN, BSN, HC-NC, with 10 years of healthcare experience. Specializing in hormone balance, cycle support, and natural healing through The Sacred Portal Path 12-week coaching program.
     ```
   - Add services:
     - Yoni Steaming
     - Holistic Wellness Coaching
     - The Sacred Portal Path (12-week program)
     - Herbal Products & Remedies
   - Add hours: "By appointment only"
   - Add attributes:
     - Women-owned
     - Online appointments
     - Online care
   - Add photos (when available):
     - Logo
     - Product photos
     - Brand imagery

10. **After Receiving Verification Postcard**
    - Return to Google Business Profile
    - Click "Verify now"
    - Enter 5-digit code from postcard
    - Click "Verify"

11. **Finalize Profile**
    - Verify home address is NOT showing publicly
    - Confirm only service area is visible
    - Add website URL (after launch)
    - Add email: `info@sacredportalwellness.com`
    - Add Instagram: @saacredportal
    - Create first post/update

**✅ Checkpoint:** Profile created, verification requested, profile details added

---

## STEP 4: SQUARE API SETUP

**Time Required:** 20-30 minutes  
**Cost:** FREE (2.9% + $0.30 per transaction)

#### Instructions:

1. **Access Square Developer Portal**
   - Go to https://developer.squareup.com/
   - Sign in with existing Square account
   - Or create new account with `business@sacredportalwellness.com`

2. **Create New Application**
   - Click "Applications" in left sidebar
   - Click "+ Create Application"
   - Application name: "Sacred Portal Wellness Website"
   - Click "Create Application"

3. **Note Application Credentials**
   - Copy **Application ID**
   - Save in secure location (password manager)

4. **Generate Production Access Token**
   - Click "Production" tab
   - Click "Access Token" section
   - Click "+ New Token"
   - Token name: "Website Production"
   - Permissions: Select all needed:
     - `MERCHANT_PROFILE_READ`
     - `ITEMS_READ`
     - `ORDERS_READ`
     - `ORDERS_WRITE`
     - `PAYMENTS_READ`
     - `PAYMENTS_WRITE`
     - `CUSTOMERS_READ`
     - `CUSTOMERS_WRITE`
     - `INVENTORY_READ`
   - Click "Generate Token"
   - **IMPORTANT:** Copy token immediately (shown only once)
   - Save in secure location

5. **Generate Sandbox Access Token**
   - Click "Sandbox" tab
   - Repeat token generation process
   - Token name: "Website Sandbox"
   - Same permissions as production
   - Save token securely

6. **Get Location ID**
   - In Square Dashboard (not developer portal)
   - Go to Account & Settings → Business → Locations
   - Copy Location ID
   - Save securely

7. **Create Environment Variables File**
   - Create `.env.local` file in project root (when project is created)
   - Add credentials:
   ```env
   # Square Production
   SQUARE_ACCESS_TOKEN=your_production_token_here
   SQUARE_LOCATION_ID=your_location_id_here
   SQUARE_APPLICATION_ID=your_app_id_here
   
   # Square Sandbox (for development)
   SQUARE_SANDBOX_ACCESS_TOKEN=your_sandbox_token_here
   SQUARE_SANDBOX_LOCATION_ID=your_sandbox_location_id_here
   
   # Environment
   NODE_ENV=development
   ```

8. **Test API Connection**
   - Use Square API Explorer: https://developer.squareup.com/explorer/square
   - Select "Catalog API" → "List Catalog"
   - Click "Run Request"
   - Verify products are returned

9. **Export Product Catalog**
   - In Square Dashboard
   - Go to Items → Items Library
   - Click "Export" or "Download"
   - Save CSV to: `/planning/assets/products/exports/`
   - Review product data for completeness

10. **Configure Square Dashboard Settings**
    - Go to Account & Settings → Business
    - Verify business information is complete
    - Go to Checkout → Checkout Settings
    - Enable online payments
    - Configure tax rates (California sales tax)
    - Set up shipping options:
      - Flat rate shipping
      - Local delivery (San Diego zip codes)
      - Free delivery over $100

**✅ Checkpoint:** API credentials generated, stored securely, connection tested

---

## STEP 5: SECURITY VERIFICATION

**Time Required:** 10-15 minutes

#### Checklist:

- [ ] Cloudflare account has 2FA enabled
- [ ] Google Workspace admin account has 2FA enabled
- [ ] Square account has 2FA enabled
- [ ] Domain has auto-renewal enabled
- [ ] Domain has transfer lock enabled
- [ ] DNSSEC is enabled on domain
- [ ] SPF, DKIM, DMARC records are configured
- [ ] All API keys stored in password manager
- [ ] `.env.local` added to `.gitignore` (when project created)
- [ ] No credentials committed to Git

**✅ Checkpoint:** All security measures verified

---

## STEP 6: DOCUMENTATION

**Time Required:** 5-10 minutes

#### Create Credentials Document:

Save the following in a secure password manager:

```
SACRED PORTAL WELLNESS - CREDENTIALS

Domain Registrar (Cloudflare)
- URL: https://dash.cloudflare.com/
- Email: [your email]
- Password: [secure password]
- 2FA: Enabled
- Domain: sacredportalwellness.com

Google Workspace Admin
- URL: https://admin.google.com/
- Email: business@sacredportalwellness.com
- Password: [secure password]
- 2FA: Enabled
- Recovery email: aahmm9966@gmail.com

Email Accounts
1. business@sacredportalwellness.com
   - Purpose: Primary business communications
   - Password: [secure password]

2. info@sacredportalwellness.com
   - Purpose: Public contact, website forms
   - Password: [secure password]

Google Business Profile
- URL: https://business.google.com/
- Email: business@sacredportalwellness.com
- Status: [Pending verification / Verified]

Square Developer
- URL: https://developer.squareup.com/
- Email: [your email]
- Password: [secure password]
- 2FA: Enabled
- Application ID: [from Square]
- Production Access Token: [stored in .env]
- Sandbox Access Token: [stored in .env]
- Location ID: [from Square]
```

**✅ Checkpoint:** All credentials documented securely

---

## 🎉 PHASE 2 COMPLETE

### Deliverables Checklist:

- [x] Domain registered: `sacredportalwellness.com`
- [x] DNS configured with security (DNSSEC)
- [x] Email accounts created: `business@` and `info@`
- [x] Email authentication configured (SPF, DKIM, DMARC)
- [x] Google Business Profile created (verification pending)
- [x] Square API credentials generated
- [x] All security measures implemented
- [x] All credentials documented

### Next Steps:

**Immediate:**
- Wait for Google Business Profile verification postcard (5-14 days)
- Begin Phase 3: Brand and Design Direction

**When Postcard Arrives:**
- Verify Google Business Profile
- Add website URL to profile (after launch)
- Create first post/update

**Before Development:**
- Ensure Square product catalog is complete
- Obtain logo file (SVG/PNG)
- Confirm coaching program pricing

---

**Phase 2 Status:** COMPLETE  
**Ready for:** Phase 3 (Brand and Design Direction)  
**Blockers:** None (can proceed while waiting for GBP verification)
