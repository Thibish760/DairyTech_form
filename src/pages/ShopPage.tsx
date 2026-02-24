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


import { useState, useMemo } from "react";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { products } from "../lib/products";
import { ChevronDownIcon } from "lucide-react";
import { Navbar } from "../components/Navbar";

export const ShopPage = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("none");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Get unique categories and their counts
  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    products.forEach((product) => {
      categoryMap.set(product.category, (categoryMap.get(product.category) || 0) + 1);
    });
    return Array.from(categoryMap.entries()).map(([name, count]) => ({
      name,
      count
    }));
  }, []);

  // Filter products based on selected category and search term
  let filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Sort products based on sortBy
  filteredProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (sortBy === "Price: Low to High") {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return priceA - priceB;
      });
    } else if (sortBy === "Price: High to Low") {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return priceB - priceA;
      });
    } else if (sortBy === "Name: A to Z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  const displayCategory = selectedCategory || "All Products";

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      {/* show only the navbar from the homepage hero */}
      <Navbar showOnlyNav />

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Product Collection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Product Collection</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === null}
                    onChange={() => setSelectedCategory(null)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">All Products</span>
                  <span className="text-xs text-gray-500 ml-auto">{products.length}</span>
                </label>

                {categories.map((category) => (
                  <label key={category.name} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
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

            {/* Clear Filter Button */}
            {(selectedCategory || searchTerm) && (
              <button 
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm("");
                }}
                className="w-full bg-gray-400 text-white py-2 rounded-lg font-semibold hover:bg-gray-500 transition"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">{displayCategory} ({filteredProducts.length})</h2>
              <div className="relative">
                <button 
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 bg-gray-50"
                >
                  <span>Sort: {sortBy === "none" ? "none" : sortBy}</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Sort Dropdown */}
                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        setSortBy("none");
                        setShowSortDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 ${sortBy === "none" ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-50"}`}
                    >
                      None
                    </button>
                    <button
                      onClick={() => {
                        setSortBy("Price: Low to High");
                        setShowSortDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 ${sortBy === "Price: Low to High" ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-50"}`}
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => {
                        setSortBy("Price: High to Low");
                        setShowSortDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 ${sortBy === "Price: High to Low" ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-50"}`}
                    >
                      Price: High to Low
                    </button>
                    <button
                      onClick={() => {
                        setSortBy("Name: A to Z");
                        setShowSortDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 ${sortBy === "Name: A to Z" ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-50"}`}
                    >
                      Name: A to Z
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-9 max-w-[100%] px-3 sm:px-4 md:px-6 mx-auto">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
                  >
                    <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
                      <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
                        <img
                          className="w-full h-full object-contain"
                          alt={product.name}
                          src={product.image}
                        />
                      </div>
  
                      <h3 className="text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px] font-semibold text-center">
                        {product.name}
                      </h3>
  
                      <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
                        {product.description}
                      </p>
  
                      <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
                        <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
                          {product.price}
                        </div>
  
                        <Link to={`/buy?id=${product.id}`}>
                          <Button className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8">
                            View
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
          </div>
        </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};