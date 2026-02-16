# Portfolio Deployment Guide

This guide covers deploying your portfolio to **Vercel** and **GitHub Pages** - both 100% free!

---

## 🚀 Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy React applications.

### Prerequisites
- GitHub account
- Your portfolio code pushed to GitHub

### Step-by-Step Instructions

#### 1. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
cd C:\Users\Admin\.gemini\antigravity\scratch\portfolio
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub (https://github.com/new)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel Website (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** and sign in with GitHub
3. Click **"Add New Project"**
4. Select your `portfolio` repository
5. Vercel auto-detects Vite settings ✅
6. Click **"Deploy"**
7. Done! Your site is live in ~2 minutes 🎉

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio (or your choice)
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

#### 3. Your Live URL

After deployment, you'll get:
- **Preview URL**: `https://portfolio-xyz.vercel.app`
- **Production URL**: `https://your-project.vercel.app`

#### 4. Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click **"Domains"**
3. Add your custom domain (e.g., `yourname.com`)
4. Follow DNS configuration instructions
5. Free SSL certificate included! 🔒

---

## 📄 Option 2: Deploy to GitHub Pages

GitHub Pages is completely free and integrated with GitHub.

### Prerequisites
- GitHub account
- Git installed

### Step-by-Step Instructions

#### 1. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
cd C:\Users\Admin\.gemini\antigravity\scratch\portfolio
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub (https://github.com/new)
# Repository name: portfolio (or your-username.github.io for personal site)

# Link and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### 2. Configure GitHub Pages

**Method A: Using GitHub Actions (Automatic - Already Set Up!)**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **"Source"**, select **"GitHub Actions"**
4. The workflow file (`.github/workflows/deploy.yml`) is already created!
5. Every push to `main` will auto-deploy 🎉

**Method B: Manual Deployment**

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

#### 3. Update Base Path (If Needed)

If your repository is NOT named `username.github.io`:

1. Open `vite.config.js`
2. Change line 7:
   ```javascript
   base: '/portfolio/', // Replace 'portfolio' with your repo name
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update base path for GitHub Pages"
   git push
   ```

#### 4. Your Live URL

Your portfolio will be available at:
- **Personal site**: `https://YOUR_USERNAME.github.io/`
- **Project site**: `https://YOUR_USERNAME.github.io/portfolio/`

Wait 2-5 minutes for the first deployment to complete.

#### 5. Custom Domain (Optional)

1. Go to repository **Settings** → **Pages**
2. Enter your custom domain
3. Add CNAME record to your domain DNS:
   ```
   CNAME → YOUR_USERNAME.github.io
   ```
4. Enable **"Enforce HTTPS"** ✅

---

## 🔄 Automatic Deployments

### Vercel
- ✅ **Automatic**: Every push to `main` triggers deployment
- ✅ **Preview**: Every pull request gets a preview URL
- ✅ **Instant**: Deploys in ~1-2 minutes

### GitHub Pages
- ✅ **Automatic**: GitHub Actions workflow deploys on push
- ✅ **Free**: Unlimited bandwidth
- ✅ **Fast**: Deploys in ~2-5 minutes

---

## 📊 Comparison

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| **Setup Time** | 2 minutes | 5 minutes |
| **Auto Deploy** | ✅ Yes | ✅ Yes (with Actions) |
| **Custom Domain** | ✅ Free | ✅ Free |
| **SSL Certificate** | ✅ Auto | ✅ Auto |
| **Build Time** | ~1 min | ~2-5 min |
| **CDN** | ✅ Global | ✅ Global |
| **Analytics** | ✅ Built-in | ❌ Need Google Analytics |

---

## 🎯 Quick Commands Reference

### Vercel
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

### GitHub Pages
```bash
# Manual deploy
npm run deploy

# Build locally
npm run build

# Preview build
npm run preview
```

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Add your profile image to `public/assets/`
- [ ] Update personal information (name, email, etc.)
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Update repository name in `vite.config.js` (for GitHub Pages)
- [ ] Push code to GitHub
- [ ] Choose deployment platform
- [ ] Deploy!

---

## 🐛 Troubleshooting

### Vercel Issues

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct scripts
- Verify Node version (should be 18+)

**404 errors?**
- Check `vercel.json` configuration
- Ensure routes are configured correctly

### GitHub Pages Issues

**Page not loading?**
- Wait 5 minutes after first deployment
- Check Actions tab for build status
- Verify Pages is enabled in Settings

**Assets not loading?**
- Update `base` in `vite.config.js`
- Should be `/repository-name/`
- Rebuild and redeploy

**Build failing?**
- Check `.github/workflows/deploy.yml`
- Ensure permissions are set correctly
- Check Actions logs for errors

---

## 🎉 Success!

Once deployed, your portfolio will be live and accessible worldwide!

**Next Steps:**
1. Share your portfolio URL
2. Add it to your LinkedIn profile
3. Include it in your resume
4. Share on social media

**Your portfolio URLs:**
- Vercel: `https://your-project.vercel.app`
- GitHub Pages: `https://YOUR_USERNAME.github.io/portfolio/`

Congratulations! 🚀
