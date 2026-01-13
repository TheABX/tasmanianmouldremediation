'use client'

import { useState, useEffect } from 'react'
import { PHONE_NUMBER } from '@/lib/constants'

export default function MobileCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call_click', {
        event_category: 'engagement',
        event_label: 'mobile_sticky_call_button'
      })
    }
  }

  if (!isVisible) return null

  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={handleCallClick}
      className="fixed bottom-6 right-6 z-50 md:hidden btn-primary flex items-center space-x-2 shadow-2xl animate-bounce"
      aria-label="Call Now"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>Call to lock in an inspection time</span>
    </a>
  )
}

