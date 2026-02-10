import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", active: true },
  { label: "Service", active: false },
  { label: "Shop", active: false },
  { label: "About us", active: false },
  { label: "Contact", active: false },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-8 px-4">
      <div className="max-w-[1440px] mx-auto">
        <NavigationMenu className="mx-auto mb-8">
          <NavigationMenuList className="flex gap-8 justify-center">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`[font-family:'Inter',Helvetica] text-[26px] tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer transition-all hover:font-semibold ${
                    item.active ? "font-semibold" : "font-normal"
                  } text-black`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-full max-w-[1357px] mx-auto rounded-[11px] overflow-hidden bg-white">
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
