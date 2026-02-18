import { useNavigate, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "Service", id: "service-showcase" },
  { label: "Shop", id: "shop" },
  { label: "About", id: "Aboutus" },
  { label: "Contact", id: "contact" },
];

interface NavbarProps {
  showOnlyNav?: boolean;
}

export const Navbar = ({ showOnlyNav }: NavbarProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (sectionId === "shop") {
      if (location.pathname !== "/shop") navigate("/shop");
      return;
    }
    if (sectionId === "contact") {
      if (location.pathname !== "/contact") navigate("/contact");
      return;
    }
    if (sectionId === "Aboutus") {
      if (location.pathname !== "/about") navigate("/about");
      return;
    }
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar shown over dark/video background when not showOnlyNav */}
      {!showOnlyNav && location.pathname === "/" && (
        <div className="absolute top-0 w-full py-4 px-4 md:px-6 lg:px-8 bg-transparent z-20">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
            <img src="/azhizen-logo-white.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-sm lg:text-base font-medium transition hover:opacity-80 ${
                    item.label === "Home" ? "text-lime-400" : "text-white hover:text-lime-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate("/shop")}
              className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg"
            >
              Switch to Tech
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Navbar shown on contact page - transparent with white text */}
      {location.pathname === "/contact" && (
        <div className="absolute top-0 w-full py-4 px-4 md:px-6 lg:px-8 bg-transparent z-20">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
            <img src="/azhizen-logo-white.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-sm lg:text-base font-medium transition hover:opacity-80 ${
                    item.label === "Home" ? "text-lime-400" : "text-white hover:text-lime-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate("/shop")}
              className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg"
            >
              Switch to Tech
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Navbar shown on other pages or when showOnlyNav */}
      {showOnlyNav && location.pathname !== "/contact" && (
        <section className="w-full py-4 px-4 md:px-6 lg:px-8 bg-white">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
            <img src="/azhizen-logo-green.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-sm lg:text-base font-medium transition hover:opacity-80 ${
                    item.label === "Home" ? "text-lime-600" : "text-gray-700 hover:text-lime-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate("/shop")}
              className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg"
            >
              Switch to Tech
              <span className="text-base">→</span>
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
