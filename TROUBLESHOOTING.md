# Troubleshooting Guide

## If `npm run dev` is not working:

### Step 1: Check for errors in terminal
When you run `npm run dev`, look for any error messages. Common issues:

### Step 2: Clear cache and rebuild
```bash
cd "/Users/deonkenzie/Desktop/Mould Busters"
rm -rf .next
rm -rf node_modules
npm install
npm run dev
```

### Step 3: Check Node.js version
Next.js 14 requires Node.js 18.17 or later. Check your version:
```bash
node --version
```

If you need to update Node.js, use nvm:
```bash
nvm install 18
nvm use 18
```

### Step 4: Try different port
If port 3000 is in use:
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Step 5: Check for TypeScript errors
```bash
npx tsc --noEmit
```

### Step 6: Manual start
Try running Next.js directly:
```bash
./node_modules/.bin/next dev
```

## Common Error Messages:

**"Cannot find module '@/lib/constants'"**
- Make sure `lib/constants.ts` exists
- Check `tsconfig.json` has `"paths": { "@/*": ["./*"] }`

**"Port 3000 is already in use"**
- Use a different port: `npm run dev -- -p 3001`

**"Module not found"**
- Run: `npm install`

**"SyntaxError" or compilation errors**
- Check the file mentioned in the error
- Look for missing imports or typos

## Still not working?

Please share:
1. The exact error message from terminal
2. Your Node.js version (`node --version`)
3. What happens when you run `npm run dev`

