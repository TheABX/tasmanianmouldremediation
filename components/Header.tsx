'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PHONE_NUMBER } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCallClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call_click', {
        event_category: 'engagement',
        event_label: 'header_call_button'
      })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`} style={{ top: '40px' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-32 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <div className="relative h-32 w-auto flex items-center">
              <Image
                src="/images/TASMOULDREMED.png"
                alt="Tasmould"
                width={600}
                height={128}
                className="object-contain h-full w-auto"
                style={{ maxHeight: '128px', width: 'auto' }}
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/property-managers" className="text-gray-700 hover:text-primary-600 transition-colors">
              For Property Managers
            </Link>
            <Link href="/service-areas" className="text-gray-700 hover:text-primary-600 transition-colors">
              Service Areas
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-primary-600 transition-colors">
              FAQs
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handleCallClick}
            className="hidden md:flex btn-primary items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-primary-600">Services</Link>
              <Link href="/property-managers" className="text-gray-700 hover:text-primary-600">For Property Managers</Link>
              <Link href="/service-areas" className="text-gray-700 hover:text-primary-600">Service Areas</Link>
              <Link href="/faqs" className="text-gray-700 hover:text-primary-600">FAQs</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={handleCallClick}
                className="btn-primary text-center"
              >
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

