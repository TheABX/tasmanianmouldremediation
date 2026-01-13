'use client'

import { useState } from 'react'

export default function BookInspectionForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    customerType: '',
    mainIssues: [] as string[],
    urgency: '',
    notes: '',
    honeypot: '', // Spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const mainIssueOptions = [
    'Recurring mould',
    'Multi-room mould',
    'Visible water staining',
    'Musty odours',
    'Post-leak mould',
    'Other',
  ]

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent - Same day or next day' },
    { value: 'soon', label: 'Soon - Within a week' },
    { value: 'flexible', label: 'Flexible - When convenient' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData({
      ...formData,
      mainIssues: checked
        ? [...formData.mainIssues, value]
        : formData.mainIssues.filter((issue) => issue !== value),
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number'
    } else if (!/^[\d\s()+-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Please enter the property address or suburb'
    }

    if (!formData.customerType) {
      newErrors.customerType = 'Please select whether you are a property manager, owner, or tenant'
    }

    if (formData.mainIssues.length === 0) {
      newErrors.mainIssues = 'Please select at least one main issue'
    }

    if (!formData.urgency) {
      newErrors.urgency = 'Please select the urgency level'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return // Bot detected
    }

    if (!validateForm()) {
      return
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
          email: formData.email,
          phone: formData.phone,
          propertyAddress: formData.address,
          customerType: formData.customerType,
          mainIssues: formData.mainIssues,
          urgency: formData.urgency,
          message: formData.notes,
          source: 'book_inspection',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          customerType: '',
          mainIssues: [],
          urgency: '',
          notes: '',
          honeypot: '',
        })
        setErrors({})
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
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.name ? 'border-red-300' : 'border-gray-300'
          }`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
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
          placeholder="0400 000 000"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.phone ? 'border-red-300' : 'border-gray-300'
          }`}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

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
          placeholder="your.email@example.com"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.email ? 'border-red-300' : 'border-gray-300'
          }`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          Property Address or Suburb *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          placeholder="Street address, suburb, or postcode"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.address ? 'border-red-300' : 'border-gray-300'
          }`}
          aria-invalid={errors.address ? 'true' : 'false'}
          aria-describedby={errors.address ? 'address-error' : undefined}
        />
        {errors.address && (
          <p id="address-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.address}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Are you a... *
        </label>
        <div className="space-y-2">
          {['Property Manager', 'Owner', 'Tenant'].map((type) => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="customerType"
                value={type.toLowerCase().replace(' ', '_')}
                checked={formData.customerType === type.toLowerCase().replace(' ', '_')}
                onChange={handleChange}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
        {errors.customerType && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.customerType}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Main Issue (select all that apply) *
        </label>
        <div className="space-y-2">
          {mainIssueOptions.map((issue) => (
            <label key={issue} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={issue}
                checked={formData.mainIssues.includes(issue)}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500 rounded"
              />
              <span className="text-gray-700">{issue}</span>
            </label>
          ))}
        </div>
        {errors.mainIssues && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.mainIssues}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
          Urgency *
        </label>
        <select
          id="urgency"
          name="urgency"
          required
          value={formData.urgency}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.urgency ? 'border-red-300' : 'border-gray-300'
          }`}
          aria-invalid={errors.urgency ? 'true' : 'false'}
          aria-describedby={errors.urgency ? 'urgency-error' : undefined}
        >
          <option value="">Select urgency level</option>
          {urgencyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.urgency && (
          <p id="urgency-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.urgency}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any additional information about the mould issue..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Microcopy */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
        <p className="font-semibold mb-2">What to expect:</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>We typically respond within 24 hours to schedule your inspection</li>
          <li>We can't provide pricing over the phone without seeing the property first</li>
          <li>After inspection, you'll receive a fixed-scope quote with clear breakdown</li>
        </ul>
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500">
        By submitting this form, you agree to our privacy policy. We'll only use your information to contact you about your inspection request.
      </p>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg" role="alert">
          <p className="font-semibold mb-1">Thank you! Your inspection request has been submitted.</p>
          <p>We'll respond within 24 hours to schedule your inspection time.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg" role="alert">
          <p className="font-semibold mb-1">There was an error submitting your request.</p>
          <p>Please try again or call us directly to book your inspection.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Book Inspection'}
      </button>
    </form>
  )
}

