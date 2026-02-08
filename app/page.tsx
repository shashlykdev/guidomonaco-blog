import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

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
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Guido Monaco Florence</h1>
          <p className="text-xl mt-2">Your Perfect Florence Experience Starts Here</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Florence Travel Guides</h2>
          
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b pb-8">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold text-orange-600 hover:text-orange-700">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 p-8 bg-orange-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="mb-4">
              Stay at Guido Monaco: modern Florence apartment with private terrace, 
              5 minutes from Santa Maria Novella station.
            </p>
            <a 
              href="https://www.homesinflorence.it/guido-monaco-florence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700"
            >
              Check Availability
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2026 Guido Monaco Florence. Managed by Homes in Florence.</p>
          <p className="mt-2">
            <a href="https://www.instagram.com/guidomonacobnb" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
