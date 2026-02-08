import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Guido Monaco Apartment - Via Guido Monaco, Florence | Book Your Stay',
  description: 'Modern 2nd floor apartment with terrace on Via Guido Monaco, Florence. 5 minutes from Santa Maria Novella Station. Sleeps 3 guests. Air conditioning, WiFi, fully equipped kitchen.',
  keywords: 'Guido Monaco Florence, Via Guido Monaco apartment, Florence apartment booking, accommodation near Florence station',
}

export default function PropertyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
      <header style={{ backgroundColor: '#ae9a64' }} className="text-white py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link href="/" style={{ fontFamily: 'Georgia, serif' }} className="text-white hover:opacity-80 transition">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="bg-white rounded shadow-sm overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-4 p-4">
            <div className="relative h-96">
              <Image src="/images/guido-monaco-01.jpg" alt="Guido Monaco Living Room" fill style={{ objectFit: 'cover' }} className="rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44">
                <Image src="/images/guido-monaco-02.jpg" alt="Bedroom" fill style={{ objectFit: 'cover' }} className="rounded" />
              </div>
              <div className="relative h-44">
                <Image src="/images/guido-monaco-03.jpg" alt="Kitchen" fill style={{ objectFit: 'cover' }} className="rounded" />
              </div>
              <div className="relative h-44">
                <Image src="/images/guido-monaco-04.jpg" alt="Terrace" fill style={{ objectFit: 'cover' }} className="rounded" />
              </div>
              <div className="relative h-44">
                <Image src="/images/guido-monaco-05.jpg" alt="Bathroom" fill style={{ objectFit: 'cover' }} className="rounded" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Address */}
            <div className="bg-white rounded shadow-sm p-8">
              <h1 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-4xl font-normal mb-4">
                Guido Monaco Apartment
              </h1>
              <div style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg space-y-2">
                <p className="flex items-start gap-2">
                  <span className="text-2xl">📍</span>
                  <span>
                    <strong>Via Guido Monaco</strong><br />
                    50144 Florence, Italy
                  </span>
                </p>
                <p className="text-base opacity-75">License: IT048017C2C2WZ8T9D</p>
              </div>
              
              {/* Rating Badge */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded" style={{ backgroundColor: '#ae9a64' }}>
                <span className="text-white font-semibold" style={{ fontFamily: 'Georgia, serif' }}>9.0</span>
                <span className="text-white" style={{ fontFamily: 'Georgia, serif' }}>Wonderful</span>
                <span className="text-white opacity-90" style={{ fontFamily: 'Georgia, serif' }}>· 21 reviews</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded shadow-sm p-8">
              <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-4">
                About This Apartment
              </h2>
              <div style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed space-y-4">
                <p>
                  Welcome to this comfortable apartment located in Florence, on Via Guido Monaco. 
                  The property is located on the second floor of a modern building with a lift.
                </p>
                <p>
                  As soon as you enter, you will be greeted by a bright, modern and well-equipped kitchen/living room, 
                  where you can prepare delicious breakfasts before setting off on an adventure to explore the city. 
                  The double bedroom awaits you with its welcoming comfort, ready to lull you into a restful sleep 
                  after a day of discoveries and wonders.
                </p>
                <p>
                  The complete bathroom offers you every comfort, with a regenerating shower ready to pamper you 
                  when you return from your Florentine adventures. Completing the apartment you will find the terrace, 
                  where you can enjoy a morning coffee or a glass of wine upon returning from your visits to Florence.
                </p>
                <p>
                  This welcoming space can accommodate up to 3 people comfortably, thanks to the double bed in the 
                  bedroom and the practical sofa bed in the living area. Don't worry about the summer heat - 
                  the apartment is equipped with air conditioning to guarantee you a pleasant stay in any season.
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded shadow-sm p-8">
              <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-6">
                Amenities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold mb-3">
                    🏠 Property Features
                  </h3>
                  <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2">
                    <li>✓ 2nd floor with elevator</li>
                    <li>✓ Private terrace</li>
                    <li>✓ 55 m² (590 sq ft)</li>
                    <li>✓ 1 bedroom + living room</li>
                    <li>✓ Sleeps up to 3 guests</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold mb-3">
                    ❄️ Comfort
                  </h3>
                  <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2">
                    <li>✓ Air conditioning</li>
                    <li>✓ Heating</li>
                    <li>✓ Hot water</li>
                    <li>✓ Fresh linens & towels</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold mb-3">
                    🍳 Kitchen
                  </h3>
                  <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2">
                    <li>✓ Fully equipped kitchen</li>
                    <li>✓ Dishwasher</li>
                    <li>✓ Refrigerator</li>
                    <li>✓ Stove & oven</li>
                    <li>✓ Cooking utensils</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold mb-3">
                    📱 Technology
                  </h3>
                  <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2">
                    <li>✓ Free WiFi</li>
                    <li>✓ TV</li>
                    <li>✓ Washing machine</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* House Rules */}
            <div className="bg-white rounded shadow-sm p-8">
              <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-6">
                House Rules
              </h2>
              <div className="grid md:grid-cols-2 gap-6" style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
                <div>
                  <p className="mb-2"><strong>Check-in:</strong> 14:00 - 20:00</p>
                  <p className="mb-2"><strong>Check-out:</strong> Before 10:00</p>
                  <p className="mb-2"><strong>Smoking:</strong> No smoking inside</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Parties:</strong> Not allowed</p>
                  <p className="mb-2"><strong>Pets:</strong> Not allowed</p>
                  <p className="mb-2"><strong>Children:</strong> Welcome</p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-white rounded shadow-sm p-8">
              <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-6">
                Location & Neighborhood
              </h2>
              
              <div style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-6">
                <p className="mb-4">
                  This apartment is located in a strategic position on the Florentine boulevards near the Fortezza da Basso 
                  and the Central Station of Santa Maria Novella. We are on the border of the historical center of Florence 
                  (and the limited traffic zone) within walking distance of many monuments and the city's main museums.
                </p>
              </div>

              {/* Distances */}
              <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-xl font-normal mb-4">
                Walking Distances to Attractions
              </h3>
              <div className="grid md:grid-cols-2 gap-3 mb-6" style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
                <p>📍 Fortezza da Basso: <strong>500 m (6 min)</strong></p>
                <p>📍 Basilica di Santa Maria Novella: <strong>800 m (10 min)</strong></p>
                <p>📍 Cappelle Medicee: <strong>1.2 km (14 min)</strong></p>
                <p>📍 Palazzo Strozzi: <strong>1.3 km (15 min)</strong></p>
                <p>📍 Duomo: <strong>1.4 km (16 min)</strong></p>
                <p>📍 Galleria dell'Accademia: <strong>1.4 km (17 min)</strong></p>
                <p>📍 Ponte Vecchio: <strong>1.8 km (21 min)</strong></p>
                <p>📍 Uffizi Gallery: <strong>1.9 km (22 min)</strong></p>
              </div>

              {/* Transportation */}
              <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-xl font-normal mb-4">
                How to Get Here
              </h3>
              <div style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed space-y-3">
                <p><strong>From Florence Central Station (Santa Maria Novella):</strong> 5-minute walk</p>
                <p><strong>From Florence Airport (Amerigo Vespucci):</strong> 20 minutes by car or taxi</p>
                <p><strong>Public transport:</strong> Tramway stop nearby</p>
              </div>

              {/* Nearby Services */}
              <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-xl font-normal mb-4 mt-6">
                Nearby Supermarkets & Restaurants
              </h3>
              <div style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed space-y-3">
                <p><strong>Supermarkets:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Sapori e Dintorni - Via Alamanni</li>
                  <li>• Carrefour - Via il Prato</li>
                </ul>
                <p className="mt-4"><strong>Food:</strong> Mercato Centrale (700m) - fresh local products + gourmet food court</p>
                <p><strong>Dining:</strong> Many restaurants and pubs in the station area for all tastes and budgets</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded shadow-sm p-8">
              <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-6">
                Map Location
              </h2>
              <div className="w-full h-96 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.4937383892755!2d11.245961076527658!3d43.78445647109674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sVia%20Guido%20Monaco%2C%2050144%20Firenze%20FI%2C%20Italy!5e0!3m2!1sen!2sth!4v1707384000000!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded shadow-lg p-6 sticky top-4">
              <div className="mb-6">
                <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm mb-2">
                  Starting from
                </p>
                <p style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal">
                  Contact for rates
                </p>
                <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm opacity-75">
                  per night
                </p>
              </div>

              <div className="space-y-4 mb-6" style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👥</span>
                  <span>Up to 3 guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛏️</span>
                  <span>1 bedroom + sofa bed</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚿</span>
                  <span>1 bathroom</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏢</span>
                  <span>55 m² apartment</span>
                </div>
              </div>

              <a
                href="https://www.homesinflorence.it/guido-monaco-florence"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#ae9a64', fontFamily: 'Georgia, serif' }}
                className="block w-full text-center text-white px-6 py-4 rounded text-lg font-normal hover:opacity-90 transition mb-3"
              >
                Check Availability
              </a>

              <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm text-center opacity-75">
                Managed by Homes in Florence
              </p>

              <hr className="my-6" style={{ borderColor: '#ae9a64', opacity: 0.3 }} />

              <div className="space-y-3">
                <p style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold">
                  Why Book Guido Monaco?
                </p>
                <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2 text-sm">
                  <li>✓ 5 minutes from train station</li>
                  <li>✓ Walking distance to all attractions</li>
                  <li>✓ Private terrace</li>
                  <li>✓ Air conditioning</li>
                  <li>✓ Modern, fully equipped</li>
                  <li>✓ 9.0/10 guest rating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ backgroundColor: '#333' }} className="text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p style={{ fontFamily: 'Georgia, serif' }} className="opacity-90">
            © 2026 Guido Monaco Florence. Managed by{' '}
            <a href="https://www.homesinflorence.it" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              Homes in Florence
            </a>
          </p>
          <p className="mt-3" style={{ fontFamily: 'Georgia, serif' }}>
            <a 
              href="https://www.instagram.com/guidomonacobnb" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#ae9a64' }}
              className="hover:opacity-75"
            >
              Follow us on Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
