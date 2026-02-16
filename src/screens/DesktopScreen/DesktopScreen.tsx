import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection/ProductShowcaseSection";
import { ServiceCategorySection } from "./sections/ServiceCategorySection/ServiceCategorySection";


export const DesktopScreen = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col">
      <HeroSection />
      
      <ProductShowcaseSection />
      <ServiceCategorySection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};
