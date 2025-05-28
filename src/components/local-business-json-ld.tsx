"use client";

import { Organization, WithContext } from "schema-dts";

export function LocalBusinessJsonLd() {
  const localBusinessData: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Center for Computational Epidemiology and Infectious Diseases",
    alternateName: "CEID",
    url: "https://ceid.center",
    logo: "https://ceid.center/images/logo.png",
    image: "https://ceid.center/images/home_hero.jpg",
    telephone: "+1-555-555-5555",
    email: "nguyentd@ceid.center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "386/14 Le Van Sy, District 3",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh City",
      postalCode: "70000",
      addressCountry: "Vietnam"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194"
    },
    openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
    sameAs: [
      "https://twitter.com/CEID_org",
      "https://www.linkedin.com/company/center-for-computational-epidemiology"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}
