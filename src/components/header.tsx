import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  scrollToSection?: (
    ref: React.RefObject<HTMLDivElement>,
    isMobile: boolean,
  ) => void;
  topRef?: React.RefObject<HTMLDivElement>;
  aboutRef?: React.RefObject<HTMLDivElement>;
  researchRef?: React.RefObject<HTMLDivElement>;
  publicationsRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
}

export default function Header({
  scrollToSection,
  topRef,
  aboutRef,
  researchRef,
  publicationsRef,
  contactRef,
}: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPublicationsMenuOpen, setPublicationsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const router = useRouter();

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear the timeout if user hovers over again
    setPublicationsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setPublicationsMenuOpen(false); // Delayed closing to allow hover on the submenu
    }, 200); // Adjust delay as needed
  };

  const handleNavigation = (
    ref: React.RefObject<HTMLDivElement> | null | undefined,
    path: string,
    isMobile = false,
  ) => {
    if (ref?.current) {
      if (isMobile) {
        setMobileMenuOpen(false);
      }
      if (scrollToSection) {
        scrollToSection(ref, isMobile);
      }
    } else {
      router.push(path);
    }
  };

  // Scroll event listener to show the button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-slate-900 md:fixed md:top-0 md:left-0 md:right-0 md:bg-opacity-80 md:backdrop-blur-md md:z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="flex items-center space-x-2 -m-1.5 p-1.5">
          <span className="sr-only">CEID</span>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40} // Adjust the width as needed
            height={40} // Adjust the height as needed
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-white">CEID</span>
        </Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <button
            className="text-sm font-semibold leading-6 text-white hover:text-teal-500"
            onClick={() => handleNavigation(topRef, "/")}
          >
            Home
          </button>
          <button
            className="text-sm font-semibold leading-6 text-white hover:text-teal-500"
            onClick={() => handleNavigation(aboutRef, "/#about")}
          >
            About
          </button>
          <button
            className="text-sm font-semibold leading-6 text-white hover:text-teal-500"
            onClick={() => handleNavigation(researchRef, "/#research")}
          >
            Research
          </button>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-expanded={isPublicationsMenuOpen}
          >
            <button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-teal-500"
              onClick={() =>
                handleNavigation(publicationsRef, "/#publications")
              }
            >
              Publications
              <svg
                className="h-5 w-5 flex-none text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Flyout menu */}
            {isPublicationsMenuOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 overflow-hidden whitespace-nowrap rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="group relative flex items-center gap-x-6 rounded-lg py-4 px-6 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <Link
                      href="/publications"
                      className="block font-semibold text-gray-900"
                    >
                      All Publications
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className="text-sm font-semibold leading-6 text-white hover:text-teal-500"
            onClick={() => handleNavigation(contactRef, "/#contact")}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu open state. */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-10">
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">CEID</span>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40} // Adjust the width as needed
                  height={40} // Adjust the height as needed
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handleNavigation(topRef, "/", true)}
                  >
                    Home
                  </button>
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handleNavigation(aboutRef, "/#about", true)}
                  >
                    About
                  </button>
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() =>
                      handleNavigation(researchRef, "/#research", true)
                    }
                  >
                    Research
                  </button>
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() =>
                      handleNavigation(publicationsRef, "/#publications", true)
                    }
                  >
                    Publications
                  </button>
                  <div className="mt-2 space-y-2" id="disclosure-1">
                    <Link
                      href="/publications"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      All Publications
                    </Link>
                  </div>
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() =>
                      handleNavigation(contactRef, "/#contact", true)
                    }
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Scroll-down menu button for mobile */}
      {showScrollButton && !isMobileMenuOpen && (
        <button
          className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-teal-500 text-white shadow-lg lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
    </header>
  );
}
