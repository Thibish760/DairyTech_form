import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage"; // or wherever your shop page is
import { BuyNowPage } from "./pages/BuyNowPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/buy" element={<BuyNowPage />} />
      </Routes>
    </BrowserRouter>
  );
}
