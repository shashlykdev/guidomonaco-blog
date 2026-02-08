import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Users, FileText, Instagram } from 'lucide-react'

export default function Home() {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir)
  
  const posts = files.map((filename) => {
    const filePath = path.join(contentDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)
    
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      description: data.description,
      date: data.date,
    }
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F8F8' }}>
      <header 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1691319683514-7f0ec295151f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
        className="text-white py-16"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Image 
              src="/logo.png" 
              alt="Guido Monaco B&B" 
              width={300} 
              height={200} 
              className="mb-4"
              priority
            />
          </div>
          <p className="text-xl text-white opacity-95" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome to Your Florence Home
          </p>
          <nav className="mt-6 flex flex-wrap gap-6">
            <Link 
              href="/property"
              className="text-white hover:opacity-80 transition border-b-2 border-transparent hover:border-white pb-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              The Apartment
            </Link>
            <Link 
              href="/attractions"
              className="text-white hover:opacity-80 transition border-b-2 border-transparent hover:border-white pb-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Attractions
            </Link>
            <Link 
              href="/events"
              className="text-white hover:opacity-80 transition border-b-2 border-transparent hover:border-white pb-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Events
            </Link>
            <Link 
              href="/best-time"
              className="text-white hover:opacity-80 transition border-b-2 border-transparent hover:border-white pb-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Best Time to Visit
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Image Gallery */}
      <div className="container mx-auto px-4 max-w-5xl -mt-8">
        <div className="bg-white rounded shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src="/images/guido-monaco-01.jpg"
              alt="Guido Monaco Florence Apartment"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* About Section */}
        <div className="bg-white rounded shadow-sm p-8 mb-12">
          <h2 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-6">
            Your Florence Apartment
          </h2>
          
          {/* Address & Key Info */}
          <div className="mb-6 p-4 rounded" style={{ backgroundColor: '#F8F8F8' }}>
            <div className="grid md:grid-cols-2 gap-4" style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
              <div>
                <p className="mb-2 flex items-center gap-2">
                  <MapPin size={18} style={{ color: '#4d9a6e' }} />
                  <strong>Address:</strong>
                </p>
                <p className="ml-6">Via Guido Monaco<br />50144 Florence, Italy</p>
              </div>
              <div>
                <p className="mb-2 flex items-center gap-2">
                  <Star size={18} style={{ color: '#4d9a6e' }} className="fill-current" />
                  <strong>Rating:</strong> 9.0/10 Wonderful (21 reviews)
                </p>
                <p className="mb-2 flex items-center gap-2">
                  <Users size={18} style={{ color: '#4d9a6e' }} />
                  <strong>Capacity:</strong> Up to 3 guests
                </p>
                <p className="mb-2 flex items-center gap-2">
                  <FileText size={18} style={{ color: '#4d9a6e' }} />
                  <strong>License:</strong> IT048017C2C2WZ8T9D
                </p>
              </div>
            </div>
          </div>

          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            Welcome to this comfortable apartment located in Florence, on Via Guido Monaco. 
            The property is located on the second floor of a modern building with a lift, just 5 minutes walk from Santa Maria Novella Central Station.
          </p>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            As soon as you enter, you will be greeted by a bright, modern and well-equipped kitchen/living room. 
            The double bedroom awaits you with its welcoming comfort, and the private terrace is perfect for morning coffee or evening wine.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/property"
              style={{ backgroundColor: '#4d9a6e', fontFamily: 'Georgia, serif' }}
              className="inline-block text-white px-8 py-3 rounded font-normal hover:opacity-90 transition"
            >
              View Full Details & Map
            </Link>
            <a 
              href="https://www.homesinflorence.it/guido-monaco-florence"
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: '#4d9a6e', color: '#4d9a6e', fontFamily: 'Georgia, serif' }}
              className="inline-block border-2 px-8 py-3 rounded font-normal hover:opacity-90 transition"
            >
              Check Availability & Book
            </a>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="bg-white rounded shadow-sm p-8">
          <h2 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-8">
            Florence Travel Guides
          </h2>
          
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b pb-8 last:border-b-0">
                <Link href={`/blog/${post.slug}`}>
                  <h3 
                    style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }}
                    className="text-2xl font-normal hover:opacity-80 transition"
                  >
                    {post.title}
                  </h3>
                </Link>
                <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="mt-3 text-lg">
                  {post.description}
                </p>
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug}`}
                    style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }}
                    className="hover:opacity-80 transition font-normal"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Property Highlights */}
        <div className="bg-white rounded shadow-sm p-8 mt-12">
          <h3 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-6">
            Why Choose This Apartment
          </h3>
          <ul className="space-y-3" style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
            <li className="text-lg">✓ Up to 3 guests</li>
            <li className="text-lg">✓ Air conditioning</li>
            <li className="text-lg">✓ Private terrace</li>
            <li className="text-lg">✓ 5 minutes from Santa Maria Novella Station</li>
            <li className="text-lg">✓ Walking distance to Fortezza da Basso</li>
            <li className="text-lg">✓ Modern kitchen & bathroom</li>
            <li className="text-lg">✓ WiFi, washing machine, dishwasher, TV</li>
          </ul>
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
              className="hover:opacity-75 inline-flex items-center gap-2"
            >
              <Instagram size={18} />
              Follow us on Instagram
            </a>
          </p>
          <p className="mt-2 text-sm opacity-75" style={{ fontFamily: 'Georgia, serif' }}>
            IT048017C2C2WZ8T9D
          </p>
        </div>
      </footer>
    </div>
  )
}
