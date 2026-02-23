import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { services } from "../../../../lib/services";
import { useEffect } from "react";


const categories = [
  { id: "farm-management", label: "Farm Management" },
  { id: "cow-food", label: "Cow Food" },
  { id: "cow-service", label: "Cow Service" },
  { id: "waste-management", label: "Waste Management" },
];

export const ServiceCategorySection = (): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="service-showcase" className="w-full bg-white relative overflow-hidden">
      <div className="w-full"> 
      
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-8 md:mb-12 px-3 sm:px-4 max-w-[1400px] mx-auto">
          <p className="font-inter font-bold text-[#ff860e] text-xs sm:text-sm md:text-xl mb-1">
            Service Category
          </p>
          <h2 className="font-inter font-bold text-black text-lg sm:text-2xl md:text-[40px] leading-tight">
            Service That We Provide
          </h2>
        </div>

        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[750px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Farm background"
            src="/image-348p.png"
          />

          {/* Fixed Category Bar: Matches your second design image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w- px-2 sm:px-0">
            <div className="bg-white rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[50px] px-3 sm:px-6 md:px-12 pb-3 sm:pb-6 md:pb-10 pt-2 sm:pt-4 shadow-xl flex flex-col items-center max-w-[95%] sm:max-w-none mx-auto">
              
              <Tabs defaultValue="farm-management" className="w-full">
                {/* Scrollable on mobile, centered on desktop */}
                  <TabsList className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-2 sm:gap-3 md:gap-6 bg-transparent h-auto w-full py-1 sm:py-2">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="whitespace-normal md:whitespace-nowrap min-w-0 md:min-w-[220px] h-[36px] sm:h-[45px] md:h-[65px] rounded-[8px] md:rounded-[10px] border border-[#999999] bg-[#e6ecef] data-[state=active]:bg-white data-[state=active]:border-[#2874f0] data-[state=active]:text-[#2874f0] font-inter font-semibold text-black text-[8px] sm:text-xs md:text-lg transition-all shadow-sm"
                      >
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Services List Section */}
          <div className="relative z-20 pt-[120px] sm:pt-[160px] md:pt-[250px] px-2 sm:px-4 flex flex-col items-center max-w-[1400px] mx-auto">
            <div className="mb-6 sm:mb-10 md:mb-16 w-full border-l- border-[#ff860e] pl-2 sm:pl-4">
              <h3 className="font-inter font-semibold text-white text-sm sm:text-lg md:text-3xl border-l-4 border-[#ff860e] pl-3 sm:pl-4 drop-shadow-md inline-block">
                List Of Farm Maintenance Service
              </h3>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[1300px] mx-auto px-2 sm:px-4 pb-0 py-2 sm:py-3 md:py-5">

              {services.slice(0, 4).map((service) => (
                <Card
                  key={service.id}
                  className="relative w-full h-[160px] sm:h-[200px] md:h-[280px] bg-white rounded-[10px] sm:rounded-[15px] overflow-hidden shadow-2xl border-0 group"
                >
                  <CardContent className="p-0 relative w-full h-full">
                    <img
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={service.title}
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2 sm:p-3 md:p-5">
                      <h4 className="font-inter font-semibold text-white text-xs sm:text-sm md:text-lg mb-0.5 sm:mb-1">
                        {service.title}
                      </h4>
                      <p className="font-inter font-normal text-gray-200 text-[10px] sm:text-xs md:text-xs mb-2 sm:mb-4 line-clamp-1 sm:line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex gap-1.5 sm:gap-2">
                        <Button 
                          onClick={() => {
                            window.scrollTo(0, 0);
                            navigate('/service', { state: { service } });
                          }}
                          variant="ghost" 
                          className="h-6 sm:h-8 md:h-9 px-2 sm:px-3 md:px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-[9px] sm:text-[10px] md:text-xs border border-white/20">
                          View
                        </Button>
                        <Button 
                          onClick={() => navigate('/enquiry', { state: { service } })}
                          className="h-6 sm:h-8 md:h-9 flex-1 bg-white hover:bg-gray-100 rounded-full text-black text-[9px] sm:text-[10px] md:text-xs font-bold cursor-pointer">
                          Let's Talk
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
