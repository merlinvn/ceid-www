"use client";

import { BreadcrumbList, WithContext } from "schema-dts";
import { usePathname } from "next/navigation";

export function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  
  const breadcrumbItems = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Home",
      item: "https://ceid.org"
    }
  ];
  
  let currentPath = "";
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      "@type": "ListItem" as const,
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      item: `https://ceid.org${currentPath}`
    });
  });
  
  const breadcrumbData: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
