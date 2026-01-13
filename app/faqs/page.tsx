'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/constants'

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is mould remediation?',
      answer: 'Mould remediation involves the safe removal of affected materials (such as plasterboard, skirting, and linings) and professional treatment to prevent recurrence. Unlike simple cleaning, remediation addresses the root cause and ensures the mould does not return.',
    },
    {
      question: 'How quickly can you respond?',
      answer: 'We understand the urgency of mould issues, especially in rental properties. We typically respond to enquiries within 24 hours and can schedule inspections quickly. Response times may vary based on location and current workload.',
    },
    {
      question: 'Do you provide documentation for insurance claims?',
      answer: 'Yes. We provide comprehensive reports with moisture readings, photographs, and detailed documentation of all work completed. Our reports are suitable for insurance claims and property management records.',
    },
    {
      question: 'What areas do you service?',
      answer: 'We service North West Coast Tasmania (Burnie, Devonport, Ulverstone, Penguin, Wynyard, Somerset, Smithton, Stanley) and the Launceston region (Launceston, Invermay, Newstead, Kings Meadows, Prospect, Riverside, Legana and surrounding suburbs).',
    },
    {
      question: 'Do you do plumbing or structural repairs?',
      answer: 'No. We specialise in mould remediation and moisture assessment. We do not perform plumbing repairs or structural alterations. If we identify leaks or structural issues, we refer these to licensed trades.',
    },
    {
      question: 'How much does mould remediation cost?',
      answer: 'Costs vary depending on the extent of the mould, affected areas, and required remediation work. We provide detailed quotes after our initial assessment. Contact us for a consultation.',
    },
    {
      question: 'Is mould remediation safe?',
      answer: 'Yes. We use appropriate safety equipment, containment measures, and follow industry best practices to ensure safe remediation. We remove affected materials safely and treat areas to prevent recurrence.',
    },
    {
      question: 'How long does remediation take?',
      answer: 'The duration depends on the extent of the mould and affected areas. A typical remediation project can take from one day to several days. We provide timeframes after our initial assessment.',
    },
    {
      question: 'Do you work with property managers?',
      answer: 'Yes. Property managers are one of our primary client groups. We understand the needs of property managers for fast response, detailed documentation, and professional service. We work with property managers managing portfolios across Tasmania.',
    },
    {
      question: 'What should I do if I discover mould?',
      answer: 'Contact us as soon as possible. Avoid disturbing the mould area and ensure good ventilation. We can provide a comprehensive assessment and recommend the appropriate remediation approach.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Common questions about our mould remediation and moisture assessment services
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-primary-100">Contact us and we'll be happy to help</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Call Now
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

