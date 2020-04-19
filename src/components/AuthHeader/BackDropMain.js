import React from 'react'
import { FaArrowRight, FaAcquisitionsIncorporated } from 'react-icons/fa'
import { MdRadioButtonChecked } from 'react-icons/md'
import {withRouter} from "react-router"
import BackDropCardItemSub from './BackDropCardItemSub'
import BackDropCardItemSwitch from './BackDropCardItemSwitch'
import Button from "../button"
import NewButton from '../newButton'


function BackDropMain(props) {
    return (
            <div className="backdrop-wrapper">
                <div className="backdop-left-wrapper">
                    <div className="backdop-left-wrapper-text">
                        <h1>Mr Uchenna iLonze</h1>
                        <h3>Umartinz@gmail.com</h3>
                        <h3>+2348104105847</h3>
                        <span onClick={()=>props.editHandler(true)}>edit</span>
                    </div>
                    <NewButton
                        type
                        onClick={(e)=>{
                            e.preventDefault();
                            console.log(props);
                            let tempDeleteAuthenticationToken = { auth: false }
                            localStorage.setItem("auth",JSON.stringify(tempDeleteAuthenticationToken))
                            props.history.push("/signin")
                        }} 
                        >sign out</NewButton>
                </div>
                <div className="backdrop-right-wrapper">
                    <div className="backdrop-right-card-wrapper  animation">
                        <BackDropCardItemSub  />
                        <BackDropCardItemSwitch  />
                        <BackDropCardItemSub  />
                        <BackDropCardItemSwitch  />
                        <BackDropCardItemSwitch  />
                        <BackDropCardItemSub  />
                    </div>
                </div>
            </div>

    )
}


export default withRouter(BackDropMain)