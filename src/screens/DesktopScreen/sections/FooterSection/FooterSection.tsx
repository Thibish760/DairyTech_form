// import { useNavigate, useLocation } from "react-router-dom";

// interface FooterSectionProps {
//   onNavigateToShop?: () => void;
// }

// export const FooterSection = ({  }: FooterSectionProps): JSX.Element => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const quickLinks = [
//   { label: "Home", id: "home" },
//   { label: "Service", id: "service-showcase" },
//   { label: "Shop", id: "shop" },
//   { label: "About", id: "Aboutus" },
//   { label: "Contact", id: "contact" },
//   ];

//   const handleNavigation = (sectionId: string) => {
//     if (sectionId === "shop") {
//       if (location.pathname !== "/shop") navigate("/shop");
//       return;
//     }

//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: sectionId } });
//       return;
//     }

//     if (sectionId === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const element = document.getElementById(sectionId);
//       element?.scrollIntoView({ behavior: "smooth" });
//     }
//   };


//   const products = [
//     { label: "Basic Package" },
//     { label: "Milk Testing Package" },
//     { label: "Stm32 Controller" },
//     { label: "Sensor System" },
//   ];

//   const contactInfo = [
//     {
//       icon: "/ic-sharp-call.svg",
//       text: "91+9998887776",
//     },
//     {
//       icon: "/material-symbols-light-mail-outline-rounded.svg",
//       text: "Azhizensolutions@gmail.com",
//     },
//     {
//       icon: "/bytesize-location.svg",
//       text: "R-no:309, Mercury Block Ksrce, Tiruchengode, Namakkal, Tamil Nadu",
//     },
//   ];

//   return (
//     <footer id="contact" className="w-full bg-black py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
//       <div className="max-w-[1463px] mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
//           <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
//             <h2 className="font-sans font-bold text-white text-[18px] sm:text-[22px] md:text-[25.4px] tracking-[0] leading-[normal]">
//               AZHIZEN SOLUTION
//             </h2>
//             <p className="font-sans font-normal text-white text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] max-w-[271px]">
//               Easemilker Is An Automated Smart Milking System That Ensures
//               Hygienic, Efficient, And Stress-free Milking For Cows.
//             </p>
//             <img
//               className="w-[200px] sm:w-[230px] md:w-[260px] h-6 sm:h-6.5 md:h-7"
//               alt="Social media icons"
//               src="/group-82.png"
//             />
//           </div>

//           <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
//             <h3 className="font-sans font-bold text-white text-[16px] sm:text-[18px] md:text-[20.3px] tracking-[0] leading-[normal]">
//               Quick Links
//             </h3>
//             <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
//               {quickLinks.map((link) => (
//                 <button
//                   key={`quick-link-${link.id}`}
//                   onClick={() => handleNavigation(link.id)}
//                   className="text-left font-sans font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] hover:text-white transition-colors cursor-pointer"
//                 >
//                   {link.label}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
//             <h3 className="font-sans font-bold text-white text-[16px] sm:text-[18px] md:text-[20.3px] tracking-[0] leading-[normal]">
//               Products
//             </h3>
//             <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
//               {products.map((product, index) => (
//                 <a
//                   key={`product-${index}`}
//                   href="#"
//                   className="font-sans font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] hover:text-white transition-colors"
//                 >
//                   {product.label}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           <div className="flex flex-col gap-6">
//             <h3 className="font-sans font-bold text-white text-[20.3px] tracking-[0] leading-[normal]">
//               Contact Info
//             </h3>
//             <div className="flex flex-col gap-4">
//               {contactInfo.map((contact, index) => (
//                 <div
//                   key={`contact-${index}`}
//                   className="flex gap-3 items-start"
//                 >
//                   <img
//                     className="w-[18px] h-[18px] mt-0.5 flex-shrink-0"
//                     alt="Contact icon"
//                     src={contact.icon}
//                   />
//                   <span className="font-sans font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal]">
//                     {contact.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="w-full h-px bg-white/20 mb-6"></div>

//         <div className="text-center">
//           <p className="font-sans font-normal text-white text-[13.2px] tracking-[0] leading-[normal]">
//             @Easemilker Copy Rights
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

import { useNavigate, useLocation} from "react-router-dom";
import { useState } from "react";

interface FooterSectionProps {
  onNavigateToShop?: () => void;
}

export const FooterSection = ({}: FooterSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Service", id: "service-showcase" },
    { label: "Shop", id: "shop" },
    { label: "About", id: "Aboutus" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { 
        label: "Facebook", 
        href: "https://www.facebook.com/share/181RVfh2RT/", 
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
        )
    },
    { 
        label: "Instagram", 
        href: "https://www.instagram.com/azhizen_solutions?igsh=YTQ1cTdheTFjM3py", 
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        )
    },
    { 
        label: "LinkedIn", 
        href: "https://www.linkedin.com/company/azhizensolutions/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BgZBPbqFIQF2enzqXzYoNPw%3D%3D", 
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        )
    },
    { 
        label: "WhatsApp", 
        href: "https://wa.me/91+9750603988", 
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
        )
    },
    { 
        label: "YouTube", 
        href: "http://www.youtube.com/@azhizensolutions", 
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        )
    },
  ];

  const handleNavigation = (sectionId: string, path?: string) => {
    setMobileMenuOpen(false);
    if (path) {
      if (location.pathname !== path) navigate(path);
      return;
    }
    if (sectionId === "shop") { navigate("/shop"); return; }
    if (sectionId === "contact") { navigate("/contact"); return; }
    if (sectionId === "Aboutus") { navigate("/about"); return; }
    
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
  const products = [
    { label: "Basic Package" },
    { label: "Milk Testing Package" },
    { label: "Stm32 Controller" },
    { label: "Sensor System" },
  ];

  const contactInfo = [
    {
      icon: "/ic-sharp-call.svg",
      text: "91+9750603988",
    },
    {
      icon: "/material-symbols-light-mail-outline-rounded.svg",
      text: "azhizensolutions@gmail.com",
    },
    {
      icon: "/bytesize-location.svg",
      text: "R-no:309, Mercury Block Ksrce, Tiruchengode, Namakkal, Tamil Nadu",
    },
  ];

  return (
    <footer id="contact" className="w-full bg-black py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1463px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
          {/* Brand Info & Social Icons */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h2 className="font-sans font-bold text-white text-[18px] sm:text-[22px] md:text-[25.4px] tracking-[0] leading-[normal]">
              AZHIZEN SOLUTION
            </h2>
            <p className="font-sans font-normal text-white text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] max-w-[271px]">
              Easemilker Is An Automated Smart Milking System That Ensures
              Hygienic, Efficient, And Stress-free Milking For Cows.
            </p>
            
            {/* Social Media Link Icons */}
            <div className="flex gap-4 w-[70rem] items-center ">
                {socialLinks.map((social) => (
                    <a 
                        key={social.label}
                        href={social.href}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#ddd3ba]   transition-all w-9 h-9 transform "
                        title={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h3 className="font-sans font-bold text-white text-[16px] sm:text-[18px] md:text-[20.3px] tracking-[0] leading-[normal]">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {quickLinks.map((link) => (
                <button
                  key={`quick-link-${link.id}`}
                  onClick={() => handleNavigation(link.id)}
                  className="text-left font-sans font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h3 className="font-sans font-bold text-white text-[16px] sm:text-[18px] md:text-[20.3px] tracking-[0] leading-[normal]">
              Products
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {products.map((product, index) => (
                <a
                  key={`product-${index}`}
                  href="#"
                  className="font-sans font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal] hover:text-white transition-colors"
                >
                  {product.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-sans font-bold text-white text-[20.3px] tracking-[0] leading-[normal]">
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
                  <span className="font-sans font-normal text-[#ddd3ba] text-[11px] sm:text-[12px] md:text-[13.2px] tracking-[0] leading-[normal]">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-6"></div>

        <div className="text-center">
          <p className="font-sans font-normal text-white text-[13.2px] tracking-[0] leading-[normal]">
            © 2026 Azhizen Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};