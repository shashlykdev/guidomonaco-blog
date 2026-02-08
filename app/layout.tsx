import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guido Monaco Florence - Your Perfect Florence Apartment Near Central Station',
  description: 'Modern Florence apartment with private terrace, 5 minutes from Santa Maria Novella station. Walking distance to Duomo, Uffizi, and all major attractions. 9.0/10 rating.',
  keywords: 'Florence apartment, Florence accommodation, apartment near Florence station, Santa Maria Novella, Florence rental, Florence vacation rental',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
