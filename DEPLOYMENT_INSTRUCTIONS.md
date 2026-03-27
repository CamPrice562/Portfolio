# GitHub Pages Deployment Instructions

## Current Configuration
- **Repository:** CamPrice562/Portfolio
- **GitHub Pages URL:** https://camprice562.github.io/Portfolio/
- **Branch:** main
- **Build Tool:** Vite
- **Base Path:** /Portfolio/

## Enable GitHub Pages (First Time Setup)

1. Go to: https://github.com/CamPrice562/Portfolio/settings/pages

2. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"** (NOT "Deploy from a branch")

3. Save the settings

4. The workflow will automatically run on the next push to `main` branch

## Manual Deployment Trigger

If you need to manually trigger a deployment:

1. Go to: https://github.com/CamPrice562/Portfolio/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select branch: main
5. Click "Run workflow"

## Verify Deployment

After the workflow completes (2-3 minutes):
- Check Actions tab for green checkmark ✓
- Visit: https://camprice562.github.io/Portfolio/
- Should see your homepage (not 404)

## Troubleshooting

### "Site not found" error
- **Cause:** GitHub Pages not enabled or wrong source selected
- **Fix:** Go to Settings → Pages → Set Source to "GitHub Actions"

### 404 on homepage
- **Cause:** Missing basename in BrowserRouter or wrong base path in vite.config.ts
- **Fix:** Already configured correctly in this project

### Images not loading
- **Cause:** Wrong image paths
- **Fix:** Using `import.meta.env.BASE_URL` for dynamic paths

## Important Files

- `.github/workflows/github-pages-deployment.yml` - Deployment workflow
- `vite.config.ts` - Base path: `/Portfolio/`
- `src/App.tsx` - BrowserRouter basename: `/Portfolio`
- `public/404.html` - SPA redirect handler
