"use client";

import { Event, WithContext } from "schema-dts";

interface EventJsonLdProps {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  url: string;
  image?: string;
}

export function EventJsonLd({
  name,
  startDate,
  endDate,
  location,
  description,
  url,
  image = "https://ceid.center/images/logo.png",
}: EventJsonLdProps) {
  const eventData: WithContext<Event> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    startDate,
    endDate,
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Science City",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    description,
    url,
    image,
    organizer: {
      "@type": "Organization",
      name: "Center for Computational Epidemiology and Infectious Diseases",
      url: "https://ceid.center",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  );
}
