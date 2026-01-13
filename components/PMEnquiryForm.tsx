'use client'

import { useState } from 'react'

export default function PMEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    propertyAddress: '',
    accessDetails: '',
    occupantNotes: '',
    leakHistory: '',
    preferredScheduling: '',
    approvalProcess: '',
    message: '',
    honeypot: '', // Spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return // Bot detected
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          propertyAddress: formData.propertyAddress,
          accessDetails: formData.accessDetails,
          occupantNotes: formData.occupantNotes,
          leakHistory: formData.leakHistory,
          preferredScheduling: formData.preferredScheduling,
          approvalProcess: formData.approvalProcess,
          message: formData.message,
          source: 'property_manager_enquiry',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          propertyAddress: '',
          accessDetails: '',
          occupantNotes: '',
          leakHistory: '',
          preferredScheduling: '',
          approvalProcess: '',
          message: '',
          honeypot: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Property Management Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-2">
          Property Address *
        </label>
        <input
          type="text"
          id="propertyAddress"
          name="propertyAddress"
          required
          value={formData.propertyAddress}
          onChange={handleChange}
          placeholder="Street address, suburb, postcode"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="accessDetails" className="block text-sm font-medium text-gray-700 mb-2">
          Access Details
        </label>
        <textarea
          id="accessDetails"
          name="accessDetails"
          rows={2}
          value={formData.accessDetails}
          onChange={handleChange}
          placeholder="Key location, lockbox code, tenant contact, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="occupantNotes" className="block text-sm font-medium text-gray-700 mb-2">
          Occupant Notes
        </label>
        <textarea
          id="occupantNotes"
          name="occupantNotes"
          rows={2}
          value={formData.occupantNotes}
          onChange={handleChange}
          placeholder="Any relevant information about the occupants or property"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="leakHistory" className="block text-sm font-medium text-gray-700 mb-2">
          Known Leak History
        </label>
        <textarea
          id="leakHistory"
          name="leakHistory"
          rows={2}
          value={formData.leakHistory}
          onChange={handleChange}
          placeholder="Any known leaks, water damage, or moisture issues"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="preferredScheduling" className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Scheduling Windows
        </label>
        <input
          type="text"
          id="preferredScheduling"
          name="preferredScheduling"
          value={formData.preferredScheduling}
          onChange={handleChange}
          placeholder="e.g., Weekday mornings, after 2pm, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="approvalProcess" className="block text-sm font-medium text-gray-700 mb-2">
          Approval Process
        </label>
        <input
          type="text"
          id="approvalProcess"
          name="approvalProcess"
          value={formData.approvalProcess}
          onChange={handleChange}
          placeholder="e.g., Owner approval required, budget threshold, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any other relevant information about the mould issue"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! We'll respond within 24 hours to schedule an inspection.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          There was an error sending your enquiry. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
      </button>
    </form>
  )
}

