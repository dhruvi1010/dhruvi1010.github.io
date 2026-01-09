# Publishing Your Portfolio Website to GitHub Pages

## Step 1: Create New GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `portfolio-website` (or any name you prefer)
3. Description: "Personal Portfolio Website - Dhruvi Koshiya"
4. Visibility: **Public** (required for free GitHub Pages)
5. **DO NOT** check any boxes (no README, .gitignore, or license)
6. Click "Create repository"

## Step 2: Update Remote URL

After creating the repository, run these commands (replace `YOUR-REPO-NAME` with your actual repository name):

```bash
# Remove old remote
git remote remove origin

# Add new remote (replace YOUR-REPO-NAME with your actual repo name)
git remote add origin https://github.com/dhruvi1010/YOUR-REPO-NAME.git

# Verify remote
git remote -v
```

## Step 3: Push to New Repository

```bash
# Push to new repository
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 5: Access Your Live Website

Your site will be available at:
- `https://dhruvi1010.github.io/YOUR-REPO-NAME/`

**Note:** If you want it at `https://dhruvi1010.github.io` (without repo name), the repository MUST be named exactly `dhruvi1010.github.io`

## Alternative: Use Custom Domain

If you have a custom domain, you can configure it in GitHub Pages settings.

## Troubleshooting

- **Site not loading?** Wait 5-10 minutes after enabling Pages
- **404 Error?** Make sure `index.html` is in the root directory
- **Build failed?** Check the Actions tab for error messages
