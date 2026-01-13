# Push to GitHub - Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "tasmanian-mould-remediation")
3. **Do NOT** initialize with README, .gitignore, or license
4. Copy the repository URL (it will look like: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`)

## Step 2: Add Remote and Push

Run these commands in your terminal (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
cd "/Users/deonkenzie/Desktop/Mould Busters"

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Alternative: If you already have a GitHub repository URL

If you already have a repository URL, just run:

```bash
cd "/Users/deonkenzie/Desktop/Mould Busters"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Note
- If you're using SSH instead of HTTPS, use: `git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`
- You may be prompted for your GitHub username and password/token
- If you have 2FA enabled, you'll need to use a Personal Access Token instead of your password
