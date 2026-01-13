# Tasmanian Mould Remediation Website

A lead-generation website for a mould remediation and moisture assessment business in Tasmania.

## Features

- Next.js 14 with TypeScript and Tailwind CSS
- Responsive design with mobile-first approach
- SEO optimised with meta tags, OpenGraph, and JSON-LD schema
- Form handling with spam protection (honeypot + rate limiting)
- Analytics placeholders (GA4 and call tracking)
- Accessible and Lighthouse-friendly

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/public/images` - Image assets
- `/app/api/lead` - API route for form submissions

## Configuration

- Update phone number in components (search for `+61400000000`)
- Configure email service in `/app/api/lead/route.ts`
- Add GA4 measurement ID in analytics component
- Update service area details as needed

## Deployment

The site can be deployed to Vercel, Netlify, or any platform that supports Next.js.

## Images

Place your images in the `/public/images` directory. The following images are referenced:
- `header.png` - Hero section image
- `image 4 - mould.png` - Mould remediation service
- `Image 6 - Cavity repair.png` - Cavity repair service
- `Image 7 - Documentation.png` - Documentation service
- `Image 8 - Mould busters.png` - Logo

Make sure all images are optimised for web use.

