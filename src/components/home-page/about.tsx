// components/About.tsx
import { RefObject, useRef, useState } from "react";
import { FaPlay, FaPause, FaExpand } from "react-icons/fa";

interface AboutProps {
  aboutRef: RefObject<HTMLDivElement | null>;
}

export default function About({ aboutRef }: AboutProps) {
  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-white text-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Our Center</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            {/* Video Player with Controls */}
            <VideoPlayer />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-teal-600">
              Our Mission
            </h3>
            <p className="mb-4 text-slate-700">
              The Center for Computational Epidemiology and Infectious Diseases
              (CCEID) is dedicated to advancing the field of epidemiology
              through innovative computational methods and cutting-edge
              research.
            </p>
            <p className="text-slate-700">
              Our interdisciplinary team of researchers combines expertise in
              epidemiology, data science, and computer science to develop novel
              approaches for understanding and combating infectious diseases.
            </p>
            <div className="mt-8 flex space-x-8">
              <div>
                <h4 className="text-xl font-semibold text-teal-600">01.</h4>
                <h5 className="text-lg font-medium mb-2">Advanced Modeling</h5>
                <p className="text-slate-600">
                  Developing sophisticated computational models for disease
                  spread.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-600">02.</h4>
                <h5 className="text-lg font-medium mb-2">Data Analysis</h5>
                <p className="text-slate-600">
                  Leveraging big data to extract meaningful epidemiological
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ('webkitRequestFullscreen' in video) {
      (video as HTMLVideoElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen?.();
    } else if ('msRequestFullscreen' in video) {
      (video as HTMLVideoElement & { msRequestFullscreen?: () => void }).msRequestFullscreen?.();
    }
  };

  // Show controls on hover/focus/touch
  const handleShowControls = () => setShowControls(true);
  const handleHideControls = () => setShowControls(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleShowControls}
      onMouseLeave={handleHideControls}
      onFocus={handleShowControls}
      onBlur={handleHideControls}
      onTouchStart={handleShowControls}
      tabIndex={0}
      aria-label="Video player section"
    >
      <video
        ref={videoRef}
        className="rounded-lg object-cover w-full h-auto"
        src="/about.mp4"
        width={600}
        height={400}
        style={{ objectFit: "cover" }}
        autoPlay
        loop
        muted
        playsInline
        tabIndex={-1}
        aria-label="About video"
      />
      <div
        className={`absolute left-0 bottom-0 w-full flex justify-center transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(30, 41, 59, 0.6)", borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}
      >
        <button
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="m-2 p-2 rounded bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 flex items-center justify-center"
        >
          {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
        </button>
        <button
          onClick={handleFullscreen}
          aria-label="Fullscreen video"
          className="m-2 p-2 rounded bg-slate-700 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 flex items-center justify-center"
        >
          <FaExpand size={22} />
        </button>
      </div>
    </div>
  );
}
