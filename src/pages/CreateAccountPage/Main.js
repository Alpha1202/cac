import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../../components/FormInput";
import Form from "../../components/Form";
import NewButton from "../../components/newButton";

import illustrationImage from "../../static/web.png";

function Main() {
  return (
    <div className="row sign-up-main-container">
      <div className="col-md-6 position-unset left-wrapper-sign-up">
        <img
          className="image"
          src={illustrationImage}
          alt="cache illustration"
        />
        <h1>let's get to know you</h1>
        <span>Create an account</span>
        <div className="sign-up-with-google">
          <span>Create with Google</span>
          <span>
            <FontAwesomeIcon className="mr-2" icon={["fab", "google"]} />
          </span>
        </div>
      </div>
      <div className="col-md-6 mt-5 position-unset right-wrapper-sign-up">
        <div className="sign-up-form-wrapper">
          <Form>
            <div class="signup-input-container">
              <FormInput
                left
                dropDown
                placeholder={"gg"}
                values={["Mr", "Mrs", "Miss"]}
              />
              <FormInput left placeholder={"g"} />
            </div>
            <FormInput placeholder={"Surname"} />
            <FormInput placeholder={"Email"} />
            <FormInput placeholder={"Phone Number"} />
            <div class="signup-input-container">
              <FormInput right placeholder={"Password"} />
              <FormInput left placeholder={"Referal Code (optional)"} />
            </div>
            <div class="signup-input-container">
              <FormInput right placeholder={"Salary"} />
              <FormInput left placeholder={"Non-Salary"} />
            </div>
            <span>
              By creating your account your agreeing to the
              <span>Terms of Service</span>
            </span>
            <div className="sign-up-button-container mt-5">
              <NewButton type>Create Account</NewButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Main;
