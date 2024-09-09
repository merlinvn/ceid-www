// components/Hero.tsx

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
}

export default function Hero({ scrollToSection, aboutRef }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-600">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home_hero.png')",
          filter: "brightness(0.35)",
        }}
      ></div>
      <div className="relative z-9 container mx-auto px-4 text-center">
        <h2 className="text-teal-500 text-xl mb-2">
          ADVANCING EPIDEMIOLOGY THROUGH COMPUTATION
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-6">
          Center for Computational Epidemiology and Infectious Diseases
        </h3>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Leveraging advanced computational methods to understand, predict, and
          combat infectious diseases on a global scale.
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex items-center">
            <svg
              className="h-12 w-12 text-teal-500 mr-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2v20" />
              <path d="M2 12h20" />
            </svg>
            <div>
              <h4 className="text-2xl font-bold">High-Impact Research</h4>
              <p>Leading innovations in epidemiology</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="h-12 w-12 text-teal-500 mr-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7v7l10 5 10-5V7z" />
              <path d="M2 7l10 5 10-5" />
              <path d="M12 22V12" />
            </svg>
            <div>
              <h4 className="text-2xl font-bold">Innovative Solutions</h4>
              <p>Transforming global health</p>
            </div>
          </div>
        </div>
        <button
          className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          onClick={() => scrollToSection(aboutRef)}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
