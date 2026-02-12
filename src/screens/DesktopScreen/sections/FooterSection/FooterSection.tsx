export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { label: "Home" },
    { label: "Shop" },
    { label: "Mobile App" },
    { label: "Review" },
    { label: "Helpline" },
  ];

  const products = [
    { label: "Basic Package" },
    { label: "Milk Testing Package" },
    { label: "Stm32 Controller" },
    { label: "Sensor System" },
  ];

  const contactInfo = [
    {
      icon: "/ic-sharp-call.svg",
      text: "91+9998887776",
    },
    {
      icon: "/material-symbols-light-mail-outline-rounded.svg",
      text: "Azhizensolutions@gmail.com",
    },
    {
      icon: "/bytesize-location.svg",
      text: "R-no:309, Mercury Block Ksrce, Tiruchengode, Namakkal, Tamil Nadu",
    },
  ];

  return (
    <footer className="w-full bg-black py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1463px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h2 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-[18px] sm:text-[22px] md:text-[25.4px] tracking-[0] leading-[normal]">
              AZHIZEN SOLUTION
            </h2>
            <p className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] max-w-[271px]">
              Easemilker Is An Automated Smart Milking System That Ensures
              Hygienic, Efficient, And Stress-free Milking For Cows.
            </p>
            <img
              className="w-[200px] sm:w-[230px] md:w-[260px] h-6 sm:h-6.5 md:h-7"
              alt="Social media icons"
              src="/group-82.png"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h3 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-[16px] sm:text-[18px] md:text-[20.3px] tracking-[0] leading-[normal]">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={`quick-link-${index}`}
                  href="#"
                  className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h3 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-[16px] sm:text-[18px] md:text-[20.3px] tracking-[0] leading-[normal]">
              Products
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {products.map((product, index) => (
                <a
                  key={`product-${index}`}
                  href="#"
                  className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] hover:text-white transition-colors"
                >
                  {product.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-[20.3px] tracking-[0] leading-[normal]">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={`contact-${index}`}
                  className="flex gap-3 items-start"
                >
                  <img
                    className="w-[18px] h-[18px] mt-0.5 flex-shrink-0"
                    alt="Contact icon"
                    src={contact.icon}
                  />
                  <span className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal]">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-6"></div>

        <div className="text-center">
          <p className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-[13.2px] tracking-[0] leading-[normal]">
            @Easemilker Copy Rights
          </p>
        </div>
      </div>
    </footer>
  );
};
