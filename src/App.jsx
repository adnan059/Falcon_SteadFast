import React from "react";
import "./assets/styles/App.css";
import Header from "./components/myComponents/header/Header";
import Footer from "./components/myComponents/footer/Footer";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeRedirect from "./components/myComponents/homeRedirect/HomeRedirect";
import CartPage from "./pages/CartPage";
import SubHeader from "./components/myComponents/header/SubHeader";
import BreadCrumbHeader from "./components/myComponents/header/BreadCrumbHeader";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeader />
        <BreadCrumbHeader />
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
