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
