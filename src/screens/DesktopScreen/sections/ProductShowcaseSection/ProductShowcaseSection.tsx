import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const categories = [
  { id: "farm-management", label: "Farm Management" },
  { id: "cow-food", label: "Cow Food" },
  { id: "cow-service", label: "Cow Service" },
  { id: "waste-management", label: "Waste Management" },
];

const services = [
  {
    id: 1,
    title: "Constructing Farm House",
    description: "Building The Complete Far House In Large Scale",
    image: "/image-352.png",
    imageClass: "top-0 left-0 w-[276px] h-[267px]",
    titleClass: "left-[11px]",
  },
  {
    id: 2,
    title: "Cleaning Farm House",
    description: "Building The Complete Far House In Large Scale",
    image: "/image-351.png",
    imageClass: "top-0 left-0 w-[274px] h-[282px]",
    titleClass: "left-3.5",
  },
  {
    id: 3,
    title: "Maintaining Farm House",
    description: "Building The Complete Far House In Large Scale",
    image: "/image-353.png",
    imageClass: "top-0 left-0 w-[276px] h-[267px]",
    titleClass: "left-[15px]",
  },
  {
    id: 4,
    title: "Constructing Farm House",
    description: "Building The Complete Far House In Large Scale",
    image: "/image-349.png",
    imageClass: "top-9 left-0 w-[276px] h-[185px]",
    titleClass: "left-[11px]",
  },
];

export const ProductShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="[font-family:'Inter',Helvetica] font-bold text-[#ff860e] text-xl mb-4">
            Service Category
          </p>
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[40px]">
            Service That We Provide
          </h2>
        </div>

        <div className="relative mb-32">
          <div className="relative w-full h-[838px] bg-white">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Farm background"
              src="/image-348.png"
            />

            <img
              className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-[1109px] h-[150px]"
              alt="Rectangle overlay"
              src="/rectangle-483.svg"
            />

            <div className="absolute top-9 left-1/2 -translate-x-1/2 w-full max-w-[922px]">
              <Tabs defaultValue="farm-management" className="w-full">
                <TabsList className="grid w-full grid-cols-4 gap-4 bg-transparent h-auto p-0">
                  {categories.map((category, index) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className={`h-[69px] rounded-[10px] border border-solid data-[state=active]:bg-white data-[state=active]:border-[#2874f0] data-[state=inactive]:bg-[#c4d1d48f] data-[state=inactive]:border-[#999999] [font-family:'Inter',Helvetica] font-medium text-black text-xl`}
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="[font-family:'Inter',Helvetica] font-semibold text-black text-3xl text-left">
            List Of Farm Maintence Service
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="relative w-full h-[282px] bg-[#f9fef8] rounded-[14.6px] overflow-hidden shadow-[0px_3.24px_3.24px_#00000040] border-0"
            >
              <CardContent className="p-0 relative w-full h-full">
                <img
                  className={`absolute ${service.imageClass} object-cover`}
                  alt={service.title}
                  src={service.image}
                />

                <div className="absolute inset-0 rounded-[14.6px] overflow-hidden shadow-[0px_3.24px_3.24px_#00000040] backdrop-blur-[1.62px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.62px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(102,102,102,0)_0%,rgba(30,30,30,0)_70%,rgba(0,0,0,1)_100%)]">
                  <div className="absolute bottom-[41px] left-[11px] right-[11px] flex gap-2">
                    <Button
                      variant="ghost"
                      className="h-[26px] px-4 bg-[#d9d9d954] rounded-[24.34px] hover:bg-[#d9d9d970] [font-family:'Inter',Helvetica] font-medium text-white text-[11.4px]"
                    >
                      View
                    </Button>
                    <Button
                      variant="default"
                      className="h-[26px] flex-1 bg-white hover:bg-gray-100 rounded-[24.34px] [font-family:'Inter',Helvetica] font-medium text-black text-[11.4px]"
                    >
                      Book Now
                    </Button>
                  </div>

                  <h4
                    className={`absolute top-[206px] ${service.titleClass} [font-family:'Inter',Helvetica] font-semibold text-white text-[13px]`}
                  >
                    {service.title}
                  </h4>

                  <p className="absolute top-[221px] left-3 w-[299px] [font-family:'Inter',Helvetica] font-normal text-[#ececec] text-[9.7px]">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
