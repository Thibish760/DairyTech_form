import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const categories = [
  { id: "farm-management", label: "Farm Management" },
  { id: "cow-food", label: "Cow Food" },
  { id: "cow-service", label: "Cow Service" },
  { id: "waste-management", label: "Waste Management" },
];

const services = [
  { id: 1, title: "Constructing Farm House", description: "Building The Complete Farm House In Large Scale", image: "/image-352.png" },
  { id: 2, title: "Cleaning Farm House", description: "Building The Complete Farm House In Large Scale", image: "/image-351.png" },
  { id: 3, title: "Maintaining Farm House", description: "Building The Complete Farm House In Large Scale", image: "/image-353.png" },
  { id: 4, title: "Constructing Farm House", description: "Building The Complete Farm House In Large Scale", image: "/image-349.png" },
];

export const ServiceCategorySection = (): JSX.Element => {
  return (
    <section id="service-showcase" className="w-full bg-white relative overflow-hidden">
      <div className="w-full"> 
      
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-8 md:mb-12 px-3 sm:px-4 max-w-[1400px] mx-auto">
          <p className="font-inter font-bold text-[#ff860e] text-xs sm:text-sm md:text-xl mb-1">
            Service Category
          </p>
          <h2 className="font-inter font-bold text-black text-lg sm:text-2xl md:text-[40px] leading-tight">
            Service That We Provide
          </h2>
        </div>

        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[750px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Farm background"
            src="/image-348p.png"
          />

          {/* Fixed Category Bar: Matches your second design image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w- px-2 sm:px-0">
            <div className="bg-white rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[50px] px-3 sm:px-6 md:px-12 pb-3 sm:pb-6 md:pb-10 pt-2 sm:pt-4 shadow-xl flex flex-col items-center max-w-[95%] sm:max-w-none mx-auto">
              
              <Tabs defaultValue="farm-management" className="w-full">
                {/* Scrollable on mobile, centered on desktop */}
                  <TabsList className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-2 sm:gap-3 md:gap-6 bg-transparent h-auto w-full py-1 sm:py-2">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="whitespace-normal md:whitespace-nowrap min-w-0 md:min-w-[220px] h-[36px] sm:h-[45px] md:h-[65px] rounded-[8px] md:rounded-[10px] border border-[#999999] bg-[#e6ecef] data-[state=active]:bg-white data-[state=active]:border-[#2874f0] data-[state=active]:text-[#2874f0] font-inter font-semibold text-black text-[8px] sm:text-xs md:text-lg transition-all shadow-sm"
                      >
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Services List Section */}
          <div className="relative z-20 pt-[120px] sm:pt-[160px] md:pt-[250px] px-2 sm:px-4 flex flex-col items-center max-w-[1400px] mx-auto">
            <div className="mb-6 sm:mb-10 md:mb-16 w-full border-l- border-[#ff860e] pl-2 sm:pl-4">
              <h3 className="font-inter font-semibold text-white text-sm sm:text-lg md:text-3xl border-l-4 border-[#ff860e] pl-3 sm:pl-4 drop-shadow-md inline-block">
                List Of Farm Maintenance Service
              </h3>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[1300px] mx-auto px-2 sm:px-4 pb-0 py-2 sm:py-3 md:py-5">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="relative w-full h-[160px] sm:h-[200px] md:h-[280px] bg-white rounded-[10px] sm:rounded-[15px] overflow-hidden shadow-2xl border-0 group"
                >
                  <CardContent className="p-0 relative w-full h-full">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={service.title}
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2 sm:p-3 md:p-5">
                      <h4 className="font-inter font-semibold text-white text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1">
                        {service.title}
                      </h4>
                      <p className="font-inter font-normal text-gray-200 text-[10px] sm:text-xs md:text-xs mb-2 sm:mb-4 line-clamp-1 sm:line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex gap-1.5 sm:gap-2">
                        <Button variant="ghost" className="h-6 sm:h-8 md:h-9 px-2 sm:px-3 md:px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-[9px] sm:text-[10px] md:text-xs border border-white/20">
                          View
                        </Button>
                        <Button className="h-6 sm:h-8 md:h-9 flex-1 bg-white hover:bg-gray-100 rounded-full text-black text-[9px] sm:text-[10px] md:text-xs font-bold">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// const categories = [
//   { id: "farm-management", label: "Farm Management" },
//   { id: "cow-food", label: "Cow Food" },
//   { id: "cow-service", label: "Cow Service" },
//   { id: "waste-management", label: "Waste Management" },
// ];

// const services = [
//   { id: 1, title: "Constructing Farm House", image: "/image-352.png" },
//   { id: 2, title: "Cleaning Farm House", image: "/image-351.png" },
//   { id: 3, title: "Maintaining Farm House", image: "/image-353.png" },
//   { id: 4, title: "Constructing Farm House", image: "/image-349.png" },
// ];

// export const ProductShowcaseSection = (): JSX.Element => {
//   return (
//     // h-screen and overflow-hidden ensures a "Single Frame" fill
//     <section className="w-full h-screen bg-white flex flex-col overflow-hidden font-inter">
      
//       {/* 1. Header Section */}
//       <div className="flex-none py-6 text-center">
//         <p className="font-bold text-[#ff860e] text-sm uppercase tracking-wide mb-1">
//           Service Category
//         </p>
//         <h2 className="font-bold text-black text-3xl">
//           Service That We Provide
//         </h2>
//       </div>

//       {/* 2. Hero Section with Tab Notch */}
//       <div className="relative flex-[1.4] w-full px-4 overflow-hidden">
//         <div className="relative h-full w-full rounded-[40px] overflow-hidden">
//           <img
//             className="absolute inset-0 w-full h-full object-cover"
//             alt="Cow Farm"
//             src="/image-348.png"
//           />
          
//           {/* The White Tab Notch - Recreating the visual from image_f43b19.jpg */}
//           <div 
//             className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-12 pb-6 pt-4 rounded-b-[40px] shadow-sm flex items-center justify-center min-w-[70%]"
//             style={{ clipPath: 'inset(0 -100% 0 -100%)' }} // Ensures shadow only on the bottom curve
//           >
//             <Tabs defaultValue="farm-management" className="w-full">
//               <TabsList className="grid w-full grid-cols-4 gap-4 bg-transparent h-auto">
//                 {categories.map((cat) => (
//                   <TabsTrigger
//                     key={cat.id}
//                     value={cat.id}
//                     className="h-12 px-6 rounded-lg border border-gray-300 data-[state=active]:border-[#2874f0] data-[state=active]:bg-white data-[state=inactive]:bg-[#dae2e5] font-medium text-black text-sm transition-all shadow-sm"
//                   >
//                     {cat.label}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </Tabs>
//           </div>
//         </div>
//       </div>

//       {/* 3. Lower List Section */}
//       <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 flex flex-col">
//         <h3 className="flex-none font-bold text-black text-2xl mb-4">
//           List Of Farm Maintence Service
//         </h3>

//         {/* Dynamic Grid: Each card takes equal height to fill the remaining screen */}
//         <div className="grid grid-cols-4 gap-4 flex-1 mb-4">
//           {services.map((service) => (
//             <Card key={service.id} className="relative h-full rounded-2xl overflow-hidden border-0 shadow-lg">
//               <CardContent className="p-0 h-full relative group">
//                 <img
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   alt={service.title}
//                   src={service.image}
//                 />
                
//                 {/* Gradient Overlay for Text Visibility */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
//                   <h4 className="font-bold text-white text-xs mb-1">
//                     {service.title}
//                   </h4>
//                   <p className="text-white/80 text-[10px] leading-tight mb-3">
//                     Building The Complete Far House In Large Scale
//                   </p>
                  
//                   <div className="flex gap-2">
//                     <Button variant="ghost" className="h-7 px-3 bg-[#d9d9d954] hover:bg-[#d9d9d970] text-white text-[10px] rounded-full border border-white/20">
//                       View
//                     </Button>
//                     <Button className="h-7 flex-1 bg-white hover:bg-gray-100 text-black text-[10px] rounded-full">
//                       Book Now
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
