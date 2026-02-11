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

export const ProductShowcaseSection = (): JSX.Element => {
  return (
    // Changed py-20 to py-12 to fit "one frame" better, and w-full
    <section id="service-showcase" className="w-full bg-white py-[1px] relative overflow-hidden">
      {/* Container removed or set to max-w-none to eliminate side gaps */}
      <div className="w-full px-0"> 
      
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="font-inter font-bold text-[#ff860e] text-xl mb-2">
            Service Category
          </p>
          <h2 className="font-inter font-bold text-black text-[40px]">
            Service That We Provide
          </h2>
        </div>

        {/* Hero Area - Now Edge to Edge */}
        <div className="relative w-full min-h-[750px] mb-10">
          <img
            className="absolute inset-0 w-full h-[800px] object-cover opacity-80"
            alt="Farm background"
            src="/image-348p.png"
          />

          {/* SVG Overlay - Scaled to width */}
          <div className="absolute top-[-9px] left-0 w-full flex justify-center z-10">
            <div className="relative w-full max-w-[1109px]">
               <img
                className="w-full h-[150px]"
                alt="Rectangle overlay"
                src="/rectangle-483.svg"
              />
              {/* Tabs centered inside the SVG area */}
              <div className="absolute inset-0 top-9 flex justify-center items-start px-4">
                <Tabs defaultValue="farm-management" className="w-full max-w-[922px]">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto p-3">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="h-[60px] rounded-[10px] border border-solid data-[state=active]:bg-white data-[state=active]:border-[#2874f0] data-[state=inactive]:bg-[#c4d1d48f] data-[state=inactive]:border-[#999999] font-inter font-medium text-black text-lg md:text-xl shadow-sm"
                      >
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Services List Section - Inside Hero Area */}
          <div className="relative z-32 pt-[320px] px-6 md:px-12 lg:px-20 flex flex-col items-center">
            <div className="mb-10 w-full max-w-6xl">
              <h3 className="font-inter font-semibold text-white  text-3xl text-center border-l-4 border-[#ff860e] pl-4 drop-shadow-lg inline-block">
                List Of Farm Maintenance Service
              </h3>
            </div>

            {/* Grid optimized for full width - centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="relative w-full h-[280px] bg-[#f9fef8] rounded-[15px] overflow-hidden shadow-lg border-0 group"
                >
                  <CardContent className="p-0 relative w-full h-full">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={service.title}
                      src={service.image}
                    />

                    {/* Gradient & Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-5">
                      <h4 className="font-inter font-semibold text-white text-lg mb-1">
                        {service.title}
                      </h4>
                      <p className="font-inter font-normal text-[#ececec] text-xs mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          className="h-9 px-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full font-inter font-medium text-white text-xs border border-white/30"
                        >
                          View
                        </Button>
                        <Button
                          variant="default"
                          className="h-9 flex-1 bg-white hover:bg-gray-100 rounded-full font-inter font-medium text-black text-xs"
                        >
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
