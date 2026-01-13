import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/constants'

export const metadata = {
  title: 'Mould Remediation Services | Burnie, Devonport, Launceston & North West Coast Tasmania',
  description: 'Professional mould remediation and moisture assessment services across North West Coast Tasmania (Burnie, Devonport, Ulverstone, Penguin, Wynyard, Somerset, Smithton, Stanley) and Launceston region. Fast response for property managers and homeowners.',
}

export default function ServiceAreasPage() {
  const northWestCoast = [
    'Burnie',
    'Devonport',
    'Ulverstone',
    'Penguin',
    'Wynyard',
    'Somerset',
    'Smithton',
    'Stanley',
  ]

  const launcestonRegion = [
    'Launceston',
    'Invermay',
    'Newstead',
    'Kings Meadows',
    'Prospect',
    'Riverside',
    'Legana',
    'Surrounding suburbs',
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-4">
            We provide specialist mould remediation and moisture assessment services across North West Coast Tasmania and the Launceston region. Our service area includes Burnie, Devonport, Ulverstone, Penguin, Wynyard, Somerset, Smithton, Stanley, and the greater Launceston area including Invermay, Newstead, Kings Meadows, Prospect, Riverside, and Legana.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl">
            We understand the unique mould challenges in Tasmania's coastal and inland regions, from coastal humidity to winter condensation in older housing stock. Our specialist remediation services address these issues with proper assessment, documentation, and remediation.
          </p>
        </div>
      </section>

      {/* North West Coast Tasmania Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              North West Coast Tasmania
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We service the following areas across the North West Coast:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {northWestCoast.map((suburb) => (
                <a
                  key={suburb}
                  href={`#${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{suburb}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Burnie */}
          <div id="burnie" className="mb-16 scroll-mt-32">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mould Remediation in Burnie</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Burnie's coastal location brings high humidity and frequent rainfall, creating ideal conditions for mould growth. Many properties in Burnie face mould issues due to condensation from temperature differences between the cool coastal air and warmer interiors, particularly during Tasmania's extended winter months. Older housing stock in the area often lacks modern insulation and ventilation systems, allowing moisture to accumulate in walls, ceilings, and subfloors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide comprehensive mould remediation and moisture assessment services for property managers and homeowners in Burnie. Our services include professional moisture readings, photo documentation, and proper remediation that removes affected materials and addresses root causes. We understand the local conditions and provide solutions that prevent recurrence.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">Need mould remediation in Burnie?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="btn-primary text-center">
                  Call to lock in an inspection time
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Book an Inspection
                </Link>
              </div>
            </div>
          </div>

          {/* Devonport */}
          <div id="devonport" className="mb-16 scroll-mt-32">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mould Remediation in Devonport</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Devonport's position on the North West Coast means properties are exposed to coastal humidity and moisture-laden air. Mould issues in Devonport often stem from condensation forming on windows, walls, and ceilings, especially in properties with insufficient heating and ventilation. The combination of cool coastal breezes and warm interiors creates persistent condensation that leads to mould growth in bedrooms, bathrooms, and living areas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our specialist remediation services in Devonport address these coastal mould challenges. We conduct thorough moisture assessments to identify affected areas and root causes, then provide proper remediation that removes affected materials and prevents recurrence. We work with property managers and homeowners to ensure comprehensive documentation and long-term solutions.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">Need mould remediation in Devonport?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="btn-primary text-center">
                  Call to lock in an inspection time
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Book an Inspection
                </Link>
              </div>
            </div>
          </div>

          {/* Ulverstone/Penguin */}
          <div id="ulverstone" className="mb-16 scroll-mt-32">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mould Remediation in Ulverstone & Penguin</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ulverstone and Penguin's coastal locations experience high humidity and moisture from Bass Strait, creating conditions where mould can thrive. Properties in these areas often face mould issues related to condensation, particularly in older homes that lack adequate ventilation and insulation. Winter months see properties closed up for extended periods, trapping moisture indoors and creating ideal conditions for mould growth in hidden spaces like wall cavities and subfloors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide specialist mould remediation services for Ulverstone and Penguin properties. Our comprehensive approach includes moisture assessment, identification of affected materials, and proper remediation that addresses both visible mould and underlying moisture issues. We work with property managers to provide clear documentation and owner-ready reports.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">Need mould remediation in Ulverstone or Penguin?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="btn-primary text-center">
                  Call to lock in an inspection time
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Book an Inspection
                </Link>
              </div>
            </div>
          </div>

          {/* Wynyard/Somerset */}
          <div id="wynyard" className="mb-16 scroll-mt-32">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mould Remediation in Wynyard & Somerset</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wynyard and Somerset's proximity to the coast means properties are subject to high humidity and moisture from coastal air. Mould issues in these areas often develop from condensation forming on cold surfaces, particularly in properties with older construction methods that lack modern vapour barriers and ventilation. The extended winter period sees properties closed up, allowing moisture to accumulate in bathrooms, bedrooms, and areas with poor airflow.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our specialist remediation services for Wynyard and Somerset address these coastal mould challenges. We provide comprehensive moisture assessments with professional readings, identify affected materials that need removal, and perform proper remediation that prevents recurrence. Our documentation supports property managers and insurance claims.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">Need mould remediation in Wynyard or Somerset?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="btn-primary text-center">
                  Call to lock in an inspection time
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Book an Inspection
                </Link>
              </div>
            </div>
          </div>

          {/* Smithton/Stanley */}
          <div id="smithton" className="mb-16 scroll-mt-32">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mould Remediation in Smithton & Stanley</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Smithton and Stanley's northern coastal locations experience significant humidity and moisture from Bass Strait, creating persistent mould challenges. Properties in these areas often face mould issues from condensation, particularly in older housing stock that lacks modern insulation and ventilation systems. The combination of coastal moisture and cool temperatures means condensation forms readily on windows, walls, and ceilings, leading to mould growth in bedrooms, bathrooms, and living areas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide specialist mould remediation services for Smithton and Stanley properties. Our comprehensive remediation approach includes moisture assessment, identification of affected materials, and proper removal and treatment that addresses root causes. We work with property managers to provide clear documentation and long-term solutions.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">Need mould remediation in Smithton or Stanley?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="btn-primary text-center">
                  Call to lock in an inspection time
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Book an Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launceston Region Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Launceston Region
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We service the following areas across the Launceston region:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {launcestonRegion.map((suburb) => (
                <a
                  key={suburb}
                  href={`#${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{suburb}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Launceston */}
          <div id="launceston" className="mb-16 scroll-mt-32">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mould Remediation in Launceston</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Launceston's inland location experiences cold winters and temperature variations that create condensation issues in many properties. Mould problems in Launceston often stem from insufficient heating and ventilation, particularly in older homes that lack modern insulation and vapour barriers. Properties closed up during winter months trap moisture indoors, leading to mould growth in bathrooms, bedrooms, and areas with poor airflow. Older housing stock in Launceston can have moisture trapped in wall cavities and subfloors, creating persistent mould issues.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide specialist mould remediation services for Launceston properties. Our comprehensive approach includes moisture assessment with professional readings, identification of affected materials, and proper remediation that removes affected materials and addresses root causes. We work with property managers across the Launceston region to provide clear documentation and owner-ready reports.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">Need mould remediation in Launceston?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="btn-primary text-center">
                  Call to lock in an inspection time
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Book an Inspection
                </Link>
              </div>
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

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you travel outside these areas?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our primary service areas are North West Coast Tasmania and the Launceston region. We may be able to service areas outside these regions depending on location and scheduling. If your property is outside our standard service areas, please contact us to discuss. We're happy to assess whether we can provide service to your location.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How quickly can you attend?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We understand the urgency of mould issues, especially in rental properties. We typically respond to enquiries within 24 hours and can schedule inspections quickly. For urgent situations, we can often provide same-day or next-day inspections depending on location and current workload.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Response times may vary based on your location within our service area and our current schedule. We work with property managers to schedule inspections at times that work for your portfolio. Contact us to discuss your specific timing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Serving Your Area</h2>
          <p className="text-xl mb-4 text-primary-100">Professional mould remediation and moisture assessment across North West Coast Tasmania and Launceston</p>
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
