import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-4 text-primary-100 max-w-2xl mx-auto">
          Book a professional inspection today or call us to discuss your needs
        </p>
        <p className="text-lg mb-8 text-primary-200 max-w-xl mx-auto">
          Call to lock in an inspection time, or book online at your convenience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Call to lock in an inspection time
          </a>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
          >
            Book an Inspection
          </Link>
        </div>
      </div>
    </section>
  )
}
