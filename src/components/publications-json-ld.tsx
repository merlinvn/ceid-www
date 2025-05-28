"use client";

import { Article, WithContext } from "schema-dts";

export function PublicationsJsonLd() {
  const publicationsData: WithContext<Article>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Computational Modeling of Infectious Disease Spread",
      author: {
        "@type": "Organization",
        name: "Center for Computational Epidemiology and Infectious Diseases"
      },
      publisher: {
        "@type": "Organization",
        name: "Center for Computational Epidemiology and Infectious Diseases",
        logo: {
          "@type": "ImageObject",
          url: "https://ceid.center/images/logo.png"
        }
      },
      datePublished: "2024-03-15",
      description: "A comprehensive study on computational modeling techniques for infectious disease spread prediction",
      keywords: "computational modeling, infectious disease, epidemiology"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Machine Learning Applications in Antimalarial Drug Resistance",
      author: {
        "@type": "Organization",
        name: "Center for Computational Epidemiology and Infectious Diseases"
      },
      publisher: {
        "@type": "Organization",
        name: "Center for Computational Epidemiology and Infectious Diseases",
        logo: {
          "@type": "ImageObject",
          url: "https://ceid.center/images/logo.png"
        }
      },
      datePublished: "2024-02-10",
      description: "Research on machine learning approaches to predict and combat antimalarial drug resistance",
      keywords: "machine learning, antimalarial, drug resistance"
    }
  ];

  return (
    <>
      {publicationsData.map((publication, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(publication) }}
        />
      ))}
    </>
  );
}
