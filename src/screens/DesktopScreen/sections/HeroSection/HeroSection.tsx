import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", active: true, id: "home" },
  { label: "Service", active: false, id: "service-showcase" },
  { label: "Shop", active: false, id: "shop" },
  { label: "About us", active: false, id: "about" },
  { label: "Contact", active: false, id: "contact" },
];

export const HeroSection = (): JSX.Element => {
  const handleNavigation = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-4 md:py-6 lg:py-8 px-3 md:px-4">
      <div className="max-w-[1440px] mx-auto">
        <NavigationMenu className="mx-auto mb-4 md:mb-6 lg:mb-8">
          <NavigationMenuList className="flex gap-2 sm:gap-3 md:gap-5 lg:gap-8 justify-center flex-wrap">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  onClick={() => handleNavigation(item.id)}
                  className={`[font-family:'Inter',Helvetica] text-xs sm:text-sm md:text-lg lg:text-[26px] tracking-[0] leading-[normal] cursor-pointer transition-all hover:font-semibold ${
                    item.active ? "font-semibold" : "font-normal"
                  } text-black`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-full max-w-[1357px] mx-auto rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[11px] overflow-hidden bg-white">
          <img
            className="w-full h-auto object-cover"
            alt="Farm landscape with cows grazing in a pastoral setting"
            src="/image-347.png"
          />
        </div>
      </div>
    </section>
  );
};
