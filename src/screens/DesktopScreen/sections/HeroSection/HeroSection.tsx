

import { Navbar } from "../../../../components/Navbar";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface HeroSectionProps {
  showOnlyNav?: boolean;
}

export const HeroSection = ({  }: HeroSectionProps): JSX.Element => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const videoRef = useRef<HTMLVideoElement>(null);

  
  const phoneNumber = "+919750603988";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playVideo = () => {
        videoRef.current?.play().catch((error) => {
          console.warn("Autoplay prevented:", error);
        });
      };
      playVideo();
      document.addEventListener("click", playVideo, { once: true });
      return () => document.removeEventListener("click", playVideo);
    }
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .green-half-circle {
            position: absolute;
            bottom: -1%;
            right: 0;
            width: 25%;
            height: 100%;
            background: linear-gradient(to bottom right, #84cc16 0%, #a3e635 100%);
            opacity: 0.25;
            border-radius: 591.69px 0 0 591.69px;
            z-index: 0;
            filter: blur(35.5px);
          }

          /* Pulse animation for the dialer button */
          @keyframes pulse-green {
            0% { box-shadow: 0 0 0 0 rgba(132, 204, 22, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(132, 204, 22, 0); }
            100% { box-shadow: 0 0 0 0 rgba(132, 204, 22, 0); }
          }
          .animate-pulse-slow {
            animation: pulse-green 2s infinite;
          }

          @media (max-width: 640px) {
            .green-half-circle { display: none; }
          }
        `}
      </style>

      {/* Floating Dialer Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-20 right-24 z-[100] bg-lime-600 text-white p-4 rounded-full shadow-2xl hover:bg-lime-700 transition-all active:scale-95 animate-pulse-slow flex items-center justify-center"
        aria-label="Call Us"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>

      {isHome ? (
        <div className="bg-white py-3 w-full min-h-screen flex flex-col relative overflow-hidden">
          <Navbar />
          <div className="green-half-circle" />

          <div className="flex flex-col-reverse md:flex-row h-[calc(100vh-80px)] w-full items-center px-6 md:px-12 lg:px-24 relative z-10">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Transforming Your Land Into A <span className="text-lime-600">Fully Automated, Technology-Driven Dairy Farm Ecosystem.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Azhizen Dairy Tech Solution Design And Implement Smart Dairy Infrastructure Equipped With Automation, Real-Time Monitoring, And Data-Driven Management Systems.
              </p>
              
              {/* Optional: Inline Call Button */}
              {/* <a 
                href={`tel:${phoneNumber}`} 
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-lime-600 transition-colors flex items-center gap-2"
              >
                Connect Now
              </a> */}
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="animate-float">
                <img 
                  src="/ariz.png" 
                  alt="Farm Bot" 
                  className="max-h-[50vh] md:max-h-[70vh] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navbar />
      )}
    </>
  );
};