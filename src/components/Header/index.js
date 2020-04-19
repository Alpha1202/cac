import React, { useState } from 'react';
import Logo from '../logo';
import NavLinks from '../navLinks';
import { Redirect } from 'react-router-dom';
import NewButton from '../newButton';
import "./style/style.css"
import "./style/responsive.css"
import BackDrop from '../BackDrop';

 

function Header(props) {
    const [redirect, changeRedirect] = useState(false);
    const [route, changeRoute] = useState("/");
    return (
        <React.Fragment>
            {redirect && (route == "/signup") &&  <Redirect to="/signup" />}
            {redirect && (route == "/signin") &&  <Redirect to="/signin" />}
            <div className="navbar">
                <div className="navbar-left">
                    <Logo />
                    <NavLinks />
                </div>
                {
                    !props.auth && (
                        <div className="navbar-right">
                            <div className="btnContainer">
                                <NewButton type={false} onClick={()=>{
                                    changeRedirect(true);
                                    changeRoute("/signin");
                                }}>Sign In</NewButton>
                                <NewButton type onClick={()=>{
                                    changeRedirect(true);
                                    changeRoute("/signup");
                                }}>Create A Free Account</NewButton>
                            </div>
                        </div>
                    )
                }
                <div className="sm-backdrop">
                    <BackDrop color>
                        <NavLinks />
                    </BackDrop>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;
