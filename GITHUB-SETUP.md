# GitHub Repository Setup Guide

**Repository Name:** `sacredportal`  
**Description:** Website for Sacred Portal Healing and Coaching  
**Visibility:** Private (recommended)

---

## ✅ Pre-Push Checklist

### 1. Files Already Ready
- ✅ `.gitignore` - Configured for Next.js (excludes node_modules, .env, .next, etc.)
- ✅ `README.md` - Updated with Sacred Portal project info
- ✅ `.env.example` - Environment variable template
- ✅ `LICENSE` - Proprietary license
- ✅ Git initialized (done by create-next-app)

### 2. Verify Sensitive Files Are Ignored

**Check that these are in `.gitignore`:**
```
.env*
.env.local
node_modules/
.next/
```

**Never commit:**
- Square API credentials
- Access tokens
- Private keys
- Customer data

### 3. Remove Sensitive Data

Before pushing, verify no secrets in code:
```bash
cd /Users/uspharoh/Websites/sacred-portal-website/app
grep -r "SQUARE_ACCESS_TOKEN" src/
grep -r "sk_" src/
```

Should return no results in source code.

---

## 🚀 Push to GitHub

### Option 1: GitHub Desktop (Easiest)
1. Open GitHub Desktop
2. Add repository: `/Users/uspharoh/Websites/sacred-portal-website/app`
3. Commit all files
4. Publish to GitHub (select Private)

### Option 2: Command Line

```bash
cd /Users/uspharoh/Websites/sacred-portal-website/app

# Check git status
git status

# Add all files
git add .

# Commit
git commit -m "Initial commit: Sacred Portal Wellness website"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/echoeslabmusicsoftware/sacredportal.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 📋 What Will Be Committed

### Included (Safe to commit)
```
✅ src/                    # All source code
✅ public/                 # Static assets
✅ tailwind.config.ts      # Tailwind configuration
✅ package.json            # Dependencies
✅ package-lock.json       # Dependency lock
✅ tsconfig.json           # TypeScript config
✅ next.config.ts          # Next.js config
✅ .prettierrc             # Code formatting
✅ eslint.config.mjs       # Linting rules
✅ README.md               # Project documentation
✅ .env.example            # Environment template
✅ LICENSE                 # License file
```

### Excluded (In .gitignore)
```
❌ .env.local              # Your actual credentials
❌ .env                    # Environment variables
❌ node_modules/           # Dependencies (huge)
❌ .next/                  # Build output
❌ .DS_Store               # Mac system files
```

---

## 🔐 After Pushing to GitHub

### 1. Set Up Vercel Deployment

**In Vercel Dashboard:**
1. Import GitHub repository
2. Framework: Next.js
3. Root Directory: `./` (or `app/` if needed)
4. Add environment variables:
   ```
   SQUARE_ACCESS_TOKEN
   SQUARE_APP_ID
   SQUARE_LOCATION_ID
   SQUARE_ENV
   NEXT_PUBLIC_SQUARE_APP_ID
   NEXT_PUBLIC_SQUARE_LOCATION_ID
   NEXT_PUBLIC_SITE_URL
   ```
5. Deploy

### 2. Enable Branch Protection (Optional)

**In GitHub Settings → Branches:**
- Protect `main` branch
- Require pull request reviews
- Require status checks

### 3. Add Collaborators (If Needed)

**In GitHub Settings → Collaborators:**
- Add team members
- Set permissions

---

## 🔄 Future Workflow

### Making Changes
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes, then commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
# Merge after review
```

### Deploying Updates
- Push to `main` branch
- Vercel auto-deploys
- Monitor deployment in Vercel dashboard

---

## ⚠️ Important Reminders

### Never Commit:
- ❌ `.env.local` or `.env` files
- ❌ Square API credentials
- ❌ Customer data
- ❌ Private keys or tokens
- ❌ `node_modules/` folder

### Always Commit:
- ✅ Source code changes
- ✅ Configuration files (without secrets)
- ✅ Documentation updates
- ✅ `.env.example` (template only)

### If You Accidentally Commit Secrets:
1. **Immediately** rotate the credentials in Square Dashboard
2. Remove from git history:
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch .env.local" \
   --prune-empty --tag-name-filter cat -- --all
   ```
3. Force push (⚠️ dangerous):
   ```bash
   git push origin --force --all
   ```

---

## 📊 Repository Settings Recommendations

### General
- **Visibility:** Private
- **Features:** 
  - ✅ Issues
  - ✅ Projects
  - ❌ Wiki (use docs/ folder instead)
  - ❌ Discussions (unless needed)

### Security
- ✅ Enable Dependabot alerts
- ✅ Enable secret scanning
- ✅ Enable code scanning (if available)

### Branches
- **Default branch:** `main`
- **Branch protection:** Recommended for production

---

## 🎯 Quick Reference

**Repository URL:** `https://github.com/echoeslabmusicsoftware/sacredportal`

**Clone command:**
```bash
git clone https://github.com/echoeslabmusicsoftware/sacredportal.git
```

**Local path:**
```
/Users/uspharoh/Websites/sacred-portal-website/app
```

---

## ✅ Final Checklist Before First Push

- [ ] Verified `.gitignore` includes `.env*`
- [ ] Removed any hardcoded credentials from code
- [ ] Updated `README.md` with project info
- [ ] Created `.env.example` with template
- [ ] Tested that app runs locally
- [ ] Committed all files
- [ ] Set repository to Private
- [ ] Ready to push!

---

**You're ready to push to GitHub!** 🚀

**Last Updated:** March 12, 2026
