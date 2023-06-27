import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import OurStore from "./page/OurStore";
import Blogs from "./page/Blogs";
import ComperaProduct from "./page/ComperaProduct";
import Wishlist from "./page/Wishlist";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Forgotpassword from "./page/Forgotpassword";
import Resetpassword from "./page/Resetpassword";
import SingleBlog from "./page/SingleBlog";
import PrivacyPolicy from "./page/PrivacyPolicy";
import RefundPolicy from "./page/RefundPolicy";
import ShippingPolicy from "./page/ShippingPolicy";
import TermAndContions from "./page/TermAndContions";
import SingleProduct from "./page/SingleProduct";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<ComperaProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
