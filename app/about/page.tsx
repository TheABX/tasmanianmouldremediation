import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/constants'

export const metadata = {
  title: 'About Us | Tasmanian Mould Remediation',
  description: 'Learn about Tasmanian Mould Remediation - specialist mould remediation and moisture assessment services. Professional, reliable, and trusted across Tasmania.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Tasmanian Mould Remediation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Specialist mould remediation and moisture assessment services for property managers and landlords across Tasmania.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At Tasmanian Mould Remediation, we provide professional mould remediation and moisture assessment services that go beyond simple cleaning. We specialise in safe removal of affected materials, thorough remediation, and comprehensive documentation for property managers and landlords.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We understand that mould issues require more than surface cleaning. Our approach includes:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
              <li>Safe removal of affected materials (plasterboard, skirting, linings)</li>
              <li>Professional remediation to prevent recurrence</li>
              <li>Comprehensive moisture assessment and documentation</li>
              <li>Detailed reports suitable for property managers and insurers</li>
              <li>Clear boundaries - we refer structural and plumbing work to licensed trades</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Service Areas</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We proudly serve property managers and landlords across:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">North West Coast Tasmania</h3>
                <p className="text-gray-700">Burnie, Devonport, Ulverstone, Penguin, Wynyard, Somerset, Smithton, Stanley</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Launceston Region</h3>
                <p className="text-gray-700">Launceston, Invermay, Newstead, Kings Meadows, Prospect, Riverside, Legana and surrounding suburbs</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are committed to providing professional, reliable, and trustworthy service. We understand the needs of property managers for fast response, detailed documentation, and quality workmanship. Our focus is on specialist remediation and assessment, not just cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-primary-100">Contact us today to discuss your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Call Now
            </a>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Book an Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

