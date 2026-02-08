import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Florence Attractions Guide - Top Things to See & Do | Guido Monaco',
  description: 'Complete guide to Florence attractions from Guido Monaco apartment. Museums, churches, markets, and hidden gems - all with distances, opening hours, and insider tips.',
  keywords: 'Florence attractions, things to do Florence, Florence museums, Uffizi, Duomo Florence, Ponte Vecchio, Florence sightseeing, what to see Florence',
}

const attractions = [
  {
    category: 'Museums & Galleries',
    places: [
      {
        name: 'Uffizi Gallery',
        distance: '1.9 km',
        walkTime: '22 min',
        description: "One of the world's most important art museums. Home to Botticelli's Birth of Venus, Michelangelo, Leonardo da Vinci, and Renaissance masterpieces.",
        hours: 'Tue-Sun 8:15-18:30 (closed Mon)',
        price: '€20-25 (book ahead)',
        tip: 'Book timed entry 2-3 weeks in advance. Go early morning or late afternoon to avoid peak crowds.',
      },
      {
        name: 'Galleria dell\'Accademia',
        distance: '1.4 km',
        walkTime: '17 min',
        description: "Home to Michelangelo's David. The museum also features other Michelangelo sculptures and Renaissance paintings.",
        hours: 'Tue-Sun 8:15-18:50 (closed Mon)',
        price: '€12-16',
        tip: 'Pre-book tickets to skip the 2+ hour queue. Allow 1-1.5 hours for the visit.',
      },
      {
        name: 'Palazzo Pitti',
        distance: '2.2 km',
        walkTime: '26 min',
        description: 'Vast Renaissance palace housing multiple museums and the stunning Boboli Gardens.',
        hours: 'Tue-Sun 8:15-18:30',
        price: '€16 (palace + gardens)',
        tip: 'Combine with Boboli Gardens. Less crowded than Uffizi.',
      },
    ],
  },
  {
    category: 'Churches & Religious Sites',
    places: [
      {
        name: 'Duomo (Cathedral of Santa Maria del Fiore)',
        distance: '1.4 km',
        walkTime: '16 min',
        description: "Florence's iconic cathedral with Brunelleschi's Dome. Climb 463 steps for panoramic city views.",
        hours: 'Cathedral: Mon-Sat 10:00-17:00 | Dome: Mon-Fri 8:30-19:00',
        price: 'Free entry (cathedral) | €18-30 (dome climb)',
        tip: 'Book dome climb in advance. Strict dress code - covered shoulders and knees.',
      },
      {
        name: 'Basilica di Santa Maria Novella',
        distance: '800 m',
        walkTime: '10 min',
        description: 'Stunning Gothic church right by the train station. Beautiful frescoes and Renaissance art.',
        hours: 'Mon-Thu 9:00-17:30, Fri 11:00-17:30',
        price: '€7.50',
        tip: 'Closest major attraction to Guido Monaco apartment - perfect for your first or last day.',
      },
      {
        name: 'Basilica di Santa Croce',
        distance: '2.3 km',
        walkTime: '27 min',
        description: 'Franciscan church housing tombs of Michelangelo, Galileo, Machiavelli, and other Italian legends.',
        hours: 'Mon-Sat 9:30-17:30, Sun 14:00-17:30',
        price: '€8',
        tip: 'Beautiful Piazza Santa Croce outside - great for aperitivo in the evening.',
      },
    ],
  },
  {
    category: 'Historic Landmarks',
    places: [
      {
        name: 'Ponte Vecchio',
        distance: '1.8 km',
        walkTime: '21 min',
        description: "Medieval bridge lined with jewelry shops. Florence's most photographed landmark.",
        hours: 'Open 24/7 (shops vary)',
        price: 'Free',
        tip: 'Visit at sunset for golden hour photos. Less crowded early morning.',
      },
      {
        name: 'Piazza della Signoria',
        distance: '1.8 km',
        walkTime: '21 min',
        description: "Florence's main square with Palazzo Vecchio, outdoor sculpture gallery, and Renaissance architecture.",
        hours: 'Open 24/7',
        price: 'Free (square) | €12.50 (Palazzo Vecchio)',
        tip: 'Free to explore the square and see replica David. Perfect for people-watching at outdoor cafés.',
      },
      {
        name: 'Piazzale Michelangelo',
        distance: '3.2 km',
        walkTime: '38 min',
        description: 'Hilltop terrace with panoramic views over Florence. Best sunset spot in the city.',
        hours: 'Open 24/7',
        price: 'Free',
        tip: 'Walk up for sunset or take bus #12. Bring wine and snacks for a picnic.',
      },
    ],
  },
  {
    category: 'Markets & Food',
    places: [
      {
        name: 'Mercato Centrale',
        distance: '700 m',
        walkTime: '9 min',
        description: 'Two-floor food market. Ground floor: fresh produce and local products. Upper floor: gourmet food court.',
        hours: 'Daily 8:00-24:00',
        price: 'Free entry',
        tip: 'Lunch at the upstairs food court - authentic Italian street food at reasonable prices.',
      },
      {
        name: 'San Lorenzo Market',
        distance: '900 m',
        walkTime: '11 min',
        description: 'Outdoor leather goods market around San Lorenzo church. Leather jackets, bags, souvenirs.',
        hours: 'Daily 9:00-19:00',
        price: 'Free to browse',
        tip: 'Haggle! Start at 50-60% of asking price. Quality varies - inspect carefully.',
      },
      {
        name: 'Sant\'Ambrogio Market',
        distance: '2.1 km',
        walkTime: '25 min',
        description: 'Local food market frequented by Florentines. More authentic, less touristy than Mercato Centrale.',
        hours: 'Mon-Sat 7:00-14:00',
        price: 'Free',
        tip: 'Go morning for fresh produce. Grab porchetta sandwich from Da Rocco.',
      },
    ],
  },
  {
    category: 'Parks & Gardens',
    places: [
      {
        name: 'Boboli Gardens',
        distance: '2.3 km',
        walkTime: '27 min',
        description: 'Historic park behind Palazzo Pitti. Renaissance sculptures, fountains, and panoramic views.',
        hours: 'Daily 8:15-18:30 (seasonal)',
        price: '€10 (or combined with Palazzo Pitti)',
        tip: 'Great escape from city crowds. Bring water and wear comfortable shoes.',
      },
      {
        name: 'Giardino Bardini',
        distance: '2.8 km',
        walkTime: '33 min',
        description: 'Hidden gem garden with panoramic views, wisteria tunnel, and fewer tourists than Boboli.',
        hours: 'Daily 10:00-19:00 (seasonal)',
        price: '€10',
        tip: 'Visit in late April/May for wisteria in bloom. Less crowded alternative to Boboli.',
      },
    ],
  },
  {
    category: 'Hidden Gems',
    places: [
      {
        name: 'Cappelle Medicee',
        distance: '1.2 km',
        walkTime: '14 min',
        description: 'Medici family chapel with Michelangelo sculptures. Stunning marble work and Renaissance architecture.',
        hours: 'Mon-Sat 8:15-13:50',
        price: '€9',
        tip: 'Often overlooked but spectacular. Much quieter than Uffizi/Accademia.',
      },
      {
        name: 'Palazzo Strozzi',
        distance: '1.3 km',
        walkTime: '15 min',
        description: 'Renaissance palace hosting rotating contemporary art exhibitions and cultural events.',
        hours: 'Daily 10:00-20:00 (Thu until 23:00)',
        price: 'Varies by exhibition',
        tip: 'Check their website for current exhibitions. Often world-class contemporary art.',
      },
      {
        name: 'Fortezza da Basso',
        distance: '500 m',
        walkTime: '6 min',
        description: '16th-century fortress now used for exhibitions and events. Historic walls and green spaces.',
        hours: 'Varies by event',
        price: 'Free (exterior)',
        tip: 'Walk around the perimeter for morning jog. Closest historic site to Guido Monaco!',
      },
    ],
  },
]

export default function AttractionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
      <header 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1691319683514-7f0ec295151f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
        className="text-white py-16"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/" style={{ fontFamily: 'Georgia, serif' }} className="text-white hover:opacity-80 transition block mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-normal text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Florence Attractions
          </h1>
          <p className="text-xl mt-3 text-white opacity-95" style={{ fontFamily: 'Georgia, serif' }}>
            Complete guide from Guido Monaco apartment
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Intro */}
        <div className="bg-white rounded shadow-sm p-8 mb-8">
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            Florence is packed with world-class museums, historic churches, and Renaissance masterpieces. 
            From Guido Monaco apartment on Via Guido Monaco, you're within walking distance of everything.
          </p>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed">
            All distances and walking times are calculated from the apartment. Prices and hours are current as of 2026 - 
            always check official websites before visiting.
          </p>
        </div>

        {/* Attractions by Category */}
        {attractions.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-6">
              {section.category}
            </h2>
            
            <div className="space-y-6">
              {section.places.map((place, placeIdx) => (
                <div key={placeIdx} className="bg-white rounded shadow-sm p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal">
                      {place.name}
                    </h3>
                    <div className="flex gap-4 text-sm">
                      <span style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold">
                        📍 {place.distance}
                      </span>
                      <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
                        🚶 {place.walkTime}
                      </span>
                    </div>
                  </div>
                  
                  <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base leading-relaxed mb-4">
                    {place.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <span style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">
                        Hours:
                      </span>
                      <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm ml-2">
                        {place.hours}
                      </span>
                    </div>
                    <div>
                      <span style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">
                        Price:
                      </span>
                      <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm ml-2">
                        {place.price}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ backgroundColor: '#f8f8f8' }} className="p-3 rounded">
                    <span style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">
                      💡 Insider Tip:
                    </span>
                    <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm ml-2">
                      {place.tip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-white rounded shadow-sm p-8 mt-12">
          <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-4">
            Perfect Base for Florence Exploration
          </h3>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="mb-4 text-lg leading-relaxed">
            Guido Monaco apartment puts you 5 minutes from Santa Maria Novella station and within walking distance 
            of every major attraction. Modern comfort meets Renaissance art.
          </p>
          <a 
            href="https://www.homesinflorence.it/guido-monaco-florence"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#ae9a64', fontFamily: 'Georgia, serif' }}
            className="inline-block text-white px-8 py-3 rounded font-normal hover:opacity-90 transition"
          >
            Check Availability & Book
          </a>
        </div>
      </main>

      <footer style={{ backgroundColor: '#333' }} className="text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p style={{ fontFamily: 'Georgia, serif' }} className="opacity-90">
            © 2026 Guido Monaco Florence
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
