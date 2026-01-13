'use client'

import { PHONE_NUMBER } from '@/lib/constants'

export default function StickyTopBar() {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call_click', {
        event_category: 'engagement',
        event_label: 'sticky_top_bar'
      })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary-600 text-white py-2 text-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center space-x-4 text-primary-100">
            <span className="font-medium">Serving:</span>
            <span>North West Coast TAS</span>
            <span>•</span>
            <span>Launceston Region</span>
          </div>
          <div className="flex-1 md:hidden"></div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handleCallClick}
            className="flex items-center space-x-2 font-semibold hover:text-primary-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call to lock in an inspection time</span>
          </a>
        </div>
      </div>
    </div>
  )
}

