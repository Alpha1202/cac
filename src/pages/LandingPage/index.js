import React, { Component } from "react";

import "./style/style.css";
import "./style/responsive.css";
import Header from "../../components/Header";
import Features from "../../components/Features";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <Header auth={false} />
      <div>
        <Main />
        <Features />
        <Footer />
      </div>
    </div>
  );
};
export default LandingPage;
