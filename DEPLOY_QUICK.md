# 🚀 Quick Deployment Reference

## Vercel (Easiest - 2 Minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"
   - Done! ✅

**Your URL**: `https://your-project.vercel.app`

---

## GitHub Pages (Free Forever)

1. **Push to GitHub** (same as above)

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Done! Auto-deploys on every push ✅

3. **Update base path** (if repo is NOT username.github.io)
   - Edit `vite.config.js` line 7:
   ```javascript
   base: '/portfolio/', // Your repo name
   ```

**Your URL**: `https://YOUR_USERNAME.github.io/portfolio/`

---

## Files Created

✅ `vercel.json` - Vercel configuration
✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
✅ `vite.config.js` - Updated with base path
✅ `package.json` - Added deploy script

---

## Need Help?

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
