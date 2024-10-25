// Router/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../page/Home"; // Example homepage component
import ProductPage from "../page/Rings"; // Import your ProductPage component
import Navbar from "../component/Navbar"; // Import your Navbar component
import CartRavindra from "../page/CartRavindra";
import TermsCondtitonRavindra from "../page/TermsCondtitonRavindra";
import PolicyRavindra from "../page/PolicyRavindra";
import PrivacyPolicy from "../component/core/PrivacyPolicy";
import AffiliateDisclosure from "../component/core/AffiliateDisclosure";
import GovernmentRegistration from "../component/core/GovernmentRegistration";
import Necklaces from "../page/Necklaces";
import Pendants from "../page/pendants";
import Braslits from "../page/Braslits";
import Earring from "../page/Earring";
import Bangles from "../page/Bangles.jsx";
import Coins from "../page/Coins.jsx";
import Footer from "../component/common/footerRavindra.jsx";
import Checkout from "../page/Checkout.jsx"
import HowWeStarted from "../component/core/HowWeStarted.jsx";
import WhyChooseUs from "../component/core/WhyChooseUs.jsx"
import QualityAssurance from "../component/core/QualityAssurance.jsx"
const AppRouter = () => {
  return (
    <div>
      <Navbar /> {/* Place your Navbar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Adjust according to your home page component */}
        <Route path="/Rings" element={<ProductPage />} />{" "}
        {/* Route for ProductPage */}
        <Route path="/cart" element={<CartRavindra />} />
        <Route
          path="/term-and-condtiton"
          element={<TermsCondtitonRavindra />}
        />
        <Route path="/policy" element={<PolicyRavindra />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Affiliate-Disclosure" element={ <AffiliateDisclosure/> } />
        <Route path="/Government-Register" element={<GovernmentRegistration/>} />
        <Route path="/Necklaces" element={<Necklaces/>} />
        <Route path="/Pendants" element={ <Pendants/> } />
        <Route path="/Braslits" element={<Braslits/>} />
        <Route path="/Bangles" element={ <Bangles/> } />
        <Route path="/Earning" element={<Earring/>} />
        <Route path="/Coins" element={<Coins/>} />
        <Route path="/Checkout" element={ <Checkout/> } />
        <Route path="/HowWeStarted" element={ <HowWeStarted/> } />
        <Route path="/WhyChooseUs" element={ <WhyChooseUs/> } />
        <Route path="/QualityAssurance" element={ <QualityAssurance/> } />
      </Routes>
        <Footer />
    </div>
  );
};

export default AppRouter;
