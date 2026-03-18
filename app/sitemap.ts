import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.upgraderoofs.co.uk'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/all-services',
    '/service-areas',
    '/special-offer',
    '/gallery',
    '/blog',
    '/reviews',
    '/contact',
    '/case-studies',
    '/sitemap-page',
    '/privacy',
    '/terms',
  ]

  // Service pages
  const servicePages = [
    '/services/tile-slate-roofing',
    '/services/flat-roofing',
    '/services/chimney-repairs',
    '/services/gutters-fascias',
    '/services/skylights-roof-windows',
    '/services/cladding',
  ]

  // SEO area pages (highest priority for local SEO rankings)
  const areaPages = [
    '/roofers-sandbach',
    '/roofers-crewe',
    '/roofers-middlewich',
    '/roofers-congleton',
    '/roofers-nantwich',
    '/roofers-alsager',
    '/roofers-holmes-chapel',
  ]

  // Location offer pages (conversion-focused)
  const offerPages = [
    '/offer-sandbach',
    '/offer-crewe',
    '/offer-middlewich',
    '/offer-congleton',
    '/offer-alsager',
    '/offer-nantwich',
    '/offer-holmes-chapel',
    '/offer-cheshire',
  ]

  // Blog pages
  const blogPages = [
    '/blog/roof-damage-signs',
    '/blog/flat-vs-tile-roofs',
    '/blog/emergency-roof-repairs',
    '/blog/roof-maintenance-checklist',
    '/blog/how-long-does-roof-last',
    '/blog/gutter-maintenance-guide',
    '/blog/chimney-repair-guide',
    '/blog/choosing-roofing-contractor',
    '/blog/skylight-installation-guide',
    '/blog/flat-roof-problems',
  ]

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...areaPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '/roofers-sandbach' ? 1 : 0.9,
    })),
    ...offerPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...blogPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
