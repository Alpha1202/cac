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
      <div className="row ml-2 main">
        {/* <div className="col-md-6 main-left mb-4"> */}
        <div className="col-md-6 mb-4">
          <div className="left-wrap">
            <div>
              <h2 className="desc">
                <strong>Save and invest</strong> in <br />
                long term wealth through
                <br /> property ownership
              </h2>
              <p className="pitch">
                Cache is an easy-to-use app that helps you build long-term
                wealth by allowing you save with a goal in mind - becoming a
                property owner
              </p>
            </div>
            <div className="create-new-account-wrapper">
              <NewButton type={false} onClick={() => changeRedirect(true)}>
                Create a Free Account
              </NewButton>
            </div>
            <div className="social-wrapper">
              <Link to={"/google.com"} className="stores">
                <img src={google} alt="Google play store" />
              </Link>
              <Link to={"/apple.com"} className="stores">
                <img src={ios} alt="Ios store" />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="col-md-6 main-right"> */}
        <div className="col-md-6">
          <img
            className="image"
            src={illustrationImage}
            alt="cache illustration"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
