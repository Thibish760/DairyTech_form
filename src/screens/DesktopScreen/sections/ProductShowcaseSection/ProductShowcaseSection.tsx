import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { products } from "../../../../lib/products";

export const ProductShowcaseSection = (): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <section id="shop" className="w-full py-8 sm:py-12 md:py-16 bg-[#c4e2ff]  relative mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-9 md:mb-12 px-3 sm:px-5">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg sm:text-2xl md:text-3xl tracking-[0] leading-[normal] w-full text-right-center">
            Product
          </h2>
          <button onClick={() => navigate('/shop')} className="p-2 sm:p-3 md:p-4 bg-[#032a4a] hover:bg-[#032a4a]/80 rounded-full transition-all duration-300 flex items-center justify-center flex-shrink-0">
            <ChevronRightIcon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-9 max-w-[100%] px-3 sm:px-4 md:px-6 mx-auto">          {products.slice(0, 3).map((product) => (
            <Card
              key={product.id}
              className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
            >
              <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
                <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
                  <img
                    className="w-full h-full object-contain"
                    alt={product.name}
                    src={product.image}
                  />
                </div>

                <h3 className="text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px] font-semibold text-center">
                  {product.name}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
                    {product.price}
                  </div>

                  <Button 
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/buy?id=${product.id}`);
                    }} 
                    className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8 cursor-pointer">
                    View
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

