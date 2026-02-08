import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Time to Visit Florence - Complete Seasonal Guide | Guido Monaco',
  description: 'Complete guide to visiting Florence by season. Weather, crowds, events, and insider tips for planning your perfect Florence trip year-round.',
  keywords: 'best time visit Florence, Florence weather, Florence by season, when to visit Florence, Florence crowds, Florence events',
}

const seasons = [
  {
    season: 'Spring (March - May)',
    weather: '10-23°C (50-73°F)',
    crowds: 'Moderate to High',
    bestFor: 'Pleasant weather, blooming gardens, cultural events',
    description: "Spring is considered by many the best time to visit Florence, offering mild temperatures, blooming flowers, and that perfect balance before summer crowds arrive. March starts cool and rainy but by April, the weather turns delightful with temperatures in the high teens Celsius. This is when Florence's gardens come alive - wisteria drapes Bardini Gardens in purple cascades, iris bloom across the city (Florence's symbol), and roses perfume the Boboli Gardens. Easter brings the spectacular Scoppio del Carro tradition with its explosive cart and mechanical dove. The days grow longer, perfect for evening passeggiata (strolls) along the Arno. May is particularly lovely with warm days ideal for outdoor dining and fewer crowds than summer, though American and European spring breakers do visit. The Maggio Musicale Fiorentino music festival fills venues with world-class opera and classical music. Restaurant terraces open, gelato season begins in earnest, and locals shed winter coats to enjoy outdoor cafés. This season offers the best photography light - soft morning sun illuminating Renaissance architecture without the harsh summer glare. Book accommodations early as spring's popularity means hotels fill quickly, especially during Easter week.",
    events: [
      'Scoppio del Carro (Easter)',
      'Maggio Musicale Fiorentino (April-June)',
      'Feast of the Annunciation (March 25)',
    ],
    pros: [
      'Perfect weather for walking and sightseeing',
      'Blooming gardens and flowers throughout the city',
      'Major cultural festival (Maggio Musicale)',
      'Longer daylight hours',
      'Shoulder season pricing on some accommodations',
    ],
    cons: [
      'Easter week brings significant crowds',
      'Occasional rain showers',
      'Prices rising as summer approaches',
      'Some museums start getting crowded',
    ],
    tips: "Book well in advance, especially for Easter week. Bring layers as temperatures vary between morning and evening. Visit gardens specifically in late April/early May for wisteria and flowers. Restaurant reservations recommended for popular spots.",
  },
  {
    season: 'Summer (June - August)',
    weather: '20-35°C (68-95°F)',
    crowds: 'Very High',
    bestFor: 'Outdoor events, aperitivo culture, long days',
    description: "Summer is Florence's peak tourist season, bringing sweltering heat, massive crowds, and the city's most vibrant street life. June marks the beginning of outdoor season with Calcio Storico matches creating electric atmosphere in Piazza Santa Croce. The brutal medieval football tournament showcases Florentine pride as historic neighborhoods battle in costume. San Giovanni's feast day (June 24th) culminates in spectacular fireworks over the Arno visible from Piazzale Michelangelo. July and August are intensely hot with temperatures often exceeding 35°C (95°F) and high humidity making midday exploration uncomfortable. However, summer offers unique experiences: evening passeggiata culture peaks as locals emerge after dark, restaurants move seating to outdoor terraces, and rooftop bars offer sunset aperitivo with panoramic views. Museums stay open later (some until 22:00), allowing you to sightsee during cooler evening hours. Many Florentines leave the city in August for Ferragosto holidays, so some restaurants and shops close, but this also means slightly fewer crowds at major attractions. The Arno's water levels drop dramatically, exposing rocky shores where locals picnic. Summer festivals include outdoor cinema screenings in Piazza Santissima Annunziata and concerts in historic courtyards.",
    events: [
      'Calcio Storico Fiorentino (mid-June)',
      'Festa di San Giovanni with fireworks (June 24)',
      'Estate Fiesolana festival (June-August)',
      'Outdoor cinema and concerts',
    ],
    pros: [
      'Longest daylight hours (until 21:00+)',
      'Vibrant outdoor culture and street life',
      'Major summer festivals and events',
      'All attractions operating full hours',
      'Perfect for aperitivo and evening dining',
    ],
    cons: [
      'Extreme heat and humidity',
      'Overwhelming tourist crowds at all major sites',
      'Highest accommodation prices',
      'Many locals away in August (some closures)',
      'Air quality can be poor',
    ],
    tips: "Visit museums and indoor attractions during midday heat (11:00-16:00), explore outdoors early morning or evening. Stay in air-conditioned accommodation (Guido Monaco has A/C!). Drink plenty of water. Book everything in advance - restaurants, museums, tours sell out. Consider visiting nearby hilltop towns for cooler temperatures.",
  },
  {
    season: 'Fall (September - November)',
    weather: '12-25°C (54-77°F)',
    crowds: 'Moderate to High',
    bestFor: 'Wine harvest, truffle season, cultural events',
    description: "Autumn transforms Florence into a golden paradise with perfect weather, wine harvest celebrations, and that magical time when summer tourists depart but pleasant temperatures remain. September still feels summer-like with warm days ideal for exploration without the punishing heat. The Festa della Rificolona lantern festival (September 7th) brings families into streets carrying traditional paper lanterns - a charming local tradition rarely seen by tourists. October is arguably Florence's finest month: temperatures cool to comfortable walking weather, fall colors emerge in Boboli and Bardini gardens, and Tuscany's grape harvest (vendemmia) fills countryside with activity. Many wineries offer harvest tours and tastings. Chestnuts appear roasted at street corners, white truffles arrive on restaurant menus, and seasonal dishes like wild boar and porcini mushrooms dominate menus. November grows cooler and rainier but offers advantages: minimal crowds at major museums, shoulder season hotel rates, and that cozy Tuscan atmosphere with fog rolling through vineyards at dawn. The Biennale dell'Antiquariato (odd years) attracts international collectors to Palazzo Corsini. This is also when Florentines return from summer holidays, bringing the city back to authentic local life. November's Florence Marathon transforms the city as thousands run past Renaissance landmarks.",
    events: [
      'Festa della Rificolona lantern festival (Sept 7)',
      'Biennale Antiquariato (September, odd years)',
      'Wine harvest festivals throughout Tuscany',
      'Florence Marathon (last Sunday November)',
      'White truffle season begins',
    ],
    pros: [
      'Perfect mild weather for walking',
      'Harvest season - wine, chestnuts, mushrooms, truffles',
      'Fewer crowds than summer',
      'Beautiful autumn colors in gardens',
      'Lower hotel rates than summer',
    ],
    cons: [
      'Increasing rain especially November',
      'Some outdoor events wind down',
      'Days getting shorter',
      'Can be chilly mornings/evenings',
    ],
    tips: "September is ideal for perfect weather with fewer crowds. Book wine country tours for harvest experience. Pack layers and rain jacket for November. Restaurant reservations recommended as locals are back in town. Consider combining Florence with Tuscan countryside drives through changing vineyard colors.",
  },
  {
    season: 'Winter (December - February)',
    weather: '2-12°C (36-54°F)',
    crowds: 'Low to Moderate',
    bestFor: 'Museums without crowds, Christmas markets, authentic local experience',
    description: "Winter reveals a different Florence - quieter, more authentic, and refreshingly uncrowded. December brings Christmas magic with markets in Piazza Santa Croce selling artisan crafts and seasonal treats, nativity scenes displayed in churches, and festive lights illuminating Via de' Tornabuoni's luxury shops. The holiday atmosphere feels genuinely Italian rather than tourist-oriented, with locals shopping for gifts and families gathering for seasonal meals. New Year's Eve attracts crowds to Piazzale Michelangelo for fireworks, but nothing compared to summer hordes. January and February are Florence's quietest months with the fewest tourists but also coldest, dampest weather. However, this offers unique advantages: you can walk into the Uffizi or Accademia with minimal wait, restaurants accommodate walk-ins, and you'll experience Florence as Florentines do. Museums and churches feel peaceful, allowing contemplative art appreciation without jostling crowds. Winter also brings sales season (saldi) with steep discounts at designer boutiques on Via de' Tornabuoni. Indoor activities shine: cooking classes, wine tastings, museum deep-dives, and cozy trattorie serving hearty Tuscan winter dishes like ribollita soup and bistecca alla fiorentina. The light is softer, creating beautiful photography opportunities. Pack warm clothes, good walking shoes, and embrace the season.",
    events: [
      'Christmas markets (all December)',
      'New Year\'s Eve fireworks (December 31)',
      'Epiphany celebrations (January 6)',
      'Carnival celebrations (February)',
      'San Valentino (Valentine\'s Day, February 14)',
    ],
    pros: [
      'Lowest tourist crowds all year',
      'No lines at major attractions',
      'Lowest hotel and flight prices',
      'Authentic local experience',
      'Christmas markets and holiday atmosphere',
      'Hearty seasonal Tuscan cuisine',
    ],
    cons: [
      'Cold and often damp weather',
      'Short daylight hours (dark by 17:00)',
      'Some attractions have reduced hours',
      'Outdoor dining limited or closed',
      'Can be rainy',
    ],
    tips: "Book accommodation with heating (Guido Monaco has heating!). January-February offer lowest prices and smallest crowds - ideal for serious museum lovers. Layer clothing for cold mornings and indoor heating. Many restaurants close for holidays in late December/early January, so research ahead. Embrace cozy indoor activities - cooking classes, wine tastings, spa treatments.",
  },
]

export default function BestTimePage() {
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
            Best Time to Visit Florence
          </h1>
          <p className="text-xl mt-3 text-white opacity-95" style={{ fontFamily: 'Georgia, serif' }}>
            Complete seasonal guide for planning your perfect trip
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Intro */}
        <div className="bg-white rounded shadow-sm p-8 mb-8">
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            Florence is beautiful year-round, but each season offers distinct experiences. Your ideal time depends on 
            priorities: weather, crowds, events, prices, and the type of experience you seek. This guide helps you 
            choose the perfect season for your Florentine adventure.
          </p>
          <div className="mt-6 p-4 rounded" style={{ backgroundColor: '#f8f8f8' }}>
            <p style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold mb-2">Quick Answer:</p>
            <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
              <strong>April-May and September-October</strong> offer the best combination of pleasant weather, 
              manageable crowds, and cultural events. For lowest prices and smallest crowds, choose 
              <strong> January-February</strong>. Avoid <strong>July-August</strong> unless you love heat and crowds.
            </p>
          </div>
        </div>

        {/* Seasons */}
        <div className="space-y-8">
          {seasons.map((season, idx) => (
            <div key={idx} className="bg-white rounded shadow-sm p-8">
              <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-6">
                {season.season}
              </h2>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 rounded" style={{ backgroundColor: '#f8f8f8' }}>
                <div>
                  <p style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm mb-1">
                    Weather
                  </p>
                  <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base">
                    {season.weather}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm mb-1">
                    Crowds
                  </p>
                  <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base">
                    {season.crowds}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm mb-1">
                    Best For
                  </p>
                  <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base">
                    {season.bestFor}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base leading-relaxed mb-6">
                {season.description}
              </p>

              {/* Events */}
              <div className="mb-6">
                <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-xl font-normal mb-3">
                  Major Events
                </h3>
                <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2">
                  {season.events.map((event, eventIdx) => (
                    <li key={eventIdx} className="text-base">• {event}</li>
                  ))}
                </ul>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-xl font-normal mb-3">
                    Pros
                  </h3>
                  <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2">
                    {season.pros.map((pro, proIdx) => (
                      <li key={proIdx} className="text-base">✓ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-xl font-normal mb-3">
                    Cons
                  </h3>
                  <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-2">
                    {season.cons.map((con, conIdx) => (
                      <li key={conIdx} className="text-base">✗ {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tips */}
              <div className="p-4 rounded" style={{ backgroundColor: '#f8f8f8' }}>
                <p style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm mb-2">
                  💡 Insider Tips
                </p>
                <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base">
                  {season.tips}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="bg-white rounded shadow-sm p-8 mt-12">
          <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-6">
            General Tips for Any Season
          </h3>
          <ul style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="space-y-3 text-base">
            <li>• <strong>Book Guido Monaco early:</strong> Our apartment books months in advance during peak seasons</li>
            <li>• <strong>Museum tickets:</strong> Always pre-book Uffizi and Accademia, regardless of season</li>
            <li>• <strong>Dress code:</strong> Churches enforce covered shoulders/knees year-round - bring a scarf</li>
            <li>• <strong>Siesta time:</strong> Many shops close 13:00-15:30, plan accordingly</li>
            <li>• <strong>Monday closures:</strong> Major museums closed Mondays (Uffizi, Accademia, Pitti)</li>
            <li>• <strong>Stay central:</strong> Via Guido Monaco puts you 5 minutes from the station, walking distance to everything</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-white rounded shadow-sm p-8 mt-8">
          <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-4">
            Ready to Experience Florence?
          </h3>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="mb-4 text-lg leading-relaxed">
            Guido Monaco apartment offers comfort and convenience year-round with air conditioning for summer, 
            heating for winter, and a perfect location just 5 minutes from Santa Maria Novella station.
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
