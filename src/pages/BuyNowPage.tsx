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
import { useSearchParams, useNavigate } from "react-router-dom";
import { products, type Product } from "../lib/products";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const BuyNowPage = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const productId = Number(searchParams.get("id"));
  const product = products.find((p) => p.id === productId) as Product | undefined;

  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState<string | null>(null);
  const [tab, setTab] = useState<"features" | "specs" | "apps">("features");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeroSection showOnlyNav />
        <div className="max-w-3xl mx-auto p-8">
          Product not found.
          <Button onClick={() => navigate("/shop")}>Back to shop</Button>
        </div>
        <FooterSection />
      </div>
    );
  }

  const thumbs = [product.image, "/motor-1.png", "/motor-1.png"];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <HeroSection showOnlyNav />

      {/* MAIN WRAPPER */}
      <main className="max-w-[1100px] mx-auto w-full px-6 py-10">

        {/* TOP PRODUCT SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE BLOCK */}
          <div className="flex flex-col items-center">

            <img
              src={activeThumb || product.image}
              alt={product.name}
              className="w-[260px] h-[180px] object-contain"
            />

            {/* thumbnails */}
            <div className="flex gap-4 mt-6">
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(t)}
                  className="w-16 h-12 border rounded-md flex items-center justify-center bg-white hover:border-black"
                >
                  <img src={t} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PRODUCT INFO */}
          <div>

            <p className="text-sm text-gray-500">{product.category}</p>

            <h1 className="text-2xl font-bold mt-1">
              {product.name}
            </h1>

            <p className="text-sm text-gray-600 mt-1">
              {product.subtitle || "Belt Drive Model | 2 Bucket Capacity"}
            </p>

            <div className="text-2xl font-extrabold mt-4">
              {product.price}
            </div>

            <p className="text-gray-700 mt-4 leading-relaxed text-sm max-w-[500px]">
              {product.description}
            </p>

            {/* QUANTITY + BUY */}
            <div className="flex items-center gap-4 mt-6">

              <span className="text-sm font-medium">
                NUMBER OF PRODUCT:
              </span>

              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Number(e.target.value)))
                }
                className="w-16 border px-2 py-1 rounded"
              />

              <Button
                onClick={() => navigate('/enquiry', { state: { service: product } })}
                className="ml-6 bg-[#8dc63f] text-black font-semibold px-8 cursor-pointer">
                Let's Talk
              </Button>
            </div>

          </div>
        </div>

        {/* TABS */}
        <div className="mt-10">

          <div className="flex gap-8 text-sm border-b pb-2">
            {["features", "specs", "apps"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as any)}
                className={`pb-2 ${tab === t
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500"
                  }`}
              >
                {t === "features" && "Key Features Section"}
                {t === "specs" && "Specifications Section"}
                {t === "apps" && "Applications Section"}
              </button>
            ))}
          </div>

          <div className="bg-[#e6ecef] mt-4 p-6 rounded-md text-sm">
            {tab === "features" && (
              <ul className="list-disc pl-6 space-y-1">
                {product.keyFeatures?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
            {tab === "specs" && (
              <ul className="list-disc pl-6 space-y-1">
                {product.specifications?.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            )}
            {tab === "apps" && (
              <ul className="list-disc pl-6 space-y-1">
                {product.applications?.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* SIMILAR PRODUCTS */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold mb-4">
            View Similar Products
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p, index) => (
                <Card
                  key={p.id}
                  className="bg-white rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
                >
                  <CardContent className="p-[13px] flex flex-col h-full">

                    {/* IMAGE BOX */}
                    <div className="w-full h-[200px] flex bg-[#c4d1d48f] rounded-[10px] overflow-hidden mb-5 items-center justify-center">
                      <img
                        className="max-h-full object-contain"
                        src={p.image}
                        alt={p.name}
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="font-semibold text-black text-base text-center mb-1">
                      {p.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="font-medium text-[#322e2e] text-xs line-clamp-2 mb-auto">
                      {p.description}
                    </p>

                    {/* PRICE + BUTTON */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="font-bold text-black text-base">
                        {p.price}
                      </div>

                      <Button 
                        onClick={() => {
                          window.scrollTo(0, 0);
                          navigate(`/buy?id=${p.id}`);
                        }}
                        className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8 cursor-pointer">
                        View
                      </Button>
                    </div>

                  </CardContent>
                </Card>
              ))}
          </div>
        </div>


      </main>

      <FooterSection />
    </div>
  );
};

export default BuyNowPage;
