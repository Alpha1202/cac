import React, { Component } from 'react'
import "./style.css"
import FormInput from '../../../../components/FormInput'
import Form from '../../../../components/Form'
import NewButton from '../../../../components/newButton'
import Slider from "./Slider"
class Vault extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div className="vault-container">
                <div className="vault-left-wrapper">
                    <h1>How much do you need  ?</h1>
                    <span>For how long do you need it</span>
                </div>
                <div className="vault-right-wrapper">
                    <div className="valut-form-wrapper">
                        <h1>N250,00</h1>
                        <Form>
                            <Slider />
                            <h3>90 Days</h3>
                            <Slider />
                            <div className="vault-form-input-wapper">
                                <FormInput left dropDown placeholder={"payment"} values={["Yearly payment","Monthly payment","Weekly payment","Daily Payment"]}/>
                                <FormInput right dropDown placeholder={"ammount"} values={["5,000","10,000","25,000","30,000"]}/>
                            </div>
                            <div className="valut-form-button">
                                <NewButton type>Apply</NewButton>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vault
