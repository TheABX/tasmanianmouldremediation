# Configuration Constants

## ⚠️ IMPORTANT: Update Before Deployment

This file contains placeholder values that **must be updated** before deploying your website.

### Required Updates

1. **PHONE_NUMBER** - Replace `+61400000000` with your actual business phone number
   - Format: Australian mobile numbers should be `+61` followed by 9 digits
   - Example: `+61412345678`

2. **WEBSITE_URL** - Replace `https://mouldbusters.com.au` with your actual domain
   - Example: `https://yourdomain.com.au`

3. **CONTACT_EMAIL** - Replace with your actual business email
   - This is where form submissions will be sent
   - Example: `info@yourdomain.com.au`

### How to Update

Simply edit the values in `lib/constants.ts` and all references throughout the site will automatically update.

### Files Using These Constants

- All components with phone numbers
- All pages with CTAs
- Layout metadata
- JSON-LD schema

