// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HomePage } from "./pages/HomePage";
// import { ShopPage } from "./pages/ShopPage"; // or wherever your shop page is
// import { BuyNowPage } from "./pages/BuyNowPage";
// import { ContactPage } from "./pages/ContactPage";

// export function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/shop" element={<ShopPage />} />
//         <Route path="/buy" element={<BuyNowPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage"; // or wherever your shop page is
import { BuyNowPage } from "./pages/BuyNowPage";
import { ContactPage } from "./pages/ContactPage";
import Aboutus from "./pages/About";
import { ServiceView } from "./screens/DesktopScreen/sections/ServiceOverviewSection";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/buy" element={<BuyNowPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<ServiceView />} />
      </Routes>
    </BrowserRouter>
  );
}
