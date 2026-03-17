import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://upgraderoofs.co.uk'

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

  // Location offer pages (high priority for local SEO)
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
      priority: page === '' ? 1 : 0.9,
    })),
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...offerPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...blogPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
