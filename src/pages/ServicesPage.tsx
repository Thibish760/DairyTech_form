import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { services } from "../lib/services";
import { useState, useMemo } from "react";
import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { Navbar } from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  { id: "farm-management", label: "Farm Management", value: "Farm Management" },
  { id: "cow-food", label: "Cow Food", value: "Cow Food" },
  { id: "cow-service", label: "Cow Service", value: "Cow Service" },
  { id: "waste-management", label: "Waste Management", value: "Waste Management" },
];

export const ServicesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get initial category from location state
  const initialCategory = location.state?.category || "Farm Management";
  const [selectedCategory, setSelectedCategory] = useState(
    categories.find(cat => cat.value === initialCategory)?.id || "farm-management"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    const activeCategory = categories.find(cat => cat.id === selectedCategory);

    if (!activeCategory) {
      return [];
    }

    let filtered = services.filter(service => service.category === activeCategory.value);
    
    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const activeCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="bg-white py-3 w-full min-h-screen flex flex-col">
      {/* show only the navbar from the homepage hero */}

      <Navbar  />

      {/* Hero Banner */}
      <div className="w-full h-full  max-w-[1400px] max-h-[2000px] mx-auto rounded-[11px] md:h-80 bg-cover bg-center" 
           style={{ backgroundImage: "url('/farm-banner.png')" }}>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64">
            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8dc201] transition"
              />
            </div>

            {/* Service Categories - Shop Style */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Service Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => {
                  const count = services.filter(s => s.category === category.value).length;
                  return (
                    <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 accent-[#8dc201]"
                      />
                      <span className="text-sm">{category.label}</span>
                      <span className="text-xs text-gray-500 ml-auto">{count}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter Button */}
            <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
              Show less
            </button>
          </div>

          {/* Services Grid */}
          <div className="flex-1">
            {/* Header */}
           

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredServices && filteredServices.length > 0 ? (
                filteredServices.map((service) => (
              <AnimatePresence mode="wait">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={`${selectedCategory}-${service.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                      <CardContent className="p-0">
                        <div className="relative h-[200px] overflow-hidden">
                          <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt={service.title}
                            src={service.image}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-4">
                          <h4 className="font-inter font-semibold text-black mb-1 line-clamp-1">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => {
                                window.scrollTo(0, 0);
                                navigate('/service', { state: { service } });
                              }}
                              variant="ghost"
                              className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-xs font-medium rounded-lg"
                            >
                              View
                            </Button>
                            <Button
                              onClick={() => navigate('/enquiry', { state: { service } })}
                              className="flex-1 h-8 bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium rounded-lg"
                            >
                              Enquire
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-base">
                    {searchQuery ? "No services found matching your search" : "No services found for this category"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
