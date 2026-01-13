'use client'

import BookInspectionForm from '@/components/BookInspectionForm'
import { PHONE_NUMBER } from '@/lib/constants'

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Book an Inspection
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-4">
            Schedule a comprehensive moisture assessment and mould inspection. Fill out the form below and we'll respond within 24 hours to lock in your inspection time.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl">
            We can't provide pricing over the phone without seeing the property first. After inspection, you'll receive a clear, fixed-scope quote with detailed breakdown.
          </p>
        </div>
      </section>

      {/* Form & Side Panel */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Inspection Request Form</h2>
              <BookInspectionForm />
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer to call?</h3>
                <p className="text-gray-700 mb-6">
                  We're happy to discuss your mould issue over the phone and schedule an inspection time that works for you.
                </p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="btn-primary w-full text-center block mb-6"
                >
                  Call to lock in an inspection time
                </a>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-primary-600">1.</span>
                      <span>We respond within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-primary-600">2.</span>
                      <span>We schedule an inspection time</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-primary-600">3.</span>
                      <span>We conduct assessment with moisture readings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-primary-600">4.</span>
                      <span>You receive a fixed-scope quote</span>
                    </li>
                  </ol>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Areas</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    North West Coast Tasmania and Launceston region
                  </p>
                  <p className="text-sm text-gray-700">
                    Including: Burnie, Devonport, Ulverstone, Penguin, Wynyard, Somerset, Smithton, Stanley, Launceston, and surrounding suburbs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
