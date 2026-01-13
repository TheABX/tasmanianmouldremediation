import Image from 'next/image'
import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/constants'

export const metadata = {
  title: 'Services | Specialist Mould Remediation & Moisture Assessment',
  description: 'Specialist mould remediation and moisture assessment services for property managers and homeowners. Professional remediation, not quick cleans. Serving North West Coast Tasmania and Launceston.',
}

const services = [
  {
    title: 'Mould Inspection & Moisture Assessment',
    description: 'Comprehensive assessment with professional moisture readings and detailed photo documentation. We identify affected areas, measure moisture levels, and provide clear reports for property managers and insurers.',
    features: [
      'Professional moisture readings using calibrated equipment',
      'Comprehensive photo documentation of all affected areas',
      'Detailed reports with moisture readings and recommendations',
      'Identification of moisture sources and affected materials',
      'Clear scope of work for remediation if required',
    ],
    image: '/images/Image 7 - Documentation.png',
  },
  {
    title: 'Targeted Remediation',
    description: 'Proper remediation that removes affected materials and prevents recurrence. We remove wall linings and skirting where needed, use containment, and perform HEPA cleaning.',
    features: [
      'Removal of affected wall linings, skirting, and other porous materials',
      'Containment to prevent cross-contamination',
      'HEPA cleaning and treatment of affected areas',
      'Safe removal and disposal of affected materials',
      'Documentation of all remediation work completed',
    ],
    image: '/images/image 4 - mould.png',
    note: 'We do not perform structural alterations or plumbing work. We refer leaks and structural issues to licensed trades.',
  },
  {
    title: 'Rental Property / Property Manager Remediation Packages',
    description: 'Specialist services designed for property managers. Fast scheduling, clear scopes, and owner-ready reports that make your job easier.',
    features: [
      'Fast scheduling that works around your portfolio needs',
      'Clear scopes of work that owners can understand',
      'Owner-ready reports with photos and moisture readings',
      'Documentation suitable for insurance claims',
      'Repeat-issue handling and root cause identification',
    ],
    image: '/images/Image 6 - Cavity repair.png',
  },
  {
    title: 'Prevention & Ventilation Guidance',
    description: 'Practical guidance to prevent mould recurrence. We provide clear, actionable steps based on your property\'s specific conditions.',
    features: [
      'Assessment of ventilation and airflow issues',
      'Practical recommendations for moisture control',
      'Guidance on heating and ventilation improvements',
      'Clear steps to prevent mould recurrence',
      'Documentation of recommendations for property records',
    ],
    image: '/images/Image 6 - Cavity repair.png',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Specialist Mould Remediation Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-4">
            We provide professional remediation and moisture assessment services for property managers and homeowners across North West Coast Tasmania and Launceston.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our focus is on proper remediation that addresses root causes and prevents recurrence. We're not a quick-clean service—we're specialists in thorough assessment and remediation.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialist remediation and assessment services designed for serious mould issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.note && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 italic">{service.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum Scope Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              What We're Best Suited For
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              We specialise in comprehensive remediation and assessment services. We're best suited for situations where proper assessment, documentation, and remediation are needed.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg text-gray-900 mb-6 font-semibold">
                We're best suited for:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Recurring mould</strong> – when mould keeps coming back despite cleaning attempts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Multi-room mould</strong> – when mould affects multiple rooms or areas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Visible water staining</strong> – when there's evidence of water damage or moisture issues</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Musty odours</strong> – when there's a persistent musty smell indicating hidden mould</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Where documentation is needed</strong> – for property managers, insurance claims, or property records</span>
                </li>
              </ul>

            <div className="mt-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
              <p className="text-gray-900">
                <strong>For smaller jobs</strong>, such as minor surface mould in a single bathroom, a general cleaning service may be more appropriate. We're happy to discuss your situation and recommend the best approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Do you do small bathroom mould cleans?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We specialise in comprehensive remediation and assessment services. For small, isolated areas of surface mould in a single bathroom (such as around a shower or window), a general cleaning service is usually more appropriate and cost-effective.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, if the mould keeps coming back, affects multiple areas, or you need documentation for property management or insurance purposes, we can help. We're happy to discuss your specific situation and recommend the best approach.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>For small bathroom cleans</strong>, we'd suggest contacting a general cleaning service or handyman. If the mould is recurring or part of a larger moisture issue, that's when our specialist assessment and remediation services are most valuable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Situation?</h2>
          <p className="text-xl mb-4 text-primary-100">We're happy to discuss your mould issue and recommend the best approach</p>
          <p className="text-lg mb-8 text-primary-200">Call to lock in an inspection time, or book online</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Call to lock in an inspection time
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
