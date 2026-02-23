import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";

interface FormData {
  name: string;
  phone: string;
  location: string;
  state: string;
  city: string;
  pincode: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  location?: string;
  state?: string;
  city?: string;
  pincode?: string;
  message?: string;
}

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

const EnquiryForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    location: "",
    state: "",
    city: "",
    pincode: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter a valid 10-digit number";
    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Enter valid 6-digit pincode";
    if (!form.message.trim()) newErrors.message = "Requirement message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSend = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert(
      `Form submitted!\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nState: ${form.state}\nCity: ${form.city}\nPincode: ${form.pincode}\nMessage: ${form.message}`
    );
  };

  const inputBase =
    "w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition";
  const inputError = "border-red-400 bg-red-50";
  const inputNormal = "border-gray-200";

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Navbar showOnlyNav />

      {/* Main */}
      <main className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">

          {/* Left: Form Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1">

            {/* Support Banner inside form card */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <p className="text-xs text-gray-500">
                If You Have Any Troubles Please Contact Ur Support
              </p>
              <p className="text-xs font-semibold text-gray-500 ml-3 whitespace-nowrap">
                987456321
              </p>
            </div>

            <h2 className="text-base font-semibold text-gray-800 mb-5">General Information</h2>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </span>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit phone number"
                  maxLength={10}
                  className={`${inputBase} pl-9 ${errors.phone ? inputError : inputNormal}`}
                />
              </div>
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Location */}
            <div className="mb-3">
              <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
                Location <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                </span>
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Enter your street / area"
                  className={`${inputBase} pl-9 ${errors.location ? inputError : inputNormal}`}
                />
              </div>
              {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
            </div>

            {/* State / City / Pincode */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {/* State */}
              <div>
                <label htmlFor="state" className="block text-xs text-gray-500 mb-1">
                  State <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className={`w-full appearance-none border rounded-lg px-3 py-2.5 text-sm text-gray-600 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition cursor-pointer ${
                      errors.state ? inputError : inputNormal
                    }`}
                  >
                    <option value="">State</option>
                    {STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-xs text-gray-500 mb-1">
                  City <span className="text-red-400">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className={`${inputBase} ${errors.city ? inputError : inputNormal}`}
                />
                {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
              </div>

              {/* Pincode */}
              <div>
                <label htmlFor="pincode" className="block text-xs text-gray-500 mb-1">
                  Pincode <span className="text-red-400">*</span>
                </label>
                <input
                  id="pincode"
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  maxLength={6}
                  className={`${inputBase} ${errors.pincode ? inputError : inputNormal}`}
                />
                {errors.pincode && <p className="text-red-400 text-xs mt-1">{errors.pincode}</p>}
              </div>
            </div>

            {/* Requirement Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
                Requirement Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Example: I have 20 Cows, so provide me a Quotation for the requirement. My Number 91234563201"
                value={form.message}
                onChange={handleChange}
                className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Send Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSend}
                className="bg-lime-300 hover:bg-lime-400 active:scale-95 text-black font-semibold text-sm px-10 py-2.5 rounded-lg transition-all duration-150 shadow-sm"
              >
                Send
              </button>
            </div>
          </div>

          {/* Right: Order Summary Card */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              {/* Product Image */}
              <div className="rounded-lg overflow-hidden mb-3 border-2 border-blue-400">
                <img
                  src="image-359.png"
                  alt="Construction Building"
                  className="w-full h-36 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=400&q=80";
                  }}
                />
              </div>

              {/* Title & Price */}
              <p className="text-xs font-semibold text-gray-700 mb-0.5">
                Construction Building for Sale
              </p>
              {/* ✅ Changed from text-green-600 to text-lime-400 (light green) */}
              <p className="text-sm font-bold text-lime-400 mb-3">₹2,00,000</p>

              <hr className="border-dashed border-gray-200 mb-3" />

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Amount</span>
                  <span className="text-gray-800">₹2,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Charge</span>
                  <span className="text-gray-800">₹0</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-gray-800">10%</span>
                </div>
                <div className="flex justify-between font-semibold text-sm text-gray-800 pt-1 border-t border-gray-100 mt-1">
                  <span>Total</span>
                  <span>₹1,80,000</span>
                </div>
              </div>

              {/* Edit Order Button */}
              <button className="w-full bg-lime-300 hover:bg-lime-400 text-black text-sm font-medium py-2 rounded-lg active:scale-95 transition-all duration-150">
                Edit Order
              </button>
            </div>
          </div>

        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default EnquiryForm;