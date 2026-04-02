# Deployment to Vercel

**Phase 5 - Step 8**  
**Estimated Time:** 2-3 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Objectives

By the end of this guide, you will have:

- ✅ Vercel project created and configured
- ✅ Environment variables set in Vercel
- ✅ Staging deployment with sandbox Square credentials
- ✅ Production deployment ready
- ✅ Preview deployments configured
- ✅ Custom domain connected

---

## 📋 Step 1: Prepare for Deployment

### Verify Build Locally

```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Run production build
npm run build

# Test production build locally
npm run start
```

### Check for Build Errors

Ensure no errors in:
- TypeScript compilation
- ESLint warnings
- Missing environment variables
- Import errors

---

## 📋 Step 2: Create Vercel Project

### Option A: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: sacred-portal-website
# - Directory: ./
# - Override settings? No
```

### Option B: Vercel Dashboard

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next
   - **Install Command:** `npm install`

---

## 📋 Step 3: Configure Environment Variables

### Staging Environment (Sandbox)

In Vercel Dashboard → Settings → Environment Variables:

```bash
# Square API Configuration (Sandbox)
SQUARE_ACCESS_TOKEN=sandbox_access_token_here
SQUARE_APP_ID=sandbox-sq0idb-xxxxx
SQUARE_LOCATION_ID=sandbox_location_id
SQUARE_ENV=sandbox
SQUARE_WEBHOOK_SIGNATURE_KEY=sandbox_webhook_key

# Public Variables
NEXT_PUBLIC_SQUARE_APP_ID=sandbox-sq0idb-xxxxx
NEXT_PUBLIC_SQUARE_LOCATION_ID=sandbox_location_id
NEXT_PUBLIC_SITE_URL=https://sacred-portal-staging.vercel.app

# Revalidation
REVALIDATION_SECRET=generate_random_secret_here

# Environment
NODE_ENV=production
```

**Environment:** Select "Preview" for staging

### Production Environment

Add separate variables for production:

```bash
# Square API Configuration (Production)
SQUARE_ACCESS_TOKEN=production_access_token_here
SQUARE_APP_ID=sq0idp-xxxxx
SQUARE_LOCATION_ID=production_location_id
SQUARE_ENV=production
SQUARE_WEBHOOK_SIGNATURE_KEY=production_webhook_key

# Public Variables
NEXT_PUBLIC_SQUARE_APP_ID=sq0idp-xxxxx
NEXT_PUBLIC_SQUARE_LOCATION_ID=production_location_id
NEXT_PUBLIC_SITE_URL=https://sacredportalwellness.com

# Revalidation
REVALIDATION_SECRET=different_random_secret_here

# Environment
NODE_ENV=production
```

**Environment:** Select "Production"

---

## 📋 Step 4: Configure Deployment Settings

### Build & Development Settings

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### Root Directory

```
./
```

### Node.js Version

```
18.x (or latest LTS)
```

---

## 📋 Step 5: Set Up Custom Domain

### Add Domain to Vercel

1. Go to Project Settings → Domains
2. Add domain: `sacredportalwellness.com`
3. Add www subdomain: `www.sacredportalwellness.com`

### Configure DNS

Update DNS records at your domain registrar:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Verify Domain

Wait for DNS propagation (can take up to 48 hours, usually faster).

Vercel will automatically provision SSL certificate.

---

## 📋 Step 6: Configure Git Integration

### Automatic Deployments

Vercel automatically deploys:
- **Production:** Pushes to `main` branch
- **Preview:** Pushes to other branches (develop, feature/*)

### Branch Configuration

In Vercel Dashboard → Settings → Git:

**Production Branch:** `main`

**Preview Branches:**
- `develop`
- `feature/*`
- `fix/*`

### Deployment Protection

Enable deployment protection for production:
- Require approval for production deployments
- Enable Vercel Authentication for preview deployments

---

## 📋 Step 7: Test Staging Deployment

### Deploy to Staging

```bash
# Push to develop branch
git checkout develop
git push origin develop
```

Vercel will automatically create a preview deployment.

### Staging Checklist

Test these flows on staging:

- [ ] Homepage loads correctly
- [ ] Shop page displays products from Square sandbox
- [ ] Product detail pages work
- [ ] Add to cart functionality
- [ ] Cart persistence (refresh page)
- [ ] Checkout form validation
- [ ] Shipping calculation (test San Diego ZIP)
- [ ] Payment with Square test card
- [ ] Order confirmation page
- [ ] All images load
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Accessibility (keyboard navigation)

### Square Test Cards

Use these test cards in sandbox:

**Successful Payment:**
```
Card Number: 4111 1111 1111 1111
CVV: 111
Expiry: Any future date
ZIP: Any valid ZIP
```

**Declined Payment:**
```
Card Number: 4000 0000 0000 0002
CVV: 111
Expiry: Any future date
ZIP: Any valid ZIP
```

---

## 📋 Step 8: Configure Webhooks

### Set Up Square Webhook

1. Go to Square Developer Dashboard
2. Navigate to Webhooks
3. Create webhook endpoint:

**Staging:**
```
URL: https://sacred-portal-staging.vercel.app/api/webhook/square
Events: order.created, order.updated, payment.created, payment.updated
```

**Production:**
```
URL: https://sacredportalwellness.com/api/webhook/square
Events: order.created, order.updated, payment.created, payment.updated
```

4. Copy Signature Key to Vercel environment variables

---

## 📋 Step 9: Performance Monitoring

### Enable Vercel Analytics

```tsx
// Already added in layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### Monitor Deployments

Check Vercel Dashboard for:
- Build logs
- Runtime logs
- Performance metrics
- Error tracking

---

## 📋 Step 10: Production Deployment

### Pre-Production Checklist

Before deploying to production:

- [ ] All staging tests passed
- [ ] Production environment variables configured
- [ ] Square production credentials ready
- [ ] Custom domain configured and verified
- [ ] SSL certificate active
- [ ] All content reviewed and approved
- [ ] Performance benchmarks met (Lighthouse 90+)
- [ ] Accessibility compliance verified
- [ ] Legal pages complete (Privacy, Returns, Disclaimer)
- [ ] Google Analytics configured (if using)
- [ ] Error monitoring set up

### Deploy to Production

```bash
# Merge to main branch
git checkout main
git merge develop
git push origin main
```

Vercel will automatically deploy to production.

### Post-Deployment Verification

After production deployment:

1. **Test Critical Flows:**
   - Browse products
   - Add to cart
   - Complete checkout with test card
   - Verify order in Square dashboard

2. **Check Performance:**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Test on mobile devices

3. **Verify Integrations:**
   - Square catalog syncing
   - Payment processing
   - Webhook receiving events

4. **Monitor Errors:**
   - Check Vercel logs
   - Monitor error rates
   - Set up alerts

---

## 📋 Step 11: Rollback Strategy

### Instant Rollback

If issues occur in production:

1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Git Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

---

## 🔧 Troubleshooting

### Build Fails

**Check:**
- Build logs in Vercel dashboard
- TypeScript errors
- Missing dependencies
- Environment variables

**Solution:**
```bash
# Test build locally
npm run build

# Check for errors
npm run lint
npx tsc --noEmit
```

### Environment Variables Not Working

**Check:**
- Variable names match exactly (case-sensitive)
- Variables assigned to correct environment (Production/Preview)
- Redeploy after adding variables

**Solution:**
Redeploy the project after adding/updating environment variables.

### Domain Not Connecting

**Check:**
- DNS records configured correctly
- DNS propagation complete (use https://dnschecker.org)
- SSL certificate provisioned

**Solution:**
Wait for DNS propagation (up to 48 hours) or contact Vercel support.

### Square API Errors

**Check:**
- Correct environment (sandbox vs production)
- Valid access tokens
- Location ID matches environment
- API permissions enabled

**Solution:**
Verify credentials in Square Developer Dashboard.

---

## 📊 Deployment Checklist

### Pre-Deployment
- [ ] Local build successful
- [ ] All tests passing
- [ ] Environment variables documented
- [ ] Git repository clean

### Vercel Setup
- [ ] Project created in Vercel
- [ ] Git integration configured
- [ ] Environment variables set
- [ ] Build settings configured

### Staging
- [ ] Staging deployment successful
- [ ] All features tested
- [ ] Performance verified
- [ ] Accessibility checked

### Production
- [ ] Production environment variables set
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Production deployment successful
- [ ] Post-deployment tests passed

### Monitoring
- [ ] Analytics enabled
- [ ] Error tracking configured
- [ ] Performance monitoring active
- [ ] Webhook configured

---

## 🎯 Next Steps

After successful deployment:

1. ✅ Monitor production for 24-48 hours
2. ✅ Document any issues or improvements
3. ✅ Update PHASE-05-STATUS.md as complete
4. ✅ Prepare for Phase 6 (SEO Optimization)
5. ✅ Schedule Phase 7 (Testing)

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Square Webhooks](https://developer.squareup.com/docs/webhooks/overview)
- [Custom Domains on Vercel](https://vercel.com/docs/concepts/projects/domains)

---

**Deployment Complete!** Your site is live! 🚀

**Last Updated:** March 12, 2026
