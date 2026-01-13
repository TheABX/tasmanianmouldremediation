import Link from 'next/link'

export default function PMFriendly() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Property Managers
            </h2>
            <p className="text-lg text-gray-600">
              We understand what you need: fast scheduling, clear documentation, and solutions that work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Scheduling</h3>
              <p className="text-gray-700">
                We work around your schedule. Book inspections quickly and get same-day or next-day assessments when urgent.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Photo Documentation</h3>
              <p className="text-gray-700">
                Every assessment includes comprehensive photo documentation. Clear before-and-after images for your records and insurance claims.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Scopes for Owners</h3>
              <p className="text-gray-700">
                Detailed reports that explain exactly what needs to be done and why. Clear scopes help owners understand the work required.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Repeat-Issue Handling</h3>
              <p className="text-gray-700">
                When mould keeps coming back, we identify the root cause. We address the underlying moisture issues, not just the visible mould.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/property-managers" className="text-primary-600 font-semibold hover:text-primary-700">
              Learn more about our property manager services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

