import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Tasmanian Mould Remediation</h3>
            <p className="text-sm mb-4">
              Professional mould remediation and moisture assessment services across Tasmania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/property-managers" className="hover:text-white transition-colors">For Property Managers</Link></li>
              <li><Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>North West Coast</li>
              <li>Launceston Region</li>
              <li>Burnie • Devonport</li>
              <li>Ulverstone • Penguin</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book an Inspection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tasmanian Mould Remediation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

