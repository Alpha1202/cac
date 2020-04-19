import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import './style.css';

const NavLinks = () => (
  <div className="navlinks">
    <Link to={"/about"} className="links">About Us</Link>
    <Link to={"/career"} className="links">Careers</Link>
    <Link to={"/team"} className="links">Meet the team</Link>
    <Link to={"/faq"} className="links">FAQS</Link>
  </div>
)

export default NavLinks;
