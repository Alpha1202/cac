import React from 'react';
import TextIconVertical from '../../../../components/TextWithIconVertical';
import Header from './Header';
import NewButton  from '../../../../components/newButton';
import { IoIosHome,
    IoMdBatteryCharging,
    MdLocationOn,
    FaRoad,
    FaRegMap} from "react-icons/all";
import RadioButton from '../../../../components/RadioButton';

function rowText(text1,text2){
    return(
        <div className="row-wrapper">
            <div>{text1}</div>
            <span>{text2}</span>
        </div>
    )
}

function propertyICon(text){
    return(
        <div className="propety-icon-wrapper">
            <RadioButton name={text}/>
        </div>
    )
}

function SeletedProperty() {
    return (
        <div className="selected-property-container">
            <Header selected={false} />
            <div className="selected-property-wrapper">
                <div className="image-wrapper">
                    <div>the image</div>
                </div>
                <div className="property-information-container">
                    <div className="poperty-infomation-left-wapper">
                        <div className="price-plot-wrapper">
                            <h1>900,000</h1>
                            <span>per plot</span> 
                        </div>
                        <div className="text-icon-container">
                            <TextIconVertical icon={<FaRoad color={"#afe65f"} size={"2rem"} />} text={"testing"}/>   
                            <TextIconVertical icon={<FaRegMap color={"#afe65f"} size={"2rem"} />} text={"testing"}/>   
                            <TextIconVertical icon={<MdLocationOn color={"#afe65f"} size={"2rem"} />} text={"testing"}/>   
                            <TextIconVertical icon={<IoIosHome color={"#afe65f"} size={"2rem"} />} text={"testing"}/>   
                            <TextIconVertical icon={<IoMdBatteryCharging color={"#afe65f"} size={"2rem"} />} text={"testing"}/>   
                        </div>
                        <div className="property-vault-info">
                            {rowText("Number of Plot",4)}
                            {rowText("Location","Orchild Road")}
                            {rowText("Title","CofO")}
                        </div>
                    </div>
                    <div className="poperty-infomation-right-wapper">
                        <div>
                            <div>Curate payment time</div>
                            <div>What would you like to do with the propety after purchase</div>
                        </div>
                        <div>
                            {propertyICon("Reinvest the property")}
                            {propertyICon("Sell the property")}
                            {propertyICon("Rent/Lease the property")}
                        </div>
                    </div>
                </div>
            </div> 
            <div className="bottom">
                <span>locate me on map</span>
                <NewButton type>Acquire</NewButton >
            </div>    
        </div>
    )
}

export default SeletedProperty;
