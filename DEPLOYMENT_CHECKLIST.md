# Pre-Deployment Checklist

## ✅ Completed Items

### Core Functionality
- [x] All pages created and functional
- [x] Components properly structured
- [x] Forms with validation and honeypot protection
- [x] API route for form submissions
- [x] Images in `/public/images/` directory
- [x] No linting errors
- [x] TypeScript configuration correct
- [x] Tailwind CSS configured

### Pages
- [x] Home page with all sections
- [x] Services page
- [x] Property Managers page
- [x] Service Areas page (SEO optimized)
- [x] FAQs page
- [x] About page
- [x] Contact/Book Inspection page

### Features
- [x] Sticky top bar with service areas
- [x] Sticky header navigation
- [x] Mobile call button
- [x] Responsive design
- [x] SEO metadata on all pages
- [x] JSON-LD schema markup
- [x] Form spam protection (honeypot)
- [x] Rate limiting on API route

## ⚠️ Items to Complete Before Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Phone Number
**CRITICAL**: Replace all instances of `+61400000000` with your actual phone number:
- Search and replace across all files
- Files to check:
  - `components/Header.tsx`
  - `components/MobileCallButton.tsx`
  - `components/StickyTopBar.tsx`
  - `components/Hero.tsx`
  - `components/CTASection.tsx`
  - All page files with CTAs
  - `app/layout.tsx` (JSON-LD schema)

### 3. Configure Email Service
**CRITICAL**: Update `/app/api/lead/route.ts` to send emails:
- Currently just logs to console
- Integrate with email service (SendGrid, Resend, Nodemailer, etc.)
- Update the TODO section in the route file

### 4. Update Website URL
Replace placeholder URLs:
- `app/layout.tsx`: Update `url: 'https://mouldbusters.com.au'` with your actual domain
- Update OpenGraph URLs if different

### 5. Test Build
```bash
npm run build
```
Fix any build errors before deploying.

### 6. Environment Variables (if needed)
Create `.env.local` for:
- Email service API keys
- Any other sensitive configuration

### 7. SEO Files (Optional but Recommended)
Create these files in `/public`:
- `robots.txt` - For search engine crawling
- `sitemap.xml` or use Next.js sitemap generation

### 8. Test Forms
- Test the Book Inspection form
- Test the PM Enquiry form
- Verify form submissions work
- Check email delivery

### 9. Test All Links
- Verify all internal links work
- Check external links (if any)
- Test anchor links on Service Areas page

### 10. Image Optimization
- Verify all images load correctly
- Consider optimizing images for web
- Check image alt text is appropriate

### 11. Mobile Testing
- Test on mobile devices
- Verify sticky call button works
- Check mobile menu functionality
- Test form on mobile

### 12. Browser Testing
- Test in Chrome, Firefox, Safari
- Check for console errors
- Verify responsive breakpoints

## 📝 Optional Enhancements

### Analytics
- Add Google Analytics 4 (GA4) tracking code
- Update `components/Header.tsx` and other components with actual GA4 ID
- Add call tracking events

### Performance
- Consider adding image optimization
- Check Lighthouse scores
- Optimize bundle size if needed

### Additional SEO
- Create sitemap.xml
- Add robots.txt
- Consider adding more structured data

## 🚀 Deployment Steps

1. **Install dependencies**: `npm install`
2. **Update phone number** throughout codebase
3. **Configure email service** in API route
4. **Update website URL** in metadata
5. **Test build**: `npm run build`
6. **Fix any build errors**
7. **Deploy to hosting platform** (Vercel, Netlify, etc.)
8. **Test live site** after deployment
9. **Set up domain** and SSL certificate
10. **Monitor form submissions** and email delivery

## 🔍 Quick Verification Commands

```bash
# Check for TypeScript errors
npm run build

# Check for linting errors
npm run lint

# Start development server
npm run dev
```

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Check server logs for API errors
3. Verify all environment variables are set
4. Test forms in development mode first

