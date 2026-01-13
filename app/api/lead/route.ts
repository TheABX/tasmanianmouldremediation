import { NextRequest, NextResponse } from 'next/server'
// TODO: Import your email service here
// import { sendEmail } from '@/lib/email' // Example

// Rate limiting - simple in-memory store (use Redis in production)
const requestCounts = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // Max requests
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

function getRateLimitKey(req: NextRequest): string {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
  return ip
}

function checkRateLimit(req: NextRequest): boolean {
  const key = getRateLimitKey(req)
  const now = Date.now()
  const record = requestCounts.get(key)

  if (!record || now > record.resetTime) {
    requestCounts.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

export async function POST(req: NextRequest) {
  // Rate limiting
  if (!checkRateLimit(req)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()

    // Validate required fields
    // Note: message field is optional for BookInspectionForm (uses 'notes'), required for ContactForm
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // For ContactForm, message is required; for BookInspectionForm, notes is optional
    if (body.source === 'book_inspection') {
      // BookInspectionForm - notes is optional, so we don't require it
    } else if (!body.message && !body.notes) {
      // ContactForm or other forms - require message
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: PLACEHOLDER - Configure email service
    // Replace this section with your email service integration
    // Examples:
    // - SendGrid: https://docs.sendgrid.com/for-developers/sending-email/api-getting-started
    // - Resend: https://resend.com/docs/send-with-nodejs
    // - Nodemailer: https://nodemailer.com/about/
    // 
    // Example implementation:
    // await sendEmail({
    //   to: CONTACT_EMAIL,
    //   subject: `New ${body.source === 'book_inspection' ? 'Inspection' : 'Lead'} Request: ${body.name}`,
    //   html: `...email template...`
    // })
    
    // For now, just log the data (REMOVE THIS IN PRODUCTION)
    console.log('Lead submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      propertyAddress: body.propertyAddress || body.address,
      message: body.message || body.notes,
      customerType: body.customerType,
      mainIssues: body.mainIssues,
      urgency: body.urgency,
      source: body.source || 'contact_form',
      timestamp: new Date().toISOString(),
    })

    // In production, integrate with your email service:
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   subject: `New Lead: ${body.name}`,
    //   body: `...`
    // })

    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

