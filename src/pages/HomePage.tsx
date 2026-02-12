import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { GallerySection } from "../screens/DesktopScreen/sections/GallerySection";
import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
import { ProductShowcaseSection } from "../screens/DesktopScreen/sections/ProductShowcaseSection/ProductShowcaseSection";
import { ServiceCategorySection } from "../screens/DesktopScreen/sections/ServiceCategorySection/ServiceCategorySection";
import { ServiceOverviewSection } from "../screens/DesktopScreen/sections/ServiceOverviewSection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col min-h-screen">
      <HeroSection />
      <ServiceOverviewSection />
      <ProductShowcaseSection />
      <ServiceCategorySection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};
