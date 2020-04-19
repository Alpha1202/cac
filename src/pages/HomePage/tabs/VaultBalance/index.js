import React, { PureComponent } from 'react'
import TextWIthIcon from '../../../../components/TextWIthIcon'
import NewButton from '../../../../components/newButton/'
import MaturedCard from './MaturedCard'
import MaturedCards from './MaturedCards'
import CurentlyLocked from './CurentlyLocked'
import "./style/style.css"
import "./style/responsive.css"
import CurentlyLockeds from './CurentlyLockeds'
import VaultIcon from "../../../../static/icons/selected/VAULT P.png"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import FormInput from '../../../../components/FormInput'
import RadioButton from '../../../../components/RadioButton'
const imgStyle = {"width":"1rem"};
class VaultBalance extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tab:true 
        }
    }

    render() {
        return (
            <div className="vault-balance-container">
                <div className="vault-balancer-left-wrapper cover">
                    <div className="icon-text-wrapper">
                        <TextWIthIcon icon={<img src={VaultIcon} style={imgStyle}/>} text={"Vault Balance"}/> 
                    </div>
                    <h1>N 9,216,316.40</h1>
                    <div className="vault-balancer-left-wrapper-bottom">
                        <div className="left-tab-container">
                            <div className="left-tab-wrapper">
                                <h3 onClick={()=>this.setState({leftTab:false})} className={!this.state.leftTab ? "selected-vault-tab":"unselected-vault-tab"}>Curently Locked</h3>
                                <h3 onClick={()=>this.setState({leftTab:true})} className={this.state.leftTab ? "selected-vault-tab":"unselected-vault-tab"}>Matured</h3>
                            </div>
                        </div>
                        {!this.state.leftTab ? <MaturedCards />:<CurentlyLockeds />}
                    </div>
                </div>
                <div className="vault-balancer-right-wrapper cover">
                    <h1 className="pad-element">Create new Vault</h1>
                    <div className="new-vault-days-input">
                        <FormInput
                            all 
                            dropDown 
                            placeholder={"30 Days"}
                            values={["30 Days","1 Year","5 years"]}
                        />
                        <span>5% Per Annum</span>
                    </div>
                    <div className="pad-element add-temp-border">
                        <FormInput placeholder={"100"} value={""}/>
                    </div>
                    <div className="new-vault-field-containers">
                        <FormInput small placeholder={"Vault"} value={""}/>
                        <FormInput small placeholder={"Release Date"} value={""}/>
                    </div>
                    <div className="card-wallet-wrapper">
                        <div className="card-wallet-top">
                            <RadioButton name={"Transfer"} />
                            <RadioButton name={"Wallet"} />
                        </div>
                        <div className="card-slider-container" style={{"width": "100%"}}>
                            <div className="card-slider-wrapper">
                            <Carousel
                                    slidesPerPage={3}
                                    infinite
                                    >
                                {["red","green","blue","orange","purple"].map((item,idx)=><div className="slider-card-item" style={{"background":item}}>{item}</div>)}
                            </Carousel>
                            </div>
                        </div> 
                    </div>
                    <NewButton type>lock</NewButton>
                </div>
            </div>
        )
    }
}

export default VaultBalance