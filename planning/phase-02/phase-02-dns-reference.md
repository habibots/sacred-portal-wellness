# DNS Configuration Reference - Phase 2

**Project:** Sacred Portal Wellness Website  
**Domain:** sacredportalwellness.com  
**DNS Provider:** Cloudflare  
**Last Updated:** March 12, 2026

---

## 📋 COMPLETE DNS RECORD TABLE

Copy these records into Cloudflare DNS dashboard:

| Type | Name | Content/Value | Priority | TTL | Proxy Status |
|------|------|---------------|----------|-----|--------------|
| **A** | @ | [Vercel IP - added automatically] | - | Auto | Proxied ☁️ |
| **CNAME** | www | sacredportalwellness.com | - | Auto | Proxied ☁️ |
| **MX** | @ | ASPMX.L.GOOGLE.COM | 1 | Auto | DNS only |
| **MX** | @ | ALT1.ASPMX.L.GOOGLE.COM | 5 | Auto | DNS only |
| **MX** | @ | ALT2.ASPMX.L.GOOGLE.COM | 5 | Auto | DNS only |
| **MX** | @ | ALT3.ASPMX.L.GOOGLE.COM | 10 | Auto | DNS only |
| **MX** | @ | ALT4.ASPMX.L.GOOGLE.COM | 10 | Auto | DNS only |
| **TXT** | @ | v=spf1 include:_spf.google.com ~all | - | Auto | DNS only |
| **TXT** | google._domainkey | [DKIM value from Google Workspace] | - | Auto | DNS only |
| **TXT** | _dmarc | v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com | - | Auto | DNS only |
| **TXT** | @ | [Google Workspace verification code] | - | Auto | DNS only |

---

## 🔧 RECORD-BY-RECORD SETUP

### 1. Domain Verification (Google Workspace)

**When:** During Google Workspace setup  
**Purpose:** Prove domain ownership

```
Type: TXT
Name: @ (or leave blank)
Content: google-site-verification=XXXXXXXXXXXXXXXXXXXXXX
TTL: Auto
```

**How to get:** Google Workspace setup wizard provides this code  
**Note:** Can be deleted after verification is complete

---

### 2. MX Records (Email Routing)

**When:** During Google Workspace setup  
**Purpose:** Route email to Google's servers

```
Record 1:
Type: MX
Name: @ (or sacredportalwellness.com)
Mail server: ASPMX.L.GOOGLE.COM
Priority: 1
TTL: Auto

Record 2:
Type: MX
Name: @
Mail server: ALT1.ASPMX.L.GOOGLE.COM
Priority: 5
TTL: Auto

Record 3:
Type: MX
Name: @
Mail server: ALT2.ASPMX.L.GOOGLE.COM
Priority: 5
TTL: Auto

Record 4:
Type: MX
Name: @
Mail server: ALT3.ASPMX.L.GOOGLE.COM
Priority: 10
TTL: Auto

Record 5:
Type: MX
Name: @
Mail server: ALT4.ASPMX.L.GOOGLE.COM
Priority: 10
TTL: Auto
```

**Important:** 
- Do NOT proxy MX records (must be DNS only)
- Priority numbers matter (lower = higher priority)
- All 5 records are required for redundancy

---

### 3. SPF Record (Email Authentication)

**When:** During email setup  
**Purpose:** Prevent email spoofing

```
Type: TXT
Name: @ (or leave blank)
Content: v=spf1 include:_spf.google.com ~all
TTL: Auto
```

**Explanation:**
- `v=spf1` = SPF version 1
- `include:_spf.google.com` = Allow Google's servers to send email
- `~all` = Soft fail for other servers (recommended)

**Alternative endings:**
- `-all` = Hard fail (stricter, may cause delivery issues)
- `?all` = Neutral (not recommended)

---

### 4. DKIM Record (Email Signing)

**When:** During email setup  
**Purpose:** Cryptographically sign outgoing emails

```
Type: TXT
Name: google._domainkey
Content: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC... (very long string)
TTL: Auto
```

**How to get:**
1. Go to Google Workspace Admin Console
2. Apps → Google Workspace → Gmail → Authenticate email
3. Click "Generate new record"
4. Copy the DNS Host Name and TXT record value
5. Add to Cloudflare DNS

**Important:**
- The content value is very long (300+ characters)
- Copy the entire value exactly
- Do NOT add quotes around the value

---

### 5. DMARC Record (Email Policy)

**When:** After SPF and DKIM are configured  
**Purpose:** Tell receiving servers how to handle failed authentication

```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com
TTL: Auto
```

**Explanation:**
- `v=DMARC1` = DMARC version 1
- `p=quarantine` = Put suspicious emails in spam (recommended)
- `rua=mailto:business@...` = Send aggregate reports to this email

**Policy options:**
- `p=none` = Monitor only (good for testing)
- `p=quarantine` = Send to spam (recommended)
- `p=reject` = Reject entirely (strictest)

**Advanced options:**
```
v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com; ruf=mailto:business@sacredportalwellness.com; pct=100; adkim=s; aspf=s
```
- `ruf` = Forensic reports (individual failures)
- `pct=100` = Apply policy to 100% of emails
- `adkim=s` = Strict DKIM alignment
- `aspf=s` = Strict SPF alignment

---

### 6. Website Records (Vercel)

**When:** During website deployment  
**Purpose:** Point domain to Vercel hosting

#### Option A: Automatic (Recommended)
- Add domain in Vercel dashboard
- Vercel provides DNS instructions
- Follow Vercel's exact instructions

#### Option B: Manual
```
Type: A
Name: @ (or leave blank)
Content: 76.76.21.21 (Vercel's IP - check current)
TTL: Auto
Proxy: Proxied (orange cloud)

Type: CNAME
Name: www
Content: sacredportalwellness.com
TTL: Auto
Proxy: Proxied (orange cloud)
```

**Important:**
- Use Cloudflare proxy (orange cloud) for A and CNAME records
- This enables Cloudflare CDN and DDoS protection
- SSL/TLS will be automatic

---

### 7. Subdomain Records (Optional)

**If needed in the future:**

```
# Blog subdomain
Type: CNAME
Name: blog
Content: sacredportalwellness.com
TTL: Auto
Proxy: Proxied

# Shop subdomain (not recommended - keep everything on main domain for SEO)
Type: CNAME
Name: shop
Content: sacredportalwellness.com
TTL: Auto
Proxy: Proxied
```

**Recommendation:** Keep everything on main domain for SEO benefits

---

## 🔍 VERIFICATION & TESTING

### Email Verification

**Test SPF:**
```
nslookup -type=TXT sacredportalwellness.com
```
Should return: `v=spf1 include:_spf.google.com ~all`

**Test MX:**
```
nslookup -type=MX sacredportalwellness.com
```
Should return all 5 Google MX servers

**Test DKIM:**
```
nslookup -type=TXT google._domainkey.sacredportalwellness.com
```
Should return DKIM public key

**Test DMARC:**
```
nslookup -type=TXT _dmarc.sacredportalwellness.com
```
Should return DMARC policy

**Online Tools:**
- MXToolbox: https://mxtoolbox.com/SuperTool.aspx
- Google Admin Toolbox: https://toolbox.googleapps.com/apps/checkmx/
- DMARC Analyzer: https://www.dmarcanalyzer.com/

---

### Website Verification

**Test DNS propagation:**
- https://dnschecker.org/
- Enter: sacredportalwellness.com
- Check A record globally

**Test SSL:**
- https://www.ssllabs.com/ssltest/
- Should get A+ rating after Cloudflare + Vercel setup

---

## ⏱️ DNS PROPAGATION TIMES

| Record Type | Typical Propagation | Maximum |
|-------------|---------------------|---------|
| A / CNAME | 5-30 minutes | 48 hours |
| MX | 15-60 minutes | 48 hours |
| TXT (SPF/DKIM/DMARC) | 15-60 minutes | 48 hours |
| NS (Nameserver) | 24-48 hours | 72 hours |

**Note:** Cloudflare's TTL is set to "Auto" which is typically 5 minutes for most records

---

## 🚨 TROUBLESHOOTING

### Email not working

**Check:**
1. MX records are correct (all 5 records)
2. MX records are NOT proxied (must be DNS only)
3. SPF record exists and includes Google
4. Wait 1 hour for propagation
5. Use MXToolbox to verify: https://mxtoolbox.com/domain/sacredportalwellness.com

**Common issues:**
- MX records proxied (orange cloud) - must be gray cloud
- Missing @ symbol in Name field
- Typo in mail server addresses
- Old MX records not deleted

---

### Website not loading

**Check:**
1. A record points to correct IP
2. CNAME for www exists
3. SSL/TLS mode in Cloudflare is "Full (strict)"
4. "Always Use HTTPS" is enabled
5. Wait 30 minutes for propagation
6. Clear browser cache

**Common issues:**
- SSL/TLS mode set to "Flexible" (causes redirect loop)
- A record not proxied
- Vercel domain not configured

---

### SPF/DKIM/DMARC failing

**Check:**
1. Records exist (use nslookup)
2. No typos in record content
3. DKIM record copied completely (very long)
4. Wait 1 hour for propagation
5. Use Google Admin Toolbox to verify

**Common issues:**
- DKIM value truncated (must copy entire long string)
- Quotes added around TXT values (don't add quotes)
- Wrong subdomain for DKIM (must be google._domainkey)

---

## 📝 CLOUDFLARE SETTINGS

### SSL/TLS Settings

**Encryption Mode:** Full (strict)  
**Always Use HTTPS:** On  
**Automatic HTTPS Rewrites:** On  
**Minimum TLS Version:** 1.2  
**Opportunistic Encryption:** On  
**TLS 1.3:** On

### Security Settings

**Security Level:** Medium  
**Challenge Passage:** 30 minutes  
**Browser Integrity Check:** On  
**Privacy Pass Support:** On

### Speed Settings

**Auto Minify:** 
- JavaScript: On
- CSS: On
- HTML: On

**Brotli:** On  
**Rocket Loader:** Off (can cause issues with React/Next.js)  
**Mirage:** Off (not needed for modern images)

### Caching Settings

**Caching Level:** Standard  
**Browser Cache TTL:** Respect Existing Headers  
**Always Online:** On

---

## 🔐 DNSSEC Configuration

**Status:** Should be enabled  
**Algorithm:** ECDSAP256SHA256 (recommended)

**To enable:**
1. Go to Cloudflare DNS dashboard
2. Click "DNSSEC" tab
3. Click "Enable DNSSEC"
4. Copy DS record details
5. Add to domain registrar (if not using Cloudflare Registrar)

**Note:** If using Cloudflare Registrar, DNSSEC is automatic

---

## 📊 DNS RECORD PRIORITY ORDER

**Setup order for minimal downtime:**

1. **First:** Google Workspace verification TXT record
2. **Second:** MX records (all 5)
3. **Third:** SPF record
4. **Fourth:** DKIM record
5. **Fifth:** DMARC record
6. **Last:** Website A/CNAME records (when ready to launch)

**Why this order:**
- Email can be set up before website
- Email verification can happen while building site
- Website records added last to prevent premature traffic

---

## ✅ FINAL CHECKLIST

Before considering DNS setup complete:

- [ ] All MX records added (5 total)
- [ ] SPF record added
- [ ] DKIM record added and verified in Google Admin
- [ ] DMARC record added
- [ ] Test email sent and received successfully
- [ ] Email authentication passing (check in Google Admin)
- [ ] DNSSEC enabled
- [ ] SSL/TLS settings configured in Cloudflare
- [ ] All records verified with online tools
- [ ] DNS propagation complete (check globally)

---

**Last Updated:** March 12, 2026  
**Status:** Reference document for Phase 2 implementation
