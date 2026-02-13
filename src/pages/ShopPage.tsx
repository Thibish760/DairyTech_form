// import { useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: string;
//   image: string;
//   description: string;
//   title?: string;
//   imageClasses?: string;
//   titleClasses?: string;
//   priceExtra?: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 2,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 3,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 4,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 5,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 6,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
// ];

// const categories = [
//   { name: "Milking Machine", count: 12 },
//   { name: "Milk Tanks", count: 8 },
//   { name: "Pump", count: 5 },
//   { name: "Motor", count: 15 },
//   { name: "Milking Machine", count: 12 },
//   { name: "Milk Tanks", count: 8 },
//   { name: "Pump", count: 5 },
//   { name: "Motor", count: 15 }, 
// ];

// export const ShopPage = (): JSX.Element => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("Motor Category");

//   return (
//     <div className="bg-white w-full min-h-screen flex flex-col">
//       {/* show only the navbar from the homepage hero */}
//       <HeroSection showOnlyNav />

//       {/* Hero Banner */}
//       <div className="w-full h-64 md:h-80 bg-cover bg-center" 
//            style={{ backgroundImage: "url('/farm-banner.jpg')" }}>
//         <div className="w-full h-full bg-black/30 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white">Our Products</h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 py-8 md:py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="w-full lg:w-64">
//             {/* Search */}
//             <div className="mb-8">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             {/* Product Collection */}
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold mb-4">Product Collection</h3>
//               <div className="space-y-3">
//                 {categories.map((category) => (
//                   <label key={category.name} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={selectedCategory === category.name}
//                       onChange={() => setSelectedCategory(category.name)}
//                       className="w-4 h-4"
//                     />
//                     <span className="text-sm">{category.name}</span>
//                     <span className="text-xs text-gray-500 ml-auto">{category.count}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>


//             {/* Filter Button */}
//             <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
//               Show less
//             </button>
//           </div>

//           {/* Products Grid */}
//           <div className="flex-1">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-2xl font-semibold">Motor Category</h2>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
//                   Filter +sort
//                 </button>
//               </div>
//             </div>

//               {/* Products */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-9 max-w-[100%] px-3 sm:px-4 md:px-6 mx-auto">
//                 {products.map((product, index) => (
//                   <Card
//                     key={index}
//                     className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
//                   >
//                     <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
//                       <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
//                         <img
//                           className="w-full h-full object-cover"
//                           alt={product.name}
//                           src={product.image}
//                         />
//                       </div>
  
//                       <h3 className="text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px] font-semibold">
//                         {product.name}
//                       </h3>
  
//                       <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
//                         {product.description}
//                       </p>
  
//                       <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
//                         <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
//                           {product.price}
//                         </div>
  
//                         <Button className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8">
//                           Order Now
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//       {/* Footer */}
//       <FooterSection />
//     </div>
//   );
// };
import { useState } from "react";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  title?: string;
  imageClasses?: string;
  titleClasses?: string;
  priceExtra?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "MOLIN PAD PACK",
    category: "Motor Category",
    price: "$299",
    image: "/motor-1.png",
    description: "High-quality motor pack",
  },
  {
    id: 2,
    name: "MOLIN PAD PACK",
    category: "Motor Category",
    price: "$299",
    image: "/motor-1.png",
    description: "High-quality motor pack",
  },
  {
    id: 3,
    name: "MOLIN PAD PACK",
    category: "Motor Category",
    price: "$299",
    image: "/motor-1.png",
    description: "High-quality motor pack",
  },
  {
    id: 4,
    name: "MOLIN PAD PACK",
    category: "Motor Category",
    price: "$299",
    image: "/motor-1.png",
    description: "High-quality motor pack",
  },
  {
    id: 5,
    name: "MOLIN PAD PACK",
    category: "Motor Category",
    price: "$299",
    image: "/motor-1.png",
    description: "High-quality motor pack",
  },
  {
    id: 6,
    name: "MOLIN PAD PACK",
    category: "Motor Category",
    price: "$299",
    image: "/motor-1.png",
    description: "High-quality motor pack",
  },
];

const categories = [
  { name: "Milking Machine", count: 12 },
  { name: "Milk Tanks", count: 8 },
  { name: "Pump", count: 5 },
  { name: "Motor", count: 15 },
  { name: "Milking Machine", count: 12 },
  { name: "Milk Tanks", count: 8 },
  { name: "Pump", count: 5 },
  { name: "Motor", count: 15 }, 
];

export const ShopPage = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Motor Category");

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      {/* show only the navbar from the homepage hero */}
      <HeroSection showOnlyNav />

      {/* Hero Banner */}
      <div className="w-full h-full max-w-[1400px] max-h-[2000px] mx-auto rounded-[11px] md:h-80 bg-cover bg-center" 
           style={{ backgroundImage: "url('/farm-banner.png')" }}>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64">
            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Product Collection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Product Collection</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label key={category.name} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategory === category.name}
                      onChange={() => setSelectedCategory(category.name)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{category.name}</span>
                    <span className="text-xs text-gray-500 ml-auto">{category.count}</span>
                  </label>
                ))}
              </div>
            </div>


            {/* Filter Button */}
            <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
              Show less
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Motor Category</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Filter +sort
                </button>
              </div>
            </div>

              {/* Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-9 max-w-[100%] px-3 sm:px-4 md:px-6 mx-auto">
                {products.map((product, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
                  >
                    <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
                      <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
                        <img
                          className="w-full h-full object-cover"
                          alt={product.name}
                          src={product.image}
                        />
                      </div>
  
                      <h3 className="text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px] font-semibold">
                        {product.name}
                      </h3>
  
                      <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
                        {product.description}
                      </p>
  
                      <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
                        <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
                          {product.price}
                        </div>
  
                        <Button className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8">
                          Order Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};