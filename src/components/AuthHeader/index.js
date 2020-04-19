import React,{useState} from 'react';
import "./styles.css"

import { MdPerson } from 'react-icons/md';
import Logo from "../../static/auth-header-logo.jpg"
import BackDrop from "../BackDrop"
import BackDropItem  from './BackDrop';
function AuthHeader() {
    return (
        <header className="auth-header">
            <div className="left">
                <div className="left-container">
                    <div className="logo">
                        <a href="/">
                            <img style={{"width":"2rem"}} src={Logo} alt="cache-home"/>
                        </a>
                    </div>
                    <nav className="nav">
                        <ul>
                            {["About Us","Career","Meet the team","FAQs"].map((item,idx)=><li key={idx}><a href="/">{item}</a></li>)}  
                        </ul>
                    </nav>
                </div>            
            </div>
            <div className="right">
                <div classnName="right-container">
                    <div>
                        <MdPerson color={"#48327c"} size={"2.1rem"}/>
                    </div>
                    <BackDrop>
                        <BackDropItem />
                    </BackDrop>            
                </div>
            </div>
        </header>
    )
}
export default AuthHeader;