export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Marsa Alam Local Guide',
    image: 'https://marsa-alam-local-guide-six.vercel.app/og-image.jpg',
    '@id': 'https://marsa-alam-local-guide-six.vercel.app',
    url: 'https://marsa-alam-local-guide-six.vercel.app',
    telephone: '+201080268114',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marsa Alam',
      addressRegion: 'Red Sea',
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.0742,
      longitude: 34.8884,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
    priceRange: '$$',
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}