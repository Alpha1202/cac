
import RadioButton from '../../../../components/RadioButton';
import NewButton from "../../../../components/newButton"
import TextWIthIcon from '../../../../components/TextWIthIcon';
import { GiWallet } from 'react-icons/gi';
import "./style.css"
import React, { PureComponent } from 'react'
import NewCard from "./NewCard";
import ActivititisContainer from "./ActivititisContainer";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { RiArrowDropRightLine } from "react-icons/ri";
import DropDownButton from "../../../../components/DropDownButton";
import { propertyICon } from "../../tabs//Property/SeletedProperty"
import WithDrawalTab from "./WithDrawalTab";
import DepositTab from "./DepositTab";


class Wallet extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tab:"Deposit"
        }
    }
    cardSlider=(rightArrow,infinite=true)=>{
        return <div className="card-slider-wrapper">
                    <Carousel
                        slidesPerPage={4}
                        infinite
                        arrowRight={rightArrow && <RiArrowDropRightLine color={"lightgray"} size={"2.4rem"}/>}
                    >
                        {["red","green","blue","orange","purple"].map((item,idx)=><div className="slider-card-item" style={{"background":item}}>{item}</div>)}
                    </Carousel>
               </div>
    }
     propertyICon=(text)=>{
        return(
            <div className="propety-icon-wrapper">
                <RadioButton name={text}/>
            </div>
        )
    }
    render() {
        return (
            <div className="wallet-container">
                <div className="wallet-left-wrapper cover">
                    <div className="pad-content">
                        <div className="wallet-left-top">
                            <TextWIthIcon 
                                text={"Wallet Balance"}
                                icon={<GiWallet color={"#432d78"} size={"2rem"}/>}
                                color={"#432d78"}
                                />
                            <h1 className="money color-money">N10,000,000</h1>
                            <div className="card-slider-container">
                                <span 
                                    onClick={()=>this.setState({newCard:true })}>Add Card</span>
                                {this.cardSlider()}
                                <span>Automate Deposite</span>
                            </div>
                        </div>
                        {this.state.newCard ?<NewCard />:<ActivititisContainer />}
                    </div>
                </div>
                <div className="wallet-right-container cover">
                    <div className="pad-right-content">
                        <div className="tab-switch-container">
                            <div className="tab-switch-wrapper">
                                <div className={`${this.state.tab == "Deposit"  ? "selected-item":"unselected-item"}`} onClick={()=>this.setState({tab:"Deposit"})}>Deposit</div>
                                <div className={`${this.state.tab == "Withdrawl"  ? "selected-item":"unselected-item"}`} onClick={()=>this.setState({tab:"Withdrawl"})}>Withdrawl</div>
                            </div>
                        </div>
                        {this.state.tab == "Deposit" ?  <WithDrawalTab 
                                                        propertyICon={this.propertyICon} 
                                                />:<DepositTab tab={this.state.tab} cardSlider={this.cardSlider}/>}
                   </div>
                </div>
          </div>
        )
    }
}

export default Wallet


