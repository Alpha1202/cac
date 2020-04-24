import React, { useState } from "react";
import google from "../../static/social/google.png";
import ios from "../../static/social/ios.png";
import illustrationImage from "../../static/web.png";
import { Link, Redirect } from "react-router-dom";
import NewButton from "../newButton";

function Main(props) {
  const [redirect, changeRedirect] = useState(false);
  return (
    <React.Fragment>
      {redirect && <Redirect to="/signup" />}
      <div className="main">
       <div className='main-wrapper container-fluid'>
        <div className="col-md-6 homepage-banner">
          <div className="left-wrap">
            <div className='left-wrap-text'>
              <h2 className="desc">
                <strong>Save and invest</strong> in <br />
                long term wealth through
                <br /> property ownership
              </h2>
              <h2 className="desc-sm">
                Save  &amp; invest in 
                long-term wealth through
                property ownership
              </h2>
              <p className="pitch">
                Cache is an easy-to-use app that helps you build long-term
                wealth <br /> by allowing you save with a goal in mind - becoming a
                property owner
              </p>
            </div>
            <div className='left-wrap-btn'>
            <div className="create-new-account-wrapper">
              <NewButton type={false} onClick={() => changeRedirect(true)}>
                Create a Free Account
              </NewButton>
            </div>
            <div className="create-new-account-wrapper-sm">
              <NewButton type onClick={() => changeRedirect(true)}>
                Create a Free Account
              </NewButton>
            </div>
            
            <div className="social-wrapper">
              <Link to={"/google.com"} className="stores">
                <img src={google} alt="Google play store" />
              </Link>
              <Link to={"/apple.com"} className="stores float-right">
                <img src={ios} alt="Ios store" />
              </Link>
            </div>
           
            </div>
          </div>
        </div>
       
        <div className="homepage-illustration ">
          <img
            className="mx-auto landing-page-image img-fluid"
            src={illustrationImage}
            alt="cache illustration"
          />
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
