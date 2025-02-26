import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LandingLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
