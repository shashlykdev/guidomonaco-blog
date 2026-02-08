import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
      <header style={{ backgroundColor: '#ae9a64' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl font-normal text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Guido Monaco
          </h1>
          <p className="text-xl mt-3 text-white opacity-95" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome to Your Florence Home
          </p>
          <nav className="mt-6 flex gap-6">
            <Link 
              href="/attractions"
              className="text-white hover:opacity-80 transition border-b-2 border-transparent hover:border-white pb-1"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Florence Attractions
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
          <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-6">
            Your Florence Apartment
          </h2>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            Welcome to this comfortable apartment located in Florence, on Via Guido Monaco. 
            The property is located on the second floor of a modern building with a lift.
          </p>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            As soon as you enter, you will be greeted by a bright, modern and well-equipped kitchen/living room. 
            The double bedroom awaits you with its welcoming comfort, ready to lull you into a restful sleep after a day of discoveries.
          </p>
          <div className="mt-6">
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
        </div>

        {/* Blog Posts */}
        <div className="bg-white rounded shadow-sm p-8">
          <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-8">
            Florence Travel Guides
          </h2>
          
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b pb-8 last:border-b-0">
                <Link href={`/blog/${post.slug}`}>
                  <h3 
                    style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }}
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
                    style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }}
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
          <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-6">
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
          <p className="mt-2 text-sm opacity-75" style={{ fontFamily: 'Georgia, serif' }}>
            IT048017C2C2WZ8T9D
          </p>
        </div>
      </footer>
    </div>
  )
}
