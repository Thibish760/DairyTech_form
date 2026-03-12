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


import { useState, useMemo, useEffect } from "react";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { products } from "../lib/products";
import { ChevronDownIcon } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export const ShopPage = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("none");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 1. Get unique categories and their counts
  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    products.forEach((product) => {
      categoryMap.set(product.category, (categoryMap.get(product.category) || 0) + 1);
    });
    return Array.from(categoryMap.entries()).map(([name, count]) => ({
      name,
      count,
    }));
  }, []);

  // 2. Combined Filter AND Sort logic (Fixes variable shadowing/let errors)
  const filteredProducts = useMemo(() => {
    // Start with filtering
    let result = products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Apply sorting to the filtered result
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return priceA - priceB;
      });
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return priceB - priceA;
      });
    } else if (sortBy === "Name: A to Z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchTerm, sortBy]);

  const displayCategory = selectedCategory || "All Products";

  return (
    <div className="bg-white py-3 w-full min-h-screen flex flex-col">
      {/* show only the navbar from the homepage hero */}

      <Navbar  />

      {/* Hero Banner */}
      <div className="w-full h-full  max-w-[1400px] max-h-[2000px] mx-auto rounded-[11px] md:h-80 bg-cover bg-center" 
           style={{ backgroundImage: "url('/farm-banner.png')" }}>
      </div>

      <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-[350px] lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Search</h3>
              <input
                type="text"
                placeholder="Find a product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#032a4a] outline-none transition-all mb-8"
              />

              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === null ? "bg-[#032a4a] text-white" : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <span>All Products</span>
                  <span className="opacity-60">{products.length}</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === cat.name ? "bg-[#032a4a] text-white" : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="opacity-60">{cat.count}</span>
                  </button>
                ))}
              </div>

              {(selectedCategory || searchTerm) && (
                <button 
                  onClick={() => { setSelectedCategory(null); setSearchTerm(""); }}
                  className="w-full mt-6 bg-gray-100 text-gray-500 py-3 rounded-xl font-bold hover:bg-red-50 hover:text-red-500 transition-all"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Section */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#032a4a]">
                {displayCategory} <span className="text-gray-400 font-normal ml-2">({filteredProducts.length})</span>
              </h2>
              
              <div className="relative">
                <button 
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="px-5 py-2.5 text-sm font-semibold border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2 bg-white"
                >
                  <span>Sort: {sortBy === "none" ? "Default" : sortBy}</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
                    {["none", "Price: Low to High", "Price: High to Low", "Name: A to Z"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSortBy(opt); setShowSortDropdown(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${sortBy === opt ? "text-[#032a4a] font-bold" : "text-gray-600"}`}
                      >
                        {opt === "none" ? "Default" : opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <motion.div layout className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
  <motion.div
    key={product.id}
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    {/* Removed fixed h-[200rem] which was causing layout issues */}
    <Card className="group bg-white rounded-2xl overflow-hidden border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(3,42,74,0.12)] transition-all duration-500 h-[26rem] flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        
        {/* Changed bg-[#f8fafb] to bg-white to remove the gray box background */}
        <div className="relative w-full h-64 bg-white overflow-hidden">
          <img
            className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
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
          
          <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                Price
              </span>
              <span className="font-extrabold text-[#032a4a] text-xl">
                {product.price}
              </span>
            </div>
            <Link to={`/buy?id=${product.id}`}>
              <Button className="flex-1 h-10 bg-[#8dc63f] w-[100px] hover:brightness-110 text-white text-sm font-medium rounded-lg">
                View
              </Button>
              
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};