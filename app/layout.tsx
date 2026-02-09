import type { Metadata } from 'next'
import Script from 'next/script'
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
        <meta name="google-site-verification" content="lFyN_uXWzydo2859Mft1cwDhOz8XW484JTfjr65yrw8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(accommodationSchema),
          }}
        />
      </head>
      <body>
        {/* Usercentrics Consent Management Platform V3 */}
        <Script
          id="usercentrics-cmp"
          src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
          data-settings-id="cg-D9sMk9tln4G"
          strategy="beforeInteractive"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-16HVWQQ3F7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-16HVWQQ3F7');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
