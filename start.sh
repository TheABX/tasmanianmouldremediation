#!/bin/bash

# Mould Busters - Development Server Startup Script

echo "🚀 Starting Mould Busters Development Server..."
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Clear Next.js cache
echo "📦 Clearing Next.js cache..."
rm -rf .next

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ npm install failed. Please run 'npm install' manually."
        exit 1
    fi
else
    echo "✅ Dependencies found"
fi

# Check if port 3000 is in use
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  Port 3000 is already in use. Attempting to free it..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null
    sleep 2
fi

# Start the development server
echo ""
echo "🌟 Starting Next.js development server..."
echo "   Open http://localhost:3000 in your browser"
echo ""
npm run dev
