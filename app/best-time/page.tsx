import type { Metadata } from 'next'
import Link from 'next/link'
import { Sun, Cloud, CloudRain, Snowflake, Users, Euro, Lightbulb, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Time to Visit Florence - Complete Seasonal Guide | Guido Monaco',
  description: 'Comprehensive guide to visiting Florence by season. Weather, crowds, prices, and insider tips for spring, summer, fall, and winter travel.',
  keywords: 'best time visit Florence, Florence weather, Florence seasons, when to visit Florence, Florence spring summer fall winter',
}

const seasons = [
  {
    season: 'Spring (March-May)',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
    summary: 'Ideal weather, blooming gardens, moderate crowds',
    icon: <Sun className="w-12 h-12" />,
    weather: {
      temperature: '12-22°C (54-72°F)',
      conditions: 'Mild, occasional rain, increasing sunshine',
      clothing: 'Layers, light jacket, umbrella for April showers',
    },
    crowds: 'Moderate - increasing from March to May, peak around Easter',
    prices: 'Medium-High - especially during Easter week',
    highlights: [
      'Perfect walking weather without summer heat',
      'Gardens and parks burst into bloom (wisteria in late April)',
      'Scoppio del Carro at Easter (March/April)',
      'Maggio Musicale Festival begins (late April)',
      'Outdoor cafés open, terraces come alive',
      'Flower market at Piazza della Repubblica',
    ],
    considerations: [
      'Book accommodation well ahead for Easter week',
      'April can be rainy - pack waterproof layers',
      'Popular with European tourists during spring holidays',
      'Some outdoor attractions may have reduced hours in March',
    ],
    tip: 'Late April to mid-May offers the best balance: warm weather, blooming wisteria, and not yet peak crowds. Perfect for exploring gardens like Bardini and Boboli.',
  },
  {
    season: 'Summer (June-August)',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800',
    summary: 'Hot weather, peak crowds, long daylight, major festivals',
    icon: <Sun className="w-12 h-12" />,
    weather: {
      temperature: '20-35°C (68-95°F), often exceeding 35°C in July/August',
      conditions: 'Hot, dry, intense sun, occasional thunderstorms',
      clothing: 'Light, breathable fabrics, sun hat, sunscreen essential',
    },
    crowds: 'Very Heavy - peak tourist season, long museum queues',
    prices: 'Highest - premium rates for everything',
    highlights: [
      'Calcio Storico matches in June (must-see spectacle)',
      'Festa di San Giovanni fireworks (June 24)',
      'Extended museum hours and evening openings',
      'Open-air cinema and concerts throughout the city',
      'Gelato season at its finest',
      'Daylight until 21:00+, perfect for evening strolls',
    ],
    considerations: [
      'Oppressive heat makes midday sightseeing exhausting',
      'Museums and churches crowded with tour groups',
      'Many locals leave in August (Ferragosto), some restaurants close',
      'Need to book everything months in advance',
      'Air conditioning not universal in older hotels',
    ],
    tip: 'Visit museums early morning (8:15 opening) or late afternoon. Take a long lunch break during peak heat (13:00-17:00). Early June or late August offer slightly more comfortable temperatures while keeping summer events.',
  },
  {
    season: 'Fall (September-November)',
    image: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800',
    summary: 'Comfortable weather, harvest season, cultural events, thinning crowds',
    icon: <Cloud className="w-12 h-12" />,
    weather: {
      temperature: '10-25°C (50-77°F), gradually cooling',
      conditions: 'Pleasant in September, increasing rain in October/November',
      clothing: 'Light layers in September, jacket by November',
    },
    crowds: 'Moderate - decreasing after mid-September, very manageable by November',
    prices: 'Medium - dropping significantly in November',
    highlights: [
      'Festa della Rificolona lantern festival (September 7)',
      'Biennale dell\'Antiquariato in odd years (September)',
      'Grape harvest season - wine tours in Chianti',
      'Truffle season begins (October-November)',
      'Florence Marathon (late November)',
      'Cooler weather perfect for walking tours',
      'Fall foliage in gardens and countryside',
    ],
    considerations: [
      'October-November sees increasing rain - pack umbrella',
      'Days shorten significantly by November',
      'Some outdoor attractions close earlier or entirely by November',
      'November can feel quiet and gray',
    ],
    tip: 'September and early October are arguably the best times to visit: summer heat has passed, crowds thin dramatically, harvest season brings incredible food, and cultural calendar remains full. Late October adds truffle festivals.',
  },
  {
    season: 'Winter (December-February)',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800',
    summary: 'Cold but magical, Christmas markets, fewest crowds, lowest prices',
    icon: <Snowflake className="w-12 h-12" />,
    weather: {
      temperature: '3-12°C (37-54°F), occasionally below freezing',
      conditions: 'Cold, damp, occasional rain, rare snow',
      clothing: 'Warm coat, scarf, gloves, waterproof boots',
    },
    crowds: 'Light - except Christmas/New Year week',
    prices: 'Lowest - significant deals on accommodation (except holidays)',
    highlights: [
      'Christmas markets in Piazza Santa Croce (all December)',
      'Festive decorations and lights throughout city',
      'Pitti Uomo Fashion Week (January)',
      'Empty museums - walk into Uffizi without advance booking',
      'Genuine local atmosphere without tourist hordes',
      'Cozy trattorias and winter comfort food',
      'Chinese New Year celebrations in Florence\'s Chinatown',
    ],
    considerations: [
      'Cold, damp weather can be uncomfortable for extended walking',
      'Some attractions have reduced hours',
      'Many restaurants close for vacation in January/February',
      'Short daylight hours (sunset around 17:00)',
      'Churches can be extremely cold inside',
    ],
    tip: 'December combines festive atmosphere with manageable crowds (except Christmas week). January-February offer rock-bottom prices and empty museums - perfect for serious art lovers who don\'t mind cold. Book a place with good heating!',
  },
]

const monthByMonth = [
  { month: 'January', temp: '3-10°C', rain: 'Medium', crowds: 'Low', highlight: 'Pitti Uomo, lowest prices, empty museums' },
  { month: 'February', temp: '3-12°C', rain: 'Medium', crowds: 'Low', highlight: 'Carnival celebrations, Valentine\'s romance' },
  { month: 'March', temp: '6-16°C', rain: 'Medium', crowds: 'Increasing', highlight: 'Spring awakening, Unità d\'Italia (17th)' },
  { month: 'April', temp: '9-19°C', rain: 'High', crowds: 'Medium-High', highlight: 'Easter Scoppio del Carro, wisteria blooms' },
  { month: 'May', temp: '13-23°C', rain: 'Medium', crowds: 'Medium-High', highlight: 'Maggio Musicale, perfect weather' },
  { month: 'June', temp: '17-28°C', rain: 'Low', crowds: 'High', highlight: 'Calcio Storico, San Giovanni (24th)' },
  { month: 'July', temp: '20-33°C', rain: 'Very Low', crowds: 'Very High', highlight: 'Long daylight, outdoor concerts' },
  { month: 'August', temp: '20-35°C', rain: 'Very Low', crowds: 'Very High', highlight: 'Ferragosto (15th), locals on holiday' },
  { month: 'September', temp: '16-27°C', rain: 'Medium', crowds: 'Medium', highlight: 'Rificolona (7th), harvest season' },
  { month: 'October', temp: '12-22°C', rain: 'High', crowds: 'Low-Medium', highlight: 'Truffle season, autumn colors' },
  { month: 'November', temp: '7-15°C', rain: 'High', crowds: 'Low', highlight: 'Florence Marathon, lower prices' },
  { month: 'December', temp: '3-11°C', rain: 'Medium', crowds: 'Medium (holidays)', highlight: 'Christmas markets, festive lights' },
]

export default function BestTimePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8f7ee' }}>
      <header 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1691319683514-7f0ec295151f?q=80&w=1742)',
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
            Best Time to Visit Florence
          </h1>
          <p className="text-xl mt-3 text-white opacity-95" style={{ fontFamily: 'Georgia, serif' }}>
            Complete seasonal guide to planning your perfect trip
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Intro */}
        <div className="bg-white rounded shadow-sm p-8 mb-8">
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            Florence shines year-round, but each season offers distinct advantages. Your ideal visit depends on priorities: 
            weather comfort, crowd tolerance, budget flexibility, and specific events.
          </p>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed">
            <strong>Quick answer:</strong> Late April to early May and September to mid-October offer the best balance. 
            But every season has magic worth experiencing.
          </p>
        </div>

        {/* Seasons */}
        <div className="space-y-8 mb-12">
          {seasons.map((season, idx) => (
            <div key={idx} style={{ backgroundColor: '#F8F8F8' }} className="rounded shadow-sm overflow-hidden">
              {/* Image */}
              {season.image && (
                <div className="relative h-64 w-full">
                  <img 
                    src={season.image} 
                    alt={season.season}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div style={{ color: '#4d9a6e' }}>
                    {season.icon}
                  </div>
                  <div>
                    <h3 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal">
                      {season.season}
                    </h3>
                    <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm opacity-80">
                      {season.summary}
                    </p>
                  </div>
                </div>

                {/* Weather, Crowds, Prices */}
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div style={{ backgroundColor: '#e8f7ee' }} className="p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-4 h-4" style={{ color: '#4d9a6e' }} />
                      <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">Weather</span>
                    </div>
                    <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-xs">
                      {season.weather.temperature}
                    </p>
                    <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-xs">
                      {season.weather.conditions}
                    </p>
                  </div>
                  <div style={{ backgroundColor: '#e8f7ee' }} className="p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4" style={{ color: '#4d9a6e' }} />
                      <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">Crowds</span>
                    </div>
                    <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-xs">
                      {season.crowds}
                    </p>
                  </div>
                  <div style={{ backgroundColor: '#e8f7ee' }} className="p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Euro className="w-4 h-4" style={{ color: '#4d9a6e' }} />
                      <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">Prices</span>
                    </div>
                    <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-xs">
                      {season.prices}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {season.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm flex items-start gap-2">
                        <span style={{ color: '#4d9a6e' }}>•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Considerations */}
                <div className="mb-4">
                  <h4 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm mb-2">
                    Things to Consider:
                  </h4>
                  <ul className="space-y-1">
                    {season.considerations.map((consideration, cIdx) => (
                      <li key={cIdx} style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm flex items-start gap-2">
                        <span style={{ color: '#4d9a6e' }}>•</span>
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tip */}
                <div style={{ backgroundColor: '#e8f7ee' }} className="p-3 rounded flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4d9a6e' }} />
                  <div>
                    <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">
                      Insider Tip:
                    </span>
                    <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm ml-2">
                      {season.tip}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Month-by-Month Quick Reference */}
        <div className="bg-white rounded shadow-sm p-8 mb-8">
          <h2 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-6 flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            Month-by-Month Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#e8f7ee' }}>
                  <th style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-left p-3">Month</th>
                  <th style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-left p-3">Temp</th>
                  <th style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-left p-3">Rain</th>
                  <th style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-left p-3">Crowds</th>
                  <th style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-left p-3">Key Highlight</th>
                </tr>
              </thead>
              <tbody>
                {monthByMonth.map((month, idx) => (
                  <tr key={idx} className="border-b" style={{ borderColor: '#e8f7ee' }}>
                    <td style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="p-3 font-semibold">{month.month}</td>
                    <td style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="p-3">{month.temp}</td>
                    <td style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="p-3">{month.rain}</td>
                    <td style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="p-3">{month.crowds}</td>
                    <td style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="p-3">{month.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded shadow-sm p-8">
          <h3 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-4">
            Book Your Perfect Season at Guido Monaco
          </h3>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="mb-4 text-lg leading-relaxed">
            Whatever season you choose, Guido Monaco apartment provides modern comfort with heating for winter, 
            fans for summer, and the perfect central location year-round.
          </p>
          <a 
            href="https://www.booking.com/Share-3c371d"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#4d9a6e', fontFamily: 'Georgia, serif' }}
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
              style={{ color: '#4d9a6e' }}
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
