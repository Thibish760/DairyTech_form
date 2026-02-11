import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { ProductShowcaseSection } from "./sections/ServiceCategorySection/ServiceCategorySection";
import { ServiceCategorySection } from "./sections/ProductShowcaseSection/ProductShowcaseSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";

export const DesktopScreen = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col">
      <HeroSection />
      <ServiceOverviewSection />
      <ProductShowcaseSection />
      <ServiceCategorySection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};
