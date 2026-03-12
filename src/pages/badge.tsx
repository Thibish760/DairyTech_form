import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const avatars = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

export const BadgeSection= (): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="w-full bg-yellow-200 py-6 sm:py-8 md:py-10">
      <div className="max-w-[1140px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-10"
        >
          {/* Left: Avatars + text */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={ "/profile.png"}
                  alt={`avatar-${i}`}
                  className={`w-13 h-12 sm:w-12  sm:h-14 rounded-full  object-cover `}
                  style={{ zIndex: avatars.length - i }}
                />
              ))}
            </div>

            <div>
              <h3 className="font-['Inter'] font-bold text-black text-[14px] sm:text-[16px]">
                100K+ Client With Positive Reviews
              </h3>
              {/* <p className="text-black/70 text-[12px] sm:text-[13px]">
                Trusted by farmers across regions for consistent results.
              </p> */}
            </div>
          </div>

          {/* Center: Circular badge (inline SVG with textPath) */}
          <div className="flex justify-center md:justify-center">
            <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  {/* path for circular text slightly outside the white ring */}
                  <path id="circlePath" d="M100,35 a60,65 0 1,1 -0.1,0"/>
                </defs>
                {/* outer thin stroke ring */}
                {/* Outer Dark Green Border */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="#0b3a16" strokeWidth="2.5" />
                {/* white ring */}
                
                {/* inner green hub */}
                <circle cx="100" cy="100" r="50" fill="#ffffff" />

                {/* Cow-style 3-blade logo: three centered triangles rotated 120deg */}
                <g transform="translate(100,100) rotate(-20) scale(1.6)">
                  <g transform="rotate(0)">
                    <path d="M0 -20 L10 6 L-10 6 Z" fill="#175c2e" />
                  </g>
                  <g transform="rotate(120)">
                    <path d="M0 -20 L10 6 L-10 6 Z" fill="#175c2e" />
                  </g>
                  <g transform="rotate(240)">
                    <path d="M0 -20 L10 6 L-10 6 Z" fill="#175c2e" />
                  </g>
                </g>

                {/* circular text along path, startOffset centers text at top */}
                <text  fontSize="19" fontWeight="bold" fill="#0b3a16"  style={{ fontFamily: 'Inter, sans-serif' }}>
                  <textPath href="#circlePath" startOffset="5%">• Dairy Farming  • Automation  • Services •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right: Text + video thumbnail */}
          <div className="flex items-center gap-4 md:gap-6 justify-end">
            <div className="text-right hidden sm:block">
              <h3 className="font-['Inter']  font-bold text-black text-[14px] sm:text-[16px]">
                Healthy Life With Fresh Products and Services
              </h3>
              {/* <p className="text-black/70 text-[12px] sm:text-[13px]">
                From our farm to your table — freshness guaranteed.
              </p> */}
            </div>

            <div className="relative w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-lg overflow-hidden shadow-md cursor-pointer">
              <button
                aria-label="Open video"
                onClick={() => setIsVideoOpen(true)}
                className="w-full h-full p-0 m-0"
                style={{ background: "none", border: "none" }}
              >
                <img src="https://img.youtube.com/vi/IxrIOiOpIwI/hqdefault.jpg" alt="video thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center opacity-95 hover:opacity-100 transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7L8 5z" fill="white" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Video modal with YouTube iframe */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-[90%] max-w-[900px] aspect-video bg-black rounded" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 text-white text-xl bg-black/40 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/60 transition z-10"
              aria-label="Close video"
            >
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IxrIOiOpIwI?autoplay=1&controls=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

const featureCards = [
  {
    icon: "/frame-886-2.svg",
    title: "Scalable Solutions",
    description: "From small family dairies to large commercial farms, we offer customized solutions based on your size, budget, and goals",
  },
  {
    icon: "/frame-886.svg",
    title: "Fast Response",
    description: "We provide fast support and quick response to ensure uninterrupted farm to operations.",
  },
  {
    icon: "/frame-886.svg",
    title: "Fast Response",
    description: "We provide fast support and quick response to ensure uninterrupted farm operations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cards will appear one after another
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: 50, // Start slightly to the right
    rotateY: 15 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  },
};

const socialIcons = [
  { src: "/ri-instagram-line.svg", alt: "Instagram", label: "Instagram" },
  { src: "/ic-baseline-whatsapp.svg", alt: "WhatsApp", label: "WhatsApp" },
  { src: "/ic-baseline-facebook.svg", alt: "Facebook", label: "Facebook" },
];

const badges = [
  {
    icon: "/bitcoin-icons-verify-filled.svg",
    alt: "Verified",
    title: "Approved Product",
  },
  {
    icon: "/mingcute-safety-certificate-fill.svg",
    alt: "Safe",
    title: "Safe & Secure Service",
  },
  {
    icon: "/mingcute-safety-certificate-fill.svg",
    alt: "Secure",
    title: "Safe & Secure Service",
  },
];
// export const WhyChooseFarm = (): JSX.Element => {
//   return (
//     <div id="about" className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
//       <div className="max-w-[1140px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 md:gap-16">
          
//           {/* LEFT COLUMN - CONTENT */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col"
//           >
//             {/* Heading + Text */}
//             <div className="mb-8 sm:mb-10 md:mb-12">
//               <h1 className="font-['Inter'] font-bold text-black text-[20px] sm:text-[28px] md:text-[34px] leading-[1.2] mb-3 sm:mb-4 md:mb-5 max-w-[520px]">
//                 Why is our dairy & cow farm maintenance company the right choice for your farm?
//               </h1>
//               <p className="font-['Inter'] font-medium text-[#605a5a] text-[13px] sm:text-[15px] md:text-[17px] leading-[1.6] max-w-[520px]">
//                 Built on hands-on dairy farm experience, we understand cow health, hygiene, and equipment care.
//               </p>
//             </div>
//                         {/* Badges */}
//             <div className="flex justify-start gap-3 sm:gap-4 md:gap-9 py-2 sm:py-3 md:py-4 flex-wrap mb-8 sm:mb-12 md:mb-16">
//               {badges.map((badge, index) => (
//                 <div key={index} className="flex flex-col items-center gap-3 sm:gap-3 ">
//                   <div className="w-8 sm:w-9 md:w-12  hover:scale-110 transition gap-60">
//                     <img
//                       className="w-full h-full object-contain"
//                       alt={badge.alt}
//                       src={badge.icon}
//                     />
//                   </div>

//                   <p className="font-['Inter'] font-medium text-[#4e4d4d] text-[10px] sm:text-[11px] md:text-[13px] text-center max-w-[80px] sm:max-w-[100px] md:max-w-[110px]">
//                     {badge.title}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Social Icons & Badges logic remains similar but with motion */}
//             <div className="flex gap-3 sm:gap-4 mb-8  sm:mb-10 md:mb-12">
//               {socialIcons.map((icon, index) => (
//                 <motion.a 
                  
//                   key={index} href="#" className="w-9"
//                 >
//                   <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
//                 </motion.a>
//               ))}
              
//             </div>
//           </motion.div>

          

//           {/* RIGHT COLUMN - ANIMATED CARDS */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:w-[450px]"
//           >
//             {featureCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ 
//                   scale: 1.03, 
//                   x: -5,
//                   boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" 
//                 }}
//                 className="bg-[#c4d1d4] rounded-lg sm:rounded-xl flex items-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-[22px] cursor-default border border-transparent hover:border-white/50 transition-colors"
//               >
//                 {/* Icon Box */}
//                 <div className="bg-white rounded-[8px] sm:rounded-[10px] w-[60px] sm:w-[80px] md:w-[90px] h-[70px] sm:h-[80px] md:h-[100px] flex items-center justify-center flex-shrink-0 shadow-sm">
//                   <motion.img
//                     initial={{ scale: 0.8 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     src={card.icon}
//                     alt={card.title}
//                     className="w-2/2 h-full object-contain"
//                   />
//                 </div>
                
                

          

//                 {/* Text */}
//                 <div className="flex flex-col gap-1">
//                   <h3 className="font-['Inter'] font-bold text-black text-[14px] sm:text-[16px] md:text-[18px]">
//                     {card.title}
//                   </h3>
//                   <p className="font-['Inter'] text-black/80 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5]">
//                     {card.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };


