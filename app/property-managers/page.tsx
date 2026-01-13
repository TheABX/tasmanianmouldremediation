import Link from 'next/link'
import PMEnquiryForm from '@/components/PMEnquiryForm'
import { PHONE_NUMBER } from '@/lib/constants'

export const metadata = {
  title: 'For Property Managers | Specialist Mould Remediation Services',
  description: 'Specialist mould remediation and moisture assessment services designed for property managers. Fast booking, clear communication, comprehensive documentation across Tasmania.',
}

export default function PropertyManagersPage() {
  const benefits = [
    {
      title: 'Fast Booking',
      description: 'We work around your schedule. Book inspections quickly and get same-day or next-day assessments when urgent. We understand the need for quick turnaround in rental properties.',
    },
    {
      title: 'Clear Communication',
      description: 'We keep you informed at every step. Clear updates on inspection findings, quotes, and remediation progress. No surprises, just straightforward communication.',
    },
    {
      title: 'Photo Documentation',
      description: 'Every assessment includes comprehensive photo documentation. Clear before-and-after images for your records, insurance claims, and owner reports.',
    },
    {
      title: 'Moisture Readings',
      description: 'Professional moisture readings using calibrated equipment. Measured and documented moisture levels help identify root causes and support insurance claims.',
    },
    {
      title: 'Clear Scope to Owners',
      description: 'Detailed reports that explain exactly what needs to be done and why. Clear scopes help owners understand the work required and make informed decisions.',
    },
    {
      title: 'Post-Remediation Notes',
      description: 'Complete documentation of all remediation work completed. Post-remediation notes with photos and moisture readings provide a clear record for property files.',
    },
  ]

  const commonScenarios = [
    {
      title: 'Recurring Bedroom Mould',
      description: 'Mould keeps appearing in bedrooms despite cleaning. Often caused by condensation, poor ventilation, or hidden moisture in walls. We identify the root cause and provide proper remediation.',
    },
    {
      title: 'Bathroom Condensation',
      description: 'Persistent mould in bathrooms due to condensation and insufficient ventilation. We assess ventilation issues and provide remediation plus prevention guidance.',
    },
    {
      title: 'Musty Smell Complaints',
      description: 'Tenants report musty odours but no visible mould. We conduct thorough moisture assessments to locate hidden mould and moisture sources.',
    },
    {
      title: 'Post-Leak Mould',
      description: 'Mould appearing after a leak has been repaired. We assess affected areas, remove damaged materials, and remediate to prevent recurrence.',
    },
  ]

  const whatWeNeed = [
    {
      item: 'Access',
      description: 'Key location, lockbox code, or tenant contact details for property access',
    },
    {
      item: 'Occupant Notes',
      description: 'Any relevant information about occupants, pets, or special access requirements',
    },
    {
      item: 'Known Leak History',
      description: 'Any known leaks, water damage, or previous moisture issues at the property',
    },
    {
      item: 'Preferred Scheduling Windows',
      description: 'Times that work best for inspections and remediation (e.g., weekday mornings, after 2pm)',
    },
    {
      item: 'Approval Process',
      description: 'Owner approval requirements, budget thresholds, or any specific approval processes we should be aware of',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            For Property Managers
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-4">
            Specialist mould remediation and moisture assessment services designed for property managers. We understand your needs for fast response, clear communication, and comprehensive documentation.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Fast booking, clear scopes, and owner-ready reports that make your job easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary">
              Call to lock in an inspection time
            </a>
            <Link href="#enquiry-form" className="btn-secondary">
              Submit PM Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Property Managers Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're built for property managers. Fast, clear, and comprehensive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Workflow */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple Workflow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Straightforward process from enquiry to completion
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">PM Sends Address + Access Details</h3>
                    <p className="text-gray-700">You provide the property address and access information. We'll confirm scheduling that works for you.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection</h3>
                    <p className="text-gray-700">We conduct a comprehensive inspection with moisture readings and photo documentation. We identify all affected areas and root causes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fixed-Scope Quote</h3>
                    <p className="text-gray-700">We provide a clear, fixed-scope quote with detailed breakdown. The quote includes what we'll do, what materials we'll remove, and the expected outcome.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Remediation</h3>
                    <p className="text-gray-700">Once approved, we proceed with remediation. We remove affected materials, use containment, perform HEPA cleaning, and document all work.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Report & Photos</h3>
                    <p className="text-gray-700">You receive a comprehensive report with before-and-after photos, moisture readings, and post-remediation notes. Owner-ready documentation for your files.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Scenarios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle the mould issues property managers face most often
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonScenarios.map((scenario, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-700">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need From You */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              What We Need From You
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              To provide the best service, here's what helps us work efficiently:
            </p>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <ul className="space-y-6">
                {whatWeNeed.map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.item}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              What We Don't Do
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Clear boundaries help us focus on what we do best
            </p>
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-primary-600">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Plumbing Repairs</h3>
                  <p className="text-gray-700">We don't perform plumbing repairs or alterations. If we identify leaks or plumbing issues, we refer these to licensed plumbers.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Structural Changes</h3>
                  <p className="text-gray-700">We don't perform structural alterations or repairs. We focus on mould remediation and moisture assessment, and refer structural work to licensed trades.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Quick Surface Cleans</h3>
                  <p className="text-gray-700">We're not a quick-clean service. We specialise in comprehensive remediation and assessment for serious mould issues that require proper treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section id="enquiry-form" className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-4 text-primary-100">
                Call to lock in an inspection time, or submit an enquiry below
              </p>
              <p className="text-lg mb-8 text-primary-200">
                We'll respond within 24 hours to schedule an inspection and discuss your needs.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="btn-primary bg-white text-primary-600 hover:bg-primary-50 block text-center"
                >
                  Call to lock in an inspection time
                </a>
                <div className="text-primary-100 text-sm">
                  <p className="font-semibold mb-2">Or submit the enquiry form →</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Property Manager Enquiry</h3>
              <PMEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
