import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { FooterSection } from "../FooterSection";
import { HeroSection } from "../HeroSection";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { services, type Service } from "../../../../lib/services";

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
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <HeroSection showOnlyNav />

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
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(t)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${mainImage === t ? 'border-lime-500 scale-105' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={t} className="w-full h-full object-cover" />
                </button>
              ))}
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
                className="bg-[#8cc63f] hover:bg-lime-600 text-white px-10 py-6 rounded-md text-xl font-bold transition-colors cursor-pointer">
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
                        <Button 
                          onClick={() => {
                            window.scrollTo(0, 0);
                            navigate('/service', { state: { service } });
                          }}
                          variant="ghost" 
                          className="h-6 sm:h-8 md:h-9 px-2 sm:px-3 md:px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-[9px] sm:text-[10px] md:text-xs border border-white/20">
                          View
                        </Button>
                        <Button 
                          onClick={() => navigate('/enquiry', { state: { service } })}
                        className="h-6 sm:h-8 md:h-9 flex-1 bg-white hover:bg-gray-100 rounded-full text-black text-[9px] sm:text-[10px] md:text-xs font-bold cursor-pointer">
                          Let's Talk
                        </Button>
                      </div>
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

export default ServiceView;