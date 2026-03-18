import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.upgraderoofs.co.uk'

  // Money service pages (high-intent ranking pages)
  const moneyServicePages = [
    '/roof-repairs',
    '/new-roofs',
    '/emergency-roofing',
  ]

  // Core service pages (topical support)
  const coreServicePages = [
    '/services/tile-slate-roofing',
    '/services/flat-roofing',
    '/services/chimney-repairs',
    '/services/gutters-fascias',
    '/services/skylights-roof-windows',
    '/services/cladding',
  ]

  // SEO area pages (local ranking pages)
  const areaPages = [
    '/roofers-sandbach',
    '/roofers-crewe',
    '/roofers-middlewich',
    '/roofers-congleton',
    '/roofers-nantwich',
    '/roofers-alsager',
    '/roofers-holmes-chapel',
  ]

  // Support/trust pages
  const supportPages = [
    '/about',
    '/services',
    '/service-areas',
    '/gallery',
    '/blog',
    '/reviews',
    '/contact',
    '/case-studies',
    '/sitemap-page',
  ]

  // Conversion pages
  const conversionPages = [
    '/special-offer',
    '/offer-sandbach',
  ]

  // Utility pages
  const utilityPages = [
    '/privacy',
    '/terms',
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
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // Sandbach money page - highest priority
    {
      url: `${baseUrl}/roofers-sandbach`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // Money service pages - very high priority
    ...moneyServicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // Core service pages - high priority
    ...coreServicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Other area pages - high priority
    ...areaPages.filter(p => p !== '/roofers-sandbach').map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Support pages - medium priority
    ...supportPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Blog pages - medium-low priority, realistic update frequency
    ...blogPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    // Conversion pages - medium-low priority
    ...conversionPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    // Utility pages - low priority
    ...utilityPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
