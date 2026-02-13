import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { GallerySection } from "../screens/DesktopScreen/sections/GallerySection";
import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
import { ProductShowcaseSection } from "../screens/DesktopScreen/sections/ProductShowcaseSection/ProductShowcaseSection";
import { ServiceCategorySection } from "../screens/DesktopScreen/sections/ServiceCategorySection/ServiceCategorySection";
import { WhyChooseFarm } from "./WhyChooseFarm";

export const HomePage = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    const state: any = (location && (location as any).state) || {};
    const scrollTo = state?.scrollTo;
    if (scrollTo) {
      // small delay to allow DOM to mount
      setTimeout(() => {
        if (scrollTo === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(scrollTo);
          el?.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);

      // clear history state so repeated navigation doesn't re-trigger
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <div className="bg-white overflow-hidden w-full flex flex-col min-h-screen">
      <HeroSection />
      <WhyChooseFarm />
      <ServiceCategorySection />
      <ProductShowcaseSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};
