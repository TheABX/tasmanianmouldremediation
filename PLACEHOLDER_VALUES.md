# Placeholder Values - Update Before Deployment

## ✅ All Placeholders Are Now Centralized

All placeholder values have been moved to a single file for easy updates: **`lib/constants.ts`**

## 📝 What Needs to Be Updated

### 1. Phone Number
**File:** `lib/constants.ts`  
**Current:** `+61400000000`  
**Action:** Replace with your actual business phone number

**Format:** Australian mobile numbers should be `+61` followed by 9 digits  
**Example:** `+61412345678`

### 2. Website URL
**File:** `lib/constants.ts`  
**Current:** `https://mouldbusters.com.au`  
**Action:** Replace with your actual domain

**Example:** `https://yourdomain.com.au`

### 3. Contact Email
**File:** `lib/constants.ts`  
**Current:** `info@mouldbusters.com.au`  
**Action:** Replace with your actual business email (where form submissions will be sent)

**Example:** `info@yourdomain.com.au`

### 4. Email Service Configuration
**File:** `app/api/lead/route.ts`  
**Current:** Only logs to console  
**Action:** Integrate with your email service (SendGrid, Resend, Nodemailer, etc.)

See the TODO comments in the file for implementation examples.

## 🎯 Quick Update Instructions

1. Open `lib/constants.ts`
2. Update the three placeholder values
3. Configure email service in `app/api/lead/route.ts`
4. Done! All references throughout the site will automatically use the new values.

## 📍 Where These Values Are Used

- ✅ All phone number links (Header, Footer, CTAs, Mobile button)
- ✅ All page CTAs (Home, Services, Property Managers, etc.)
- ✅ Website metadata (OpenGraph, JSON-LD schema)
- ✅ Form submission handling

## ✨ Benefits

- **Single source of truth** - Update once, changes everywhere
- **Easy to find** - All placeholders in one file
- **Clear comments** - Each placeholder is marked with TODO
- **Type-safe** - TypeScript ensures correct usage

## 🚀 After Updating

1. Test the build: `npm run build`
2. Test forms to ensure emails are sent
3. Verify phone numbers work on mobile devices
4. Deploy!

