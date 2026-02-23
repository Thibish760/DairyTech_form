import { useLocation } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import {useEffect, useRef} from "react";

interface HeroSectionProps {
  showOnlyNav?: boolean;
}

export const HeroSection = ({ showOnlyNav }: HeroSectionProps): JSX.Element => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
    
    // Add event listener for Edge compatibility
    const playVideo = () => {
      videoRef.current?.play().catch(error => {
        console.warn("Autoplay prevented:", error);
      });
    };
    
    // Try to play immediately
    playVideo();
    
    // Also try on user interaction for Edge
    document.addEventListener('click', playVideo, { once: true });
    
    return () => {
      document.removeEventListener('click', playVideo);
    };
  }
}, []);

  return (
    <>
      {/* Hero section with full video background - shows only on home page */}
      {!showOnlyNav && isHome && (
        <section className="w-full min-h-screen relative">
          <div className="w-full h-screen relative overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              crossOrigin="anonymous"
            >
              <source src="/cow-video.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
              <source src="/cow-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <Navbar />

            {/* Text content positioned at bottom */}
            <div className="absolute bottom-0 w-full p-6 md:p-8 lg:p-12 z-10">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lime-400 mb-2">
                  Farm 360
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white italic leading-relaxed">
                  It is an innovative agriculture company and agritech platform focused on transforming modern farming through sustainable practices, technology, and community support.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {showOnlyNav && <Navbar showOnlyNav />}

    </>
  );
};
