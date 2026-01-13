import Link from 'next/link'

export default function RemediationNotCleaning() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We're Remediation, Not Just Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              There's a difference between cleaning mould and properly remediating it. We do the latter.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>We remove affected materials</strong> – plasterboard, skirting, linings, and other porous materials that can't be properly cleaned</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>We remediate safely</strong> – using appropriate containment, safety equipment, and treatment methods to prevent spread</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>We document moisture readings</strong> – using professional equipment to measure and record moisture levels before and after remediation</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>We provide comprehensive reports</strong> – with photos, moisture readings, and clear documentation for property managers and insurers</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>We address root causes</strong> – identifying and documenting moisture sources so you can address underlying issues</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>We don't do structural or plumbing work</strong> – we refer leaks and structural issues to licensed trades, keeping our focus on remediation</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
              View our full remediation process →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

