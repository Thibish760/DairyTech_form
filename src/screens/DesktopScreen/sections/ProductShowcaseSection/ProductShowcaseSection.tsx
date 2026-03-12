// import { ChevronRightIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { products } from "../../../../lib/products";

// export const ProductShowcaseSection = (): JSX.Element => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);


//   return (
//     <section id="shop" className="w-full py-8 sm:py-12 md:py-16 bg-[#c4d1d4] relative mt-0">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex items-center justify-between mb-6 sm:mb-9 md:mb-12">
//           <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg sm:text-2xl md:text-3xl tracking-[0] leading-[normal]">
//             Product
//           </h2>
//           <button onClick={() => navigate('/shop')} className="p-2 sm:p-3 md:p-4 bg-[#032a4a] hover:bg-[#032a4a]/80 rounded-full transition-all duration-300 flex items-center justify-center flex-shrink-0">
//             <ChevronRightIcon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">          {products.slice(0, 3).map((product) => (
//             <Card
//               key={product.id}
//               className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
//             >
//               <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
//                 <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
//                   <img
//                     className="w-full h-full object-contain"
//                     alt={product.name}
//                     src={product.image}
//                   />
//                 </div>

//                 <h3 className="text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px] font-semibold text-center">
//                   {product.name}
//                 </h3>

//                 <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
//                   {product.description}
//                 </p>

//                 <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
//                   <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
//                     {product.price}
//                   </div>

//                   <Button 
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       navigate(`/buy?id=${product.id}`);
//                     }} 
//                     className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8 cursor-pointer">
//                     View
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { ChevronRightIcon } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Added useLocation for the useEffect dependency
import { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { products } from "../../../../lib/products";
import { motion } from "framer-motion";

export const ProductShowcaseSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section id="shop" className="w-full bg--white relative overflow-hidden">
      <div className="">
        
        {/* Header Section */}
        <div className="flex items-center mt-10 justify-between mb-8 sm:mb-10 md:mb-14">
          <div className="flex  gap-1">
            <div className="h-9  w-1 ml-20 mb-17  bg-[#8dc63f] rounded-full" />
            <h2 className="font-inter  ml-2 font-bold text-[#032a4a] text-xl sm:text-3xl md:text-4xl tracking-tight">
              Featured Products
            </h2>
          
          
          <button 
            onClick={() => navigate('/shop')} 
            className="group p-2 sm:p-3 ml-[60rem] md:p-4 bg-[#8dc63f] hover:bg-[#043b66] rounded-full transition-all duration-300 shadow-lg hover:shadow-[#032a4a]/40 active:scale-95"
          >
            <ChevronRightIcon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white transition-transform group-hover:translate-x-1" />
          </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-10 md:gap-12 w-full max-w-[1300px] mx-auto px-2 sm:px-4 pb-0 py-2 sm:py-3 md:py-5">
          {products.slice(0, 4).map((product, index) => (
    <motion.div
      key={product.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {/* Removed fixed h-[200rem] which was causing layout issues */}
      <Card className="group bg-white rounded-2xl overflow-hidden border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(3,42,74,0.12)] transition-all duration-500 h-[26rem] w-[20rem] gap-4 flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          
          {/* Changed bg-[#f8fafb] to bg-white to remove the gray box background */}
          <div className="relative w-full h-64 bg-white overflow-hidden">
            <img
              className="w-full h-full mt-8 object-contain p-8 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
              alt={product.name}
              src={product.image}
            />
            {/* Badge remains with a slight blur for contrast */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#032a4a] uppercase tracking-wider shadow-sm">
              {product.category}
            </div>
          </div>
  
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-[#032a4a] text-lg mb-2 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
              {product.description}
            </p>
            
            <div className="mt-auto pt-5 border-t border-gray flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                  Price
                </span>
                <span className="font-extrabold text-[#032a4a] text-xl">
                  {product.price}
                </span>
              </div>
              <Link to={`/buy?id=${product.id}`}>
                <Button className="flex-1 h-8 bg-[#8dc63f] w-[100px] hover:brightness-110 text-white text-sm font-medium rounded-lg">
                  View
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};