"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

export function CanonicalUrl() {
  const pathname = usePathname();
  const baseUrl = "https://ceid.org";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
