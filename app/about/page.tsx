import { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Guido Monaco Florence - Your Florence Apartment Near Central Station',
  description: 'Learn about Guido Monaco B&B, a premium Florence apartment rental managed by Homes in Florence. Located 2 minutes from Santa Maria Novella station with 9.0/10 guest rating.',
  openGraph: {
    title: 'About Guido Monaco Florence',
    description: 'Premium Florence apartment near Central Station - 9.0/10 rating',
  },
}

const aboutFAQs = [
  {
    question: 'Where exactly is Guido Monaco B&B located?',
    answer: 'Guido Monaco is located at Via Guido Monaco in Florence, Italy, just 2 minutes walking distance (150 meters) from Santa Maria Novella Central Station. The exact postal code is 50129 Florence, Tuscany.',
  },
  {
    question: 'How far is Guido Monaco from Florence attractions?',
    answer: 'The apartment is 5 minutes walk to Santa Maria Novella Basilica, 12 minutes to the Duomo, 15 minutes to Ponte Vecchio, and 18 minutes to the Uffizi Gallery. Everything in Florence historic center is within walking distance.',
  },
  {
    question: 'What amenities does Guido Monaco B&B include?',
    answer: 'The apartment includes air conditioning, WiFi, private terrace, full kitchen with dishwasher, washing machine, TV, elevator access, and accommodates up to 3 guests with one queen bed and a sofa bed.',
  },
  {
    question: 'What is the guest rating for Guido Monaco?',
    answer: 'Guido Monaco has a 9.0/10 rating on Booking.com based on 21 reviews, with particularly high scores for comfort (9.5/10), staff (9.2/10), and location (9.0/10).',
  },
  {
    question: 'Who manages Guido Monaco B&B?',
    answer: 'Guido Monaco is professionally managed by Homes in Florence (homesinflorence.it), a licensed property management company specializing in short-term rentals in Florence.',
  },
  {
    question: 'How much does it cost to stay at Guido Monaco?',
    answer: 'Rates vary by season and length of stay, typically ranging from €80-150 per night. Check current availability and pricing on Booking.com (booking.com/Share-3c371d) or Homes in Florence website.',
  },
  {
    question: 'Is Guido Monaco good for first-time Florence visitors?',
    answer: 'Yes, absolutely. The location near the train station makes arrival easy, and all major attractions are within walking distance. The apartment provides a comfortable home base for exploring Florence.',
  },
  {
    question: 'Can I walk to restaurants and shops from Guido Monaco?',
    answer: 'Yes. The apartment is surrounded by authentic Florentine restaurants, cafes, supermarkets, and the San Lorenzo market. You do not need a car or public transport to enjoy Florence.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(aboutFAQs)),
        }}
      />
      
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#4d9a6e]">
              Guido Monaco Florence
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-[#4d9a6e] transition-colors">Home</Link>
              <Link href="/property" className="hover:text-[#4d9a6e] transition-colors">Property</Link>
              <Link href="/blog" className="hover:text-[#4d9a6e] transition-colors">Blog</Link>
              <Link href="/about" className="text-[#4d9a6e] font-semibold">About</Link>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-[#4d9a6e] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Guido Monaco Florence
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your premium Florence apartment, 2 minutes from Central Station.
              Professionally managed, highly rated, perfectly located.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Quick Facts */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Quick Facts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Location</h3>
                <p className="text-neutral-700">Via Guido Monaco, 50129 Florence, Italy</p>
                <p className="text-neutral-600 text-sm mt-1">2 min walk to Santa Maria Novella Station</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Guest Rating</h3>
                <p className="text-neutral-700">9.0/10 on Booking.com (21 reviews)</p>
                <p className="text-neutral-600 text-sm mt-1">Comfort: 9.5/10 • Location: 9.0/10</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Property Type</h3>
                <p className="text-neutral-700">Modern 55m² apartment</p>
                <p className="text-neutral-600 text-sm mt-1">Sleeps 3 • Private terrace • A/C</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Management</h3>
                <p className="text-neutral-700">Homes in Florence</p>
                <p className="text-neutral-600 text-sm mt-1">Licensed property management</p>
              </div>
            </div>
          </section>

          {/* The Story */}
          <section className="prose prose-lg max-w-none mb-12">
            <h2>The Story Behind Guido Monaco</h2>
            <p>
              Guido Monaco isn't just another Florence apartment rental. It's the result of understanding 
              what travelers actually need: a comfortable, well-located base that doesn't require a 
              30-minute commute to reach anything interesting.
            </p>
            <p>
              The apartment sits in Florence's most practical neighborhood—close enough to walk to the 
              Duomo in 12 minutes, but far enough from the tourist chaos that you can actually sleep at night. 
              It's where the train station meets authentic Florence, where visitors discover that staying 
              near Santa Maria Novella means living like a local.
            </p>
            <p>
              Named after the street it calls home, Via Guido Monaco (after the 11th-century music theorist 
              who invented modern musical notation), the apartment reflects the area's mix of history and 
              practicality. You're two minutes from arriving by train, five minutes from a 13th-century basilica, 
              and ten minutes from authentic Florentine restaurants that tourists never find.
            </p>
          </section>

          {/* Why This Location */}
          <section className="bg-neutral-100 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Why This Location Works</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">📍 Arrival is Easy</h3>
                <p className="text-neutral-700">
                  Step off the train at Santa Maria Novella, walk 2 minutes, you're home. No taxis, 
                  no buses, no dragging luggage through crowds.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">🚶 Everything is Walkable</h3>
                <p className="text-neutral-700">
                  Duomo (12 min), Uffizi (18 min), Ponte Vecchio (15 min), Accademia (15 min). 
                  You won't need a car, taxi, or even a bus pass.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">🍝 Local Neighborhood</h3>
                <p className="text-neutral-700">
                  Real trattorias, neighborhood cafes, the San Lorenzo market. This is where Florentines 
                  actually live and eat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">😴 Quiet at Night</h3>
                <p className="text-neutral-700">
                  Unlike the historic center, this area quiets down after dinner. You'll actually sleep.
                </p>
              </div>
            </div>
          </section>

          {/* Property Management */}
          <section className="prose prose-lg max-w-none mb-12">
            <h2>Professional Management by Homes in Florence</h2>
            <p>
              Guido Monaco is managed by <a href="https://www.homesinflorence.it" target="_blank" rel="noopener noreferrer" className="text-[#4d9a6e] hover:underline">Homes in Florence</a>, 
              a licensed property management company specializing in short-term rentals throughout Florence.
            </p>
            <p>
              This means you get professional check-in, responsive support, and the kind of service that 
              comes from a company that manages properties full-time. Not a side hustle, not an amateur 
              operation—actual professionals who know Florence and hospitality.
            </p>
            <p>
              <strong>License:</strong> IT048017C2C2WZ8T9D<br />
              <strong>Contact:</strong> info@homesinflorence.it
            </p>
          </section>

          {/* Guest Reviews Summary */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">What Guests Say</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#4d9a6e] pl-6">
                <p className="text-neutral-700 mb-2">
                  "Spacious, well-equipped, and the location is unbeatable. We walked everywhere."
                </p>
                <p className="text-neutral-500 text-sm">— Martin, October 2025</p>
              </div>
              <div className="border-l-4 border-[#4d9a6e] pl-6">
                <p className="text-neutral-700 mb-2">
                  "Perfect for our family. The terrace was lovely for morning coffee."
                </p>
                <p className="text-neutral-500 text-sm">— Eva, September 2025</p>
              </div>
              <div className="border-l-4 border-[#4d9a6e] pl-6">
                <p className="text-neutral-700 mb-2">
                  "Two minutes from the train station made arrival and departure so easy."
                </p>
                <p className="text-neutral-500 text-sm">— Booking.com guest, November 2025</p>
              </div>
            </div>
            <p className="text-neutral-600 text-sm mt-6">
              <strong>Overall Rating:</strong> 9.0/10 based on 21 reviews • 
              <a href="https://www.booking.com/Share-3c371d" target="_blank" rel="noopener noreferrer" className="text-[#4d9a6e] hover:underline ml-1">
                View all reviews on Booking.com
              </a>
            </p>
          </section>

          {/* Frequently Asked Questions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {aboutFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                  <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact & Booking */}
          <section className="bg-[#4d9a6e] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Check availability and rates on Booking.com or contact Homes in Florence directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.booking.com/Share-3c371d"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#4d9a6e] px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
              >
                Book on Booking.com
              </a>
              <a
                href="https://www.homesinflorence.it/guido-monaco-florence"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4d9a6e] transition-colors"
              >
                View on Homes in Florence
              </a>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="bg-neutral-900 text-white py-12 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Guido Monaco Florence</h3>
                <p className="text-neutral-400 text-sm">
                  Premium Florence apartment near Santa Maria Novella Central Station.
                  Managed by Homes in Florence.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/property" className="text-neutral-400 hover:text-white transition-colors">Property</Link></li>
                  <li><Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>Homes in Florence</li>
                  <li>info@homesinflorence.it</li>
                  <li>License: IT048017C2C2WZ8T9D</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
              <p>&copy; 2026 Guido Monaco Florence. Managed by Homes in Florence. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
