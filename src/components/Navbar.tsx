import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);
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
      {/* Desktop Navbar - shown over dark/video background when not showOnlyNav */}
      {!showOnlyNav && location.pathname === "/" && (
        <>
          {/* DESKTOP VIEW - md and larger */}
          <div className="hidden md:block absolute top-0 w-full py-4 px-6 lg:px-8 bg-transparent z-20">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
              <img src="/azhizen-logo-white.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

              <div className="flex items-center gap-6 lg:gap-8">
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

          {/* MOBILE VIEW - smaller than md */}
          <div className="md:hidden absolute top-0 w-full py-4 px-4 bg-transparent z-20">
            <div className="flex items-center justify-between px-4">
              <img src="/azhizen-logo-white.png" alt="AZHIZEN" className="h-8 w-auto" />

              {/* Hamburger menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white flex flex-col gap-1 z-30"
              >
                <span className={`h-0.5 w-6 bg-lime-400 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-lime-400 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-lime-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>

            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
              <div className="mt-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 space-y-3 mx-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      item.label === "Home" 
                        ? "text-lime-400 bg-black/50" 
                        : "text-white hover:bg-black/50 hover:text-lime-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    navigate("/shop");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-3 bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full flex items-center justify-center gap-2 transition"
                >
                  Switch to Tech
                  <span>→</span>
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Desktop Navbar shown on contact page */}
      {location.pathname === "/contact" && (
        <>
          {/* DESKTOP VIEW - md and larger */}
          <div className="hidden md:block absolute top-0 w-full py-4 px-6 lg:px-8 bg-transparent z-20">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
              <img src="/azhizen-logo-white.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

              <div className="flex items-center gap-6 lg:gap-8">
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

          {/* MOBILE VIEW - smaller than md */}
          <div className="md:hidden absolute top-0 w-full py-4 px-4 bg-transparent z-20">
            <div className="flex items-center justify-between px-4">
              <img src="/azhizen-logo-white.png" alt="AZHIZEN" className="h-8 w-auto" />

              {/* Hamburger menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white flex flex-col gap-1 z-30"
              >
                <span className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>

            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
              <div className="mt-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 space-y-3 mx-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      item.label === "Home" 
                        ? "text-lime-400 bg-black/50" 
                        : "text-white hover:bg-black/50 hover:text-lime-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    navigate("/shop");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-3 bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full flex items-center justify-center gap-2 transition"
                >
                  Switch to Tech
                  <span>→</span>
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Desktop Navbar shown on other pages or when showOnlyNav */}
      {showOnlyNav && location.pathname !== "/contact" && (
        <>
          {/* DESKTOP VIEW - md and larger */}
          <section className="hidden md:block w-full py-4 px-6 lg:px-8 bg-white">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
              <img src="/azhizen-logo-green.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

              <div className="flex items-center gap-6 lg:gap-8">
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

          {/* MOBILE VIEW - smaller than md */}
          <section className="md:hidden w-full py-4 px-4 bg-white">
            <div className="flex items-center justify-between px-4 mb-4">
              <img src="/azhizen-logo-green.png" alt="AZHIZEN" className="h-8 w-auto" />

              {/* Hamburger menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 flex flex-col gap-1 z-30"
              >
                <span className={`h-0.5 w-6 bg-lime-600 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-lime-600 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-lime-600 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>

            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-lg">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      item.label === "Home" 
                        ? "text-lime-600 bg-gray-100" 
                        : "text-gray-700 hover:bg-gray-100 hover:text-lime-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    navigate("/shop");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-3 bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full flex items-center justify-center gap-2 transition"
                >
                  Switch to Tech
                  <span>→</span>
                </button>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Navbar;
