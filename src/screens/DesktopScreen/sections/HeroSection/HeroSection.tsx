import { useNavigate, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "Service", id: "service-showcase" },
  { label: "Shop", id: "shop" },
  { label: "About us", id: "about" },
  { label: "Contact", id: "contact" },
];

interface HeroSectionProps {
  showOnlyNav?: boolean;
}

export const HeroSection = ({ showOnlyNav }: HeroSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDarkBg = isHome && !showOnlyNav;

  const handleNavigation = (sectionId: string) => {
    if (sectionId === "shop") {
      if (location.pathname !== "/shop") navigate("/shop");
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
      {/* Hero section with full video background - shows only on home page */}
      {!showOnlyNav && isHome && (
        <section className="w-full min-h-screen relative">
          <div className="w-full h-screen relative overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/cow-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Navbar overlaid on video */}
            <div className="absolute top-0 w-full py-4 px-4 md:px-6 lg:px-8 bg-transparent z-20">
              <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <img src="/azhizen-logo-white.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

                {/* Navigation Items */}
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

                {/* Switch to Tech Button */}
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full flex items-center gap-2 transition text-xs md:text-sm shadow-lg"
                >
                  Switch to Tech
                  <span className="text-base">→</span>
                </button>
              </div>
            </div>

            {/* Text content positioned at bottom */}
            <div className="absolute bottom-0 w-full p-6 md:p-8 lg:p-12 z-10">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lime-400 mb-2">
                  Farm 360
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white italic leading-relaxed">
                  It is an innovative agriculture company and agritech platform focused on transforming modern farming through sustainable practices, technology, and community support.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navbar shown on all other pages (not full screen, with background) */}
      {showOnlyNav && (
        <section className="w-full py-4 px-4 md:px-6 lg:px-8 bg-white">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
            {/* Logo */}
            <img src="/azhizen-logo-green.png" alt="AZHIZEN" className="h-8 md:h-10 lg:h-12 w-auto" />

            {/* Navigation Items */}
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

            {/* Switch to Tech Button */}
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
