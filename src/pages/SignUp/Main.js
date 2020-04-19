import React from 'react';
import FormInput from '../../components/FormInput';
import Form from '../../components/Form';
import NewButton from '../../components/newButton';
import {withRouter} from 'react-router'

function Main(props) {
    return (
        <div className="sign-in-main-container">
            <div className="left-wrapper-sign-in">
                <h1>let's get to know you</h1>
                <span>Create an account</span>
                <div className="sign-in-with-google">
                    <span>Create with Google</span>
                    <span>G</span>
                </div>
            </div>
            <div className="right-wrapper-sign-in">
                <div className="sign-in-form-wrapper">
                    <Form>
                        <FormInput placeholder={"Email"}/>
                        <FormInput placeholder={"Phone Number"}/>
                        <div className="sign-in-button-container">
                            <NewButton type onClick={(e)=>{
                                e.preventDefault();
                                console.log(props);
                                let tempAuthenticationToken = { auth: true }
                                localStorage.setItem("auth",JSON.stringify(tempAuthenticationToken))
                                props.history.push("/home?tab=dashboard")
                            }}>Create Account</NewButton>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Main);