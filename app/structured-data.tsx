export function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RoofingContractor', 'HomeAndConstructionBusiness'],
    name: 'Upgrade Roofing Solutions',
    alternateName: 'Upgrade Roofing',
    image: [
      'https://upgraderoof.co.uk/images/6.jpeg',
      'https://upgraderoof.co.uk/images/2.jpeg'
    ],
    '@id': 'https://upgraderoof.co.uk/#organization',
    url: 'https://upgraderoof.co.uk',
    telephone: '01270 897606',
    alternativeTelephone: '07379 440583',
    email: 'upgradehomeimp@yahoo.com',
    priceRange: '££-£££',
    description: 'Professional roofing company serving Cheshire and Staffordshire with 25+ years experience. Specializing in roof repairs, installations, flat roofing, tile roofs, guttering, and emergency roofing services.',
    foundingDate: '1999',
    slogan: 'Your Trusted Roofing Specialists in Cheshire & Staffordshire',
    knowsAbout: [
      'Roof Repairs',
      'Roof Installation', 
      'Flat Roofing',
      'Tile Roofing',
      'Slate Roofing', 
      'Guttering',
      'Fascia Installation',
      'Skylight Installation',
      'Cladding',
      'Emergency Roofing',
      'Storm Damage Repairs',
      'Roof Maintenance',
      'Commercial Roofing'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Hutchins Close',
      addressLocality: 'Middlewich',
      addressRegion: 'Cheshire',
      postalCode: 'CW10 0EX',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.0273,
      longitude: -2.1813
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/upgraderoofingsolutions',
      'https://www.instagram.com/upgraderoofingsolutions',
      'https://share.google/FMxRgYIO71KPR4QR3'
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Sandbach',
        sameAs: 'https://en.wikipedia.org/wiki/Sandbach'
      },
      {
        '@type': 'City', 
        name: 'Crewe'
      },
      {
        '@type': 'City',
        name: 'Congleton'
      },
      {
        '@type': 'City',
        name: 'Nantwich'
      },
      {
        '@type': 'City',
        name: 'Middlewich'
      },
      {
        '@type': 'City',
        name: 'Alsager'
      },
      {
        '@type': 'City',
        name: 'Holmes Chapel'
      },
      {
        '@type': 'State',
        name: 'Cheshire',
        sameAs: 'https://en.wikipedia.org/wiki/Cheshire'
      },
      {
        '@type': 'State',
        name: 'Staffordshire',
        sameAs: 'https://en.wikipedia.org/wiki/Staffordshire'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 53.0273,
        longitude: -2.1813
      },
      geoRadius: '25000'
    },
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Cheque'],
    currenciesAccepted: 'GBP',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Federation of Roofing Contractors'
        }
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tile & Slate Roofing',
            description: 'Expert installation and repair of traditional tile and slate roofing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Flat Roofing',
            description: 'Modern flat roofing solutions with superior waterproofing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chimney Repairs',
            description: 'Professional chimney maintenance and repair services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gutters & Fascias',
            description: 'Complete gutter and fascia installation, repair, and maintenance'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Skylights & Roof Windows',
            description: 'Professional skylight and roof window installation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cladding Installations',
            description: 'Modern cladding solutions for residential and commercial properties'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '127'
    }
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://upgraderoof.co.uk/#website',
    url: 'https://upgraderoof.co.uk',
    name: 'Upgrade Roofing Solutions',
    publisher: {
      '@id': 'https://upgraderoof.co.uk/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://upgraderoof.co.uk/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://upgraderoof.co.uk'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://upgraderoof.co.uk/about'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Services',
        item: 'https://upgraderoof.co.uk/services'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Gallery',
        item: 'https://upgraderoof.co.uk/gallery'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Blog',
        item: 'https://upgraderoof.co.uk/blog'
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: 'https://upgraderoof.co.uk/contact'
      }
    ]
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a new roof cost in Cheshire?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Roof costs vary depending on size, materials, and complexity. A typical terraced house roof replacement ranges from £5,000-£8,000, while larger detached properties can cost £8,000-£15,000+. We provide free, detailed quotes with no hidden costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does a roof replacement take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most residential roof replacements take 3-7 days depending on size and weather. Smaller repairs can often be completed in 1-2 days. We provide a detailed timeline during your free consultation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer emergency roofing services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide 24/7 emergency roofing services throughout Cheshire. Call 07379 440583 for immediate assistance with leaks, storm damage, or urgent repairs.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas of Cheshire do you cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cover all of Cheshire including Sandbach, Crewe, Congleton, Nantwich, Middlewich, Alsager, Holmes Chapel, and surrounding areas throughout the North West.'
        }
      },
      {
        '@type': 'Question',
        name: 'What warranty do you offer on roofing work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide a comprehensive 10-year guarantee on all workmanship, backed by manufacturer warranties on materials. All work is fully insured with £10M public liability coverage.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}