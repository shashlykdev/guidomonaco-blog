import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { blogPostSchema } from '@/lib/schema'

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
  
  return (
    <div className="min-h-screen bg-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <a href="/" className="text-white hover:underline">← Back to Home</a>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-8 bg-orange-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Book Your Florence Stay</h3>
          <p className="mb-4">
            Experience the comfort of Guido Monaco apartment - perfect location, 
            modern amenities, and a private terrace to enjoy your Florence mornings.
          </p>
          <a 
            href="https://www.homesinflorence.it/guido-monaco-florence"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700"
          >
            Check Availability & Rates
          </a>
        </div>
      </article>

      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2026 Guido Monaco Florence. Managed by Homes in Florence.</p>
        </div>
      </footer>
    </div>
  )
}
