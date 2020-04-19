import React from 'react';
import FormInput from '../../components/FormInput';
import Form from '../../components/Form';
import NewButton from '../../components/newButton';


function Main() {
    return (
        <div className="sign-up-main-container">
            <div className="left-wrapper-sign-up">
                <h1>let's get to know you</h1>
                <span>Create an account</span>
                <div className="sign-up-with-google">
                    <span>Create with Google</span>
                    <span>G</span>
                </div>
            </div>
            <div className="right-wrapper-sign-up">
                <div className="sign-up-form-wrapper">
                    <Form>
                        <div>
                            <FormInput left dropDown placeholder={"gg"} values={["Mr","Mrs","Miss"]}/>
                            <FormInput left placeholder={"g"} />
                        </div>
                        <FormInput placeholder={"Surname"}/>
                        <FormInput placeholder={"Email"}/>
                        <FormInput placeholder={"Phone Number"}/>
                        <div>
                            <FormInput right placeholder={"Password"}/>
                            <FormInput left placeholder={"Referal Code (optional)"}/>
                        </div>
                        <div>
                            <FormInput right placeholder={"Salary"}/>
                            <FormInput left placeholder={"Non-Salary"}/>
                        </div>
                        <span>
                            By creating your account your agreeing to the 
                            <span>Terms of Service</span>
                        </span>
                        <div className="sign-up-button-container">
                            <NewButton type >Create Account</NewButton>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Main;
