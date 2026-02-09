import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { blogPostSchema, faqSchema } from '@/lib/schema'
import Link from 'next/link'

// Extract FAQ from markdown content
function extractFAQs(content: string): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = []
  
  // Match FAQ sections with ### or **Q:** patterns
  const faqPattern = /(?:###\s+|^\*\*Q:\s*)([^\n]+)\n\n(?:A:\s*)?([^\n#]+(?:\n(?!###|\*\*Q:)[^\n]+)*)/gm
  
  let match
  while ((match = faqPattern.exec(content)) !== null) {
    const question = match[1].trim().replace(/\*\*/g, '').replace(/^Q:\s*/, '')
    const answer = match[2].trim().replace(/^A:\s*/, '')
    if (question && answer) {
      faqs.push({ question, answer })
    }
  }
  
  return faqs
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir)
  
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }))
}

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()
  
  return {
    data,
    contentHtml,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { data, contentHtml } = await getPost(params.slug)
  
  const schema = blogPostSchema({
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author || 'Guido Monaco Team',
    url: `https://florence-blog.vercel.app/blog/${params.slug}`,
  })
  
  // Extract FAQs from content for AI search optimization
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContent)
  const faqs = extractFAQs(content)
  const faqSchemaData = faqs.length > 0 ? faqSchema(faqs) : null
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F8F8' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        {faqSchemaData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchemaData),
            }}
          />
        )}
      </head>
      <header 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1691319683514-7f0ec295151f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
        className="text-white py-6"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" style={{ fontFamily: 'Georgia, serif' }} className="text-white hover:opacity-80 transition">
            ← Back to Home
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded shadow-sm p-8 md:p-12 prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <div className="bg-white rounded shadow-sm p-8 mt-8">
          <h3 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-4">
            Book Your Florence Stay
          </h3>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="mb-4 text-lg">
            Experience the comfort of Guido Monaco apartment - perfect location, 
            modern amenities, and a private terrace to enjoy your Florence mornings.
          </p>
          <a 
            href="https://www.homesinflorence.it/guido-monaco-florence"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#4d9a6e', fontFamily: 'Georgia, serif' }}
            className="inline-block text-white px-8 py-3 rounded font-normal hover:opacity-90 transition"
          >
            Check Availability & Rates
          </a>
        </div>
      </article>

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
