import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications - Center for Computational Epidemiology and Infectious Diseases",
  description: "Explore our research publications on computational epidemiology, infectious disease modeling, antimalarial drug resistance, and public health interventions.",
  keywords: ["epidemiology publications", "infectious disease research", "computational modeling papers", "public health research", "disease prevention studies"],
  openGraph: {
    title: "CEID Publications - Computational Epidemiology Research",
    description: "Explore our research publications on computational epidemiology and infectious disease modeling",
    url: "https://ceid.center/publications",
    images: [
      {
        url: "/api/og?title=CEID%20Publications%20and%20Research",
        width: 1200,
        height: 630,
        alt: "CEID Publications",
      },
    ],
  },
  twitter: {
    title: "CEID Publications - Computational Epidemiology Research",
    description: "Explore our research publications on computational epidemiology and infectious disease modeling",
    images: ["/api/og?title=CEID%20Publications%20and%20Research"],
  },
  alternates: {
    canonical: "/publications",
  },
};
