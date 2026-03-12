import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { FooterSection } from "../FooterSection";
import { HeroSection } from "../HeroSection";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { services, type Service } from "../../../../lib/services";
import { Navbar } from "../../../../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

const ServiceView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service as Service;

  const [mainImage, setMainImage] = useState(service?.image || 'https://via.placeholder.com/400x400');
  const [tab, setTab] = useState<"features" | "specs" | "apps">("features");

  // Thumbnails matching the layout
  const thumbs = [service?.image || 'https://via.placeholder.com/80', 'https://via.placeholder.com/80/eee', 'https://via.placeholder.com/80/ddd'];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeroSection showOnlyNav />
        <div className="max-w-3xl mx-auto p-8">Service not found.</div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-6" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>

      {/* Navigation */}
      <Navbar showOnlyNav />

      <main className="max-w-[1200px] mx-auto w-full px-6 py-12">
        {/* TOP SERVICE SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE BLOCK: Circular styling from image */}
          <div className="flex flex-col items-center">
            <div className="relative">
                <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-[6px] border-gray-50 shadow-xl">
                <img
                    src={mainImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                </div>
                {/* Decorative curve line from the original design */}
                {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 border-b border-gray-300 rounded-[50%]"></div>
                <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-3 h-3 bg-lime-500 rounded-full border-2 border-white"></div> */}
            </div>

            <div className="flex gap-4 mt-12">
              {/* {thumbs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(t)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${mainImage === t ? 'border-lime-500 scale-105' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={t} className="w-full h-full object-cover" />
                </button>
              ))} */}
            </div>
          </div>

          {/* RIGHT SERVICE INFO */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">{service.category}</p>
            <h1 className="text-4xl font-extrabold mt-2 text-gray-900 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg font-medium text-gray-600 mt-2 italic">
              {service.subtitle}
            </p>

            <div className="text-3xl font-black mt-6 text-gray-900">
              {service.price}
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed text-base max-w-[500px]">
              {service.description}
            </p>

            {/* EXPERT GUIDANCE BOX */}
            <div className="mt-36   flex justify-between items-center ">
              <p className="text-sm text-gray-700 font-semibold leading-snug">
                Share Your Requirements And Get<br />Expert Guidance Today.
              </p>
              <Button 
                onClick={() => navigate('/enquiry', { state: { service } })}
                className="bg-[#8cc63f] hover:bg-[#043b66] text-white px-10 py-6 rounded-md text-xl font-bold transition-colors cursor-pointer">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="mt-24">
          <div className="flex gap-8 text-sm border-b pb-2">
            {["features", "specs", "apps"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as any)}
                className={`pb-2 ${
                  tab === t
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

          <div className="bg-[#f0f4f7] mt-8 p-10 rounded-xl border border-gray-100">
            {tab === "features" && (
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {service.keyFeatures?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
                        <span className="text-black text-xl leading-none">•</span>
                        {item}
                    </li>
                ))}
              </ul>
            )}
            {tab === "specs" && (
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {service.specifications?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
                        <span className="text-black text-xl leading-none">•</span>
                        {item}
                    </li>
                ))}
              </ul>
            )}
            {tab === "apps" && (
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {service.applications?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
                        <span className="text-black text-xl leading-none">•</span>
                        {item}
                    </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* SIMILAR PRODUCTS */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">
            View Similar Products
          </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[1300px] mx-auto px-2 sm:px-4 pb-0 py-2 sm:py-3 md:py-5">
              {services.map((service) => (
 

                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
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

            </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default ServiceView;