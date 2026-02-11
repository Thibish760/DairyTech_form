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

export const ServiceCategorySection = (): JSX.Element => {
  const handleNavigate = () => {
    const element = document.getElementById('service-showcase');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="shop" className="w-full py-16 bg-[#c4e2ff] relative ">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[normal]">
            Product
          </h2>
          <button onClick={handleNavigate} className="p-4 bg-[#032a4a] hover:bg-[#032a4a]/80 rounded-full transition-all duration-300 flex items-center justify-center">
            <ChevronRightIcon className="w-8 h-8 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1150px] mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
            >
              <CardContent className="p-[13px] flex flex-col h-full">
                <div className="w-full h-[291px] flex bg-[#c4d1d48f] rounded-[10px] overflow-hidden mb-[20px]">
                  <img
                    className={product.imageClasses}
                    alt={product.title}
                    src={product.image}
                  />
                </div>

                <h3 className={`${product.titleClasses} mb-[5px] px-[2px]`}>
                  {product.title}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-xs tracking-[0] leading-[normal] mb-auto">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-[10px]">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-black text-base tracking-[0] leading-[normal]">
                    {product.price}
                    {product.priceExtra && (
                      <>
                        <br />
                        <span className="text-xs">{product.priceExtra}</span>
                      </>
                    )}
                  </div>

                  <Button className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-base rounded-[5px] h-[35px] px-8">
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
