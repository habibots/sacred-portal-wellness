# Client Onboarding Call Plan
# Sacred Portal Wellness — Account Setup Session

**Purpose:** Walk the client (Amber) through setting up all accounts live on the phone.
**Format:** Screen share recommended — have Amber share her screen or walk her through each step verbally.
**Estimated Time:** 60–90 minutes
**Date:** To be scheduled

---

## Before the Call — Developer Prep

Have these tabs open and ready:
- cloudflare.com
- workspace.google.com
- developer.squareup.com
- squareup.com (client will be logged in here)
- your notes for DNS records (all listed below)

---

## PHASE 1 — Cloudflare: Domain Registration
**Time estimate: 10–15 minutes**
**Who does it:** Client (Amber) on her own device

### Steps:

**1.1 — Create Cloudflare Account**
- Go to cloudflare.com → Sign Up
- Use her personal email (e.g. aahmm9966@gmail.com) or create a new business one
- Verify email when confirmation arrives
- Enable 2FA immediately after login (Authenticator app recommended)

**1.2 — Register the Domain**
- In Cloudflare dashboard → left sidebar → **Domain Registration** → **Register Domains**
- Search: `sacredportalwellness.com`
- Confirm it's available → click **Purchase**
- Cost: ~$10.44/year — billed to her card
- Fill in contact info (name, address, email, phone)
- WHOIS privacy is enabled by default — no action needed
- Complete purchase

**1.3 — Confirm Domain is Active**
- After purchase, domain dashboard shows **Status: Active**
- DNS is automatically managed by Cloudflare — no nameserver changes needed
- Go to: Cloudflare Dashboard → sacredportalwellness.com → **DNS** → confirm you can see the DNS Records tab

> ✅ CHECKPOINT: Domain purchased, DNS tab accessible. Move to Phase 2.

---

## PHASE 2 — Google Workspace: Professional Email
**Time estimate: 20–25 minutes**
**Who does it:** Developer guides, client completes on her device

### Steps:

**2.1 — Sign Up for Google Workspace**
- Go to workspace.google.com → **Get Started**
- Business name: `Sacred Portal Wellness`
- Number of employees: **Just you**
- Country: United States
- Click Next

**2.2 — Connect the Domain**
- Select: **I have a domain I want to use**
- Enter: `sacredportalwellness.com`
- Click Next

**2.3 — Create Admin Account**
- First email: `business@sacredportalwellness.com`
- Create a strong password (save in password manager)
- This becomes the Google Workspace admin account
- Click **Agree and Create Account**

**2.4 — Verify Domain Ownership in Cloudflare**

Google will give a TXT record to prove she owns the domain.

In a separate tab — Cloudflare DNS:
- Go to sacredportalwellness.com → DNS → **Add Record**
- Type: `TXT`
- Name: `@`
- Value: *(paste the code Google gives)*
- TTL: Auto
- Click **Save**

Back in Google Workspace setup → click **Verify**
> Note: DNS can take 1–5 minutes to propagate. If it fails, wait 2 minutes and try again.

**2.5 — Add MX Records for Email Routing**

In Cloudflare DNS → Add these 5 MX records one at a time:

| Type | Name | Mail Server | Priority |
|------|------|-------------|----------|
| MX | @ | ASPMX.L.GOOGLE.COM | 1 |
| MX | @ | ALT1.ASPMX.L.GOOGLE.COM | 5 |
| MX | @ | ALT2.ASPMX.L.GOOGLE.COM | 5 |
| MX | @ | ALT3.ASPMX.L.GOOGLE.COM | 10 |
| MX | @ | ALT4.ASPMX.L.GOOGLE.COM | 10 |

**2.6 — Add SPF Record (Email Authentication)**
- Type: `TXT`
- Name: `@`
- Value: `v=spf1 include:_spf.google.com ~all`
- TTL: Auto → Save

**2.7 — Add DKIM Record**
- In Google Workspace Admin → Apps → Google Workspace → Gmail → Authenticate email
- Generate DKIM key → copy the DNS record it gives
- In Cloudflare DNS → Add Record
- Type: `TXT`
- Name: `google._domainkey`
- Value: *(paste from Google)*
- Save

**2.8 — Add DMARC Record**
- Type: `TXT`
- Name: `_dmarc`
- Value: `v=DMARC1; p=quarantine; rua=mailto:business@sacredportalwellness.com`
- Save

**2.9 — Create Second Email**
- In Google Workspace Admin → Users → Add User
- First name: Sacred Portal
- Last name: Info
- Email: `info@sacredportalwellness.com`
- This is used for the public contact form on the website

**2.10 — Test Email**
- Send a test email from `business@` to her personal Gmail
- Confirm it arrives
- Reply back and confirm it comes through

> ✅ CHECKPOINT: Both email accounts working, DNS records saved. Move to Phase 3.

---

## PHASE 3 — Square: Link Existing Account
**Time estimate: 10–15 minutes**
**Who does it:** Client logs into her Square account

### Steps:

**3.1 — Log Into Square Developer Dashboard**
- Go to developer.squareup.com
- Sign in with her existing Square credentials
- Click **Open** or **Create Application**
  - If no app exists: click **+** to create one
  - Name: `Sacred Portal Wellness Website`

**3.2 — Get API Credentials (Production)**
- Inside the application → click **Production** tab (not Sandbox)
- Copy and save securely:
  - **Application ID** → `SQUARE_APP_ID`
  - **Access Token** (click Show) → `SQUARE_ACCESS_TOKEN`

**3.3 — Get Location ID**
- Go to main Square Dashboard (not Developer) → **Account & Settings** → **Business** → **Locations**
- Copy the **Location ID** for her primary location → `SQUARE_LOCATION_ID`

**3.4 — Confirm Products Are in Square Catalog**
- In Square Dashboard → **Items & Orders** → **Items**
- Confirm her yoni steaming products are listed
- If products aren't in Square yet → they need to be added here before the website shop will work
- Each product needs: name, description, price, photo (optional but recommended)

**3.5 — Update Website URL in Square**
- In Square Dashboard → **Account & Settings** → **Business information**
- Website field: `https://sacredportalwellness.com`
- Save

**3.6 — Note Credentials for Developer**

Have client securely send you (encrypted message, password manager share, or read aloud):
```
SQUARE_ACCESS_TOKEN=
SQUARE_APP_ID=
SQUARE_LOCATION_ID=
SQUARE_ENV=production
```

> ✅ CHECKPOINT: Square API keys in hand. Move to Phase 4.

---

## PHASE 4 — DigitalOcean: Server Setup
**Time estimate: 10 minutes (client), rest is developer work**
**Who does it:** Client creates account, developer does the rest

### Steps:

**4.1 — Client Creates DigitalOcean Account**
- Go to digitalocean.com → Sign Up
- Use `business@sacredportalwellness.com`
- Add billing (credit card)
- Enable 2FA

**4.2 — Add Developer to Team (Optional but recommended)**
- In DigitalOcean → Settings → Team → Invite Member
- Invite developer's email with **Full Access**
- This avoids sharing passwords

**OR** — Client shares DigitalOcean login temporarily while developer sets up the server, then changes password at handover.

**4.3 — Developer Creates the Droplet**
*(Developer does this after the call)*
- Ubuntu 24.04 LTS
- Basic plan: $6/month
- Region: **SFO3** (San Francisco — closest to San Diego)
- Add developer's SSH key
- Hostname: `sacred-portal`

> ✅ CHECKPOINT: DigitalOcean account created and developer has access.

---

## PHASE 5 — Cloudflare DNS: Point Domain to Server
**Time estimate: 5 minutes**
**Who does it:** Developer (after Droplet is created and has an IP)

### Steps:

**5.1 — Get the Droplet IP**
- In DigitalOcean → Droplets → sacred-portal → copy the IP address

**5.2 — Add DNS A Records in Cloudflare**
- Go to Cloudflare → sacredportalwellness.com → DNS → Add Record

| Type | Name | IPv4 Address | Proxy |
|------|------|--------------|-------|
| A | @ | YOUR_DROPLET_IP | Proxied (orange cloud) |
| A | www | YOUR_DROPLET_IP | Proxied (orange cloud) |

**5.3 — Set SSL Mode**
- In Cloudflare → sacredportalwellness.com → **SSL/TLS** → Overview
- Set mode to: **Full**

> ✅ CHECKPOINT: Domain now routes through Cloudflare to DigitalOcean.

---

## PHASE 6 — Server & App Deployment
**Time estimate: 30–45 minutes (developer only, after call)**

```bash
# 1. SSH into the droplet
ssh root@YOUR_DROPLET_IP

# 2. Create non-root user
adduser sacred
usermod -aG sudo sacred

# 3. Install Node.js + tools
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx
sudo npm install -g pm2

# 4. Clone repo and install
git clone https://github.com/CLIENT_GITHUB/sacredportal.git /var/www/sacredportal
cd /var/www/sacredportal/app
npm install

# 5. Create environment file
cp .env.example .env.local
nano .env.local
# Fill in all Square credentials + site URL

# 6. Build and start
npm run build
pm2 start "npm run start" --name sacred-portal -- --port 3000
pm2 save && pm2 startup
```

**Nginx Config** `/etc/nginx/sites-available/sacredportal`:
```nginx
server {
    listen 80;
    server_name sacredportalwellness.com www.sacredportalwellness.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/sacredportal /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

> ✅ CHECKPOINT: Site live at sacredportalwellness.com

---

## PHASE 7 — Square Webhook (After Site is Live)
**Time estimate: 5 minutes**

- Go to Square Developer Dashboard → your app → **Webhooks** → Add Webhook
- URL: `https://sacredportalwellness.com/api/webhooks/square`
- Events: `payment.completed`, `order.updated`
- Copy the **Signature Key** → add to `.env.local` as `SQUARE_WEBHOOK_SIGNATURE_KEY`
- Restart app: `pm2 restart sacred-portal`

---

## HANDOVER CHECKLIST
**After everything is tested and working:**

### Client Changes These Passwords:
- [ ] Cloudflare account password
- [ ] DigitalOcean account password
- [ ] Google Workspace admin password (`business@sacredportalwellness.com`)
- [ ] Square account password (optional — API keys can just be rotated)

### Client Rotates Square API Keys:
1. Square Developer Dashboard → app → Production → regenerate Access Token
2. SSH into server and update `.env.local`:
   ```bash
   ssh sacred@YOUR_DROPLET_IP
   nano /var/www/sacredportal/app/.env.local
   # Update SQUARE_ACCESS_TOKEN with new value
   pm2 restart sacred-portal
   ```

### Developer is Removed From:
- [ ] DigitalOcean Team (Settings → Team → remove member)
- [ ] GitHub repo (if added as collaborator)
- [ ] Developer's SSH key removed from server:
   ```bash
   nano ~/.ssh/authorized_keys
   # Delete the developer's public key line
   ```

---

## CREDENTIALS TRACKER
*Fill this in during the call — store securely, never commit to git*

```
CLOUDFLARE
  Email:
  Domain: sacredportalwellness.com
  2FA: enabled

GOOGLE WORKSPACE
  Admin Email: business@sacredportalwellness.com
  Recovery Email: aahmm9966@gmail.com
  2FA: enabled

SQUARE (API KEYS ONLY — not login)
  SQUARE_ACCESS_TOKEN:
  SQUARE_APP_ID:
  SQUARE_LOCATION_ID:
  SQUARE_ENV: production
  SQUARE_WEBHOOK_SIGNATURE_KEY: (added after site is live)

DIGITALOCEAN
  Email: business@sacredportalwellness.com
  Droplet IP:
  Region: SFO3
  2FA: enabled

SITE
  URL: https://sacredportalwellness.com
  NEXT_PUBLIC_SITE_URL: https://sacredportalwellness.com
  REVALIDATION_SECRET: (generate a random string)
  NODE_ENV: production
```

---

## MONTHLY COSTS AFTER SETUP

| Item | Cost |
|------|------|
| Domain (Cloudflare) | $10.44/year (~$0.87/mo) |
| Google Workspace (2 users) | $14.00/month |
| DigitalOcean Droplet | $6.00/month |
| Cloudflare (DNS + CDN + proxy) | Free |
| Square transaction fees | 2.9% + $0.30 per sale |
| **Monthly fixed total** | **~$20.87/month** |
| **Annual fixed total** | **~$250.44/year** |

---

**Last Updated:** March 15, 2026
**Status:** Ready for client call
