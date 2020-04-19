import "./style.css"
import React, { Component } from 'react'
// import AuthHeader from "../../components/AuthHeader"
import Form from "../../components/Form"
import FormInput from "../../components/FormInput"
import { FaArrowLeft } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import NewButton from "../../components/newButton"
class AdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div className="admin-container-wrapper">
                <div className="admin-container">
                    <div className="admin-left-wrapper">
                         <div className="info-wrapper">
                            <h1>Mr Uchenna LLonze</h1>
                            <h2>UMartinz@gmail.com</h2>
                            <h2>+234906699889</h2>
                         </div>
                        <div className="left-form-wapper">
                            <Form>
                            <FormInput placeholder={"address"} />
                            <div>
                                <FormInput placeholder={"Password"} right/>
                                <FormInput placeholder={"Referral Code (Optional)"} left/>
                            </div>
                            <div>
                                <FormInput placeholder={"Salary"} right/>
                                <FormInput placeholder={"Non-Salary"} left/>
                            </div>
                                <FormInput placeholder={"BVN"} />
                                <FormInput placeholder={"DATE"} />
                            <div className="center-item">
                                <NewButton type onClick={()=>this.props.editHandler(true)}>Save</NewButton>
                            </div>
                            </Form>
                        </div>
                    </div>
                    <div className="admin-right-wrapper">
                        <div className="admin-right-card">
                            <div className="admin-right-card-top">
                                <FaArrowLeft color={"lightgray"} size={"1rem"}/>
                                <h3>My and Bank</h3>
                            </div>
                            <div className="card-slider-container" style={{"width": "100%"}}>
                                <span>add Card</span>
                                <div className="card-slider-wrapper">
                                    <Carousel
                                            slidesPerPage={3}
                                            infinite
                                            >
                                        {["red","green","blue","orange","purple"].map((item,idx)=><div className="slider-card-item" style={{"background":item}}>{item}</div>)}
                                    </Carousel>
                                </div>
                                <div className="delete-wapper center-item">
                                    <MdDelete color={"red"} size={"2rem"}/>
                                </div>
                            </div>
                            <h2>Automate savings</h2>
                            <div className="automte-saving-container">
                                <div>
                                    <span>Change Ammount</span>
                                    <div className="center-item">
                                        <FormInput placeholder={"00:00"} value={""}/>
                                    </div>
                                </div>
                                <div className="center-item duration-drop-down">
                                    <FormInput 
                                         all 
                                         dropDown 
                                         stretched
                                         placeholder={"Daily"}
                                         values={["Daily","Weekly","Monthly"]}
                                        />
                                </div>
                                </div>
                            <div className="center-item automate-button-wapper">
                                <NewButton type>Automate</NewButton>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPage
