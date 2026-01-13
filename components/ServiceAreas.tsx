export default function ServiceAreas() {
  const areas = {
    'North West Coast': [
      'Burnie',
      'Devonport',
      'Ulverstone',
      'Penguin',
      'Wynyard',
      'Somerset',
      'Smithton',
      'Stanley',
    ],
    'Launceston Region': [
      'Launceston',
      'Invermay',
      'Newstead',
      'Kings Meadows',
      'Prospect',
      'Riverside',
      'Legana',
      'Surrounding suburbs',
    ],
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving property managers and landlords across Tasmania
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(areas).map(([region, suburbs]) => (
            <div key={region} className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{region}</h3>
              <ul className="grid grid-cols-2 gap-3">
                {suburbs.map((suburb) => (
                  <li key={suburb} className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{suburb}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-500">Map placeholder - Tasmania service areas</p>
        </div>
      </div>
    </section>
  )
}

