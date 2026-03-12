// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useRef } from "react";
// import { s } from "framer-motion/client";

// const navigationItems = [
//   { label: "Home", id: "home" },
//   { label: "Services", path: "/services" },
//   { label: "Shop", id: "shop" },
//   { label: "About", id: "Aboutus" },
//   { label: "Contact", id: "contact" },
// ];

// export const Navbar = ({ showOnlyNav,  }: { showOnlyNav?: boolean }): JSX.Element => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [waveCoords, setWaveCoords] = useState({ x: 0, y: 0 });


//   // 1. Add loading state
//   const [isRedirecting, setIsRedirecting] = useState(false);

//   const handleNavigation = (sectionId: string, path?: string) => {
//     setMobileMenuOpen(false);
//     if (path) {
//       if (location.pathname !== path) navigate(path);
//       return;
//     }
//     if (sectionId === "shop") { navigate("/shop"); return; }
//     if (sectionId === "contact") { navigate("/contact"); return; }
//     if (sectionId === "Aboutus") { navigate("/about"); return; }

//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: sectionId } });
//       return;
//     }

//     if (sectionId === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const element = document.getElementById(sectionId);
//       element?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

// const handleSwitchToTech = (e: React.MouseEvent<HTMLButtonElement>) => {
//   setWaveCoords({
//     x: e.clientX,
//     y: e.clientY,
//   });

//   setIsAnimating(true);
  
//   // Timing optimized to switch pages while the wave is in its final shrink phase
//   setTimeout(() => {
//     window.location.href = "https://www.azhizen.com/";
//   }, 1800); 
// };

//   const navContainerClasses = "max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-20 md:h-24";
//   const desktopButtonClasses = "bg-lime-400 hover:bg-lime-500 text-black font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg whitespace-nowrap active:scale-95";

//   return (
//     <nav className="w-full">
//       {/* 3. Loading Overlay UI */}
// <AnimatePresence>
//   {isAnimating && (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-white"
//     >
//       {/* Morphing Wave Background */}
//       <motion.div
//         initial={{
//           clipPath: `circle(0% at ${waveCoords.x}px ${waveCoords.y}px)`,
//           backgroundColor: "#84cc16" // Green cover phase
//         }}
//         animate={{
//           clipPath: [
//             `circle(0% at ${waveCoords.x}px ${waveCoords.y}px)`,
//             `circle(150% at ${waveCoords.x}px ${waveCoords.y}px)`, // Cover
//             `circle(150% at ${waveCoords.x}px ${waveCoords.y}px)`, // Hold
//             `circle(0% at ${waveCoords.x}px ${waveCoords.y}px)`    // Shrink
//           ],
//           backgroundColor: [
//             "#84cc16", // Start Green
//             "#84cc16",
//             "#0e7490", // Transition to Blue
//             "#0e7490"
//           ]
//         }}
//         transition={{
//           duration: 2.2, 
//           times: [0, 0.4, 0.6, 1],
//           ease: "circOut"
//         }}
//         className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto"
//       >
//         <div className="relative flex items-center justify-center">
          
//           {/* Green Logo Phase */}
//           <motion.img
//             src="azhizen-logo-green.png"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{
//               opacity: [0, 1, 1, 0],
//               scale: [0.8, 1, 1, 1.1]
//             }}
//             transition={{
//               duration: 2.2,
//               times: [0, 0.2, 0.4, 0.5] 
//             }}
//             className="absolute w-48 md:w-80 object-contain"
//           />

//           {/* Blue Logo Phase */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{
//               opacity: [0, 0, 1, 1, 0],
//               scale: [0.5, 0.5, 1, 1, 0.8]
//             }}
//             transition={{
//               duration: 2.2,
//               times: [0, 0.45, 0.55, 0.8, 1] 
//             }}
//             className="flex flex-col items-center"
//           >
//             <img
//               src="azhizen-logo-blue.png"
//               className="w-48 md:w-80 object-contain mb-6"
//             />
//             <div className="flex flex-col items-center gap-4">
//               <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
//               <span className="text-white text-sm font-bold tracking-[0.2em]">SWITCHING TO TECH</span>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
//       {/* CONTACT PAGE NAVBAR */}
//       {location.pathname === "/contact" && (
//         <div className="absolute top-0 py-4 left-0 w-full z-50 bg-transparent">
//           <div className={`hidden md:flex ${navContainerClasses}`}>
//             <img
//               src="/azhizen-logo-white.png"
//               alt="AZHIZEN"
//               className="h-10 md:h-12 w-auto cursor-pointer"
//               onClick={() => navigate("/")}
//             />
//             <div className="flex items-center gap-8">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavigation(item.id || "", item.path)}
//                   className="text-sm lg:text-base font-semibold text-white hover:text-lime-400 transition-colors"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//             <button onClick={handleSwitchToTech} className={desktopButtonClasses}>
//               Switch to Tech
//             </button>
//           </div>
//           <MobileNav
//             logo="/azhizen-logo-white.png"
//             handleNavigation={handleNavigation}
//             handleSwitchToTech={handleSwitchToTech} // Pass the function
//             mobileMenuOpen={mobileMenuOpen}
//             setMobileMenuOpen={setMobileMenuOpen}
//             isTransparent={true}
//           />
//         </div>
//       )}

//       {/* SOLID NAVBARS */}
//       {(location.pathname === "/services" || location.pathname === "/shop" || location.pathname === "/about" || location.pathname === "/service" || location.pathname === "/enquiry" || location.pathname === "/buy" || location.pathname === "/") && (
//         <div className="relative w-full z-50 ">
//           <div className={`hidden md:flex ${navContainerClasses}`}>
//             <img
//               src="/azhizen-logo-green.png"
//               alt="AZHIZEN"
//               className="h-10 md:h-12 w-auto cursor-pointer"
//               onClick={() => navigate("/")}
//             />
//             <div className="flex items-center gap-8">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavigation(item.id || "", item.path)}
//                   className="text-sm lg:text-base font-semibold text-gray-700 hover:text-lime-600 transition-colors"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//             <button onClick={handleSwitchToTech} className={desktopButtonClasses}>
//               Switch to Tech
//             </button>
//           </div>
//           <MobileNav
//             logo="/azhizen-logo-green.png"
//             handleNavigation={handleNavigation}
//             handleSwitchToTech={handleSwitchToTech} // Pass the function
//             mobileMenuOpen={mobileMenuOpen}
//             setMobileMenuOpen={setMobileMenuOpen}
//             isTransparent={false}
//           />
//         </div>
//       )}
//     </nav>
//   );
// };

// const MobileNav = ({ logo, handleNavigation, handleSwitchToTech, mobileMenuOpen, setMobileMenuOpen, isTransparent }: any) => {
//   return (
//     <div className="md:hidden w-full h-20 flex items-center justify-between px-6">
//       <img src={logo} alt="AZHIZEN" className="h-8 w-auto" />
//       <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="z-50 flex flex-col gap-1.5 p-2">
//         <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-black' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
//         <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? 'opacity-0' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
//         <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-black' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
//       </button>

//       {mobileMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-2xl p-6 pt-24 space-y-4 animate-in fade-in slide-in-from-top duration-300 z-40">
//           {navigationItems.map((item) => (
//             <button
//               key={item.label}
//               onClick={() => handleNavigation(item.id || "", item.path)}
//               className="block w-full text-left text-lg font-bold text-gray-800 hover:text-lime-600 py-2"
//             >
//               {item.label}
//             </button>
//           ))}
//           <button onClick={handleSwitchToTech} className="w-full bg-lime-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2">
//             Switch to Tech
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { s } from "framer-motion/client";
import { TechTransition } from "./TechTransition";

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "Services", path: "/services" },
  { label: "Shop", id: "shop" },
  { label: "About", id: "Aboutus" },
  { label: "Contact", id: "contact" },
];

export const Navbar = ({ showOnlyNav,  }: { showOnlyNav?: boolean }): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [waveCoords, setWaveCoords] = useState({ x: 0, y: 0 });
  


  // 1. Add loading state
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleNavigation = (sectionId: string, path?: string) => {
    setMobileMenuOpen(false);
    if (path) {
      if (location.pathname !== path) navigate(path);
      return;
    }
    if (sectionId === "shop") { navigate("/shop"); return; }
    if (sectionId === "contact") { navigate("/contact"); return; }
    if (sectionId === "Aboutus") { navigate("/about"); return; }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

const handleSwitchToTech = () => {
    setIsAnimating(true);
    // The redirect happens inside TechTransition via the onComplete callback
  };

  const onAnimationComplete = () => {
    window.location.href = "https://www.azhizen.com/";
  };

  const navContainerClasses = "max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-20 md:h-24";
  const desktopButtonClasses = "bg-lime-400 hover:bg-lime-500 text-black font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg whitespace-nowrap active:scale-95";

  return (
    <nav className="w-full">
      {/* 3. Loading Overlay UI */}
<AnimatePresence>
        {isAnimating && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <TechTransition onComplete={onAnimationComplete} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* CONTACT PAGE NAVBAR */}
      {location.pathname === "/contact" && (
        <div className="absolute  py-4 px-[3.5rem] w-full z-50 bg-transparent">
          <div className={`hidden md:flex ${navContainerClasses}`}>
            <img
              src="/azhizen-logo-white.png"
              alt="AZHIZEN"
              className="h-10 md:h-12 w-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div className="flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.id || "", item.path)}
                  className="text-sm lg:text-base font-semibold text-white hover:text-lime-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button onClick={handleSwitchToTech} className={desktopButtonClasses}>
              Switch to Tech
            </button>
          </div>
          <MobileNav
            logo="/azhizen-logo-white.png"
            handleNavigation={handleNavigation}
            handleSwitchToTech={handleSwitchToTech} // Pass the function
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            isTransparent={true}
          />
        </div>
      )}

      {/* SOLID NAVBARS */}
      {(location.pathname === "/services" || location.pathname === "/shop" || location.pathname === "/about" || location.pathname === "/service" || location.pathname === "/enquiry" || location.pathname === "/buy" || location.pathname === "/") && (
        <div className="relative py-2 w-full z-50 ">
          <div className={`hidden md:flex ${navContainerClasses}`}>
            <img
              src="/azhizen-logo-green.png"
              alt="AZHIZEN"
              className="h-[10rem] md:h- w-[10rem] cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div className="flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.id || "", item.path)}
                  className="text-sm lg:text-base font-semibold text-gray-700 hover:text-lime-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button onClick={handleSwitchToTech} className={desktopButtonClasses}>
              Switch to Tech
            </button>
          </div>
          <MobileNav
            logo="/azhizen-logo-green.png"
            handleNavigation={handleNavigation}
            handleSwitchToTech={handleSwitchToTech} // Pass the function
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            isTransparent={false}
          />
        </div>
      )}
    </nav>
  );
};

const MobileNav = ({ logo, handleNavigation, handleSwitchToTech, mobileMenuOpen, setMobileMenuOpen, isTransparent }: any) => {
  return (
    <div className="md:hidden w-full h-20 flex items-center justify-between px-6">
      <img src={logo} alt="AZHIZEN" className="h-8 w-auto" />
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="z-50 flex flex-col gap-1.5 p-2">
        <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-black' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
        <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? 'opacity-0' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
        <span className={`h-0.5 w-6 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-black' : isTransparent && logo.includes('white') ? 'bg-white' : 'bg-black'}`}></span>
      </button>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-2xl p-6 pt-24 space-y-4 animate-in fade-in slide-in-from-top duration-300 z-40">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.id || "", item.path)}
              className="block w-full text-left text-lg font-bold text-gray-800 hover:text-lime-600 py-2"
            >
              {item.label}
            </button>
          ))}
          <button onClick={handleSwitchToTech} className="w-full bg-lime-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2">
            Switch to Tech
          </button>
        </div>
      )}
    </div>
  );
};