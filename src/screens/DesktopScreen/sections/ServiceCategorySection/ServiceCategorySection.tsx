// import { useNavigate } from "react-router-dom";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { services } from "../../../../lib/services";
// import { useEffect, useState, useMemo } from "react";

// const categories = [
//   { id: "farm-management", label: "Farm Management", value: "Farm Management", categoryImage: "/image-352.png" },
//   { id: "cow-food", label: "Cow Food", value: "Cow Food", categoryImage: "/image-348p.png" },
//   { id: "cow-service", label: "Cow Service", value: "Cow Service", categoryImage: "/image-352.png" },
//   { id: "waste-management", label: "Waste Management", value: "Waste Management", categoryImage: "/image-348p.png" },
// ];

// export const ServiceCategorySection = (): JSX.Element => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("farm-management");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const filteredServices = useMemo(() => {
//     const activeCategory = categories.find(cat => cat.id === selectedCategory);

//     if (!activeCategory) {
//       return [];
//     }

//     const filtered = services.filter(service => service.category === activeCategory.value);
//     return filtered;
//   }, [selectedCategory]);

//   const activeCategory = categories.find(cat => cat.id === selectedCategory);

//   return (
//     <section id="service-showcase" className="w-full bg-white">
//       {/* Header Section */}
//       <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 max-w-[1400px] mx-auto pt-8 sm:pt-12 md:pt-16">
//         <p className="font-inter font-bold text-[#ff860e] text-xs sm:text-sm md:text-xl mb-2">
//           Service Category
//         </p>
//         <h2 className="font-inter font-bold text-black text-lg sm:text-2xl md:text-[40px] leading-tight mb-8 md:mb-12">
//           Service That We Provide
//         </h2>

//         {/* Category Selector */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setSelectedCategory(cat.id)}
//               className={`px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 font-inter font-semibold transition-all ${
//                 selectedCategory === cat.id
//                   ? "border-[#ff860e] bg-[#ff860e] text-white shadow-lg"
//                   : "border-gray-300 bg-white text-black hover:border-[#ff860e]"
//               }`}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Two-Column Layout: Services (Left) & Image (Right) */}
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-12 md:pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
//           {/* Left: Services Grid */}
//           <div className="">
//             <h3 className="font-inter font-bold text-black text-xl sm:text-2xl md:text-3xl mb-2 flex items-center gap-3">
//               <span className="w-1 h-8 bg-[#ff860e] rounded-full"></span>
//               {activeCategory?.label} Services
//             </h3>

//             {/* Services Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
//               {filteredServices && filteredServices.length > 0 ? (
//                 filteredServices.map((service) => (
//                   <Card
//                     key={service.id}
//                     className="relative w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 group"
//                   >
//                     <CardContent className="p-0">
//                       <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
//                         <img
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           alt={service.title}
//                           src={service.image}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       </div>

//                       {/* Service Info */}
//                       <div className="p-4">
//                         <h4 className="font-inter font-semibold text-black text-sm md:text-base mb-1 line-clamp-2">
//                           {service.title}
//                         </h4>
//                         <p className="font-inter font-normal text-gray-600 text-xs md:text-sm mb-3 line-clamp-2">
//                           {service.description}
//                         </p>
//                         <div className="flex gap-2">
//                           <Button
//                             onClick={() => {
//                               window.scrollTo(0, 0);
//                               navigate('/service', { state: { service } });
//                             }}
//                             variant="ghost"
//                             className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-black text-xs font-medium rounded-lg transition"
//                           >
//                             View
//                           </Button>
//                           <Button
//                             onClick={() => navigate('/enquiry', { state: { service } })}
//                             className="flex-1 h-8 bg-[#ff860e] hover:bg-[#e67e0b] text-white text-xs font-medium rounded-lg transition"
//                           >
//                             Enquire
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               ) : (
//                 <div className="col-span-full text-center py-12">
//                   <p className="text-gray-500 text-base">No services found for this category</p>
//                 </div>
//               )}
//             </div>

//             {/* View All Services Button */}
//             {filteredServices && filteredServices.length > 0 && (
//               <div className="mt-8">
//                 <Button
//                   onClick={() => navigate('/services', { state: { category: activeCategory?.value } })}
//                   className="w-full sm:w-auto bg-[#ff860e] hover:bg-[#e67e0b] text-white font-bold py-3 px-8 rounded-lg transition"
//                 >
//                   View All {activeCategory?.label} Services
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* Right: Category Image */}
//           {/* <div className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[500px] order-1 lg:order-2">
//             <img
//               src={activeCategory?.categoryImage || "/image-352.png"}
//               alt={activeCategory?.label}
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//             />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ...existing code...
// import { useNavigate } from "react-router-dom";
// import { Button } from "../../../../components/ui/button";
// import { useEffect } from "react";

// export const ServiceCategorySection = (): JSX.Element => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section
//       id="service-showcase"
//       // Added 'relative' and 'overflow-hidden' here for correct positioning of the overlay
//       className="relative w-full py-12 h-[720px] sm:py-14 md:py-16 bg-white bg-cover bg-center overflow-hidden"
//       style={{ backgroundImage: "url('/services-bg.png')", minHeight: "600px" }}
//     >
//       {/* --- NEW: Background Blur & Fade Overlay --- */}
//       {/* This div sits on top of the background image but behind the content.
//           It uses a mask to apply a blur and dark fade only to the left side. */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           // Applies a dark overlay tint for better text contrast
//           backgroundColor: "rgba(0, 0, 0, 0.4)",
//           // Applies the blur to the background image behind this div
//           backdropFilter: "blur(6px)",
//           WebkitBackdropFilter: "blur(6px)", // Safari support
//           // Creates a horizontal gradient mask: visible on the left, transparent on the right
//           maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 40%, transparent 70%)",
//           WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 40%, transparent 70%)", // Safari support
//         }}
//       />

//       {/* Added 'relative z-10' to ensure content sits on top of the blurred overlay */}
//       <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center">
        
//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          
//           {/* Left Side: Farm360 Content & Design */}
//           <div className="flex flex-col w-[650px]  space-y-6">
//             <div className="inline-block px-4 py-1.5 bg-gray-600 rounded-full w-fit">
//               <span className="text-white font-bold text-sm uppercase tracking-wider">
//                 About Farm360
//               </span>
//             </div>
            
//             <h2 className="font-inter font-extrabold text-white text-3xl md:text-5xl leading-tight">
//               Revolutionizing <span className="text-gray-300">Dairy Farming</span> with 360° Solutions
//             </h2>
            
//             <p className="font-inter text-white text-lg md:text-xl leading-relaxed max-w-xl">
//               Farm360 is a complete solution for modern dairy farm management. We help you manage everything—including cow health, feeding systems, and farm maintenance—all in one place.
//             </p>

//             {/* View All Farm Management Services Button */}
//             <div className="pt-8">
//               <Button
//                 onClick={() => navigate('/services', { state: { category: "Farm Management" } })}
//                 className="w-full h-[60px] text-xl sm:w-auto bg-[#8dc201] hover:bg-[#7dae01] text-white font-bold py-6 px-10 rounded-xl shadow-xl transition-all hover:scale-105"
//               >
//                 View All Farm Management Services
//               </Button>
//             </div>
//           </div>

//           {/* Right Side: (Empty in provided snippet) */}
//           <div></div>

//         </div>
//       </div>
//     </section>
//   );
// };



import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { services } from "../../../../lib/services";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "farm-management", label: "Farm Management", value: "Farm Management" },
  { id: "cow-food", label: "Cow Food", value: "Cow Food" },
  { id: "cow-service", label: "Cow Service", value: "Cow Service" },
  { id: "waste-management", label: "Waste Management", value: "Waste Management" },
];

// --- Background Animation Component ---
const BackgroundGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#8dc63f]/10 blur-[80px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
          y: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: 300 + i * 100,
          height: 300 + i * 100,
          top: `${20 + i * 20}%`,
          left: i === 0 ? "-10%" : i === 1 ? "80%" : "40%",
        }}
      />
    ))}
  </div>
);

export const ServiceCategorySection = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("farm-management");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = useMemo(() => {
    const activeCategory = categories.find(cat => cat.id === selectedCategory);
    if (!activeCategory) return [];

    return services
      .filter(service => service.category === activeCategory.value)
      .slice(0, 4); 
  }, [selectedCategory]);

  const activeCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <section id="service-showcase" className="w-full bg--white relative overflow-hidden">
      {/* 1. Background Animation Added Here */}
      
      <BackgroundGlow />

      <div className="relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 max-w-[1400px] mx-auto pt-8 sm:pt-12 md:pt-16">
          <p className="font-inter font-bold text-[#8dc63f] text-xs sm:text-sm md:text-xl mb-2">
            Service Category
          </p>
          <h2 className="font-inter font-bold text-black text-lg sm:text-2xl md:text-[40px] leading-tight mb-8 md:mb-12">
            Service That We Provide
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-2 font-inter font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "border-[#8dc63f] bg-[#8dc63f] text-white shadow-lg"
                    : "border-gray-300 bg-white text-black hover:border-[#8dc63f]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-12 md:pb-20">
          <div className="w-full">
            <h3 className="font-inter font-bold text-black text-xl sm:text-2xl md:text-3xl mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#8dc63f] rounded-full"></span>
              {activeCategory?.label} Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="wait">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={`${selectedCategory}-${service.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                      <CardContent className="p-0">
                        <div className="relative h-[200px] overflow-hidden">
                          <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt={service.title}
                            src={service.image}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-4">
                          <h4 className="font-inter font-semibold text-black mb-1 line-clamp-1">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => {
                                window.scrollTo(0, 0);
                                navigate('/service', { state: { service } });
                              }}
                              variant="ghost"
                              className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-xs font-medium rounded-lg"
                            >
                              View
                            </Button>
                            <Button
                              onClick={() => navigate('/enquiry', { state: { service } })}
                              className="flex-1 h-8 bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium rounded-lg"
                            >
                              Enquire
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredServices.length > 0 && (
              <div className="mt-12 text-center">
                <Button
                  onClick={() => navigate('/services', { state: { category: activeCategory?.value } })}
                  className="bg-[#8dc63f] hover:brightness-110 text-white font-bold py-3 px-10 rounded-lg transition"
                >
                  View All Services
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};