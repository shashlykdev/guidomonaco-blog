import type { Metadata } from 'next'
import './globals.css'
import { accommodationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Guido Monaco Florence - Your Perfect Florence Apartment Near Central Station',
  description: 'Modern Florence apartment with private terrace, 5 minutes from Santa Maria Novella station. Walking distance to Duomo, Uffizi, and all major attractions. 9.0/10 rating.',
  keywords: 'Florence apartment, Florence accommodation, apartment near Florence station, Santa Maria Novella, Florence rental, Florence vacation rental',
  metadataBase: new URL('https://florence-blog.vercel.app'),
  openGraph: {
    title: 'Guido Monaco Florence - Your Perfect Florence Apartment',
    description: 'Modern Florence apartment with private terrace near Central Station',
    url: 'https://florence-blog.vercel.app',
    siteName: 'Guido Monaco Florence',
    images: [
      {
        url: 'https://cdn.krbo.eu/homesinflorence/images/2/803/17153378201361.jpg',
        width: 800,
        height: 397,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guido Monaco Florence - Your Perfect Florence Apartment',
    description: 'Modern Florence apartment with private terrace near Central Station',
    images: ['https://cdn.krbo.eu/homesinflorence/images/2/803/17153378201361.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(accommodationSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
