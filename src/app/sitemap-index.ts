import type { MetadataRoute } from 'next';

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ceid.center/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://ceid.center/publications-sitemap.xml',
      lastModified: new Date(),
    },
  ];
}
