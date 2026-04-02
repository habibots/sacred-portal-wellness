# Security Checklist - Phase 2

**Project:** Sacred Portal Wellness Website  
**Last Updated:** March 12, 2026  
**Security Level:** Production-Ready

---

## 🎯 SECURITY OBJECTIVES

1. Protect customer payment information (PCI compliance via Square)
2. Secure business accounts and credentials
3. Prevent unauthorized access to domain and email
4. Protect against email spoofing and phishing
5. Ensure website availability and performance
6. Comply with privacy regulations (CCPA, GDPR)

---

## 🔐 ACCOUNT SECURITY

### Cloudflare Account

- [ ] **2FA Enabled** - Use authenticator app (Google Authenticator, Authy, 1Password)
- [ ] **Strong password** - Minimum 16 characters, unique to this account
- [ ] **Recovery email** - Set and verified
- [ ] **Login notifications** - Enabled
- [ ] **API tokens** - Not created unless needed (use OAuth when possible)
- [ ] **Session timeout** - Set to reasonable duration
- [ ] **Audit log** - Review monthly for suspicious activity

**Password Requirements:**
- Minimum 16 characters
- Mix of uppercase, lowercase, numbers, symbols
- Not used for any other account
- Stored in password manager only

---

### Google Workspace Admin

- [ ] **2FA Enabled** - Required for admin account
- [ ] **Strong password** - Minimum 16 characters, unique
- [ ] **Recovery email** - Set to personal email (aahmm9966@gmail.com)
- [ ] **Recovery phone** - Set and verified
- [ ] **Admin roles** - Only assign to necessary accounts
- [ ] **Security checkup** - Run monthly
- [ ] **Less secure app access** - Disabled
- [ ] **Advanced protection** - Consider enabling for admin account
- [ ] **Session control** - Set appropriate timeout
- [ ] **Login alerts** - Enabled

**Admin Security Settings:**
1. Go to admin.google.com
2. Security → 2-Step Verification → Enforce for all users
3. Security → Less secure apps → Disable
4. Security → Advanced Protection Program → Consider enrolling

---

### Square Account

- [ ] **2FA Enabled** - Required for production access
- [ ] **Strong password** - Minimum 16 characters, unique
- [ ] **Recovery email** - Set and verified
- [ ] **Team member access** - Limit to necessary personnel only
- [ ] **API permissions** - Least privilege (only required scopes)
- [ ] **Webhook signatures** - Verify all webhook requests
- [ ] **PCI compliance** - Maintained by Square (verify annually)
- [ ] **Fraud detection** - Enable Square's fraud tools
- [ ] **Transaction alerts** - Enable for unusual activity

---

## 🌐 DOMAIN SECURITY

### Cloudflare Domain Settings

- [ ] **Auto-renewal** - Enabled (prevent accidental expiration)
- [ ] **Domain lock** - Enabled (prevent unauthorized transfers)
- [ ] **WHOIS privacy** - Enabled (hide personal information)
- [ ] **DNSSEC** - Enabled (prevent DNS hijacking)
- [ ] **CAA records** - Consider adding (restrict SSL certificate issuance)
- [ ] **Registrar lock** - Enabled if available
- [ ] **Contact information** - Up to date
- [ ] **Expiration alerts** - Enabled (60, 30, 7 days before)

**CAA Record (Optional but Recommended):**
```
Type: CAA
Name: @
Tag: issue
Value: letsencrypt.org
```
This restricts SSL certificates to Let's Encrypt only (used by Vercel)

---

### DNS Security

- [ ] **DNSSEC** - Enabled and verified
- [ ] **DNS over HTTPS** - Available via Cloudflare
- [ ] **Rate limiting** - Configured to prevent DNS abuse
- [ ] **DDoS protection** - Enabled (automatic with Cloudflare)
- [ ] **Firewall rules** - Review and configure as needed
- [ ] **Bot management** - Configure for production traffic

---

## 📧 EMAIL SECURITY

### Email Authentication

- [ ] **SPF record** - Configured and tested
- [ ] **DKIM signing** - Enabled and verified
- [ ] **DMARC policy** - Set to quarantine or reject
- [ ] **DMARC reports** - Monitored monthly
- [ ] **MX records** - Correct and verified
- [ ] **TLS encryption** - Enforced for email transport

**Test Email Security:**
- Send email to mail-tester.com
- Target score: 10/10
- Review and fix any issues

---

### Google Workspace Security

- [ ] **2FA required** - For all users
- [ ] **Password policy** - Strong passwords enforced
- [ ] **Suspicious activity alerts** - Enabled
- [ ] **Email encryption** - S/MIME or TLS
- [ ] **Attachment scanning** - Enabled (malware/phishing)
- [ ] **Link scanning** - Enabled
- [ ] **Spoofing protection** - Enabled
- [ ] **External recipient warnings** - Enabled
- [ ] **Confidential mode** - Available for sensitive emails
- [ ] **Data loss prevention** - Configure rules as needed

**Recommended Settings:**
1. Admin Console → Security → Authentication → 2-Step Verification → ON
2. Admin Console → Security → Less secure apps → OFF
3. Admin Console → Apps → Google Workspace → Gmail → Safety
   - Enable: Phishing and malware protection
   - Enable: Protect against spoofing and authentication
   - Enable: Attachment protection
   - Enable: Links and external images protection

---

## 🔑 API KEY SECURITY

### Environment Variables

- [ ] **Never commit to Git** - Add .env files to .gitignore
- [ ] **Use .env.local** - For local development
- [ ] **Use Vercel env vars** - For production
- [ ] **Separate prod/sandbox** - Different keys for each environment
- [ ] **Rotate regularly** - Every 90 days minimum
- [ ] **Least privilege** - Only grant necessary permissions
- [ ] **Monitor usage** - Check API logs for anomalies

**Required .gitignore entries:**
```
.env
.env.local
.env.production
.env.development
.env*.local
```

---

### Square API Security

- [ ] **Production tokens** - Stored in Vercel environment variables only
- [ ] **Sandbox tokens** - Stored in .env.local (not committed)
- [ ] **Token rotation** - Schedule quarterly rotation
- [ ] **Webhook signatures** - Always verify
- [ ] **HTTPS only** - All API calls over HTTPS
- [ ] **IP allowlisting** - Consider for production (if static IP available)
- [ ] **Rate limiting** - Respect Square's rate limits
- [ ] **Error handling** - Don't expose API errors to users

**Webhook Signature Verification (Required):**
```javascript
const crypto = require('crypto');

function verifySquareWebhook(body, signature, signatureKey) {
  const hmac = crypto.createHmac('sha256', signatureKey);
  hmac.update(body);
  const hash = hmac.digest('base64');
  return hash === signature;
}
```

---

## 🌍 WEBSITE SECURITY

### Cloudflare Security Settings

- [ ] **SSL/TLS mode** - Full (strict)
- [ ] **Always Use HTTPS** - Enabled
- [ ] **Automatic HTTPS Rewrites** - Enabled
- [ ] **Minimum TLS version** - 1.2 or higher
- [ ] **TLS 1.3** - Enabled
- [ ] **HSTS** - Enabled (max-age=31536000)
- [ ] **Security headers** - Configured (see below)
- [ ] **WAF rules** - Configured for common threats
- [ ] **Rate limiting** - Configured to prevent abuse
- [ ] **DDoS protection** - Enabled (automatic)

**Security Headers (Configure in Vercel or Cloudflare):**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://web.squarecdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://connect.squareup.com;
```

---

### Next.js Security

- [ ] **Dependencies updated** - Run npm audit monthly
- [ ] **No secrets in code** - Use environment variables
- [ ] **Input validation** - Validate all user inputs
- [ ] **Output encoding** - Prevent XSS
- [ ] **CSRF protection** - Implement for forms
- [ ] **Rate limiting** - Implement for API routes
- [ ] **Error handling** - Don't expose stack traces
- [ ] **Logging** - Log security events (failed logins, etc.)

**Package Security:**
```bash
# Check for vulnerabilities
npm audit

# Fix automatically (if possible)
npm audit fix

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

---

## 💳 PAYMENT SECURITY

### Square Web Payments SDK

- [ ] **PCI compliance** - Maintained by Square (verify)
- [ ] **Card data never touches server** - Tokenization only
- [ ] **HTTPS only** - All payment pages over HTTPS
- [ ] **SCA compliance** - 3D Secure enabled (automatic with Square)
- [ ] **Fraud detection** - Square's fraud tools enabled
- [ ] **Test mode** - Use sandbox for development
- [ ] **Error handling** - Generic error messages to users
- [ ] **Transaction logging** - Log for audit purposes (no card data)

**Never Store:**
- Full credit card numbers
- CVV codes
- Expiration dates (unless tokenized by Square)

**Safe to Store:**
- Square payment tokens
- Last 4 digits of card
- Card brand (Visa, Mastercard, etc.)
- Customer billing address

---

## 🔍 MONITORING & ALERTS

### Cloudflare Monitoring

- [ ] **Email alerts** - Configured for security events
- [ ] **Analytics** - Review weekly
- [ ] **Firewall events** - Review for blocked threats
- [ ] **Rate limiting** - Monitor for abuse patterns
- [ ] **SSL/TLS alerts** - Certificate expiration warnings

---

### Google Workspace Monitoring

- [ ] **Security dashboard** - Review weekly
- [ ] **Login activity** - Monitor for suspicious logins
- [ ] **Email logs** - Review for delivery issues
- [ ] **DMARC reports** - Review monthly
- [ ] **User activity** - Monitor for unusual behavior

---

### Square Monitoring

- [ ] **Transaction alerts** - Enable for unusual activity
- [ ] **Chargeback alerts** - Enable and respond promptly
- [ ] **API usage** - Monitor for anomalies
- [ ] **Failed payments** - Review for patterns
- [ ] **Inventory alerts** - Low stock notifications

---

## 🗓️ SECURITY MAINTENANCE SCHEDULE

### Daily
- Monitor transaction alerts
- Check email delivery

### Weekly
- Review Cloudflare analytics
- Check Google Workspace security dashboard
- Review failed login attempts

### Monthly
- Review DMARC reports
- Run npm audit
- Update dependencies
- Review API usage logs
- Check SSL certificate status
- Review firewall events

### Quarterly
- Rotate API tokens
- Review and update security policies
- Audit user access permissions
- Test backup and recovery procedures
- Review and update security documentation

### Annually
- Comprehensive security audit
- Review PCI compliance (Square)
- Update privacy policy
- Review GDPR/CCPA compliance
- Penetration testing (optional but recommended)

---

## 🚨 INCIDENT RESPONSE PLAN

### If Account Compromised

1. **Immediate Actions:**
   - Change all passwords immediately
   - Revoke all API tokens
   - Enable 2FA if not already enabled
   - Review recent activity logs
   - Contact support (Cloudflare/Google/Square)

2. **Investigation:**
   - Identify entry point
   - Assess damage
   - Document timeline
   - Preserve evidence

3. **Recovery:**
   - Restore from backups if needed
   - Reset all credentials
   - Notify affected users (if customer data compromised)
   - Implement additional security measures

4. **Post-Incident:**
   - Document lessons learned
   - Update security procedures
   - Train team on new procedures

---

### If Website Defaced/Hacked

1. **Immediate Actions:**
   - Take site offline (Cloudflare "Under Attack" mode)
   - Identify attack vector
   - Restore from last known good backup
   - Change all credentials

2. **Investigation:**
   - Review server logs
   - Check for backdoors
   - Scan for malware
   - Identify vulnerabilities

3. **Recovery:**
   - Patch vulnerabilities
   - Restore clean version
   - Update all dependencies
   - Implement additional WAF rules

---

### If Payment Fraud Detected

1. **Immediate Actions:**
   - Contact Square support immediately
   - Suspend affected transactions
   - Document fraudulent activity
   - Preserve evidence

2. **Investigation:**
   - Review transaction patterns
   - Check for compromised accounts
   - Verify fraud detection settings

3. **Prevention:**
   - Enable additional fraud checks
   - Implement velocity limits
   - Review and update fraud rules

---

## 📋 COMPLIANCE CHECKLIST

### PCI DSS (Payment Card Industry)
- [ ] **Handled by Square** - Verify annually
- [ ] **No card data stored** - Tokens only
- [ ] **HTTPS everywhere** - All pages encrypted
- [ ] **Secure coding practices** - Follow OWASP guidelines

### CCPA (California Consumer Privacy Act)
- [ ] **Privacy policy** - Posted and up to date
- [ ] **Data collection disclosure** - What data is collected
- [ ] **Right to deletion** - Process in place
- [ ] **Do Not Sell** - Honored (not applicable if no data selling)
- [ ] **Contact method** - For privacy requests

### GDPR (General Data Protection Regulation)
- [ ] **Privacy policy** - GDPR-compliant
- [ ] **Cookie consent** - If using tracking cookies
- [ ] **Data processing agreement** - With third parties
- [ ] **Right to access** - Process in place
- [ ] **Right to erasure** - Process in place
- [ ] **Data breach notification** - Plan in place (72 hours)

---

## ✅ FINAL SECURITY VERIFICATION

Before launching:

- [ ] All accounts have 2FA enabled
- [ ] All passwords are strong and unique
- [ ] All credentials stored in password manager
- [ ] Domain has auto-renewal and lock enabled
- [ ] DNSSEC is enabled
- [ ] Email authentication (SPF/DKIM/DMARC) is configured
- [ ] SSL/TLS is set to Full (strict)
- [ ] Security headers are configured
- [ ] API keys are in environment variables (not in code)
- [ ] .env files are in .gitignore
- [ ] Dependencies are up to date (npm audit clean)
- [ ] Square sandbox tested thoroughly
- [ ] Cloudflare WAF rules configured
- [ ] Monitoring and alerts enabled
- [ ] Incident response plan documented
- [ ] Privacy policy posted
- [ ] Security maintenance schedule created

---

**Security Level:** Production-Ready ✅  
**Last Security Audit:** March 12, 2026  
**Next Audit Due:** June 12, 2026
