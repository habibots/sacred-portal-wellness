# Repository & Environment Setup

**Phase 5 - Step 1**  
**Estimated Time:** 2-3 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Objectives

By the end of this guide, you will have:

- ✅ Git repository created and initialized
- ✅ Next.js App Router project bootstrapped
- ✅ All required dependencies installed
- ✅ Environment variables configured
- ✅ Development server running locally
- ✅ Linting and formatting configured

---

## 📋 Step 1: Create Git Repository

### Option A: GitHub (Recommended)

1. **Go to GitHub** and create a new repository:
   - Repository name: `sacred-portal-website`
   - Description: "Sacred Portal Wellness - Next.js E-commerce Website"
   - Visibility: Private (recommended)
   - Initialize: Do NOT add README, .gitignore, or license yet

2. **Clone the repository locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sacred-portal-website.git
   cd sacred-portal-website
   ```

### Option B: Local Git Repository

```bash
mkdir sacred-portal-website
cd sacred-portal-website
git init
git branch -M main
```

---

## 📋 Step 2: Bootstrap Next.js Project

### Create Next.js App

Run the interactive Next.js installer:

```bash
npx create-next-app@latest .
```

### Recommended Configuration

When prompted, select these options:

```
✔ Would you like to use TypeScript? … Yes (recommended)
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? … Yes (required)
✔ Would you like to customize the default import alias (@/*)? … No
```

**Why these choices?**
- **TypeScript:** Type safety and better developer experience
- **ESLint:** Code quality and consistency
- **Tailwind CSS:** Required for design system implementation
- **src/ directory:** Better project organization
- **App Router:** Required for Phase 5 architecture
- **Default import alias:** Standard convention

### Project Structure Created

```
sacred-portal-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
├── public/
├── node_modules/
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 📋 Step 3: Install Additional Dependencies

### Core Dependencies

```bash
npm install @square/web-sdk zod
```

**Package Purposes:**
- `@square/web-sdk`: Square Web Payments SDK for checkout
- `zod`: Schema validation for API routes and forms

### Development Dependencies

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

**Package Purposes:**
- `prettier`: Code formatting
- `prettier-plugin-tailwindcss`: Automatic Tailwind class sorting

### Optional but Recommended

```bash
npm install clsx tailwind-merge
```

**Package Purposes:**
- `clsx`: Conditional className utility
- `tailwind-merge`: Merge Tailwind classes without conflicts

---

## 📋 Step 4: Configure Environment Variables

### Create Environment Files

1. **Create `.env.local`** (for local development):

```bash
touch .env.local
```

2. **Add to `.env.local`:**

```bash
# Square API Configuration (Sandbox)
SQUARE_ACCESS_TOKEN=your_sandbox_access_token_here
SQUARE_APP_ID=sandbox-sq0idb-xxxxx
SQUARE_LOCATION_ID=your_location_id_here
SQUARE_ENV=sandbox
SQUARE_WEBHOOK_SIGNATURE_KEY=your_webhook_signature_key

# Public Variables (exposed to browser)
NEXT_PUBLIC_SQUARE_APP_ID=sandbox-sq0idb-xxxxx
NEXT_PUBLIC_SQUARE_LOCATION_ID=your_location_id_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

3. **Create `.env.example`** (for documentation):

```bash
# Square API Configuration
SQUARE_ACCESS_TOKEN=
SQUARE_APP_ID=
SQUARE_LOCATION_ID=
SQUARE_ENV=sandbox
SQUARE_WEBHOOK_SIGNATURE_KEY=

# Public Variables
NEXT_PUBLIC_SQUARE_APP_ID=
NEXT_PUBLIC_SQUARE_LOCATION_ID=
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### Verify .gitignore

Ensure `.env.local` is in `.gitignore`:

```bash
# .gitignore should include:
.env*.local
.env
```

**Security Note:** Never commit `.env.local` to Git!

---

## 📋 Step 5: Configure Prettier

### Create `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Create `.prettierignore`

```
node_modules
.next
out
build
dist
*.min.js
*.min.css
```

### Add Format Script

Update `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## 📋 Step 6: Configure ESLint

### Update `.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "warn"
  }
}
```

### Install ESLint Prettier Plugin

```bash
npm install -D eslint-config-prettier
```

---

## 📋 Step 7: Set Up Git Workflow

### Create Branch Strategy

```bash
# Create develop branch
git checkout -b develop

# Create feature branch for initial setup
git checkout -b feature/initial-setup
```

### Recommended Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Individual features
- `fix/*`: Bug fixes
- `hotfix/*`: Production hotfixes

### Initial Commit

```bash
git add .
git commit -m "Initial Next.js project setup with TypeScript and Tailwind"
git push -u origin feature/initial-setup
```

---

## 📋 Step 8: Verify Installation

### Start Development Server

```bash
npm run dev
```

### Check Browser

Open http://localhost:3000 - you should see the Next.js welcome page.

### Run Tests

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Run linter
npm run lint

# Check formatting
npm run format:check

# Build for production (test)
npm run build
```

All commands should complete without errors.

---

## 📋 Step 9: Clean Up Boilerplate

### Remove Default Content

1. **Update `src/app/page.tsx`:**

```tsx
export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>Sacred Portal Wellness</h1>
      <p>Coming soon...</p>
    </main>
  );
}
```

2. **Update `src/app/layout.tsx`:**

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sacred Portal Wellness',
  description: 'Holistic wellness and yoni steaming products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

3. **Clean up `src/app/globals.css`:**

Keep only:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Remove all other default styles.

---

## 📋 Step 10: Create Project Structure

### Create Required Folders

```bash
mkdir -p src/app/api
mkdir -p src/components
mkdir -p src/lib/square
mkdir -p src/lib/utils
mkdir -p src/lib/validation
mkdir -p src/types
mkdir -p public/images
```

### Folder Purpose

```
src/
├── app/                    # App Router pages and layouts
│   ├── api/               # API routes
│   ├── (marketing)/       # Marketing pages group
│   ├── shop/              # Shop pages
│   └── ...
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── ...
├── lib/                   # Utility libraries
│   ├── square/           # Square API clients
│   ├── utils/            # Helper functions
│   └── validation/       # Zod schemas
├── types/                 # TypeScript type definitions
└── styles/                # Additional styles if needed

public/
├── images/                # Static images
└── ...
```

---

## 📋 Step 11: Create Utility Files

### Create `src/lib/utils/cn.ts`

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

This utility helps merge Tailwind classes properly.

### Create `src/types/index.ts`

```typescript
// Placeholder for type definitions
export {};
```

---

## 📋 Step 12: Update package.json

### Add Project Metadata

```json
{
  "name": "sacred-portal-website",
  "version": "0.1.0",
  "private": true,
  "description": "Sacred Portal Wellness - E-commerce website",
  "author": "Sacred Portal Wellness",
  "license": "UNLICENSED"
}
```

---

## ✅ Verification Checklist

Before moving to the next step, verify:

- [ ] Git repository created and initialized
- [ ] Next.js project created with App Router
- [ ] All dependencies installed successfully
- [ ] `.env.local` created with placeholder values
- [ ] `.env.example` created for documentation
- [ ] Prettier and ESLint configured
- [ ] Development server runs without errors
- [ ] Project structure folders created
- [ ] Boilerplate code cleaned up
- [ ] Initial commit pushed to Git
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No linting errors (`npm run lint`)

---

## 🚨 Troubleshooting

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: TypeScript errors

**Solution:**
```bash
# Restart TypeScript server in VS Code
# Command Palette > TypeScript: Restart TS Server

# Or check tsconfig.json is valid
npx tsc --noEmit
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: Environment variables not loading

**Solution:**
- Restart development server after changing `.env.local`
- Ensure variable names are correct (case-sensitive)
- Check for syntax errors in `.env.local`

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Square Developer Documentation](https://developer.squareup.com)

---

## 🎯 Next Steps

Once you've completed this setup:

1. ✅ Commit and push your changes
2. ✅ Update PHASE-05-STATUS.md with completion
3. ✅ Move to **[02-architecture.md](./02-architecture.md)**

---

**Setup Complete!** You're ready to build the application architecture. 🚀

**Last Updated:** March 12, 2026
