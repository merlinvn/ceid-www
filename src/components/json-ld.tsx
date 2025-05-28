"use client";

import { WebSite, WithContext } from "schema-dts";

export function OrganizationJsonLd() {
  // Using a type assertion to allow custom organization types
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Limited Liability Company",
    name: "Center for Computational Epidemiology and Infectious Diseases",
    alternateName: "CEID",
    url: "https://ceid.center",
    logo: "https://ceid.center/images/logo.png",
    sameAs: [
      "https://twitter.com/CEID_org",
      "https://www.linkedin.com/company/center-for-computational-epidemiology"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-914700402",
      contactType: "customer service",
      email: "nguyentd@ceid.center",
      availableLanguage: "English"
    },
    description: "The Center for Computational Epidemiology and Infectious Diseases (CEID) leverages advanced computational methods to combat infectious diseases globally."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

// Extended type to include the query-input property
type ExtendedSearchAction = {
  "@type": "SearchAction";
  target: {
    "@type": "EntryPoint";
    urlTemplate: string;
  };
  "query-input": string;
};

export function WebsiteJsonLd() {
  // Create the search action separately with the extended type
  const searchAction: ExtendedSearchAction = {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://ceid.center/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  };

  // Define a custom type that extends WebSite to include potentialAction
  type ExtendedWebSite = WebSite & {
    potentialAction?: ExtendedSearchAction;
  };

  const websiteData: WithContext<ExtendedWebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Center for Computational Epidemiology and Infectious Diseases",
    url: "https://ceid.center",
    potentialAction: searchAction
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}
