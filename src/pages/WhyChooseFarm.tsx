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
      "We provide fast support and quick response to ensure uninterrupted farm to operations.",
  },
  {
    icon: "/frame-886.svg",
    title: "Fast Response",
    description:
      "We provide fast support and quick response to ensure uninterrupted farm operations.",
  },
];

const socialIcons = [
  { src: "/ri-instagram-line.svg", alt: "Instagram", label: "Instagram" },
  { src: "/ic-baseline-whatsapp.svg", alt: "WhatsApp", label: "WhatsApp" },
  { src: "/ic-baseline-facebook.svg", alt: "Facebook", label: "Facebook" },
];

const badges = [
  {
    icon: "/bitcoin-icons-verify-filled.svg",
    alt: "Verified",
    title: "Approved Product",
  },
  {
    icon: "/mingcute-safety-certificate-fill.svg",
    alt: "Safe",
    title: "Safe & Secure Service",
  },
  {
    icon: "/mingcute-safety-certificate-fill.svg",
    alt: "Secure",
    title: "Safe & Secure Service",
  },
];

export const WhyChooseFarm = (): JSX.Element => {
  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16">

          {/* LEFT COLUMN */}
          <div className="flex flex-col">

            {/* Heading + Text */}
            <div className="mb-12">
              <h1 className="font-['Inter'] font-bold text-black text-[34px] leading-[1.2] mb-5 max-w-[520px]">
                Why is our dairy & cow farm maintenance company the right choice
                for your farm?
              </h1>

              <p className="font-['Inter'] font-medium text-[#605a5a] text-[17px] leading-[1.6] max-w-[520px]">
                Built on hands-on dairy farm experience, we understand cow
                health, hygiene, and equipment care. Our solutions are
                practical, field-tested, and focused on long-term farm success.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-12">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-6 h-6 hover:scale-110 transition"
                >
                  <img
                    className="w-full h-full object-contain"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </a>
              ))}
            </div>

            {/* Badges */}
            <div className="flex justify-start gap-8">
              {badges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8">
                    <img
                      className="w-full h-full object-contain"
                      alt={badge.alt}
                      src={badge.icon}
                    />
                  </div>

                  <p className="font-['Inter'] font-medium text-[#4e4d4d] text-[13px] text-center max-w-[110px]">
                    {badge.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - CARDS */}
          <div className="flex flex-col gap-6">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#c4d1d4] rounded-xl flex gap-5 p-[22px]"
              >
                {/* Icon Box */}
                <div className="bg-white rounded-[10px] w-[64px] h-[64px] flex items-center justify-center flex-shrink-0">
                  <img
                    className="w-[38px] h-[38px] object-contain"
                    alt={card.title}
                    src={card.icon}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Inter'] font-semibold text-black text-[17px]">
                    {card.title}
                  </h3>

                  <p className="font-['Inter'] text-black text-[14px] leading-[1.45] max-w-[340px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
