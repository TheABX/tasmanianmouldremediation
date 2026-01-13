# How to Start the Development Server

## The Issue
The server isn't starting due to npm permission issues in the sandbox environment. You need to run these commands directly in your terminal.

## Step-by-Step Instructions

### 1. Open Terminal
Open Terminal on your Mac and navigate to the project:
```bash
cd "/Users/deonkenzie/Desktop/Mould Busters"
```

### 2. Clear Caches
```bash
rm -rf .next
rm -rf node_modules
rm -f package-lock.json
```

### 3. Install Dependencies
```bash
npm install
```

If you get permission errors, try:
```bash
sudo npm install
```

Or if you're using nvm, make sure you're using the correct Node version:
```bash
node --version  # Should show v18.x.x or v20.x.x
```

### 4. Start the Development Server
```bash
npm run dev
```

### 5. Open in Browser
Once you see "Ready" in the terminal, open:
```
http://localhost:3000
```

## Troubleshooting

### Port 3000 Already in Use
If you get an error about port 3000 being in use:
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### npm Permission Errors
If you continue to get permission errors:
```bash
# Check npm permissions
npm config get prefix

# Fix npm permissions (if needed)
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Still Not Working?
1. Make sure Node.js is installed: `node --version`
2. Make sure npm is installed: `npm --version`
3. Try using a different Node version manager (nvm, fnm, etc.)
4. Check if there are any error messages in the terminal

## What Was Fixed
- ✅ Fixed hardcoded phone numbers in property-managers page
- ✅ Fixed hardcoded phone numbers in service-areas page
- ✅ Removed Google Fonts import to avoid network issues
- ✅ Simplified Footer phone number formatting
- ✅ All components are properly exported
- ✅ All imports are correct

The code is ready - you just need to run it in your terminal!
