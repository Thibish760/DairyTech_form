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
    
    <div className="bg-white w-full flex flex-col min-h-screen overflow-hidden">
      {/* Navigation Menu */}
      <Navbar showOnlyNav />



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

                <div className="flex gap-3">
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