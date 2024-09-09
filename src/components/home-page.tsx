"use client";

import { useRef } from "react";

import Header from "./header";
import Footer from "./footer";
import Hero from "./home-page/hero";
import About from "./home-page/about";
import Research from "./home-page/research";
import FeaturedPublications from "./home-page/featured-publications";
import Contact from "./home-page/contact";

export function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const publicationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    isMobile = false,
  ) => {
    const headerHeight = isMobile
      ? 0
      : document.querySelector("header")?.offsetHeight || 0;

    const scrollPosition = ref.current?.offsetTop || 0;
    console.log(ref.current);
    window.scrollTo({
      top: scrollPosition === 0 ? 0 : scrollPosition - headerHeight, // Adjust scroll position by header height
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div id="top" ref={topRef} />
      <Header
        scrollToSection={scrollToSection}
        topRef={topRef}
        aboutRef={aboutRef}
        researchRef={researchRef}
        publicationsRef={publicationsRef}
        contactRef={contactRef}
      />
      <main>
        <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} />
        <About aboutRef={aboutRef} />
        <Research researchRef={researchRef} />
        <FeaturedPublications publicationsRef={publicationsRef} />
        <Contact contactRef={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
