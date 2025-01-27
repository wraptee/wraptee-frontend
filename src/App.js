import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./store/cartContext";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import TermsAndPolicy from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";
import Return from "./pages/Return";
import SupportPolicy from "./pages/Support";
import Cart from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import WhatsAppButton from "./components/WhatsappComponent";
import ScrollToTop from "./components/scrollToTop";


const App = () => (
  <CartProvider>
    <Router>
      <ScrollToTop />
      <Layout>
        <div className="app-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/category/all/search/:searchQuery" element={<CategoryPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:sku" element={<ProductDetailPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-policy" element={<TermsAndPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/return-policy" element={<Return />} />
            <Route path="/support-policy" element={<SupportPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Layout>

      {/* WhatsApp Button */}
      <WhatsAppButton /> {/* Add this line to display the WhatsApp button */}
    </Router>
  </CartProvider>
);

export default App;
