import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallButton from '@/components/MobileCallButton'
import StickyTopBar from '@/components/StickyTopBar'
import { WEBSITE_URL, PHONE_NUMBER } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    default: 'Tasmanian Mould Remediation | Professional Mould Remediation & Moisture Assessment',
    template: '%s | Tasmanian Mould Remediation'
  },
  description: 'Professional mould remediation and moisture assessment services across North West Coast Tasmania and Launceston. Specialists in safe removal, remediation, and documentation for property managers and landlords.',
  keywords: ['mould remediation', 'moisture assessment', 'Tasmania', 'Burnie', 'Devonport', 'Launceston', 'property management', 'mould removal'],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: WEBSITE_URL,
    siteName: 'Tasmanian Mould Remediation',
    title: 'Tasmanian Mould Remediation | Professional Mould Remediation & Moisture Assessment',
    description: 'Professional mould remediation and moisture assessment services across North West Coast Tasmania and Launceston.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Tasmanian Mould Remediation",
              "description": "Professional mould remediation and moisture assessment services",
              "url": WEBSITE_URL,
              "telephone": PHONE_NUMBER,
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tasmania",
                "addressCountry": "AU"
              },
              "areaServed": [
                "Burnie",
                "Devonport",
                "Ulverstone",
                "Penguin",
                "Wynyard",
                "Somerset",
                "Smithton",
                "Stanley",
                "Launceston",
                "Invermay",
                "Newstead",
                "Kings Meadows",
                "Prospect",
                "Riverside",
                "Legana"
              ],
              "serviceType": "Mould Remediation and Moisture Assessment"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <StickyTopBar />
        <Header />
        <main className="pt-44">{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}

