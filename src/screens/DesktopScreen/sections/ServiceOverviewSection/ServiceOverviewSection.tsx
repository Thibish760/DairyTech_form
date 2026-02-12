import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "/frame-886-2.svg",
    title: "Scalable Solutions",
    description:
      "From small family dairies to large commercial farms, we offer customized solutions based on your size, budget, and goals",
  },
  {
    icon: "/frame-886.svg",
    title: "Fast Response",
    description:
      "We provide fast support and quick response to ensure uninterrupted farm operations.",
  },
  {
    icon: "/frame-886.svg",
    title: "Fast Response",
    description:
      "We provide fast support and quick response to ensure uninterrupted farm operations.",
  },
];

const socialIcons = [
  {
    src: "/ri-instagram-line.svg",
    alt: "Ri instagram line",
    className: "left-[136px]",
  },
  {
    src: "/ic-baseline-whatsapp.svg",
    alt: "Ic baseline whatsapp",
    className: "left-[200px]",
  },
  {
    src: "/ic-baseline-facebook.svg",
    alt: "Ic baseline facebook",
    className: "left-[264px]",
  },
];

const badges = [
  {
    icon: "/bitcoin-icons-verify-filled.svg",
    alt: "Bitcoin icons verify",
    title: "Approved Product",
    iconLeft: "left-[200px]",
    textLeft: "left-[140px]",
    textAlign: "whitespace-nowrap",
  },
  {
    icon: "/mingcute-safety-certificate-fill.svg",
    alt: "Mingcute safety",
    title: "Safe & Secure  Service",
    iconLeft: "left-[462px]",
    textLeft: "left-[416px]",
    textAlign: "w-[146px] text-center",
  },
  {
    icon: "/mingcute-safety-certificate-fill.svg",
    alt: "Mingcute safety",
    title: "Safe & Secure  Service",
    iconLeft: "left-[693px]",
    textLeft: "left-[647px]",
    textAlign: "w-[146px] text-center",
  },
];

export const ServiceOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[94px] px-[136px]">
      <div className="max-w-[1168px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h2 className="[font-family:'Inter',Helvetica] font-medium  text-[26px] text-justify tracking-[0] leading-[normal] mb-[30px]">
              Why is our dairy &amp; cow farm maintenance company the right choice for your farm?
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-medium text-[#605a5a] text-[20px]  text-justify tracking-[0] leading-[normal] mb-[70px]">
              Built on hands-on dairy farm experience, we understand cow health,
              hygiene, and equipment care. Our solutions are practical,
              field-tested, and focused on long-term farm success.
            </p>

            <div className="flex gap-16 mb-[110px]">
              {socialIcons.map((icon, index) => (
                <img
                  key={`social-${index}`}
                  className="w-11 h-11"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>

            <div className="flex gap-[86px]">
              {badges.map((badge, index) => (
                <div
                  key={`badge-${index}`}
                  className="flex flex-col items-center gap-3"
                >
                  <img
                    className="w-[50px] h-[50px]"
                    alt={badge.alt}
                    src={badge.icon}
                  />
                  <div className="[font-family:'Inter',Helvetica] font-semibold text-[#4e4d4d] text-xl tracking-[0] leading-[normal] text-center">
                    {badge.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[28px]">
            {featureCards.map((card, index) => (
              <Card
                key={`feature-${index}`}
                className="bg-[#c4d1d4] border-0 rounded-[10px] overflow-hidden"
              >
                <CardContent className="p-3.5 flex gap-[23px]">
                  <img
                    className="w-[94px] h-[133px] flex-shrink-0"
                    alt="Frame"
                    src={card.icon}
                  />
                  <div className="flex flex-col gap-[7px] pt-[14px]">
                    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


