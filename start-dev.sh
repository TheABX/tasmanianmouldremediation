#!/bin/bash

# Development server startup script with error checking

cd "/Users/deonkenzie/Desktop/Mould Busters"

echo "🔍 Checking setup..."
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    exit 1
fi
echo "✅ Node.js version: $(node --version)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi
echo "✅ npm version: $(npm --version)"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Installing dependencies..."
    npm install
fi
echo "✅ Dependencies installed"

# Check if Next.js is installed
if [ ! -f "node_modules/.bin/next" ]; then
    echo "❌ Next.js not found. Installing..."
    npm install
fi
echo "✅ Next.js found"

# Clear .next directory
echo "🧹 Clearing build cache..."
rm -rf .next

echo ""
echo "🚀 Starting development server..."
echo "📍 Server will be available at: http://localhost:3000"
echo ""

npm run dev

