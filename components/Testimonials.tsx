const testimonials = [
  {
    quote: 'Clear communication and thorough documentation. The report made it easy to brief the owner.',
    name: 'Property Manager, North West Coast',
  },
  {
    quote: 'Fast booking and a proper scope of work. The mould issue has not returned.',
    name: 'Landlord, Devonport',
  },
  {
    quote: 'Professional inspection with moisture readings and photos. Exactly what we needed.',
    name: 'Homeowner, Launceston',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Feedback
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by property managers and homeowners across Tasmania
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
              <p className="text-sm font-semibold text-gray-900">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}