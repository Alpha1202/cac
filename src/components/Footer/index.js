import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
// import logo from '../../static/logo.png';
import Logo from "../logo";

function Footer() {
  return (
    // <footer className="footer">
    <footer className="row footer-container">
      <div className="col-md-6 company-details">
        <div>
          <div className="footer-logo-container mb-4">
            <Logo />
          </div>
          <div className="footer-links">
            <Link to="/">
              <p>Sign up to our Newsletter</p>
            </Link>
            <Link to="/">
              <p>Terms of use</p>
            </Link>
            <Link to="/">
              <p>Privacy policy</p>
            </Link>
          </div>
        </div>
        <div className="quick-links">
          <div className="mt-4">
            <h5 className="wrapper1-col-2-bold">Quick Links</h5>
            <Link>
              <p>About us</p>
            </Link>
            <Link to="/">
              <p>Careers</p>
            </Link>
            <Link to="/">
              <p>Meet the team</p>
            </Link>
            <Link to="/">
              <p>FAQs</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-6 company-details company-det">
        <div className="footer-address mt-4">
          <div className="">
            <h5 className="wrapper1-col-2-bold">Address</h5>
            <Link>
              <p>13 Glover road</p>
            </Link>
            <Link to="/">
              <p>Ikoyi, Lagos,</p>
            </Link>
            <Link to="/">
              <p>Nigeria</p>
            </Link>
            <Link to="/">
              <p></p>
            </Link>
          </div>
        </div>
        <div className="mt-4 footer-contact">
          <div className="wrapper2-icons mb-3">
            <div>
              <FontAwesomeIcon className="mr-2" icon={["fab", "facebook-f"]} />
              <FontAwesomeIcon className="mr-2" icon={["fab", "twitter"]} />
              <FontAwesomeIcon className="mr-2" icon={["fab", "instagram"]} />
              <FontAwesomeIcon
                className="footer-icon"
                icon={["fab", "youtube"]}
              />
            </div>
          </div>
          <div>
            <FontAwesomeIcon className="mr-1" icon="envelope" />
            <span>info@cache.ng</span>
          </div>
          <div>
            <FontAwesomeIcon className="mr-1" icon={["fab", "whatsapp"]} />

            <span>+234 867 000 0000</span>
          </div>
        </div>
      </div>
      {/* <div className="wrapper2">
          <div className='wrapper2-icons'>
          <ul class="social-icons">
              <li><Link to='/' className="facebook"><i className="fa fa-facebook"></i></Link></li>
              <li><Link to='/' className="twitter"><i className="fa fa-twitter"></i></Link></li>
              <li><Link to='/' className="dribbble"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link to='/' className="linkedin"><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
          </div>
          <div></div>
          <div></div>
      </div> */}
      {/* <div class="container">
        <div class="">
          <div class="footer-column">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>
          <div class="footer-column ">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://127.0.0.0.1/about/">About Us</a></li>
              <li><a href="http://127.0.0.0.1/contact/">Contact Us</a></li>
              <li><a href="http://127.0.0.0.1/faq/">FaQ</a></li>
              <li><a href="http://127.0.0.0.1/signup/">Create an account</a></li>
              <li><a href="http://127.0.0.0.1/login/">Login</a></li>
            </ul>
          </div>
          <div class="footer-column ">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://127.0.0.0.1/about/">About Us</a></li>
              <li><a href="http://127.0.0.0.1/contact/">Contact Us</a></li>
              <li><a href="http://127.0.0.0.1/faq/">FaQ</a></li>
              <li><a href="http://127.0.0.0.1/signup/">Create an account</a></li>
              <li><a href="http://127.0.0.0.1/login/">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class=" footer-bottom">
          <div class=" ">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
              <a href="#">Scanfcode</a>.
            </p>
          </div>
          <div class=" ">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
