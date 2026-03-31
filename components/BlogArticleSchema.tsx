interface BlogArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}

export function BlogArticleSchema({ title, description, url, datePublished, image }: BlogArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: 'Upgrade Roofs',
      url: 'https://www.upgraderoofs.co.uk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Upgrade Roofs',
      url: 'https://www.upgraderoofs.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.upgraderoofs.co.uk/images/logo.png',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(image ? { image: `https://www.upgraderoofs.co.uk${image}` } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
