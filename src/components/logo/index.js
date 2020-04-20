import React, { Component } from "react";

import "./style.css";
import logo from "../../static/purple.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img className="logoImg" src={logo} alt="cache.ng" />
      </Link>
    </div>
  );
};

export default Logo;
