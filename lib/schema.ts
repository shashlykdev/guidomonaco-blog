export const accommodationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Accommodation',
  name: 'Guido Monaco Florence Apartment',
  description: 'Modern 55m² apartment in Florence near Santa Maria Novella Central Station. Private terrace, air conditioning, WiFi. Walking distance to Duomo, Uffizi, and all major attractions.',
  url: 'https://www.homesinflorence.it/guido-monaco-florence',
  image: [
    'https://cdn.krbo.eu/homesinflorence/images/2/803/17153378201361.jpg',
    'https://cdn.krbo.eu/homesinflorence/images/2/803/17153378123936.jpg',
    'https://cdn.krbo.eu/homesinflorence/images/2/803/17153378146575.jpg',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Guido Monaco',
    addressLocality: 'Florence',
    addressRegion: 'Tuscany',
    postalCode: '50129',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '43.7832',
    longitude: '11.2486',
  },
  telephone: '+39-xxx-xxx-xxxx',
  email: 'info@homesinflorence.it',
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Air conditioning',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'WiFi',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Private terrace',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Kitchen',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Washing machine',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Dishwasher',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Elevator',
      value: true,
    },
  ],
  numberOfRooms: 1,
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 55,
    unitCode: 'MTK',
  },
  occupancy: {
    '@type': 'QuantitativeValue',
    minValue: 1,
    maxValue: 3,
  },
  checkinTime: '14:00',
  checkoutTime: '10:00',
  petsAllowed: false,
  smokingAllowed: false,
  starRating: {
    '@type': 'Rating',
    ratingValue: '4',
  },
  brand: {
    '@type': 'Brand',
    name: 'Homes in Florence',
  },
}

export const blogPostSchema = (article: {
  title: string
  description: string
  date: string
  author: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.description,
  datePublished: article.date,
  dateModified: article.date,
  author: {
    '@type': 'Organization',
    name: article.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Guido Monaco Florence',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.homesinflorence.it/images/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
})

// FAQ Schema for AI search optimization
export const faqSchema = (questions: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map(q => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer,
    },
  })),
})

// HowTo Schema for step-by-step guides
export const howToSchema = (guide: {
  name: string
  description: string
  totalTime?: string
  estimatedCost?: string
  steps: Array<{ name: string; text: string; image?: string }>
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: guide.name,
  description: guide.description,
  totalTime: guide.totalTime,
  estimatedCost: guide.estimatedCost && {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: guide.estimatedCost,
  },
  step: guide.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image,
  })),
})

// LocalBusiness Schema for AI understanding of the business
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://florence-blog.vercel.app/#business',
  name: 'Guido Monaco B&B',
  alternateName: 'Guido Monaco Florence',
  description: 'Premium Florence apartment rental near Santa Maria Novella Central Station. Modern 55m² accommodation with private terrace, perfect for 1-3 guests exploring Florence.',
  url: 'https://florence-blog.vercel.app',
  telephone: '+39-055-xxx-xxxx',
  email: 'info@homesinflorence.it',
  image: [
    'https://cdn.krbo.eu/homesinflorence/images/2/803/17153378201361.jpg',
    'https://cdn.krbo.eu/homesinflorence/images/2/803/17153378123936.jpg',
  ],
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Guido Monaco',
    addressLocality: 'Florence',
    addressRegion: 'Tuscany',
    postalCode: '50129',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.7832,
    longitude: 11.2486,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.booking.com/Share-3c371d',
    'https://www.homesinflorence.it/guido-monaco-florence',
    'https://twitter.com/guidomonacobnb',
    'https://instagram.com/guidomonacobnb',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.0',
    bestRating: '10',
    worstRating: '1',
    ratingCount: '21',
  },
  amenityFeature: [
    'WiFi',
    'Air Conditioning',
    'Private Terrace',
    'Full Kitchen',
    'Washing Machine',
    'Dishwasher',
    'Elevator Access',
    'Near Train Station',
  ],
}
