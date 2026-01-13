import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Mould Remediation',
      description: 'Safe removal of affected materials including plasterboard, skirting, and linings. Professional remediation to prevent recurrence.',
      image: '/images/image 4 - mould.png',
    },
    {
      title: 'Moisture Assessment',
      description: 'Comprehensive moisture readings and documentation. Detailed reports with photos for property managers and insurers.',
      image: '/images/Image 7 - Documentation.png',
    },
    {
      title: 'Cavity Repair',
      description: 'Professional repair and restoration of affected areas after remediation. Quality workmanship to restore your property.',
      image: '/images/Image 6 - Cavity repair.png',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialist remediation and assessment services, not just cleaning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

