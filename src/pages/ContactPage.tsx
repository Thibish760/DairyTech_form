import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const ContactPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactDetail: "",
    message: "",
  });

  
  const socialLinks = [

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

  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/enquiries/submit-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message Sent!");
      setFormData({ firstName: "", lastName: "", email: "", contactDetail: "", message: "" });
    }
  } catch (err) {
    console.error("Error connecting to backend", err);
  }
};

  return (
    <>
    
     <div className="bg-white py- w-full min-h-screen flex flex-col">

      <Navbar  />
     
    


      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[520px] w-full">
          <img
            src="/Untitled design (3).png"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* green overlay */}
          <div className="absolute inset-0 bg-[#5a6f1a]/60" />

          {/* white angle */}
          <div
            className="absolute bottom-0 left-0 w-full h-[220px] bg-white"
            style={{
              clipPath: "polygon(0 78%, 100% 40%, 100% 100%, 0% 100%)",
            }}
          />
        </div>

        {/* FLOAT CARD */}
        <div className="relative z-10 max-w-[1200px] mx-auto -mt-[260px] px-4 pb-16">
          <div className="bg-white rounded-[28px] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

            {/* LEFT */}
            <div className="md:w-1/2 w-full p-10 bg-[#eef3ff]">
              <h2 className="font-bold text-[28px] text-black mb-3">
                Get in Touch
              </h2>

              <p className="text-sm text-[#555] mb-8 max-w-[360px] leading-relaxed">
                Whether you have a question, enquiry, or project idea, our team
                is ready to assist you.
              </p>

              <div className="space-y-7">
                {/* office */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8dc201] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="black" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Head Office</h4>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Tiruchengode, Namakkal,<br />Tamil Nadu.
                    </p>
                  </div>
                </div>

                {/* email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8dc201] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="black" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Email Us</h4>
                    <p className="text-sm text-[#555]">
                      Azhizen@Azhizen.Com
                    </p>
                  </div>
                </div>

                {/* phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8dc201] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="black" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Call Us</h4>
                    <p className="text-sm text-[#555]">
                      Phone: +91 9685741230
                    </p>
                  </div>
                </div>
              </div>

              {/* socials */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-sm mb-4">
                  Follow Our Social Media
                </h4>

                {/* <div className="flex gap-3">
                  {[
                    "/ic-baseline-whatsapp.svg",
                    "/ic-baseline-facebook.svg",
                    "/ri-instagram-line.svg",
                  ].map((icon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
                    >
                      <img src={icon} className="w-5 h-5 invert" alt="" />
                    </div>
                  ))}
                </div> */}
                            <div className="flex gap- ">
                {socialLinks.map((social) => (
                    <a 
                        key={social.label}
                        href={social.href}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className=" transition-all w-10 h-10 transform "
                        title={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:w-1/2 w-full p-10 bg-white">
              <h2 className="font-bold text-[28px] mb-8 text-black">
                Send us a message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium text-sm text-black block mb-2">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      placeholder="Enter Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#eef3ff] border-0 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8dc201]/20"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm text-black block mb-2">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      placeholder="Enter Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#eef3ff] border-0 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8dc201]/20"
                    />
                  </div>
                </div>

                {/* row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium text-sm text-black block mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Your Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#eef3ff] border-0 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8dc201]/20"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm text-black block mb-2">
                      Contact Detail
                    </label>
                    <input
                      name="contactDetail"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={formData.contactDetail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#eef3ff] border-0 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8dc201]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm text-black block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter Your Querys"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className="w-full px-4 py-3 rounded-lg bg-[#eef3ff] border-0 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8dc201]/20 resize-none"
                  />
                </div>

                <div className="flex justify-end mt-2">
                  <button onClick-={handleSubmit}
                    type="submit"
                    className="bg-[#8dc201] text-black px-10 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#7ab001] transition-colors"
                  >
                    Send a message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="w-full">
        <div className="w-full h-[520px]">
          <iframe
            src="https://www.google.com/maps?q=319%20Mercury%20Block%20KSRCE%20Neo%20Tiruchengode%20637215&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            title="Location Map"
          />
        </div>
      </section>

      <FooterSection />
    </div>
    </>
  );
};