import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/json-ld";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ceid.center'),
  title: "CEID - Center for Computational Epidemiology and Infectious Diseases",
  description:
    "The Center for Computational Epidemiology and Infectious Diseases (CCEID) leverages advanced computational methods to combat infectious diseases globally. Our research drives innovations in epidemiology, including computational modeling, big data analytics, and machine learning, to predict disease spread and improve health outcomes.",
  keywords: ["computational epidemiology", "infectious diseases", "disease modeling", "epidemiology research", "public health", "data analytics", "machine learning", "antimalarial drug resistance"],
  authors: [{ name: "CEID" }],
  creator: "Center for Computational Epidemiology and Infectious Diseases",
  publisher: "Center for Computational Epidemiology and Infectious Diseases",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ceid.center",
    title: "CEID - Center for Computational Epidemiology and Infectious Diseases",
    description: "Advanced computational methods to combat infectious diseases globally",
    siteName: "Center for Computational Epidemiology and Infectious Diseases",
    images: [
      {
        url: "/api/og?title=Center%20for%20Computational%20Epidemiology",
        width: 1200,
        height: 630,
        alt: "CEID - Center for Computational Epidemiology and Infectious Diseases",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CEID - Center for Computational Epidemiology and Infectious Diseases",
    description: "Advanced computational methods to combat infectious diseases globally",
    images: ["/api/og?title=Center%20for%20Computational%20Epidemiology"],
    creator: "@CEID_org",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
