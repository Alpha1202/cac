import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Form from "../../components/Form";

import illustrationImage from "../../static/web.png";
import NewButton from "../../components/newButton";
import { withRouter } from "react-router";

function Main(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="row sign-in-main-container">
      <div className="col-md-6 left-wrapper-sign-in">
        <img
          className="image"
          src={illustrationImage}
          alt="cache illustration"
        />
        <h1>Welcome back</h1>
        <span>Sign in to continue</span>
        {/* <div className="sign-in-with-google">
          <span>Create with Google</span>
          <span>G</span>
        </div> */}
      </div>
      <div className="col-md-6 right-wrapper-sign-in mt-4">
        <div className="sign-in-form-wrapper">
          <Form>
            <FormInput placeholder={"Email"} />
            <div className="row password-container">
              <FormInput placeholder={"Password"} password={!showPassword} />
              <FontAwesomeIcon
                onClick={handleShowPassword}
                className="see-password-icon"
                icon={!showPassword ? "eye-slash" : "eye"}
              />
            </div>
            <div className="forget-password-container">
              <Link className="forget-password" to="/">
                forgot password?
              </Link>{" "}
            </div>

            <div className="sign-in-button-container">
              <NewButton
                type
                onClick={(e) => {
                  e.preventDefault();
                  console.log(props);
                  let tempAuthenticationToken = { auth: true };
                  localStorage.setItem(
                    "auth",
                    JSON.stringify(tempAuthenticationToken)
                  );
                  props.history.push("/home?tab=dashboard");
                }}
              >
                Create Account
              </NewButton>
            </div>
            <p className="primary-color">
              New here ?
              <Link className="ml-1 primary-color" to="/signup">
                create an account >
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Main);
