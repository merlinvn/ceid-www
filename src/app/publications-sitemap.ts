import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ceid.center';
  
  // This would typically come from your database or CMS
  const publications = [
    {
      slug: 'computational-modeling-infectious-disease',
      lastModified: new Date('2024-03-15'),
    },
    {
      slug: 'machine-learning-antimalarial-resistance',
      lastModified: new Date('2024-02-10'),
    },
    {
      slug: 'data-analytics-disease-prevention',
      lastModified: new Date('2024-01-20'),
    },
  ];
  
  const publicationUrls = publications.map(publication => {
    return {
      url: `${baseUrl}/publications/${publication.slug}`,
      lastModified: publication.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });
  
  return [
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...publicationUrls,
  ];
}
