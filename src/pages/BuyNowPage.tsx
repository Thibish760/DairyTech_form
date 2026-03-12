// import { useState } from "react";
// import { useSearchParams, useNavigate, Link } from "react-router-dom";
// import { products, type Product } from "../lib/products";
// import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
// import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
// import { Button } from "../components/ui/button";

// function parsePrice(priceStr: string) {
//   const n = priceStr.replace(/[^0-9.]/g, "");
//   return Number(n) || 0;
// }

// export const BuyNowPage = (): JSX.Element => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const idParam = searchParams.get("id");
//   const productId = idParam ? Number(idParam) : null;
//   const product = products.find((p) => p.id === productId) as Product | undefined;

//   const [qty, setQty] = useState<number>(1);
//   const [activeThumb, setActiveThumb] = useState<string | null>(null);
//   const [tab, setTab] = useState<"features" | "specs" | "apps">("features");

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <HeroSection showOnlyNav />
//         <div className="max-w-3xl mx-auto p-8">Product not found. <Button onClick={() => navigate('/shop')}>Back to shop</Button></div>
//         <FooterSection />
//       </div>
//     );
//   }

//   const unit = parsePrice(product.price);
//   const total = unit * Math.max(1, qty);

//   const thumbs = [product.image, "/motor-1.png", "/motor-1.png"];

//   return (
//     <div className="bg-white w-full min-h-screen flex flex-col">
//       <HeroSection showOnlyNav />

//       <main className="max-w-[1150px] mx-auto w-full px-6 py-10">
//         <div className="flex flex-col md:flex-row gap-6 items-start">
//           {/* Left small image area */}
//           <div className="md:w-1/3 flex flex-col items-center md:items-start gap-4">
//             <img src={activeThumb || product.image} alt={product.name} className="w-40 h-28 object-contain" />

//             <div className="w-full flex gap-3 mt-2">
//               {thumbs.map((t, i) => (
//                 <button key={i} onClick={() => setActiveThumb(t)} className="w-12 h-12 rounded border flex items-center justify-center bg-white">
//                   <img src={t} alt={`thumb-${i}`} className="w-full h-full object-cover rounded" />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right content matching design */}
//           <div className="md:w-2/3 flex flex-col gap-3">
//             <div className="text-sm text-gray-500">Motor</div>
//             <div className="text-xl font-bold">450 LPM Vacuum Pump</div>
//             <div className="text-sm text-gray-600">Belt Drive Model | 2 Bucket Capacity</div>

//             <div className="text-2xl font-extrabold text-black mt-2">₹7,000+ GST</div>

//             <p className="text-gray-700 mt-3 leading-relaxed">Comes With A Reliable Pulsator System, Durable Liners, And 240 CC Claw For Smooth Milking. Ideal For Small To Medium Dairy Farms, Ensuring Comfort For Animals And Better Milk Flow</p>

//             <div className="flex items-center gap-4 mt-4">
//               <label className="text-sm font-medium">NUMBER OF PRODUCT:</label>
//               <input
//                 aria-label="quantity"
//                 type="number"
//                 min={1}
//                 value={qty}
//                 onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
//                 className="w-16 border px-2 py-1 rounded text-sm"
//               />

//               <div className="ml-auto">
//                 <Button onClick={() => alert(`Proceed to checkout for ${qty} x ${product.name}`)} className="bg-[#8dc63f] text-black px-6 py-2">Buy Now</Button>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="mt-6">
//               <div className="flex gap-6 text-sm">
//                 <button className={`pb-2 ${tab==='features' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-600'}`} onClick={()=>setTab('features')}>Key Features Section</button>
//                 <button className={`pb-2 ${tab==='specs' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-600'}`} onClick={()=>setTab('specs')}>Specifications Section</button>
//                 <button className={`pb-2 ${tab==='apps' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-600'}`} onClick={()=>setTab('apps')}>Applications Section</button>
//               </div>

//               <div className="mt-4 bg-[#e9eef0] p-4 rounded">
//                 {tab==='features' && (
//                   <ul className="list-disc pl-5 text-sm text-[#333]">
//                     <li>High Suction Capacity – 450 LPM</li>
//                     <li>Belt Drive Model For Stable Operation</li>
//                     <li>2 Bucket Milking Capacity</li>
//                     <li>Rust-Resistant Durable Body</li>
//                     <li>Built-In Thermal Protection</li>
//                     <li>Low Maintenance & Long Service Life</li>
//                     <li>Ideal For Dairy & Agricultural Use</li>
//                   </ul>
//                 )}
//                 {tab==='specs' && (
//                   <div className="text-sm text-gray-700">Specifications content placeholder.</div>
//                 )}
//                 {tab==='apps' && (
//                   <div className="text-sm text-gray-700">Applications content placeholder.</div>
//                 )}
//               </div>
//             </div>

//             {/* Similar products section */}
//             <div className="mt-8">
//               <h3 className="text-sm font-semibold mb-3">View Similar Products</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {products.filter(p=>p.id!==product.id).slice(0,4).map((p)=> (
//                   <div key={p.id} className="border rounded p-3 bg-white">
//                     <img src={p.image} className="w-full h-24 object-cover rounded mb-2" alt={p.name} />
//                     <div className="text-xs font-semibold">{p.name}</div>
//                     <div className="text-xs text-gray-500 mb-2">{p.description}</div>
//                     <div className="flex items-center justify-between">
//                       <div className="font-bold text-sm">{p.price}</div>
//                       <Link to={`/buy?id=${p.id}`} className="text-xs bg-[#032a4a] text-white px-2 py-1 rounded">Order Now</Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       <FooterSection />
//     </div>
//   );
// };

// export default BuyNowPage;
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { products, type Product } from "../lib/products";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export const BuyNowPage = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]); // Re-run when product ID changes

  const productId = Number(searchParams.get("id"));
  const product = products.find((p) => p.id === productId) as Product | undefined;

  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState<string | null>(null);
  const [tab, setTab] = useState<"features" | "specs" | "apps">("features");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeroSection showOnlyNav />
        <div className="max-w-3xl mx-auto p-8 text-center">
          <p className="mb-4">Product not found.</p>
          <Button onClick={() => navigate("/shop")}>Back to shop</Button>
        </div>
        <FooterSection />
      </div>
    );
  }

  const thumbs = [product.image, "/motor-1.png", "/motor-1.png"];

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Navbar showOnlyNav />

      <main className="max-w-[1100px] mx-auto w-full px-6 py-10">
        {/* TOP PRODUCT SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT IMAGE BLOCK */}
          <div className="flex flex-col items-center">
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={activeThumb || product.image}
              src={activeThumb || product.image}
              alt={product.name}
              className="w-[300px] h-[220px] object-contain mix-blend-multiply"
            />

            <div className="flex gap-4 mt-8">
              {/* {thumbs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(t)}
                  className={`w-20 h-16 border-2 rounded-xl flex items-center justify-center transition-all ${
                    (activeThumb || product.image) === t ? "border-[#032a4a]" : "border-gray-100 hover:border-gray-300"
                  }`}
                >
                  <img src={t} className="w-full h-full object-contain p-2 mix-blend-multiply" />
                </button>
              ))} */}
            </div>
          </div>

          {/* RIGHT PRODUCT INFO */}
          <div>
            <p className="text-xs font-bold text-[#032a4a] uppercase tracking-widest">{product.category}</p>
            <h1 className="text-3xl font-bold mt-2 text-[#032a4a]">{product.name}</h1>
            <p className="text-sm text-gray-500 mt-2">
              {product.subtitle || "Belt Drive Model | 2 Bucket Capacity"}
            </p>
            <div className="text-3xl font-extrabold mt-6 text-[#032a4a]">{product.price}</div>
            <p className="text-gray-600 mt-6 leading-relaxed text-sm max-w-[500px]">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mt-10">

              <Button
                onClick={() => navigate('/enquiry', { state: { service: product } })}
                className="bg-[#8dc63f] hover:bg-[#043b66] text-white font-bold px-10 h-12 rounded-xl shadow-lg shadow-green-200 transition-all active:scale-95"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="mt-16">
          <div className="flex gap-8 border-b border-gray-100">
            {(["features", "specs", "apps"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-4 text-sm font-bold transition-all relative ${
                  tab === t ? "text-[#032a4a]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {t === "features" && "Key Features"}
                {t === "specs" && "Specifications"}
                {t === "apps" && "Applications"}
                {tab === t && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#032a4a]" />
                )}
              </button>
            ))}
          </div>

          <div className="bg-gray-50/50 mt-6 p-8 rounded-2xl text-sm text-gray-600 leading-relaxed border border-gray-50">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 list-none">
              {(tab === "features" ? product.keyFeatures : tab === "specs" ? product.specifications : product.applications)?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#8dc63f] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SIMILAR PRODUCTS - UPDATED DESIGN */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-[#032a4a] mb-8">View Similar Products</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((p, index) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="group bg-white rounded-2xl overflow-hidden border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(3,42,74,0.12)] transition-all duration-500 h-[24rem] w-[16rem] flex flex-col">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative w-full h-48 bg-white overflow-hidden">
                          <img
                            className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                            alt={p.name}
                            src={p.image}
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#032a4a] uppercase tracking-wider shadow-sm">
                            {p.category}
                          </div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="font-bold text-[#032a4a] text-base mb-1 line-clamp-1 group-hover:text-[#8dc63f] transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                            {p.description}
                          </p>

                          <div className="mt-auto pt-4 border-t border-gray-170 flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Price</span>
                              <span className="font-extrabold text-[#032a4a] text-lg">{p.price}</span>
                            </div>
                            <Link to={`/buy?id=${p.id}`}>
                              <Button className="bg-[#8dc63f]  hover:bg-[#043b66] text-white font-bold rounded-xl px-5 h-9 w-[100px] text-xs transition-all active:scale-95">
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
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default BuyNowPage;