"use client";

import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

export function SEOHead({
  canonicalUrl = "https://ceid.center",
}: SEOHeadProps) {
  return (
    <Head>
      {/* Performance optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Resource hints */}
      <link rel="dns-prefetch" href="https://ceid.center" />
      <link rel="preload" href="/images/logo.png" as="image" />
      
      {/* Mobile optimizations */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* SEO verification tags */}
      <meta name="google-site-verification" content="your-verification-code" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
