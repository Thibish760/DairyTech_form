import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const products = [
  {
    image: "/image-304.png",
    imageClasses: "mt-[7px] w-[226px] h-[258px] ml-[49px]",
    title: "150 LPM PUMP",
    titleClasses:
      "[font-family:'Inter',Helvetica] font-semibold text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap",
    description:
      "Comes With A Reliable Pulsator System, Durable Liners, And 240 Cc Claw For Smooth Milking. Ideal For Small To Medium Dairy Farms, Ensuring Comfort For Animals And Better Milk Flow",
    price: "₹25000",
    priceExtra: null,
  },
  {
    image: "/image-304-1.png",
    imageClasses: "mt-4 w-[309px] h-[275px] ml-4 object-cover",
    title: "FIXED SINGLE BUCKET MILKING MACHINE",
    titleClasses:
      "[font-family:'Inter',Helvetica] font-semibold text-black text-[15.5px] text-center tracking-[0] leading-[normal]",
    description:
      "Comes With A Reliable Pulsator System, Durable Liners, And 240 Cc Claw For Smooth Milking. Ideal For Small To Medium Dairy Farms, Ensuring Comfort For Animals And Better Milk Flow",
    price: "₹25000",
    priceExtra: null,
  },
  {
    image: "/image-313.png",
    imageClasses: "mt-[25px] w-[284px] h-[266px] ml-5 object-cover",
    title: "450 LPM VACCUM PUMP",
    titleClasses:
      "[font-family:'Inter',Helvetica] font-semibold text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap",
    description:
      "Comes With A Reliable Pulsator System, Durable Liners, And 240 Cc Claw For Smooth Milking. Ideal For Small To Medium Dairy Farms, Ensuring Comfort For Animals And Better Milk Flow",
    price: "₹7000",
    priceExtra: "+ GST",
  },
];

export const ProductShowcaseSection = (): JSX.Element => {
  const handleNavigate = () => {
    const element = document.getElementById('service-showcase');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="shop" className="w-full py-8 sm:py-12 md:py-16 bg-[#c4e2ff] relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-9 md:mb-12 px-3 sm:px-5">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg sm:text-2xl md:text-3xl tracking-[0] leading-[normal] w-full text-right-center">
            Product
          </h2>
          <button onClick={handleNavigate} className="p-2 sm:p-3 md:p-4 bg-[#032a4a] hover:bg-[#032a4a]/80 rounded-full transition-all duration-300 flex items-center justify-center flex-shrink-0">
            <ChevronRightIcon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-9 max-w-[100%] px-3 sm:px-4 md:px-6 mx-auto">          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
            >
              <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
                <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
                  <img
                    className={product.imageClasses}
                    alt={product.title}
                    src={product.image}
                  />
                </div>

                <h3 className={`${product.titleClasses} text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px]`}>
                  {product.title}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
                    {product.price}
                    {product.priceExtra && (
                      <>
                        <br />
                        <span className="text-[9px] sm:text-[10px] md:text-xs">{product.priceExtra}</span>
                      </>
                    )}
                  </div>

                  <Button className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
