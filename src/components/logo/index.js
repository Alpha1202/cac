import React, { Component } from "react";

import "./style.css";
import footerLogo from "../../static/purple.png";
import headerLogo from "../../static/logo.png";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const { footer } = props;
  return (
    <div className="logo">
      <Link to={"/"}>
        <img
          className="logoImg"
          src={footer ? footerLogo : headerLogo}
          alt="cache.ng"
        />
      </Link>
    </div>
  );
};

export default Logo;
